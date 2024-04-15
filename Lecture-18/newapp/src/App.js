// import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';

function App() {
  const ref = useRef();
  console.log(ref);
  const hendleRef = () =>{
    ref.current.style.color = "green";
    ref.current.style.background = "red";
  }

  return (
    <div className="App">
      <input type='text' ref={ref}/>
      <button onClick={hendleRef}>Click Me</button>
    </div>
  );
}

export default App;
