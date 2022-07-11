import { useNavigate } from "react-router-dom";
import Charmander from "./../../assets/images/homeImage.png";
import Logo from "./../../assets/images/OA.png";

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
                <footer className="text-sm text-center flex flex-row items-center">
                    Created by
                    <a className="flex flex-row items-center m-1" href="https://twitter.com/omarariasdev" rel="noreferrer" target="_blank">
                        Omar Arias
                        <img className="w-5  m-1" src={Logo} alt="Omar Arias"/>
                    </a>
                </footer>
        </div>
    );
}
