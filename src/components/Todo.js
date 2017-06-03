import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={this.props.completed}
						onChange={this.props.toggle}
					/>
					<label>
						{this.props.label}
					</label>
					<button className="destroy" onClick={this.props.destroy} />
				</div>
			</li>
    );
  }
}

export default Todo;
