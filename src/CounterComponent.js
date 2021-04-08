import React, { Component } from 'react'

export default class CounterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            submit: ""
        }

        // Повторение
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
        // this.reset = this.reset.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }
    // Повторение
    // increment(){
    //     this.setState({
    //         count: ++this.state.count,
    //     });
    // }
    // decrement(){
    //     this.setState({
    //         count: --this.state.count,
    //     });
    // }

    // reset(){
    //     this.setState({
    //         count: 0,
    //     });
    // }

    handleChange(event){
        //Когда метод вызывается, он получает объект содержащий строку текста от инпут элемента
        this.setState({
            input: event.target.value,
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            submit: this.state.input,
        });
    }

    reset(){
        this.setState({
            input: ''
        });
    }

    render() {
        return (
            // <div>
            //     <button onClick={this.increment}>Increment</button>
            //     <button onClick={this.decrement}>Decrement</button>
            //     <button onClick={this.reset}>Reset</button>
            //     <h1>Current:{this.state.count}</h1>
            // </div>

            //onChange - это обработчик событий
            <div>

                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}/> 
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={this.reset}>RESET</button>
                <h1>Input: {this.state.submit}</h1>
                </form>
            </div>
        )
    }
}
