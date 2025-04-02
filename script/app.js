// Компонент Joke для отображения одного анекдота
function Joke({ question, punchLine }) {
    return (
      <div className="joke">
        <div className="question">{question}</div>
        <div className="punch-line">{punchLine}</div>
      </div>
    );
  }
  
  // Главный компонент App с коллекцией анекдотов
  function App() {
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
        punchLine: "Интроверт смотрит себе в ботинки, экстраверт - в чужие"
      }
    ];
    const random = jokes[Math.floor(Math.random() * jokes.length)]
    return (
      <div>
        <h1>Сборник анекдотов для программистов</h1>
          <Joke 
            key={random.index}
            question={random.question} 
            punchLine={random.punchLine} 
          />
      </div>
    );
  }