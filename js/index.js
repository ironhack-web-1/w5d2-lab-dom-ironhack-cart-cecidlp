// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let unitPrice = price.innerHTML
  let unitQuantity = quantity.value
  let total = product.querySelector('.subtotal span')
  total.innerHTML = unitPrice * unitQuantity
  return unitPrice * unitQuantity
}

function calculateAll() {
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
 const allProducts = document.getElementsByClassName ("product")
 let pricesSum = 0;
  for (let product of allProducts) {
    pricesSum += updateSubtotal(product);
  }
  const total = document.querySelector("#total-value span");

  total.innerHTML = pricesSum;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode
  console.log('The target in remove is:', target);
    product.parentNode.removeChild(product);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButton = document.getElementsByClassName('btn btn-remove');
  for (let remove of removeButton) {
    remove.addEventListener("click", removeProduct) 
  }
  
});
