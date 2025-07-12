import { useEffect, useState, useRef } from 'react'
import './App.css'
import { livePrices } from "./data/prices.jsx"

function App() {
  //states
  const [price, setPrice] = useState("")
  const [orders, setOrders] = useState([])
  const [currentPrice, setCurrentPrice] = useState("2116.45")
  const [myOrders, setMyOrders] = useState(false)
  const [available, setAvailable] = useState(false)
  

  //Direct state changes
  useEffect( () => {
      const interval = setInterval(() =>{
        const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const index = randInt(0, 19)
        setCurrentPrice(() =>{
          return livePrices[index]
        })
      }, 3000)

      return () => clearInterval(interval)
  })

  //refs
  const orderCache = useRef([])


  //functions

  function storeOrders(){
     orderCache.current.push([`${new Date().toISOString()}  amountPaid-${price}  pricePerOz:${currentPrice}, goldSold:${price / Number(currentPrice)} `])
     setPrice(() => "")
  }

  function* displayOrders(){
    for(const order of orderCache.current){
      yield(
        <div class="info-container">
          <p class="order-info">{order}</p>
        </div>
      )
    }
  }

  const orderElements = [...displayOrders()]

  // console.log("The order Elements", orderElements)



  // useEffect(()=>{
  //   console.log("Here are the orders", orders)
  // }, [orders])


  return (
    <>
      {!myOrders && 
        <>
          <nav id="nav-bar">
            <a onClick={() => setMyOrders(true)}>Orders</a>
          </nav>
          <div id="title-div">
            <h1 id="title">GoldDigger</h1>
            <img src="/gold-bar.png"/>
          </div>
          <div id="information">
            <fieldset class="price-box" id="price-box1">
              { available &&
                <>
                  <legend id="legend">Live prices 🟢</legend>
                  <div class="current-price-div">£{currentPrice} / Oz*</div>
                </>
              }
              { !available &&
                <>
                  <legend id="legend">Disconnected 🔴</legend>
                  <div class="current-price-div">£----.-- / Oz*</div>
                </>
              }
            </fieldset>
            <fieldset class="price-box" id="price-box2">
              <legend id="legend">Amount to Invest</legend>
              <div id="price-row">
                <div id="pound-unit">
                  <img id="pound-img" src="/pound.png"/>
                </div>
                <div id="price">
                  <input onClick={()=> setAvailable(() => true) }onChange={(e) => setPrice(e.target.value)} type="text" id="quantity" placeholder='100.00' value={price}/>
                </div>
              </div>
            </fieldset>
            <button id="button" onClick={storeOrders}>Invest Now!</button>
            <div id="measurement">
              <p>* 1oz = 1 troy ounce of 24 Carat Gold</p>
            </div>
          </div>
        </>
      }
      {myOrders && (
        <>

          <nav id="order-navBar">
            <a id="nav-button" onClick={() => setMyOrders(false)}>Invest</a>
          </nav>

          <h1 id="order-title">Your Orders</h1>

          <div id="information-page-container">
            {orderElements}
          </div>

        </>
      )}
    </>
  )
}

export default App
