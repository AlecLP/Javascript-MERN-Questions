import React, {useState} from "react"

let Login = (props) => {

    let [userName, updateUserName] = useState("Default User")
    let [userAddress, updateUserAddress] = useState("Default Address")
    let [userEmail, updateUserEmail] = useState("Default Email")
    let [userDepartment, updateuserDepartment] = useState("Default Department")

    let textBoxOnChange = (evt) => {
        console.log("textBoxOnChange called...")
        updateUserName(evt.target.value)
    }

    return(
        <>
            <h1>Login Component</h1>
            <div className="form col-md-12">
                <div className="form-control">
                    <div className="col-md-3">
                        <b>User Name</b>
                    </div>
                    <div className="col-md-7">
                        <input type="text" className="form-control textbox userName" value={userName}
                            placeholder="Please provide user name" maxLength={20} onChange={textBoxOnChange}></input>
                    </div>
                </div>
            </div>
            <div className="form col-md-12">
                <div className="form-control">
                    <div className="col-md-3">
                        <b>User Address</b>
                    </div>
                    <div className="col-md-7">
                        <input type="text" className="form-control textbox userAddress" value={userAddress}
                            placeholder="Please provide user address" maxLength={20} onChange={(evt) => updateUserAddress(evt.target.value)}></input>
                    </div>
                </div>
            </div>
            <div className="form col-md-12">
                <div className="form-control">
                    <div className="col-md-3">
                        <b>User Email</b>
                    </div>
                    <div className="col-md-7">
                        <input type="text" className="form-control textbox userEmail" value={userEmail}
                            placeholder="Please provide user email" maxLength={20} onChange={(evt) => updateUserEmail(evt.target.value)}></input>
                    </div>
                </div>
            </div>
            <div className="form col-md-12">
                <div className="form-control">
                    <div className="col-md-3">
                        <b>User Department</b>
                    </div>
                    <div className="col-md-7">
                        <input type="text" className="form-control textbox userDepartment" value={userDepartment}
                            placeholder="Please provide user address" maxLength={20} onChange={(evt) => updateuserDepartment(evt.target.value)}></input>
                    </div>
                </div>
            </div>
            <div className="form col-md-12">
                <div className="form-control">
                    <div className="col-md-3">
                        <label>{userName}</label>
                    </div>
                    <div className="col-md-3">
                        <label>{userAddress}</label>
                    </div>
                    <div className="col-md-3">
                        <label>{userEmail}</label>
                    </div>
                    <div className="col-md-3">
                        <label>{userDepartment}</label>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login