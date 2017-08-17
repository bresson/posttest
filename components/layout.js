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
        <button onClick = {() => this.settingState()}  />
        { React.Children.map(this.children, child => React.cloneElement(child, {...this.state}))}
   
     
        </div>
      </div>
    )
  }

}