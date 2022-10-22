import UserBar from "./users/UserBar";
import AddTodoTask from "./todos/AddTodoTask";
import TodoList from "./todos/TodoList";
import React, {useReducer} from "react";
import appReducer from "../hooks/Reducers";

function App() {
    console.log("App fresh start")
    const initialTodos = [
        {
            title: "Todo-1.",
            content: "Some text",
            dateCreated: new Date(Date.now()).toLocaleString(),
            completed: false,
            dateCompleted:''
        },
        {
            title: "Todo-2.",
            content: "Some text text",
            dateCreated: new Date(Date.now()).toLocaleString(),
            completed: false,
            dateCompleted: ''
        }, {
            title: "Todo-3.",
            content: "Some text text text",
            dateCreated: new Date(Date.now()).toLocaleString(),
            completed: false,
            dateCompleted: ''
        }
    ]
    const [state, dispatch] = useReducer(appReducer, {user: '', todos: initialTodos});
    console.log("state: ", state)
    console.log("dispatch: ", dispatch)
    const {user, todos} = state;
    console.log("user: ", user)
    console.log("todos: ", todos)

    return (
        <div>
            <UserBar user={user} dispatchUser={dispatch}/>
            {user && <AddTodoTask user={user} dispatch={dispatch}/>}
            <TodoList todos={todos} dispatch={dispatch}/>
        </div>
    );
}

export default App;
