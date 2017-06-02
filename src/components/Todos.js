import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  render() {
    // JSX supports passing in element arrays
    const array = [
      <Todo label="First todo..." />,
      <Todo label="Second todo..." />,
      <Todo label="Third todo..." />
    ];

    return (
      <section className="main">
        <ul className="todo-list">
          {array}
        </ul>
      </section>
    );
  }
}

export default Todos;
