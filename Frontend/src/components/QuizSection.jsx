import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QuizSection = () => {
  const [questions, setQuestions] = useState([]); //state hook used, quesitons from mongodb to update questions in browser//
  const [currentQuestion, setCurrentQuestion] = useState(0); //quesiton will start [0] and keep track //
  const [answerIndex, setAnswerIndex] = useState(null); //tracks when the answer is selected//
  const navigate = useNavigate(); //hook to direct to results//

  useEffect(() => {
    // fetches questions//
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:5055/quiz/questions");
        setQuestions(res.data);
      } catch (error) {
        console.error("Failed to fetch quiz questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerClick = async (index) => {
    setAnswerIndex(index);

    setTimeout(async () => {
      // Question 3
      //text: "What’s your vibe?"//
      //answer index:
      //0: "Just starting out (stubble stage)"
      //1:"Mid-growth chaos (patchy or uneven)"
      //2:"Full-grown legend (beard is strong and proud)"
      // 3: "Wild Badmaash (long, thick, and untamed)"

      if (currentQuestion === 3) {
        try {
          const res = await axios.post("http://localhost:5055/quiz/results", {
            answers: [{ questionIndex: 3, answerIndex: index }],
          });

          const resultId = res.data.resultId;
          if (resultId) {
            navigate(`/results/${resultId}`);
          } else {
            alert("No result found. Try again.");
          }
        } catch (error) {
          console.error("Error submitting answer:", error);
          alert("Failed to submit your answer. Try again.");
        }
      } else {
        // Go to next question//
        setCurrentQuestion((prev) => prev + 1);
        setAnswerIndex(null);
      }
    }, 500);
  };

  if (!questions[currentQuestion]) return <p>Loading question...</p>;

  const { text, options } = questions[currentQuestion];

  //html formating//
  return (
    <div className="quiz-container">
      <div className="question">{text}</div>
      <ul className="options-list">
        {Array.isArray(options) &&
          options.map((option, index) => (
            <li
              key={index}
              className={answerIndex === index ? "selected" : ""}
              onClick={() => handleAnswerClick(index)}
            >
              {option}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default QuizSection;


//sources:

//Tutor: Jabeen Khan//

//Get/fetch data from MongoDB and display them in Reactjs application
//https://www.youtube.com/watch?v=Mfp94RjugWQ

//Fetch Data from Mongo DB and Show it to React using Node JS
//https://www.youtube.com/watch?v=51JCCLjImnA

//Get/fetch data from mongo db and show it in React JS | Fetch data from mongo | CRUD Mongo Db
//https://www.youtube.com/watch?v=BpR5dGRxeA8