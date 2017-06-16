import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  render() {        
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.items}
        </ul>
      </section>
    );
  }
}

export default Todos;
