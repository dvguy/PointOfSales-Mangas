import modifyInventory from '../views/modifyInventory.html';

function modifyInventoryScreen () {

    let divElement = document.createElement('div');
    divElement.innerHTML = modifyInventory

    const buttonCode = divElement.querySelector('#buttonModify')
    const inputCode = divElement.querySelector('#inputModify')

    let originalInventory = []
    let mangasInventory = []
    let resFromFunction = []
    let priceChangeValue = null
    let stockChangeValue = null


    function toDefineTheCodeOfMangaToModify(){
        let codeOfMangaToModify = inputCode.value; 
        let url = `http://localhost:${process.env.PORT}/inventory/${codeOfMangaToModify}`

        if (priceChangeValue != null && stockChangeValue != null){ //si noes cambiado el precio de manga se conserva el precio original
            mangasInventory[parseInt(inputCode.value)-1][2] = priceChangeValue
            mangasInventory[parseInt(inputCode.value)-1][3] = stockChangeValue
          
        }else if(stockChangeValue == null && priceChangeValue == null){
            priceChangeValue = originalInventory[parseInt(inputCode.value)-1][2]
            stockChangeValue = originalInventory[parseInt(inputCode.value)-1][3]
          
        }else if(stockChangeValue != null && priceChangeValue == null){
            mangasInventory[parseInt(inputCode.value)-1][3] = stockChangeValue
            priceChangeValue = originalInventory[parseInt(inputCode.value)-1][2]
           
        }else if(stockChangeValue == null && priceChangeValue != null){
            mangasInventory[parseInt(inputCode.value)-1][2] = priceChangeValue
            stockChangeValue = originalInventory[parseInt(inputCode.value)-1][3]

        }

        let dataToChange = [priceChangeValue, stockChangeValue]

        resFromFunction.push(url)
        resFromFunction.push(dataToChange)
    }

    async function modifyStock(url = "", data = [] ){

      let data2 = {
        "price" : data[0],
        "stock" : data[1]
      }

        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            body: JSON.stringify({"price" : priceChangeValue, "stock": stockChangeValue}) // body data type must match "Content-Type" header

            });

            return response.json(); // p

    }

    function changeStocknPrice(){
        toDefineTheCodeOfMangaToModify()
        let [url, dataToChange] = resFromFunction
        modifyStock(url, dataToChange)
        location.reload()
    }

try {
    function req(){
        let url = `http://localhost:${process.env.PORT}/inventory/all`;

        fetch(url).then( response => {
            return response.json()
        }).then(json =>{

           for(let i=0; i < json.length; i++){

            let internalInventoryToNew = []
            let internalInventoryToOriginal = []

            let newRow = document.createElement('tr');
            let codeRows = document.createElement('td');
            let nameRows = document.createElement('td');
            let priceRows = document.createElement('input');
            let stockRows = document.createElement('input');

            priceRows.type = "number"
            stockRows.type = "number"

            codeRows.textContent = json[i].code
            nameRows.textContent = json[i].name
            priceRows.value = json[i].price
            stockRows.value = json[i].stock

            internalInventoryToOriginal.push(json[i].code)
            internalInventoryToOriginal.push(json[i].name)
            internalInventoryToOriginal.push(json[i].price)
            internalInventoryToOriginal.push(json[i].stock)

            internalInventoryToNew.push(json[i].code)
            internalInventoryToNew.push(json[i].name)
            internalInventoryToNew.push(parseInt(priceRows.value))
            internalInventoryToNew.push(parseInt(stockRows.value))

            mangasInventory.push(internalInventoryToNew)
            originalInventory.push(internalInventoryToOriginal)

            newRow.appendChild(codeRows)
            newRow.appendChild(nameRows)
            newRow.appendChild(priceRows)
            newRow.appendChild(stockRows)
    
            divElement.appendChild(newRow)

            priceRows.addEventListener('change', (event) => {
                priceChangeValue = parseInt(event.target.value)
            });

            stockRows.addEventListener('change', (event) => {
                stockChangeValue = parseInt(event.target.value)
            });

            }

        })
    }
   
    req()

} catch (error) {
    console.log(error)
}  

    buttonCode.addEventListener("click", changeStocknPrice)

    return divElement 

}

export {modifyInventoryScreen}