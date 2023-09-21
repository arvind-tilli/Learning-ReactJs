import React from "react";

const Greet = ({ name, place }) => {
    return (
        <div>
            <h1> Welcome {name} from {place}</h1>
        </div>
    )
}

export default Greet;
