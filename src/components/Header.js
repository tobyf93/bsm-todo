import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
		
		this.keyPress = this.keyPress.bind(this);
	}
	
	keyPress(e) {
		if (e.charCode == 13) {
			this.props.addEntry(e.target.value);
			e.target.value = '';
		}
	}
	
	render() {
		return (
			<header className="header">
				<h1>todos</h1>
				<input
					className="new-todo"
					placeholder="What needs to be done?"
					onKeyPress={(e) => this.keyPress(e)}
				/>
			</header>
		);
	}
}

export default Header;
