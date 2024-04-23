
import './App.css';
import Selector from '../Selector/Selector'
import LandingPage from '../LandingPage/LandingPage';
import { useState } from 'react';

function App() {

  const [selectorOpen, setSelectorOpen] = useState(false);
  return (
    <div className="App">
      {selectorOpen === false && <LandingPage openSelector={setSelectorOpen}/>}

      
      {selectorOpen === true && <Selector openSelector={setSelectorOpen} />}
    </div>
  );
}

export default App;
