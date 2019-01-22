import React from 'react';
import ReactDOM from 'react-dom';


class State_part extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id:1,
			name:"demo"
		}
	}

	render(){
		return(
			<table>
				<tr>
					<td>{this.state.id}</td>
					<td>{this.state.name}</td>
				</tr>
			</table>
			

		);
	}
};


export default State_part;

