import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={false}
						onChange={() => console.log('Toggle Todo')}
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
