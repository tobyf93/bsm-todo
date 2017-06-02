import React, { Component } from 'react';
import Footer from '../components/Footer';

class App extends Component {
	render() {
		return (
			<div>
			<header className="header">
					<h1>todos</h1>
					<input
						className="new-todo"
						placeholder="What needs to be done?"
					/>
				</header>
				<section className="main">
					main
				</section>
				<Footer />
			</div>
		);
	}
}

export default App;
