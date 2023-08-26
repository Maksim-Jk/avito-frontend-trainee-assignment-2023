import { FC } from "react";
import { IGame } from "../types/games.types";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface IGameCardProps {
  game: IGame;
}

const GameCard: FC<IGameCardProps> = ({ game }) => {
  return (
    <Link to={`/game?id=${game.id}`} style={{textDecoration: 'none'}}>
      <Card
        sx={{
          maxWidth: "350px",
          height: "350px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          transition: "transform ease .3s",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardMedia sx={{ width: "100%" }} component="img" image={game.thumbnail} />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            paddingBottom: 0,
            flex: 1,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography color="text.primary" variant="h5">
              {game.title}
            </Typography>

            <Typography sx={{ marginTop: "5px" }} color="text.secondary">
              {game.release_date}
            </Typography>
          </Box>
          <Typography sx={{ mb: 1.5 }} variant="subtitle2" color="text.secondary">
            {game.genre}
          </Typography>
          <Typography sx={{ marginTop: "auto" }} color="text.secondary">
            {game.developer}
          </Typography>
        </CardContent>
      </Card>
    </Link>

    // <li>
    // </li>
  );
};

export default GameCard;
