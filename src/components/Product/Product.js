import { faCartShopping, faCoffee, faStar, faStarHalf, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const {
    _id, category, name, seller, price, stock, ratings, img, shipping, quantity,

  } = product;

  return (
    <div className="g-5 col-sm-12 col-md-12 col-lg-4">
      <div className="card  each-product">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body product-info">
          <h5 className="card-title text-product-name fw-bold fs-5">{name}</h5>
          <h5 className="fw-bold">Price: ${price}</h5>
          <h6 className="card-text">Seller: {seller}</h6>
          <div className="d-flex">
            <h6>Ratings:  <FontAwesomeIcon className="fa-xs" icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className="fa-xs" icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className="fa-xs" icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className="fa-xs" icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className="fa-xs" icon={faStarHalfAlt}></FontAwesomeIcon></h6>

          </div>

          <button
            onClick={() => handleAddToCart(product)}
            href="#"
            className="product-butn btn btn-lg  btn-danger d-flex justify-content-center align-items-center "
          >
            <p className="fw-bold p-0 m-0">Add To Cart</p>
            <FontAwesomeIcon className="ps-2" icon={faCartShopping}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
