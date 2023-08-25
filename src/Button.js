import React from "react";

function Button({ onClick }) {
    return(
        <div className="App">
            <button onClick={onClick}>Let's see</button>
        </div>
    )
}
export default Button;