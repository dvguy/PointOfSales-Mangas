import cart from '../views/cart.html';
import {mangaFoundArray} from './home.controllers';


let cartArray = []; //This array stores the mangas added to the Cart

function cartScreen(){

    cartArray = [...mangaFoundArray]

    const divElement = document.createElement('div');

    divElement.innerHTML = cart

    //*************************MAIN FUNCTION***************************

    let existe = null;

    const imgn = divElement.querySelector('#imagen');
    const lista = divElement.querySelector('#lista');
    const input = divElement.querySelector('#input');
    const btn = divElement.querySelector("#btn");
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
        let slash = "/"
        let url =`http://127.0.0.1:1000${slash}${input.value}`;
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

            cartArray.push({image: img, title: titulo, author: autor, price: precio,stock: stock})


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
    
    button1.addEventListener( 'click', comprar );
    button2.addEventListener( 'click', addToCart );

    btn.addEventListener("click", req);

    return divElement

}

export {cartScreen,cartArray}