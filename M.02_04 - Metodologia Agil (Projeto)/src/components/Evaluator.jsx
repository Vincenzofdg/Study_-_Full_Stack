import React from 'react';
import Evaluation from './Evaluation';
import { addEvaluation } from '../services/localstorage';

class Evaluator extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      avaliacao: '0',
      mensagem: '',
      arrayAvaliacao: {},
    };
  }

  onChangeValue = (event) => {
    const { value } = event.target;
    this.setState({
      avaliacao: value,
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, avaliacao, mensagem } = this.state;

    addEvaluation({ email, avaliacao, mensagem, id: email });
    // arrayAvaliacao.push([email, avaliacao, mensagem]);
    this.setState(() => ({
      arrayAvaliacao: localStorage.getObj('evaluations'),
    }));
  }

  renderComment = () => {
    const { arrayAvaliacao } = this.state;
    return (Object.values(arrayAvaliacao)
      .map(({ evaluation: { email, avaliacao, mensagem } }) => (
        <Evaluation
          key={ email }
          email={ email }
          avaliacao={ +avaliacao }
          mensagem={ mensagem }
        />
      )));
  }

  render() {
    const { email, avaliacao, mensagem } = this.state;
    return (
      <section>
        <h1>Quantidade</h1>
        <button type="button">-</button>
        <p>0</p>
        <button type="button">+</button>
        <button type="submit">Adicionar ao Carrinho</button>
        <h1>Avaliações</h1>
        <form>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <div value={ avaliacao } onChange={ this.onChangeValue }>
            <input type="radio" value="1" name="star" />
            1
            <input type="radio" value="2" name="star" />
            2
            <input type="radio" value="3" name="star" />
            3
            <input type="radio" value="4" name="star" />
            4
            <input type="radio" value="5" name="star" />
            5
          </div>
          <textarea
            name="mensagem"
            placeholder="Mensagem(opcional)"
            value={ mensagem }
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
          />
          <button type="submit" onClick={ this.handleSubmit }>Avaliar</button>
        </form>
        { this.renderComment() }
      </section>
    );
  }
}

export default Evaluator;
