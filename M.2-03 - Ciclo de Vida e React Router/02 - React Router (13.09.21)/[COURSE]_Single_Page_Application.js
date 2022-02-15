// Exemplo a seguir, componente Pai pegara props de seu componente Filho

// Componente Filho:
class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
        </ComponentePai>
      </div>
    )
  }
}

// COmponente Pai:
const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

// caso o props.children tenha mais de um elemento, se torna um array de elementos
