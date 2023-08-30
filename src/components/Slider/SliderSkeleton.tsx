import { FC } from "react";

import { Box, Card, Skeleton } from "@mui/material";

const SliderSkeleton: FC = () => {
    return (
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: { xs: "100%", md: "60%" },
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ 
            width: "100%", 
            paddingBottom: "56.25%", 
            borderRadius: "10px" 
          }}
        ></Skeleton>
        <Box sx={{ display: "flex", gap: "10px"}}>
          {Array.from({ length: 4 }, (_, i) => (
            <Skeleton
              key={i}
              sx={{ 
                width: "25%", 
                paddingBottom: "10.7%", 
                transform: "scale(1)", 
                borderRadius: "10px" 
              }}
            ></Skeleton>
          ))}
        </Box>
      </Card>
    );
  };

export default SliderSkeleton;
