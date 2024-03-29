import {pages} from "../controllers/index.controllers.js";

let content = document.getElementById('content');

const router = (route) => {

    content.innerHTML = '';

    switch(route){
        case '#/': {
            return content.appendChild(pages.home())
        }

        case '#/comprar': {
            return content.appendChild(pages.sales())
        }

        case '#/cart': {
            return content.appendChild(pages.cart())
        }

        case '#/payment': {
            return content.appendChild(pages.payment())
        }

        case '#/afterPayment': {
            return content.appendChild(pages.afterPayment())
        }

        case '#/modifyInventory': {
            return content.appendChild(pages.modifyInventory())
        }

        default:
            return console.log("404 NOT FOUND")
    }
}

export {router};