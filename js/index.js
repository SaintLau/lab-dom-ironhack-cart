// ITERATION 1

function updateSubtotal(product) {  //ALREADY THE FUNCTION
  let price = product.querySelector('.price span'); 
  let priceValue = price.innerHTML;
  
  
  let quantity = product.querySelector('.quantity input');
  let quantityValue = quantity.value; 

   //empty array to have the price after result calculated, what will appear on the box
  let result = (priceValue * quantityValue);



  let subtotal = product.querySelector('.subtotal span'); //Hold the value
  subtotal.innerHTML = result;

  console.log('Calculating subtotal, yey!');
  return result;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');

  let productsArray =[...products];

  let total = 0;

  //span.appendChild(total);

  productsArray.forEach(element => {
    total += updateSubtotal(element);
     // element.appendChild(span);
    



  })



console.log(total);
  // ITERATION 3
  //... your code goes here: is the element iteration abova
    
 
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
