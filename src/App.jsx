import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./Main.jsx";
import Calc from "./Calc.jsx";
import Jokes from "./Jokes.jsx";
import CalcTest from "./CalcTest.jsx";
import Components from "./Components.jsx";
import ColoredBlocks from "./ColoredBlocks.jsx";
import RandomColoredBlocks from "./RandomColoredBlocks.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/jokes" element={<Jokes/>} />
                <Route path="/colored_blocks" element={<ColoredBlocks/>} />
                <Route path="/components" element={<Components/>} />
                <Route path="/random_colored_blocks" element={<RandomColoredBlocks/>} />
                <Route path="/calc_test" element={<CalcTest/>} />
                <Route path="/calc" element={<Calc/>} />
            </Routes>
        </BrowserRouter>
    )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
