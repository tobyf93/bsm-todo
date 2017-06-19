import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{this.props.count}</strong> items left
				</span>
				<ul className="filters">
					<li>
						<a
							href="#"
							className={this.props.show == ALL_TODOS ? 'selected' : ''}
							onClick={() => this.props.setFilter(ALL_TODOS)}
						>
							All
						</a>
					</li>
					<li>
						<a
							href="#"
							className={this.props.show == ACTIVE_TODOS ? 'selected' : ''}
							onClick={() => this.props.setFilter(ACTIVE_TODOS)}
						>
							Active
						</a>
					</li>
					<li>
						<a
							href="#"
							className={this.props.show == COMPLETED_TODOS ? 'selected' : ''}
							onClick={() => this.props.setFilter(COMPLETED_TODOS)}
						>
							Completed
						</a>
					</li>
				</ul>
				<button
					className="clear-completed"
					onClick={() => this.props.clearCompleted()}
				>
					Clear completed
				</button>
			</footer>
		)
	}
}

export default Footer;
