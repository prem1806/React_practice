import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo_one from './demo.js';
import Pro from './pro.js';
import Counter from './sta.js';

class Demo extends Component {
  render() {
    return (
      <div className="App">
        
        <Demo_one/>
        <Pro/>
        <Counter/>
      </div>
    );
  }
}

export default Demo;
