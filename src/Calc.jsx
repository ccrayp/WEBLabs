import ToMain from "./ToMain.jsx";
import { useState, useEffect } from "react";
import "./css.css";

export default function Calc() {
  const [squareInPackage, setSquareInPackage] = useState("");
  const [direction, setDirection] = useState("");
  const [method, setMethod] = useState("onSquare");
  const [roomSquare, setRoomSquare] = useState("");
  const [roomWidth, setRoomWidth] = useState("");
  const [roomLength, setRoomLength] = useState("");
  const [result, setResult] = useState("Здесь будет результат вычислений");

  // Загрузка сохраненных значений при монтировании компонента
  useEffect(() => {
    const savedSquare = localStorage.getItem("squareInPackage");
    const savedDirection = localStorage.getItem("direction");
    const savedRoomSquare = localStorage.getItem("roomSquare");
    const savedRoomWidth = localStorage.getItem("roomWidth");
    const savedRoomLength = localStorage.getItem("roomLength");

    if (savedSquare) setSquareInPackage(savedSquare);
    if (savedDirection) setDirection(savedDirection);
    if (savedRoomSquare) setRoomSquare(savedRoomSquare);
    if (savedRoomWidth) setRoomWidth(savedRoomWidth);
    if (savedRoomLength) setRoomLength(savedRoomLength);
  }, []);

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  const handleCalculate = () => {
    let calculatedRoomSquare = 0;
    let calculatedResult = 0;

    if (method === "onSize") {
      calculatedRoomSquare = Number(roomWidth) * Number(roomLength);
    } else {
      calculatedRoomSquare = Number(roomSquare);
    }

    calculatedResult = calculatedRoomSquare / Number(squareInPackage);

    if (direction === "width" || direction === "length") {
      calculatedResult += calculatedResult * 0.05;
    } else if (direction === "45deg") {
      calculatedResult += calculatedResult * 0.15;
    }

    setResult(`Вам потребуется ${Math.ceil(calculatedResult)} упаковок`);
  };

  return (
    <>
      <ToMain />
      <div className="col-8 bg-warning offset-2 p-3">
        <div className="container-fluid">
          <div className="row text-center">
            <h1 className="text-center">Калькулятор ламината</h1>
          </div>
          <div className="row mt-5">
            <div className="form-group">
              <div className="mb-3">
                <h3>Количество квадратных метров в упаковке</h3>
                <input
                  className="form-control"
                  type="number"
                  value={squareInPackage}
                  placeholder="Введите площадь"
                  onChange={(e) => {
                    setSquareInPackage(e.target.value);
                    saveToLocalStorage("squareInPackage", e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <h3>Направление укладки ламината</h3>
                <select
                  className="form-control"
                  value={direction}
                  onChange={(e) => {
                    setDirection(e.target.value);
                    saveToLocalStorage("direction", e.target.value);
                  }}
                >
                  <option value="" disabled>
                    Выберите...
                  </option>
                  <option value="width">По ширине комнаты</option>
                  <option value="length">По длине комнаты</option>
                  <option value="45deg">Под углом 45 градусов</option>
                </select>
              </div>
              <div className="mb-3">
                <h3>Вариант расчета</h3>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="method"
                      id="onSquare"
                      checked={method === "onSquare"}
                      onChange={() => setMethod("onSquare")}
                    />
                    <label className="form-check-label" htmlFor="onSquare">
                      На площадь
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="method"
                      id="onSize"
                      checked={method === "onSize"}
                      onChange={() => setMethod("onSize")}
                    />
                    <label className="form-check-label" htmlFor="onSize">
                      По размерам поверхности
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                {method === "onSquare" ? (
                  <div>
                    <h3>Количество квадратных метров</h3>
                    <input
                      className="form-control"
                      type="number"
                      value={roomSquare}
                      placeholder="Введите площадь"
                      onChange={(e) => {
                        setRoomSquare(e.target.value);
                        saveToLocalStorage("roomSquare", e.target.value);
                      }}
                    />
                  </div>
                ) : (
                  <div>
                    <h3>Ширина помещения</h3>
                    <input
                      className="form-control"
                      type="number"
                      value={roomWidth}
                      placeholder="Введите ширину"
                      onChange={(e) => {
                        setRoomWidth(e.target.value);
                        saveToLocalStorage("roomWidth", e.target.value);
                      }}
                    />
                    <h3 className="mt-3">Длина помещения</h3>
                    <input
                      className="form-control"
                      type="number"
                      value={roomLength}
                      placeholder="Введите длину"
                      onChange={(e) => {
                        setRoomLength(e.target.value);
                        saveToLocalStorage("roomLength", e.target.value);
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">{result}</div>
              <button
                className="btn btn-primary col-12"
                onClick={handleCalculate}
              >
                Рассчитать
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}