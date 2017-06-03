import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.create(e.target.value);
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
