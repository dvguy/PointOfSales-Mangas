import home from '../views/home.html';
import {DateTime} from 'luxon';

let amount = '';
let mangaFound = new Set()
let mangaFoundArray = [];


function searchScreen(){

    // let dt = DateTime.now();

    // console.log(dt.toLocaleString(DateTime.TIME_SIMPLE))

    const divElement = document.createElement('div');

    divElement.innerHTML = home

    //*************************MAIN FUNCTION***************************
    let existe = null;

    const imgn = divElement.querySelector('#imagen');
    const lista = divElement.querySelector('#lista');
    const input = divElement.querySelector('#input');
    const btn = divElement.querySelector("#btn");
    const form = divElement.querySelector('#id');
    const button1 = divElement.querySelector('#btn1');
    const button2 = divElement.querySelector('#btn2');
    const li = divElement.querySelector('#li');

    function comprar(e){
        e.preventDefault()
        location.href = "#/comprar"
    }

    function addToCart(e){
        e.preventDefault()
        location.href = "#/cart"
    }
    
    const req = (e) => {
        e.preventDefault()
        //let slash = "/"
        let url =`http://127.0.0.1:1000/inventory/${input.value}`;
        fetch(url).then(response => {
        return response.json()
        }).then(json =>{
            let {titulo,autor,precio,stock,img} = json[0][0];
        
            li.textContent = [`Titulo: ${titulo}  | Autor: ${autor}  | Precio: $${precio}  | En existencia: ${stock}`];;
            
            lista.append(li);
    
            existe = true;
    
            if(existe){
                imgn.setAttribute("src",img)
                button1.style.display = "inline";
                button2.style.display = "inline";
    
                existe = true
            }

            amount = stock

            mangaFound.add({image: img, title: titulo, author: autor, price: precio, stock: stock})

            
            mangaFoundArray = [...mangaFound]
        })
        .catch(() => {
            li.textContent = ["圎 No pudimos encontrar el manga que buscas, por favor, verifica que esté bien escrito. 圎"];
            lista.append(li);
    
            if(existe === null){
                imgn.setAttribute("src","../src/img/nada.png")
            }
    
    
            if(existe === true ){
                imgn.setAttribute("src","../src/img/nada.png")
                button1.style.display = "none";
                button2.style.display = "none";
            }
        })	

        return false;
    }


    // /**NOS QUEDAMOS AQUI Y YA TENEMOS EL NÚMERO DE LA TRANSACCIÓN */
    // let lastTicketNumber = [];

    // function getTicket(e){
    //     // e.preventDefault()
    //     let url =`http://127.0.0.1:1000/employees`;

    //     fetch(url).then(response => {
    //     return response.json()
    //     }).then(json =>{
    //         let ticketN = json[json.length - 1].transaction_number;
    //         lastTicketNumber.push(ticketN);
    //     })
    //     .catch(() => {
    //         console.log("ERROR")
    //     })
    // }

    // getTicket()

    // setTimeout(() => {
    //     console.log(lastTicketNumber[0] + 1)
    // }, 1000);

    button1.addEventListener( 'click', comprar );
    button2.addEventListener( 'click', addToCart );

    btn.addEventListener("click", req);

   
    return divElement
}

export {searchScreen,amount, mangaFoundArray}