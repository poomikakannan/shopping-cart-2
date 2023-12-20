"use strict"

document.querySelector('form[name="frm"]').addEventListener('submit', function(event) {
  event.preventDefault();

  
  let productName = document.forms["frm"]["Product Name"].value.trim();
  let amount = document.forms["frm"]["Amount"].value.trim();


  if (productName === "" || amount === "") {
      alert("Please fill in all fields");
      return;
  }

  addToCart(productName, amount);

  document.forms["frm"].reset();
});

function addToCart(productName, amount) {
  let cartContent = document.querySelector('.box2');
  let totalBalanceElement = document.getElementById('total-balance');

  let productContainer = document.createElement('div');
  productContainer.className = 'productContainer';

  let productDiv = document.createElement('div');
  productDiv.className = 'productDiv';
  productDiv.textContent = productName;

  let amountDiv = document.createElement('div');
  amountDiv.className = 'amountDiv';
  amountDiv.textContent = amount;

  productContainer.appendChild(productDiv);
  productContainer.appendChild(amountDiv);

  cartContent.appendChild(productContainer);


  var dltbtn = document.createElement('span');
  dltbtn.className = 'fa-solid fa-trash';
  dltbtn.style.visibility = 'hidden'; 


  productContainer.appendChild(dltbtn);

 
  productContainer.addEventListener('mouseover', function() {
      dltbtn.style.visibility = 'visible';
  });

 
  productContainer.addEventListener('mouseout', function() {
      dltbtn.style.visibility = 'hidden';
  });

  dltbtn.addEventListener('click', function() {
      cartContent.removeChild(productContainer);
      updateTotalBalance();
  });

  updateTotalBalance();
}

function updateTotalBalance() {
  let totalBalanceElement = document.getElementById('total-balance');
  let amountDivs = document.querySelectorAll('.amountDiv');
  let totalAmount = 0;

  amountDivs.forEach(function(amountDiv) {
      totalAmount += parseFloat(amountDiv.textContent);
  });

  totalBalanceElement.textContent = totalAmount;
}





