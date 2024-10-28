import React from 'react';

const QuestionCard = ({ questionData, onAnswer }) => {
  const { question, incorrect_answers, correct_answer } = questionData;
  const answers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-4" dangerouslySetInnerHTML={{ __html: question }} />
      <div className="flex flex-col">
        {answers.map((answer, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white p-2 rounded mt-2"
            onClick={() => onAnswer(answer === correct_answer)}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
