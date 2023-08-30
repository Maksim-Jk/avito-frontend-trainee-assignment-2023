import { FC, useState, useEffect } from "react";
import { IGame } from "../types/games.types";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Skeleton, Typography, styled } from "@mui/material";

interface IGameCardProps {
  game: IGame;
}

const GameCard: FC<IGameCardProps> = ({ game }) => {
  const [imageLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = game.thumbnail;
    img.onload = () => setImagesLoaded(true);
  }, []);


  const cardStyles = {
    borderRadius: "10px",
    overflow: "hidden",
    flex: "auto 1 auto",
    width: { xs: "100%", sm: "47.5%", md: "31.6%", lg: "32%" },
    transition: "transform ease .3s",
    "&:hover": {
      transform: "scale(1.02)",
    },
  };
  const boxStyles = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  };
  const mediaStyles = {
    width: "100%",
    display:imageLoaded ? "block" : 'none'
  };

  const CardContentStyled = styled(CardContent)(`
  &:last-child {
    padding-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 14px;
  height: 100%
`);

  const infoStyles = {
    alignSelf: "flex-end",
    display: "flex",
    flexWrap: "wrap",
    columnGap: "10px",
    justifyContent: "space-between",
    alignItems: "end",
    width: "100%",
    marginTop: "auto",
  };



  return (
    <Card sx={cardStyles}>
      <Link to={`/game?id=${game.id}`} state={"games"}>
        <Box sx={boxStyles}>
            <CardMedia sx={mediaStyles} component="img" image={game.thumbnail} />
            <Skeleton variant="rectangular" sx={{ width: "100%", paddingBottom: "56%", display:imageLoaded ? "none" : 'block' }}></Skeleton>
          <CardContentStyled>
            <Typography color="text.primary" variant="h5" component="h2">
              {game.title}
            </Typography>
            <Typography mb={"15px"} color="text.secondary">
              {game.genre}
            </Typography>
            <Box sx={infoStyles}>
              <Typography color="text.secondary">{game.developer}</Typography>
              <Typography color="text.secondary">{game.release_date}</Typography>
            </Box>
          </CardContentStyled>
        </Box>
      </Link>
    </Card>
  );
};

export default GameCard;
