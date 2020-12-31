import React, { Component } from 'react';
import Todo from '../../Components/Todo/Todo';
import Controller from '../../Components/Controller/Controller';
import classes from './TodoList.module.css';

class TodoList extends Component {
    state = {
        todos: [
            {task: 'Finish nodeJS course', id: Math.random()},
            {task: 'Always love liza', id: Math.random()},
            {task: 'Feed my cat', id: Math.random()},
        ],
        input: ''
    }

    addTodoFunc = (e) => {
        e.preventDefault();
        if (this.state.input !== '') {
        const newTodo = {
            task: this.state.input,
            id: Math.random()
        }

        this.setState({
            todos: [newTodo, ...this.state.todos],
            input: ''
        })
    }}

    deleteTodoFunc = (id) => {
        const copyState = [...this.state.todos];
        const updateState = copyState.filter(todo => todo.id !== id);
        this.setState({todos: updateState});
    }

    changeTodoFunc = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div className={classes.Main_container}>
                <Controller add={this.addTodoFunc} change={this.changeTodoFunc} curentValue={this.state.input}/>
                {this.state.todos.map(todo => {
                    return <Todo key={todo.id} text={todo.task} remove={() => this.deleteTodoFunc(todo.id)}/>;
                })}
            </div>
        )
    }
}

export default TodoList;