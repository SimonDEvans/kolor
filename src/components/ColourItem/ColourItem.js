import React, { Component } from 'react'
import './ColourItem.css'

class ColourItem extends Component {
  clickHandler() {
    this.props.click()

    // Set vars
    let chosenColour = this.props.colour
    const sidebarNode = document.querySelector('.sidebar__inner')
    const sidebarItemNode = document.createElement('div')
    const sidebarItemHexNode = document.createElement('span')
    const sidebarItemCheck = sidebarNode.children.length

    // Set sidebar item props
    sidebarItemNode.setAttribute('class', 'sidebar__item')
    sidebarItemNode.style.backgroundColor = chosenColour
    sidebarItemHexNode.innerHTML = chosenColour

    // Add label
    sidebarItemNode.appendChild(sidebarItemHexNode)

    // Add new item
    if (sidebarItemCheck < 7) {
        sidebarNode.appendChild(sidebarItemNode)
    }

    // Remove item
    sidebarItemNode.onclick = function() {
      this.remove()
    }
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