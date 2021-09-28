import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';
import Swal from 'sweetalert2';
import {completeTodo, createTodo , loadTodos, deleteTodo, editTodo} from '../redux/actions'
import TodoInput from './TodoInput'
import Todo from './Todo'
import React from 'react'
import '../styles/TodoList.css'

const TodoList = () => {

    const dispatch = useDispatch()

    const state = useSelector((state) => ({...state.todos}));

    const create = (newTodo) => {
        dispatch(createTodo(newTodo))
        Swal.fire({
            title: 'Success',
            text: 'Create todo completed',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    };

   
    useEffect(() => {
            dispatch(loadTodos());
        }
    , []);
    
    const update = (id , updatedTask) => {

         dispatch(editTodo({id, updatedTask}))

            Swal.fire({
                title: 'Success',
                text: 'edit completed',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
    }

    const deleteTodoo = (todo) => {
        dispatch(deleteTodo(todo))
        console.log(todo)
        Swal.fire({
            title: 'Success',
            text: 'delete completed',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

    }
    return (
        <div className='TodoList'>
            {state.loading ? (
            <div>Loading.... </div>
            ):
             (<div>
                 <h1>Gett App</h1>
             <TodoInput createTodo={create} />
               <ul>
                   <TransitionGroup className='todo=list'>
                       {state.todos  &&  state.todos.map((todo) => {
                           return(
                               <CSSTransition key={todo.id} classNames='todo' timeout={200}>
                                  <Todo 
                                  key={todo.id}
                                  id={todo.id}
                                  title={todo.title}
                                  completed={todo.completed}
                                  toggleTodo={ () => 
                                    dispatch(completeTodo(todo))
                                    }
                                    removeTodo={() => deleteTodoo(todo)}
                                    updateTodo= {update}
                                  />
                               </CSSTransition>
                           )
                           })}
                   </TransitionGroup>
               </ul>
               </div>
             )
            }     
        </div>
    )
}

export default TodoList