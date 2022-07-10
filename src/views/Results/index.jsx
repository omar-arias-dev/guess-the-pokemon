import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import shinyCharmander from "./../../assets/images/results.png";
import shiny from "./../../assets/images/stars.png"


export default function Results() {

    const { points } = useSelector((state) => state.gameDetails)
    const navigate = useNavigate();

    const handleExitButton = () => {
        navigate("/");
        window.location.reload();
    }

    return (
        <div className="h-screen Pastel bg-gradient-to-tr from-violet-500 to-orange-300 flex flex-col justify-around items-center">
            <header className="w-full">
                <h1 className="text-6xl text-center">Results</h1>
            </header>
            <div className="relative flex flex-col items-center">
                <img className="absolute w-20 top-10" src={shiny} alt="shiny" />
                <img src={shinyCharmander} alt="shiny charmander" />
            </div>
            <h2 className="text-6xl text-center">You got {points} points</h2>
            <button className="bg-violet-600 hover:bg-violet-800 rounded-xl border-2 border-white p-2 mx-4 text-sm font-bold capitalize" onClick={()=>handleExitButton()}>OK</button>
        </div>
    );
}
