import React, { Component } from 'react'

export class Form extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
        // this.handleUsernameChange.bind(this);
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: `${event.target.value}`,
        })
    }
    handleCommentChange = (event) => {
        this.setState({
            comments: `${event.target.value}`
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`Username: ${this.state.username} Comments: ${this.state.comments} and Topic: ${this.state.topic}`)
        event.preventDefault();
    }
    render() {
        const { username, topic, comments } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <lable>Username</lable>
                    <input type='text' value={username} onChange={this.handleUsernameChange}></input>
                    <div>
                        <lable >Comments</lable>
                        <textarea value={comments} onChange={this.handleCommentChange}></textarea>
                    </div>
                    <div>
                        <label>Topic: </label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
