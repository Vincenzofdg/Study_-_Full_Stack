import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import trybelogo from '../img/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <div>
          <Link to="/"><img src={ trybelogo } alt="Logo da trybe" /></Link>
        </div>
        <div className="link-hover">
          <Link to="/calendar">Agenga</Link>
          <Link to="/live-lectures">Aulas ao vivo</Link>
          <Link to="/trybe-talks">trybe-talks</Link>
          <Link to="/solutions">Gabaritos</Link>
        </div>
      </nav>
    </header>
  );
}
