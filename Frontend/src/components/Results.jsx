import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Results = () => {
  const { id } = useParams();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await axios.get(`http://localhost:5055/results/${id}`);
        setResult(res.data);
      } catch (err) {
        setError('Could not load result.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [id]);

  if (loading) return <p>Loading result...</p>;
  if (error) return <p>{error}</p>;
  if (!result) return <p>No result found.</p>;

  return (
    <div className="result-container">
      <h2>{result.title}</h2>
      <h4>Scent Match: {result.scentMatch}</h4>
      <p>{result.description}</p>
    </div>
  );
};

export default Results;
