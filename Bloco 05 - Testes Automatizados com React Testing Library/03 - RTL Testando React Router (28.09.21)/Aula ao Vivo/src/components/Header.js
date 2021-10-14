import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Sobre mim</Link>
            </li>
            <li>
              <Link to="/projects">Projetos</Link>
            </li>
            <li>
              <Link to="/comments">Deixe um comentário</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
