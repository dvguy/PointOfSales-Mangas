import payment from '../views/payment.html';
import { arrayQty, mangasStock } from './comprar.controllers';

function paymentScreen() {

    console.log(mangasStock)
    
    const divElement = document.createElement('div');

    divElement.innerHTML = payment;

    return divElement
}

export {paymentScreen}
