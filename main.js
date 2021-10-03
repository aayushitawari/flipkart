//let products=document.getElementsByClassName("product");
//let product=products[0];
//let grid=document.getElementById("grid-holder");
const button=document.getElementsByClassName("btn btn-primary py-1 px-4 ");
console.log(buttons);
let cartItems=0;
for(let button of buttons){
button.addEventListener(
        'click',
     myCkickEvent=>{
        cartItems +=1;
        console.log(cartItems);
     }
    );
    }