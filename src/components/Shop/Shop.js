import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <div className="row">
            <h1 className="text-warning text-center mt-5 mb-5">Our Products</h1>
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
        <div className="col-2">
          <h2 className="text-warning text-center mt-5 mb-5">Order Summary</h2>
        </div>
      </div>
    </div>
  );
};

export default Shop;
