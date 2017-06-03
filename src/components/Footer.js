import React from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

function Footer({ count, show, filter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count} </strong>
        { count === 1 ? 'todo' : 'todos' } left
      </span>
      <ul className="filters">
        <li>
          <a
            className={show === ALL_TODOS ? 'selected' : ''}
            onClick={() => filter(ALL_TODOS)}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={show === ACTIVE_TODOS ? 'selected' : ''}
            onClick={() => filter(ACTIVE_TODOS)}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={show === COMPLETED_TODOS ? 'selected' : ''}
            onClick={() => filter(COMPLETED_TODOS)}
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
