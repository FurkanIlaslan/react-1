import React from 'react'

function ProductInfo(props) {

  return (
    <div className='product-info'>
        <span className='ad'>www.kodkoloni.com</span>
        {props.children}
    </div>
  )
}

export default ProductInfo
