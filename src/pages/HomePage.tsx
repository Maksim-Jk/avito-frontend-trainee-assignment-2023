import { FC } from "react";
import { useGetGamesQuery } from "../store/api/games.api";
import { IGame } from "../types/games.types";
import GameCard from "../components/GameCard";

const HomePage: FC = () => {
  const { isLoading, data } = useGetGamesQuery("");

  return (
    <div>
      <ul>
        {isLoading ? "Loading" : data?.map((game: IGame) => <GameCard key={game.id} game={game} />)}
      </ul>
    </div>
  );
};

export default HomePage;
