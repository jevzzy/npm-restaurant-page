/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutUs\": () => (/* binding */ aboutUs)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\r\nfunction aboutUs(){\r\n    _homepage__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = \"\"\r\n /*contact or about us container */   const contactContent = document.createElement(\"div\")\r\n    contactContent.classList.add(\"contact-content\")\r\n    /*div containing frame */  \r\n    const imgframe = document.createElement(\"div\")\r\n    imgframe.classList.add(\"contact-img-frame\")\r\n    /*1st pics */  \r\n    const contactContainer1 = document.createElement(\"div\")\r\n    contactContainer1.classList.add(\"contact-container\")\r\n    const img1 = document.createElement(\"img\")\r\n    img1.src = \"../src/asset/eiliv-aceron-wNQoaYCFcsI-unsplash.jpg\"\r\n    contactContainer1.appendChild(img1)\r\n/*2nd pics */  \r\n    const contactContainer2 = document.createElement(\"div\")\r\n    contactContainer2.classList.add(\"contact-container\")\r\n    const img2 = document.createElement(\"img\")\r\n    img2.src = \"../src/asset/all staff.jpg\"\r\n    contactContainer2.appendChild(img2)\r\n    /*3rd pics */  \r\n    const contactContainer3 = document.createElement(\"div\")\r\n    contactContainer3.classList.add(\"contact-container\")\r\n    const img3 = document.createElement(\"img\")\r\n    img3.src = \"../src/asset/louis-hansel-v3OlBE6-fhU-unsplash.jpg\"\r\n    contactContainer3.appendChild(img3)\r\n    //---------------------------------------------------------\r\n    contactContent.appendChild(imgframe)\r\n    imgframe.appendChild(contactContainer1)\r\n    imgframe.appendChild(contactContainer2)\r\n    imgframe.appendChild(contactContainer3)\r\n    _homepage__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(contactContent)\r\n    //--------------------------------------------------------\r\n    const footer = document.createElement(\"footer\")\r\n    const p1 = document.createElement('p')\r\n    p1.textContent = \"location: 23 erst str washington usa\"\r\n    const p2 = document.createElement('p')\r\n    p2.textContent = \"contact: 434-564-6657\"\r\n    const p3 = document.createElement('p')\r\n    p3.textContent = \"email: guwig@aol.com or gfhytw@gmail.com\"\r\n    footer.appendChild(p1)\r\n    footer.appendChild(p2)\r\n    footer.appendChild(p3)\r\n    contactContent.appendChild(footer)\r\n }\n\n//# sourceURL=webpack://npm-restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n\r\nconst content = document.getElementById(\"content\")\r\nfunction homePage() {\r\n    content.innerHTML = \"\"\r\n    const start = document.createElement(\"h2\")\r\n    start.classList.add(\"welcome\")\r\n    start.textContent = \"Welcome to jevzzy lounge and bar\"\r\n    content.appendChild(start)\r\n    const img = document.createElement(\"img\")\r\n    img.src = \"../src/asset/home page-2.avif\"\r\n    const frame = document.createElement(\"div\")\r\n     frame.classList.add(\"frame\")\r\n     frame.appendChild(img)\r\n     content.appendChild(frame)\r\n        const slogan1 = document.createElement(\"p\")\r\n        slogan1.textContent = \"We are always here to serve you\"\r\n        const slogan2 = document.createElement(\"p\")\r\n        slogan2.textContent = \"A taste you'll remember\"\r\n        const slogan3 = document.createElement(\"p\")\r\n        slogan3.textContent = \"Your culinary adventure awaits\"\r\n        content.appendChild(slogan1)\r\n        content.appendChild(slogan2)\r\n        content.appendChild(slogan3)\r\n       \r\n     \r\n     \r\n    \r\n}\r\nconsole.log(\"HEY HOW\")\r\n\r\n\r\n\n\n//# sourceURL=webpack://npm-restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _homepage_js__WEBPACK_IMPORTED_MODULE_0__.homePage)\r\nconsole.log(\"hello\")\r\nconst tabSwitch = (() => {\r\n  \r\nconst home = document.querySelector('.home')\r\nhome.addEventListener(\"click\", _homepage_js__WEBPACK_IMPORTED_MODULE_0__.homePage )\r\n   \r\n\r\n\r\nconst foodMenu = document.querySelector(\".menu\")\r\nfoodMenu.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)\r\n\r\nconst about = document.querySelector(\".about\")\r\nabout.addEventListener(\"click\",_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutUs )\r\n})()\n\n//# sourceURL=webpack://npm-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\r\n\r\n\r\n\r\nconst menu = () => {\r\n    _homepage__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = \"\";\r\n    const menuContent = document.createElement(\"div\");\r\n    menuContent.classList.add(\"menu-content\");\r\n    //item 1 --------------------------------------------------------\r\n    const menuitem1 = document.createElement(\"div\");\r\n    menuitem1.classList.add(\"item\");\r\n    const item1img = document.createElement(\"img\");\r\n    item1img.src = \"../src/asset/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg\";\r\n    const item1Name = document.createElement(\"h3\");\r\n    item1Name.innerHTML = \"Desert: <span>strawberry-bliss</span>\";\r\n    const item1Prize = document.createElement(\"h4\")\r\n    item1Prize.textContent = \"prize: 14$.00\"\r\n    _homepage__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menuContent)\r\n    menuContent.appendChild(menuitem1)\r\n    menuitem1.appendChild(item1img)\r\n    menuitem1.appendChild(item1Name)\r\n    menuitem1.appendChild(item1Prize)\r\n   \r\n//----------------------------------------------------------------\r\nconst menuitem2 = document.createElement(\"div\");\r\nmenuitem2.classList.add(\"item\");\r\nconst item2img = document.createElement(\"img\");\r\nitem2img.src = \"../src/asset/photo-1515003197210-e0cd71810b5f.avif\" ;\r\nconst item2Name = document.createElement(\"h3\");\r\nitem2Name.innerHTML = \"pasta: <span>spaghetti deluxe</span>\"\r\nconst item2Prize = document.createElement(\"h4\")\r\nitem2Prize.textContent = \"prize: 20$.00\"\r\n_homepage__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menuContent)\r\nmenuContent.appendChild(menuitem2)\r\nmenuitem2.appendChild(item2img)\r\nmenuitem2.appendChild(item2Name)\r\nmenuitem2.appendChild(item2Prize)\r\n//---------------------------------------------------------------------\r\nconst menuitem3 = document.createElement(\"div\");\r\nmenuitem3.classList.add(\"item\");\r\nconst item3img = document.createElement(\"img\");\r\nitem3img.src = \"../src/asset/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg\" ;\r\nconst item3Name = document.createElement(\"h3\");\r\nitem3Name.innerHTML = \"berry dash\"\r\nconst item3Prize = document.createElement(\"h4\")\r\nitem3Prize.textContent = \"prize: 10$.00\"\r\n_homepage__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menuContent)\r\nmenuContent.appendChild(menuitem3)\r\nmenuitem3.appendChild(item3img)\r\nmenuitem3.appendChild(item3Name)\r\nmenuitem3.appendChild(item3Prize)\r\n//---------------------------------------------------------------\r\nconst menuitem4 = document.createElement(\"div\");\r\nmenuitem4.classList.add(\"item\");\r\nconst item4img = document.createElement(\"img\");\r\nitem4img.src = \"../src/asset/menu-food.avif\"  ;\r\nconst item4Name = document.createElement(\"h3\");\r\nitem4Name.innerHTML = \"salad de royal\"\r\nconst item4Prize = document.createElement(\"h4\")\r\nitem4Prize.textContent = \"prize: 25$.00\"\r\n_homepage__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menuContent)\r\nmenuContent.appendChild(menuitem4)\r\nmenuitem4.appendChild(item4img)\r\nmenuitem4.appendChild(item4Name)\r\nmenuitem4.appendChild(item4Prize)\r\n}\n\n//# sourceURL=webpack://npm-restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;