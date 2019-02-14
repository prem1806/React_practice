import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

class TonightPlan extends React.Component{
	render(){
    let text;
    if(fiftyFifty){
      text = "out WOOO"
    }else{
      text = "to bed WOOO"
    }
	return(
    	<h1>Tonight i'm going {text}</h1>
    );
  }

};

export default TonightPlan;

