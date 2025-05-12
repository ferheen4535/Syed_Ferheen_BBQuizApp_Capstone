import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Results = () => {
  const { resultId } = useParams(); // Get result ID from URL
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await axios.get(`http://localhost:5055/quiz/results/${resultId}`);
        setResult(res.data);
      } catch (error) {
        console.error('Failed to fetch result:', error);
        setResult(null);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [resultId]);

  if (loading) return <p>Loading your results...</p>;
  if (!result) return <p>Could not find result. Please try again.</p>;

  return (
    <div className="result-container">
      <h2>{result.title}</h2>
      <h4>Scent Match:</h4>
      <p>{result.scentMatch}</p>
      <h4>About You:</h4>
      <p>{result.description}</p>
    </div>
  );
};

export default Results;
