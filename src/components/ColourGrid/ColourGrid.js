import React, { Component } from 'react'
import './ColourGrid.css'

class ColourGrid extends Component {
  componentDidMount() {
    let colours = ['#fde0dc', '#f9bdbb', '#f69988', '#f36c60', '#e84e40', '#e51c23', '#dd191d', '#d01716', '#c41411', '#b0120a', '#ff7997', '#ff5177', '#ff2d6f', '#e00032', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff4081', '#f50057', '#c51162'];

    colours.map(function(colour) {
      const trackHTML = document.querySelector('.colour-grid')
      return trackHTML.innerHTML += '<li style="background-color: ' + colour + '"><span>' + colour + '</span></li>'
    });
  }

  render() {
    return (
      <ul className="colour-grid"></ul>
    )
  }
}

export default ColourGrid