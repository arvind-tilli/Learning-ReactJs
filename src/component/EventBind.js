import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
        // apprach 3 code
        // this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler() {
    //     this.setState({
    //         message: "Good Day!!!"
    //     })
    // }

    // approach 4 code
    clickHandler = () => {
        this.setState({
            message: "Good day!!!"
        })
    }

    render() {
        return (
            <div>
                {/* <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Click</button>
                // because this keyword is undefined in clickHandler bcz it is callback function
                 */}

                {/* First approach --> not effecient */}
                {/* <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* second approach --> not effiecient*/}
                {/* <h1>{this.state.message}</h1>
                <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* Third approach --> effecient bcz binding happens in the constructor and this is one time proces
                    but in above two approach, binding happens with each event */}
                {/* <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Click</button> */}


                {/* Fourth approach -->class property as arrow function
                 redefine clickHandler as arraow function and then call it */}
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
