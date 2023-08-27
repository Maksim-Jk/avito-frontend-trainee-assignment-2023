import { FC } from "react";
import { IGame } from "../types/games.types";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface IGameCardProps {
  game: IGame;
}

const GameCard: FC<IGameCardProps> = ({ game }) => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        flex: "auto 1 auto",
        width: { xs: "100%", sm: "47.5%", md: "31.6%", lg: "32%" },
        transition: "transform ease .3s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Link to={`/game?id=${game.id}`}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia sx={{ width: "100%" }} component="img" image={game.thumbnail} />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              flex: 1,
              padding: "24px",
            }}
          >
            <Typography color="text.primary" variant="h5" component="h2">
              {game.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} component="span" color="text.secondary">
              {game.genre}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                columnGap: "10px",
                justifyContent: "space-between",
                marginTop: "auto",
                alignItems: "end",
              }}
            >
              <Typography color="text.secondary">{game.developer}</Typography>
              <Typography color="text.secondary">{game.release_date}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default GameCard;
