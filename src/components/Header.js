import React, { Component } from 'react';

import Todo from '../components/Todo';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<h1>todos</h1>
				<input
					className="new-todo"
					placeholder="What needs to be done?"
					onKeyUp={this.props.addHandler}
				/>
			</header>
		);
	}
}

export default Header;
