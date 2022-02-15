import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import QuestionsContext from '../context/QuestionsContext';

function NewQuestionPage() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  
  const { createNewQuestion: createNewQuestionApi } = useContext(QuestionsContext);
  const history = useHistory();

  async function createNewQuestion(ev) {
    ev.preventDefault();
    const newQuestion = { user: name, question };
    await createNewQuestionApi(newQuestion);
    history.push('/');
  }

  return (
    <section className="question-section">
      <form onSubmit={ (ev) => createNewQuestion(ev) }>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            onChange={ (ev) => setQuestion(ev.target.value)}
            value={question}
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            onChange={ ev => setName(ev.target.value)}
            value={name}
            type="text"
            name="name"
            placeholder="Maria"
            id="user"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;
