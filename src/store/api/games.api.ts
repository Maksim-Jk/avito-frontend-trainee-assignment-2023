import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGame, IGameById, IGameQuery } from "../../types/games.types";
import { transformData } from "../../helpers/transformData";

const API_URL = "https://www.freetogame.com/api/";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  
  endpoints: (builder) => ({
    getGames: builder.query<IGame[], any>({
      query: () => "games",
      extraOptions: { maxRetries: 3},
      transformResponse: (response: IGame[]) => {
        return response.map((item) => {
          item.release_date = transformData(item.release_date);
          return item;
        });
      }
    }),
    getGamesSorted: builder.query<IGame[], IGameQuery>({
      query: ({ platform, category, sortByby }) =>
        `games?${platform && `platform=${platform}`}${category && `&category=${category}`} ${
          sortByby && `&sort-by${sortByby}`
        }`,
      extraOptions: { maxRetries: 3 },
    }),
    getGameById: builder.query<IGameById, string>({
      query: (id) => `game?id=${id}`,
      extraOptions: { maxRetries: 3 },

      transformResponse: (response: IGameById) => {
        return {...response, release_date : transformData(response.release_date)}
        }      
    }),
  }),
});

export const { useGetGamesQuery, useGetGamesSortedQuery, useGetGameByIdQuery } = gamesApi;
