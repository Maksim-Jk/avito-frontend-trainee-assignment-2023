import { FC, useEffect } from "react";
import { useGetGamesQuery } from "../store/api/games.api";
import { IGame } from "../types/games.types";
import GameCard from "../components/GameCard";
import HomePageSceleton from "../components/HomePageSkeleton";
import { removeOldGamesInLocalStorage } from "../utils/localStorageUtils";
import { Alert, Stack, styled } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { AlertStyled } from "./GamePage";

interface IError {
  status: number;
  status_message: string;
}

const GamesContainer = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: '20px',
});

const HomePage: FC = () => {
  const [searchParams] = useSearchParams();
  const { platform, category, "sort-by": sortBy } = Object.fromEntries(searchParams.entries());

  const { data, isFetching, isError, error } = useGetGamesQuery({
    platform: platform || undefined,
    category: category || undefined,
    sortBy: sortBy || undefined,
  });

  useEffect(() => {
    removeOldGamesInLocalStorage();
  }, []);

  return (
    <GamesContainer>
      {isError && (
        <AlertStyled severity="error">
          Не удалось загрузить данные ({(error as IError)?.status})
        </AlertStyled>
      )}
      {!isFetching && !isError && data
        ? data?.slice(0, 12).map((game: IGame) => <GameCard game={game} key={game.id} />)
        : !isError && Array.from({ length: 20 }, (_, i) => <HomePageSceleton key={i} />)}
    </GamesContainer>
  );
};

export default HomePage;
