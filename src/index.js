import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { BirdMoveAround } from './assets/Birds/Birds';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Animate() {
  requestAnimationFrame(Animate)

  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}

Animate()