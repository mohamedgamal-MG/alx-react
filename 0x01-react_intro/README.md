# React Intro Project

## Overview

This project focuses on building a React application, covering various aspects of React development. The project is divided into multiple tasks, each contributing to the overall understanding and proficiency in React.

## Concepts

The main concept covered in this project is **React**. It includes understanding how to create a basic JavaScript application using React, using `create-react-app` for quick development, JSX, debugging with React Developer Tools, testing with Enzyme's Shadow rendering, and integrating React with Webpack & Babel.

## Resources

- [React Official Website](https://reactjs.org/)
- [Getting started with React](https://reactjs.org/docs/getting-started.html)
- [React Overview](https://reactjs.org/docs/reconciliation.html)
- [create-react-app](https://create-react-app.dev/)
- [React Developer Tools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)
- [What is Babel?](https://babeljs.io/docs/en/)
- [Enzyme](https://enzymejs.github.io/enzyme/)

## Learning Objectives

By the end of this project, you should be able to:

- Create a basic JavaScript application using React.
- Utilize `create-react-app` for quick development with React.
- Understand and use JSX in your React components.
- Debug your React code using React Developer Tools.
- Implement Enzyme’s Shadow rendering for testing your application.
- Integrate React with Webpack & Babel.

## Requirements

- All files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A `README.md` file at the root of the project folder is mandatory.

## Tasks

### Task 0: Basic Application

**Instructions:**
- Create a basic app named `dashboard` using `create-react-app` in your `task_0` directory.
- Download the Holberton logo and Favicon, add them to the `src/` directory under `dashboard/`.
- Remove unused files: `service-worker`, `index.css`, `App.test.js`.
- Modify `App.js` to create a header, body, and footer as specified.
- Update `App.css` to match the provided screenshot.

**Repo Details:**
- GitHub repository: `alx-react`
- Directory: `0x01-react_intro`
- Files: `task_0/dashboard/src/`, `task_0/dashboard/src/App.css`, `task_0/dashboard/src/App.js`

### Task 1: Embedding Expressions, Functions

**Instructions:**
- Create a `utils.js` file in `task_1/dashboard/src/` with two functions.
- Modify `App.js` and create a `Notifications` element.
- Style the `Notifications` class in `Notifications.css`.
- Render the `Notifications` element in `index.js`.

**Repo Details:**
- GitHub repository: `alx-react`
- Directory: `0x01-react_intro`
- Files: `task_1/dashboard/src/`, `task_1/dashboard/src/utils.js`, `task_1/dashboard/src/App.js`, `task_1/dashboard/src/Notifications.css`, `task_1/dashboard/src/Notifications.js`, `task_1/dashboard/src/index.js`

### ... (Continue documenting each task in a similar fashion)

## Task 8: Deploy to a GitHub Page

**Instructions:**
- Deploy your application to GitHub Pages using the `gh-pages` branch and `create-react-app`.
- Verify that your application works correctly when accessing the GitHub URL.

**Repo Details:**
- GitHub repository: `alx-react`
- Directory: `0x01-react_intro`
- Files: `task_4/`

## Task 9: Create a Project Using Webpack

**Instructions:**
- Start a new npm project without reusing `create-react-app`.
- Set up Webpack to output a `bundle.js` file in a `dist` folder.
- Configure a dev server with hot reloading.
- Create a `src` folder for your JavaScript.
- Set up a simple HTML file in the `dist` folder that imports the bundle file.

**Repo Details:**
- GitHub repository: `alx-react`
- Directory: `0x01-react_intro`
- Files: `task_5/dashboard/config/webpack.config.js`, `task_5/dashboard/dist/index.html`, `task_5/dashboard/src/index.js`

### ... (Continue documenting each task in a similar fashion)

## Task 12: Testing

**Instructions:**
- Install Jest and Enzyme to run your test suites.
- Move the `setupTests.js` file to the `config` folder if not already done.

**Requirements:**
- Add the following scripts to your `package.json`:
    - `"start": "webpack-dev-server --mode development --config config/webpack.config.js"`
    - `"test": "jest"`
- Running the first script should start your dev server and build without any error.
- Running the second script should start your test suites and pass for each test.

**Repo Details:**
- GitHub repository: `alx-react`
- Directory: `0x01-react_intro`
- Files: `task_5/dashboard/config/setupTests.js`, `task_5/dashboard/package.json`

Feel free to continue this template for the remaining tasks. Each task description should include clear instructions, repository details, and requirements. Make sure to update the repository, directory, and file details for each task.
