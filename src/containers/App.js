

// src/containers/App.js

import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

import Header from '../components/Header';
import Todos from '../components/Todos';
import Footer from '../components/Footer';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			show: ALL_TODOS,
			items: [
				{ label: 'item 1', done: 0 },
				{ label: 'item 2', done: 0 },
				{ label: 'item 3', done: 0 },
				{ label: 'item 4', done: 0 },
			],
		};
	}
	
	setFilter(show) {
		this.setState({ show: show });
	}
	
	addEntry(label) {
		// I was about to add code to stop it adding duplicate labels (since we use the labels as keys)
		// but I tested and found it doesn't add them
		// this has to be because we're using the label as the key
		// but I wonder if there are unwanted side-effects of relying on this, rather than explicitly coding to avoid the duplicates?
		
		if (!this.state.items.find(item => item.label === label)) {
			this.setState(old => ({
				items: [
					...old.items,
					{
						label: label,
						done: 0,
					},
				],
			}));
		}
	}
	
	setItemCheck(label, done) {
		this.setState(old => {
			const newItems = [...old.items];
			newItems.find(el => el.label === label).done = done;
			return { items: newItems };
		});
	}
	
	removeItem(label) {
		this.setState(old => ({
			items: old.items.filter(el => el.label != label)
		}));
	}
	
	clearCompleted() {
		this.setState(old => ({
			items: old.items.filter(item => !item.done)
		}));
	}
	
	render() {
		return (
			<div>
				<Header
					addEntry={label => this.addEntry(label)}
				/>
				<Todos
					items={
						this.state.items.filter(item => (
							(this.state.show === ALL_TODOS) ? 1 :
							(this.state.show === ACTIVE_TODOS) ? !item.done :
							(this.state.show === COMPLETED_TODOS) ? item.done
							: 0
						))
					}
					onChange={(label, done) => this.setItemCheck(label, done)}
					onRemove={label => this.removeItem(label)}
				/>
				<Footer
					count={this.state.items.filter(item => !item.done).length}
					show={this.state.show}
					setFilter={show => this.setFilter(show)}
					clearCompleted={() => this.clearCompleted()}
				/>
			</div>
		);
	}
}


export default App;

