// Realização da checagem do tipo do props (para ter controle e não quebrar aplicação)

/* 1º Passo: Importa-lo no componente
Caso não tenhamos utilizado create-react-app será necessario a instalação => npm install --save-dev prop-types */
import PropTypes from 'prop-types';

// 2º Passo: Adicionar a estrutura antes do export default
Greeting.propTypes = {
  name: PropTypes.string, // checando se o props retornar uma string no name
  lastName: PropTypes.string.isRequired, // isRequired tormar obrigatoria
};

// Se não for passado a informação o nome padrão será exibido
Greeting.defaultProps = {
  name: 'Sem Nome';
  lastName: 'Sem Sobrenome'
}