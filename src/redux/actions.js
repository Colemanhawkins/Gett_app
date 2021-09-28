import * as types from './actionsTypes';
import axios from 'axios';
import Swal from 'sweetalert2'

export const loadTodos = () => async (dispatch) =>{

      try{ 
          
        dispatch({ type: 'REQUEST_TODOS' })

        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
        
        const todos = data.slice(0,20);

        dispatch({ type: 'SUCESS_TODOS', payload: todos });
            
        } catch (error){

        dispatch({ type: 'ERROR_TODOS', error: error});
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
        }
}

export const completeTodo = (todo) =>({
    type:types.COMPLETE_TODO,
    payload: todo
})

export const createTodo = (todo) => ({
    type: types.CREATE_TODO,
    payload: todo
})

export const editTodo = (data) => ({
    type: types.EDIT_TODO,
    payload: data
})

export const deleteTodo = (todo) => ({
    type: types.DELETE_TODO,
    payload:  todo, 
})