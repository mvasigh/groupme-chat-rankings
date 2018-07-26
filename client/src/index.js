import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import App from './App';

const initialState = {
  period: 'week'
};

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
