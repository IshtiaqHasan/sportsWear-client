import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="sticky-top w-100">
      <h4 className="text-order-summary text-center mt-1 mb-3">
        Order Summary
      </h4>
      <div className="ms-2 mt-5 cart-info">
        <p className="fs-5">Selected Items: {quantity}</p>
        <p className="fs-5"> Total Price: ${total}</p>
        <p className="fs-5">Total Shipping: ${shipping}</p>
        <p className="fs-5">Tax: ${tax}</p>
        <h5>Grand Total: ${grandTotal}</h5>
      </div>
    </div>
  );
};

export default Cart;
