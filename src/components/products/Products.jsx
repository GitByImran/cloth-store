import React, { useEffect, useState } from 'react'
import './Products.css'
import ProductCard from '../single-product/ProductCard'
import Added from '../added-product/Added'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [products])
  const handleAdded = (products) => {
    const prodtitle = products.title
    const addedBefore = JSON.parse(localStorage.getItem('shopping-cart'))
    if (products) {
      const addProduct = addedBefore + prodtitle
      localStorage.setItem('shopping-cart', JSON.stringify(addProduct))
      console.log(addedBefore)
    } else {
      localStorage.setItem('shopping-cart', JSON.stringify(prodtitle))
    }
  }
  return (
    <div className="shop-container">
      <div className="content-left">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAdded={handleAdded}
          />
        ))}
      </div>
      <div className="content-right">
        <Added />
      </div>
    </div>
  )
}

export default Products
