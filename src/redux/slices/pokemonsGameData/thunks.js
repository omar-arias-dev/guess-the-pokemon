import {
    startLoadingPokemonData,
    stopLoadingPokemonData,
    setDataFilled,
    setAllPokemonList,
    setCorrectPokemonsGameData,
    setIncorrectPokemonsGameData,
} from "./pokemonsGameDataSlice";

export const fillPokemonData = () => { //TODO: Look for duplicated values in correct ids list and comparate with incorrect pokemons data ids
    return async (dispatch, getState) => {
        let correctPokemonData = new Array(10);
        let incorrectPokemonData = new Array(20);
        dispatch(startLoadingPokemonData());
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=386&offset=0");
        let data = await response.json();
        let allPokemonList = data.results;
        dispatch(setAllPokemonList({ pokemonsList: allPokemonList }));
        let correctPokemonIdsList = [];
        for (let i = 0; i <= correctPokemonData.length - 1; i++) {
            let randomNumber = random(1, allPokemonList.length);
            correctPokemonIdsList[i] = randomNumber;
        }
        for (let i = 0; i <= correctPokemonIdsList.length - 1; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${correctPokemonIdsList[i]}/`);
            let data = await response.json();
            let pokemon = {
                id: data.id,
                name: data.name,
                sprite: data.sprites.front_default
            }
            correctPokemonData[i] = pokemon;
        }
        dispatch(setCorrectPokemonsGameData({ correctPokemon: correctPokemonData }));
        for (let i = 0; i <= incorrectPokemonData.length - 1; i++) {
            let randomNumber = await random(1, allPokemonList.length - 1);
            let pokemonData = await allPokemonList[randomNumber];
            let pokemonId = splitPokemonUrl(pokemonData?.url);
            let pokemon = {
                id: pokemonId,
                name: pokemonData?.name,
                url: pokemonData?.url,
            }
            incorrectPokemonData[i] = pokemon;
        }
        dispatch(setIncorrectPokemonsGameData({ incorrectPokemon : incorrectPokemonData }));
        dispatch(setDataFilled());
        dispatch(stopLoadingPokemonData());
    };
};

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function splitPokemonUrl(url) {
    let id = url.split("/")[6];
    return parseInt(id);
}
