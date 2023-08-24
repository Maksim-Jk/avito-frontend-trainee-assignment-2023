import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGame, IGameQuery } from "../../types/games.types";

const API_URL = "https://www.freetogame.com/api/";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getGames: builder.query<IGame[], any>({
      query: () => "games",
      extraOptions: { maxRetries: 3 },
    }),
    getGamesSorted: builder.query<IGame[], IGameQuery>({
      query: ({ platform, category, sortByby }) =>
        `games?${platform && `platform=${platform}`}${category && `&category=${category}`} ${
          sortByby && `&sort-by${sortByby}`
        }`,
      extraOptions: { maxRetries: 3 },
    }),
    getGameById: builder.query<IGame[], number>({
      query: (id) => `game?id=${id}`,
      extraOptions: { maxRetries: 3 },
    }),
  }),
});

export const { useGetGamesQuery, useGetGamesSortedQuery, useGetGameByIdQuery } = gamesApi;
