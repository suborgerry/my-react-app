import './App.sass'
import Tasks from './Tasks';
import { useState } from 'react'
import Form from './Form';
import Tabs from './Tabs';

function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Tabs />
      <div className='todo'>
        {/* <label>Task input: </label> */}
        <Form tasks={tasks} setTasks={setTasks} />
      </div>
      <div>
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App
