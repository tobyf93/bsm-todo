import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {
            this.props.data.map(
              todo =>
                <Todo
                  key={todo.id}
                  label={todo.label}
                  completed={todo.completed}
                  toggle={() => this.props.toggle(todo) }
                  destroy={() => this.props.destroy(todo) }
                />
            )
          }
        </ul>
      </section>
    );
  }
}

export default Todos;
