import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const changeTodo = (e) => {
        setInput(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        });

        setInput('');
    }

    return (
        <div className="todo-app">
            <form className="todo-form" onSubmit={addTodo}>
                <input type="text" className="todo-input" placeholder="Add a todo" name="text" value={input}/>
                <button className="todo-button" onChange={changeTodo}>Add Todo</button>
            </form>
        </div>
    )
}


export default TodoForm
