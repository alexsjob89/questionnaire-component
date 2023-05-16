import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import {FcOk} from "react-icons/fc";
import {GiCancel} from "react-icons/gi";

function Result({ score, currentQuestion, totalQuestions }) {
 return (
   <div className='result'>
     <ProgressBar now={(currentQuestion / totalQuestions) * 100} label={`${currentQuestion}/${totalQuestions}`} style={{margin: "10px"}}/>
     <p><FcOk size={"25px"}/> {score.correct}</p>
     <p><GiCancel color='red' size={"25px"}/> {score.incorrect}</p>
     <p>Total answers given: {score.correct + score.incorrect}</p>
   </div>
 );
}

export default Result