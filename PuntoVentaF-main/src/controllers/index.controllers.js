import { searchScreen } from './home.controllers.js';
import { salesScreen } from './comprar.controllers.js';
import { cartScreen } from './cart.controllers.js';
import { paymentScreen } from "./payment.controllers.js";

const pages = {
    home: searchScreen,
    sales: salesScreen,
    cart: cartScreen,
    payment: paymentScreen
}

export {pages};