import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "./CartContext";

export function Navbar() {
  const [categories, setCategories] = useState([]);
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((resp) => {
        setCategories(resp.data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); 
  };

 
  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <header>
      <div className="logo">TOP Shop</div>    

     
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
      </div>

      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <div className="categories-list">
          {categories.map((category) => (
            <Link key={category} to={`/category/${category}`} onClick={closeMenu}>
              {category}
            </Link>
          ))}
        </div>
      </nav>

      <div>
        <Link to="/cart" className="cart-link" onClick={closeMenu}>
          <img className="cart-logo" src="/public/cart.png" alt="cart" /> ({getItemCount()})
        </Link>
      </div>
    </header>
  );
}
