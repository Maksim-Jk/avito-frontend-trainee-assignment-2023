import { useNavigate } from "react-router-dom";
import { categoryOptions, platformOptions, sortByOptions } from "./GameSelector.data";
import Select from "../ui/Select/Select";
import { Box, Button } from "@mui/material";

const GamesSelector = () => {
  const navigate = useNavigate()

  const handleClearChange = () => {
    navigate(`games`);
  }



  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
      <Select label="Платформа:" array={platformOptions} initialType="platform" />
      <Select label="Категория: " array={categoryOptions} initialType="category" />
      <Select label="Сортировать:" array={sortByOptions} initialType="sort-by" />
      <Button color="inherit" onClick={handleClearChange}>Сбросить</Button>
    </Box>
  );
};

export default GamesSelector;
