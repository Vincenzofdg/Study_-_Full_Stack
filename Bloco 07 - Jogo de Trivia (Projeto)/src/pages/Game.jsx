import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import Questions from '../components/Questions';
import { gravatarAction, rankingAction } from '../redux/actions';
import Header from '../components/Header';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      source: '',
      score: 0,
    };
    this.newScore = this.newScore.bind(this);
  }

  componentDidMount() {
    const { token, rankingGlobalState } = this.props;

    this.fetchGravatar();

    localStorage.setItem('token', JSON.stringify(token));

    if (!JSON.parse(localStorage.getItem('ranking'))) {
      localStorage.setItem('ranking', JSON.stringify([]));
    } else {
      const rankingLocal = JSON.parse(localStorage.getItem('ranking'));
      rankingGlobalState(rankingLocal);
    }
  }

  convertEmailtoHash(email) {
    const hash = md5(email).toString();
    return hash;
  }

  async fetchGravatar() {
    const { email, getGravatar } = this.props;
    const hash = this.convertEmailtoHash(email);
    const source = await fetch(`https://www.gravatar.com/avatar/${hash}`);
    this.setState({ source: source.url });
    getGravatar(source);
  }

  newScore(score) {
    this.setState((prev) => ({ score: prev.score + score }));
    const storeLocal = JSON.parse(localStorage.getItem('state'));
    const { player } = storeLocal;
    const objPlayer = {
      player: {
        ...player,
        score: player.score + score,
        assertions: player.assertions + 1,
      },
    };

    localStorage.setItem('state', JSON.stringify(objPlayer));
  }

  render() {
    const { name, history } = this.props;
    const { source, score } = this.state;
    return (
      <>
        <Header name={ name } score={ score } source={ source } />
        <Questions history={ history } updateValue={ this.newScore } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.email,
  token: state.token.success,
});

const mapDispatchToProps = (dispatch) => ({
  getGravatar: (source) => dispatch(gravatarAction(source)),
  rankingGlobalState: (ranking) => dispatch(rankingAction(ranking)),
});

Game.propTypes = {
  getGravatar: PropTypes.func.isRequired,
  rankingGlobalState: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
