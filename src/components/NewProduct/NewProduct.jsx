import React from 'react'
import ProductForm from './ProductForm'

function NewProduct({newProductData, setNewProductData}) {
    console.log(newProductData,setNewProductData)
  return (
    <div className='new-product-wrapper'>
      <ProductForm newProductData = {newProductData} setNewProductData = {setNewProductData}/>
    </div>
  )
}

export default NewProduct
