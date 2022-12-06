import axios from 'axios';
import './cart.css';

function Cart(props) {
  // console.log("Props: " +props);
  const cartItem = props.cartItem;
  // console.log("Item in cart: " +cartItem);
  
  const addToCart = async() => {
    try {
      await axios.post("/api/cart/" +cartItem.id);
      console.log("Added to cart");
      props.updateCart(true);
    } catch(error) {
      console.log("error adding cart: " + error);
    }
  };
  
  const removeFromCart = async() => {
    try {
      const newQuantity = cartItem.quantity-1;
      await axios.put("/api/cart/" +cartItem.id+ "/" +newQuantity);
      console.log("Updated cart");
      props.updateCart(true);
    } catch(error) {
      console.log("error updating cart: " + error);
    }
  };  
  
  const deleteFromCart = async() => {
    try {
      await axios.delete("/api/cart/" +cartItem.id);
      console.log("Deleted from cart");
      props.updateCart(true);
    } catch(error) {
      console.log("error deleting from cart: " + error);
    }
  };
  
  return (
    <div className="item" key={cartItem.id}>
      <div className="item-product">{cartItem.product}, </div>
      <div className="item-quantity">{cartItem.quantity}</div>
      <button className="button" onClick={e => addToCart()}>+</button>
      <button className="button" onClick={e => removeFromCart()}>-</button>
      <button className="button" onClick={e => deleteFromCart()}>Delete</button>
    </div>
  );
}

export default Cart;