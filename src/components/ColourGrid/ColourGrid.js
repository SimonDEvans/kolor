import React, { Component } from 'react'
import './ColourGrid.css'
import ColourItem from '../../components/ColourItem/ColourItem'

class ColourGrid extends Component {
  render() {
    let colours = ['#fde0dc', '#f9bdbb', '#f69988', '#f36c60', '#e84e40', '#e51c23', '#dd191d', '#d01716', '#c41411', '#b0120a', '#ff7997', '#ff5177', '#ff2d6f', '#e00032', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff4081', '#f50057', '#c51162']
    
    return (
      <ul className="colour-grid">
        {colours.map(function(itemColour, i) {
          return <ColourItem colour={itemColour} key={i}/>
        })}
      </ul>
    )
  }
}

export default ColourGrid