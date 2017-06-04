import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			checked: false,
		};
		
		// this seemed to work fine before (& after) I added this "bind" line
		this.toggle = this.toggle.bind(this);
	}
	
	toggle() {
		this.setState({
			checked: !this.state.checked,
		});
	}
	
	render() {
		return (
			<li>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={this.state.checked}
						onChange={() => this.toggle()}
					/>
					<label>
						{this.props.label}
					</label>
					<button className="destroy" onClick={() => console.log('Destroy Todo')} />
				</div>
			</li>
		);
	}
}

export default Todo;
