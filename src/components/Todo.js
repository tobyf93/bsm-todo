import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
		/*
		this.state = {
			completed: false
		};
		*/
		this.handleTodoChange = this.handleTodoChange.bind(this);


	}

	handleTodoChange() {
		/*
		this.setState(prevState => ({
      completed: !prevState.completed
    }));
		*/
		this.props.completeHandler(this);
  }



	render() {
		return (
			<li>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={this.props.completed}
						onChange={this.handleTodoChange}
					/>
					<label>
						{this.props.label}
					</label>
					<button value={this.props.label} className="destroy" onClick={this.props.deleteHandler} />
				</div>
			</li>
		);
	}
}

export default Todo;
