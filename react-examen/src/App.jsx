import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar, Catalog, ProductPage, CategoryPage, Cart, CartProvider, ContactForm} from './components'
import './App.css'


function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<ContactForm />} />
      </Routes>
    </Router>
    </CartProvider>
  )
}

export default App
