import React from 'react';
import './Content.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import TrybeTalks from '../pages/TrybeTalks';
import LiveLectures from '../pages/LiveLectures';
import Solutions from '../pages/Solutions';
import Solution from '../pages/Solution';

export default function Content() {
  const solutions = [
    {
      id: 'hello-world-no-react',
      name: '11.1 - Hello World React',
    },
    {
      id: 'component-react',
      name: '11.2 - Componentes React',
    },
  ];
  return (
    <main className="content">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/calendar" component={ Calendar } />
        <Route path="/trybe-talks" component={ TrybeTalks } />
        <Route path="/live-lectures" component={ LiveLectures } />
        <Route
          exact
          path="/solutions"
          render={ (reactRouterProps) => (
            <Solutions { ...reactRouterProps } solutions={ solutions } />
          ) }
        />
        <Route
          path="/solutions/:id"
          component={ Solution }
        />
      </Switch>
    </main>
  );
}
