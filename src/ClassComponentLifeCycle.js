import React from "react";

class ClassComponentLifeCycle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
    }

    componentDidMount(){
        this.setState({name: "testing"});
    }

    render(){
        return (
            <h1>my name is {this.state.name}</h1>
        )
    }

}

export default ClassComponentLifeCycle;