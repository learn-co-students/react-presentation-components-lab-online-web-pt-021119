import React, { Component } from 'react' 

class SimpleComponent extends Component {

    constructor(props) {
        super(props);
        console.log(props)
     
        // Initial state here...
        this.state = {
            mood: "happy"
        };
      }
     
      handleClick = () => {
          this.state.mood === "happy" ? this.setState({mood: "sad"}) : this.setState({mood: "happy"})
          }


     
      render() {
          return(
              <div onClick={this.handleClick}>
                  {this.state.mood}
              </div>

          )
        // Return JSX that renders into HTML
      }
}

export default SimpleComponent
