import React from "react";
import Child2 from "./Child2";

class Child extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <Child2 myName = {this.props.myName}/>
        )
    }
}

export default Child;