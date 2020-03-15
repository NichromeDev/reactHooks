import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [boolean, setBoolean] = useState(false);
  const [increment, setIncrement] = useState(0);

  const changeBool = () => {setBoolean(!boolean); console.log(boolean)}
  const incr = () => {setIncrement(increment + 1); console.log(increment)}

  useEffect(() => {
    if (boolean) incr();
  }, [boolean]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={changeBool}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p onClick={incr}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
