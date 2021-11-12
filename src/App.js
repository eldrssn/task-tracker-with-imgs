import Header from "./components/common/header/";
import Tracker from "./components/pages/tracker";
import Main from "./components/pages/tracker/Tracker";
import { withAppData } from "./hocs/withAppData";

function App() {

  return (
    <div className="app">
      <Header />
      <Tracker />
      {/* < ModalSave /> */}
    </div>
  );
}

export default withAppData(App);
