import React from 'react';
import Grid from '@mui/material/Grid';
// import './App.css';
import './style.css';
import One from './1.png';
import Two from './2.png';
import Three from './3.2.png';
import Four from './4.png';
function App() {
  return (
    <div className="main">
      <div>
        <h1>NOVA MAGAZINE</h1>
      </div>

      <div className="main2">
        <div className="border">
          <div className="title">
            <h2>Featured Magazines</h2>
          </div>
          <div className="title2">
            <div className="hero">
              <div className="one">
                <img src={One} />
              </div>
              <div className="two">
                <img src={Two} />
              </div>
              <div className="three">
                <img src={Three} />
              </div>
              <div className="four">
                <img src={Four} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
