import { useState } from 'react'
import goldBar from "../public/gold-bar.png"
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
        <fieldset id="price-box">
          <legend id="legend">Live prices 🟢</legend>
          <div>£2116.45 / Oz*</div>
        </fieldset>
        <fieldset id="price-box">
          <legend id="legend">Amount to Invest</legend>
          <div>£2116.45 / Oz*</div>
        </fieldset>
      </div>
      
    </>
  )
}

export default App
