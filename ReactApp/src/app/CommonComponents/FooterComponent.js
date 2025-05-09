import React from "react"

//This is a functional component
let Footer = (props) => {
    return(
        <div>
            <h1>This is footer component {props.sessionName}</h1>
        </div>
    )
}

export default Footer