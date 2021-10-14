import React from 'react';
import PropTypes from 'prop-types';

class Evaluation extends React.Component {
  render() {
    const { email, avaliacao, mensagem } = this.props;
    return (
      <fieldset>
        <p>{ email }</p>
        <p>
          Avaliação:
          { avaliacao }
        </p>
        <p>{ mensagem }</p>
        <hr />
      </fieldset>
    );
  }
}

Evaluation.propTypes = {
  email: PropTypes.string.isRequired,
  avaliacao: PropTypes.number.isRequired,
  mensagem: PropTypes.string,
};

Evaluation.defaultProps = {
  mensagem: '',
};

export default Evaluation;
