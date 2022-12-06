import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App, { Game } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let previousTimeStamp;
let elapsed = 0;
function Animate(timestamp) {
  requestAnimationFrame(Animate)

  if (!previousTimeStamp) {
    previousTimeStamp = timestamp
  } else {
    previousTimeStamp = timestamp - elapsed
  }

  previousTimeStamp /= 1000

  elapsed = timestamp

  root.render(
    <React.StrictMode>
      <Router>
        <Game user="DoomInfinity" timeElapsed={previousTimeStamp}/>
      </Router>
    </React.StrictMode>
  );
}

Animate()
