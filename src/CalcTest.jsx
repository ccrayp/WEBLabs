import ToMain from "./ToMain.jsx";
import {useState} from "react";
import "./css.css";

const questions = [
  {
    question: "Какой язык используется для создания веб-страниц?",
    options: ["HTML", "Python", "Java", "C++"],
    answer: "HTML",
  },
  {
    question: "Кто создал React?",
    options: ["Google", "Facebook", "Microsoft", "Twitter"],
    answer: "Facebook",
  },
  {
    question: "Что такое JSX?",
    options: [
      "Язык программирования",
      "Синтаксис",
      "Библиотека",
      "Препроцессор",
    ],
    answer: "Синтаксис",
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const reset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setFinished(false);
  };

  const handleSubmit = () => {
    if (userAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setUserAnswer("");
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
        <div className="container text-center my-5">
          <h1>
            Ваш результат: {score} из {questions.length}
          </h1>
          <button className="btn btn-primary" onClick={reset}>
            Попробовать еще раз
          </button>
        </div>
    );
  }

  return (
      <div className="container text-center my-5">
        <h2 className="mb-4">{questions[currentQuestion].question}</h2>
        <ul className="list-group mb-4 col-6 offset-3">
          {questions[currentQuestion].options.map((option) => (
              <li key={option} className="list-group-item">
                <div className="form-check">
                  <input
                      className="form-check-input"
                      type="radio"
                      name="quizOption"
                      id={option}
                      checked={userAnswer === option}
                      onChange={() => setUserAnswer(option)}
                  />
                  <label className="form-check-label" htmlFor={option}>
                    {option}
                  </label>
                </div>
              </li>
          ))}
        </ul>
        <button
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
        >
          Ответить
        </button>
      </div>
  );
}

function LoanCalculator() {
  const [amount, setAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [term, setTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculatePayment = () => {
    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(term) * 12;

    const payment =
        (principal * calculatedInterest) /
        (1 - Math.pow(1 + calculatedInterest, -calculatedPayments));
    setMonthlyPayment(isNaN(payment) ? 0 : payment.toFixed(2));
  };

  return (
      <div className="card p-3 col-md-6 mx-auto my-5">
        <div className="card-body">
          <h5 className="card-title text-center mb-4">Калькулятор кредита</h5>
          <form>
            <div className="mb-3">
              <label className="form-label">Сумма кредита</label>
              <input
                  type="number"
                  className="form-control"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Процентная ставка (%)</label>
              <input
                  type="number"
                  className="form-control"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Срок кредита (в годах)</label>
              <input
                  type="number"
                  className="form-control"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button
                  type="button"
                  className="btn btn-primary"
                  onClick={calculatePayment}
              >
                Рассчитать
              </button>
            </div>
          </form>
          <h3 className="mt-3 text-center">
            Ежемесячный платеж: {monthlyPayment} ₽
          </h3>
        </div>
      </div>
  );
}

export default function CalcTest() {
  return (
      <div className="container-fluid">
        <ToMain />
        <LoanCalculator />
        <QuizApp />
      </div>
  );
}