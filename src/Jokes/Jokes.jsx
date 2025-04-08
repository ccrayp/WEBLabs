import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import ToMain from '../ToMain.jsx'
import '../index.css'
import styled from 'styled-components'

const StyledJoke = styled.div`
  background-color: #f8f9fa;
  border-left: 5px solid #61dafb;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  width: 900px;
`

const Question = styled.div`
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
`

const PunchLine = styled.div`
  color: #666;
  font-style: italic;
`

const CenterBlock = styled.div`
  place-items: center;
`

const RefreshButton = styled.button`
  width: 100%;
`

function Joke({ question, punchLine }) {
  return (
    <StyledJoke>
      <Question>{question}</Question>
      <PunchLine>{punchLine}</PunchLine>
    </StyledJoke>
  );
}

function Jokes() {
  const jokes = [
    {
      question: "Почему программисты путают Хэллоуин и Рождество?",
      punchLine: "Потому что Oct 31 == Dec 25"
    },
    {
      question: "Как называют программиста, который боится женщин?",
      punchLine: "Гик-офоб"
    },
    {
      question: "Сколько программистов нужно, чтобы вкрутить лампочку?",
      punchLine: "Ни одного. Это аппаратная проблема!"
    },
    {
      question: "Почему 1 + 1 = 10?",
      punchLine: "Потому что мы в двоичной системе!"
    },
    {
      question: "Как отличить интроверта-программиста от экстраверта-программиста?",
      punchLine: "Интроверт смотрит себе в ботинки, экстраверт — в чужие"
    }
  ];

  const getRandomJoke = () => jokes[Math.floor(Math.random() * jokes.length)];
  const [randomJoke, updateJoke] = useState(getRandomJoke())
  return (
    <div>
      <ToMain />
      <CenterBlock>
          <h1>Сборник анекдотов для программистов</h1>
          <Joke
            question={randomJoke.question}
            punchLine={randomJoke.punchLine}
          />
          <RefreshButton onClick={ () => updateJoke(getRandomJoke())}>
            Ещё анекдот
            </RefreshButton>
      </CenterBlock>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jokes />
  </StrictMode>
);