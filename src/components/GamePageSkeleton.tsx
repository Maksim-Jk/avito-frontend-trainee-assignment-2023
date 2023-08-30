import { FC } from "react";
import { Card, CardContent, Box, styled, Skeleton } from "@mui/material";
import SliderSkeleton from "./Slider/SliderSkeleton";

const BoxContainer = styled(Box)({
  marginTop: "20px",
  display: "flex",
  gap: "20px",
  alignItems: "start",
  justifyContent: "space-between",
});

const CardContainer = styled(Card)({
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
});

const GameTitleSkeleton = styled(Skeleton)({
  height: "35px",
  width: "100%",
});

const TypographyTitleSkeleton = styled(Skeleton)({
  height: "32px",
  width: "80%",
  marginTop: "15px",
});

const TypographySubTitleSkeleton = styled(Skeleton)({
  height: "24px",
  marginTop: "10px",
  width: "70%",
});

const TypographyTextSkeleton = styled(Skeleton)({
  marginTop: "5px",
  height: "24px",
  width: "50%",
});

const GamePageSkeleton: FC = () => {
  return (
    <BoxContainer sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
      <SliderSkeleton />
      <CardContainer sx={{ width: { xs: "100%", md: "40%" } }}>
        <Skeleton variant="rectangular" width={"100%"} sx={{ paddingBottom: "56%" }} />
        <CardContent>
          <GameTitleSkeleton />
          <Box>
            <TypographyTitleSkeleton />
            <TypographyTextSkeleton />
            <TypographyTextSkeleton />
            <TypographyTextSkeleton />
            <TypographyTextSkeleton />
          </Box>
          <TypographyTitleSkeleton />
          <Box>
            {Array.from({ length: 5 }, (_, i) => (
              <Box key={i}>
                <TypographySubTitleSkeleton />
                <TypographyTextSkeleton />
              </Box>
            ))}
          </Box>
        </CardContent>
      </CardContainer>
    </BoxContainer>
  );
};

export default GamePageSkeleton;
