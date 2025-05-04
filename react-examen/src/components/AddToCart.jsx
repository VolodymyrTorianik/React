import React, { useState } from "react";


export function AddToCart ({ product }) {

  const [cartCount, setCartCount] = useState(() => {
  const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart).length : 0;
  });

  const addToCart = (product) => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];


    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));


    setCartCount(cart.length);

    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <button onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  );
};

