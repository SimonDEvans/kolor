import React, { Component } from 'react'
import './ColourGrid.css'
import ColourItem from '../../components/ColourItem/ColourItem'
import Sidebar from '../../components/Sidebar/Sidebar'

class ColourGrid extends Component {

  clickHandler(value) {
    document.querySelector('.sidebar').style.backgroundColor = this.colour
  }

  render() {
    let colours = ['#fde0dc', '#f9bdbb', '#f69988', '#f36c60', '#e84e40', '#e51c23', '#dd191d', '#d01716', '#c41411', '#b0120a', '#ff7997', '#ff5177', '#ff2d6f', '#e00032', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff4081', '#f50057', '#c51162']
    return (
      <div className="wrapper">
        <div className="wrapper__left">
          <ul className="colour-grid">
            {colours.map((itemColour, i) => {
              return <ColourItem click={this.clickHandler} colour={itemColour} key={i}/>
            })}
          </ul>
        </div>
        <div className="wrapper__right">
          <Sidebar />
        </div>
      </div>
      
    )
  }
}

export default ColourGrid

