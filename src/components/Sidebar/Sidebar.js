import React, { Component } from 'react'
import './Sidebar.css'

class Sidebar extends Component {
  render() {
    let style = {
      backgroundColor: this.props.sC
    }

    return (
      <div className="sidebar" style={style}></div>
    )
  }
}

export default Sidebar