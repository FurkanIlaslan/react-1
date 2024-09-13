import React, { useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import {productData} from "../../productData.js" 
import NewProduct from "../NewProduct/NewProduct";


function Products() {
  const [newProductData, setNewProductData] = useState(productData)

  return (
    <div className="product-wrapper">
      <NewProduct newProductData = {newProductData} setNewProductData = {setNewProductData}/>
      <h1>Products</h1>
      <div className="products">
        {newProductData.map((product,index)=>{
            return (
            <div key={index}>
                <ProductItem product = {product} />
            </div>
            )
        })}

      </div>
    </div>
  );
}

export default Products;
