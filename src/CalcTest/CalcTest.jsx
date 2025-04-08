import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Container,
  Card,
  Form,
  Button,
  ListGroup,
  InputGroup,
  FormCheck,
} from "react-bootstrap";
import ToMain from "../ToMain.jsx";
import "../css.css";

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
      <Container className="text-center my-5">
        <h1>
          Ваш результат: {score} из {questions.length}
        </h1>
        <Button onClick={reset}>Попробовать еще раз</Button>
      </Container>
    );
  }

  return (
    <Container className="text-center my-5">
      <h2 className="mb-4">{questions[currentQuestion].question}</h2>
      <ListGroup className="mb-4 col-6 offset-3">
        {questions[currentQuestion].options.map((option) => (
          <ListGroup.Item key={option}>
            <FormCheck
              type="radio"
              name="quizOption"
              label={option}
              id={option}
              checked={userAnswer === option}
              onChange={() => setUserAnswer(option)}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="primary" onClick={handleSubmit} className="mt-3">
        Ответить
      </Button>
    </Container>
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
    <Card className="p-3 col-md-6 mx-auto my-5">
      <Card.Body>
        <Card.Title className="text-center mb-4">
          Калькулятор кредита
        </Card.Title>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Сумма кредита</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Процентная ставка (%)</Form.Label>
            <Form.Control
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Срок кредита (в годах)</Form.Label>
            <Form.Control
              type="number"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid">
            <Button variant="primary" onClick={calculatePayment}>
              Рассчитать
            </Button>
          </div>
        </Form>
        <h3 className="mt-3 text-center">
          Ежемесячный платеж: {monthlyPayment} ₽
        </h3>
      </Card.Body>
    </Card>
  );
}

export default function App() {
  return (
    <Container fluid>
      <ToMain />
      <LoanCalculator />
      <QuizApp />
    </Container>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
