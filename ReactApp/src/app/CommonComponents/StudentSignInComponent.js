import React, {Component} from "react"

export default class StudentSignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            userName : "defaultUsername",
            userPass : "defaultUserpass",
            mobile : "1234567890"
        }
    }

    textBoxOnChange = (evt)=>{

        let target = evt.target;
        let classList = target.classList

        if (classList.contains("userName")) {
            this.setState({
                userName : target.value
            })
        } 
        if (classList.contains("userPass")) {
            this.setState({
                userPass : target.value
            })
        } 
        if (classList.contains("mobile")) {
            this.setState({
                mobile : target.value
            })
        } 
        //console.log(evt)
        //debugger

        evt.preventDefault();
    }

    saveUserClick = (evt) => {
        alert(this.state.userName +" " +this.state.userPass  +" " +this.state.mobile +" wil be saved")
        //a code to save data to the db using api and ajax will come here
        evt.preventDefault()
    }

    render(){
        return(
            <>
                <div className="form col-md-12">
                     <div className="form-control">
                         <div className="col-md-3">
                             <b>Username</b>
                         </div>
                         <div className="col-md-7">
                             <input type="text" className="form-control textbox userName" value={this.state.userName}
                                 placeholder="Please provide user name" maxLength={20} onChange={this.textBoxOnChange}></input>
                         </div>
                     </div>
                </div>
                <div className="form col-md-12">
                     <div className="form-control">
                         <div className="col-md-3">
                             <b>User Password</b>
                         </div>
                         <div className="col-md-7">
                             <input type="text" className="form-control textbox userPass" value={this.state.userPass}
                                 placeholder="Please provide userPass" maxLength={30} onChange={this.textBoxOnChange}></input>
                         </div>
                     </div>
                </div>
                <div className="form col-md-12">
                     <div className="form-control">
                         <div className="col-md-3">
                             <b>Mobile</b>
                         </div>
                         <div className="col-md-7">
                             <input type="text" className="form-control textbox mobile" value={this.state.mobile}
                                 placeholder="Please provide mobile" maxLength={30} onChange={this.textBoxOnChange}></input>
                         </div>
                     </div>
                </div>
                <div className="form col-md-12">
                     <div className="form-control">
                         <div className="col-md-3">
                             <label>{this.state.userName}</label>
                         </div>
                         <div className="col-md-3">
                             <label>{this.state.userPass}</label>
                         </div>
                         <div className="col-md-3">
                             <label>{this.state.mobile}</label>
                         </div>
                     </div>
                </div>
                <div className="form col-md-12">
                     <div className="form-control">
                         <div className="col-md-7">
                             <input type="submit" className="form-control button" onClick={this.saveUserClick} value={"Save User"}></input>
                         </div>
                     </div>
                </div>
            </>
        )
    }
}