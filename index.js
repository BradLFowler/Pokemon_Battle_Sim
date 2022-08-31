import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Router from './src/Router'

import App from './src/App';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Router />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);