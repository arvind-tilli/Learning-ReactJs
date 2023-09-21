import React, { Component } from 'react'

export class UserGreet extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
        }
    }
    render() {
        // First-approach
        //if-else condition can not be written inside jsx
        // if (this.state.isLoggedIn) {
        //     return <div> Welcome Arvind</div >
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // Second-approach
        // let message = "";
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Arvind</div>
        // } else {
        //     message = <div>Welcome Guest </div>
        // }
        // return <div>{message}</div>

        //third-approach
        // return this.state.isLoggedIn ? <div>Welcome Arvind</div> : <div>Welcome guest</div>

        //fourth-approach
        return this.state.isLoggedIn && <div>Welcome Arvind</div>

    }
}

export default UserGreet
