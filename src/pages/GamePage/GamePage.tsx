import React, { FC } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetGameByIdQuery } from "../../store/api/games.api";
import Button from "@mui/material/Button";
import { IGameByIdScreenshot } from "../../types/games.types";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import Slider from "../../components/Slider/Slider";

interface IError {
  status: number;
  status_message: string;
}

const GamePage: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data: game, isLoading, isError, error } = useGetGameByIdQuery(params.id || "");

  const notFoundMessage = "Данные не найдены";
  const isMinSysReqValid =
    game && game.minimum_system_requirements
      ? Object.values(game.minimum_system_requirements).every(
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
        : game && (
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
              <Slider slides={game.screenshots} style={{ borderRadius: '10px', maxWidth: '60%'}}/>
              <Card
                style={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  maxWidth: '400px',
                  minWidth: '300px'
                  
                }}
              >
                <CardMedia
                  component="img"
                  image={game.thumbnail}
                  alt={game.title}
                  style={{ maxWidth: "100%", marginBottom: "10px" }}
                />
                <CardContent>
                  <Typography
                    sx={{ color: "text.primary", fontSize: "30px", fontWeight: "400" }}
                    variant="h1"
                  >
                    {game.title ? game.title : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "10px" }} variant="subtitle1" color="text.secondary">
                    Дата релиза: {game.release_date ? game.release_date : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "5px" }} variant="subtitle1" color="text.secondary">
                    Издатель: {game.publisher ? game.publisher : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "5px" }} variant="subtitle1" color="text.secondary">
                    Разработчик: {game.developer ? game.developer : notFoundMessage}
                  </Typography>
                  <Typography sx={{ marginTop: "5px" }} variant="subtitle1" color="text.secondary">
                    Жанр: {game.genre ? game.genre : notFoundMessage}
                  </Typography>

                  <h2 style={{ fontSize: "20px", fontWeight: "normal", marginTop: "20px" }}>
                    Минимальные системные требования
                  </h2>
                  {game.minimum_system_requirements && isMinSysReqValid ? (
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
                          {game.minimum_system_requirements.os
                            ? game.minimum_system_requirements.os
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
                          {game.minimum_system_requirements.processor
                            ? game.minimum_system_requirements.processor
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
                          {game.minimum_system_requirements.memory
                            ? game.minimum_system_requirements.memory
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
                          {game.minimum_system_requirements.graphics
                            ? game.minimum_system_requirements.graphics
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
                          {game.minimum_system_requirements.storage &&
                          game.minimum_system_requirements.storage.length > 1
                            ? game.minimum_system_requirements.storage
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
