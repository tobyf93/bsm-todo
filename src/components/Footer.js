import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>99</strong> todos left
				</span>
				<ul className="filters">
					<li>
						<a className="selected">
							All
						</a>
					</li>
					<li>
						<a>
							Active
						</a>
					</li>
					<li>
						<a>
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
