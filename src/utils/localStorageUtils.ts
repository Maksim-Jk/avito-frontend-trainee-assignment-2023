import { ILocalStorageData, cashTime } from "../hooks/useLocalStorageGameData";
import { IGameById } from "../types/games.types";

export function updateGamesInLocalStorage(
  gameArray: ILocalStorageData[],
  gameId: string,
  gameData: IGameById
) {
  if (gameData && gameArray && gameId) {
    const updatedArray: ILocalStorageData[] = [...gameArray];

    if (!updatedArray.some((game) => game.data.id === +gameId)) {
      updatedArray.push({ data: gameData, timestamp: Date.now() });
    }
    localStorage.setItem("openedGames", JSON.stringify(updatedArray));
  }
}

export function removeOldGamesInLocalStorage() {
  const currentTime = Date.now();
  const openedGames: ILocalStorageData[] = JSON.parse(localStorage.getItem("openedGames") || "[]");
  if (openedGames.length > 0) {
    const updatedArray = openedGames.filter((game) => currentTime - game.timestamp < cashTime);
    localStorage.setItem("openedGames", JSON.stringify(updatedArray));
  }
}
