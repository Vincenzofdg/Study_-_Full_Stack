import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { rankingAction, scoreAction } from '../redux/actions';
import Assertions from '../components/Assertions';
import './css/feedback.css';

class Feedback extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.createRankingPlayer = this.createRankingPlayer.bind(this);
  }

  createRankingPlayer() {
    const { source, attRankingState } = this.props;

    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const state = JSON.parse(localStorage.getItem('state'));

    if (ranking === null || state === null) {
      return <p>Error G-07</p>;
    }

    const { player: { name, score } } = state;
    const player = {
      name,
      score,
      picture: source,
    };

    attRankingState([...ranking, player]);
    localStorage.setItem('ranking', JSON.stringify([...ranking, player]));
  }

  handleClick({ target }) {
    const { history, resetScoreGlobal } = this.props;
    const { innerText } = target;
    if (innerText === 'Jogar Novamente' || innerText === 'Volte ao Início') {
      history.push('/');
    } else if (innerText === 'Ver Ranking') history.push('/ranking');

    this.createRankingPlayer();
    resetScoreGlobal(0);
  }

  render() {
    const { name, source } = this.props;
    const state = JSON.parse(localStorage.getItem('state'));
    if (state === null) {
      return (
        <button type="button" onClick={ this.handleClick }>
          Volte ao Início
        </button>
      );
    }
    const { player: { score, assertions } } = state;
    const MIN_ANSWERS = 3;
    return (
      <div>
        <Header name={ name } score={ score } source={ source } />
        <main className="container margin py-5">
          <div>
            <h3 data-testid="feedback-text" className="fs-1 fw-bold mb-4">
              {assertions < MIN_ANSWERS ? 'Podia ser melhor...' : 'Mandou bem!'}
            </h3>
            <hr className="my-4" />
            <br />
            <Assertions assertions={ assertions } score={ score } />
          </div>
          <br />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              type="button"
              onClick={ this.handleClick }
              data-testid="btn-play-again"
              className="py-2 mb-2 btn btn-outline-primary"
            >
              Jogar Novamente
            </button>
            <button
              type="button"
              onClick={ this.handleClick }
              data-testid="btn-ranking"
              className="py-2 mb-4 btn btn-outline-primary"
            >
              Ver Ranking
            </button>
          </div>
        </main>
      </div>
    );
  }
}

Feedback.propTypes = {
  attRankingState: PropTypes.func.isRequired,
  resetScoreGlobal: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.email,
  source: state.player.source.url,
});

const mapDispatchToProps = (dispatch) => ({
  resetScoreGlobal: (score) => dispatch(scoreAction(score)),
  attRankingState: (ranking) => dispatch(rankingAction(ranking)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
