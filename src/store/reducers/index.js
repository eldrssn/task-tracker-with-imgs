import { combineReducers } from 'redux';
import { tracker } from './tracker';

const rootReducer = combineReducers({
  tracker,
});

export default rootReducer;
