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

/***/ "./src/assets/fish.jpg":
/*!*****************************!*\
  !*** ./src/assets/fish.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fish.b1cc56be60cf2d8ae02f.jpg\";\n\n//# sourceURL=webpack:///./src/assets/fish.jpg?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n  const content = document.querySelector(\"#content\");\n\n  const loadElement = document.createElement(\"div\");\n\n  const heading = document.createElement(\"h1\");\n  heading.innerText = \"Contact\";\n  loadElement.appendChild(heading);\n\n  const contactText = document.createElement(\"p\");\n  contactText.innerText =\n    \"Here you can contact us and ask anything you like! - pescado.rabioso@gmail.com\";\n  loadElement.appendChild(contactText);\n\n  content.appendChild(loadElement);\n}\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _assets_fish_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/fish.jpg */ \"./src/assets/fish.jpg\");\n\n\nfunction loadHome() {\n  const content = document.querySelector(\"#content\");\n\n  const homeElement = document.createElement(\"div\");\n\n  const heading = document.createElement(\"h1\");\n  heading.innerText = \"Welcome to Pescado Rabioso\";\n  homeElement.appendChild(heading);\n\n  const headingSub = document.createElement(\"h2\");\n  headingSub.innerText = \"Only the freshest fish!\";\n  homeElement.appendChild(headingSub);\n\n  const introText = document.createElement(\"p\");\n  introText.innerText =\n    \"Welcome to the world of crazy fish concoctions, made with only the freshest of ingredients. Choose what you want, classics or new random meals daily - the choice is up to you! \";\n  homeElement.appendChild(introText);\n\n  const image = document.createElement(\"img\");\n  image.src = _assets_fish_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  image.width = \"700\";\n  image.height = \"450\";\n  image.alt = \"fish meal\";\n  homeElement.appendChild(image);\n\n  content.appendChild(homeElement);\n}\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst content = document.querySelector(\"#content\");\nconst buttonHome = document.querySelector(\"#home\");\nconst buttonMenu = document.querySelector(\"#menu\");\nconst buttonContact = document.querySelector(\"#contact\");\n\nbuttonHome.addEventListener(\"click\", () => {\n  content.innerHTML = ``;\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nbuttonMenu.addEventListener(\"click\", () => {\n  content.innerHTML = ``;\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nbuttonContact.addEventListener(\"click\", () => {\n  content.innerHTML = ``;\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  const content = document.querySelector(\"#content\");\n\n  const menuElement = document.createElement(\"div\");\n\n  const heading = document.createElement(\"h1\");\n  heading.innerText = \"Menu\";\n  menuElement.appendChild(heading);\n\n  const menuItem = document.createElement(\"div\");\n  menuItem.innerHTML = `<h1>Menu Item</h1>\n  <p>Our most famous item, un poco de loco fish! Everything you can imagine and more!</p>\n  <h3>300$</h3>`;\n  menuElement.appendChild(menuItem);\n\n  content.appendChild(menuElement);\n}\n\n\n//# sourceURL=webpack:///./src/menu.js?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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