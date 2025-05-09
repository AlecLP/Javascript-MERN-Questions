import React, { Component, PureComponent } from "react"
import PropTypes from "prop-types"


//export default class Home extends Component{
//PureComponent has build in shouldComponentUpdate to compare and check for changes before re-rendering
export default class Home extends PureComponent{

    //creation life cycle starts
    constructor(props){
        super()
        //initializing the state/fields etc
        this.state = {
            userName : props.user.userName,
            userAge : props.user.userAge,
            userAddress : props.user.userAddress
        }
        this.counter = 100
        this.intervalObject = null
        //this.incrementCounter()

        this.userNameRef = React.createRef() //creates a reference pointer so that html can be accessed with this
    }

    //this creation life cycle method ensures html is rendered on browser we can make call to fetch data and bind it to html element
    componentDidMount(){
        console.log("componentDidMount")
        this.userNameRef.current.value = "Value has been updated"
    }

    //destruction life cycle method
    //it must be used to clear on the API calls, references, that are used in current component
    componentWillUnmount(){
        console.log("componentWillUnmount")
        //clearInterval(this.intervalObject)
    }

    incrementCounter = () => {
        this.intervalObject = setInterval(() => {
            this.setState({
                userAge : this.counter
            })
            this.counter++
            console.log(this.counter)
        },2000)
    }

    //Update life cycle methods
    //this life cycle method is directly depends on state changes - setState or forceUpdate within component or by props update by parent
    // shouldComponentUpdate(nextProps, nextState){ //it contains props and state which are going to be updated in new virtual DOM
    //     console.log("shouldComponentUpdate is called after every state update and recieves updated state and props")
    //     console.log("nextProps: ", nextProps)
    //     console.log("nextState: ", nextState)
    //     if (nextState.userAddress == this.state.userAddress) {
    //         return false
    //     } else {
    //         return true
    //     }
    // }

    //update life cycle methods called after render
    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        // console.log("prevState", prevState);
        // console.log("prevProps", prevProps);

        // this.prevUser = prevState.user;
        // this.setState({
        //     user : this.prevUser
        // })

        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        // console.log("prevState",prevState);
        // console.log("prevProps", prevProps);

        // this.setState({
        //     uState : prevState.uState
        // })
    }

    //destruction life cycle method
    //it must be used to clear all the api calls, reference that are used in current component
    componentWillUnmount(){
        
        console.log("componentWillUnmount is called")
        //clearInterval(this.intervalObject);
    }

    changeUserAddressEvent = (evt) => {
        this.setState({
            userAddress : "Somewhere on Earth"
        })
        evt.preventDefault()
    }

    //render  life cycle method must be implemented to return the view/virtual DOM/JSX
    render(){
        console.log("Home render() called")
        return(
            <>
                <h1>Home Component</h1>
                <input type="text" value={this.state.userName} ref={this.userNameRef} />
                <label>{this.state.userAge}</label>
                <br></br>
                <label>{this.state.userAddress}</label>
                {/* Binding event to a button */}
                <button onClick={this.changeUserAddressEvent}>Change User Address</button>
            </>
        )
    }
}

//we should use default props to assign default values to the properties that we use in out component
Home.defaultProps = {
    user : {
        userName : "Default user name",
        userAddress : "Default user address",
        userAge : 25
    }
}

Home.propTypes = {
    user : PropTypes.string.isRequired
}