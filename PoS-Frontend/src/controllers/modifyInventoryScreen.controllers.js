import modifyInventory from '../views/modifyInventory.html';

function modifyInventoryScreen () {

    let divElement = document.createElement('div');
    divElement.innerHTML = modifyInventory

try {
    function req(){
        let url = 'http://localhost:1000/inventory/all';

        fetch(url).then( response => {
            return response.json()
        }).then(json =>{
            let [titulo, stock, precio] = json;

           for(let i=0; i < json.length; i++){
            let newRow = document.createElement('tr');
            let newCell1 = document.createElement('td');
            let newCell2 = document.createElement('td');
            let newCell3 = document.createElement('td');
    
            newCell1.textContent = json[i].titulo
            newCell2.textContent = json[i].precio
            newCell3.textContent = json[i].stock
    
            newRow.appendChild(newCell1)
            newRow.appendChild(newCell2)
            newRow.appendChild(newCell3)
    
            divElement.appendChild(newRow)
            }

            console.log(titulo,stock, precio)
        })
    }
    req()
} catch (error) {
    console.log(error)
}
   
    return divElement
}

export {modifyInventoryScreen}