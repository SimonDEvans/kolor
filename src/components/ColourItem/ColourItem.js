import React, { Component } from 'react'
import './ColourItem.css'

class ColourItem extends Component {
  render() {

    let style = {
      backgroundColor: this.props.colour
    }

    return (
      <li className="colour-item" style={style}>
        <span>{this.props.colour}</span>
      </li>
    )
  }
}

export default ColourItem