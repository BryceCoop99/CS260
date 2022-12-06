const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

let items = [];
let uniqueId = 100;
let cart = [];

app.get('/api/products', (req, res) => {
  res.send(items);
});

app.get('/api/products/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let matchedItem = items.find(item => item.id === id);
  if (matchedItem === undefined) {
    res.status(404)
      .send("Sorry, that product doesn't exist");
    return;
  }
  res.send(matchedItem);
});

app.post('/api/products', (req, res) => {
  let item = {
    id: uniqueId,
    name: req.body.name,
    price: req.body.price
  };
  uniqueId = uniqueId + 1;
  items.push(item);
  res.send(item);
});

app.delete('/api/products/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let length = items.length;
  items = items.filter(item => item.id !== id);
  if (items.length === length) {
    res.status(404)
      .send("Sorry, that product cannot be deleted.");
    return;
  }
  res.sendStatus(200);
});







app.get('/api/cart', (req, res) => {
  res.send(cart);
  console.log("Api retrieving Cart!");
  console.log(cart);
});

app.post('/api/cart/:id', (req, res) => {
  let id = parseInt(req.params.id);
  console.log("Intial id: " +id);
  
  let product = items.find(item => item.id === id);
  if (product === undefined) {
    res.status(404)
      .send("Sorry, that product doesn't exist");
    return;
  }
  // console.log(product);
  
  let cartItem = cart.find(item => item.id === product.id);
  // console.log(cartItem);
  let cartMap = cart.map(item => {
    return item.id;
  });
  let cartItemIndex = cartMap.indexOf(product.id);
  // console.log(cartItemIndex);
  
  if (cartItem === undefined) {
    let item = {
      id: product.id,
      product: product.name,
      quantity: 1
    };
    
    console.log("This is the new product id: " +item.id);
    cart.push(item);
    console.log(cart);
    res.send(item);
  } else {
    
    cart[cartItemIndex].quantity = cart[cartItemIndex].quantity + 1;
    // console.log("Updating id: " +cart[cartItemIndex]);
    res.send(cart[cartItemIndex]);
  }
  console.log("\n");
  
});

app.put('/api/cart/:id/:quantity', (req, res) => {
  let id = parseInt(req.params.id);
  
  let product = items.find(item => item.id === id);
  if (product === undefined) {
    res.status(404)
      .send("Sorry, that item doesn't in the list of products");
    return;
  }
  
  let quantity = parseInt(req.params.quantity);
  
  let cartItem = cart.find(item => item.id === product.id);
  let cartMap = cart.map(item => {
    return item.id;
  });
  let cartItemIndex = cartMap.indexOf(product.id);
  
  if (cartItem === undefined) {
    res.status(404)
      .send("Sorry, that item doesn't in the cart");
    return;
  }
  
  if (quantity === 0) {
    cart = cart.filter(item => item.id !== cartItem.id);
    cartItem.quantity = 0;
    res.send(cartItem);
    return;
  }
  
  cart[cartItemIndex].quantity = quantity;
  res.send(cart[cartItemIndex]);
});

app.delete('/api/cart/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let length = cart.length;
  cart = cart.filter(item => item.id !== id);
  if (cart.length === length) {
    res.status(404)
      .send("Sorry, that item cannot be deleted.");
    return;
  }
  res.sendStatus(200);
});

app.listen(3005, () => console.log('Server listening on port 3005!'));