

// src/containers/App.js

import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

import Header from '../components/Header';
import Todos from '../components/Todos';
import Footer from '../components/Footer';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.addEntry = this.addEntry.bind(this);
		this.filter = this.filter.bind(this);
		this.state = {
			show: ALL_TODOS
		};
	}
	
	filter(newFilter) {
		this.setState({ show: newFilter });
	}
	
	addEntry(entryText) {
		console.log('adding entry ' + entryText);
	}
	
	render() {
		return (
			<div>
				<Header
					addEntry={this.addEntry}
				/>
				<Todos/>
				<Footer
					show={this.state.show}
					filter={this.filter}
				/>
			</div>
		);
	}
}


export default App;

