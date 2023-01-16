import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Animate() {
  root.render(
    <React.StrictMode>
      <Router>
        <App/>
      </Router>
    </React.StrictMode>
  );
}

Animate()
