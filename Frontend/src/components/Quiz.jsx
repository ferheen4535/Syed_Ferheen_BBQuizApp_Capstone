import axios from 'axios';
const API = import.meta.env.VITE_API_URL;

export const createUser = async (userData) => {
  const res = await axios.post(`${API}/users`, userData);
  return res.data;
};
//----------API---------//


import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const { text, options } = questions[currentQuestion];

  const onAnswerClick = (index) => {
    setAnswerIndex(index);
  };

  const onClickNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswerIndex(null); // reset answer selection
    }
  };

  return (
    <div className="quiz-container">
      <span className="active-question-no">{currentQuestion + 1}</span>
      <span className="total-question"> / {questions.length}</span>

      <div className="question">{text}</div>

      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            className={answerIndex === index ? 'selected' : ''}
            onClick={() => onAnswerClick(index)}
          >
            {option}
          </li>
        ))}
      </ul>

      <div className="arrow">
        <button onClick={onClickNext}>
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;