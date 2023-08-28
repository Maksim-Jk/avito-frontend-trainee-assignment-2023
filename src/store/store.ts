import { configureStore } from "@reduxjs/toolkit";
import { gamesApi } from "./api/games.api";
import selectionSlice from "./slices/selectionSlice";

export const store = configureStore({
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer,
        selection: selectionSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch