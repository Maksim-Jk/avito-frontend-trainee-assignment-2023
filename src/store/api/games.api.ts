import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://www.freetogame.com/api/";

export const gamesApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => "games",
    }),
    getGamesSotred: builder.query({
      query: ({platform, category, sortByby}) => `games?${platform && `platform=${platform}`}${category && `&category=${category}`} ${sortByby && `&sort-by${sortByby}`}`,
    }),
    getGameById: builder.query({
        query: (id) => `game?id=${id}`,
      }),
  }),
});

export const {useGetGamesQuery, useGetGamesSotredQuery, useGetGameByIdQuery}= gamesApi