console.log("Reducer fresh start")
function userReducer (state, action) {
    console.log("userReducer start")
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            console.log("return action.username 给state: " + action.username)
            return action.username;
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

function todoReducer (state, action) {
    console.log("todoReducer start")
    switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = {
                title: action.title,
                content: action.content,
                author: action.author,
                completed: action.completed
            }
            return [ newTodo, ...state ]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.title === action.title) {
                    todo.completed = !action.completed;
                }
                return todo;
            });

        case 'DELETE_TODO':
            return state.filter((todo) => todo.title !== action.title);
        default:
            return state;
    }
}

export default function appReducer(state, action) {
    console.log("appReducer start")
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }

}