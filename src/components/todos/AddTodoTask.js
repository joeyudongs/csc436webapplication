import React, {useState} from 'react';

function AddTodoTask({user, dispatch}) {
    console.log("AddTodoTask fresh start")
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    function handleTitle(evt) {
        console.log("handleTitle")
        setTitle(evt.target.value);
    }
    function handleContent(evt) {
        console.log("handleContent")
        setContent(evt.target.value);
    }
    function handleSubmit(e) {
        console.log("In AddTodoTask handleSubmit")
        e.preventDefault();
        dispatch({type: "CREATE_TODO", title, content, author: user, completed: false})
    }
    return (
        <form onSubmit={e => {handleSubmit(e)}}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title: </label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title"/>
            </div>
            <textarea value={content} onChange={handleContent}/>
            <input type="submit" value="Create"/>
        </form>
    );
}
export default AddTodoTask;

