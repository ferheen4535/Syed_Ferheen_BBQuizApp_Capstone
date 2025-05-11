import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/UserForm');   //change to UserForm 
  };

  return (
    <div className="intro-container">
    <div>
      <p>Welcome to the Badmaash Beards product recommendation quiz. 
        Discover the perfect products tailored to elevate your beard 
        care routine. Whether you’re seeking refinement or boldness, 
        we’ve got you covered. Answer a few simple questions, 
        and let us guide you to the ideal products for your 
        unique beard.</p>
      <button onClick={handleStart}>Start Quiz</button>
      </div>
    </div>
  );
}