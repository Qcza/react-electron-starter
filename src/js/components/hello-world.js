import React, { Component } from 'react'

class HelloWorld extends Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (<h1 onClick={e=>this.props.changeText(this.props.text)}>{this.props.text || 'Hello World!'}</h1>)
  }
}

export default HelloWorld;