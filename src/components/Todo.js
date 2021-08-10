import React, { Component } from 'react'

 class Todo extends Component {
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
        this.setState = {
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        }
    }

    //! 5- add tanımla
    addTodo(e) {
        e.preventDefault();

        const newTodo = this.state.items
        console.log(newTodo);
    }

    render() {
        return (
            //! 1-yapı oluşturuldu
            <div className="todo-container">
                <div className="todo-body">
                <h1 className="todo-h1">What's Your Plan?</h1>
                <form id="todo-form">
                      {/*! 3-input a value ve button a func eklendi */}
                    <input type="text" placeholder="Write a task!" value={this.state.currentItem.text} />
                    <button onChange={this.handleInput} type="submit">Add Todo</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Todo;