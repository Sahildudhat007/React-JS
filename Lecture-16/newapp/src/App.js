// import logo from './logo.svg';
import { createContext } from 'react';
import './App.css';
import ComA from './Component/ComA';


const Context = createContext()

function App() {
  return (
    <div className="App">
      <Context.Provider value="Sahil Dudhat">
        <ComA/>
      </Context.Provider>
    </div>
  );
}

export {Context};
export default App;
