import React, { useState } from 'react'

function Counter({product}) {
    const {imageUrl,productTitle,productPrice} = product 
    const [count,setCount] = useState(productPrice);

    const azalt = () => {
        if(count > 0){
            setCount(count -1)
        }
    }

    const arttir = () => {
        setCount(count + 1)
    }

  return (
    <div style={{textAlign:"center"}}>
      <button onClick={azalt}>-</button>
      <span>{count}</span>
      <button onClick={arttir}>+</button>
    </div>
  )
}

export default Counter
