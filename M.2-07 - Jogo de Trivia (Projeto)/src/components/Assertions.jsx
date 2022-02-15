import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Assertions extends Component {
  render() {
    const { assertions, score } = this.props;
    return (
      <div>
        {
          assertions === 0 ? (
            <h3 className="fs-5 fw-bold mb-4">
              Não acertou nenhuma pergunta!
              <span hidden data-testid="feedback-total-question">{assertions}</span>
            </h3>
          ) : (
            <h3 className="fs-5 fw-bold mb-4">
              Você acertou
              {' '}
              <span data-testid="feedback-total-question">{assertions}</span>
              {' '}
              pergunta(s)!
            </h3>
          )
        }
        <h3 className="fs-5 fw-bold mb-4">
          Um total de
          {' '}
          <span data-testid="feedback-total-score">{score}</span>
          {' '}
          pontos
        </h3>
      </div>
    );
  }
}

Assertions.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Assertions;
