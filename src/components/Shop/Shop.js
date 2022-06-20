import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-md-6 col-sm-12 mb-5">
          <div className="row">
            <h1 className="text-products mt-5 ms-2 mb-1">
              Featured Products
            </h1>
            {products.map((product) => (
              <Product
                key={product._id}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-0  order-summary-container">
          <h4 className="text-order-summary text-center mt-1 mb-3">
            Order Summary
          </h4>
          <p className="ms-3">Selected Items: {cart.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
