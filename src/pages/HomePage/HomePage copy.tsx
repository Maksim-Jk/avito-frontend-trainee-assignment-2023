import { FC, useState, useEffect } from "react";
import { useGetGamesQuery } from "../../store/api/games.api";
import { IGame } from "../../types/games.types";
import GameCard from "../../components/GameCard";
import HomePageSceleton from "../../components/HomePageSkeleton";
import { removeOldGamesInLocalStorage } from "../../utils/localStorageUtils";
import { Alert, Stack } from "@mui/material";

const HomePage: FC = () => {
  const [platform, setPlatform] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const { isFetching, data, isError, error } = useGetGamesQuery({ platform, category, sortBy });
  
  interface IError {
    status: number;
    status_message: string;
  }

  console.log(data);
  
  useEffect(() => {
    removeOldGamesInLocalStorage();
  }, []);

  return (
    <>
      <div>
        <h2>Games</h2>
        <div>
          <label>Platform:</label>
          <select value={platform || ""} onChange={(e) => setPlatform(e.target.value || null)}>
            <option value="">All Platforms</option>
            <option value="pc">PC</option>
            <option value="browser">Browser</option>
          </select>
        </div>
        <div>
<div>
  <label>Category:</label>
  <select value={category || ''} onChange={(e) => setCategory(e.target.value || null)}>
    <option value="">All Categories</option>
    <option value="mmorpg">MMORPG</option>
    <option value="shooter">Shooter</option>
    <option value="strategy">Strategy</option>
    <option value="moba">MOBA</option>
    <option value="racing">Racing</option>
    <option value="sports">Sports</option>
    <option value="social">Social</option>
    <option value="sandbox">Sandbox</option>
    <option value="open-world">Open World</option>
    <option value="survival">Survival</option>
    <option value="pvp">PvP</option>
    <option value="pve">PvE</option>
    <option value="pixel">Pixel</option>
    <option value="voxel">Voxel</option>
    <option value="zombie">Zombie</option>
    <option value="turn-based">Turn-Based</option>
    <option value="first-person">First-Person</option>
    <option value="third-person">Third-Person</option>
    <option value="top-down">Top-Down</option>
    <option value="tank">Tank</option>
    <option value="space">Space</option>
    <option value="sailing">Sailing</option>
    <option value="side-scroller">Side-Scroller</option>
    <option value="superhero">Superhero</option>
    <option value="permadeath">Permadeath</option>
    <option value="card">Card</option>
    <option value="battle-royale">Battle Royale</option>
    <option value="mmo">MMO</option>
    <option value="mmofps">MMOFPS</option>
    <option value="mmotps">MMOTPS</option>
    <option value="3d">3D</option>
    <option value="2d">2D</option>
    <option value="anime">Anime</option>
    <option value="fantasy">Fantasy</option>
    <option value="sci-fi">Sci-Fi</option>
    <option value="fighting">Fighting</option>
    <option value="action-rpg">Action RPG</option>
    <option value="action">Action</option>
    <option value="military">Military</option>
    <option value="martial-arts">Martial Arts</option>
    <option value="flight">Flight</option>
    <option value="low-spec">Low Spec</option>
    <option value="tower-defense">Tower Defense</option>
    <option value="horror">Horror</option>
    <option value="mmorts">MMORTS</option>
  </select>
</div>
</div>

        <div>
          <label>Sort By:</label>
          <select value={sortBy || ""} onChange={(e) => setSortBy(e.target.value || null)}>
            <option value="">Default</option>
            <option value="release-date">release-date</option>
            <option value="popularity">popularity</option>
            <option value="alphabetical">alphabetical</option>
            <option value="relevance">relevance</option>
          </select>
        </div>
        {/* Отображение списка игр */}
      </div>
      <Stack
        direction="row"
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        gap="20px"
        mt="20px"
      >
        {isError && (
          <Alert severity="error" sx={{ borderRadius: "10px", width: "100%" }}>
            Не удалось загрузить данные ({(error as IError)?.status})
          </Alert>
        )}
        {!isFetching && !isError && data
          ? data?.slice(0, 10).map((game: IGame) => <GameCard game={game} key={game.id} />)
          : !isError && Array.from({ length: 20 }, (_, i) => <HomePageSceleton key={i} />)}
      </Stack>
    </>
  );
};

export default HomePage;
