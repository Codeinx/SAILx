function Headers(props) {
    return (
        <>
            <div id="left">
                <label htmlFor="task">Task Name</label>
                <input type="text" value={props.value} name="task" id="task" onChange={props.change}/>
                <button type="button" onClick={props.btnFunc}>Add</button>
            </div>
        </>
    )
}

export default Headers;