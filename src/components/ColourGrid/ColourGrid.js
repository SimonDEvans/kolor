import React, { Component } from 'react'
import './ColourGrid.css'
import ColourItem from '../../components/ColourItem/ColourItem'
import Sidebar from '../../components/Sidebar/Sidebar'

class ColourGrid extends Component {

  clickHandler() {}

  render() {
    let colours = ['#fde0dc','#f9bdbb','#f69988','#f36c60','#e84e40','#e51c23','#dd191d','#d01716','#c41411','#b0120a','#ff7997','#ff5177','#ff2d6f','#e00032','#d81b60','#c2185b','#ad1457','#880e4f','#ff4081','#f50057','#c51162','#e1bee7','#ce93d8','#ba68c8','#ab47bc','#9c27b0','#8e24aa','#7b1fa2','#6a1b9a','#4a148c','#ea80fc','#e040fb','#d500f9','#aa00ff','#b39ddb','#9575cd','#7e57c2','#673ab7','#5e35b1','#512da8','#26c6da','#00bcd4','#00acc1','#0097a7','#00838f','#006064','#84ffff','#18ffff','#00e5ff','#00b8d4','#80cbc4','#4db6ac','#26a69a','#009688','#00897b','#00796b','#00695c','#004d40','#a7ffeb','#64ffda','#1de9b6','#00bfa5','#a3e9a4','#72d572','#42bd41','#2baf2b','#259b24','#0a8f08','#0a7e07','#056f00','#0d5302','#a2f78d','#5af158','#14e715','#12c700','#dcedc8','#c5e1a5','#aed581','#9ccc65','#8bc34a','#7cb342','#689f38','#558b2f','#33691e','#ccff90','#b2ff59','#76ff03','#64dd17','#f0f4c3','#e6ee9c','#dce775','#d4e157','#cddc39','#c0ca33','#afb42b','#9e9d24','#827717','#f4ff81','#eeff41','#c6ff00','#aeea00','#fff9c4','#fff59d','#fff176','#ffee58','#ffeb3b','#fdd835','#fbc02d','#f9a825','#f57f17','#ffff8d','#ffff00','#ffea00','#ffd600','#ffecb3','#ffe082','#ffd54f','#ffca28','#ffc107','#ffb300','#ffa000','#ff8f00','#ff6f00','#ffe57f','#ffd740','#ffc400','#ffab00','#ffe0b2','#ffcc80','#ffb74d','#ffa726','#ff9800','#fb8c00','#f57c00','#ef6c00','#e65100','#ffd180','#ffab40','#ff9100','#ff6d00','#ffccbc','#ffab91','#ff8a65','#ff7043','#ff5722','#f4511e','#e64a19','#d84315','#bf360c','#ff9e80','#ff6e40','#ff3d00','#dd2c00','#d7ccc8','#bcaaa4','#a1887f','#8d6e63','#795548','#6d4c41','#5d4037','#4e342e','#3e2723','#eeeeee','#e0e0e0','#bdbdbd','#9e9e9e','#757575','#616161','#424242','#212121','#000000','#eceff1','#cfd8dc','#b0bec5','#90a4ae','#78909c','#607d8b','#546e7a','#455a64', '#364850']
    
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