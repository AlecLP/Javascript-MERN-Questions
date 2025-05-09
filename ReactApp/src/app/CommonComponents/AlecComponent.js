import React, {Component} from "react";

export default class AlecComponent extends Component {

    constructor(props){
        super()
        this.state = {
            header : props.header
        }
    }

    changeAlecComponentEvent = (evt) => {
        this.setState({
            header : "Updated Header"
        })
        // this.state.header = "Force Updated Header"
        // this.forceUpdate()
        evt.preventDefault()
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.header == nextState.header){
            return false
        }
        else{
            return true
        }
    }

    render() {
        console.log("Alec Component Render is called")
        return(
            <div>
                <h1>{this.state.header}</h1>
                <button onClick={this.changeAlecComponentEvent}>Change Alec Header</button>

            </div>
        )
    }

}
