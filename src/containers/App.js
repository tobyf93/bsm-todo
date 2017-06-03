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
          complete: false
        }
      ]
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
          complete: !todo.complete
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
          data={this.state.data}
          toggle={this.toggle}
          destroy={this.destroy}
        />
        <Footer
          show={this.state.show}
          filter={this.filter}
          count={this.state.data.filter(todo => todo.complete === false).length}
        />
      </div>
    );
  }
}

export default App;
