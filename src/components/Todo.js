import React from 'react';

function Todo({ completed, toggle, label, destroy }) {
  return (
    <li>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					checked={completed}
					onChange={toggle}
				/>
				<label>
					{label}
				</label>
				<button className="destroy" onClick={destroy} />
			</div>
		</li>
  );
}

export default Todo;
