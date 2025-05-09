import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/UserForm');   //change to UserForm 
  };

  return (
    <div>
      <h1>This is the intro section</h1>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}