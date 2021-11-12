import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store/configureStore';


// глобальный стейт?
const initialState = {}; // что за хрень

const store = configureStore(initialState);

export const withRedux = (Component) => (props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};