import React, {Component} from "react"

export default class Lifecycle extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : 10,
            hasReverted : false
        }
        console.log("contructor is called...", this.someRef)
    }

    updateData= (data) => {
        this.setState({
            data,
            hasReverted : false
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate called...")
        if(nextState.data == this.state.data){
            console.log("Same data")
            return false;
        }
        else{
            console.log("New data")
            return true;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate called...", prevProps, prevState)
        return {prevProps, prevState}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate called...", snapshot)
        if (
            snapshot &&
            snapshot.prevState &&
            this.state.data !== snapshot.prevState.data &&
            !this.state.hasReverted
        ) {
            console.log("Reverting to previous state...");
            this.setState({
                data: snapshot.prevState.data,
                hasReverted: true
            });
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called...", this.someRef)
    }

    render(){
        return(
            <>
                <label>Data: {this.state.data}</label>
                <button onClick={() => this.updateData("100")}>Update Data</button>
                <label ref={(ref) => this.someRef = ref} />
            </>
        )
    }
}