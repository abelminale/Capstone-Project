
export const fetchCategories = async () => {
    const response = await fetch("https://opentdb.com/api_category.php");
    const data = await response.json();
    return data.trivia_categories;
  };
  
  export const fetchQuizQuestions = async (amount, category, difficulty) => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    const data = await response.json();
    return data.results;
  };
  