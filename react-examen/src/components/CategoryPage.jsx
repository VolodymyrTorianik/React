import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export function CategoryPage() {

    const {name} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState (true);
    const { addToCart } = useCart();

    useEffect (()=> {

        axios
        .get(`https://fakestoreapi.com/products/category/${name}`)
        .then((resp)=> {
            setProducts(resp.data);
            setLoading(false);
        })
        .catch((err)=> {
            console.log(err, 'Error loading product catalog');
            setLoading(false);
        })
    }, [name]);

    if (loading) {
        return <div>Loading category products...</div>;
      }

    return (
        <div className="category-page">
         <h2>{name}</h2>
            <div className="product-list">
                 {products.map((product) => (
                     <div key={product.id} className="product-card">
             <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </Link>
            <button  onClick={() => addToCart(product)}>
          Add to Cart
        </button>
          </div>
        ))}
      </div>

        </div>
    )
}