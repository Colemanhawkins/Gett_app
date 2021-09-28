import React, {useState} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import '../styles/Todo.css'

const Todo = ({toggleTodo , title , completed, id , removeTodo, updateTodo}) => {

    const [isEditing , setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(title);
    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo(id , editTask);
        setIsEditing(false)
    }
    
    return (
       <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
           { isEditing ? (
               <CSSTransition key='editing' timeout={500} classNames='form'>
            <form className='Todo-edit-form' onSubmit={handleUpdate}>
                <input
                type='text'
                name='task'
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
                />
                <button>Save</button>
        </form>
               </CSSTransition>
           ) : (
            <CSSTransition key="normal" timeout={500} classNames="task-text">
                    <li className="Todo-task" onClick={toggleTodo}>
                         {title}
                    </li>
            </CSSTransition>
           )}
          
           <div className="Todo-buttons">
                <button onClick={() => setIsEditing(true)} >
                <FontAwesomeIcon icon={faPen}/>
                </button>
                <button onClick={removeTodo} >
                <FontAwesomeIcon icon={faTrash}/>
                </button>
           </div>
       </TransitionGroup>
    )
}

export default Todo
