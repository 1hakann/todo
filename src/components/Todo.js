import React, { Component } from 'react'
import ListTodos from './ListTodos'

 class Todo extends React.Component {
     //! 2-constructor oluşturuldu altında props ve state alıdı
    constructor(props) {
        super(props);
        
        this.state = {
            items:[],
            currentItem: {
                text: '',
                key: ''
            }
        }

        //! 6- bind edelim
        this.handleInput = this.handleInput.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    //! 4-metot tanımla
    handleInput(e) {
        this.setState ({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    //! 5- add tanımla
    addTodo(e) {
        e.preventDefault();

        const newTodo = this.state.currentItem
        console.log(newTodo);
        //! 7-Eklemeye ilk adım ardından listTodos ları yarat
        if(newTodo.text !== '') {
            const NewItems = [...this.state.items, newTodo];
            this.setState({
                items: NewItems,
                currentItem: {
                    text: '',   
                    key: ''
                }
            })
        }
    }

    render() {
        return (
            //! 1-yapı oluşturuldu
            <div className="todo-container">
                <div className="todo-body">
                <h1 className="todo-h1">What's Your Plan?</h1>
                <form id="todo-form" onSubmit={this.addTodo}>
                      {/*! 3-input a value ve button a func eklendi */}
                    <input type="text" placeholder="Write a task!" value={this.state.currentItem.text} onChange={this.handleInput} />
                    <button type="submit">Add Todo</button>
                </form>
                {/* 12-Comp Added */}
                <ListTodos items={this.state.items}></ListTodos>
                </div>
            </div>
        )
    }
}

export default Todo;