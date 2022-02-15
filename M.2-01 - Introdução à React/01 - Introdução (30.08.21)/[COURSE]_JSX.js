// Incorporando expressões no JSX
const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

// Aprofundando um pouco mais: 
function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

// Agora, vamos incorporar a nossa constante element na função helloWorld, retornar um código JSX e encapsulá-la em uma div:
function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const container = <div>{element}</div>;

// Lembra que falamos sobre a substituição de class por className em JSX? Podemos também utilizar expressões Javascript para atribuir valor à este atributo.
const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;



// No Arquivo react:
import './App.css';
import React, { createElement } from 'react';

function courserJSX() {
  // Exercicio proposto [COURSE]_JSX:
  const textJSX = "Hello, JSX";
  const element01 = <h2>{textJSX}</h2>
  const element02 = (
    <h2>Hello, World</h2>
  )
  // modo antigo:
  const element03 = createElement(
    'p',
    {className: 'p-class'},
    'forma old de se criar elemento'
  )
  return (
    <>
      <hr />
      <h1 className="title-class">Formas de declarar um elemento:</h1>
      {element01}
      {element02}
      {element03}
      <hr />
    </>
  )
}

export default courserJSX;