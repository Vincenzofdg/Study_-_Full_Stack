import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPersonalValue } from '../redux/action';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

class PersonalForm extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    const { history, updateValue } = this.props;
    updateValue(this.state);
    history.push('/professionalform');
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    return (
      <fieldset>
        <Input onChange={ this.handleChange } value={ nome } name="nome" />
        <Input onChange={ this.handleChange } value={ email } name="email" />
        <Input onChange={ this.handleChange } value={ cpf } name="cpf" />
        <Input onChange={ this.handleChange } value={ endereco } name="endereco" />
        <Input onChange={ this.handleChange } value={ cidade } name="cidade" />
        <Select onChange={ this.handleChange } value={ estado } name="estado" />
        <Button onClick={ this.onSubmitForm } />
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  updateValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateValue: (valueAndName) => dispatch(setPersonalValue(valueAndName)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
