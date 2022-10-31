import './App.css';
import React, {useState} from 'react';
function App() {
  const [counter, Setcounter] = useState([])
  const [input, Setinput] = useState("")

  return (
    <div className="App">
      <h1>Enter the task</h1>
      <div className='flex'>
        <input type="text" onChange={(e) => {Setinput(e.target.value)}} value = {input}/>
        <button onClick={() => {Setcounter(counter.concat([input]))}}>Submit</button> {counter.map((task) => {return (<h1>{task}</h1>)})}
      </div>
    </div>
  );
}

export default App;
