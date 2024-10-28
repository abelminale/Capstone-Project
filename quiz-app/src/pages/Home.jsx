
import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [amount, setAmount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategories = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    };
    loadCategories();
  }, []);

  const startQuiz = () => {
    navigate(`/quiz?amount=${amount}&category=${selectedCategory}&difficulty=${difficulty}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Start Quiz</h1>
      <div className="mb-4">
        <label>Category</label>
        <select
          className="block w-full mt-1 p-2 border"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label>Difficulty</label>
        <select
          className="block w-full mt-1 p-2 border"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="mb-4">
        <label>Number of Questions</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="block w-full mt-1 p-2 border"
          min="1"
          max="50"
        />
      </div>
      <button
        onClick={startQuiz}
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
