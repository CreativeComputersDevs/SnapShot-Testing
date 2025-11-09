// src/components/Cart.jsx
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import AddItemForm from "./AddItemform";

const Cart = () => {
  const [items, setItems] = useState([]);

  // Fetch all cart items
  const fetchCart = async () => {
    const res = await fetch("http://localhost:5050/api/cart");
    const data = await res.json();
    setItems(data);
  };

  // Delete a cart item
  const deleteItem = async (id) => {
    await fetch(`http://localhost:5050/api/cart/${id}`, { method: "DELETE" });
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="cart-container">
      <h1>🛒 My Cart</h1>
      <AddItemForm onAdd={fetchCart} />
      <div className="cart-list">
        {items.length === 0 ? (
          <p>No items yet!</p>
        ) : (
          items.map((item) => (
            <CartItem key={item._id} item={item} onDelete={deleteItem} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
