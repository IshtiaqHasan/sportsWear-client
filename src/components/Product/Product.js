import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const {
    _id,
    category,
    name,
    seller,
    price,
    stock,
    ratings,
    img,
    shipping,
    quantity,
  } = product;

  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card  each-product">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body product-info">
          <h5 className="card-title text-product-name fw-bold fs-5">{name}</h5>
          <h5 className="fw-bold">Price: ${price}</h5>
          <h6 className="card-text">Seller: {seller}</h6>
          <h6>Ratings: {ratings} stars</h6>
          <button
            onClick={() => handleAddToCart(product)}
            href="#"
            className="product-butn btn btn-lg btn-danger fw-bold"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
