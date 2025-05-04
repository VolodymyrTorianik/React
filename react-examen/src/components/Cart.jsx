import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Subtotal: ${(product.price * (product.quantity || 1)).toFixed(2)}</p>

                <input
                  type="number"
                  value={product.quantity || 1}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    if (value >= 1) updateQuantity(product.id, value);
                  }}
                  min="1"
                />
                <div style={{marginTop: "10px"}}><button onClick={() => removeFromCart(product.id)}>Remove</button></div>
              </div>
            </div>
          ))}
          <div className="total-price">
            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
            <div style={{ marginTop: '1rem' }}>
            <Link to="/checkout">
              <button className="checkout-button">Go To Order</button>
            </Link>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
