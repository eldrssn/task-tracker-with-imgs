import { useSelector } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import SaveChangesModule from "./components/SaveChangesModule";
import useSaveState from "./hooks/useSaveState";
import { stateName } from "./utils";

function App() {

  const tracker = useSelector((state) => state);
  const [isSaveChanges, setIsSaveChanges, saveChanges] = useSaveState(stateName, tracker);

  return (
    <div className="App">
      <Header saveChanges={saveChanges}/>
      <Main tracker={tracker}/>
      {isSaveChanges && <SaveChangesModule setIsSaveChanges={setIsSaveChanges} />}
    </div>
  );
}

export default App;
