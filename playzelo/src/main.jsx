// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../src/assets/css/index.css';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/animate.css';
import '../src/assets/css/style.min.css';
import '../src/assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);