/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/views/home.html":
/*!*****************************!*
  !*** ./src/views/home.html ***!
  \*****************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<div id=\\\"divformulario\\\">\\r\\n\\t<form id=\\\"id\\\" class=\\\"formulario\\\" >\\r\\n\\t\\t<p class=\\\"pform\\\">Buscar Manga<p>\\r\\n\\t\\t<input autocomplete=\\\"off\\\" type=\\\"text\\\" id=\\\"input\\\" class=\\\"datos\\\" pattern=\\\"[A-Za-z\\\\s/-/´/'/]+\\\" required placeholder=\\\"Escribe el titulo del Manga...\\\" ><br>\\r\\n\\t\\t\\r\\n\\t\\t<input type=\\\"submit\\\" value=\\\"Buscar\\\" id=\\\"btn\\\" >\\r\\n\\r\\n\\t\\t<ul id=\\\"lista\\\"></ul>\\t\\r\\n\\r\\n\\t\\t<div class=\\\"card\\\">\\r\\n\\t\\t\\t<img id=\\\"imagen\\\"> \\r\\n\\t\\t</div>\\t\\t\\r\\n\\t</form>\\r\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://PuntoVentaF-main/./src/views/home.html?");

/***/ }),

/***/ "./src/controllers/home.controllers.js":
/*!*********************************************!*
  !*** ./src/controllers/home.controllers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home.html */ \"./src/views/home.html\");\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_home_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n\r\n    const divElement = document.createElement('div');\r\n\r\n    divElement.innerHTML = (_views_home_html__WEBPACK_IMPORTED_MODULE_0___default())\r\n    \r\n    return divElement;\r\n});\n\n//# sourceURL=webpack://PuntoVentaF-main/./src/controllers/home.controllers.js?");

/***/ }),

/***/ "./src/controllers/index.controllers.js":
/*!**********************************************!*
  !*** ./src/controllers/index.controllers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pages\": () => /* binding */ pages\n/* harmony export */ });\n/* harmony import */ var _home_controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.controllers.js */ \"./src/controllers/home.controllers.js\");\n\r\n\r\n\r\n\r\nconst pages = {\r\n    home: _home_controllers__WEBPACK_IMPORTED_MODULE_0__.default,\r\n    sales: _home_controllers__WEBPACK_IMPORTED_MODULE_0__.default,\r\n}\r\n\r\n\n\n//# sourceURL=webpack://PuntoVentaF-main/./src/controllers/index.controllers.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_index_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router/index.routes */ \"./src/router/index.routes.js\");\n\n\nconst lista = document.getElementById('lista');\nconst li = document.createElement('li');\nconst input = document.getElementById('input');\nconst btn = document.getElementById(\"btn\");\nconst form = document.getElementById('id');\nconst imgn = document.getElementById('imagen');\nconst inputv = input.value.toLowerCase();\nconst button1 = document.createElement('button');\nconst button2 = document.createElement('button');\nconst link = document.createElement('a')\n\n//******************************RUTAS******************************\n\nfunction home(){\n\tlocation.href = \"#/\"\n}\n\nfunction comprar(e){\n\te.preventDefault()\n\tlocation.href = \"#/comprar\"\n}\n\n//ESTO SE HACE PARA QUE LA RUTA CARGUE EL CONTENIDO DE UN SOLO CLICK EN EL BTN COMPRAR\n\n(0,_router_index_routes__WEBPACK_IMPORTED_MODULE_0__.router)(window.location.hash)\n\n//ESTO SE HACE PARA QUE LA RUTA CARGUE EL CONTENIDO DE UN SOLO CLICK EN EL BTN COMPRAR\n\nbutton1.addEventListener( 'click', comprar );\n\nwindow.addEventListener('hashchange', () => {\n\t(0,_router_index_routes__WEBPACK_IMPORTED_MODULE_0__.router)(window.location.hash)\n});\n\n//*************************FUNCION PRIMARIA*************************\n\nbtn.addEventListener(\"click\", req);\n\nbutton1.setAttribute(\"id\",\"btn1\")\nbutton2.setAttribute(\"id\",\"btn\")\nbutton1.textContent ='Comprar'\nbutton2.textContent ='Cotizar'\n\nlet existe = null;\n\n//URL ES EL CONTACTO CON EL BACKEND \nfunction req(e){\n\te.preventDefault()\n\tlet slash = \"/\"\n\tlet url =`http://127.0.0.1:1000${slash}${input.value}`;\n\tfetch(url).then(response => {\n\treturn response.json()\n\t}).then(json =>{\n\t\tlet {titulo,autor,precio,stock,img} = json[0][0];\n\t\n\t\tli.textContent = [`Titulo: ${titulo}  | Autor: ${autor}  | Precio: $${precio}  | En existencia: ${stock}`];;\n\t\t\n\t\tlista.append(li);\n\n\t\texiste = true;\n\n\t\tif(existe){\n\t\t\timgn.setAttribute(\"src\",img)\n\t\t\tform.append(button1)\n\t\t\tform.append(link)\n\t\t\tform.append(button2)\n\n\t\t\texiste = true\n\t\t}\n\n\t\t\n\n\t})\n\t.catch(() => {\n\t\tli.textContent = [\"圎 No pudimos encontrar el manga que buscas, por favor, verifica que esté bien escrito. 圎\"];\n\t\tlista.append(li);\n\n\t\tif(existe === null){\n\t\t\timgn.setAttribute(\"src\",\"../src/img/nada.png\")\n\t\t}\n\n\n\t\tif(existe === true ){\n\n\t\t\timgn.setAttribute(\"src\",\"../src/img/nada.png\")\n\t\t\tform.removeChild(button1)\n\t\t\tform.removeChild(button2)\n\n\t\t}\n\t})\t\n\n\n\treturn false;\n}\n\n// if(window.location.hash === '#/comprar'){\n// \tform.remove()\t\t\n// \timgn.remove()\n// \tlista.removeChild(li);\n// }else{\n// \tconsole.log(\"IDIOTA\" + window.location.hash)\n// }\n\n//El codigo de arriba es de antes de que funcionaran las rutas, ya no recuerdo cual era\n// el error que no permitia que funcionaran dichas rutas. \n\n// El siguiente paso es migrar la pantalla de inicio a una ruta para que cuando cargue el boton\n// compras, te mande a otra pagina que contenga la informacion del precio, quizá una sinopsis\n// la info del manga en general y una opción para \"finalizar compra\" la cual deduzca del inventario\n// 1 item aunque tambien deberia de tener una opcion que dijera \"cantidad\" alterarlo y alterar el precio\n\n\n//# sourceURL=webpack://PuntoVentaF-main/./src/js/index.js?");

/***/ }),

/***/ "./src/router/index.routes.js":
/*!************************************!*
  !*** ./src/router/index.routes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => /* binding */ router\n/* harmony export */ });\n/* harmony import */ var _controllers_index_controllers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/index.controllers.js */ \"./src/controllers/index.controllers.js\");\n//import comprar from \"../views/comprar\";\r\n\r\n\r\nlet content = document.getElementById('sales');\r\nlet homeScreen = document.getElementById('homeScreen');\r\n\r\nconst router = (route) => {\r\n\r\ncontent.innerHTML = '';\r\n\r\n    switch(route){\r\n        case '#/': {\r\n            return homeScreen.appendChild(_controllers_index_controllers_js__WEBPACK_IMPORTED_MODULE_0__.pages.home())\r\n        }\r\n\r\n        case '#/comprar': {\r\n            return content.appendChild(_controllers_index_controllers_js__WEBPACK_IMPORTED_MODULE_0__.pages.comprar())\r\n        }\r\n        default:\r\n            return console.log(\"404 NOT FOUND\")\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://PuntoVentaF-main/./src/router/index.routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;