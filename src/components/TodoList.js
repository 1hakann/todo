import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import './TodoList.css'

import ReactDOM from 'react-dom'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

    //! 8- Todolist component created
    function TodoList(props) {

        //! 9- We got the props as items so we can use it in the ListTodos comp in the todo.
        const items = props.items
        //! 10- -Since the tasks we received are an object, we converted it to an array with map().
        const listTodo = items.map(item => {
            return <div className="list" key={item.key}>
                <p>
                <input type="text" id={item.key} value={item.text} className="editInput" onChange={
                    (e) => {
                        props.setUpdate(e.target.value, item.key)
                    }
                } />
                <span>
                    {/* //! 14- Fontawesome added to the project and used. */}
                    {/* //! 15- onclick funct. added */}
                    <FontAwesomeIcon className="faicons" icon={faTrash} onClick={ () => props.deleteItem(item.key)} />
                </span>
                </p>
            </div>
        })

        //! 11-And we showed this in return.
        return (
            <div>
                <FlipMove duration={500} easing="ease-in-out">
                    { listTodo }
                </FlipMove>
            </div>
        )
    } 

export default TodoList;
