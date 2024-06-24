import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Components/Create/Create'
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Edit from './Components/Edit/Edit';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/edit/:id' element={<Edit/>} />
          <Route path='/create' element={<Create/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
