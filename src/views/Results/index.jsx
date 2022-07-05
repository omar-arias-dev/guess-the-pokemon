import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Results() {

    const { points } = useSelector((state) => state.gameDetails)
    const navigate = useNavigate();

    const handleExitButton = () => {
        navigate("/");
        window.location.reload();
    }

    return (
        <div>
            <div>Results</div>
            <h2>You got {points} points</h2>
            <button onClick={()=>handleExitButton()}>OK</button>
        </div>
    );
}
