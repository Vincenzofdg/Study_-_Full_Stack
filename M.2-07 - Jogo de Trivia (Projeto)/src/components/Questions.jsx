import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { questionApiThunk, scoreAction } from '../redux/actions';
import Btn from './Btn';

const ANSWER_NUMBER = 4;
const CODE = 3;
class Questions extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      order: '',
      atualQuestion: 0,
      second: 30,
      savedSecond: 0,
      score: 0,
    };

    this.handleNextBtn = this.handleNextBtn.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.timerCount = this.timerCount.bind(this);
    this.finishQuest = this.finishQuest.bind(this);
  }

  componentDidMount() {
    const { token, getQuestion, name, gravatarEmail, config } = this.props;
    getQuestion(token, config);
    this.shufflebuttons();
    this.timerCount();
    const player = { player: {
      name,
      assertions: 0,
      score: 0,
      gravatarEmail,
    } };

    localStorage.setItem('state', JSON.stringify(player));
  }

  componentWillUnmount() {
    // Source: "https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component "
    this.setState = () => null;
  }

  shufflebuttons() {
    const randomBtn = Math.floor(Math.random() * ANSWER_NUMBER).toString();
    this.setState({
      order: randomBtn,
    });
  }

  finishQuest() {
    this.setState({
      isClicked: true,
    });
  }

  corretAwnser(isItHard) {
    const THREE = 3;
    const TWO = 2;
    const ONE = 1;
    switch (isItHard) {
    case 'hard':
      return THREE;
    case 'medium':
      return TWO;
    case 'easy':
      return ONE;
    default:
      return 0;
    }
  }

  timerCount() {
    const SECOND = 1000;
    const action = setInterval(() => {
      const { second, savedSecond } = this.state;
      if (second === 0 || savedSecond !== 0) {
        this.finishQuest();
        return clearInterval(action);
      }
      this.setState((prevState) => ({ second: prevState.second - 1 }));
    }, SECOND);
    return action;
  }

  handleClick({ target }) {
    const CORRECT = 10;
    const { id, name } = target;
    const { second } = this.state;
    this.setState({
      isClicked: true,
      savedSecond: second,
    });

    if (id === 'correct') {
      const { attScoreGlobal, updateValue } = this.props;
      const yesPoint = CORRECT + (this.corretAwnser(name) * second);
      updateValue(yesPoint);

      this.setState((prev) => ({
        score: prev.score + yesPoint,
      }), () => {
        const { score } = this.state;
        attScoreGlobal(score);
      });
    }
  }

  handleNextBtn() {
    const { atualQuestion } = this.state;

    if (atualQuestion === ANSWER_NUMBER) {
      const { history } = this.props;
      history.push('/feedback');
    }

    this.setState({
      isClicked: false,
      atualQuestion: atualQuestion + 1,
      second: 30,
      savedSecond: 0,
    });
    this.timerCount();
    this.shufflebuttons();
  }

  render() {
    const { isClicked, order, atualQuestion, second } = this.state;
    const { questions, history } = this.props;
    const { results, response_code: responseCode } = questions;
    if (responseCode === 1) return <p>Não temos essas perguntas! Desculpe.</p>;
    if (results === undefined) return <p>Carregando...</p>;
    if (responseCode === CODE) {
      return (
        <main>
          <p>O tempo expirou! Inicie o jogo novamente</p>
          <button type="button" onClick={ () => history.push('/') }>
            Voltar para o inicio
          </button>
        </main>
      );
    } return (
      <main className="modal-dialog modal-content rounded-4 shadow">
        <div className="container px-4 py-5">
          <h2 className="pb-2 border-bottom" data-testid="question-category">
            { results[atualQuestion].category }
          </h2>
          <div className="row g-1 py-5 row-cols-2 row-cols-lg-2">
            <div className="">
              <p className="" data-testid="question-text">
                { results[atualQuestion].question }
              </p>
            </div>
            <Btn
              handleClick={ this.handleClick }
              isClicked={ isClicked }
              order={ order }
              atualQuestion={ atualQuestion }
              results={ results }
            />
          </div>
          <div className="pb-0 border-bottom">{ `${second} seg` }</div>
          <br />
          <button
            className="btn btn-primary btn-lg"
            type="button"
            data-testid="btn-next"
            onClick={ this.handleNextBtn }
            style={ { order: 5 } }
            hidden={ !isClicked }
          >
            Próxima
          </button>
        </div>
      </main>);
  }
}

Questions.propTypes = {
  attScoreGlobal: PropTypes.func.isRequired,
  config: PropTypes.objectOf(PropTypes.string).isRequired,
  getQuestion: PropTypes.func.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  name: PropTypes.string.isRequired,
  questions: PropTypes.shape({
    response_code: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  token: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token.success,
  config: state.trivia.config,
  questions: state.trivia.questions,
  name: state.player.name,
  gravatarEmail: state.player.email,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestion: (token, config) => dispatch(questionApiThunk(token, config)),
  attScoreGlobal: (score) => dispatch(scoreAction(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
