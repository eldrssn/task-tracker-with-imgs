import { compose } from 'redux';
import { withRedux } from './withRedux';

export const withAppData = (Component) => {
  return compose(withRedux)(Component);
};
