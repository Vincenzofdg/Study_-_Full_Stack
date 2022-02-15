import React from 'react';

import QuestionList from '../components/QuestionList';
import QuestionsContext from '../context/QuestionsContext';

class QuestionListPage extends React.Component {
  componentDidMount() {
    const { fetchQuestions } = this.context;
    fetchQuestions();
  }

  render() {
    const { isLoading } = { isLoading: false };
    const { history } = this.props;
    return !isLoading ? (
      <section>
        <QuestionList />
        <button
          type="button"
          onClick={ () => history.push('/new-question') }
        >
          Nova Pergunta
        </button>
      </section>
    ) : <span>Carregando...</span>;
  }
}

QuestionListPage.contextType = QuestionsContext;

export default QuestionListPage;

