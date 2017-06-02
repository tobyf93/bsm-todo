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
React components.

### containers/
Also React components.  You won't understand the difference between components and containers until i introduce you to Redux.

### index.html
The HTML page that our application will be injected into.

### index.js
Webpacks entry point.  Everything to do with our application will stem from this file.

## Web Server
This project is powered by Webpack.  Webpack is responsible for making builds from the source files that we create (more on this later).  We will be using a Node web server called webpack-dev-server.

`yarn | npm start [-- --port <port>]` will get us off and running!

If you visit `http://localhost:<port>/` you should see a really exciting web page:

![alt text](https://github.com/tobyf93/bsm-todo/blob/master/images/basicWebPage.png)

