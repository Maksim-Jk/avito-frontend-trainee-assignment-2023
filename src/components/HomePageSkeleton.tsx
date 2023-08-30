import { FC } from "react";
import { Box, Card, CardContent, Skeleton } from "@mui/material";

const HomePageSceleton: FC = () => {
  return (
    <Card
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
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Skeleton variant="rectangular" width={"100%"} sx={{ paddingBottom: "56%"}} />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            paddingBottom: 0,
            flex: 1,
          }}
        >
            <Skeleton variant="rectangular" sx={{ width: "100%", height: "1.5rem" }} />
          
          <Skeleton
            variant="rectangular"
            sx={{ width: "30%", height: "0.875rem", marginTop: "5px" }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <Skeleton variant="rectangular" sx={{ width: "65%" }} />
          <Skeleton variant="rectangular" sx={{ width: "30%"}} />

          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default HomePageSceleton;
