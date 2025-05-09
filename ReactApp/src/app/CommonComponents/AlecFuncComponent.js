import React from "react"
import {useParams} from "react-router-dom"

let AlecFuncComponent = (props) => {
    let params = useParams()
    let emailid = params && params["emailid"] ? params["emailid"] : "None"
    let sessionDetails = params && params["sessiondetails"] ? params["sessiondetails"] : "None"

    return(
        <div>
            <h1>This is AlecFuncComponent</h1>
            <p>Email ID: {emailid}</p>
            <p>Next Session Details: {sessionDetails}</p>
        </div>
    )
}

export default AlecFuncComponent