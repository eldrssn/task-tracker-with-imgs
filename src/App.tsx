import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SaveChangesModule from './components/SaveChangesModule';
import useSaveState from './hooks/useSaveState';
import { useTypedSelector } from './hooks/useTypedSelector';
import { stateName } from './utils';

function App() {

  const tracker = useTypedSelector((state) => state.tracker);
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
