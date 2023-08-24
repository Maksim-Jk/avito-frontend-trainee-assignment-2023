import React, { FC } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetGameByIdQuery } from "../store/api/games.api";

const GamePage: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data: game, isLoading, isError } = useGetGameByIdQuery(params.id || '');
  console.log(params);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      {game && (
        <div className="game-card">
          <img src={game.thumbnail} alt={game.title} className="game-thumbnail" />
          <h2 className="game-title">{game.title}</h2>
          <p className="game-description">{game.short_description}</p>
          <p className="game-genre">Genre: {game.genre}</p>
          <p className="game-platform">Platform: {game.platform}</p>
          <p className="game-publisher">Publisher: {game.publisher}</p>
          <p className="game-developer">Developer: {game.developer}</p>
          <p className="game-release-date">Release Date: {game.release_date}</p>
          <a href={game.game_url} className="game-link" target="_blank" rel="noopener noreferrer">
            Play Now
          </a>
          <a
            href={game.freetogame_profile_url}
            className="game-profile-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on FreeToGame
          </a>
        </div>
      )}
      Game Page
    </div>
  );
};

export default GamePage;
