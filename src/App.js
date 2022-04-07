
import './App.css';
import {useState} from 'react'
function App() {

  const [fruits, setFruits] = useState([
    { name: 'banana', color:'yellow', price:2},
    {name:'cherry', color:'red', price:3},
    {name:'strawberry', color:'red', price:4},
  ]);

  function filterRedFruits(){
    const filterFrut = fruits.filter((item) => item.color === 'red')
    setFruits(filterFrut)
  }

  const totalPrice = fruits.reduce((item, novoItem) => item + novoItem.price, 0)

  return (
    <div className="App">
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item.name}- {item.color} - {item.price}</li>
          ))}
      </ul>
        <div>{totalPrice}</div>
      <button onClick={filterRedFruits}>Filtrar</button>
    </div>
  );
}

export default App;
