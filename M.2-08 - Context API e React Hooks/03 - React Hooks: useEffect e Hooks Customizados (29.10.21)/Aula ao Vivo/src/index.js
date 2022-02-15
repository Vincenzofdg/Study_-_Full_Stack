import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import ISSProvider from './context/ISSProvider';

ReactDOM.render(
  <ISSProvider><App /></ISSProvider>, document.getElementById('root'),
);
