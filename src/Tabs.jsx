function Tabs({ tabsObj, setActiveTab, activeTab }) {

    function openTabInput(btn) {
        const container = btn.parentElement;
        container.classList.add('open-input')
    }

    function closeTabInput(btn) {
        const container = btn.closest('.open-input');
        container.classList.remove('open-input')
    }

    function createTab() {

    }

    function activateTab(tabName) {
        setActiveTab(tabName)
    }

    const Tabs = tabsObj.map((tab, index) => {
        return (
            <div className={activeTab == tab.name ? 'active tab' : 'tab'} key={tab.name + index} onClick={evt => { activateTab(evt.target.dataset.name) }} data-name={tab.name}>{tab.name}</div>
        )
    })

    return (
        <div className="tabs">
            {Tabs}
            <div onClick={evt => { openTabInput(evt.target) }} className="addtab-btn">➕</div>
            <div className="tabinput">
                <input type="text" />
                <button className="primary-btn" onClick={createTab}>Create tab</button>
                <button className="close-btn" type="button" onClick={evt => { closeTabInput(evt.target) }}>❌</button>
            </div>
        </div>
    )

}

export default Tabs;