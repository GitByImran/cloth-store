import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {
  const handleAdded = props.handleAdded
  //   console.log(props.products)
  const { image, category, title } = props.product

  return (
    <div id="product">
      <div className="product-content">
        <div className="product-img">
          <img src={image} alt="" />
        </div>
        <h4>{title}</h4>
        <p>{category}</p>
      </div>
      <button onClick={() => handleAdded(props.product)}>
        add to favourite
      </button>
    </div>
  )
}

export default ProductCard
