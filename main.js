//let products=document.getElementsByClassName("product");
//let product=products[0];
//let grid=document.getElementById("grid-holder");
const buttons = document.getElementsByClassName("btn btn-primary py-1 px-4 ");
console.log(buttons);
let cartItems = 0;
for (let button of buttons) {
   button.addEventListener(
      'click',
      myCkickEvent => {
         cartItems += 1;
         console.log(cartItems);
      }
   );
}

function addProductToGrid(divId, productName, productSubtitle, productPrice) {



   let gridHolder = document.getElementById(divId);
   let productDiv = document.createElement('div');
   //classes to be added to the product div
   let cssClasses = ['col-xl-3', 'col-lg-4', 'col-md-6', 'col-sm-6', 'product'];
   //add those classes to classlist of product div
   productDiv.classList.add(...cssClasses);
   let marginDiv = document.createElement('div');
   cssClasses = ['mb-3', 'p-2'];
   marginDiv.classList.add(...cssClasses);
   let roundedDiv = document.createElement('div');
   cssClasses = ['rounded-lg'];
   roundedDiv.classList.add(...cssClasses);
   let shadowDiv = document.createElement('div');
   cssClasses = ['border-none', 'shadow-none'];
   shadowDiv.classList.add(...cssClasses);
   let productCardDiv = document.createElement('div');
   cssClasses = ['product-card', 'rounded-lg', 'shadow'];
   productCardDiv.classList.add(...cssClasses);
   let productImageDiv = document.createElement('div');
   cssClasses = ['product-image'];
   productImageDiv.classList.add(...cssClasses);
   let productTitleDiv = document.createElement('div');
   cssClasses = ['product-title', 'p-2', 'px-3', 'pb-0'];
   productTitleDiv.classList.add(...cssClasses);
   productTitleDiv.innerText = productName;

   let productSubtitleDiv = document.createElement('div');
   cssClasses = ['product-subtitle', 'px-3'];
   productSubtitleDiv.classList.add(...cssClasses);
   productSubtitleDiv.innerText = productSubtitle;

   let productDetailDiv = document.createElement('div');
   cssClasses = ['product-detail', 'my-2'];
   productDetailDiv.classList.add(...cssClasses);
   let productPriceDiv = document.createElement('div');
   cssClasses = ['product-price', 'p-2', 'px-3', 'pt-1'];
   productPriceDiv.classList.add(...cssClasses);
   productPriceDiv.innerText = productPrice;

   let productBuyDiv = document.createElement('div');
   cssClasses = ['product-buy', 'px-3'];
   productBuyDiv.classList.add(...cssClasses);
   let productBuyButtonDiv = document.createElement('button');
   productBuyButtonDiv.type = 'button';
   productBuyButtonDiv.id = 'product-btn';
   cssClasses = ['btn', 'btn-primary', 'py-1', 'px-4'];
   productBuyButtonDiv.classList.add(...cssClasses);
   productBuyButtonDiv.innerText = 'Buy';
   productBuyDiv.appendChild(productBuyButtonDiv);
   productDetailDiv.appendChild(productPriceDiv);
   productDetailDiv.appendChild(productBuyDiv);
   productCardDiv.appendChild(productImageDiv);
   productCardDiv.appendChild(productTitleDiv);
   productCardDiv.appendChild(productSubtitleDiv);
   productCardDiv.appendChild(productDetailDiv);
   shadowDiv.appendChild(productCardDiv);
   roundedDiv.appendChild(shadowDiv);
   marginDiv.appendChild(roundedDiv);
   productDiv.appendChild(marginDiv);
   gridHolder.appendChild(productDiv);
}

window.onload = function () {
   for (let i = 0; i < 100; i++)
      addProductToGrid('grid-holder', 'Mobile', 'Super fast mobile', Math.floor(Math.random()*1000));
}