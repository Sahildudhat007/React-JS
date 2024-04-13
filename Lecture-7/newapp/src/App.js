// import logo from './logo.svg';
import './App.css';
import PropsData from './Component/PropsData';
import PropsCard from './Component/PropsCard';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center' }}>

      {PropsData.map((cvalue, index, array) => {
        console.log(cvalue, "cvalue")
        return <PropsCard key={index} name={cvalue.name} discription={cvalue.discription} coures={cvalue.coures} button={cvalue.button} image={cvalue.image} />
      })}

      </div>
    </div>
  );
}

export default App;
