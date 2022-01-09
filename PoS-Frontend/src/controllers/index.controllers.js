import { searchScreen } from './home.controllers.js';
import { salesScreen } from './comprar.controllers.js';
import { cartScreen } from './cart.controllers.js';
import { paymentScreen } from "./payment.controllers.js";
import { afterPaymentScreen } from './afterPayment-controllers.js';
import { modifyInventoryScreen } from './modifyInventoryScreen.controllers.js';

const pages = {
    home: searchScreen,
    sales: salesScreen,
    cart: cartScreen,
    payment: paymentScreen,
    afterPayment: afterPaymentScreen,
    modifyInventory: modifyInventoryScreen
}

export {pages};