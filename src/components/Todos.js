import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		// JSX supports passing in element arrays
		let array = Array.from(this.props.items, item => 
			<Todo 
				key={item.label}
				label={item.label}
				done={item.done}
				onChange={done => this.props.onChange(item.label, done)}
				onRemove={() => this.props.onRemove(item.label)}
			/>
		);
		
		return (
			<section className="main">
				<ul className="todo-list">
					{array}
				</ul>
			</section>
		);
	}
}

export default Todos;
