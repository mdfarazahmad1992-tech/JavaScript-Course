var name = 'some-name';
const brand = 'nike';
let age = 45;

console.log(age);
console.log('Output in console from app.js file');

const standardShippingCost = 6;
const discountedShippingCost = 4;

function calculateShippingCost(totalPrice) {
  let shippingCost;

  if (totalPrice <= 10) {
    shippingCost = standardShippingCost;
  } else if (totalPrice <= 20) {
    shippingCost = 3;
  } else {
    shippingCost = 0;
  }

  console.log(`Shipping cost for you is ${shippingCost}`);

  console.log(`For total price of ${totalPrice}`);
  console.log('----------------------------');
}

// User starts shopping
calculateShippingCost(10);

// More items added to shopping cart
calculateShippingCost(19);

// Add another item to cart
calculateShippingCost(24);
