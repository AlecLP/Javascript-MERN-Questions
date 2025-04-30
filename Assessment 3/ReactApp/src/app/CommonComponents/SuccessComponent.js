import React, {Component} from "react"
import SuccessChild from "./SuccessChildComponent"
import SuccessStory from "./SuccessStoryComponent"

export default class Success extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <h1>Success Component</h1>
                <h2>Knowledge is power.</h2>
                <h3>This too shall pass.</h3>
                <h4>If you are going through hell, keep going.</h4>
                <SuccessChild name="Alec" address="123 Main Street" story={<SuccessStory/>}/>
            </>
        )
    }
}