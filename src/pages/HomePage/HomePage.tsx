import { FC, useState, useEffect } from "react";
import { useGetGamesQuery } from "../../store/api/games.api";
import { IGame } from "../../types/games.types";
import GameCard from "../../components/GameCard";
import HomePageSceleton from "../../components/HomePageSkeleton";
import { removeOldGamesInLocalStorage } from "../../utils/localStorageUtils";
import { Alert, Stack } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import GamesSelector from "../../components/GameSelectors/GamesSelector";

const HomePage: FC = () => {

  console.log('RENDER HOME');
  
  const [searchParams, setSearchParams] = useSearchParams();

  const { platform, category, "sort-by": sortBy } = Object.fromEntries(searchParams.entries());

  const { data, isFetching, isError, error } = useGetGamesQuery({
    platform: platform || undefined,
    category: category || undefined,
    sortBy: sortBy || undefined,
  });

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
        {!isFetching && !isError && data
          ? data?.slice(0, 10).map((game: IGame) => <GameCard game={game} key={game.id} />)
          : !isError && Array.from({ length: 20 }, (_, i) => <HomePageSceleton key={i} />)}
      </Stack>
    </>
  );
};

export default HomePage;
