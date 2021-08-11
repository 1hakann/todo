import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fatrash } from '@fortawesome/free-solid-svg-icons'
import './ListTodos.css'

// 14- fontawesome ı ekleyelim
FontAwesomeIcon.add(fatrash)

    //! 8- ListTodos u inşa edelim
    function ListTodos(props) {

        //! 9- items i propsa aldık ve tododa ListTodos compunda basabiliriz.
        const items = props.items
        //! 10- aldıklarımız bir obje old. için
        const listTodo = items.map(item => {
            return <div className="list" key="item.key">
                <p>{item.text}</p>
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
