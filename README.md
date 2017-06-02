# My Software Versions
- Node v6.9.1
- NPM v4.1.2
- Yarn v0.23.2

# Prerequisites
- Install Node
- Install NPM
- Install Yarn (optional)
- Read [React Docs](https://facebook.github.io/react/docs/introducing-jsx.html)
	- Concentrate on concepts
	- I will cover hands-on coding

# Installation
- Clone repository
	- `git clone https://github.com/tobyf93/bsm-todo.git` OR
	- `git clone git@github.com:tobyf93/bsm-todo.git` (needs SSH key set up)
- `cd bsm-todo`
- `yarn | npm install` (Install Dependencies)

# Tutorial
## Create Personal Branch
- `git checkout template`
- `git checkout -b <yourName>`

This will create you a branch new git branch that you will work on to complete this project.  Ensure that you are **ALWAYS** working in your own branch.

## src/
### components/
React Components.

### containers/
Also React Components.  You won't understand the difference between components and containers until i introduce you to Redux.

### index.html
The HTML page that our application will be injected into.

### index.js
Webpack's entry point.  Everything to do with our application will stem from this file.

## Web Server
This project is powered by Webpack.  Webpack is responsible for making builds from the source files that we create (more on this later).  We will be using a Node web server called webpack-dev-server.

`yarn | npm start [-- --port <port>]` will get us off and running!

If you visit `http://localhost:<port>/` you should see a really exciting web page:

![alt text](https://github.com/tobyf93/bsm-todo/blob/master/images/basicWebPage.png)

## Injecting React
Lets visit our entry point:

```javascript
// src/index.js

import './index.html';

// Todo resources
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';
import 'todomvc-common/base.js';
```

This syntax may be foreign to some of you.  What this is using is the new ES6 Module system.  It's telling Webpack that we want to import these assets into our project.  This gives us our basic web page.

But we're not here to create a basic web page so lets get going with React!  First thing we need to do is import a few more modules:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
```

**Note:** import statements should be placed at the top of the file in the outer-most scope.

At this point you may be asking "Why on earth is React split into two separate modules?  Why not just one?".  To answer that i will explain what `react-dom` is for.  This modules main purpose is to provide the glue between React Components and the DOM.  The DOM is specific to Web Applications.  When `react-native` came along there was no need to have web-specific code lying around in the `react` module as iOS/Android apps don't work with a DOM.

Ok so now that we have our modules ready to go it is time to inject something into our basic web page:

```javascript
ReactDOM.render(
  <div style={{ padding: '15px', textAlign: 'center' }}>
    Hello World!
  </div>, document.getElementsByClassName('todoapp')[0]);
```

Here we are identifying the placeholder element that is in `src/index.html:10` and injecting a JSX element into it.  What we get as a result is a Hello World! example:

![alt text](https://github.com/tobyf93/bsm-todo/blob/master/images/helloWorld.png)

## First React Component
Lets create a new file:

```javascript
// src/containers/App.js

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ padding: '15px', textAlign: 'center' }}>
        Hello World!
      </div>
    );
  }
}

export default App;
```

This is a basic React Component that does exactly what we did previously.  Lets go back to our `ReactDOM.render(...)` call and inject our new component instead of a literal JSX element:

```javascript
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './index.html';

// Todo resources
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';
import 'todomvc-common/base.js';

ReactDOM.render(<App />, document.getElementsByClassName('todoapp')[0]);
```

You won't see a different in the web page.  This is a good thing!  It means that we have successfully created our first React Component!  The App container is going to be the root Component.  All other Components will be nested within.

## Footer Component
You may have noticed a Footer Component in the project.  Lets go and use that in our App Component:

```javascript
import React, { Component } from 'react';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Footer />
      </div>
    );
  }
}

export default App;
```

WOW!  That looks fancy!

![alt text](https://github.com/tobyf93/bsm-todo/blob/master/images/footer.png)

We have the look and feel of this Footer spot on but the functionality is missing...  Next thing we need to do is to get those buttons working for us!

To do this we are going to:
- Import constants
- Create a state object
- Create a filter method
- Pass new props to Footer (show and filter)

```javascript
// src/containers/App.js

import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.filter = this.filter.bind(this);
    this.state = {
      show: ALL_TODOS
    };
  }

  filter(newFilter) {
    this.setState({ show: newFilter });
  }

  render() {
    return (
      <div>
        <Footer
          show={this.state.show}
          filter={this.filter}
        />
      </div>
    );
  }
}

export default App;
```

Our Footer Component should look something like this to cater for the new props:

```javascript
// src/components/Footer.js

import React, { Component } from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>99</strong> todos left
        </span>
        <ul className="filters">
          <li>
            <a
            className={this.props.show === ALL_TODOS ? 'selected' : ''}
            onClick={() => this.props.filter(ALL_TODOS)}
            >
              All
            </a>
          </li>
          <li>
            <a
            className={this.props.show === ACTIVE_TODOS ? 'selected' : ''}
            onClick={() => this.props.filter(ACTIVE_TODOS)}
            >
              Active
            </a>
          </li>
          <li>
            <a
            className={this.props.show === COMPLETED_TODOS ? 'selected' : ''}
            onClick={() => this.props.filter(COMPLETED_TODOS)}
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed">
        Clear completed
        </button>
      </footer>
    );
  }
}
```

## Challenge
You would have noticed there are other components lying around that we haven't yet used:
- Header
- Todos

Lets add them into the mix:

```javascript
// src/containers/App.js

render() {
    return (
      <div>
      	<Header />
	<Todos />
        <Footer
          show={this.state.show}
          filter={this.filter}
        />
      </div>
    );
  }
```
