import React, { Component } from 'react'
import './ColourItem.css'

class ColourItem extends Component {
  
  clickHandler() {
    this.props.click();
  }

  render() {
    let style = {
      backgroundColor: this.props.colour
    }

    return (
      <li className="colour-item" style={style} onClick={this.clickHandler.bind(this)}>
        <span>{this.props.colour}</span>
      </li>
    )
  }
}

export default ColourItem