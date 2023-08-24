import React, { FC } from "react";
import { useGetGamesQuery } from "../store/api/games.api";
import { IGame } from "../types/games.types";
import { useAppSelector } from "../hooks/redux";

const HomePage: FC = () => {
  const games = useAppSelector(state=> state)
  console.log(games);
  
  const { isLoading, data } = useGetGamesQuery('');
  isLoading ? console.log("loading") : console.log(data);
  return (
    <div>
      <ul>{isLoading ? "Loading" : data?.map((item: IGame) => <li>{item.title}</li>)}</ul>
    </div>
  );
};

export default HomePage;
