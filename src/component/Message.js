import React from 'react'


class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome To React tut"
        }
    }
    changeMessage() {
        this.setState({
            message: "Thanks for Subscribing"
        })
    }
    render() {
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Change me</button>
            </div>
        )
    }
}

export default Message;
