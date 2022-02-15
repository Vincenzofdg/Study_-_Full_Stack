import React, { useState } from 'react';
import { createQuestion, getQuestions } from '../services/api';
import QuestionsContext from './QuestionsContext';

function QuestionsProvider({ children }) {
  const [ question, setQuestion ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  async function fetchQuestions() {
    setIsLoading(true);
    const questions = await getQuestions();
    setQuestion(questions);
    setIsLoading(false);
  }

  const createNewQuestion = async (newQuestion) => {
    setIsLoading(true);
    await createQuestion(newQuestion);
    setQuestion([ ...question, newQuestion]);
    setIsLoading(false);
  }

  return(
    <QuestionsContext.Provider value={ { question, isLoading, fetchQuestions, createNewQuestion }}>
      {children}
    </QuestionsContext.Provider>
    );
}

export default QuestionsProvider;
