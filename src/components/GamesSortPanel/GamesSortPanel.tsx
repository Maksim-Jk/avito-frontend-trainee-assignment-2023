import { Autocomplete, Box, Button, styled, TextField, Typography } from "@mui/material";
import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setCategory, setPlatform, setSortBy } from "../../store/slices/selectionSlice";
import { categoryOptions, platformOptions, sortByOptions } from "./gamesSortParams";
import { useNavigate, useSearchParams } from "react-router-dom";

 const GameSortPanel: FC = () => {
  const dispatch = useDispatch();
  const selectedPlatform = useSelector((state: RootState) => state.selection.platform);
  const selectedCategory = useSelector((state: RootState) => state.selection.category);
  const selectedSortBy = useSelector((state: RootState) => state.selection.sortBy);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const queryParams = new URLSearchParams();
  //   if (selectedCategory) queryParams.set('category', selectedCategory);
  //   if (selectedPlatform) queryParams.set('platform', selectedPlatform);
  //   if (selectedSortBy) queryParams.set('sortBy', selectedSortBy);

  //   navigate({
  //     search: queryParams.toString(),
  //   });
  // }, [selectedCategory, selectedPlatform, selectedSortBy, navigate]);
  
  const [searchParams, setSearchParams] = useSearchParams();

  
  const updateSearchParams = useCallback(() => {
    // Обновляем параметры запроса без перезагрузки страницы
    if (selectedCategory) searchParams.set('category', selectedCategory);
    else searchParams.delete('category');
    if (selectedPlatform) searchParams.set('platform', selectedPlatform);
    else searchParams.delete('platform');
    if (selectedSortBy) searchParams.set('sortBy', selectedSortBy);
    else searchParams.delete('sortBy');
    
    navigate(`?${searchParams.toString()}`);
  }, [navigate, searchParams, selectedCategory, selectedPlatform, selectedSortBy]);



function handleFilterClean() {
  dispatch(setCategory(null));
  dispatch(setPlatform(null));
  dispatch(setSortBy(null));
}
  

const autocompleteStyles: React.CSSProperties = {
  width: '20%',
  color: 'black',
  borderRadius: '20px',
}
const autocompleteFieldStyles: React.CSSProperties = {
  
}

const AutocompleteStyled = styled(Autocomplete)({
  fontSize: "2rem",
  color: "green",
  padding: "0",
  '& .Mui-focused': {
border: 'green',
fieldset: '0',
},
  '& fieldset:focus': {
    outline: 'none'
  }
}) as typeof Autocomplete;

const TextFieldStyled = styled(TextField)({
  fontSize: "2rem",
  color: "transparent",
  padding: "0",
}) as typeof TextField;



  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", gap: "20px", width: "100%" }}>
      <AutocompleteStyled
      color="inherit"
        value={sortByOptions.find((obj) => obj.value === selectedSortBy)?.label}
        onChange={(event: any, newValue: string | null) => {
          dispatch(setSortBy(sortByOptions.find((obj) => obj.label === newValue)?.value || ''));
          updateSearchParams()
        }}
        id="controllable-states-demo"
        options={sortByOptions.map((item) => item.label)}
        sx={autocompleteStyles}
        renderInput={(params) => <TextFieldStyled {...params} sx={autocompleteFieldStyles}  label="Сортировка" />}
      />
      <Button sx={{ marginLeft: "auto" }} onClick={() => handleFilterClean()} color="inherit">Сбросить фильтры</Button>
    </Box>
  );
}


export default GameSortPanel