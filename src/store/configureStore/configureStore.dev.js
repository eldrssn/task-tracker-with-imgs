import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let store;

const devStore = (initialState) => {
  if (store) {
    return store;
  }

  const createdStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store = createdStore;

  return store;
};

export default devStore;
