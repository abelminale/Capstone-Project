
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
    <div className="container mx-auto p-8 max-w-lg">
      <h1 className="text-4xl font-bold text-center mb-10">Quiz App</h1>
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Select Topic</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Select Difficulty</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button
        onClick={startQuiz}
        className="w-full bg-blue-500 text-white py-3 rounded-lg mt-8 hover:bg-blue-600"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
