import { useNavigate } from "react-router-dom";
import { categoryOptions, platformOptions, sortByOptions } from "./GameSelector.data";
import Select from "../ui/Select/Select";
import { Box, Button } from "@mui/material";
import { FC } from "react";
import { styled } from "@mui/system";

const SelectorBox = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  alignItems: "end",
  justifyContent: "space-between",
  marginTop: "-10px",
});

const ResetButton = styled(Button)({
  padding: "10px",
  border: "1px solid #474747",
  borderRadius: "10px",
});

const GamesSelector: FC = () => {
  const navigate = useNavigate();

  const handleClearChange = () => {
    navigate(`/games`, { state: "clear" });
  };

  return (
    <SelectorBox>
      <Select label="Платформа" array={platformOptions} initialType="platform" />
      <Select label="Категория" array={categoryOptions} initialType="category" />
      <Select label="Сортировать" array={sortByOptions} initialType="sort-by" />
      <ResetButton
        color="inherit"
        sx={{ width: { xs: "100%", md: "15%" } }}
        onClick={handleClearChange}
      >
        Сбросить
      </ResetButton>
    </SelectorBox>
  );
};

export default GamesSelector;
