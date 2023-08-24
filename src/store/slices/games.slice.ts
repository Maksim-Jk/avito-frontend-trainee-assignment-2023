import { createSlice } from "@reduxjs/toolkit";

export interface IGame {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

const initialState = "";

export const games = createSlice({
  name: "games",
  initialState,
  reducers: {
    getAllGamesData: (state, payload) => {
      const gameId = payload;
    },
    getAllGamesDataFiltered: (state, payload) => {
      const filter = payload;
    },
    getGameData: (state, payload) => {
      const gameId = payload;
    },
  },
});
