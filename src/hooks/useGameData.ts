import { useGetGameByIdQuery } from "../store/api/games.api";
import { IGameById } from "../types/games.types";

interface ILocalStorageData {
  data: IGameById;
  timestamp: number;
}

interface IUseGameDataReturn {
  hookGameData: IGameById;
  isGameCached: boolean;
  isGameInTime: boolean;
  isLocalstorageData: boolean;
  GError: string
}

export function useGameData(gameId: string | null): Partial<IUseGameDataReturn>  {
  if (gameId) {
    const currentTime = new Date().getTime();
    const cacheTimer = 5 * 60 * 1000;

    const localStorageJSON: string | null = localStorage.getItem("cachedGames");
    const localStorageData: ILocalStorageData[] = localStorageJSON && JSON.parse(localStorageJSON);

    const cachedGame: ILocalStorageData | undefined =
      localStorageData && localStorageData.find((item) => item?.data.id === +gameId);

    const isGameCachedAndTime = cachedGame && currentTime - cachedGame.timestamp < cacheTimer;

    if (isGameCachedAndTime) {
      cachedGame.timestamp = currentTime;
      const newLocalStorageJSON = JSON.stringify([...localStorageData, cachedGame]);
      localStorage.setItem("cachedGames", newLocalStorageJSON);
      return {
        hookGameData: cachedGame.data,
        isLocalstorageData: Boolean(localStorageJSON),
        isGameCached: Boolean(cachedGame),
        isGameInTime: isGameCachedAndTime,
      };
    }
  }
  return {GError: 'not found'}
}

//     const localStorageDataUpdated = localStorageData && localStorageData.filter(item => item.data.id !== +gameId)

// if (localStorageDataUpdated) {
//   const newLocalStorageJSON = JSON.stringify([...localStorageDataUpdated, {serverData,timestamp: currentTime }])
//   localStorage.setItem("cachedGames", newLocalStorageJSON)
// } else {
//   const newLocalStorageJSON = JSON.stringify([{serverData,timestamp: currentTime }])
//   localStorage.setItem("cachedGames", newLocalStorageJSON)
// }

//     return { hookGameData: serverData, isLoading, isError, error }
//   }

// const isGameCached = Boolean(cachedGame && currentTime - cachedGame.timestamp < cacheTimer);
