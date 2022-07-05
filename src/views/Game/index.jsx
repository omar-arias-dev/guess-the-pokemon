import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillPokemonData } from "../../redux/slices/pokemonsGameData/thunks";
//import { startGame } from "./../../redux/slices/gameDetails"; TODO: Start the game when the fix is solved
import Turn from "./components/Turn/index";
import Loading from "./../../components/Loading/Loading";

export default function Game() {

    const dispatch = useDispatch();
    const { isLoading, isDataFilled, correctPokemonsGameData, incorrectPokemonsGameData } =
        useSelector((state) => state.pokemonsGameData);

    useEffect(() => {
        dispatch(fillPokemonData());
        // dispatch(startGame());
    }, []);

    return (
        <>
            {
                isLoading ? <Loading /> : undefined
            }
            {
                isDataFilled ? 
                    <Turn
                        corrects={correctPokemonsGameData}
                        incorrects={incorrectPokemonsGameData}
                        isLoading={isLoading}
                        isDataFilled={isDataFilled}
                    /> : undefined
            }
            
        </>
    );
}
