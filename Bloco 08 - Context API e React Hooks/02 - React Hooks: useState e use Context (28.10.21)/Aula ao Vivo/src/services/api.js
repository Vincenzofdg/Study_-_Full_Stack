import data from './questionsData';

localStorage.setItem('questions', JSON.stringify(data));

const readQuestions = () => JSON.parse(localStorage.getItem('questions'));

const saveQuestions = (questions) => localStorage
  .setItem('questions', JSON.stringify(questions));

const ONE_SECOND = 1000;

export const getQuestions = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      const questions = readQuestions();
      resolve(questions);
    }, ONE_SECOND);
  })
);

export const createQuestion = (questionData) => {
  let questions = readQuestions();
  const nextId = questions[questions.length - 1].id + 1;
  const newQuestion = { ...questionData, id: nextId };
  questions = [...questions, newQuestion];
  saveQuestions(questions);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, 100);
  });
};
