import logo from '../../logo.svg';
import './App.css';
import react , {useState} from 'react';

function App() {
  
  const name = "Aziz";
  const age = 30;
  const isLoggedIn = true;
  const element = <h1>Bonjour {name}</h1>;

  const user = {
    name: "Aziz",
    age: 30,
  }

  const tableau = ["fawzi", "Ali", "Ahmed"];

  const tableau2 = [
    { name: "ahmed", age: 30 },
    { name: "Ali", age: 25 },
    { name: "Ahmed", age: 20 },
  ]

  // const count = 0;
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  }

    const deincrement = () => {
    setCount(count - 1);
  }

  //const nom = "hello";
  const [nom, setNom] = useState("hello");
  return (
    <div className="App">
      <header className="App-header">
    {name} <br/>
    {age} <br/>
    {element} <br/>
    {/* {user.name} <br/> */}
    {tableau[0]} <br/>
    
    {tableau.map((item, index) => (
      <p key={index}>{item}</p>
    ))}

    {tableau2.map((item, index) => (
      <p key={index}>{item.name}, {item.age}</p>
    ))}


<br/>
{count}
<button onClick={increment}>Increment</button>
<button onClick={deincrement}>Deincrement</button>
<br/>
{nom}
<input type="text" onChange={(e) => setNom(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
