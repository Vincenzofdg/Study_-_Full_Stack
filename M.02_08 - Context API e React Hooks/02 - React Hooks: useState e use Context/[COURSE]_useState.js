// Estrutura como function:
import React, { useState } from "react";

function App({ AquiFicamAsPropsRecebidas }) {
  const [nomeDaVariavel, funcationQueAtualizaValor] = useState(0); // Criando um estado "this.state"

  const adicionaUm = () => funcationQueAtualizaValor(nomeDaVariavel + 1);

  return (
    <div>
      <div>Counter: {nomeDaVariavel}</div>
      <button type="button" onClick={ adicionaUm }>
        Increase Counter
      </button>
    </div>
  );
}

export default App;