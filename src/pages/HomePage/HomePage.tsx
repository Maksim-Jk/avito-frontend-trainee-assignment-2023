import { FC, useState, useEffect } from "react";
import { useGetGamesQuery } from "../../store/api/games.api";
import { IGame } from "../../types/games.types";
import GameCard from "../../components/GameCard";
import HomePageSceleton from "../../components/HomePageSkeleton";
import { removeOldGamesInLocalStorage } from "../../utils/localStorageUtils";
import Header from "../../components/Header";
import { Alert, Container, Stack, TablePagination } from "@mui/material";
import { MemoryRouter } from "react-router-dom";

const HomePage: FC = () => {
  const { isLoading, data, isError, error  } = useGetGamesQuery("");

  interface IError {
    status: number;
    status_message: string;
  }

  useEffect(() => {
    removeOldGamesInLocalStorage();
  }, []);
  
  return (
    <>
      <Stack
        direction="row"
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        gap="20px"
        mt="20px"
      >
      {isError && (
        <Alert severity="error" sx={{ borderRadius: "10px", width: "100%" }}>
          Не удалось загрузить данные ({(error as IError)?.status})
        </Alert>
      )}
        {!isLoading && !isError && data
          ? data?.slice(100, 120).map((game: IGame) => <GameCard game={game} key={game.id} />)
          : !isError && Array.from({ length: 20 }, (_, i) => <HomePageSceleton key={i} />)}
      </Stack>

    </>
  );
};

export default HomePage;

