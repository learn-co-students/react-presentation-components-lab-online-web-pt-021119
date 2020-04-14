import React, { Component } from 'react'

class SimpleComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = (e) => {
        let newMood
        switch(this.state.mood){
            case 'happy':
                newMood = 'sad'
                break
            case 'sad':
                newMood = 'happy'
                break
            default:
                alert("ERROR IN STATE")
        }
        this.setState({
            mood: newMood
        })
    }

    render(){

        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }

}

export default SimpleComponent
