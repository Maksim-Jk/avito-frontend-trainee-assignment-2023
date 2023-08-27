import { FC, useState, useEffect } from "react";
import { useGetGamesQuery } from "../../store/api/games.api";
import { IGame } from "../../types/games.types";
import GameCard from "../../components/GameCard";
import HomePageSceleton from "../../components/HomePageSceleton";
import { removeOldGamesInLocalStorage } from "../../utils/localStorageUtils";
import Header from "../../components/Header";
import { Container, Stack } from "@mui/material";

const HomePage: FC = () => {
  const { isLoading, data, isError } = useGetGamesQuery("");
  const [dataToRender, setDataToRender] = useState<IGame[] | undefined>(data);
  const [paginationCount, setPaginationCount] = useState(10);

  useEffect(()=>{
    removeOldGamesInLocalStorage()
  }, [])
  return (
    <Container style={{maxWidth: '1200px'}}>
      <Header/>
      {isLoading && "Загрузка"}
      <Stack direction="row" useFlexGap flexWrap="wrap" justifyContent='center' gap='20px' p='20px'>
        {!isLoading && !isError && data
          ? data?.slice(0, 100).map((game: IGame) => <GameCard game={game} key={game.id}/>)
          : Array.from({ length: paginationCount }, (_, i) => <HomePageSceleton key={i}/>)}
      </Stack>
    </Container>
  );
};

export default HomePage;
