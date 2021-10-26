import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getStateFromLocalStorage } from './utils';
import { defaultState } from './data';

const initialState = getStateFromLocalStorage(defaultState)

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

