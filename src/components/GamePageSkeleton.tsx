import { FC } from "react";
import { Card, CardContent, Box, styled, Skeleton } from "@mui/material";
import SliderSkeleton from "./Slider/SliderSkeleton";

const BoxContainer = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  display: "flex",
  gap: "20px",
  alignItems: "start",
  justifyContent: "space-between",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column-reverse",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const CardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));

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
    <BoxContainer>
      <SliderSkeleton />
      <CardContainer>
        <Skeleton variant="rectangular" sx={{ paddingBottom: "56%", width: "100%" }} />
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
