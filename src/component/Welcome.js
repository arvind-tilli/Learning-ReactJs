

import React from "react";

class Welcome extends React.Component {

    render() {
        const { heroName, actress } = this.props;
        // const { state1, state2 } = this.state; //very useful for states
        return (
            <div>
                <h1> Hero: {heroName}, Actress: {actress}</h1>
            </div>
        )
    }
}

export default Welcome;
