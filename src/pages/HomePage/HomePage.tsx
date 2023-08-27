import { FC, useState, useEffect } from "react";
import { useGetGamesQuery } from "../../store/api/games.api";
import { IGame } from "../../types/games.types";
import GameCard from "../../components/GameCard";
import HomePageSceleton from "../../components/HomePageSceleton";
import { removeOldGamesInLocalStorage } from "../../utils/localStorageUtils";
import Header from "../../components/Header";
import { Container, Stack, TablePagination } from "@mui/material";
import { MemoryRouter } from "react-router-dom";

const HomePage: FC = () => {
  const { isLoading, data, isError } = useGetGamesQuery("");

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
        {!isLoading && !isError && data
          ? data?.slice(0, 100).map((game: IGame) => <GameCard game={game} key={game.id} />)
          // ? Array.from({ length: 10 }, (_, i) => <HomePageSceleton key={i} />)
          : Array.from({ length: 100 }, (_, i) => <HomePageSceleton key={i} />)}
      </Stack>

    </>
  );
};

export default HomePage;

