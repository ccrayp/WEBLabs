import styled from "styled-components";
import ToMain from "./ToMain.jsx";

const StyledBlock = styled.div`
  padding: 10px;
  height: 100px;
  width: 100px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
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

function Block({ name, hex }) {
  return (
    <StyledBlock style={{ backgroundColor: hex }}>
      <span>{name}</span>
    </StyledBlock>
  );
}

export default function ColoredBlocks() {
  const colors = [
    { name: "Красный", hex: "#FF0000" },
    { name: "Зеленый", hex: "#32CD32" },
    { name: "Синий", hex: "#0000FF" },
    { name: "Желтый", hex: "#FFFF00" },
    { name: "Фиолетовый", hex: "#4B0082" },
    { name: "Оранжевый", hex: "#FFA500" },
  ];

  return (
    <div>
      <ToMain />
      <Centered>
        <h1>Цветные блоки</h1>
        <BlockContainer>
          {colors.map((element) => (
            <Block key={element.hex} name={element.name} hex={element.hex} />
          ))}
        </BlockContainer>
      </Centered>
    </div>
  );
}
