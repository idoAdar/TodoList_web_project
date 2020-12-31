import React, { Component } from 'react';
import classes from './Controller.module.css';

class Controller extends Component {
    render() {
        return (
            <form onSubmit={this.props.add} className={classes.Form_container}>
                <div className={classes.Title}>
                    <h2>What's the Plan For Today?</h2>
                </div>
                <div className={classes.Controller}>
                    <input type="text" onChange={this.props.change} className={classes.Input} value={this.props.curentValue} placeholder="..." />
                    <button className={classes.Btn}>ADD</button>
                </div>
            </form>
        )
    }
}

export default Controller;