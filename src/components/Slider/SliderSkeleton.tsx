import { FC } from "react";
import { Box, Skeleton } from "@mui/material";
import { SliderContainer } from "./Slider";

const SliderSkeleton: FC = () => {
  return (
    <SliderContainer>
      <Skeleton
        variant="rectangular"
        sx={{
          width: "100%",
          paddingBottom: "56.25%",
          borderRadius: "10px",
        }}
      ></Skeleton>
      <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {Array.from({ length: 4 }, (_, i) => (
          <Skeleton
            key={i}
            sx={{
              width: "25%",
              paddingBottom: "10.7%",
              transform: "scale(1)",
              borderRadius: "10px",
            }}
          ></Skeleton>
        ))}
      </Box>
    </SliderContainer>
  );
};

export default SliderSkeleton;
