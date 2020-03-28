(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("deck"), require("deck"));
	else if(typeof define === 'function' && define.amd)
		define([, ], factory);
	else if(typeof exports === 'object')
		exports["LabeledGeoJsonLayerLibrary"] = factory(require("deck"), require("deck"));
	else
		root["LabeledGeoJsonLayerLibrary"] = factory(root["deck"], root["deck"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__deck_gl_core__, __WEBPACK_EXTERNAL_MODULE__deck_gl_layers__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: LabeledGeoJsonLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _labeled_geojson_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labeled-geojson-layer */ \"./labeled-geojson-layer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LabeledGeoJsonLayer\", function() { return _labeled_geojson_layer__WEBPACK_IMPORTED_MODULE_0__[\"LabeledGeoJsonLayer\"]; });\n\n\n\n\n//# sourceURL=webpack://LabeledGeoJsonLayerLibrary/./index.js?");

/***/ }),

/***/ "./labeled-geojson-layer.js":
/*!**********************************!*\
  !*** ./labeled-geojson-layer.js ***!
  \**********************************/
/*! exports provided: LabeledGeoJsonLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LabeledGeoJsonLayer\", function() { return LabeledGeoJsonLayer; });\n/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ \"@deck.gl/core\");\n/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/layers */ \"@deck.gl/layers\");\n/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_layers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst defaultProps = {\n  // Inherit all of GeoJsonLayer's props\n  ..._deck_gl_layers__WEBPACK_IMPORTED_MODULE_1__[\"GeoJsonLayer\"].defaultProps,\n  // Label for each feature\n  getLabel: { type: \"accessor\", value: x => x.text },\n  // Label size for each feature\n  getLabelSize: { type: \"accessor\", value: 32 },\n  // Label color for each feature\n  getLabelColor: { type: \"accessor\", value: [0, 0, 0, 255] },\n  // Label always facing the camera\n  billboard: true,\n  // Label size units\n  labelSizeUnits: \"pixels\",\n  // Label background color\n  labelBackground: { type: \"color\", value: null, optional: true },\n  // Label font\n  fontFamily: \"Monaco, monospace\"\n};\n\nclass LabeledGeoJsonLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__[\"CompositeLayer\"] {\n  updateState({ changeFlags }) {\n    const { data } = this.props;\n    if (changeFlags.dataChanged && data) {\n      const labelData = (data.features || data).flatMap((feature, index) => {\n        const labelAnchors = getLabelAnchors(feature);\n        return labelAnchors.map(p =>\n          this.getSubLayerRow({ position: p }, feature, index)\n        );\n      });\n\n      this.setState({ labelData });\n    }\n  }\n  renderLayers() {\n    const {\n      getLabel,\n      getLabelSize,\n      getLabelColor,\n      labelSizeUnits,\n      labelBackground,\n      billboard,\n      fontFamily\n    } = this.props;\n    return [\n      new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_1__[\"GeoJsonLayer\"](this.props, this.getSubLayerProps({ id: \"geojson\" }), {\n        data: this.props.data\n      }),\n      new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_1__[\"TextLayer\"](this.getSubLayerProps({ id: \"text\" }), {\n        data: this.state.labelData,\n        billboard,\n        sizeUnits: labelSizeUnits,\n        backgroundColor: labelBackground,\n        getPosition: d => d.position,\n        getText: this.getSubLayerAccessor(getLabel),\n        getSize: this.getSubLayerAccessor(getLabelSize),\n        getColor: this.getSubLayerAccessor(getLabelColor)\n      })\n    ];\n  }\n}\n\nLabeledGeoJsonLayer.layerName = \"LabeledGeoJsonLayer\";\nLabeledGeoJsonLayer.defaultProps = defaultProps;\n\n\n\n\n//# sourceURL=webpack://LabeledGeoJsonLayerLibrary/./labeled-geojson-layer.js?");

/***/ }),

/***/ "@deck.gl/core":
/*!*********************************************************************!*\
  !*** external {"root":"deck","commonjs":"deck","commonjs2":"deck"} ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deck_gl_core__;\n\n//# sourceURL=webpack://LabeledGeoJsonLayerLibrary/external_%7B%22root%22:%22deck%22,%22commonjs%22:%22deck%22,%22commonjs2%22:%22deck%22%7D?");

/***/ }),

/***/ "@deck.gl/layers":
/*!*********************************************************************!*\
  !*** external {"commonjs":"deck","commonjs2":"deck","root":"deck"} ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deck_gl_layers__;\n\n//# sourceURL=webpack://LabeledGeoJsonLayerLibrary/external_%7B%22commonjs%22:%22deck%22,%22commonjs2%22:%22deck%22,%22root%22:%22deck%22%7D?");

/***/ })

/******/ });
});