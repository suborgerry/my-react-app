import './App.css'
import Tasks from './Tasks';
import { useState } from 'react'
import Form from './Form';

function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className='todo'>
        <label>Task input: </label>
        <Form tasks={tasks} setTasks={setTasks} />
      </div>
      <div>
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App
