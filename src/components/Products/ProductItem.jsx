import React, { useState } from 'react'
import "./ProductItem.css"
import ProductInfo from './ProductInfo';
import Counter from '../Counter';

function ProductItem({product}) {
    const {imageUrl, productTitle, productPrice} = product;
    const [title,setTitle] = useState(productTitle); 
    
    const güncelle = () => {
      setTitle("Güncellendi")
    }

  return (
    <div className='product-item'>
        <div className="product-image">
            <img src={imageUrl} alt="" />
        </div>
        <ProductInfo>
            <h4>{title}</h4>
            <span>{productPrice}₺</span>
        </ProductInfo>
        <Counter product = {product}/>
        <button onClick={güncelle}>Güncelle</button>
    </div>
  )
}

export default ProductItem
