function Tasks({ tasks }) {
    if (tasks.length == 0) return;

    function removeItem(btn) {
        const taskItem = btn.closest('li');
        console.log(taskItem);
        taskItem.remove();
    }

    function toggleState(li) {
        console.log(li);
        li.classList.toggle('completed');
    }

    const tasksList = tasks.map((task, index) => {
        return (
            <li onClick={evt => { toggleState(evt.target) }} key={task + index}><span>{task}</span><button onClick={evt => { removeItem(evt.target) }} className="remove-btn">❌</button></li>
        )
    });

    console.log(tasksList);

    return (
        <ul className="taks-list">
            {tasksList}
        </ul>
    )
}

export default Tasks;