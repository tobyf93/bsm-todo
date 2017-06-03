import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>99</strong> items left
				</span>
				<ul className="filters">
					<li>
						<a href="#" className="selected">
							All
						</a>
					</li>
					<li>
						<a href="#">
							Active
						</a>
					</li>
					<li>
						<a href="#">
							Completed
						</a>
					</li>
				</ul>
				<button
					className="clear-completed"
					onClick={() => console.log('Clear completed Todos')}
				>
					Clear completed
				</button>
			</footer>
		)
	}
}

export default Footer;
