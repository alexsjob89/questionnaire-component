import React from 'react';
import ProgressBar from 'react-progressbar';

const Questionnaire = ({ score, totalQuestions }) => {
 return (
  <div className='scores'>
    <ProgressBar now={(score.correct / totalQuestions) * 100} label={`${score.correct}/${totalQuestions}`} className="progressbar"
    />
    <p>Correct answers: {score.correct}</p>
    <p>Incorrect answers: {score.incorrect}</p>
  </div>
);
}




export default Questionnaire;