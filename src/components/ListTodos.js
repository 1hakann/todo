import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ListTodos.css'

import ReactDOM from 'react-dom'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'

    //! 8- ListTodos u inşa edelim
    function ListTodos(props) {

        // fontawesome.library.add(faCheckSquare, faCoffee);

        //! 9- items i propsa aldık ve tododa ListTodos compunda basabiliriz.
        const items = props.items
        //! 10- aldıklarımız bir obje old. için
        const listTodo = items.map(item => {
            return <div className="list" key="item.key">
                <p>{item.text}</p>
                <span>
                    <FontAwesomeIcon className="faicons" icon={faTrash} />
                </span>
            </div>
        })

        //! 11-Ekrana Çıktı Alalım
        return (
            <div>
            { listTodo }
            </div>
        )
    } 

export default ListTodos;
