import React from "react";
import Child from "./Child";

class Parent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "khan",
            age: 30
        }

    }

    render() {

        return (
            <>
             <Child myName = {this.state.name}/>
            </>
        )
    }
}

export default Parent;