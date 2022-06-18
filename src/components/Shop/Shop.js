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
    <div className="shop-container">
      <div className="row">
        <div className="col-10">
          <div className="row">
            <h1 className="text-products text-center mt-5 mb-5">
              Our Products
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
        <div className="col-2 order-summary-container">
          <h4 className="text-order-summary text-center mt-1 mb-5">
            Order Summary
          </h4>
          <p className="ms-5">Selected Items: {cart.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
