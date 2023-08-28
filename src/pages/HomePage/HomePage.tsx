import { FC, useState, useEffect } from "react";
import { useGetGamesQuery } from "../../store/api/games.api";
import { IGame } from "../../types/games.types";
import GameCard from "../../components/GameCard";
import HomePageSceleton from "../../components/HomePageSkeleton";
import { removeOldGamesInLocalStorage } from "../../utils/localStorageUtils";
import { Alert, Stack } from "@mui/material";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import GameSortPanel from "../../components/GamesSortPanel/GamesSortPanel";
import GameSortPanel2 from "../../components/GamesSortPanel/GamesSortPanel2";

interface IError {
  status: number;
  status_message: string;
}


const HomePage: FC = () => {
  const navigate = useNavigate();
  // const { platform, category, 'sort-by': sortBy } = useParams();

  const selectedCategory = useSelector((state: RootState) => state.selection.category);
  const selectedPlatform = useSelector((state: RootState) => state.selection.platform);
  const selectedSortBy = useSelector((state: RootState) => state.selection.sortBy);


  const { data, isFetching, isError, error, refetch } = useGetGamesQuery({
    platform: selectedPlatform || undefined,
    category: selectedCategory  || undefined,
    sortBy: selectedSortBy || undefined,
  });
  
  useEffect(() => {
    removeOldGamesInLocalStorage();
  }, []);

  return (
    <>
            <GameSortPanel />
            <GameSortPanel2 />

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
