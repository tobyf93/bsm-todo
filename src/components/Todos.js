import React, { Component } from 'react';
import Todo from './Todo';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

class Todos extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // JSX supports passing in element arrays
    /*const array = [
      <Todo label="First todo..." />,
      <Todo label="Second todo..." />,
      <Todo label="Third todo..." />
    ];*/
    const todoItems=this.props.todoItems.filter(todoItem => {
            if (this.props.show === ALL_TODOS) return 1;
            else if (this.props.show == ACTIVE_TODOS) return !todoItem.done;
            else if (this.props.show == COMPLETED_TODOS) return todoItem.done;
            else return 0;
    });
    const listTodoItems = todoItems.map((todoItem, index) => (
            <Todo key={index}
                label={todoItem.label}
                done={todoItem.done}
                onChange={done => this.props.onChange(todoItem.label, done)}
                onRemove={() => this.props.onRemove(todoItem.label)}
            />)
            );

    return (
      <section className="main">
        <ul className="todo-list">
        {listTodoItems}
        </ul>
      </section>
    );
  }
}

export default Todos;
