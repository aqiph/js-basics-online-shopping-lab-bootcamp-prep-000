var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100);
  let newItem = {itemName: item, itemPrice: price};
  cart.push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return 'Your shopping cart is empty.';
  }
  else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  let message = 'In your cart, you have'
  for (let i = 0; i < cart.length-1; i++){
    message = message + ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']},`
  }
  message = message + ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  return message;
}

function total() {
  let totalValue = 0;
  for (let item in cart){
    totalValue += item.itemPrice;
  }
  return totalValue;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName == item){
      cart.splice(i,1);
      return cart;
    }
  }
  return ''
}

function placeOrder(cardNumber) {
  // write your code here
}
