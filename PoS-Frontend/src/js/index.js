import {router} from "../router/index.routes"

const reloadHeader = document.querySelector("#reloadHeader");

function refresh() {
	location.reload();
}

reloadHeader.addEventListener("click", () => {
	location.href = "http://localhost:8080/#/";
	setTimeout(refresh , 500);
});

// //ESTO SE HACE PARA QUE LA RUTA CARGUE EL CONTENIDO DE UN SOLO CLICK EN EL BTN COMPRAR

router(window.location.hash);

// //ESTO SE HACE PARA QUE LA RUTA CARGUE EL CONTENIDO DE UN SOLO CLICK EN EL BTN COMPRAR

window.addEventListener('hashchange', () => {
	router(window.location.hash);
});
