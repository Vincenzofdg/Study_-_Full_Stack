import React from "react";

// Crie uma lista de tarefas simples:

class MyTask extends React.Component {
  render() {
    const list = ['tarefa 01', 'tarefa 02', 'tarefa 03', 'tarefa 04']
    const Task = (value) => {
      return (
        <li>{value}</li>
      );
    }
    return (
      <ul>
        {list.map((el) => Task(el))}
      </ul>
    );
  }
}

export default MyTask;