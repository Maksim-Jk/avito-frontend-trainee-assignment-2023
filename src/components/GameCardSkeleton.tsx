import { FC } from "react";
import { Skeleton } from "@mui/material";
import { CardContentStyled, GameCardData, GameCardStyled, GameContainer } from "./GameCard";

const GameCardSkeleton: FC = () => {
  return (
    <GameContainer>
      <GameCardStyled>
        <Skeleton variant="rectangular" width={"100%"} sx={{ paddingBottom: "56%" }} />
        <CardContentStyled>
          <Skeleton variant="rectangular" sx={{ width: "100%", height: "1.5rem" }} />
          <Skeleton
            variant="rectangular"
            sx={{ width: "30%", height: "0.875rem", marginTop: "5px", marginBottom: "30px" }}
          />
          <GameCardData>
            <Skeleton variant="rectangular" sx={{ width: "65%" }} />
            <Skeleton variant="rectangular" sx={{ width: "30%" }} />
          </GameCardData>
        </CardContentStyled>
      </GameCardStyled>
    </GameContainer>
  );
};

export default GameCardSkeleton;
