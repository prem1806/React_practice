import React from 'react';
import ReactDOM from 'react-dom';

class Demo_one extends React.Component{
	render(){
		const k ={
			name:"prem",
			age:23
		}
		
		function add(){
			return (
				    <div>
				      <h2>It is {new Date().toLocaleTimeString()}.</h2>
				    </div>
				  )
		}
		console.log(setInterval(add, 1000));
		let k1 = setInterval(add, 1000);
		return(
			<div>
				<h1>{k.name}</h1>
				<h1>{k.age}</h1>
				<h2>{k1}</h2>
			</div>
		);
	}
};

export default Demo_one;


