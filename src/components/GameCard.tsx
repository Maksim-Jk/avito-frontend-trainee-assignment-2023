import { FC, useState, useEffect } from "react";
import { IGame } from "../types/games.types";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Skeleton, Typography, styled } from "@mui/material";

const GameContainer = styled(Card)({
  borderRadius: "10px",
  overflow: "hidden",
  flex: "auto 1 auto",
  transition: "transform ease .3s",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const GameCardStyled = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const CardContentStyled = styled(CardContent)({
  "  &:last-child": {
    paddingBottom: "16px",
  },
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  padding: "14px",
  height: "100%",
});

const GameCardData = styled(Box)({
  alignSelf: "flex-end",
  display: "flex",
  flexWrap: "wrap",
  columnGap: "10px",
  justifyContent: "space-between",
  alignItems: "end",
  width: "100%",
  marginTop: "auto",
});

interface IGameCardProps {
  game: IGame;
}

const GameCard: FC<IGameCardProps> = ({ game }) => {
  const [isImageLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = game.thumbnail;
    img.onload = () => setIsImagesLoaded(true);
  }, []);

  return (
    <GameContainer sx={{ width: { xs: "100%", sm: "47.5%", md: "31.6%", lg: "32%" } }}>
      <Link to={`/game?id=${game.id}`} state={"games"}>
        <GameCardStyled>
          <CardMedia
            sx={{ width: "100%", display: isImageLoaded ? "block" : "none" }}
            component="img"
            image={game.thumbnail}
          />
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%", paddingBottom: "56%", display: isImageLoaded ? "none" : "block" }}
          ></Skeleton>
          <CardContentStyled>
            <Typography color="text.primary" variant="h5" component="h2">
              {game.title}
            </Typography>
            <Typography mb={"15px"} color="text.secondary">
              {game.genre}
            </Typography>
            <GameCardData>
              <Typography color="text.secondary">{game.developer}</Typography>
              <Typography color="text.secondary">{game.release_date}</Typography>
            </GameCardData>
          </CardContentStyled>
        </GameCardStyled>
      </Link>
    </GameContainer>
  );
};

export default GameCard;
