import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';
import Header from '../components/Header';
import Todos from '../components/Todos';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.id = 0;
    this.create = this.create.bind(this);
    this.toggle = this.toggle.bind(this);
    this.destroy = this.destroy.bind(this);
    this.filter = this.filter.bind(this);
    this.state = {
      show: ALL_TODOS,
      data: [],
    };
  }

  create(label) {
    this.setState({
      data: [
        ...this.state.data,
        {
          id: this.id++,
          label,
          completed: false
        }
      ]
    });
  }

  data() {
    return this.state.data.filter((todo) => {
      switch (this.state.show) {
        case ALL_TODOS: return true;
        case ACTIVE_TODOS: return !todo.completed;
        case COMPLETED_TODOS: return todo.completed;
        default: return true;
      }
    });
  }

  destroy(id) {
    this.setState({
      data: this.state.data.filter(todo => todo.id !== id)
    });
  }

  filter(newFilter) {
    this.setState({ show: newFilter });
  }

  toggle(id) {
    const data = this.state.data.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }

      return todo;
    });

    this.setState({ data });
  }

  render() {
    return (
      <div>
        <Header create={this.create} />
        <Todos
          data={this.data()}
          toggle={this.toggle}
          destroy={this.destroy}
        />
        <Footer
          show={this.state.show}
          filter={this.filter}
          count={this.state.data.filter(todo => todo.completed === false).length}
        />
      </div>
    );
  }
}

export default App;
