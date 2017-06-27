import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.onInputKeyPress = this.onInputKeyPress.bind(this);
    }

    onInputKeyPress(e) {
        if (e.charCode == 13) {
            this.props.newTodoItem(e.target.value);
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
                    onKeyPress={this.onInputKeyPress}
				/>
			</header>
		);
	}
}

export default Header;
