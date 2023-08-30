import { useNavigate } from "react-router-dom";
import { categoryOptions, platformOptions, sortByOptions } from "./GameSelector.data";
import Select from "../ui/Select/Select";
import { Box, Button } from "@mui/material";

const GamesSelector = () => {
  const navigate = useNavigate()

  const handleClearChange = () => {
    navigate(`/games`, {state:'clear'});
  }

  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", flexWrap: "wrap", gap: "10px",  alignItems:'end' ,justifyContent: "space-between", marginTop: "-10px" }}>
      <Select label="Платформа" array={platformOptions} initialType="platform" />
      <Select label="Категория" array={categoryOptions} initialType="category" />
      <Select label="Сортировать" array={sortByOptions} initialType="sort-by"/>
      <Button color="inherit" onClick={handleClearChange} sx={{ width:{xs: "100%", md: "15%"}, padding: '10px', border: '1px solid #474747', borderRadius: '10px' }}>Сбросить</Button>
    </Box>
  );
};

export default GamesSelector;
