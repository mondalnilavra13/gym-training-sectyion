import React from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
      <h1>Gym Training Programs</h1>
      <div className="carousel">
        <div className="card">
          <h2>Bodybuilding</h2>
          <ul>
            <li>Chest press</li>
            <li>Lat pulldown</li>
            <li>Bicep curl</li>
            <li>Tricep extension</li>
            <li>Squats</li>
            <li>Deadlifts</li>
          </ul>
        </div>
        <div className="card">
          <h2>Yoga</h2>
          <ul>
            <li>Mountain pose</li>
            <li>Downward-facing dog</li>
            <li>Warrior pose</li>
            <li>Tree pose</li>
            <li>Child's pose</li>
            <li>Cobra pose</li>
          </ul>
        </div>
        <div className="card">
          <h2>Aerobics</h2>
          <ul>
            <li>Jumping jacks</li>
            <li>High knees</li>
            <li>Burpees</li>
            <li>Mountain climbers</li>
            <li>Jump rope</li>
            <li>Box jumps</li>
          </ul>
        </div>
        <div className="card">
          <h2>Flexibility</h2>
          <ul>
            <li>Hamstring stretch</li>
            <li>Quad stretch</li>
            <li>Shoulder stretch</li>
            <li>Tricep stretch</li>
            <li>Butterfly stretch</li>
            <li>Cobra stretch</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
