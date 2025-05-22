import "./Intro.css";


import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/UserForm');   //change to UserForm 
  };

  return (
    <div className="intro-container">
    <div>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Find The Right Badmaash Beards Products For You</p> 
 
         
         <p>Answer a few simple questions 
        and let us guide you to the perfect Badmaash products tailored to elevate your beard 
        care routine.
       </p>
      <button onClick={handleStart}>Start Quiz</button>
      </div>
    </div>
  );
}