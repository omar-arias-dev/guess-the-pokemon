import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "../views/Game";
import Home from "../views/Home";
import Results from "../views/Results";

export default function PokeRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/results" element={<Results />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
