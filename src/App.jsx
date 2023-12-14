import './App.sass'
import Tasks from './Tasks';
import { useEffect, useState } from 'react'
import Form from './Form';
import Tabs from './Tabs';

function App() {

  const [tabsObj, setTabsObj] = useState([
    {
      "name": "Tab 1",
      "tasks": [
        {
          "name": "Task 1",
          "done": true
        },
        {
          "name": "Task 2",
          "done": false
        },
        {
          "name": "Task 3",
          "done": false
        },
        {
          "name": "Task 4",
          "done": false
        }
      ]
    },
    {
      "name": "Tab 2",
      "tasks": [
        {
          "name": "Task 1",
          "done": false
        },
        {
          "name": "Task 12",
          "done": true
        }
      ]
    }
  ]);
  const [activeTab, setActiveTab] = useState(tabsObj[0].name);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tabsObj);
  }, [tabsObj])

  return (
    <>
      <Tabs tabsObj={tabsObj} setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className='todo'>
        {/* <label>Task input: </label> */}
        <Form tasks={tasks} setTasks={setTasks} />
      </div>
      <div>
        <Tasks activeTab={activeTab} tabsObj={tabsObj} setTabsObj={setTabsObj} />
      </div>
    </>
  )
}

export default App
