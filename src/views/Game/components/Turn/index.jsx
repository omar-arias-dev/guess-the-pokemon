import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectionButtons from "./components/SelectionButtons";

export default function Turn({corrects, incorrects, isLoading, isDataFilled}) {

    const { turn, isGameStarted } = useSelector((state) => state.gameDetails);
    const navigate = useNavigate();

    let filteredIncorrectsList1 = incorrects.filter((incorrect, index) => index % 2 === 0);
    let filteredIncorrectsList2 = incorrects.filter((incorrect, index) => index % 2 !== 0);

    const handleExitButton = () => {
        navigate("/");
        window.location.reload();
    }

    return ( //TODO: ADD FEATURE. Add validate isGameStared === true : false
        <>
            { turn <= 9 ? (
                <div>
                    <header>
                        <h1>What's this Pokemon?</h1>
                        <aside>turn {turn + 1}</aside>
                    </header>
                    <section>
                        <img src={corrects[turn].sprite} alt="sprite" />
                    </section>

                    <SelectionButtons
                        correctPokemon={corrects[turn]}
                        incorrectPokemon1={filteredIncorrectsList1[turn]}
                        incorrectPokemon2={filteredIncorrectsList2[turn]}
                    />

                    <footer>
                        <button onClick={()=>handleExitButton()}>
                            Exit
                        </button>
                    </footer>
                </div>
            ) : (
                undefined
            )}
        </>
    );
}
