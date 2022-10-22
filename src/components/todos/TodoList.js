import React from 'react';
import Todo from "./Todo";

function TodoList({todos = [], dispatch}) {
    console.log("TodoList fresh start")
    return (
        <div>
            {todos.map((todo, i) =>
                <div>
                    <Todo {...todo}
                          dispatch={dispatch}
                          title={todo.title}
                          author={todo.author}
                          content={todo.content}
                          key={'todo-' + i}/>
                </div>
            )}
        </div>
    );
}

export default TodoList;