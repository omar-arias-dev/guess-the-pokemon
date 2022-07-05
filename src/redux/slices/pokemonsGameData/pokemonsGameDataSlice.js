import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    correctPokemonsGameData: [],
    incorrectPokemonsGameData: [],
    allPokemonsList: [],
    isLoading: false,
    isDataFilled: false,
};

export const pokemonsGameDataSlice = createSlice({
    name: "pokemonsGameData",
    initialState,
    reducers: {
        startLoadingPokemonData: (state) => {
            state.isLoading = true;
        },
        stopLoadingPokemonData: (state) => {
            state.isLoading = false;
        },
        setAllPokemonList: (state, actions) => {
            state.allPokemonsList = actions.payload.pokemonsList;
        },
        setCorrectPokemonsGameData: (state, actions) => {
            state.correctPokemonsGameData = actions.payload.correctPokemon;
        },
        setIncorrectPokemonsGameData: (state, actions) => {
            state.incorrectPokemonsGameData = actions.payload.incorrectPokemon;
        },
        setDataFilled: (state) => {
            state.isDataFilled = true;
        },
        getCorrectPokemonsGameData: (state) => {
            return state.correctPokemonsGameData
        },
        getIncorrectPokemonsGameData: (state) => {
            return state.incorrectPokemonsGameData
        },
    },
})

export const {
    startLoadingPokemonData,
    stopLoadingPokemonData,
    setAllPokemonList,
    setCorrectPokemonsGameData,
    setIncorrectPokemonsGameData,
    setDataFilled,
    getCorrectPokemonsGameData,
    getIncorrectPokemonsGameData,
} = pokemonsGameDataSlice.actions;
