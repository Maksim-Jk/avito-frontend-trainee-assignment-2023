import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { categoryOptions, platformOptions, sortByOptions } from "./GameSelector.data";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import Select from "../ui/Select/Select";

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

const ResetButton = styled(Button)(({ theme }) => ({
  padding: "8.5px",
  border: "1px solid #474747",
  borderRadius: "10px",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "15%",
  },
}));

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
      <ResetButton color="inherit" onClick={handleClearChange}>
        Сбросить
      </ResetButton>
    </SelectorBox>
  );
};

export default GamesSelector;
