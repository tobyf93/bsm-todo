import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';
import Header from '../components/Header';
import Todos from '../components/Todos';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.getNewId = (() => {
      let id = 0;
      return () => id++;
    })();

    this.clearCompleted = this.clearCompleted.bind(this);
    this.create = this.create.bind(this);
    this.toggle = this.toggle.bind(this);
    this.destroy = this.destroy.bind(this);
    this.filter = this.filter.bind(this);
    this.state = {
      show: ALL_TODOS,
      data: [],
    };
  }

  clearCompleted() {
    this.setState({
      data: this.state.data.filter(todo => !todo.completed)
    });
  }

  create(label) {
    this.setState({
      data: [
        ...this.state.data,
        {
          id: this.getNewId(),
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

  destroy(todo) {
    const i = this.state.data.indexOf(todo);

    if (i >= 0) {
      this.setState({
        data: [
          ...this.state.data.slice(0, i),
          ...this.state.data.slice(i + 1)
        ]
      });
    }
  }

  filter(newFilter) {
    this.setState({ show: newFilter });
  }

  toggle(todo) {
    const i = this.state.data.indexOf(todo);

    if (i >= 0) {
      this.setState({
        data: [
          ...this.state.data.slice(0, i),
          {
            ...this.state.data[i],
            completed: !this.state.data[i].completed
          },
          ...this.state.data.slice(i + 1)
        ]
      })
    }
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
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
