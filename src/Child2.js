import React from "react";

class Child2 extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div>my name is {this.props.myName}</div>
        )
    }
}

export default Child2;