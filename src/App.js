import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(async res => {
      const resData = await res.json()

      setTodos(resData)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ul>
        {todos.map(item => {
          return (
            <li>
              {item.userId}
            </li>
          )
        })}
      </ul>
        <button type="sumbit"> Coba</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
