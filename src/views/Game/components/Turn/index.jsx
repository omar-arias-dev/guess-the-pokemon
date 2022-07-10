import { useSelector } from "react-redux";
import ExitButton from "./components/ExitButton";
import SelectionButtons from "./components/SelectionButtons";

export default function Turn({corrects, incorrects, isLoading, isDataFilled}) {

    const { turn } = useSelector((state) => state.gameDetails);

    let filteredIncorrectsList1 = incorrects.filter((incorrect, index) => index % 2 === 0);
    let filteredIncorrectsList2 = incorrects.filter((incorrect, index) => index % 2 !== 0);

    return (
        <>
            { turn <= 9 ? (
                <div className="flex flex-col justify-evenly items-center h-screen container min-w-full">
                    <header className="w-full relative">
                        <ExitButton position="absolute -top-16 left-16" />
                        <h1 className="text-6xl text-center bg-gradient-to-r from-green-400 to-blue-500">Who's that Pokemon?</h1>
                        <aside className="flex absolute -top-20 right-14">
                            <h2 className="text-green-800 text-5xl">{turn + 1}</h2>
                        </aside>
                    </header>
                    <section className="w-full flex justify-center min-h-[20%]">
                        <img src={corrects[turn].sprite} alt="sprite" />
                    </section>

                    <SelectionButtons
                        correctPokemon={corrects[turn]}
                        incorrectPokemon1={filteredIncorrectsList1[turn]}
                        incorrectPokemon2={filteredIncorrectsList2[turn]}
                    />

                    <footer>
                        
                    </footer>
                </div>
            ) : (
                undefined
            )}
        </>
    );
}
