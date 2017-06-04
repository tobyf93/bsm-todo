

// src/containers/App.js

import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

import Header from '../components/Header';
import Todos from '../components/Todos';
import Footer from '../components/Footer';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.filter = this.filter.bind(this);
		this.state = {
			show: ALL_TODOS
		};
	}
	
	filter(newFilter) {
		this.setState({ show: newFilter });
	}
	
	render() {
		return (
			<div>
				<Header/>
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

