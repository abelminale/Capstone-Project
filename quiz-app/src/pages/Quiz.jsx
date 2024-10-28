
import React, { useEffect, useState } from 'react';
import { fetchQuizQuestions } from '../services/api';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get('amount');
  const category = queryParams.get('category');
  const difficulty = queryParams.get('difficulty');

  useEffect(() => {
    const loadQuestions = async () => {
      const quizQuestions = await fetchQuizQuestions(amount, category, difficulty);
      setQuestions(quizQuestions);
    };
    loadQuestions();
  }, [amount, category, difficulty]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
    setUserAnswers((prev) => [...prev, isCorrect]);
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      navigate('/score', { state: { score, total: questions.length, userAnswers } });
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Question {currentQuestionIndex + 1}/{questions.length}</h2>
        <p className="text-sm">Score: {score}</p>
      </div>
      {questions.length > 0 ? (
        <QuestionCard
          questionData={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
