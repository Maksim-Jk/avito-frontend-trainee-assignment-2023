import { FC } from "react";
import { IGame } from "../types/games.types";
import { Link } from "react-router-dom";

interface IGameCardProps {
  game: IGame;
}

const GameCard: FC<IGameCardProps> = ({ game }) => {

  return (
    <li>
      <Link to={`${game.id}`}>{game.title} </Link>
    </li>
  );
};

export default GameCard;
