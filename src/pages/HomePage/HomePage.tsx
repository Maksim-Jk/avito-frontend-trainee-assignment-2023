import { FC, useState, useEffect } from "react";
import { useGetGamesQuery } from "../../store/api/games.api";
import { IGame } from "../../types/games.types";
import GameCard from "../../components/GameCard";
import TablePagination from "@mui/material/TablePagination";
import HomePageSceleton from "../../components/HomePageSceleton";

const HomePage: FC = () => {
  const { isLoading, data, isError } = useGetGamesQuery("");
  const [dataToRender, setDataToRender] = useState<IGame[] | undefined>(data);
  const [paginationCount, setPaginationCount] = useState(10);
  return (
    <div>
      {isLoading && "Загрузка"}
      <ul style={{ display: "flex", gap: "20px", maxWidth: "1200px", flexWrap: "wrap" }}>
        {!isLoading && !isError && data
          ? data?.slice(0, 100).map((game: IGame) => <GameCard game={game} key={game.id}/>)
          : Array.from({ length: paginationCount }, (_, i) => <HomePageSceleton key={i}/>)}
      </ul>
    </div>
  );
};

export default HomePage;
