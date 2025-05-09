import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./CommonComponents/FooterComponent"
import Header from "./CommonComponents/HeaderComponent"
import Home from "./CommonComponents/HomeComponent"
import NotFound from "./CommonComponents/NotFoundComponent"
import About from "./CommonComponents/AboutComponent"
import AlecFuncComponent from "./CommonComponents/AlecFuncComponent"
import Types from "./CommonComponents/ComponentTypes"
import UserSignIn from "./CommonComponents/UserSignInComponent";
import StudentSignIn from "./CommonComponents/StudentSignInComponent";
import Student from "./CommonComponents/StudentComponent";
import Lifecycle from "./CommonComponents/LifecycleComponent";
import Login from "./CommonComponents/LoginComponent";

export default class ApplicationComponent extends Component {

    /**
     * 
     */
    
    constructor(props) {
        super()
        this.state = {
            user : {
                userName : "SomeUser",
                userAddres : "SomeAddress",
                userAge : 25
            }
            //alecHeader : "Test Header",
        }
        this.sessionName = "MERNStack - React Props"
    }
      
    changeUserNameEvent = (evt) => {
        //this.state.userName = "Eric" //with this way render method will not be called, so change will not appear on page

        //we have registered API (callback) from React to make state changes and call render method
        //so that new virtual DOM gets created
        this.setState({
            userName : "Eric",
            //userAddres : "Somewhere on Earth"
        })
        //this.sessionName = "This session is on React state and DOM coupling"

        //Updates the state using force update - not recommended but can be used if needed
        // this.state.userName = "Eric"
        // this.forceUpdate() //will directly call the render method and will skip life cycle methods such as shouldComponentUpdate

        console.log(this.state.userName) //not updated immediately as - the change is done via callback and as soon as callback returns value
        //the log line is passed already executed

        //alert("User Name is changed")
        evt.preventDefault()
    }
    

    render(){
        console.log("Render method is called")
        return( //virtual dom or jsx code (javascript like xml)
            <Router>
                <div className="topdiv">
                    <Header/>
                        <Routes>
                            <Route path="/" element={<Home user={this.state.user}/>}/>
                            <Route path="home" element={<Home user={this.state.user}/>}/>
                            <Route path="about" element={<About />}/>
                            <Route path="comp" element={<Types />}/>
                            <Route path="userSignIn" element={<UserSignIn />}/>
                            <Route path="studentSignIn" element={<StudentSignIn />}/>
                            <Route path="alec/:emailid/:sessiondetails" element={<AlecFuncComponent />}/>
                            <Route path="lifecycle" element={<Lifecycle/>}/>
                            <Route path="student" element={<Student />}/>
                            <Route path="login" element={<Login />}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    <Footer sessionName={this.sessionName}/>
                </div>
            </Router>
        )
    }
}

//Create a route for your component with your name
//navigate with route param with your emailid
//use another route param to send your next session details, this should be passed by clikcing on button with nav-link
//use - useNavigate and useParams hooks do demonstrate the features

// //update life cycle method
// shouldComponentUpdate(nextProps, nextState){
//     console.log(nextState) //the updated state version
//     //console.log(nextProps)
//     if (this.state.userName == nextState.userName) {
//         return false //if we need not call render next
//     }
//     else{
//         return true //if we need to call render next
//     }    
// }

//let name = "Alec", x = 5, y = 9

{/* <hr />
<Home/>
<hr />
<b>{this.state.userName}</b>
<br />
<button onClick={this.changeUserNameEvent}>Change User Name</button>
<hr />
<NotFound/> */}

// {/*<AlecComponent header="Initial Header"/>*/}