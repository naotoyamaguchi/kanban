import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './app.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { toDoCards } from './reducers';

let store = createStore(toDoCards);

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);