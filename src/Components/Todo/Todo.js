import React, { Component } from 'react';
import classes from './Todo.module.css';

class Todo extends Component {
    state = { isDone: false};

    doneFunc = () => {
        const updateState = !this.state.isDone;
        this.setState({ isDone: updateState});
        setTimeout(() => {
            console.log(this.state);    
        }, 500);
        
    }
    
    render() {
        const pStyle = {
            color: 'white',
            paddingLeft: '1rem',
            textTransform: 'capitalize'
        };
        if (this.state.isDone) {
            pStyle.color = 'rgb(30, 40, 40)';
            pStyle.textDecoration = 'line-through';
        }

        return (
            <div className={classes.Todo_container}>
                <div className={classes.Text_container}>
                    <p style={pStyle}>{this.props.text}</p>
                </div>
                <div className={classes.Btns}>
                    <button onClick={this.props.remove} className={classes.Delete}><i className="fas fa-trash"></i></button>
                    <button onClick={this.doneFunc} className={classes.Edit}><i className="fas fa-edit"></i></button>
                </div>
            </div>
        )
    }
}

export default Todo;