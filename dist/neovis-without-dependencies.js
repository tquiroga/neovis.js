(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime-corejs3/core-js-stable/instance/filter"), require("@babel/runtime-corejs3/core-js-stable/instance/for-each"), require("@babel/runtime-corejs3/core-js-stable/instance/map"), require("@babel/runtime-corejs3/core-js-stable/object/define-properties"), require("@babel/runtime-corejs3/core-js-stable/object/define-property"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"), require("@babel/runtime-corejs3/core-js-stable/object/keys"), require("@babel/runtime-corejs3/core-js-stable/object/values"), require("@babel/runtime-corejs3/core-js-stable/promise"), require("@babel/runtime-corejs3/core-js-stable/set-timeout"), require("@babel/runtime-corejs3/core-js/get-iterator"), require("@babel/runtime-corejs3/helpers/asyncToGenerator"), require("@babel/runtime-corejs3/helpers/classCallCheck"), require("@babel/runtime-corejs3/helpers/createClass"), require("@babel/runtime-corejs3/helpers/defineProperty"), require("@babel/runtime-corejs3/helpers/typeof"), require("@babel/runtime-corejs3/regenerator"), require("neo4j-driver"), require("vis/dist/vis-network.min"), require("vis/dist/vis-network.min.css"));
	else if(typeof define === 'function' && define.amd)
		define(["@babel/runtime-corejs3/core-js-stable/instance/filter", "@babel/runtime-corejs3/core-js-stable/instance/for-each", "@babel/runtime-corejs3/core-js-stable/instance/map", "@babel/runtime-corejs3/core-js-stable/object/define-properties", "@babel/runtime-corejs3/core-js-stable/object/define-property", "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor", "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors", "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols", "@babel/runtime-corejs3/core-js-stable/object/keys", "@babel/runtime-corejs3/core-js-stable/object/values", "@babel/runtime-corejs3/core-js-stable/promise", "@babel/runtime-corejs3/core-js-stable/set-timeout", "@babel/runtime-corejs3/core-js/get-iterator", "@babel/runtime-corejs3/helpers/asyncToGenerator", "@babel/runtime-corejs3/helpers/classCallCheck", "@babel/runtime-corejs3/helpers/createClass", "@babel/runtime-corejs3/helpers/defineProperty", "@babel/runtime-corejs3/helpers/typeof", "@babel/runtime-corejs3/regenerator", "neo4j-driver", "vis/dist/vis-network.min", "vis/dist/vis-network.min.css"], factory);
	else if(typeof exports === 'object')
		exports["NeoVis"] = factory(require("@babel/runtime-corejs3/core-js-stable/instance/filter"), require("@babel/runtime-corejs3/core-js-stable/instance/for-each"), require("@babel/runtime-corejs3/core-js-stable/instance/map"), require("@babel/runtime-corejs3/core-js-stable/object/define-properties"), require("@babel/runtime-corejs3/core-js-stable/object/define-property"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"), require("@babel/runtime-corejs3/core-js-stable/object/keys"), require("@babel/runtime-corejs3/core-js-stable/object/values"), require("@babel/runtime-corejs3/core-js-stable/promise"), require("@babel/runtime-corejs3/core-js-stable/set-timeout"), require("@babel/runtime-corejs3/core-js/get-iterator"), require("@babel/runtime-corejs3/helpers/asyncToGenerator"), require("@babel/runtime-corejs3/helpers/classCallCheck"), require("@babel/runtime-corejs3/helpers/createClass"), require("@babel/runtime-corejs3/helpers/defineProperty"), require("@babel/runtime-corejs3/helpers/typeof"), require("@babel/runtime-corejs3/regenerator"), require("neo4j-driver"), require("vis/dist/vis-network.min"), require("vis/dist/vis-network.min.css"));
	else
		root["NeoVis"] = factory(root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_filter__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_for_each__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_map__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_define_properties__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_define_property__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_keys__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_values__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_promise__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_set_timeout__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_get_iterator__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_asyncToGenerator__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_classCallCheck__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_createClass__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_defineProperty__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_typeof__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_regenerator__, __WEBPACK_EXTERNAL_MODULE_neo4j_driver__, __WEBPACK_EXTERNAL_MODULE_vis_dist_vis_network_min__, __WEBPACK_EXTERNAL_MODULE_vis_dist_vis_network_min_css__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/neovis.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/defaults.js":
/*!*************************!*\
  !*** ./src/defaults.js ***!
  \*************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
var defaults = {
  neo4j: {
    initialQuery: "MATCH (n) WHERE exists(n.pagerank)\n                        WITH (n), RAND() AS random\n                        ORDER BY random LIMIT 3000\n                        OPTIONAL MATCH (n)-[r]-(m)\n                        //WITH n,r,m WHERE exists(n.pagerank) AND exists(m.pagerank) AND exists(m.community)\n                        RETURN n, r, m;",
    neo4jUri: 'bolt://localhost:7687',
    neo4jUser: 'neo4j',
    neo4jPassword: 'neo4j',
    encrypted: 'ENCRYPTION_OFF',
    trust: 'TRUST_ALL_CERTIFICATES'
  },
  visjs: {
    interaction: {
      hover: true,
      hoverConnectedEdges: true,
      selectConnectedEdges: false,
      //        multiselect: true,
      multiselect: 'alwaysOn',
      zoomView: false,
      experimental: {}
    },
    physics: {
      barnesHut: {
        damping: 0.1
      }
    },
    nodes: {
      mass: 4,
      shape: 'neo',
      labelHighlightBold: false,
      widthConstraint: {
        maximum: 40
      },
      heightConstraint: {
        maximum: 40
      }
    },
    edges: {
      hoverWidth: 0,
      selectionWidth: 0,
      smooth: {
        type: 'continuous',
        roundness: 0.15
      },
      font: {
        size: 9,
        strokeWidth: 0,
        align: 'top'
      },
      color: {
        inherit: false
      },
      arrows: {
        to: {
          enabled: true,
          type: 'arrow',
          scaleFactor: 0.5
        }
      }
    }
  }
};


/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! exports provided: CompletionEvent, ClickEvent, EventController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionEvent", function() { return CompletionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickEvent", function() { return ClickEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventController", function() { return EventController; });
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ "@babel/runtime-corejs3/core-js/get-iterator");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "@babel/runtime-corejs3/helpers/defineProperty");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "@babel/runtime-corejs3/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "@babel/runtime-corejs3/helpers/createClass");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);




var CompletionEvent = 'completed';
var ClickEvent = 'clicked';
var EventController =
/*#__PURE__*/
function () {
  function EventController() {
    var _this$_handlers;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, EventController);

    this._handlers = (_this$_handlers = {}, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_this$_handlers, CompletionEvent, []), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_this$_handlers, ClickEvent, []), _this$_handlers);
  }
  /**
   *
   * @param {string} eventType - Type of the event to be handled
   * @param {callback} handler - Handler to manage the event
   */


  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EventController, [{
    key: "register",
    value: function register(eventType, handler) {
      if (this._handlers[eventType] === undefined) {
        throw new Error('Unknown event: ' + eventType);
      }

      this._handlers[eventType].push(handler);
    }
    /**
     *
     * @param {string} eventType - Type of the event generated
     * @param {object} values - Values associated to the event
     */

  }, {
    key: "generateEvent",
    value: function generateEvent(eventType, values) {
      // console.log(eventType);
      if (this._handlers[eventType] === undefined) {
        throw new Error('Unknown event: ' + eventType);
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this._handlers[eventType]), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var handler = _step.value;
          handler(values);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return EventController;
}();

/***/ }),

/***/ "./src/neovis.js":
/*!***********************!*\
  !*** ./src/neovis.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NeoVis; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "@babel/runtime-corejs3/core-js-stable/object/define-property");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ "@babel/runtime-corejs3/core-js-stable/object/define-properties");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "@babel/runtime-corejs3/core-js-stable/instance/filter");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "@babel/runtime-corejs3/core-js-stable/object/keys");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ "@babel/runtime-corejs3/core-js-stable/set-timeout");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "@babel/runtime-corejs3/core-js-stable/promise");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/values */ "@babel/runtime-corejs3/core-js-stable/object/values");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "@babel/runtime-corejs3/core-js-stable/instance/map");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "@babel/runtime-corejs3/regenerator");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ "@babel/runtime-corejs3/helpers/typeof");
/* harmony import */ var _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "@babel/runtime-corejs3/core-js-stable/instance/for-each");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ "@babel/runtime-corejs3/core-js/get-iterator");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "@babel/runtime-corejs3/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "@babel/runtime-corejs3/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "@babel/runtime-corejs3/helpers/createClass");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "@babel/runtime-corejs3/helpers/defineProperty");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! neo4j-driver */ "neo4j-driver");
/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(neo4j_driver__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var vis_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vis/dist/vis-network.min */ "vis/dist/vis-network.min");
/* harmony import */ var vis_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(vis_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var vis_dist_vis_network_min_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vis/dist/vis-network.min.css */ "vis/dist/vis-network.min.css");
/* harmony import */ var vis_dist_vis_network_min_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(vis_dist_vis_network_min_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./defaults */ "./src/defaults.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./events */ "./src/events.js");






















function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context6; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_13___default()(_context6 = ownKeys(source, true)).call(_context6, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context7; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_13___default()(_context7 = ownKeys(source)).call(_context7, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







var NeoVis =
/*#__PURE__*/
function () {
  /**
   *
   * @constructor
   * @param {object} config - configures the visualization and Neo4j server connection
   *  {
   *    container:
   *    server_url:
   *    server_password?:
   *    server_username?:
   *    labels:
   *
   *  }
   *
   */
  function NeoVis(config) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16___default()(this, NeoVis);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(this, "_nodes", {});

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(this, "_edges", {});

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(this, "_data", {});

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(this, "_original", {
      nodes: [],
      edges: []
    });

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(this, "_network", null);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(this, "_events", new _events__WEBPACK_IMPORTED_MODULE_23__["EventController"]());

    this._init(config);

    this._consoleLog(config);

    this._consoleLog(_defaults__WEBPACK_IMPORTED_MODULE_22__["defaults"]);
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_17___default()(NeoVis, [{
    key: "_consoleLog",
    value: function _consoleLog(message) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'log';

      if (level !== 'log' || this._config.console_debug) {
        // eslint-disable-next-line no-console
        console[level](message);
      }
    }
  }, {
    key: "_init",
    value: function _init(config) {
      this._config = config;
      this._encrypted = config.encrypted || _defaults__WEBPACK_IMPORTED_MODULE_22__["defaults"].neo4j.encrypted;
      this._trust = config.trust || _defaults__WEBPACK_IMPORTED_MODULE_22__["defaults"].neo4j.trust;
      this._driver = neo4j_driver__WEBPACK_IMPORTED_MODULE_19___default.a.driver(config.server_url || _defaults__WEBPACK_IMPORTED_MODULE_22__["defaults"].neo4j.neo4jUri, neo4j_driver__WEBPACK_IMPORTED_MODULE_19___default.a.auth.basic(config.server_user || _defaults__WEBPACK_IMPORTED_MODULE_22__["defaults"].neo4j.neo4jUser, config.server_password || _defaults__WEBPACK_IMPORTED_MODULE_22__["defaults"].neo4j.neo4jPassword), {
        encrypted: this._encrypted,
        trust: this._trust
      });
      this._query = config.initial_cypher || _defaults__WEBPACK_IMPORTED_MODULE_22__["defaults"].neo4j.initialQuery;
      this._container = document.getElementById(config.container_id);
    }
  }, {
    key: "_addOriginalNode",
    value: function _addOriginalNode(node) {
      this._original.nodes[node.identity.low] = _objectSpread({
        id: node.identity.low,
        labels: node.labels,
        type: 'node'
      }, node.properties);
    }
  }, {
    key: "_addOriginalEdge",
    value: function _addOriginalEdge(edge) {
      this._original.edges[edge.identity.low] = _objectSpread({
        id: edge.identity.low,
        labels: [edge.type],
        type: 'edge'
      }, edge.properties);
    }
  }, {
    key: "_addNode",
    value: function _addNode(node) {
      this._nodes[node.id] = node;
    }
  }, {
    key: "_addEdge",
    value: function _addEdge(edge) {
      this._edges[edge.id] = edge;
    }
    /**
     * Build node object for vis from a neo4j Node
     * FIXME: use config
     * FIXME: move to private api
     * @param neo4jNode
     * @returns {{}}
     */

  }, {
    key: "buildNodeVisObject",
    value: function () {
      var _buildNodeVisObject = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15___default()(
      /*#__PURE__*/
      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_11___default.a.mark(function _callee(neo4jNode) {
        var node, label, labelConfig, captionKey, sizeKey, sizeCypher, communityKey, session, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, record, sizeProp;

        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_11___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                node = {};
                label = neo4jNode.labels[0];
                labelConfig = this._config && this._config.labels && this._config.labels[label];
                captionKey = labelConfig && labelConfig['caption'];
                sizeKey = labelConfig && labelConfig['size'];
                sizeCypher = labelConfig && labelConfig['sizeCypher'];
                communityKey = labelConfig && labelConfig['community'];
                node.id = neo4jNode.identity.toInt(); // node size

                if (!sizeCypher) {
                  _context.next = 34;
                  break;
                }

                // use a cypher statement to determine the size of the node
                // the cypher statement will be passed a parameter {id} with the value
                // of the internal node id
                session = this._driver.session();
                _context.next = 12;
                return session.run(sizeCypher, {
                  id: neo4j_driver__WEBPACK_IMPORTED_MODULE_19___default.a["int"](node.id)
                });

              case 12:
                result = _context.sent;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 16;

                for (_iterator = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14___default()(result.records); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  record = _step.value;

                  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_13___default()(record).call(record, function (v) {
                    if (typeof v === 'number') {
                      node.value = v;
                    } else if (neo4j_driver__WEBPACK_IMPORTED_MODULE_19___default.a.isInt(v)) {
                      node.value = v.toNumber();
                    }
                  });
                }

                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](16);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 24:
                _context.prev = 24;
                _context.prev = 25;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 27:
                _context.prev = 27;

                if (!_didIteratorError) {
                  _context.next = 30;
                  break;
                }

                throw _iteratorError;

              case 30:
                return _context.finish(27);

              case 31:
                return _context.finish(24);

              case 32:
                _context.next = 35;
                break;

              case 34:
                if (typeof sizeKey === 'number') {
                  node.value = sizeKey;
                } else {
                  sizeProp = neo4jNode.properties[sizeKey];

                  if (sizeProp && typeof sizeProp === 'number') {
                    // property value is a number, OK to use
                    node.value = sizeProp;
                  } else if (sizeProp && _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_12___default()(sizeProp) === 'object' && neo4j_driver__WEBPACK_IMPORTED_MODULE_19___default.a.isInt(sizeProp)) {
                    // property value might be a Neo4j Integer, check if we can call toNumber on it:
                    if (sizeProp.inSafeRange()) {
                      node.value = sizeProp.toNumber();
                    } else {
                      // couldn't convert to Number, use default
                      node.value = 1.0;
                    }
                  } else {
                    node.value = 1.0;
                  }
                }

              case 35:
                // node caption
                if (typeof captionKey === 'function') {
                  node.label = captionKey(neo4jNode);
                } else {
                  node.label = neo4jNode.properties[captionKey] || label || '';
                } // community
                // behavior: color by value of community property (if set in config), then color by label


                if (!communityKey) {
                  node.group = label;
                } else {
                  try {
                    if (neo4jNode.properties[communityKey]) {
                      node.group = neo4jNode.properties[communityKey].toNumber() || label || 0; // FIXME: cast to Integer
                    } else {
                      node.group = 0;
                    }
                  } catch (e) {
                    node.group = 0;
                  }
                } // set all properties as tooltip


                node.title = ''; // -- DISABLE tooltip
                // for (let key in neo4jNode.properties) {
                // 	if (neo4jNode.properties.hasOwnProperty(key)) {
                // 		node.title += `<strong>${key}:</strong> ${neo4jNode.properties[key]}<br>`;
                // 	}
                // }

                return _context.abrupt("return", node);

              case 39:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[16, 20, 24, 32], [25,, 27, 31]]);
      }));

      function buildNodeVisObject(_x) {
        return _buildNodeVisObject.apply(this, arguments);
      }

      return buildNodeVisObject;
    }()
    /**
     * Build edge object for vis from a neo4j Relationship
     * @param r
     * @returns {{}}
     */

  }, {
    key: "buildEdgeVisObject",
    value: function buildEdgeVisObject(r) {
      var nodeTypeConfig = this._config && this._config.relationships && this._config.relationships[r.type];
      var weightKey = nodeTypeConfig && nodeTypeConfig.thickness,
          captionKey = nodeTypeConfig && nodeTypeConfig.caption;
      var edge = {};
      edge.id = r.identity.toInt();
      edge.from = r.start.toInt();
      edge.to = r.end.toInt(); // hover tooltip. show all properties in the format <strong>key:</strong> value

      edge.title = ''; // Disable title
      // for (let key in r.properties) {
      // 	if (r.properties.hasOwnProperty(key)) {
      // 		edge['title'] += `<strong>${key}:</strong> ${r.properties[key]}<br>`;
      // 	}
      // }
      // set relationship thickness

      if (weightKey && typeof weightKey === 'string') {
        edge.value = r.properties[weightKey];
      } else if (weightKey && typeof weightKey === 'number') {
        edge.value = weightKey;
      } else {
        edge.value = 1.0;
      } // set caption


      if (typeof captionKey === 'boolean') {
        if (!captionKey) {
          edge.label = '';
        } else {
          edge.label = r.type;
        }
      } else if (captionKey && typeof captionKey === 'string') {
        edge.label = r.properties[captionKey] || '';
      } else {
        edge.label = r.type;
      }

      return edge;
    } // public API

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      // connect to Neo4j instance
      // run query
      var recordCount = 0;

      var session = this._driver.session();

      var dataBuildPromises = [];
      session.run(this._query, {
        limit: 30
      }).subscribe({
        onNext: function onNext(record) {
          var _context2;

          recordCount++;

          _this._consoleLog('CLASS NAME');

          _this._consoleLog(record && record.constructor.name);

          _this._consoleLog(record);

          var dataPromises = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_9___default()(record.toObject())).call(_context2,
          /*#__PURE__*/
          function () {
            var _ref = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15___default()(
            /*#__PURE__*/
            _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_11___default.a.mark(function _callee2(v) {
              var node, edge, startNode, endNode, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, obj, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _obj, _node, _edge;

              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_11___default.a.wrap(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _this._consoleLog('Constructor:');

                      _this._consoleLog(v && v.constructor.name);

                      if (!(v instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_19___default.a.types.Node)) {
                        _context3.next = 10;
                        break;
                      }

                      _this._addOriginalNode(v);

                      _context3.next = 6;
                      return _this.buildNodeVisObject(v);

                    case 6:
                      node = _context3.sent;

                      try {
                        _this._addNode(node);
                      } catch (e) {
                        _this._consoleLog(e, 'error');
                      }

                      _context3.next = 99;
                      break;

                    case 10:
                      if (!(v instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_19___default.a.types.Relationship)) {
                        _context3.next = 16;
                        break;
                      }

                      _this._addOriginalEdge(v);

                      edge = _this.buildEdgeVisObject(v);

                      _this._addEdge(edge);

                      _context3.next = 99;
                      break;

                    case 16:
                      if (!(v instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_19___default.a.types.Path)) {
                        _context3.next = 64;
                        break;
                      }

                      _this._consoleLog('PATH');

                      _this._consoleLog(v);

                      _context3.next = 21;
                      return _this.buildNodeVisObject(v.start);

                    case 21:
                      startNode = _context3.sent;
                      _context3.next = 24;
                      return _this.buildNodeVisObject(v.end);

                    case 24:
                      endNode = _context3.sent;

                      _this._addNode(startNode);

                      _this._addNode(endNode);

                      _iteratorNormalCompletion2 = true;
                      _didIteratorError2 = false;
                      _iteratorError2 = undefined;
                      _context3.prev = 30;
                      _iterator2 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14___default()(v.segments);

                    case 32:
                      if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        _context3.next = 48;
                        break;
                      }

                      obj = _step2.value;
                      _context3.t0 = _this;
                      _context3.next = 37;
                      return _this.buildNodeVisObject(obj.start);

                    case 37:
                      _context3.t1 = _context3.sent;

                      _context3.t0._addNode.call(_context3.t0, _context3.t1);

                      _context3.t2 = _this;
                      _context3.next = 42;
                      return _this.buildNodeVisObject(obj.end);

                    case 42:
                      _context3.t3 = _context3.sent;

                      _context3.t2._addNode.call(_context3.t2, _context3.t3);

                      _this._addEdge(_this.buildEdgeVisObject(obj.relationship));

                    case 45:
                      _iteratorNormalCompletion2 = true;
                      _context3.next = 32;
                      break;

                    case 48:
                      _context3.next = 54;
                      break;

                    case 50:
                      _context3.prev = 50;
                      _context3.t4 = _context3["catch"](30);
                      _didIteratorError2 = true;
                      _iteratorError2 = _context3.t4;

                    case 54:
                      _context3.prev = 54;
                      _context3.prev = 55;

                      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                        _iterator2["return"]();
                      }

                    case 57:
                      _context3.prev = 57;

                      if (!_didIteratorError2) {
                        _context3.next = 60;
                        break;
                      }

                      throw _iteratorError2;

                    case 60:
                      return _context3.finish(57);

                    case 61:
                      return _context3.finish(54);

                    case 62:
                      _context3.next = 99;
                      break;

                    case 64:
                      if (!(v instanceof Array)) {
                        _context3.next = 99;
                        break;
                      }

                      _iteratorNormalCompletion3 = true;
                      _didIteratorError3 = false;
                      _iteratorError3 = undefined;
                      _context3.prev = 68;
                      _iterator3 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_14___default()(v);

                    case 70:
                      if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                        _context3.next = 85;
                        break;
                      }

                      _obj = _step3.value;

                      _this._consoleLog('Array element constructor:');

                      _this._consoleLog(_obj && _obj.constructor.name);

                      if (!(_obj instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_19___default.a.types.Node)) {
                        _context3.next = 81;
                        break;
                      }

                      _context3.next = 77;
                      return _this.buildNodeVisObject(_obj);

                    case 77:
                      _node = _context3.sent;

                      _this._addNode(_node);

                      _context3.next = 82;
                      break;

                    case 81:
                      if (_obj instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_19___default.a.types.Relationship) {
                        _edge = _this.buildEdgeVisObject(_obj);

                        _this._addEdge(_edge);
                      }

                    case 82:
                      _iteratorNormalCompletion3 = true;
                      _context3.next = 70;
                      break;

                    case 85:
                      _context3.next = 91;
                      break;

                    case 87:
                      _context3.prev = 87;
                      _context3.t5 = _context3["catch"](68);
                      _didIteratorError3 = true;
                      _iteratorError3 = _context3.t5;

                    case 91:
                      _context3.prev = 91;
                      _context3.prev = 92;

                      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                        _iterator3["return"]();
                      }

                    case 94:
                      _context3.prev = 94;

                      if (!_didIteratorError3) {
                        _context3.next = 97;
                        break;
                      }

                      throw _iteratorError3;

                    case 97:
                      return _context3.finish(94);

                    case 98:
                      return _context3.finish(91);

                    case 99:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee2, null, [[30, 50, 54, 62], [55,, 57, 61], [68, 87, 91, 99], [92,, 94, 98]]);
            }));

            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          }());

          dataBuildPromises.push(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8___default.a.all(dataPromises));
        },
        onCompleted: function () {
          var _onCompleted = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15___default()(
          /*#__PURE__*/
          _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_11___default.a.mark(function _callee3() {
            var options, container;
            return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_11___default.a.wrap(function _callee3$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8___default.a.all(dataBuildPromises);

                  case 2:
                    session.close();
                    options = {
                      nodes: {
                        shape: 'dot',
                        font: {
                          size: 26,
                          strokeWidth: 7
                        },
                        scaling: {
                          label: {
                            enabled: true
                          }
                        }
                      },
                      edges: {
                        arrows: {
                          to: {
                            enabled: _this._config.arrows || false
                          } // FIXME: handle default value

                        },
                        length: 200
                      },
                      layout: {
                        improvedLayout: false,
                        hierarchical: {
                          enabled: _this._config.hierarchical || false,
                          sortMethod: _this._config.hierarchical_sort_method || 'hubsize'
                        }
                      },
                      physics: {
                        // TODO: adaptive physics settings based on size of graph rendered
                        // enabled: true,
                        // timestep: 0.5,
                        // stabilization: {
                        //     iterations: 10
                        // }
                        adaptiveTimestep: true,
                        // barnesHut: {
                        //     gravitationalConstant: -8000,
                        //     springConstant: 0.04,
                        //     springLength: 95
                        // },
                        stabilization: {
                          iterations: 200,
                          fit: true
                        }
                      }
                    };
                    container = _this._container;
                    _this._data = {
                      nodes: new vis_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_20__["DataSet"](_babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_9___default()(_this._nodes)),
                      edges: new vis_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_20__["DataSet"](_babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_9___default()(_this._edges))
                    };

                    _this._consoleLog(_this._data.nodes);

                    _this._consoleLog(_this._data.edges); // Create duplicate node for any this reference relationships
                    // NOTE: Is this only useful for data model type data
                    // this._data.edges = this._data.edges.map(
                    //     function (item) {
                    //          if (item.from == item.to) {
                    //             const newNode = this._data.nodes.get(item.from)
                    //             delete newNode.id;
                    //             const newNodeIds = this._data.nodes.add(newNode);
                    //             this._consoleLog("Adding new node and changing this-ref to node: " + item.to);
                    //             item.to = newNodeIds[0];
                    //          }
                    //          return item;
                    //     }
                    // );


                    _this._network = new vis_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_20__["Network"](container, _this._data, options);

                    _this._network.on('click', function (_ref2) {
                      var nodes = _ref2.nodes,
                          edges = _ref2.edges;

                      if (edges.length > 0 || nodes.length > 0) {
                        if (!nodes.length && edges.length) {
                          _this._events.generateEvent(_events__WEBPACK_IMPORTED_MODULE_23__["ClickEvent"], _this.toJavascriptTypes(_this._original.edges[edges[0]]));
                        } else {
                          _this._events.generateEvent(_events__WEBPACK_IMPORTED_MODULE_23__["ClickEvent"], _this.toJavascriptTypes(_this._original.nodes[nodes[0]]));
                        }
                      }
                    });

                    _this._consoleLog('completed');

                    _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_7___default()(function () {
                      _this._network.stopSimulation();
                    }, 10000);

                    _this._events.generateEvent(_events__WEBPACK_IMPORTED_MODULE_23__["CompletionEvent"], {
                      record_count: recordCount
                    });

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee3);
          }));

          function onCompleted() {
            return _onCompleted.apply(this, arguments);
          }

          return onCompleted;
        }(),
        onError: function onError(error) {
          _this._consoleLog(error, 'error');
        }
      });
    }
    /**
     * Clear the data for the visualization
     */

  }, {
    key: "clearNetwork",
    value: function clearNetwork() {
      this._nodes = {};
      this._edges = {};

      this._network.setData([]);
    }
    /**
     *
     * @param {string} eventType Event type to be handled
     * @param {callback} handler Handler to manage the event
     */

  }, {
    key: "registerOnEvent",
    value: function registerOnEvent(eventType, handler) {
      this._events.register(eventType, handler);
    }
    /**
     * Reset the config object and reload data
     * @param config
     */

  }, {
    key: "reinit",
    value: function reinit(config) {
      this._init(config);

      this.render();
    }
    /**
     * Fetch live data form the server and reload the visualization
     */

  }, {
    key: "reload",
    value: function reload() {
      this.clearNetwork();
      this.render();
    }
    /**
     * Stabilize the visuzliation
     */

  }, {
    key: "stabilize",
    value: function stabilize() {
      this._network.stopSimulation();

      this._consoleLog('Calling stopSimulation');
    }
    /**
     * Execute an arbitrary Cypher query and re-render the visualization
     * @param query
     */

  }, {
    key: "renderWithCypher",
    value: function renderWithCypher(query) {
      // this._config.initial_cypher = query;
      this.clearNetwork();
      this._query = query;
      this.render();
    }
  }, {
    key: "toJavascriptTypes",
    value: function toJavascriptTypes(obj) {
      var _context5;

      var newObj = {};

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_13___default()(_context5 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(obj)).call(_context5, function (key) {
        if (_babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_12___default()(obj[key]) === 'object') {
          if (obj[key].hasOwnProperty('low')) {
            newObj[key] = obj[key].low;
          }
        } // @TODO match duration format
        // @TODO match time format
        else {
            newObj[key] = obj[key];
          }
      });

      return newObj;
    } // configure exports based on environment (ie Node.js or browser)
    //if (typeof exports === 'object') {
    //    module.exports = NeoVis;
    //} else {
    //    define (function () {return NeoVis;})
    //}

  }]);

  return NeoVis;
}();



/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/filter":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/instance/filter","commonjs2":"@babel/runtime-corejs3/core-js-stable/instance/filter","amd":"@babel/runtime-corejs3/core-js-stable/instance/filter"} ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_filter__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/for-each":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/instance/for-each","commonjs2":"@babel/runtime-corejs3/core-js-stable/instance/for-each","amd":"@babel/runtime-corejs3/core-js-stable/instance/for-each"} ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_for_each__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/map":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/instance/map","commonjs2":"@babel/runtime-corejs3/core-js-stable/instance/map","amd":"@babel/runtime-corejs3/core-js-stable/instance/map"} ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_map__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-properties":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/define-properties","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/define-properties","amd":"@babel/runtime-corejs3/core-js-stable/object/define-properties"} ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_define_properties__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-property":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/define-property","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/define-property","amd":"@babel/runtime-corejs3/core-js-stable/object/define-property"} ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_define_property__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor","amd":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"} ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors","amd":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"} ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols","amd":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"} ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/keys":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/keys","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/keys","amd":"@babel/runtime-corejs3/core-js-stable/object/keys"} ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_keys__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/values":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/values","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/values","amd":"@babel/runtime-corejs3/core-js-stable/object/values"} ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_values__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/promise":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/promise","commonjs2":"@babel/runtime-corejs3/core-js-stable/promise","amd":"@babel/runtime-corejs3/core-js-stable/promise"} ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_promise__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/set-timeout":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/set-timeout","commonjs2":"@babel/runtime-corejs3/core-js-stable/set-timeout","amd":"@babel/runtime-corejs3/core-js-stable/set-timeout"} ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_set_timeout__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js/get-iterator":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js/get-iterator","commonjs2":"@babel/runtime-corejs3/core-js/get-iterator","amd":"@babel/runtime-corejs3/core-js/get-iterator"} ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_get_iterator__;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/asyncToGenerator":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/helpers/asyncToGenerator","commonjs2":"@babel/runtime-corejs3/helpers/asyncToGenerator","amd":"@babel/runtime-corejs3/helpers/asyncToGenerator"} ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_asyncToGenerator__;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/classCallCheck":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/helpers/classCallCheck","commonjs2":"@babel/runtime-corejs3/helpers/classCallCheck","amd":"@babel/runtime-corejs3/helpers/classCallCheck"} ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_classCallCheck__;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/createClass":
/*!**************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/helpers/createClass","commonjs2":"@babel/runtime-corejs3/helpers/createClass","amd":"@babel/runtime-corejs3/helpers/createClass"} ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_createClass__;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/defineProperty":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/helpers/defineProperty","commonjs2":"@babel/runtime-corejs3/helpers/defineProperty","amd":"@babel/runtime-corejs3/helpers/defineProperty"} ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_defineProperty__;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/typeof":
/*!***********************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/helpers/typeof","commonjs2":"@babel/runtime-corejs3/helpers/typeof","amd":"@babel/runtime-corejs3/helpers/typeof"} ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_typeof__;

/***/ }),

/***/ "@babel/runtime-corejs3/regenerator":
/*!**************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/regenerator","commonjs2":"@babel/runtime-corejs3/regenerator","amd":"@babel/runtime-corejs3/regenerator"} ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_regenerator__;

/***/ }),

/***/ "neo4j-driver":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"neo4j-driver","commonjs2":"neo4j-driver","amd":"neo4j-driver"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_neo4j_driver__;

/***/ }),

/***/ "vis/dist/vis-network.min":
/*!********************************************************************************************************************************!*\
  !*** external {"commonjs":"vis/dist/vis-network.min","commonjs2":"vis/dist/vis-network.min","amd":"vis/dist/vis-network.min"} ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vis_dist_vis_network_min__;

/***/ }),

/***/ "vis/dist/vis-network.min.css":
/*!********************************************************************************************************************************************!*\
  !*** external {"commonjs":"vis/dist/vis-network.min.css","commonjs2":"vis/dist/vis-network.min.css","amd":"vis/dist/vis-network.min.css"} ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vis_dist_vis_network_min_css__;

/***/ })

/******/ });
});
//# sourceMappingURL=neovis-without-dependencies.js.map