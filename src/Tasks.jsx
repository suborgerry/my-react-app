function Tasks({ tabsObj, activeTab, setTabsObj }) {
    if (tabsObj.length == 0 || activeTab == '') return;

    let currentTab = '';

    function removeItem(btn) {
        const taskItem = btn.closest('li').dataset.name;

        currentTab.tasks.forEach((task, index) => {
            if (task.name != taskItem) return;

            const newTasks = currentTab.tasks;

            newTasks.splice(index, 1);
            currentTab.tasks = newTasks;

            tabsObj.forEach((tab, index) => {
                if (tab.name != currentTab.name) return;

                const newTabs = [...tabsObj];
                newTabs.splice(index, 1, currentTab);
                console.log(newTabs);
                setTabsObj(newTabs);
            });
        });
    }

    function toggleState(li) {
        li.classList.toggle('completed');
    }

    tabsObj.forEach(tab => {
        if (tab.name === activeTab) {
            currentTab = tab;
        }
    });


    const tasksList = currentTab.tasks.map((task, index) => {
        return (
            <li onClick={evt => { toggleState(evt.target) }} data-name={task.name} key={task.name + index} className={task.done ? 'completed' : ''}>
                <span>{task.name}</span>
                <button onClick={evt => { removeItem(evt.target) }} className="remove-btn">❌</button>
            </li>
        )
    });

    return (
        <ul className="taks-list" data-name={currentTab.name}>
            {tasksList}
        </ul>
    )
}

export default Tasks;