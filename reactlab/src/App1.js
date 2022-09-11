import React, { Component } from  "react";
import "./App1.css";
class App1 extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            color:"red"
        }
    }
    handleColor=()=>{
        this.setState({color:"green"})
    }

    handleColor1=()=>{
        this.setState({color:"coral"})
    }
    render(){
        return (
            <div>
                <p className="center" style={this.state} onMouseOver={this.handleColor} onMouseOut={this.handleColor1}>Manoj</p>
            </div>
        )
    }

}

export default App1;