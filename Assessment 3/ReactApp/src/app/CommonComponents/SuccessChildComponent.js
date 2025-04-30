import React from "react"

let SuccessChild = (props) => {
    let name = props.name
    let address = props.address
    let story = props.story

    return(
        <div>
            <h1>Success Child</h1>
            <p>Name: {name}</p>
            <p>Address:  {address}</p>
            <div>
                {story}
            </div>
        </div>
    )
}

export default SuccessChild