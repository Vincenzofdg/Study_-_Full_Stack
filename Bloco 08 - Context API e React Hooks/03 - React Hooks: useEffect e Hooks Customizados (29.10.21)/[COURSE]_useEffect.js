// Esta configuração executará a função toda vez que o componente sofrer qualquer tipo de alteração e renderizar, **repetidas vezes**. Ela precisa ser utilizada com **cautela**, pois facilmente resulta em loops infinitos.
useEffect(() => {});

// Neste caso, a função será executada similarmente ao `componentDidMount`, rodando apenas uma vez e na montagem do componente.
useEffect(() => {}, []);

// O comportamento deste modelo será semelhante ao `componentDidUpdate` e ele será executado sempre que houver mudança em alguma das variáveis especificadas.
useEffect(() => {}, [variável1, variável2, ... variávelN]);

// Este caso é mais específico, pois ele pode agregar a utilização de um dos dois últimos exemplos, o `componentDidMount` ou `componentDidUpdate` dependendo do segundo parâmetro, e a função presente no retorno se comporta como `componentWillUnmount`. Ou seja, quando o componente desmonta a função retornada pelo `useEffect` é executada. Você deve definir essa função sempre que precisar limpar algo criado por seu efeito (como algum _timer_, por exemplo)
useEffect(() => {

  return () => {}
}, []);
