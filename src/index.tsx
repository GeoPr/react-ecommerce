import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
