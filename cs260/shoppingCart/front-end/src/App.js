import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Product from './components/product.js';
import Cart from './components/cart.js';

function App() {
  
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [updateCart, setUpdateCart] = useState(true);
  const [cart, setCart] = useState([]);
  
  const fetchProducts = async() => {
    try {      
      const response = await axios.get("/api/products");
      console.log(response.data);
      setProducts(response.data);
      console.log(products);
    } catch(error) {
      setError("error retrieving products: " + error);
    }
  };
  
  const fetchCart = async() => {
    try {
      const response = await axios.get("/api/cart");
      console.log(response.data);
      setCart(response.data);
      console.log(cart);
      setUpdateCart(false);
    } catch(error) {
      setError("error retrieving cart: " + error);
    }
  };
  
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  },[]);
  
  useEffect(() => {
    if (updateCart) {
      console.log("Updating Cart");
      fetchCart();
    }
    // eslint-disable-next-line
  },[updateCart]);
  
  
  return (
    <div className="page">
      {error}
      <div className="products">
        <div className="title">Products</div>
      {products.map(product => {
        return (
          <Product product={product} updateCart={setUpdateCart}/>
        );
      })}
      </div>
      <div className="cart">
        <div className="title">Cart</div>
        {cart.map(cartItem => {
          return (
            <Cart cartItem={cartItem} updateCart={setUpdateCart}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;


/*<div className="product">
  <div className="product-name">{product.name}</div>
  <div className="product-price">{product.price}</div>
  <img className="product-img" alt={product.name} src={product.img}/>;
</div>*/