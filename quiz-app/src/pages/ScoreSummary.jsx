// src/pages/ScoreSummary.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScoreSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total, userAnswers } = location.state;

  return (
    <div className="container mx-auto p-8 text-center max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Quiz Completed!</h1>
      <p className="text-2xl mb-4">Your final score: {score}/{total}</p>
      <div className="text-left mb-8">
        {userAnswers.map((isCorrect, index) => (
          <p key={index} className={`mb-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {index + 1}. {isCorrect ? 'Correct' : 'Incorrect'}
          </p>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onClick={() => navigate('/')}
        >
          Retake Quiz
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          onClick={() => navigate('/')}
        >
          Choose Different Topic
        </button>
      </div>
    </div>
  );
};

export default ScoreSummary;
