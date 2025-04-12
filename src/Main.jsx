import styled from "styled-components";
import {Link} from "react-router";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
`;

export default function Main() {
    return (
        <Center>
            <ol>
            <Link to="/jokes">
                <li>Случайная цитата</li>
            </Link>
            <Link to="/colored_blocks">
                <li>Цветные блоки</li>
            </Link>
            <Link to="/components">
                <li>Работа с компонентами</li>
            </Link>
            <Link to="/random_colored_blocks">
                <li>Цветные блоки с кнопкой</li>
            </Link>
            <Link to="/calc_test">
                <li>Калькулятор и тест на одной странице</li>
            </Link>
            <Link to="/calc">
                <li>Свой калькулятор</li>
            </Link>
      </ol>
    </Center>
    )
}