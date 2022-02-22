import React, { Component } from 'react';

class Cronometer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    const ONE_SECOND = 1000; // Milisegundos

    this.cronometerInterval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, ONE_SECOND);

    console.log('O intervalo está rodando');
    console.log(this);
  }
  
  // Colocando uma condicional no componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    const MAX_SECONDS = 30;
    if (prevState.seconds === MAX_SECONDS) {
      alert('O tempo acabou!!')
      this.resetSeconds(); // IMPORTANTE => NAO USAR SETSTATE DENTRO DO DIDUPDATE => crie uma funcao separada e coloque no didUpdate 
    }
  }

  componentWillUnmount() {
    console.log('Unmount !');
    clearInterval(this.cronometerInterval); // Limpar o Intervalo quando desligar o cronometro
  }

  resetSeconds = () => {
    this.setState({ seconds: 0 }); // <=== A funcao que vai para o DidUpdate
  }

  render() {
    const { seconds } = this.state;

    return (
      <h2>
        {seconds}
      </h2>
    );
  }
}

export default Cronometer;
