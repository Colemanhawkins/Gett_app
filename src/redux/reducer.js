import * as types from './actionsTypes'
import {v4 as uuidv4} from 'uuid'

const initialState = {
    loading: false,
    todos: [],
    error: false
}

const todosReducer = (state = initialState , action) => {
    switch (action.type) {       
        case  types.REQUEST_TODOS:
            return {
                ...state,
                loading: true,
            };
        case types.SUCESS_TODOS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case types.ERROR_TODOS:
            return {
                ...state,
                error: action.payload.error
            }
        case types.COMPLETE_TODO: 
            const toggleTodos = state.todos.map((t) =>
                t.id === action.payload.id ? {...action.payload, completed: !action.payload.completed} : t)
            return {
              ...state,
              todos: toggleTodos,
            }
        case types.CREATE_TODO: 
            const newTodo = {
                id: uuidv4(),
                title: action.payload,
                completed: false
            };
            const addedTodos = [...state.todos, newTodo];
            return {
                ...state,
                todos: addedTodos
            }
        case types.DELETE_TODO:
            const filterTodo = state.todos.filter((t) => t.id !== action.payload.id)
            return {
                ...state,
                todos: filterTodo
            } 
        case types.EDIT_TODO: 
        const updateTodos = state.todos.map((todo) => {
                if(todo.id === action.payload.id) {
                    return {...todo, title: action.payload.updatedTask}
                }
            return todo;
        })
            return {
                ...state,
                todos: updateTodos
            }
            default:
                return state;
    }
};

export default todosReducer;