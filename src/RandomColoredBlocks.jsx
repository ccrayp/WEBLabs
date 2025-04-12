import ToMain from "./ToMain.jsx";
import {useState} from "react";
import styled from "styled-components";

const StyledBlock = styled.div`
  padding: 10px;
  height: 100px;
  width: 100px;
  margin: 10px;
  color: #000;
  border-radius: 5px;
  border: black 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Centered = styled.div`
  place-items: center;
`;

const BlockContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  white-space: nowrap;
`;

const Button = styled.button``;

function Block({ name, hex }) {
  return (
      <StyledBlock style={{ backgroundColor: hex }}>
        <span>{name}</span>
      </StyledBlock>
  );
}

export default function RandomColoredBlocks() {

  function generateColors() {
    let colors = [];
    for (let i = 0; i < 5; i++) {
      colors.push({
        id: i,
        hex: "#" + Math.floor(Math.random() * 16777215).toString(16),
      });
    }
    return colors;
  }

  const [colors, changeColor] = useState(generateColors());

  return (
    <div>
      <ToMain />
      <Centered>
        <h1>Цветные блоки</h1>
        <BlockContainer>
          {colors.map((element) => (
            <Block key={element.hex} name={element.hex} hex={element.hex} />
          ))}
        </BlockContainer>
        <Button onClick={() => changeColor(generateColors())}>
          Сменить цвета
        </Button>
      </Centered>
    </div>
  );
}