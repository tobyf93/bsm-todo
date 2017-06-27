import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={this.props.done}
						onChange={(e) => this.props.onChange(e.target.checked)}
					/>
					<label>
						{this.props.label}
					</label>
					<button className="destroy" onClick={() => this.props.onRemove()} />
				</div>
			</li>
        );
    }
}

export default Todo;
