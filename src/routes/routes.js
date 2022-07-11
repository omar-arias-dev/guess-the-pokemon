import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "../views/Game";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Results from "../views/Results";

export default function PokeRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
