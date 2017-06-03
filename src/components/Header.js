import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(e) {
    const value = e.target.value.trim();

    if (e.keyCode === 13 && value) {
      this.props.create(value);
      this.input.value = '';
    }
  }

	render() {
		return (
			<header className="header">
				<h1>todos</h1>
				<input
					className="new-todo"
					placeholder="What needs to be done?"
          onKeyUp={this.onKeyUp}
          ref={(ref) => { this.input = ref; }}
				/>
			</header>
		);
	}
}

export default Header;
