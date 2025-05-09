import React, {Component} from "react"

export default class UserSignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            userName : "defaultUsername",
            userPass : "defaultUserpass",
            mobile : "1234567890"
        }

        this.userNameRef = React.createRef()
        this.userPassRef = React.createRef()
        this.mobileRef = React.createRef()
    }

    submitForm = (evt)=>{
        let userName = this.userNameRef.current.value
        let userPass = this.userPassRef.current.value
        let mobile = this.mobileRef.current.value
        this.setState({
            userName,
            userPass,
            mobile
        })

        //alert(this.state.userAddress + this.state.userName +" Will be saved")

        evt.preventDefault();
    }

    saveUserClick = (evt) => {
        alert(this.state.userName +" " +this.state.userPass +" " +this.state.mobile +" will be saved")
        //a code to save data to the db using api and ajax will come here
        evt.preventDefault()
    }

    render(){
        return(
            <>
                <form className="form-control col-md-12" action={"/api/saveUser"} method="post" 
                    onSubmit={this.submitForm}>
                    <b>User Name</b>
                    <input type="text" className="form-control" placeholder={"Please type User Name"} 
                        ref={this.userNameRef} maxLength={20} required></input>

                    <b>User Pass</b>
                    <input type="text" className="form-control" placeholder={"Please type password"} 
                        ref={this.userPassRef} maxLength={20} required></input>

                    <b>Mobile</b>
                    <input type="text" className="form-control" placeholder={"Please type mobile"} 
                        ref={this.mobileRef} maxLength={20} required></input>

                    <button type="submit"> Save </button>
                </form>
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
            </>
        )
    }
}