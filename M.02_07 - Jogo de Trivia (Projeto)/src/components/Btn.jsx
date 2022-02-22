import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Btn extends Component {
  render() {
    const {
      handleClick, isClicked,
      order, results,
      atualQuestion } = this.props;
    return (
      <div className="flex-column border-top-0 d-grid gap-4">
        <button
          id="correct"
          name={ results[atualQuestion].difficulty }
          type="button"
          data-testid="correct-answer"
          className="btn btn-secondary"
          style={ { order, border: isClicked ? '3px solid rgb(6, 240, 15)' : null } }
          onClick={ handleClick }
          disabled={ isClicked }
        >
          { results[atualQuestion].correct_answer }
        </button>
        { results[atualQuestion].incorrect_answers.map((answer, index) => (
          <button
            key={ index }
            id="incorrect"
            name={ results[atualQuestion].difficulty }
            type="button"
            data-testid={ `wrong-answer-${index}` }
            className="btn btn-secondary"
            style={ { order: index, border: isClicked ? '3px solid red' : null } }
            onClick={ handleClick }
            disabled={ isClicked }
          >
            { answer }
          </button>
        ))}
      </div>
    );
  }
}

Btn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
  atualQuestion: PropTypes.number.isRequired,
  order: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Btn;
