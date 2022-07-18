import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../src/assets/css/styles.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root'),
);
