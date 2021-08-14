import React, { Component } from 'react'
import TodoList from './TodoList'

 class Todo extends React.Component {
     //! 2-Constructor was created and received props and state.
    constructor(props) {
        super(props);
        
        this.state = {
            items:[],
            currentItem: {
                text: '',
                key: ''
            }
        }

        //! 6- Bind operation done.
        this.handleInput = this.handleInput.bind(this)
        this.addTodo = this.addTodo.bind(this)
        //! 18- binding for delete icon
        this.deleteItem = this.deleteItem.bind(this)
    }

    //! 4-The function (for input) is coded.
    handleInput(e) {
        this.setState ({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    //! 5- The function (for form) is coded.
    addTodo(e) {
        e.preventDefault();

        const newTodo = this.state.currentItem
        console.log(newTodo);
        //! 7-Item 5 has been developed.
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

    /* //! 17- let's define the function  */
    deleteItem(key) {
        const filteredItems = this.state.items.filter(item => item.key!==key);
        this.setState({
            items: filteredItems
        })
    }

    render() {
        return (
            //! 1-The main structure has been created. Worked css for app view. (return in render func inside Todo.js)
            <div className="todo-container">
                <div className="todo-body">
                <h1 className="todo-h1">What's Your Plan?</h1>
                <form id="todo-form" onSubmit={this.addTodo}>
                      {/* //! 3-Added input a value and onChange function. Added onSubmit to the form. And the component called in the app  */}
                    <input type="text" placeholder="Write a task!" value={this.state.currentItem.text} onChange={this.handleInput} />
                    <button type="submit">Add Todo</button>
                </form>
                {/* 12-Comp Added */}
                {/* 16-Add the function added above as attribute to the listItem Component in todo. */}
                <TodoList items={this.state.items} deleteItem={this.deleteItem}></TodoList>
                </div>
            </div>
        )
    }
}

export default Todo;