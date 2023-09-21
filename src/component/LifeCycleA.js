import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Viswas'

        }
        console.log('LifecycleA constructor ');
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }
    componentDidMount() {
        console.log("LifecycleA componentDidMount");
        return null;
    }

    // Updating lifecycle Met
    // 1. static getDerivedStatesFromProps(props, state)
    //  a. Method is called every time a componenet is re-rencered
    //  b. Set the states
    //  c. Do not caluse any side-effects exa- HTTP requests
    // 2. shouldComponentUpdate(nextProps, nextState)
    //  a. Dictates if the component should re-render or not
    //  b. Performance optimization
    //  c. Do not cause side effects. Exa- HTTP request and calling setState methods
    // 3. render method
    //  a. Only required method
    //  b. Read props & state and return JSX
    //  c. Do not change the state or unteract with DOM or make ajax calls
    // 3. getSnapshotBeforeUpdate(prevProps, prevState)
    //  a. called right before the changes from the virtual DOM are to be teflected in the DOM
    //  b. capture some information from the DOM
    //  c. method will either return null or return a value. Returned value will be passed as the third parameter to the next method.
    // 4. 
    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate");
    }

    componentDidUpdate() {

    }

    render() {
        console.log("LifecycleA render")
        return (
            <div>
                <LifeCycleB />
                LifecycleA
            </div>
        )
    }
}

export default LifeCycleA
