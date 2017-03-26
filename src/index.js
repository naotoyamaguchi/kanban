import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './app.css';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import { toDoCards } from './reducers';
import thunk from 'redux-thunk'

let store = createStore(toDoCards, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk), );

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);