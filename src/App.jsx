import React,{useEffect,useState} from 'react';
import './App.css';
import Question from './Question';
import Result from './Result';

const questions = [
  { question: 'In which continent did the ostrich originate?', choices: ['Africa', 'Australia', 'North America'], answer: 'Africa' },
  { question: 'Which pop duo was the first western band to play in The Peoples Republic of China?', choices: ['Wham', 'Simon and Garfunkel', 'Chas and Dave'], answer: 'Wham' },
  { question: "Timber selected from how many fully grown oak trees were needed to build a large 3 decker Royal Navy battle ship in the 18th century?", choices: ["500", "1.500" , "3.500"], answer: "3.500"},
  { question: "What are the names of the two main characters in Diana Gabaldon's highland saga novels?", choices: ["Jamie and Claire", "Fergus and Fiona" , "Rab and Elizabeth"], answer: "Jamie and Claire"},
  { question: "Doris Day had a sleepy hit with which song?", choices: ["Pillow talk", "Golden slumbers" , "The beds too big without you"], answer: "Pillow talk"},
  { question: "Which singer once took a bite out of a Beach Boys record during a press conference?", choices: ["Robbie Williams", "Engelbert Humperdinck" , "Shane McGowan"], answer: "Shane McGowan"},
];


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });

  const handleAnswer = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answer;
    setUserAnswers(newAnswers);
  }

  const handleSubmit = () => {
    if (userAnswers[currentQuestion] === questions[currentQuestion].answer) {
      setScore(prevScore => ({ ...prevScore, correct: prevScore.correct + 1 }));
    } else {
      setScore(prevScore => ({ ...prevScore, incorrect: prevScore.incorrect + 1 }));
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  useEffect(() => {
    if (currentQuestion >= questions.length) {
      alert(`Quiz finished! Correct answers: ${score.correct}, Incorrect answers: ${score.incorrect}`);
    }
  }, [currentQuestion, score]);

  if (currentQuestion >= questions.length) {
    return <h1>Quiz finished! Check your console for results.</h1>
  }

  return (

    <div className='questionnaire-container' >
      <Question question={questions[currentQuestion]} currentAnswer={userAnswers[currentQuestion]} handleAnswer={handleAnswer} />
      <Result score={score} currentQuestion={currentQuestion} totalQuestions={questions.length} />

      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
}

export default App;
