import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.filter = this.filter.bind(this);
		this.state = {
			show: ALL_TODOS
		};
	}

	clearCompleted() {
		console.log('Clear Completed');
	}

	filter(newFilter) {
		this.setState({ show: newFilter });
	}

	render() {
		return (
			<div>
				<Header />
				<section className="main">
					<div style={{ padding: '15px' }}>
						Todos will go here...
					</div>
				</section>
				<Footer
					show={this.state.show}
					filter={this.filter}
					clearCompleted={this.clearCompleted}
				/>
			</div>
		);
	}
}

export default App;
