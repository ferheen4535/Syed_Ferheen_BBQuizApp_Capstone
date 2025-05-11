import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const QuizSection = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const navigate = useNavigate();

  // Fetch quiz questions//
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get('http://localhost:5055/quiz/questions');
        setQuestions(res.data.slice(0, 5)); // Get first 5 questions only
      } catch (error) {
        console.error('Failed to fetch quiz questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerClick = (index) => {
    setAnswerIndex(index);
  };

  const handleNextClick = async () => {
    if (answerIndex === null) return;

    const selectedAnswer = questions[currentQuestion].options[answerIndex];
    const updatedAnswers = [...selectedAnswers, selectedAnswer];
    setSelectedAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswerIndex(null);
    } else {
      // Quiz is finished — send answers to backend
      try {
        const res = await axios.post('http://localhost:5055/results/', {
          answers: updatedAnswers,
        });

        const resultId = res.data.resultId;
        if (resultId) {
          navigate(`/results/${resultId}`);
        } else {
          alert('No result found. Try again.');
        }
      } catch (error) {
        console.error('Error submitting quiz answers:', error);
        alert('There was an issue calculating your result. Please try again.');
      }
    }
  };

  if (questions.length === 0) return <p>Loading quiz...</p>;

  const { text, options } = questions[currentQuestion];

  return (
    <div className="quiz-container">
      
      <div className="question">{text}</div>

      <ul className="options-list">
        {options.map((option, index) => (
          <li
            key={index}
            className={answerIndex === index ? 'selected' : ''}
            onClick={() => handleAnswerClick(index)}
          >
            {option}
          </li>
        ))}
      </ul>

      <div className="quizbutton">
        <button onClick={handleNextClick}>
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default QuizSection;
