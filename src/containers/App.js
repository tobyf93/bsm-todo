// src/containers/App.js

import React, { Component } from 'react'

import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Todos from '../components/Todos';
import Todo from '../components/Todo';

class App extends Component {
	constructor(props) {
		super(props);

		// JSX supports passing in element arrays
		/*
		const array = [
			<Todo label="First todo..." deleteHandler={this.handleTodoDelete} />,
			<Todo label="Second todo..." deleteHandler={this.handleTodoDelete} />,
			<Todo label="Third todo..." deleteHandler={this.handleTodoDelete} />
		];
		*/
		this.filter = this.filter.bind(this);
		this.handleTodoAdd = this.handleTodoAdd.bind(this);
		this.handleTodoClear = this.handleTodoClear.bind(this);
		this.handleTodoDelete = this.handleTodoDelete.bind(this);
		this.handleTodoComplete = this.handleTodoComplete.bind(this);

		this.state = {
			lastIndex: 1,
			show: ALL_TODOS,
			items: []
		};		
	}

	handleTodoAdd(e) {
		console.log('add item');

		if (e.target.value == '') return 0;

    		if (e.key === 'Enter') {
			this.setState({ lastIndex : this.state.lastIndex + 1 });
      			this.setState({ items : this.state.items.concat(<Todo key={this.state.lastIndex} completed={false} label={e.target.value} deleteHandler={this.handleTodoDelete} completeHandler={this.handleTodoComplete}/>)});
			e.target.value = '';
    		}
  	}

	handleTodoDelete(e) {
		console.log('remove item');

		// this doesn't seem like the right way to do this
		// but I can't figure out how to get a reference to the todo object that triggered the handler
		var items = this.state.items.filter(function(todo) { return todo.props.label != e.target.value; });
		this.setState({ items: items });
	}

	handleTodoComplete(item)
	{
		console.log('item key to complete: ' + item.props.label);
		
		var items = this.state.items.filter(function(todo) { 
			if (todo.props.label == item.props.label) { console.log('found'); /*todo.props.completed = true;*/ }
			
			return false; 
		});
		//this.setState({ items: items });
	}

	handleTodoClear()
	{
		console.log('Remove Completed');
		
		//this.setState({items : []});		
		var items = this.state.items.filter(function(todo) { return !todo.props.completed; });
		this.setState({ items: items });
	}

	filter(newFilter) {
		this.setState({ show: newFilter });
	}

	render() {
		return (
			<div>
				<Header addHandler={this.handleTodoAdd} />
				<Todos items={this.state.items} />
				<Footer
					show={this.state.show}
					filter={this.filter}
					remaining={this.state.items.length}
					clearHandler={this.handleTodoClear}
				/>
			</div>
		);
	}
}

export default App;