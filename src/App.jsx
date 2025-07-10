import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState(0)

  useEffect(()=>{
    console.log(price)
  }, [price])

  return (
    <>
      <div id="title-div">
        <h1 id="title">GoldDigger</h1>
        <img src="/gold-bar.png"/>
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
                <img id="pound-img" src="/pound.png"/>
              </div>
              <div id="price">
                <input onChange={(e) => setPrice(e.target.value)} type="text" id="quantity" placeholder='100.00'/>
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
