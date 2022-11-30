import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Game } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Animate() {
  requestAnimationFrame(Animate)

  root.render(
    <React.StrictMode>
      <Router>
        <Game user={"currentUser"} />
      </Router>
    </React.StrictMode>
  );
}

Animate()