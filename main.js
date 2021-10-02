let products=document.getElementsByClassName("product");
let product=products[0];
let grid=document.getElementById("grid-holder");
for(let index=0; index<10;index++){
    grid.aapendChild(product);
}

