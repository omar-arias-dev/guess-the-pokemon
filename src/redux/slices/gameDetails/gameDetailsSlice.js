import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    turn: 0,
    points: 0,
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
    }
})

export const {
    incrementPoints,
    getPoints,
    setUserName,
    getUserName,
    changeTurn,
} = gameDetailsSlice.actions;
