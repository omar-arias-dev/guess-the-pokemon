import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillPokemonData } from "../../redux/slices/pokemonsGameData/thunks";
import Turn from "./components/Turn/index";
import Loading from "./../../components/Loading/Loading";

export default function Game() {

    const dispatch = useDispatch();
    const { isLoading, isDataFilled, correctPokemonsGameData, incorrectPokemonsGameData } =
        useSelector((state) => state.pokemonsGameData);

    useEffect(() => {
        dispatch(fillPokemonData());
    }, []);

    return (
        <div className="flex flex-col justify-evenly items-center h-screen bg-[url('https://w.wallhaven.cc/full/p8/wallhaven-p81yoe.png')] bg-cover bg-center">
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
            
        </div>
    );
}
