import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Results.css";


const amazonLinks = {
  "The Fresh Rebel": "https://www.amazon.com/dp/B0DPNJDWBY/ref=twister_B0DRW3GZBQ?_encoding=UTF8&th=1",
  "The Beard Boss": "https://www.amazon.com/Badmaash-Beards-Butter-All-Natural-Conditioning/dp/B0DPLHNXHD?ref_=ast_sto_dp&th=1",
  "The Chill Badmaash": "https://www.amazon.com/Badmaash-Beards-Butter-All-Natural-Conditioning/dp/B0DPNHYBYK?ref_=ast_sto_dp&th=1",
  "The Untamed Warrior": "https://www.amazon.com/dp/B0DPN8SN8C/ref=sspa_dk_detail_1?pd_rd_i=B0DPN8SN8C&pd_rd_w=HWOlk&content-id=amzn1.sym.f2f1cf8f-cab4-44dc-82ba-0ca811fb90cc&pf_rd_p=f2f1cf8f-cab4-44dc-82ba-0ca811fb90cc&pf_rd_r=EP6YFTDJHBH34GV71AZX&pd_rd_wg=iht6X&pd_rd_r=e68cdf1a-bdaa-4da9-89cf-d1260db4b81a&s=beauty&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1",
};

const Results = () => {
  const { resultId } = useParams();
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

  const productLink = amazonLinks[result.title];

  return (
    <div className="result-container">
      <h2>{result.title}</h2>
      <h4>Scent Match:</h4>
      <p>{result.scentMatch}</p>
      <h4>About You:</h4>
      <p>{result.description}</p>

      {productLink && (
        <a
          href={productLink}
          target="_blank"
          rel="noopener noreferrer"
          className="amazon-link"
        >
          View Product on Amazon
        </a>
      )}
    </div>
  );
};

export default Results;