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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Restaurant_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Restaurant.gif */ \"./src/Restaurant.gif\");\n/* harmony import */ var _Menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.png */ \"./src/Menu.png\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _reservations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservations.js */ \"./src/reservations.js\");\n/* harmony import */ var _locations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locations.js */ \"./src/locations.js\");\n\n\n\n\n\n\n\n\nconst content = document.getElementById('content');\n\nconst restaurantImageSection = document.createElement('section');\nrestaurantImageSection.innerHTML = `<img src=\"${_Restaurant_gif__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Restaurant\">`;\n\nconst restaurantTextSection =  document.createElement('section');\nrestaurantTextSection.innerHTML = `\n  <h2>Taste of Ba Sing Se</h2>\n  <p>Flavours from all four nations.</p>\n`;\n\nconst restaurantMenuSection = document.createElement('section');\nrestaurantMenuSection.innerHTML = `<img src=\"${_Menu_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Menu\">`;\n\ncontent.appendChild(restaurantImageSection);\ncontent.appendChild(restaurantTextSection);\ncontent.appendChild(restaurantMenuSection);\n\nconst navButtons = Array.from(document.querySelectorAll('button'));\naddNavButtonListeners(navButtons);\n\nfunction addNavButtonListeners(navButtons) {\n  for (let button of navButtons) {\n    button.addEventListener('click', () => {\n      content.innerHTML = \"\";\n      let buttonFunction;\n      switch (button.id) {\n        case \"Menu\":\n          buttonFunction = _menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n          break;\n        case \"Reservations\":\n          buttonFunction = _reservations_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n          break;\n        case \"Locations\":\n          buttonFunction = _locations_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n          break;\n        default:\n          //load Homepage\n      }\n      content.appendChild(buttonFunction());\n    });\n  }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/locations.js":
/*!**************************!*\
  !*** ./src/locations.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst loadLocations = () => {\n  console.log(\"locations\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLocations);\n\n//# sourceURL=webpack://restaurant-page/./src/locations.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Cabbages_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cabbages.png */ \"./src/Cabbages.png\");\n/* harmony import */ var _Iroh_Tea_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Iroh-Tea.png */ \"./src/Iroh-Tea.png\");\n/* harmony import */ var _Sea_Prunes_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sea-Prunes.jpg */ \"./src/Sea-Prunes.jpg\");\n/* harmony import */ var _Cactus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cactus.png */ \"./src/Cactus.png\");\n\n\n\n\n\nconst loadMenu = () => {\n  const menuDisplay = document.createElement('div');\n  menuDisplay.innerHTML = \n    `<img src=\"${_Cabbages_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Cabbages\">\n    <img src=\"${_Iroh_Tea_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Uncle Iroh's Tea\">\n    <img src=\"${_Sea_Prunes_jpg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Water Tribe Sea Prune\">\n    <img src=\"${_Cactus_png__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Cabbages\">`;\n\n    return menuDisplay;\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst loadReservations = () => {\n  console.log(\"locations\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadReservations);\n\n//# sourceURL=webpack://restaurant-page/./src/reservations.js?");

/***/ }),

/***/ "./src/Cabbages.png":
/*!**************************!*\
  !*** ./src/Cabbages.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e3fbb64a6288e484474.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/Cabbages.png?");

/***/ }),

/***/ "./src/Cactus.png":
/*!************************!*\
  !*** ./src/Cactus.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"227629bc3fc8ff246ad0.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/Cactus.png?");

/***/ }),

/***/ "./src/Iroh-Tea.png":
/*!**************************!*\
  !*** ./src/Iroh-Tea.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fbebb48dab6ed81dacc0.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/Iroh-Tea.png?");

/***/ }),

/***/ "./src/Menu.png":
/*!**********************!*\
  !*** ./src/Menu.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6ea31f8d0a15214a55d4.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/Menu.png?");

/***/ }),

/***/ "./src/Restaurant.gif":
/*!****************************!*\
  !*** ./src/Restaurant.gif ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2ea3b2af2cd79cfb5204.gif\";\n\n//# sourceURL=webpack://restaurant-page/./src/Restaurant.gif?");

/***/ }),

/***/ "./src/Sea-Prunes.jpg":
/*!****************************!*\
  !*** ./src/Sea-Prunes.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4ba1fe271682a5b981a5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Sea-Prunes.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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