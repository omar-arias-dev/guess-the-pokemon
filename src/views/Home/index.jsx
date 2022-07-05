import { useNavigate } from "react-router-dom";

export default function Home() {

    let navigate = useNavigate();

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate("/game")}>Start game</button>
        </div>
    );
}
