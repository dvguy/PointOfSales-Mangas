import payment from '../views/payment.html';
import { arrayQty, mangasStock } from './comprar.controllers';
import {qty} from '../helpers/handleEventButtons';
import {mangaFoundArray, amount} from './home.controllers';
import { cartArray } from './cart.controllers';
import { DateTime } from 'luxon';



function afterPayment(e){
    e.preventDefault();
    location.href = "#/afterPayment";
}

function paymentScreen() {   
    

    let dt = DateTime.now();
    let date = dt.toISODate();
    let hour = dt.toLocaleString(DateTime.TIME_SIMPLE);


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
    const ticketInfo = divElement.querySelector("#ticketInfo");
    const dateInfo = divElement.querySelector("#dateInfo");
    const hourInfo = divElement.querySelector("#hourInfo");
    const btn_payment_screen = divElement.querySelector("#btn_payment_screen");
    
    dateInfo.textContent = date;
    hourInfo.textContent = hour;
    
    /**This code gets the last ticket number from the db plus 1*/
    let lastTicketNumber = [];



    function getTicket(e){
        let urlToGet =`http://127.0.0.1:1000/employees`;

        fetch(urlToGet).then(response => {
        return response.json()
        }).then(json =>{
            let ticketN = json[json.length - 1].transaction_number;
            lastTicketNumber.push(ticketN);
        })
        .catch(() => {
            console.log("ERROR")
        })
    }

    getTicket()

    setTimeout(() => {
        let ticketNumber = lastTicketNumber[0] + 1;
        ticketInfo.textContent = ticketNumber;
    }, 100);


/*********************************** FUNCION POST ****************************************/


    let dataFromTicket = {
        date : date,
        hour : hour,
        name : "Ander"
    }

    let newStockForTheDataBase = {
        "stock": amount - qty
    }

    let url = 'http://localhost:1000/';

    function postTicket() {
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataFromTicket) // data can be `string` or {object}!
        })
    }

    function modifyStock() {
       if(cartArray.length){
           for(let i = 0; i < cartArray.length; i++){
            
            let newStockForTheDataBaseMoreThanOneElement = {
                "stock": cartArray[i].stock - arrayQty[i] //cartArray contains the mangas added to de cart or bag, and arrayQTY is the amount of mangas to sell
            }

            fetch(`${url}inventory/${cartArray[i].title}`, {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newStockForTheDataBaseMoreThanOneElement)
            })
           }
       }else{
            fetch(`${url}inventory/${mangaFoundArray[0].title}`, {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newStockForTheDataBase)
            })
       }
    }
    
    
    btn_payment_screen.addEventListener('click', postTicket);
    btn_payment_screen.addEventListener('click', modifyStock);
    btn_payment_screen.addEventListener('click', afterPayment);



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
















