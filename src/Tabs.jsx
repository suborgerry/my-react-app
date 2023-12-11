function Tabs() {

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

    return (
        <div className="tabs">
            {/* <div className="tab">Tab 1</div> */}
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