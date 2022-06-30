import home from '../views/home.html';

let amount = '';
let mangaFound = new Set()
let mangaFoundArray = [];


function searchScreen(){

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
    const btnToInventory = divElement.querySelector('#btnModifyInventory')

    function refresh() {
        location.reload();
    }
    
    function comprar(e){
        e.preventDefault()
        location.href = "#/comprar"
    }

    function addToCart(e){
        e.preventDefault()
        location.href = "#/cart"
    }

    function sendToInventory(e){
        e.preventDefault()
        location.href = "#/modifyInventory"
    }
    
    const req = (e) => {

        e.preventDefault()
        //let slash = "/"
        let url =`http://127.0.0.1:1000/inventory/${input.value}`;
        fetch(url).then(response => {
        return response.json()
        }).then(json =>{
            let {name,author,price,stock,img} = json[0][0];
            //let {titulo,autor,precio,stock,img} = json[0][0];
            //li.textContent = [`Titulo: ${titulo}  | Autor: ${autor}  | Precio: $${precio}  | En existencia: ${stock}`];;
            li.textContent = [`Titulo: ${name}  | Autor: ${author}  | Precio: $${price}  | En existencia: ${stock}`];;

              
            lista.append(li);
    
            existe = true;
           // imgn.setAttribute("src","C:/Users/fer14/Documents/Programacion/PointOfSales/PoS-Frontend/src/img/narut")

            if(existe){
                imgn.setAttribute("src",img)
                button1.style.display = "inline";
                button2.style.display = "inline";
    
                existe = true
            }

            amount = stock
            mangaFound.add({image: img, title: name, author: author, price: price, stock: stock})

            mangaFoundArray = [...mangaFound]
            //Esto se hace para que al buscar más de 1 manga se añada el último buscado a la siguiente
            //pantalla y no el primero que se buscó
            mangaFound.clear()

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
    button2.addEventListener( 'click', addToCart);
    //btn.addEventListener("click", req);

    btn.addEventListener("click", req );

    btnToInventory.addEventListener('click', sendToInventory);

    return divElement
}

export {searchScreen,amount, mangaFoundArray}