// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component{
  state = {
    mood: 'happy'
  }

  handleClick = event =>{
    this.setState(this.state.mood !== 'happy' ? {mood: 'happy'}:{mood: 'sad'})
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}
