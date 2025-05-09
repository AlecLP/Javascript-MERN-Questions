import React, {Component} from "react"

export default class StudentChild extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <h2>Student Child</h2>
                <label>Username is: {this.props.userName}, User Address is: {this.props.userAddress}</label>
                <button onClick={() => this.props.passToParent("New name", "New Address")}>Update Name and Address</button>
            </>
        )
    }
}