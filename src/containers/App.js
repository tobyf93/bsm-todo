import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';


import Header from '../components/Header';
import Todos from '../components/Todos';
import Footer from '../components/Footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.filter = this.filter.bind(this);
        this.newTodoItem = this.newTodoItem.bind(this);
        this.clearComplete = this.clearComplete.bind(this);
        this.state = {
            todoItems: [
            {label: "1st todo...", done: 0},
            {label: "2nd todo...", done: 0},
            {label: "3rd todo...", done: 0}
            ],
            show: ALL_TODOS,
        };
    }

    filter(newFilter) {
        this.setState({ show: newFilter });
    }

    newTodoItem(newLabel) {
        var shallowTodoItems = this.state.todoItems.slice();
        shallowTodoItems.push({label: newLabel, done: 0});
        this.setState({ todoItems: shallowTodoItems });
    }

    todoChange(label, done) {
        this.setState(old => {
            var shallowTodoItems = old.todoItems.slice();
            shallowTodoItems.find(todoItem => todoItem.label === label).done = done;
            return {todoItems: shallowTodoItems};
        });
    }

    todoRemove(label) {
        this.setState(old => {
            var shallowTodoItems = old.todoItems.filter(todoItem => todoItem.label !== label);
            return {todoItems: shallowTodoItems};
        });
    }

    clearComplete() {
        this.setState(old => {
            var shallowTodoItems = old.todoItems.filter(todoItem => !todoItem.done);
            return {todoItems: shallowTodoItems};
        });
    }

    render() {
        return (
            <div>
                <Header
                    newTodoItem = {this.newTodoItem}
                />
                <Todos
                    show={this.state.show}
                    todoItems={this.state.todoItems}
                    onChange={(label, done) => this.todoChange(label, done)}
                    onRemove={(label) => this.todoRemove(label)}
                />
                <Footer
                    show={this.state.show}
                    filter={this.filter}
                    clearComplete={this.clearComplete}
                    openItems = {this.state.todoItems.filter(todoItem => !todoItem.done).length}
                />
            </div>
        );
    }
}

export default App;
