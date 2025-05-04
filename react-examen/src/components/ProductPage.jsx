import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "./CartContext";
import "../index.css";

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => setProduct(resp.data))
      .catch((err) => console.error("Error", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-page">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button  onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
