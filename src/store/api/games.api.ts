import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { IGame, IGameById, IGameQuery } from "../../types/games.types";
import { transformData } from "../../utils/transformData";

const API_URL = "https://www.freetogame.com/api/";


export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: retry(fetchBaseQuery({
    baseUrl: API_URL,
  }), {maxRetries : 3}
  ),
  endpoints: (builder) => ({
    getGames: builder.query<IGame[], Partial<IGameQuery>>({
      query: ({ platform, category, sortBy }) => {
        let queryString = "/games";
        if (platform || category || sortBy) {
          queryString += "?";
          if (platform) queryString += `platform=${platform}&`;
          if (category) queryString += `category=${category}&`;
          if (sortBy) queryString += `sort-by=${sortBy}&`;
        }
        return queryString;
      },
      transformResponse: (response: IGame[]) => {
        return response.map((item) => {
          item.release_date = transformData(item.release_date);
          return item;
        });
      },
    }),
    getGameById: builder.query<IGameById, string | number>({
      query: (id) => `game?id=${id}`,
      transformResponse: (response: IGameById) => {
        return { ...response, release_date: transformData(response.release_date) };
      },
    }),
  }),
});

export const { useGetGamesQuery, useGetGameByIdQuery } = gamesApi;
