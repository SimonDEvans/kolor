import React, { Component } from 'react'
import './ColourItem.css'

class ColourItem extends Component {
  
  clickHandler() {
    this.props.click();

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
      // sidebarNode.className = 'sidebar__inner fade-out'
        sidebarNode.appendChild(sidebarItemNode)

      setTimeout(function () {
      }, 200)
      
      setTimeout(function () {
        // sidebarNode.className = 'sidebar__inner fade-in'
      }, 400)
    }

    // Remove item
    sidebarItemNode.onclick = function() {
      let item = this
      // sidebarNode.className = 'sidebar__inner fade-out'
        item.remove()

      setTimeout(function () {
      }, 200)
      
      setTimeout(function () {
        // sidebarNode.className = 'sidebar__inner fade-in'
      }, 400)
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