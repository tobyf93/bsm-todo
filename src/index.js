
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.html';

// Todo resources
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';
import 'todomvc-common/base.js';



ReactDOM.render(<App/>, document.getElementsByClassName('todoapp')[0]);


