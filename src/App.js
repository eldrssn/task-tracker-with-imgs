import Header from './components/common/header';
import Tracker from './components/pages/tracker';
import { withAppData } from './hocs/withAppData';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Tracker />
    </div>
  );
};

export default withAppData(App);
