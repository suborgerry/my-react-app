import { useState } from 'react'

function Form({ tasks, setTasks }) {
    const [task, setTask] = useState('');

    function handleTasks() {
        if (task == '') return;
        setTasks([...tasks, task]);
    }

    function changeInput(inputValue) {
        setTask(inputValue);
    }

    return (
        <div className='form'>
            <input type='text' onChange={e => changeInput(e.target.value)} />
            <button className='primary-btn' onClick={handleTasks}>Add task</button>
        </div>
    )
}

export default Form;