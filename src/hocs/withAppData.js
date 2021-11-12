import { compose } from 'redux';
import { withRedux } from './withRedux';

export const withAppData = (Component) => compose(withRedux)(Component);