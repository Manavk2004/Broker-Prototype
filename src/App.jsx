import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  //states
  const [price, setPrice] = useState(0)
  const [orders, setOrders] = useState([])
  const [currentPrice, setCurrentPrice] = useState("2116.45")
  const [myOrders, setMyOrders] = useState(false)
  

  //refs
  const orderCache = useRef([])


  //functions

  function storeOrders(){
     orderCache.current.push([`${new Date().toISOString()}  amountPaid-${price}  pricePerOz:${currentPrice}, goldSold:${price / Number(currentPrice)} `])
  }

  function* displayOrders(){
    for(const order of orderCache.current){
      yield(
        <p class="order-info">{order}</p>
      )
    }
  }

  const orderElements = [...displayOrders()]

  console.log("The order Elements", orderElements)



  // function formatOrders(orders){ 
  //   const index = number
  //   console.log("This is index", index)
  //   const workableOrders = JSON.stringify(orders[index])
  //   console.log('Workable Orders', workableOrders)
  //   const parsed = JSON.parse(workableOrders)
  //   console.log("Here is the parsed", parsed)
  //   const keyValue = Object.entries(parsed)
  //   // console.log("Here are the key values", keyValue)
  //   return keyValue.map(([key, value]) => {
  //     // console.log("Values", value)
  //     // console.log("Key" , key)
  //     if(key === "time"){
  //       return(
  //         <div class="information-container">
  //           <p><strong>{key}:    </strong>{value}</p>
  //         </div>
  //       )
  //     }else if(key === "amountPaid"){
  //       return(
  //         <div class="information-container">
  //           <p><strong>{key}:    </strong>£{value}</p>
  //         </div>
  //       )
  //     }else if(key === "pricePerOz"){
  //       return(
  //         <div class="information-container">
  //           <p><strong>{key}:    </strong>£{value}</p>
  //         </div>
  //       )
  //     }else{
  //       return(
  //         <div class="information-container">
  //           <p><strong>{key}:    </strong>{value} Oz</p>
  //         </div>
  //       )
  //     }
  //   })

  // }






  //useEffect tests
  // useEffect(()=>{
  //   console.log(price)
  // }, [price])

  //  useEffect(() =>{
  //   console.log(orders)
  // })

  useEffect(()=>{
    console.log("Here are the orders", orders)
  }, [orders])


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
              <legend id="legend">Live prices 🟢</legend>
              <div>£{currentPrice} / Oz*</div>
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
            <button onClick={storeOrders}>Invest Now!</button>
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
