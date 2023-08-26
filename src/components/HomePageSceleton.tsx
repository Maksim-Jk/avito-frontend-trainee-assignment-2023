import { Box, Card, CardContent, Skeleton } from "@mui/material";
import React from "react";

const HomePageSceleton = () => {
  return (
    <Card
      sx={{
        width: "350px",
        height: "350px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Skeleton variant="rectangular" width={"100%"} height={198} />
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
          <Skeleton variant="rectangular" sx={{ width:'65%', height: '1.5rem' }} />
          <Skeleton variant="rectangular" sx={{ width:'30%', height: '1.5rem'}} />
        </Box>
        <Skeleton variant="rectangular" sx={{ width:'30%', height: '0.875rem', marginTop: "5px"}} />
        <Skeleton variant="rectangular" sx={{ width: '70%', marginTop: "auto" }} />
      </CardContent>
    </Card>
  );
};

export default HomePageSceleton;
