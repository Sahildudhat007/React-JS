// import logo from './logo.svg';
import './App.css';
import PropsData from './Component/PropsData';
import Destructuring from './Component/Destructuring';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center' }}>

        {PropsData.map((cvalue, index, array) => {
          console.log(cvalue, "cvalue")
          return <Destructuring key={index} name={cvalue.name} discription={cvalue.discription} coures={cvalue.coures} button={cvalue.button} image={cvalue.image} />
        })}
      </div>
    </div>
  );
}

export default App;
