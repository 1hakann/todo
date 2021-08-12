import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TodoList.css'

import ReactDOM from 'react-dom'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'

    //! 8- Todolist component created
    function TodoList(props) {

        //! 9- We got the props as items so we can use it in the ListTodos comp in the todo.
        const items = props.items
        //! 10- -Since the tasks we received are an object, we converted it to an array with map().
        const listTodo = items.map(item => {
            return <div className="list" key="item.key">
                <p>{item.text}</p>
                <span>
                    {/* //! Fontawesome added to the project and used. */}
                    <FontAwesomeIcon className="faicons" icon={faTrash} />
                </span>
            </div>
        })

        //! 11-And we showed this in return.
        return (
            <div>
            { listTodo }
            </div>
        )
    } 

export default TodoList;
