import React from 'react';

    function Question({ question, currentAnswer, handleAnswer }) {

      return (
        <div className='display-questions'>
          <h1>{question.question}</h1>
          {question.choices.map((choice, index) => (
            <div className='labels' key={index}>
              <label className='inputs'>
                <input type="radio" value={choice} checked={currentAnswer === choice} onChange={() => handleAnswer(choice)} />
                {choice}
              </label>
            </div>
          ))}
        </div>
      );
    }


export default Question;