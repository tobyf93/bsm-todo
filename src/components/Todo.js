import React, { Component } from 'react';

class Todo extends Component {
  toggle() {
    console.log('Toggle Todo');
  }

  destroy() {
    console.log('Destroy Todo');
  }

  render() {
    return (
      <li>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={false}
						onChange={this.toggle}
					/>
					<label>
						{this.props.label}
					</label>
					<button className="destroy" onClick={this.destroy} />
				</div>
			</li>
    );
  }
}

export default Todo;
