import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
const clearCart = () => setCart([]);
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(p => p.id === product.id);
      if (existing) {
        return prevCart.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(p => p.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(prevCart =>
      prevCart.map(p =>
        p.id === id ? { ...p, quantity } : p
      )
    );
  };

  const getItemCount = () =>
    cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemCount,
        getTotalPrice,
        clearCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
