import { cartArray } from "../controllers/cart.controllers";
import { amount } from "../controllers/home.controllers";
import {buttonClicked, mangasStock, mangasInCart, arrayQty, buttonNavigatePressed} from "../controllers/comprar.controllers";

let qty = 1; 

let buttonAddPressed = false;

let actualQty = amount-1;

let inventoryFull = false;

function handleAdd(){ 

    if(cartArray.length >= 1 && buttonAddPressed === true && buttonNavigatePressed === true){

        arrayQty[buttonClicked][0] < mangasInCart[buttonClicked] ? quantity.innerHTML = arrayQty[buttonClicked][0] += 1 : amount;

        mangasStock[buttonClicked] > 0 ? actualQty = mangasStock[buttonClicked] - 1 : actualQty = 0;

        amountinfo.innerHTML = `En existencia: ${actualQty}`;
        
        arrayQty[buttonClicked].splice(0,arrayQty.length,arrayQty[buttonClicked][0]); //Here we use buttonClicked before ".splice" to point at the current index of the manga in arrayQty
        
        mangasStock.splice(buttonClicked, 1, actualQty);

    }else if(cartArray.length >= 1){ 

        arrayQty[buttonClicked][0] < mangasInCart[buttonClicked] ? quantity.innerHTML = arrayQty[buttonClicked][0] += 1: qty;//ERROR OMEGA TAMBIE PUEDE VENIR DE AQUI

        mangasStock[buttonClicked] > 0 ? actualQty = mangasStock[buttonClicked] - 1 : actualQty = 0;

        amountinfo.innerHTML = `En existencia: ${actualQty}`;
        
        mangasStock.splice(buttonClicked, 1, actualQty);

        arrayQty[0].splice(buttonClicked,1,arrayQty[buttonClicked][0]);

        buttonAddPressed = true;

    }else{
        qty < amount ? quantity.innerHTML = qty += 1 : qty;
        actualQty = amount - qty;
        amountinfo.innerHTML = `En existencia: ${actualQty}`;
    }  
};






function handleSubstract(){

    if(cartArray.length >= 1 && buttonAddPressed === true && buttonNavigatePressed === true){

        if(arrayQty[buttonClicked][0] > 1){
             quantity.innerHTML = arrayQty[buttonClicked][0] -= 1;
             actualQty += 1;
             inventoryFull = true;

        }else if(arrayQty[buttonClicked][0] === 1 && inventoryFull){
            actualQty = mangasInCart[buttonClicked] - 1;
            inventoryFull = false;
        }else{
            actualQty = mangasInCart[buttonClicked] - 1;
        };

        amountinfo.innerHTML = `En existencia: ${actualQty}`;
        
        arrayQty[buttonClicked].splice(0,arrayQty.length,arrayQty[buttonClicked][0]);
        mangasStock.splice(buttonClicked, 1, actualQty);

    }else if(cartArray.length >= 1){ 
        let b = mangasInCart[buttonClicked] - 1;

        arrayQty[buttonClicked][0] > 1 ? quantity.innerHTML = arrayQty[buttonClicked][0] -= 1: quantity.innerHTML = 1;
       
        mangasStock[buttonClicked] < amount-1 ? actualQty = mangasStock[buttonClicked] + 1 : actualQty = b;
        amountinfo.innerHTML = `En existencia: ${actualQty}`;
        
        mangasStock.splice(buttonClicked, 1, actualQty);
        arrayQty[0].splice(buttonClicked,1,arrayQty[buttonClicked][0]);

    }else{
        qty > 1 ? quantity.innerHTML = qty -= 1 : qty;

        if(actualQty < amount-1 && qty > 1){
            actualQty += 1;
        }else{
            actualQty = amount-1;
        }

        amountinfo.innerHTML = `En existencia: ${actualQty}`;

    }  
};


export {handleAdd, handleSubstract, buttonAddPressed, qty}




// // import {buttonClicked, mangasStock, mangasInCart, arrayQty, buttonNavigatePressed} from "../controllers/comprar.controllers";

// //let qty = 1; Quantity of elements to buy

// // let buttonClicked = 0; Index of the manga in the cart

// // const mangasInCart = []; This array stores the stack value taken from cartArray, {this array will not be modified}.

// // let mangasStock = []; This array stores the stack value taken from cartArray, {this array is modified}.

// // let arrayQty = []; This array stores other arrays that, in turn, store the number of items to buy divided by their index order

// //let actualQty = amount-1; It helps to start: amountinfo.innerHTML = Real stock - 1 (-1 due we already have 1 in qty)

