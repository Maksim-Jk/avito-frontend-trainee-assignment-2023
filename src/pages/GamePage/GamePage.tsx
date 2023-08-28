import { FC, useEffect, useState } from "react";
import { useGetGameByIdQuery } from "../../store/api/games.api";
import { IGameById } from "../../types/games.types";
import { Card, CardMedia, Typography, CardContent, Box, Alert } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { updateGamesInLocalStorage } from "../../utils/localStorageUtils";
import { useLocalStorageGameData } from "../../hooks/useLocalStorageGameData";
import Slider from "../../components/Slider/Slider";
import SliderSkeleton from "../../components/Slider/SliderSkeleton";

interface IError {
  status: number;
  status_message: string;
}

const GamePage: FC = () => {
  const [searchParams] = useSearchParams();
  const gameId: string = searchParams.get("id") || "";
  const { openedGames, cachedGameData, shouldFetch } = useLocalStorageGameData(gameId);
  const notFoundMessage = "Данные не найдены";

  const {
    data: gameData,
    isLoading,
    isError,
    error,
  } = useGetGameByIdQuery(gameId || "", {
    skip: !shouldFetch,
  });

  const [gameState, setGameState] = useState(cachedGameData || gameData);


  useEffect(() => {
    if (!isLoading) {
        const data: IGameById | null = gameData ? gameData : cachedGameData;
        data && updateGamesInLocalStorage(openedGames, gameId, data);
      setGameState(gameData || cachedGameData || undefined);
    }
  }, [gameData, cachedGameData]);


  const isMinSysReqValid =
    gameState && gameState.minimum_system_requirements
      ? Object.values(gameState.minimum_system_requirements).every(
          (value) => value !== null && value !== undefined
        )
      : false;

  return (
    <Box mt={"20px"}>
      {isError && (
        <Alert severity="error" sx={{ borderRadius: "10px" }}>
          Не удалось загрузить данные ({(error as IError)?.status})
        </Alert>
      )}

      {isLoading
        ? "-----Loading-----"
        : gameState && (
            <Box
              sx={{
                fontFamily: "Arial, sans-serif",
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                gap: "20px",
                alignItems: "start",
                justifyContent: "space-between",
              }}
            >
              <Slider slides={gameState.screenshots} />
              <Card
                sx={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: { xs: "column", md: "column" },
                  borderRadius: "10px",
                  width: { xs: "100%", md: "40%" },
                  minWidth: "400px",
                }}
              >
                <CardMedia
                  component="img"
                  image={gameState.thumbnail}
                  alt={gameState.title}
                  style={{ maxWidth: "100%", marginBottom: "10px" }}
                />
                <CardContent>
                  <Typography
                    sx={{ color: "text.primary", fontSize: "30px", fontWeight: "400" }}
                    variant="h1"
                  >
                    {gameState.title ? gameState.title : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "10px" }} variant="subtitle1" color="text.secondary">
                    Дата релиза: {gameState.release_date ? gameState.release_date : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "5px" }} variant="subtitle1" color="text.secondary">
                    Издатель: {gameState.publisher ? gameState.publisher : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "5px" }} variant="subtitle1" color="text.secondary">
                    Разработчик: {gameState.developer ? gameState.developer : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "5px" }} variant="subtitle1" color="text.secondary">
                    Жанр: {gameState.genre ? gameState.genre : notFoundMessage}
                  </Typography>

                  <Typography component="h2" sx={{ fontSize: "20px", marginTop: "20px" }}>
                    Минимальные системные требования
                  </Typography>
                  {gameState.minimum_system_requirements && isMinSysReqValid ? (
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
                          {gameState.minimum_system_requirements.os
                            ? gameState.minimum_system_requirements.os
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
                          {gameState.minimum_system_requirements.processor
                            ? gameState.minimum_system_requirements.processor
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
                          {gameState.minimum_system_requirements.memory
                            ? gameState.minimum_system_requirements.memory
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
                          {gameState.minimum_system_requirements.graphics
                            ? gameState.minimum_system_requirements.graphics
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
                          {gameState.minimum_system_requirements.storage &&
                          gameState.minimum_system_requirements.storage.length > 1
                            ? gameState.minimum_system_requirements.storage
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
            </Box>
          )}
    </Box>
  );
};

export default GamePage;
