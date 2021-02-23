import comprar from '../views/comprar.html';
import { handleAdd, handleSubstract,buttonAddPressed } from '../helpers/handleEventButtons';
import { cartArray } from './cart.controllers';
import {amount, mangaFoundArray} from './home.controllers';


let qty = 1; 

let buttonClicked = 0; 

const mangasInCart = []; 

let mangasStock = [];

let arrayQty = []; 

let buttonNavigatePressed = false;

let actualQty = amount-1;

window.addEventListener('hashchange', () => { 
    qty = 1;
});


function salesScreen() {
    

    let title = mangaFoundArray[0].title

    let author = mangaFoundArray[0].author

    let price =  mangaFoundArray[0].price

    let amountt = mangaFoundArray[0].stock

    let image = mangaFoundArray[0].image

    actualQty = amountt-1;

    const divElement = document.createElement('div');

    divElement.innerHTML = comprar;

    const btnAdd = divElement.querySelector('#btnAdd');
    const btnSub = divElement.querySelector('#btnSub');
    const img = divElement.querySelector('#imageSales');
    const quantity = divElement.querySelector('#quantity');
    const titleinfo = divElement.querySelector('#titleinfo');  
    const priceinfo = divElement.querySelector('#priceinfo'); 
    const authorinfo = divElement.querySelector('#authorinfo');
    const amountinfo = divElement.querySelector('#amountinfo');
    const qtyMangas = divElement.querySelector('#qtyMangas');
    const btnPayment = divElement.querySelector('#btnPayment');

    function completePayment(e){
        e.preventDefault();
        location.href = "#/payment";
    }

    btnPayment.addEventListener("click", completePayment);

    btnAdd.addEventListener("click", handleAdd);

    btnSub.addEventListener("click", handleSubstract);

    img.setAttribute("src",image);

    quantity.innerHTML = qty;
    priceinfo.innerHTML = `Precio: $${price}`;
    titleinfo.innerHTML = `Título:  ${title}`;
    authorinfo.innerHTML = `Autor:  ${author}`;

    amountinfo.innerHTML = `En existencia: ${actualQty}`; 

    if(cartArray.length >= 1){

        for( let i = 0; i < cartArray.length; i++){

            const buttonQtyMangas = document.createElement("button");
            buttonQtyMangas.setAttribute("id", "mangaFocused")
            buttonQtyMangas.innerHTML = i+1
            let quantityOfMangas = [1]
            arrayQty.push(quantityOfMangas)

            buttonQtyMangas.addEventListener("click", function(e){
                let currentIndex = parseInt(e.target.innerHTML) - 1
                buttonClicked = currentIndex;
                qty = 1

                console.log("buttonQtyMangas")

                img.setAttribute("src",cartArray[i].image)
                priceinfo.innerHTML = `Precio: $${cartArray[i].price}`;
                titleinfo.innerHTML = `Título:  ${cartArray[i].title}`;
                authorinfo.innerHTML = `Autor:  ${cartArray[i].author}`;


                if(buttonAddPressed === true && buttonNavigatePressed === true){
                    quantity.innerHTML = arrayQty[buttonClicked][0];
                    amountinfo.innerHTML = `En existencia: ${mangasStock[buttonClicked]}`;
                }else{
                    quantity.innerHTML = qty;
                    amountinfo.innerHTML = `En existencia: ${cartArray[i].stock-1}`;
                }

                buttonNavigatePressed = true

            })

            mangasStock.push(cartArray[i].stock - 1);            
            mangasInCart.push(cartArray[i].stock);

            qtyMangas.append(buttonQtyMangas);
        }
    }

    return divElement
}

export {salesScreen, buttonClicked, mangasStock, mangasInCart, arrayQty, buttonNavigatePressed, actualQty}










// let qty = 1; Quantity of elements to buy

// let buttonClicked = 0; Index of the manga in the cart

// const mangasInCart = []; This array stores the stack value taken from cartArray, {this array will not be modified}.

// let mangasStock = []; This array stores the stack value taken from cartArray, {this array is modified}.

// let arrayQty = []; This array stores other arrays that, in turn, store the number of items to buy divided by their index order

// let buttonNavigatePressed = false;

// let buttonAddPressed = false;

// let actualQty = amount-1; It helps to start: amountinfo.innerHTML = Real stock - 1 (-1 due we already have 1 in qty)

// window.addEventListener('hashchange', () => { //This resets the qty
//     qty = 1;
// });
