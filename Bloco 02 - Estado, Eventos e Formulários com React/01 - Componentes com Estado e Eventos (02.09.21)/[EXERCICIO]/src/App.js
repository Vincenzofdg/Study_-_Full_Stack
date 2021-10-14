import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.btnCreator = this.btnCreator.bind(this);
    this.btnClick = this.btnClick.bind(this)

    this.state = {
      btn01: {value: 0, color: 'white'},
      btn02: {value: 0, color: 'white'},
      btn03: {value: 0, color: 'white'},
    }
  }

  btnClick = ({ target }) => {
    const { name } = target;
    this.setState(( atual ) => ({
      [name]: {
        value: atual[name].value + 1,
        color: atual[name].value % 2 !== 0 ? 'green' : 'white',
      },
    }))
  }

  btnCreator = (stateObj, name, callback) => {
    return (
      <button style={{background: [stateObj.color]}} name={ name } onClick={ callback }>
        { stateObj.value }
      </button>
    )
  }

  render() { 
    const { btn01, btn02, btn03 } = this.state;    
    return (
      <div>
        { this.btnCreator(btn01, 'btn01', this.btnClick) }
        { this.btnCreator(btn02, 'btn02', this.btnClick) }
        { this.btnCreator(btn03, 'btn03', this.btnClick) }
      </div>  
    )
  }
}

export default App;
