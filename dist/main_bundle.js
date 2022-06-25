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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/logo.svg */ \"./src/images/logo.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  font-family: \\\"Spectral\\\", serif;\\n  font-size: 1rem;\\n  font-weight: 300;\\n  letter-spacing: normal;\\n  line-height: 1.2rem;\\n  color: #fff;\\n  text-transform: normal;\\n  background-color: rgb(91, 90, 90);\\n}\\n\\nheader {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 90%;\\n  margin: 50px auto;\\n  background-color: #000;\\n  padding: 30px;\\n  height: 50px;\\n  position: relative;\\n}\\nheader .header-brand {\\n  font-family: \\\"Karla\\\", sans-serif;\\n  font-size: 1rem;\\n  font-weight: 300;\\n  letter-spacing: normal;\\n  line-height: 1.6rem;\\n  color: #fff;\\n  text-transform: uppercase;\\n  text-decoration: none;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  height: 50px;\\n  width: 110px;\\n}\\nheader .navbar__menu-button {\\n  width: 2rem;\\n  height: 2rem;\\n  background-color: transparent;\\n  border: none;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  cursor: pointer;\\n}\\nheader .navbar__menu-button i {\\n  font-size: 1.5rem;\\n  color: #fff;\\n  transition: color ease-out 250ms;\\n}\\nheader .navbar__menu-button i:hover {\\n  color: #ff3847;\\n}\\n@media (min-width: 600px) {\\n  header .navbar__menu-button {\\n    display: none;\\n  }\\n}\\nheader .header-nav {\\n  display: none;\\n}\\nheader .header-nav ul {\\n  list-style: none;\\n  gap: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n}\\nheader .header-nav ul li {\\n  color: #fff;\\n}\\nheader .header-nav ul li a {\\n  text-decoration: none;\\n  border: 1px solid transparent;\\n  padding: 1px;\\n  font-family: \\\"Karla\\\", sans-serif;\\n  font-size: 1rem;\\n  font-weight: 600;\\n  letter-spacing: normal;\\n  line-height: 1.6rem;\\n  color: #fff;\\n  text-transform: uppercase;\\n}\\nheader .header-nav ul li a:hover {\\n  border-color: #ff3847;\\n  color: #ff3847;\\n}\\n@media (min-width: 600px) {\\n  header .header-nav {\\n    display: flex;\\n  }\\n  header .header-nav ul {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: flex-start;\\n    align-items: flex-start;\\n  }\\n}\\n\\n.movie-sec,\\n.bluRay-sec {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  flex-wrap: wrap;\\n  width: 90%;\\n  margin: auto;\\n  gap: 30px 3%;\\n  justify-content: center;\\n  align-items: flex-end;\\n}\\n.movie-sec .movie-wrapper,\\n.bluRay-sec .movie-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  align-items: center;\\n  gap: 5px;\\n  background-color: #111;\\n}\\n.movie-sec .movie-wrapper .movie-wrapper__img,\\n.bluRay-sec .movie-wrapper .movie-wrapper__img {\\n  width: 250px;\\n}\\n.movie-sec .movie-wrapper .movie-wrapper__title,\\n.bluRay-sec .movie-wrapper .movie-wrapper__title {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 5px;\\n  width: 240px;\\n  height: 48px;\\n  line-height: 1.2;\\n  color: #fff;\\n}\\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes,\\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  align-items: center;\\n  width: 55px;\\n  gap: 3px;\\n  margin-left: 1rem;\\n}\\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i,\\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i {\\n  color: #ff3847;\\n  cursor: pointer;\\n}\\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:hover,\\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:hover {\\n  color: #fd3f3f;\\n  transform: scale(1.2);\\n}\\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:active,\\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:active {\\n  color: #00f4bb;\\n  text-shadow: 0 0 7px #00f4bb;\\n}\\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes span,\\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes span {\\n  font-size: 0.75rem;\\n}\\n.movie-sec .movie-wrapper .movie-wrapper__comment-button,\\n.bluRay-sec .movie-wrapper .movie-wrapper__comment-button {\\n  width: 240px;\\n  border: none;\\n  outline: 1px solid #ff3847;\\n  background-color: transparent;\\n  color: #ff3847;\\n  padding: 0.25rem 0;\\n  cursor: pointer;\\n  transition: background-color ease-out 250ms;\\n  margin-bottom: 5px;\\n}\\n.movie-sec .movie-wrapper .movie-wrapper__comment-button:hover,\\n.bluRay-sec .movie-wrapper .movie-wrapper__comment-button:hover {\\n  background-color: #ff3847;\\n  color: white;\\n}\\n.movie-sec .movie-wrapper .movie-wrapper__comment-button:active,\\n.bluRay-sec .movie-wrapper .movie-wrapper__comment-button:active {\\n  box-shadow: inset 0 0 5px;\\n}\\n\\nfooter {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 90%;\\n  margin: 50px auto 10px;\\n  background-color: #000;\\n  padding: 30px;\\n  height: 50px;\\n  font-family: \\\"Spectral\\\", serif;\\n  font-size: 1rem;\\n  font-weight: 400;\\n  letter-spacing: normal;\\n  line-height: 1.2rem;\\n  color: #fff;\\n  text-transform: normal;\\n}\\n\\n.toggle {\\n  display: none;\\n}\\n\\n.active {\\n  font-style: italic;\\n  font-weight: 900;\\n  padding: 2px;\\n}\\n\\n.about-sec .about-section__container {\\n  border: 5px solid white;\\n  width: 90%;\\n  max-width: 700px;\\n  min-height: 65vh;\\n  padding: 50px;\\n  margin: auto;\\n  text-align: center;\\n}\\n.about-sec .about-section__container h2 {\\n  margin: auto auto 80px;\\n  font-family: \\\"Karla\\\", sans-serif;\\n  font-size: 4rem;\\n  font-weight: bold;\\n  letter-spacing: normal;\\n  line-height: 1;\\n  color: #fff;\\n  text-transform: uppercase;\\n  color: #ff3847;\\n  background-color: white;\\n  border: 1px solid;\\n}\\n.about-sec .about-section__container p {\\n  font-size: 1.2rem;\\n  line-height: 1.7;\\n  color: white;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: \\\"Karla\\\", sans-serif;\\n}\\n\\n.details {\\n  display: flex;\\n  width: 100%;\\n  height: 100vh;\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  background-color: rgba(193, 199, 208, 0.9);\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.inner-details {\\n  width: 100%;\\n  max-width: 90em;\\n  padding: 4em;\\n  height: calc(100% - 3.5em);\\n  max-height: 70em;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: flex-start;\\n  background-color: black;\\n  font-size: 0.8em;\\n  overflow-y: auto;\\n  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.15);\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.movie-wrapper {\\n  transition-property: transform;\\n  transition-duration: 0.1s;\\n  transition-timing-function: ease-in;\\n}\\n\\n.movie-wrapper:hover {\\n  transform: scale(1.1);\\n  cursor: pointer;\\n}\\n\\n.custom {\\n  border: 3px solid black;\\n  width: 300px;\\n  height: 300px;\\n}\\n\\n.cardTitle {\\n  color: black;\\n  font-size: 2.5em;\\n}\\n\\n.summary {\\n  color: white;\\n  font-size: 1.5em;\\n}\\n\\n.innerWrap {\\n  display: flex;\\n  align-items: center;\\n  height: 25em;\\n}\\n\\n.innerWrapDetails {\\n  display: flex;\\n  height: 23em;\\n  flex-direction: column;\\n  padding: 1.5em;\\n  gap: 1em;\\n  align-items: flex-start;\\n  justify-content: flex-start;\\n}\\n\\n.detail-button-container {\\n  width: 100%;\\n  height: 2.5em;\\n  display: flex;\\n  justify-content: flex-end;\\n  z-index: 1;\\n}\\n\\n.commentSection {\\n  width: 100%;\\n}\\n\\n.commentSection > * {\\n  display: block;\\n  margin: 1rem;\\n}\\n\\n.commentSection input {\\n  padding: 0.5em;\\n  font-size: 1.2em;\\n  background-color: black;\\n  color: white;\\n  border: 2px solid white;\\n  width: 95%;\\n}\\n\\n.commentSection button {\\n  border-radius: 5%;\\n  width: 5rem;\\n  height: 20px;\\n  border-style: none;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transition-property: transform;\\n  transition-duration: 0.1s;\\n  transition-timing-function: ease-in;\\n}\\n\\n.commentSection button:hover {\\n  transform: scale(1.1);\\n  cursor: pointer;\\n}\\n\\n.commentsWrapper {\\n  width: 100%;\\n  border: 2px solid white;\\n  /* min-height: 165%; */\\n  padding: 1.5em;\\n  margin-bottom: 1em;\\n}\\n\\n.commentsWrapper h2 {\\n  margin-bottom: 0.5em;\\n}\\n\\n.btn {\\n  border-color: white;\\n  border-radius: 0%;\\n  color: black;\\n  background-color: white;\\n  font-size: larger;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/scss/style.scss?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_consumeTVMazeAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/consumeTVMazeAPI.js */ \"./src/modules/consumeTVMazeAPI.js\");\n/* harmony import */ var _modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/displayMovies.js */ \"./src/modules/displayMovies.js\");\n/* harmony import */ var _modules_allItemsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/allItemsCounter.js */ \"./src/modules/allItemsCounter.js\");\n/* harmony import */ var _modules_detailsDVD_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/detailsDVD.js */ \"./src/modules/detailsDVD.js\");\n/* harmony import */ var _modules_detailsBLU_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/detailsBLU.js */ \"./src/modules/detailsBLU.js\");\n\n\n\n\n\n\n\n\nconst dvdID = 'zggEBXzpFcQqjDxvMhMz';\nconst bluID = 'DiufW768skxheMu2XO3y';\nconst movieLink = document.querySelector('#movie__link');\nconst bluLink = document.querySelector('#blu-ray__link');\nconst aboutLink = document.querySelector('#about__link');\nconst movieSection = document.querySelector('#movie-section');\nconst aboutSection = document.querySelector('#about-section');\nconst bluSection = document.querySelector('#bluRay-section');\nconst dvd = 'action';\nconst bluray = 'girls';\n\nconst homeItems = document.querySelector('.movie-section__items');\n(0,_modules_consumeTVMazeAPI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(0, dvd, 50).then((movieList) => {\n  (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movieList, dvdID, 'movie');\n  (0,_modules_detailsDVD_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(movieList);\n  const all = document.querySelectorAll('#movie-section > .movie-wrapper');\n  (0,_modules_allItemsCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(all, homeItems);\n});\n\nconst bluItems = document.querySelector('.bluRay-section__items');\n(0,_modules_consumeTVMazeAPI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(51, bluray, 25).then((movieList) => {\n  (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movieList, bluID, 'bluRay');\n  (0,_modules_detailsBLU_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(movieList);\n  const all = document.querySelectorAll('#bluRay-section > .movie-wrapper');\n  (0,_modules_allItemsCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(all, bluItems);\n});\n\nmovieLink.addEventListener('click', () => {\n  movieLink.classList.add('active');\n  bluLink.classList.remove('active');\n  aboutLink.classList.remove('active');\n  movieSection.classList.remove('toggle');\n  aboutSection.classList.add('toggle');\n  bluSection.classList.add('toggle');\n});\n\naboutLink.addEventListener('click', () => {\n  movieLink.classList.remove('active');\n  bluLink.classList.remove('active');\n  aboutLink.classList.add('active');\n  movieSection.classList.add('toggle');\n  aboutSection.classList.remove('toggle');\n  bluSection.classList.add('toggle');\n});\n\nbluLink.addEventListener('click', () => {\n  movieLink.classList.remove('active');\n  bluLink.classList.add('active');\n  aboutLink.classList.remove('active');\n  movieSection.classList.add('toggle');\n  aboutSection.classList.add('toggle');\n  bluSection.classList.remove('toggle');\n});\n\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/allItemsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/allItemsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ totalItems)\n/* harmony export */ });\nconst totalItems = (arr, domElement) => {\n  let length = 0;\n  while (arr[length] !== undefined) {\n    length += 1;\n  }\n  domElement.innerHTML = `(${length})`;\n  return length;\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/allItemsCounter.js?");

/***/ }),

/***/ "./src/modules/commentsBLU.js":
/*!************************************!*\
  !*** ./src/modules/commentsBLU.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsBLU = async (i, title, wrapper) => {\n  const id = i;\n  const commentTitle = title;\n  const commentsWrapper = wrapper;\n  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DiufW768skxheMu2XO3y';\n  const connect = await fetch(\n    `${baseURL}/comments?item_id=commentBtn${id}`,\n    {\n      method: 'GET',\n    },\n  );\n  const response = await connect.json();\n  if (connect.status === 200) {\n    commentTitle.innerHTML += `(${response.length})`;\n    for (let i = 0; i < response.length; i += 1) {\n      const entry = document.createElement('p');\n      entry.innerHTML = `${response[i].creation_date}---> ${response[i].username}:  ${response[i].comment}`;\n      commentsWrapper.appendChild(entry);\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsBLU);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/commentsBLU.js?");

/***/ }),

/***/ "./src/modules/commentsDVD.js":
/*!************************************!*\
  !*** ./src/modules/commentsDVD.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsDVD = async (i, title, wrapper) => {\n  const id = i;\n  const commentTitle = title;\n  const commentsWrapper = wrapper;\n  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zggEBXzpFcQqjDxvMhMz';\n  const connect = await fetch(\n    `${baseURL}/comments?item_id=commentBtn${id}`,\n    {\n      method: 'GET',\n    },\n  );\n  const response = await connect.json();\n  if (connect.status === 200) {\n    commentTitle.innerHTML += `(${response.length})`;\n    for (let i = 0; i < response.length; i += 1) {\n      const entry = document.createElement('p');\n      entry.innerHTML = `${response[i].creation_date}---> ${response[i].username}:  ${response[i].comment}`;\n      commentsWrapper.appendChild(entry);\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsDVD);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/commentsDVD.js?");

/***/ }),

/***/ "./src/modules/consumeTVMazeAPI.js":
/*!*****************************************!*\
  !*** ./src/modules/consumeTVMazeAPI.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMovieData)\n/* harmony export */ });\nconst baseURL = ' https://api.tvmaze.com';\n\nconst getMovieData = async (index, query, total) => {\n  const connect = await fetch(`${baseURL}/shows?q=${query}`);\n  const response = await connect.json().then((dataList) => {\n    const shortList = dataList.slice(index, index + total);\n    shortList.map((item) => {\n      const container = {\n        id: item.id,\n        name: item.name,\n        genres: item.genres,\n        image: item.image,\n        end: item.ended,\n        rating: item.rating,\n        summary: item.summary,\n      };\n      return container;\n    });\n    return shortList;\n  });\n  return response;\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/consumeTVMazeAPI.js?");

/***/ }),

/***/ "./src/modules/detailsBLU.js":
/*!***********************************!*\
  !*** ./src/modules/detailsBLU.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendCommentBLU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendCommentBLU.js */ \"./src/modules/sendCommentBLU.js\");\n/* harmony import */ var _commentsBLU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsBLU.js */ \"./src/modules/commentsBLU.js\");\n\n\n\nconst detailsBLU = (movieList) => {\n  const movies = document.getElementsByClassName('movie-wrapper');\n  for (let i = 50; i < movies.length; i += 1) {\n    movies[i].addEventListener('click', () => {\n      const details = document.getElementById('details');\n      const innerdetails = document.getElementById('inner-details');\n      details.classList.remove('hidden');\n      const innerWrapper = document.createElement('div');\n      innerWrapper.classList.add('innerWrap');\n      const innerWrapDetails = document.createElement('div');\n      innerWrapDetails.classList.add('innerWrapDetails');\n      const img = document.createElement('img');\n      img.src = document.getElementById(`img_${i + 4}`).src;\n      const duration = document.createElement('p');\n      duration.innerHTML = `Duration: ${movieList[i - 50].runtime} minutes`;\n      duration.classList.add('summary');\n      const rating = document.createElement('p');\n      rating.classList.add('summary');\n      rating.innerHTML = `Rating: ${movieList[i - 50].rating.average}`;\n      const summary = document.createElement('p');\n      summary.classList.add('summary');\n      summary.innerHTML = movieList[i - 50].summary;\n      const website = document.createElement('a');\n      website.classList.add('summary');\n      website.innerHTML = 'Visit the official website';\n      website.href = movieList[i - 50].officialSite;\n      const closeBtn = document.getElementById('closeBtn');\n      const commentSection = document.createElement('div');\n      commentSection.classList.add('commentSection');\n      const commentsTitle = document.createElement('h3');\n      commentsTitle.style.fontSize = '1.25em';\n      commentsTitle.innerHTML = 'Leave a comment!';\n      const inputName = document.createElement('input');\n      inputName.placeholder = 'Your name here';\n      const inputComment = document.createElement('input');\n      inputComment.placeholder = 'Your insights';\n      const commentBtn = document.createElement('button');\n      commentBtn.id = `commentBtn${i}`;\n      commentBtn.innerHTML = 'Comment';\n      const commentsWrapper = document.createElement('div');\n      commentsWrapper.classList.add('commentsWrapper');\n      const commentTitle = document.createElement('h2');\n      commentTitle.innerHTML = 'Comments';\n      (0,_commentsBLU_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`${i}`, commentTitle, commentsWrapper);\n      innerWrapper.appendChild(img);\n      innerWrapDetails.appendChild(summary);\n      innerWrapDetails.appendChild(duration);\n      innerWrapDetails.appendChild(rating);\n      innerWrapDetails.appendChild(website);\n      innerWrapper.appendChild(innerWrapDetails);\n      innerdetails.appendChild(innerWrapper);\n      innerWrapDetails.appendChild(commentsWrapper);\n      commentsWrapper.appendChild(commentSection);\n      commentSection.appendChild(commentsTitle);\n      commentsWrapper.appendChild(commentTitle);\n      commentSection.appendChild(inputName);\n      commentSection.appendChild(inputComment);\n      commentSection.appendChild(commentBtn);\n      closeBtn.addEventListener('click', () => {\n        details.classList.add('hidden');\n        innerWrapper.remove();\n        commentSection.remove();\n      });\n      commentBtn.addEventListener('click', () => {\n        (0,_sendCommentBLU_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(commentBtn.id, inputName.value, inputComment.value);\n      });\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detailsBLU);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/detailsBLU.js?");

/***/ }),

/***/ "./src/modules/detailsDVD.js":
/*!***********************************!*\
  !*** ./src/modules/detailsDVD.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendCommentDVD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendCommentDVD.js */ \"./src/modules/sendCommentDVD.js\");\n/* harmony import */ var _commentsDVD_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsDVD.js */ \"./src/modules/commentsDVD.js\");\n\n\n\nconst detailsDVD = (movieList) => {\n  const movies = document.getElementsByClassName('movie-wrapper__comment-button');\n  for (let i = 0; i < movies.length; i += 1) {\n    movies[i].addEventListener('click', () => {\n      const details = document.getElementById('details');\n      const innerdetails = document.getElementById('inner-details');\n      details.classList.remove('hidden');\n      const innerWrapper = document.createElement('div');\n      innerWrapper.classList.add('innerWrap');\n      const innerWrapDetails = document.createElement('div');\n      innerWrapDetails.classList.add('innerWrapDetails');\n      const img = document.createElement('img');\n      img.src = document.getElementById(`img_${i + 1}`).src;\n      const duration = document.createElement('p');\n      duration.innerHTML = `Duration: ${movieList[i].runtime} minutes`;\n      duration.classList.add('summary');\n      const rating = document.createElement('p');\n      rating.classList.add('summary');\n      rating.innerHTML = `Rating: ${movieList[i].rating.average}`;\n      const summary = document.createElement('p');\n      summary.classList.add('summary');\n      summary.innerHTML = movieList[i].summary;\n      const website = document.createElement('a');\n      website.classList.add('summary');\n      website.innerHTML = 'Visit the official website';\n      website.href = movieList[i].officialSite;\n      const closeBtn = document.getElementById('closeBtn');\n      const commentSection = document.createElement('div');\n      commentSection.classList.add('commentSection');\n      const commentsTitle = document.createElement('h3');\n      commentsTitle.style.fontSize = '1.25em';\n      commentsTitle.innerHTML = 'Leave a comment!';\n      const inputName = document.createElement('input');\n      inputName.placeholder = 'Your name here';\n      inputName.id = `iN`;\n      const inputComment = document.createElement('input');\n      inputComment.placeholder = 'Your insights';\n      const commentBtn = document.createElement('button');\n      commentBtn.id = `commentBtn${i}`;\n      commentBtn.innerHTML = 'Comment';\n      const commentsWrapper = document.createElement('div');\n      commentsWrapper.classList.add('commentsWrapper');\n      const commentTitle = document.createElement('h2');\n      commentTitle.innerHTML = 'Comments';\n      (0,_commentsDVD_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`${i}`, commentTitle, commentsWrapper);\n      innerWrapper.appendChild(img);\n      innerWrapDetails.appendChild(summary);\n      innerWrapDetails.appendChild(duration);\n      innerWrapDetails.appendChild(rating);\n      innerWrapDetails.appendChild(website);\n      innerWrapper.appendChild(innerWrapDetails);\n      innerdetails.appendChild(innerWrapper);\n      innerWrapDetails.appendChild(commentsWrapper);\n      commentsWrapper.appendChild(commentSection);\n      commentSection.appendChild(commentsTitle);\n      commentsWrapper.appendChild(commentTitle);\n      commentSection.appendChild(inputName);\n      commentSection.appendChild(inputComment);\n      commentSection.appendChild(commentBtn);\n      closeBtn.addEventListener('click', () => {\n        details.classList.add('hidden');\n        innerWrapper.remove();\n        commentSection.remove();\n      });\n      commentBtn.addEventListener('click', () => {\n        (0,_sendCommentDVD_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(commentBtn.id, inputName.value, inputComment.value);\n      });\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detailsDVD);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/detailsDVD.js?");

/***/ }),

/***/ "./src/modules/displayMovies.js":
/*!**************************************!*\
  !*** ./src/modules/displayMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayMovies)\n/* harmony export */ });\n/* harmony import */ var _likeFunctionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeFunctionality.js */ \"./src/modules/likeFunctionality.js\");\n\n\nconst displayMovies = async (movieList, appId, section) => {\n  const movieSection = document.querySelector(`#${section}-section`);\n  movieSection.innerHTML = '';\n  movieList.forEach((item) => {\n    const mainDiv = document.createElement('div');\n    mainDiv.className = 'movie-wrapper';\n    mainDiv.id = `${section}${item.id}`;\n    const details = document.createElement('div');\n    details.className = 'movie-wrapper__title';\n    const img = document.createElement('img');\n    img.className = 'movie-wrapper__img';\n    img.src = item.image.medium;\n    img.id = `img_${item.id}`;\n    const name = document.createElement('h3');\n    name.innerHTML = `${item.name}`;\n    name.id = `name${item.id}`;\n    const likes = document.createElement('div');\n    likes.className = 'movie-wrapper__likes';\n    const span = document.createElement('span');\n    const like = document.createElement('i');\n    like.className = 'fas fa-heart';\n    likes.append(like, span);\n    details.append(name, likes);\n    const commentButton = document.createElement('button');\n    commentButton.type = 'button';\n    commentButton.innerHTML = 'Comments';\n    commentButton.className = 'movie-wrapper__comment-button';\n    mainDiv.append(img, details, commentButton);\n    const reserveButton = document.createElement('button');\n    reserveButton.type = 'button';\n    reserveButton.innerHTML = 'Reservations';\n    reserveButton.className = 'movie-wrapper__comment-button';\n    mainDiv.append(reserveButton);\n    movieSection.appendChild(mainDiv);\n    like.addEventListener('click', () => {\n      (0,_likeFunctionality_js__WEBPACK_IMPORTED_MODULE_0__.setLike)(`${section}${item.id}`, appId);\n      const number = like.parentNode.lastChild.textContent.split(' ');\n      like.parentNode.lastChild.innerHTML = `${Number(number[0]) + 1} likes`;\n    });\n  });\n  (0,_likeFunctionality_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(appId);\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/displayMovies.js?");

/***/ }),

/***/ "./src/modules/likeFunctionality.js":
/*!******************************************!*\
  !*** ./src/modules/likeFunctionality.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLike\": () => (/* binding */ setLike),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n\nconst setLike = async (id, appID) => {\n  const connect = await fetch(`${baseURL}${appID}/likes/`, {\n    method: 'POST',\n    body: JSON.stringify({ item_id: id }),\n    headers: { 'Content-type': 'application/JSON' },\n  });\n  const response = await connect.text();\n  return response;\n};\n\nconst getLike = async (appID) => {\n  const connect = await fetch(`${baseURL}${appID}/likes/`);\n  const response = await connect.json();\n  return response;\n};\n\nconst updateLikes = (appID) => {\n  getLike(appID).then((response) => {\n    response.forEach((element) => {\n      const container = document.querySelector(`#${element.item_id}`);\n      container.children[1].children[1].children[1].innerHTML = `${element.likes} likes`;\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/likeFunctionality.js?");

/***/ }),

/***/ "./src/modules/sendCommentBLU.js":
/*!***************************************!*\
  !*** ./src/modules/sendCommentBLU.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendCommentBLU = async (id, name, comment) => {\n  const commentBtn = document.createElement('button');\n  commentBtn.id = id;\n  const inputName = document.createElement('input');\n  inputName.value = name;\n  const inputComment = document.createElement('input');\n  inputComment.value = comment;\n  if (!inputName.value || !inputComment.value) {\n    alert('Not empty values allowed, please add your name and comment!');\n  } else {\n    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DiufW768skxheMu2XO3y';\n    const connect = await fetch(`${baseURL}/comments/`, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: commentBtn.id,\n        username: inputName.value,\n        comment: inputComment.value,\n      }),\n      headers: { 'Content-type': 'application/JSON' },\n    });\n    await connect.text();\n    window.location.reload();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendCommentBLU);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/sendCommentBLU.js?");

/***/ }),

/***/ "./src/modules/sendCommentDVD.js":
/*!***************************************!*\
  !*** ./src/modules/sendCommentDVD.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendCommentDVD = async (id, name, comment) => {\n  const commentBtn = document.createElement('button');\n  commentBtn.id = id;\n  const inputName = document.createElement('input');\n  inputName.value = name;\n  const inputComment = document.createElement('input');\n  inputComment.value = comment;\n  if (!inputName.value || !inputComment.value) {\n    alert('Not empty values allowed, please add your name and comment!');\n  } else {\n    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zggEBXzpFcQqjDxvMhMz';\n    const connect = await fetch(`${baseURL}/comments/`, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: commentBtn.id,\n        username: inputName.value,\n        comment: inputComment.value,\n      }),\n      headers: { 'Content-type': 'application/JSON' },\n    });\n    await connect.text();\n    window.location.reload();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendCommentDVD);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/sendCommentDVD.js?");

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c7ba6dd8b625c0953052.svg\";\n\n//# sourceURL=webpack://javascript-capstone/./src/images/logo.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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