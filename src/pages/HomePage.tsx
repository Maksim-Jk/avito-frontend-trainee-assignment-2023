import { FC, useEffect, useState } from "react";
import { useGetGamesQuery } from "../store/api/games.api";
import { IGame } from "../types/games.types";
import GameCard from "../components/GameCard";
import HomePageSceleton from "../components/HomePageSkeleton";
import { removeOldGamesInLocalStorage } from "../utils/localStorageUtils";
import {  Box, Stack, TablePagination, styled } from "@mui/material";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
  gap: "20px",
  width: "100%",
});

const HomePage: FC = () => {
  const [searchParams] = useSearchParams();
  const { platform, category, "sort-by": sortBy } = Object.fromEntries(searchParams.entries());
  const paramsPage: string | null = searchParams.get("page");
  const paramsGamesPerPage: string | null = searchParams.get("games-per-page");
  const sortParams = platform + category + sortBy;

  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const initPage = paramsPage ? +paramsPage - 1 : 0;
  const initGamesPerPage = paramsGamesPerPage ? +paramsGamesPerPage : 12;
  const [page, setPage] = useState(initPage);
  const [gamesPerPage, setGamesPerPage] = useState(initGamesPerPage);
  const dataFrom = page * gamesPerPage;
  const dataTo = dataFrom + gamesPerPage;

  useEffect(() => {
    if (state === "clear") {
      searchParams.delete("page");
      searchParams.delete("games-per-page");
      navigate(`?${searchParams.toString()}`);
      setPage(initPage);
      setGamesPerPage(initGamesPerPage);
    }
  }, [sortParams, paramsPage, paramsGamesPerPage]);

  const handleChangePage = (_:any, newPage: number) => {
    setPage(newPage);
    if (newPage !== null && newPage !== 0) {
      searchParams.set("page", String(newPage + 1));
    } else {
      searchParams.delete("page");
    }
    navigate(`?${searchParams.toString()}`);
  };

  const handleChangeGamesPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setGamesPerPage(parseInt(value, 10));
    setPage(0);
    if (value !== null && +value !== 12) {
      searchParams.set("games-per-page", value);
    } else {
      searchParams.delete("games-per-page");
    }
    navigate(`?${searchParams.toString()}`);
  };

  const { data, isFetching, isError, error } = useGetGamesQuery({
    platform: platform || undefined,
    category: category || undefined,
    sortBy: sortBy || undefined,
  });

  useEffect(() => {
    removeOldGamesInLocalStorage();
  }, []);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1}}>
      <GamesContainer>
        {isError && (
          <AlertStyled severity="error">
            Не удалось загрузить данные ({(error as IError)?.status})
          </AlertStyled>
        )}
        {!isFetching && !isError && data ? (
          <>
            {data?.slice(dataFrom, dataTo).map((game: IGame) => (
              <GameCard game={game} key={game.id} />
            ))}
          </>
        ) : (
          !isError && Array.from({ length: 20 }, (_, i) => <HomePageSceleton key={i} />)
        )}
      </GamesContainer>
      {data && data.length > 0 ? (
        <TablePagination
          rowsPerPageOptions={[12, 60, { value: -1, label: "Все" }]}
          labelRowsPerPage={"Игр на странице"}
          component="div"
          sx={{ marginTop: "10px", marginBottom: "-10px" }}
          count={data.length}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeGamesPerPage}
          rowsPerPage={gamesPerPage}
        />
      ): (
        <AlertStyled severity="error">
        Игры не найдены
      </AlertStyled>
      )}
    </Box>
  );
};

export default HomePage;
