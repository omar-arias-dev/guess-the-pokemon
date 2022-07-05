import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    turn: 0,
    points: 0,
    isGameStarted: false,
}

export const gameDetailsSlice = createSlice({
    name: "gamePoints",
    initialState,
    reducers: {
        incrementPoints: (state) => {
            state.points += 10;
        },
        getPoints: (state) => {
            return state.points;
        },
        setUserName: (state, actions) => {
            state.userName = actions.payload.userName;
        },
        getUserName: (state) => {
            return state.userName;
        },
        changeTurn: (state) => {
            state.turn += 1;
        },
        startGame: (state) => {
            state.isGameStarted = true;
        },
        stopGame: (state) => {
            state.isGameStarted = false;
        },
    }
})

export const {
    startGame,
    stopGame,
    incrementPoints,
    getPoints,
    setUserName,
    getUserName,
    changeTurn,
} = gameDetailsSlice.actions;
