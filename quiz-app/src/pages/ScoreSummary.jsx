
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScoreSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total, userAnswers } = location.state;

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold">Quiz Completed!</h1>
      <p className="text-xl my-4">Your score: {score} / {total}</p>
      <button
        className="bg-green-500 text-white p-2 rounded mt-4"
        onClick={() => navigate('/')}
      >
        Retake Quiz
      </button>
    </div>
  );
};

export default ScoreSummary;
