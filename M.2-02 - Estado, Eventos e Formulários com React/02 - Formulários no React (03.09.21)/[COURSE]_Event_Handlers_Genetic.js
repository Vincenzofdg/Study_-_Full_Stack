handleChange({ target }) {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({ [name]: value });
}

/*O truque é o seguinte:
- Dê a cada elemento um nome que seja igual à respectiva chave no estado do componente
- No handler, recupere a partir do parâmetro event o nome do componente que disparou o evento e o valor associado ao disparo.
- Interpole o nome do componente como chave do estado numa sintaxe como a acima.*/

// Para as checkboxs => valor nao fica no value fica no checked.
// Exemplo:
handleCheckBox( { target }) {
  const { type, checked, value } = target;
  this.setState({ 
    box: type === 'checkbox' ? checked : value,
   })
}