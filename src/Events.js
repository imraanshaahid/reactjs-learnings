import React from "react";

class Events extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        }
    }

    // this is old way to write methid. in this way you have to bind it explicitly

    // handleClick(){
    //     console.log("value of this = "+ this);
    //    this.setState({ isToggleOn: !this.state.isToggleOn
    //    }) 
    // }

//this is called as arrow function. it will automatically bind this keyword
    handleClick =()=> {
        console.log("value of this = "+ this);
       this.setState({ isToggleOn: !this.state.isToggleOn
       })
    }


    
    // handleClick(){
    //     console.log("value of this = "+ this);
    //     this.setState({ isToggleOn: !this.state.isToggleOn
    //     })
    // }


    
    render() {
        return (
            <>
             {/* if you create arrow function while calling the methiod then no need to create arrow function/method */}
            <button onClick={this.handleClick}>
               {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
            </>

        )
    }
}

export default Events;