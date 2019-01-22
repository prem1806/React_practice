import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo_one from './demo.js';
import Pro from './pro.js';
import Counter from './sta.js';
import State_part from './tuotial_point.jsx';

class Demo extends Component {
  render() {
    return (
      <div className="App">
        
        <Demo_one/>
        <Pro/>
        <Counter/>
        <State_part/>
      </div>
    );
  }
}

export default Demo;
