import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetGameByIdQuery } from "../../store/api/games.api";
import Button from "@mui/material/Button";
import { IGame, IGameById, IGameByIdScreenshot } from "../../types/games.types";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import Slider from "../../components/Slider/Slider";
import { useSearchParams } from "react-router-dom";
import { useGameData } from "../../hooks/useGameData";
import { isGamesData } from "../../utils/setGameToLocalStorage";

interface IError {
  status: number;
  status_message: string;
}

interface ILocalStorageData {
  data: IGameById;
  timestamp: number;
}

const GamePage: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const gameId: string | null = searchParams.get("id");

  const [gameData, setGameData] = useState<undefined | IGameById>(undefined);
  const { hookGameData, isGameCached, isGameInTime, isLocalstorageData } = useGameData(gameId);

  useEffect(() => {
    console.log(hookGameData);

    if (hookGameData) {
      setGameData(hookGameData);
    }
  }, [hookGameData]);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const cacheTimer = 5 * 60 * 1000;
    const localStorageJSON: string | null = localStorage.getItem("cachedGames");
    const localStorageData: ILocalStorageData[] = localStorageJSON && JSON.parse(localStorageJSON);
    const setGamesDataFromServerToLocal = () =>
      localStorage.setItem(
        "cachedGames",
        JSON.stringify([{ data: serverData, timestamp: currentTime }])
      );
    const addGameToLocalGamesData = () =>
      localStorage.setItem(
        "cachedGames",
        JSON.stringify([...localStorageData, { data: serverData, timestamp: currentTime }])
      );
    const isGamesData = isLocalstorageData;
    const gameData = localStorageData?.find((item) => item.data.id === 1);

    const checkTime = (gameData: any, validation: number): boolean =>
      currentTime - gameData.timestamp < validation;

    if (serverData && gameId) {
      setGameData(serverData);

      if (gameData) {
        const isValidTime = checkTime(gameData, cacheTimer);
        let res = false;
        isValidTime ? setGameData(gameData.data) : (res = true);
        return res;
      } else {
        setGamesDataFromServerToLocal();
      }

      const {
        data: serverData,
        isLoading,
        isError,
        error,
      } = useGetGameByIdQuery(gameId || "", {
        skip: isGameInTime && isGameCached,
      });

      // if(!isGamesData) {
      //   setGamesDataFromServerToLocal()
      // }
      if (isGamesData && !isGameCached) {
        addGameToLocalGamesData;
      }
      if (!isGameInTime && localStorageData) {
        const cachedGame: ILocalStorageData | undefined =
          localStorageData && localStorageData.find((item) => item.data.id === +gameId);
        if (cachedGame) {
          cachedGame.timestamp = currentTime;
        }
        const newLocalStorageJSON = JSON.stringify([...localStorageData, cachedGame]);
        localStorage.setItem("cachedGames", newLocalStorageJSON);
      }
    }
  }, []);

  const notFoundMessage = "Данные не найдены";
  const isMinSysReqValid =
    gameData && gameData.minimum_system_requirements
      ? Object.values(gameData.minimum_system_requirements).every(
          (value) => value !== null && value !== undefined
        )
      : false;

  return (
    <div>
      <Button onClick={() => navigate("/")} variant="outlined">
        Back
      </Button>
      {isError && `Произошла ошибка при получении данных (${(error as IError)?.status})`}

      {isLoading
        ? "-----Loading-----"
        : gameData && (
            <div
              style={{
                padding: "20px",
                fontFamily: "Arial, sans-serif",
                maxWidth: "1200px",
                display: "flex",
                // flexWrap: 'wrap',
                gap: "20px",
                alignItems: "start",
              }}
            >
              <Slider
                slides={gameData.screenshots}
                style={{ borderRadius: "10px", maxWidth: "60%" }}
              />
              <Card
                style={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  maxWidth: "400px",
                  minWidth: "300px",
                }}
              >
                <CardMedia
                  component="img"
                  image={gameData.thumbnail}
                  alt={gameData.title}
                  style={{ maxWidth: "100%", marginBottom: "10px" }}
                />
                <CardContent>
                  <Typography
                    sx={{ color: "text.primary", fontSize: "30px", fontWeight: "400" }}
                    variant="h1"
                  >
                    {gameData.title ? gameData.title : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "10px" }} variant="subtitle1" color="text.secondary">
                    Дата релиза: {gameData.release_date ? gameData.release_date : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "5px" }} variant="subtitle1" color="text.secondary">
                    Издатель: {gameData.publisher ? gameData.publisher : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "5px" }} variant="subtitle1" color="text.secondary">
                    Разработчик: {gameData.developer ? gameData.developer : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "5px" }} variant="subtitle1" color="text.secondary">
                    Жанр: {gameData.genre ? gameData.genre : notFoundMessage}
                  </Typography>

                  <h2 style={{ fontSize: "20px", fontWeight: "normal", marginTop: "20px" }}>
                    Минимальные системные требования
                  </h2>
                  {gameData.minimum_system_requirements && isMinSysReqValid ? (
                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                      <li style={{ margin: 0 }}>
                        <Typography
                          color="text.primary"
                          mt="10px"
                          variant="h3"
                          style={{ fontSize: "16px" }}
                        >
                          Операционная система:
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {gameData.minimum_system_requirements.os
                            ? gameData.minimum_system_requirements.os
                            : notFoundMessage}
                        </Typography>
                      </li>
                      <li style={{ margin: 0 }}>
                        <Typography
                          color="text.primary"
                          mt="10px"
                          variant="h3"
                          style={{ fontSize: "16px" }}
                        >
                          Процессор:
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {gameData.minimum_system_requirements.processor
                            ? gameData.minimum_system_requirements.processor
                            : notFoundMessage}
                        </Typography>
                      </li>
                      <li style={{ margin: 0 }}>
                        <Typography
                          color="text.primary"
                          mt="10px"
                          variant="h3"
                          style={{ fontSize: "16px" }}
                        >
                          Память:
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {gameData.minimum_system_requirements.memory
                            ? gameData.minimum_system_requirements.memory
                            : notFoundMessage}
                        </Typography>
                      </li>
                      <li style={{ margin: 0 }}>
                        <Typography
                          color="text.primary"
                          mt="10px"
                          variant="h3"
                          style={{ fontSize: "16px" }}
                        >
                          Графический процессор:
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {gameData.minimum_system_requirements.graphics
                            ? gameData.minimum_system_requirements.graphics
                            : notFoundMessage}
                        </Typography>
                      </li>
                      <li style={{ margin: 0 }}>
                        <Typography
                          color="text.primary"
                          mt="10px"
                          variant="h3"
                          style={{ fontSize: "16px" }}
                        >
                          Хранилище:
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {gameData.minimum_system_requirements.storage &&
                          gameData.minimum_system_requirements.storage.length > 1
                            ? gameData.minimum_system_requirements.storage
                            : notFoundMessage}
                        </Typography>
                      </li>
                    </ul>
                  ) : (
                    <Typography variant="subtitle1" color="text.secondary">
                      {notFoundMessage}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
    </div>
  );
};

export default GamePage;
