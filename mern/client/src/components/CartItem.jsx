// src/components/CartItem.jsx
import React from "react";

const CartItem = ({ item, onDelete }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>Qty: {item.quantity}</p>
      <button onClick={() => onDelete(item._id)}>Remove</button>
    </div>
  );
};

export default CartItem;
