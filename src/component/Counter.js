import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    incrementCount() {
        //Never change the state directly bcz it will not rerender the ui
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count); //here value will change but not on UI
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log("Callback value", this.state.count);
        // });
        // //since setState is async function, so below line will show previous value of count
        // console.log(this.state.count);

        //incrementCount() function async way
        // Take previous state as input
        this.setState((prevState, props) => ({
            count: prevState.count + props.addvalue,
        }))
    }


    incrementFive() {
        //this is not incrementing value 5 times bcz it is calling async way
        this.incrementCount({ addvalue: 1 });
        this.incrementCount({ addvalue: 1 });
        this.incrementCount({ addvalue: 1 });
        this.incrementCount({ addvalue: 1 });
        this.incrementCount({ addvalue: 1 });

        // To solve above problem, we should make the incrementCount() function to depend on prev state 
    }
    render() {
        return (<>
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>

        </>)
    }
}

export default Counter;
