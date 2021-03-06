import payment from '../views/payment.html';
import { arrayQty, mangasStock } from './comprar.controllers';
import {qty} from '../helpers/handleEventButtons';
import {mangaFoundArray} from './home.controllers';
import { cartArray } from './cart.controllers';

function paymentScreen() {

    console.log(qty)

    const reducer = (a,b) => a+b;

    let mangaPrices = [];

    for(let i = 0; i < cartArray.length; i++){
        mangaPrices.push(cartArray.length ? cartArray[i].price * arrayQty[i] : "uknown");
    }
    
    mangaPrices.length ? mangaPrices.reduce(reducer) : false;

    const divElement = document.createElement('div');

    divElement.innerHTML = payment;
    
    const elementsInCart = divElement.querySelector('#elementsInCart');
    const totalImport = divElement.querySelector('#totalImport');

    elementsInCart.innerHTML = mangasStock.length ? mangasStock.length : 1;
    totalImport.innerHTML = mangaPrices.length ? `$${mangaPrices.reduce(reducer)}`: `$${mangaFoundArray[0].price * qty}`



    return divElement
}

export {paymentScreen}
