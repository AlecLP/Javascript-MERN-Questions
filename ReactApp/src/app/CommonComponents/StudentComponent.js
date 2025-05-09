import React, {Component} from "react"
import StudentChild from "./StudentChildComponent"

export default class Student extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName : "name",
            userAddress : "address"
        }
    }

    studentChildFunc = (userName, userAddress) => {
        this.setState({
            userName,
            userAddress
        })
    }

    render(){
        return(
            <>
                <h1>Student Component</h1>
                <div className="form col-md-12">
                     <div className="form-control">
                         <div className="col-md-3">
                             <label>{this.state.userName}</label>
                         </div>
                         <div className="col-md-3">
                             <label>{this.state.userAddress}</label>
                         </div>
                     </div>
                </div>
                <StudentChild userName={this.state.userName} userAddress={this.state.userAddress} passToParent={this.studentChildFunc}/>
            </>
        )
    }
}