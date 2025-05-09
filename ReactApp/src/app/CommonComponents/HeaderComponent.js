import React from "react"
import { NavLink, useNavigate } from "react-router-dom"

let Header = (props) => {
    let user = props.user
    console.log(user)
    const usrName = user && user.userName ? user.userName : "";

    const navigateHook = useNavigate()
    const navWithEmailAndSessionDetails = () => {
        navigateHook("/alec/alecsession44@gmail.com/Spring Boot")
    }


    return(
        <>
            <h1>This is a solid header to contain navigations</h1>
            
            <div>
                <NavLink to="/home" className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/about" className="button" activeclassname="true"> About </NavLink>
                <NavLink to="/comp" className="button" activeclassname="true"> Controlled/UnControlled </NavLink>
                <button onClick={navWithEmailAndSessionDetails} >Alec With Info</button>
            </div>
        </>
    )
}

export default Header