import React from 'react';

function Todo({ title, content, dateCreated, completed, dateCompleted, dispatch}) {
    console.log("Todo fresh start")
    function handleDelete(e) {
        console.log("In Todo handleDelete")
        console.log("title", title)
        e.preventDefault();
        dispatch({type: "DELETE_TODO", title})
    }

    function handleToggle() {
        console.log("In Todo handleToggle")
        dispatch({type: "TOGGLE_TODO", title, completed})
    }
    if (completed) {
        return (
            <div>
                <h3>{title}</h3>
                <div>{content}</div>
                <div>Created at: {new Date(Date.now()).toLocaleString()}</div>
                <div>Completed at: {new Date(Date.now()).toLocaleString()}</div>
                <button onClick={e => handleDelete(e)}>Delete</button>
                <input type="checkbox" onClick={handleToggle} />
            </div>
        )
    } else {
        return (
            <div>
                <h3>{title}</h3>
                <div>{content}</div>
                <div>Created at <b>{new Date(Date.now()).toLocaleString()}</b></div>
                <div>Completed: {completed ? 'Yes' : 'No'}</div>
                <button onClick={e => handleDelete(e)}>Delete</button>
                <input type="checkbox" onClick={handleToggle} />
            </div>
        );
    }
}

export default Todo;