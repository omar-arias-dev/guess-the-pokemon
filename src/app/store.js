import { configureStore } from "@reduxjs/toolkit";

import { pokemonsGameDataSlice } from "../redux/slices/pokemonsGameData"
import { gameDetailsSlice } from "./../redux/slices/gameDetails";

export const store = configureStore({
    reducer: {
        gameDetails : gameDetailsSlice.reducer,
        pokemonsGameData : pokemonsGameDataSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
