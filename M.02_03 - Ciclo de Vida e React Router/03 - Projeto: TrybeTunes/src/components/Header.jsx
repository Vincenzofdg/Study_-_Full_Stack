import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.userFunc();
  }

  userFunc = async () => {
    const user = await getUser();
    this.setState({
      name: user.name,
      loading: false,
    });
  }

  linkGenerator(name, id) {
    return (
      <li>
        <Link to={ `/${id}` } data-testid={ `link-to-${id}` }>
          { name }
        </Link>
      </li>
    );
  }

  render() {
    const { name, loading } = this.state;
    const loadType = 'h1';
    return (
      <header data-testid="header-component">
        {/* Assim que o nome é renderizado o Loading sai da Pagina */}
        { loading && <Loading type={ loadType } /> }
        <h1 data-testid="header-user-name">{ name }</h1>
        {/* Requisito 04 */}
        <ul>
          { this.linkGenerator('Pesquisa', 'search') }
          { this.linkGenerator('Favoritos', 'favorites') }
          { this.linkGenerator('Perfil', 'profile') }
        </ul>
      </header>
    );
  }
}

export default Header;
