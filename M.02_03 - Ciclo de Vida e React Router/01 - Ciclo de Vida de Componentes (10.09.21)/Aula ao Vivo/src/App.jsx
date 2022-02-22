import React from 'react';
import './App.css';
import Cronometer from './components/Cronometer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCronometer: true };

    this.cronometerOnOffSwitch = this.cronometerOnOffSwitch.bind(this);
  }

  cronometerOnOffSwitch() {
    this.setState((prevState) => ({ showCronometer: !prevState.showCronometer })); // inverte o valor do estado, true ==> false e false ==> true
  }

  render() {
    const { showCronometer } = this.state;
    return (
      <main className="App">
        <section className="App-header">
        {/* se showCronometer for true renderiza alguma coisa caso contrario nao renderiza nada */}
          {showCronometer && <Cronometer /> } 
        </section>

        <button
          type="button"
          onClick={ () => this.cronometerOnOffSwitch() } {/* this.cronometerOnOffSwitch */}
        >
          { showCronometer ? 'Desligar cronômetro' : 'Ligar cronômetro' }
        </button>
      </main>
    );
  }
}

export default App;
