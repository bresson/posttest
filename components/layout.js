import React from 'react'
import Header from './header'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'green', 
            people : 5
        };
    }

    settingState() {
        this.setState({
            color: "purple",
            people: 4
        })
    }

  render() {
    console.log('layout props', this.props, this.state)

    return (
        
      <div>
        <Header />
        <div className="container">
        <button style={{backgroundColor: 'black', color: 'white', fontSize: '1.5rem', lineHeight: '1.5', width: '10em'}} onClick = {() => this.settingState()} > Set New State </button>
        { React.Children.map(this.children, child => React.cloneElement(child, {...this.state}))}
   
     
        </div>
      </div>
    )
  }

}