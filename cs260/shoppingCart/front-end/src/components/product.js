import axios from 'axios';
import './product.css';

function Product(props) {
  const product = props.product;
  
  const addToCart = async() => {
    try {
      await axios.post("/api/cart/" +product.id);
      console.log("Added to cart, now updating parent");
      props.updateCart(true);
    } catch(error) {
      console.log("error adding to cart: " + error);
    }
  };
  
  return (
    <div className="product" key={product.id}>
      <div className="product-name">{product.name}</div>
      <div className="product-price">{product.price}</div>
      <button className="button" onClick={e => addToCart(product.id)}>Add to Cart</button>
    </div>
  );
}

export default Product;