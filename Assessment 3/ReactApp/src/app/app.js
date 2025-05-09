import React, {Component} from "react";
import Success from "./CommonComponents/SuccessComponent.js"
import "./app.css";

export default class ApplicationComponent extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <Success />
            </>
        )
    }
}