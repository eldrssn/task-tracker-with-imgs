import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store/configureStore';

const initialState = {};

const store = configureStore(initialState);

export const withRedux = (Component) => {
  return (props) => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };
};
