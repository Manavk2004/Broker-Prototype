import { useState } from 'react'
import goldBar from "../public/gold-bar.png"
import pound from "../public/pound.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="title-div">
        <h1 id="title">GoldDigger</h1>
        <img src={goldBar}/>
      </div>
      <div id="information">
          <fieldset class="price-box" id="price-box1">
            <legend id="legend">Live prices 🟢</legend>
            <div>£2116.45 / Oz*</div>
          </fieldset>
          <fieldset class="price-box" id="price-box2">
            <legend id="legend">Amount to Invest</legend>
            <div id="price-row">
              <div id="pound-unit">
                <img id="pound-img" src={pound}/>
              </div>
              <div id="price">
                <p id="quantity">100.00</p>
              </div>
            </div>
          </fieldset>
          <button>Invest Now!</button>
          <div id="measurement">
            <p>* 1oz = 1 troy ounce of 24 Carat Gold</p>
          </div>
      </div>
      
    </>
  )
}

export default App
