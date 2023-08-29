import { useNavigate } from "react-router-dom";
import { categoryOptions, platformOptions, sortByOptions } from "./GameSelector.data";
import Select from "../ui/Select/Select";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const GamesSelector = () => {
  const navigate = useNavigate()
  const [clearCounter, setClearCounter] = useState(0);

  const handleClearChange = () => {
    setClearCounter(clearCounter + 1);
    navigate(`/games`);
  }

  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", flexWrap: "wrap", gap: "10px",  alignItems:'end' ,justifyContent: "space-between" }}>
      <Select label="Платформа" array={platformOptions} initialType="platform" clear={clearCounter}/>
      <Select label="Категория" array={categoryOptions} initialType="category"clear={clearCounter} />
      <Select label="Сортировать" array={sortByOptions} initialType="sort-by" clear={clearCounter}/>
      <Button color="inherit" onClick={handleClearChange} sx={{ width:{xs: "100%", md: "15%"}, padding: '15px', border: '1px solid #474747' }}>Сбросить</Button>
    </Box>
  );
};

export default GamesSelector;
