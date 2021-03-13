import payment from '../views/payment.html';
import { arrayQty, mangasStock } from './comprar.controllers';
import {qty} from '../helpers/handleEventButtons';
import {mangaFoundArray} from './home.controllers';
import { cartArray } from './cart.controllers';

function paymentScreen() {    

    const reducer = (a,b) => a+b;

    let mangasTotalImport = [];

    for(let i = 0; i < cartArray.length; i++){
        mangasTotalImport.push(cartArray.length ? cartArray[i].price * arrayQty[i] : "uknown");
    }
    
    let totalImportResult_Number = mangasTotalImport.length ? mangasTotalImport.reduce(reducer): mangaFoundArray[0].price * qty; //This is necessary to implement the "write" function

    let totalImportResult_String = mangasTotalImport.length ? `$${mangasTotalImport.reduce(reducer)}`: `$${mangaFoundArray[0].price * qty}`

    const divElement = document.createElement('div');

    divElement.innerHTML = payment;
    
    /**************************DOM MANIPULATION-PRICE SECTION****************************/

    const elementsInCart = divElement.querySelector('#elementsInCart');
    const totalImport = divElement.querySelector('#totalImport');
    const inputImport = divElement.querySelector('#inputImport');
    const change = divElement.querySelector('#change');
    
    elementsInCart.innerHTML = mangasStock.length ? mangasStock.length : 1;
    totalImport.innerHTML = totalImportResult_String;
    inputImport.onkeyup = write;

    function write(e){
        change.textContent = `$${inputImport.value - totalImportResult_Number}`;
    }
    
    /**************************DOM MANIPULATION-DESCRIPTION SECTION****************************/

    const description_Table = divElement.querySelector("#description_Table");
    
    if(cartArray.length){
        for(let i = 0; i < cartArray.length; i++){
            const tr = document.createElement("tr");
            const td_unitys = document.createElement("td");
            const td_MangaName = document.createElement("td");
            const td_unitaryPrice = document.createElement("td");
    
            td_unitys.setAttribute("class", "_dinamicInfo_Description_First");
            td_MangaName.setAttribute("class", "_dinamicInfo_Description_Second");
            td_unitaryPrice.setAttribute("class", "_dinamicInfo_Description_Third");
    
            td_unitys.textContent = arrayQty[i];
            td_MangaName.textContent = cartArray[i].title;
            td_unitaryPrice.textContent = `$${cartArray[i].price}`;
    
            description_Table.append(tr)
            tr.appendChild(td_unitys)
            tr.appendChild(td_MangaName)
            tr.appendChild(td_unitaryPrice)
        }
    }else{
        const tr = document.createElement("tr");
        const td_unitys = document.createElement("td");
        const td_MangaName = document.createElement("td");
        const td_unitaryPrice = document.createElement("td");

        td_unitys.setAttribute("class", "_dinamicInfo_Description_First");
        td_MangaName.setAttribute("class", "_dinamicInfo_Description_Second");
        td_unitaryPrice.setAttribute("class", "_dinamicInfo_Description_Third");

        td_unitys.textContent = qty;
        td_MangaName.textContent = mangaFoundArray[0].title;
        td_unitaryPrice.textContent = `$${mangaFoundArray[0].price}`;

        description_Table.append(tr)
        tr.appendChild(td_unitys)
        tr.appendChild(td_MangaName)
        tr.appendChild(td_unitaryPrice)
    }
    

    return divElement
}

export {paymentScreen}
