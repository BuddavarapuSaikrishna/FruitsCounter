// Write your code here

import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  EatMango = () => {
    this.setState(prev => ({mango: prev.mango + 1}))
  }

  EatBanana = () => {
    this.setState(prev => ({banana: prev.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="Main-Container">
        <div className="Fruits-Container">
          <h1>
            Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="Fruits-Img-Container">
            <img
              className="MangoImg"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />

            <img
              className="BananaImg"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div>
            <button className="Mango-btn" type="button" onClick={this.EatMango}>
              Eat Mango
            </button>
            <button
              className="Banana-btn"
              type="button"
              onClick={this.EatBanana}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
