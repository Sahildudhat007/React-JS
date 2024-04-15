// import logo from './logo.svg';
import './App.css';
import TernaryOperator from './Component/TernaryOperator';
import Slotmachine from './Component/Slotmachine';


function App() {
  return (
    <div className="App">
      <div> 
        <h1 className="bg-slate-500 text-white text-center text-2xl font-semibold py-5">Slot Machine Game</h1>
        <div className="text-2xl text-center">
          <Slotmachine x="😊" y="😊" z="😊"/>
        </div>
      </div>

      <TernaryOperator/>
      
    </div>
  );
}

export default App;
