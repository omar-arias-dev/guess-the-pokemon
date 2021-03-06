import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { incrementPoints, changeTurn, stopGame } from "./../../../../../redux/slices/gameDetails";

export default function SelectionButtons({ correctPokemon, incorrectPokemon1, incorrectPokemon2 }) {

    const { turn } = useSelector((state) => state.gameDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const[positions, setPositions] = useState([]);
    const[pokemonUnited, setPokemonUnited] = useState([]);

    useEffect(() => {
        let array = [2, 0, 1];
        setPositions(array.sort((a, b) => 0.5 - Math.random()));
        setPokemonUnited([
            {id: correctPokemon.id, name: correctPokemon.name},
            {id: incorrectPokemon1.id, name: incorrectPokemon1.name},
            {id: incorrectPokemon2.id, name: incorrectPokemon2.name},
        ]);
    }, [turn]);

    const handlePokemonClick = (pokemonId) => {
        if (turn === 9) {
            navigate("/results")
        } else {
        }
        if (pokemonId === correctPokemon.id) {
            if (turn <= 9) {
                dispatch(incrementPoints());
                dispatch(changeTurn());
            } else {
                // dispatch(stopGame()); TODO: FIX. Dispatch stopGame() Action
            }
        } else {
            dispatch(changeTurn());
        }
    }
    
    return (
        <section>
            {
                positions.map((position) => (
                    <button
                        className="bg-violet-600 hover:bg-violet-800 rounded-xl border-2 border-white p-2 mx-4 text-sm font-bold capitalize"
                        key={pokemonUnited[position].id}
                        onClick={()=>handlePokemonClick(pokemonUnited[position].id)}
                    >
                        {
                            pokemonUnited[position].name
                        }
                    </button>
                ))
            }
        </section>
    );
}
