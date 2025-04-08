import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
`;

export default function App() {
  return (
    <Center>
      <ol>
        <a href="./src/Jokes/jokes.html">
          <li>Случайная цитата</li>
        </a>
        <a href="./src/ColoredBlocks/coloredBlocks.html">
          <li>Цветные блоки</li>
        </a>
        <a href="./src/Components/components.html">
          <li>Работа с компонентами</li>
        </a>
        <a href="./src/RandomColoredBlocks/randomColoredBlocks.html">
          <li>Цветные блоки с кнопкой</li>
        </a>
        <a href="./jokes.html">
          <li>Калькулятор и тест на одной странице</li>
        </a>
        <a href="./jokes.html">
          <li>Свой калькулятор</li>
        </a>
      </ol>
    </Center>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
