import React, { useState } from 'react'
import "./ProductForm.css"

function ProductForm({newProductData, setNewProductData}) {
    console.log(newProductData, setNewProductData)

    const [productTitle, setProductTitle] = useState("");
    const [productPrice, setProductPrice] = useState();
    const [imageUrl, setImageUrl] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        const newProduct = {
            productTitle : productTitle,
            productPrice : productPrice,
            imageUrl : imageUrl,
        }

        const newProducts = [...newProductData, newProduct]
        setNewProductData(newProducts)
        setProductTitle("")
        setProductPrice("")
        setImageUrl("")
    }

  return (
    <form onSubmit={submitHandler} className='product-form'>
        <div className='product-form-input'>
            <label>Ürün Adı</label>
            <input onChange={(e)=> setProductTitle(e.target.value)} type="text" placeholder='Ürün adı giriniz..' value={productTitle}/>
        </div>
        <div className='product-form-input'>
            <label>Ürün Fiyatı</label>
            <input onChange={(e)=> setProductPrice(Number(e.target.value))} type="number" placeholder='Ürün fiyatı giriniz..' value={productPrice}/>
        </div>
        <div className='product-form-input'>
            <label>Ürün Görseli</label>
            <input onChange={(e)=> setImageUrl(e.target.value)} type="text" placeholder='Ürün görseli giriniz..' value={imageUrl}/>
        </div>
        <button className='product-form-button'>Ürün Ekle</button>
    </form>
  )
}

export default ProductForm
