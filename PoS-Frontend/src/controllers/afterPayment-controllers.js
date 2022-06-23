import afterPayment from '../views/afterPayment.html';

function refresh() {
	location.reload();
}

function returnHome(e){
    e.preventDefault();
    location.href = "http://localhost:8080/#/";
    setTimeout(refresh , 500);
}

function afterPaymentScreen() {

    const divElement = document.createElement('div');
    divElement.innerHTML = afterPayment

    const btnToRetunrHome = divElement.querySelector('#btn4');


    btnToRetunrHome.addEventListener("click", returnHome);

    return divElement
}

export {afterPaymentScreen}