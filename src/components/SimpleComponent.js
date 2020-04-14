import React, {Component} from 'react'

// Code SimpleComponent Here
export default class SimpleComponent extends Component{
	constructor(props){
		super(props)
		this.state = {mood: 'happy'}
	}
	render(){
		return (
			<div onClick={this.handleClick}>{this.state.mood}</div>
		)
	}
	handleClick = () => {
		this.setState({mood: (this.state.mood === 'happy' ? 'sad' : 'happy')})
	}
}