import React, { Component } from 'react'
import './Home.css'
import ColourGrid from '../../components/ColourGrid/ColourGrid'
import Sidebar from '../../components/Sidebar/Sidebar'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__left">
          <ColourGrid />
        </div>
        <div className="home__right">
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default Home