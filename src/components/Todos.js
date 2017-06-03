import React from 'react';
import Todo from './Todo';

function Todos({ data, toggle, destroy }) {
  return (
    <section className="main">
      <ul className="todo-list">
        {
          data.map(
            todo =>
              <Todo
                key={todo.id}
                label={todo.label}
                completed={todo.completed}
                toggle={() => toggle(todo) }
                destroy={() => destroy(todo) }
              />
          )
        }
      </ul>
    </section>
  );
}

export default Todos;
