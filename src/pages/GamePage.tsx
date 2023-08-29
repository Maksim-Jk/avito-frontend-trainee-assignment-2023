import { FC, useEffect, useState } from "react";
import { useGetGameByIdQuery } from "../store/api/games.api";
import { IGameById } from "../types/games.types";
import { Card, CardMedia, Typography, CardContent, Box, Alert, styled } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { updateGamesInLocalStorage } from "../utils/localStorageUtils";
import { useLocalStorageGameData } from "../hooks/useLocalStorageGameData";
import Slider from "../components/Slider/Slider";
import { validateObject } from "../utils/objectUtils";
import GamePageSkeleton from "../components/GamePageSkeleton";

interface IGameError {
  data: {
    status: number;
    status_message: string;
  };
}

const AlertStyled = styled(Alert)({
  borderRadius: "10px",
  width: "100%",
  marginTop: "20px",
});

const BoxContainer = styled(Box)({
  marginTop: "20px",
  display: "flex",
  gap: "20px",
  alignItems: "start",
  justifyContent: "space-between",
});

const CardContainer = styled(Card)({
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  minWidth: "400px",
});

const GameTitle = styled(Typography)({
  fontSize: "35px",
  fontWeight: "400",
});

const TypographyTitle = styled(Typography)({
  fontSize: "20px",
  marginTop: "15px",
}) as typeof Typography;

const TypographySubTitle = styled(Typography)({
  fontSize: "16px",
  marginTop: "10px",
}) as typeof Typography;

const TypographyText = styled(Typography)({
  marginTop: "5px",
}) as typeof Typography;

const systamMap: Record<string, string> = {
  os: "Операционая система",
  processor: "Процессор",
  memory: "Оперативная память",
  graphics: "Видеокарта",
  storage: "Жесткий диск",
};

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

  const isMinSysReqValid = gameState && validateObject(gameState, "minimum_system_requirements");

  return (
    <>
      {isError && (
        <AlertStyled severity="error">
          Не удалось загрузить данные ({(error as IGameError)?.data.status_message})
        </AlertStyled>
      )}

      {isLoading ? (
        <GamePageSkeleton />
      ) : (
        gameState && (
          <>
            <BoxContainer sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
              <Slider slides={gameState.screenshots} />
              <CardContainer sx={{ width: { xs: "100%", md: "40%" } }}>
                <CardMedia component="img" image={gameState.thumbnail} alt={gameState.title} />
                <CardContent>
                  <GameTitle variant="h1">
                    {gameState.title ? gameState.title : notFoundMessage}
                  </GameTitle>
                  <Box>
                    <TypographyTitle component="h2">Данные о релизе</TypographyTitle>
                    <TypographyText variant="subtitle1" color="text.secondary">
                      Дата релиза:{" "}
                      {gameState.release_date ? gameState.release_date : notFoundMessage}
                    </TypographyText>
                    <TypographyText variant="subtitle1" color="text.secondary">
                      Издатель: {gameState.publisher ? gameState.publisher : notFoundMessage}
                    </TypographyText>
                    <TypographyText variant="subtitle1" color="text.secondary">
                      Разработчик: {gameState.developer ? gameState.developer : notFoundMessage}
                    </TypographyText>
                    <TypographyText variant="subtitle1" color="text.secondary">
                      Жанр: {gameState.genre ? gameState.genre : notFoundMessage}
                    </TypographyText>
                  </Box>

                  <TypographyTitle component="h2">Минимальные системные требования</TypographyTitle>
                  <Box>
                    {isMinSysReqValid ? (
                      Object.entries(gameState.minimum_system_requirements).map(([key, value]) => (
                        <Box key={key}>
                          <TypographySubTitle color="text.primary" variant="h3">
                            {systamMap[key]}
                          </TypographySubTitle>
                          <TypographyText variant="subtitle1" color="text.secondary">
                            {value.length > 2 ? value : notFoundMessage}
                          </TypographyText>
                        </Box>
                      ))
                    ) : (
                      <Typography variant="subtitle1" color="text.secondary">
                        {notFoundMessage}
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </CardContainer>
            </BoxContainer>
          </>
        )
      )}
    </>
  );
};

export default GamePage;
