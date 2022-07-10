import { useNavigate } from "react-router-dom";
import Charmander from "./../../assets/images/homeImage.png";

export default function Home() {

    let navigate = useNavigate();

    return (
        <div className="flex flex-col justify-around items-center h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <img className="sm:max-w-max md:max-w-sm" src={Charmander} alt="charmander" />
                <div>
                    <h1 className="text-6xl text-center">GUESS THE POKEMON</h1>
                    <p className="text-center">A frontend web game</p>
                </div>
                <div className="flex items-center justify-center mx-2 my-4">
                    <button
                        className="bg-rose-600 hover:bg-rose-700 font-bold rounded-xl border-2 border-white p-2 mx-4"
                        onClick={() => navigate("/game")}
                    >
                        Start game
                    </button>
                </div>
                <footer className="text-sm text-center">Created by Omar Arias</footer>
        </div>
    );
}
