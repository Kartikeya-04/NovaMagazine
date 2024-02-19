import React from 'react';
// import Grid from '@mui/material/Grid';
// import '../styles/App.css';
import '../styles/style.css';
import One from '../assets/1.png';
import Two from '../assets/2.png';
import Three from '../assets/3.2.png';
import Four from '../assets/4.png';
function App() {
  return (
    <div className="main" style={{ background: 'black' }}>
      <div>
        <h1 className="header text-with-shadow" style={{ color: '#535C91' }}>
          NOVA MAGAZINE
        </h1>
      </div>

      <div className="main2" style={{ background: 'black' }}>
        <div className="border">
          <div className="title">
            <h2>Featured Magazines</h2>
          </div>
          <div className="title2">
            <div className="hero">
              <div className="one">
                <img src={One} className="vibration" />
              </div>
              <div className="two">
                <img src={Two} className="vibration" />
              </div>
              <div className="three">
                <img src={Three} className="vibration" />
              </div>
              <div className="four">
                <img src={Four} className="vibration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
