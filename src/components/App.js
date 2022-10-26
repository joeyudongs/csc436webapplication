import UserBar from "./users/UserBar";
import AddTodoTask from "./todos/AddTodoTask";
import TodoList from "./todos/TodoList";
import ChangeTheme from "./ChangeTheme";
import React, {useEffect, useReducer, useState} from "react";
import appReducer from "./hooks/Reducers";
import Header from "./todos/Header";
import {ThemeContext, StateContext} from './hooks/Contexts'
import { useResource} from "react-request-hook";


function App() {
    // const initialTodos = [
    //     {
    //         title: "Todo-1.",
    //         content: "Some text",
    //         dateCreated: new Date(Date.now()).toLocaleString(),
    //         completed: false,
    //         dateCompleted: ''
    //     },
    //     {
    //         title: "Todo-2.",
    //         content: "Some text text",
    //         dateCreated: new Date(Date.now()).toLocaleString(),
    //         completed: false,
    //         dateCompleted: ''
    //     }, {
    //         title: "Todo-3.",
    //         content: "Some text text text",
    //         dateCreated: new Date(Date.now()).toLocaleString(),
    //         completed: false,
    //         dateCompleted: ''
    //     }
    // ]
    const [theme, setTheme] = useState({
        primaryColor: 'deepskyblue',
        secondaryColor: 'coral'
    })
    const [todos, getTodos] = useResource(() => ({
        url: '/todos',
        method: 'get'
    }))
    
    useEffect(getTodos,[])

    useEffect(() => {
        console.log("in App useEffect")
        console.log("todos: ", todos)
        console.log("todos.data: ", todos.data)
        if (todos && todos.data) {
            dispatch({type: 'FETCH_TODOS', todos: todos.data})
        }
    }, [todos])

    const [state, dispatch] = useReducer(appReducer, {user: '', todos: []});
    const {user} = state;

    return (
        <div>
            {/* <ThemeContext.Provider value={{ primaryColor: 'red', secondaryColor: 'green'}}> */}
            <ThemeContext.Provider value={theme}>

                <StateContext.Provider value={{ state: state, dispatch: dispatch}}>
                    <Header text="Max's Todo List."/> 
                    <ChangeTheme theme={theme} setTheme={setTheme} />
                    {/* <UserBar user={user} dispatchUser={dispatch}/> */}
                    <UserBar />
                    {/* {user && <AddTodoTask user={user} dispatch={dispatch}/>} */}
                    {user && <AddTodoTask />}
                    {/* <TodoList todos={todos} dispatch={dispatch}/> */}
                    <TodoList />
                </StateContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
