/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([958,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBackToLoginClick = exports.sendOpenEmailClick = exports.sendInsturctionsClick = exports.sendAliexpressClick = void 0;
const sender_1 = __webpack_require__(21);
const sendButtonClick = (label) => sender_1.sendMetric('auth', 'button-click', label);
const sendAliexpressClick = () => sendButtonClick('aliexpress');
exports.sendAliexpressClick = sendAliexpressClick;
const sendInsturctionsClick = () => sendButtonClick('instructions');
exports.sendInsturctionsClick = sendInsturctionsClick;
const sendOpenEmailClick = () => sendButtonClick('open-email');
exports.sendOpenEmailClick = sendOpenEmailClick;
const sendBackToLoginClick = () => sendButtonClick('back-to-login');
exports.sendBackToLoginClick = sendBackToLoginClick;


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var Button_1 = __webpack_require__(967);
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupSuccess = void 0;
const styled_components_1 = __importStar(__webpack_require__(3));
exports.PopupSuccess = styled_components_1.default.div.withConfig({ displayName: "PopupSuccess", componentId: "sc-dw9hkm" }) `
	margin: 1.75em 0 2em;
	text-align: center;

	${({ type }) => type === 'supportSuccess' &&
    styled_components_1.css `
			margin: 0;
		`}
`;


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const Icon = ({ fill = '#000', superType }) => ({
    arrow: (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "8", viewBox: "0 0 12 8", fill: "#999" },
        react_1.default.createElement("path", { d: "M10.6 0L6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0Z" }))),
    checkmark: (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "10", fill: fill || '#000' },
        react_1.default.createElement("path", { d: "M5 10L0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z" }))),
    close: (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" },
        react_1.default.createElement("path", { fill: "#b4b4b4", stroke: "#fff", strokeWidth: ".5", d: "M19.177 6.587l.177-.177L17.6 4.646l-5.6 5.6-5.6-5.6L4.646 6.4l5.6 5.6-5.6 5.6L6.4 19.354l5.6-5.6 5.6 5.6 1.764-1.764-5.6-5.6 5.413-5.413z" }))),
    eye: (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "#d6d6d6" },
        react_1.default.createElement("path", { d: "M12 4C7 4 2.73 7.1 1 11.5 2.73 15.9 7 19 12 19s9.27-3.1 11-7.5C21.27 7.1 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }))),
    eyeClosed: (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "#d6d6d6" },
        react_1.default.createElement("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.5-1.26 2.7-2.9 3.43-4.75-1.73-4.4-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27L4.74 7c-1.66 1.3-2.96 3-3.74 5 1.73 4.4 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55A2.82 2.82 0 0 0 9 12c0 1.66 1.34 3 3 3a2.82 2.82 0 0 0 .65-.08l1.55 1.55c-.67.33-1.4.53-2.2.53-2.76 0-5-2.24-5-5 0-.8.2-1.53.53-2.2zm4.3-.78L15 12.17V12c0-1.66-1.34-3-3-3l-.17.01z" }))),
    facebook: (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "7", height: "14", fill: "none" },
        react_1.default.createElement("path", { fill: "#fff", d: "M6.736.003L5.057 0C3.17 0 1.952 1.352 1.952 3.445v1.59H.264c-.146 0-.264.128-.264.286V7.62c0 .158.118.285.264.285h1.688v5.808c0 .158.118.286.264.286H4.42c.146 0 .264-.128.264-.286V7.907h1.974c.146 0 .264-.128.264-.285V5.32c0-.076-.028-.148-.077-.202s-.117-.084-.187-.084H4.683V3.687c0-.647.143-.976.922-.976h1.13c.146 0 .264-.128.264-.285V.288C7 .13 6.882.003 6.736.003z" }))),
    google: (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", fill: "none" },
        react_1.default.createElement("path", { fill: "#fff", d: "M13.047 5.798H6.958v2.03h3.715a4.35 4.35 0 0 1-8.498-1.305 4.35 4.35 0 0 1 4.349-4.349c1.2 0 2.303.494 3.092 1.29l1.473-1.6A6.5 6.5 0 0 0 6.523 0C2.92 0 0 2.92 0 6.523s2.92 6.523 6.523 6.523c3.156 0 5.92-2.24 6.523-5.22v-2.03z" }))),
    successAuth: (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "152", height: "121", fill: "none" },
        react_1.default.createElement("path", { fill: "#f2f8ff", fillRule: "evenodd", d: "M57.956 6.87a11.23 11.23 0 0 0-11.229 11.229v.03h-15.33c-6.148 0-11.13 4.984-11.13 11.13s4.984 11.13 11.13 11.13h3.826a17.23 17.23 0 0 0-6.635 6.79h-15.05A13.54 13.54 0 0 0 0 60.721c0 6.376 4.408 11.723 10.343 13.16-4.078 3.014-6.722 7.856-6.722 13.316a16.55 16.55 0 0 0 16.547 16.547h11.578a11.08 11.08 0 0 0-1.579 5.717c0 6.148 4.984 11.132 11.13 11.132h82.116c6.147 0 11.13-4.984 11.13-11.132 0-2.1-.576-4.046-1.58-5.717h1.927a16.55 16.55 0 0 0 16.547-16.547 16.55 16.55 0 0 0-16.547-16.547H124.18a13.65 13.65 0 0 0 1.195-1.26c4.45-3.098 7.362-8.25 7.362-14.084a17.15 17.15 0 0 0-17.148-17.148h-.21c2.68-2.02 4.418-5.22 4.44-8.83h19.83a11.23 11.23 0 0 0 11.229-11.229 11.23 11.23 0 0 0-11.229-11.229H57.956z" }),
        react_1.default.createElement("g", { fill: "#fd6559" },
            react_1.default.createElement("path", { d: "M44.378 98.6c-.123-.073-.162-.232-.088-.355s.235-.162.358-.088l3.375 2.018c.123.073.162.232.088.355s-.235.162-.358.088L44.378 98.6z" }),
            react_1.default.createElement("path", { d: "M44.973 100.946c-.073.123-.032.28.09.354s.284.03.357-.093l2-3.38c.073-.123.032-.282-.09-.354s-.284-.03-.357.092l-2.01 3.38z" })),
        react_1.default.createElement("g", { fillRule: "evenodd" },
            react_1.default.createElement("path", { fill: "#ffba53", d: "M46.208 28.84c0 1.14.924 2.063 2.063 2.063s2.063-.924 2.063-2.063-.924-2.063-2.063-2.063-2.063.924-2.063 2.063zm3.514 0a1.45 1.45 0 1 1-2.901 0 1.45 1.45 0 1 1 2.901 0z" }),
            react_1.default.createElement("path", { fill: "#737373", d: "M116.93 102.104c0 1.14.924 2.063 2.063 2.063s2.064-.923 2.064-2.063-.924-2.063-2.064-2.063-2.063.924-2.063 2.063zm3.514 0a1.45 1.45 0 1 1-2.901 0 1.45 1.45 0 1 1 2.901 0z" }),
            react_1.default.createElement("path", { fill: "#41c300", d: "M29.743 2.476a1.24 1.24 0 0 0 1.238-1.238A1.24 1.24 0 0 0 29.743 0a1.24 1.24 0 0 0-1.238 1.238 1.24 1.24 0 0 0 1.238 1.238z" })),
        react_1.default.createElement("path", { fill: "#41c300", d: "M98.018 23.254c-.188-.104-.255-.34-.15-.527s.344-.255.532-.15l5.166 2.85c.188.104.255.34.15.527s-.344.255-.532.15l-5.166-2.85z" }),
        react_1.default.createElement("path", { fill: "#41c300", d: "M99.03 26.74c-.103.19-.034.424.156.526s.427.032.53-.157l2.84-5.172c.104-.188.034-.424-.156-.526s-.426-.032-.53.157l-2.84 5.172z" }),
        react_1.default.createElement("g", { transform: "translate(41.259 32.091)" },
            react_1.default.createElement("circle", { cx: "35", cy: "35", r: "35", fill: "#cfe1f5" }),
            react_1.default.createElement("mask", { id: "A", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "70", height: "70" },
                react_1.default.createElement("path", { fill: "#fff", d: "M70 35c0 19.33-15.67 35-35 35S0 54.33 0 35 15.67 0 35 0s35 15.67 35 35z" })),
            react_1.default.createElement("g", { mask: "url(#A)" },
                react_1.default.createElement("circle", { cx: "35", cy: "31", r: "35", fill: "#fff" })),
            react_1.default.createElement("g", { strokeWidth: "6" },
                react_1.default.createElement("path", { stroke: "#cfe1f5", d: "M22 36l9.662 10.325L52 27" }),
                react_1.default.createElement("path", { stroke: "#41c300", d: "M20 34l9.662 10.325L50 25" }))))),
    successSupport: (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "222", height: "167", fill: "none" },
        react_1.default.createElement("path", { fill: "#f2f8ff", fillRule: "evenodd", d: "M84.96 0c-9.09 0-16.46 7.37-16.46 16.46v.045h-22.47A16.32 16.32 0 0 0 29.71 32.823a16.32 16.32 0 0 0 16.318 16.318h5.608c-4.102 2.336-7.483 5.793-9.726 9.954H19.846A19.85 19.85 0 0 0 0 78.941c0 9.347 6.462 17.185 15.162 19.3-5.978 4.418-9.855 11.516-9.855 19.52a24.26 24.26 0 0 0 24.256 24.256h16.973c-1.47 2.45-2.314 5.317-2.314 8.382a16.32 16.32 0 0 0 16.318 16.318h120.375a16.32 16.32 0 0 0 16.318-16.318c0-3.065-.844-5.932-2.314-8.382h2.825A24.26 24.26 0 0 0 222 117.751c0-13.396-10.86-24.256-24.256-24.256h-15.707c.622-.578 1.208-1.195 1.753-1.847 6.523-4.54 10.792-12.095 10.792-20.645 0-13.883-11.255-25.138-25.14-25.138h-.305c3.928-2.96 6.477-7.653 6.508-12.943h29.068c9.09 0 16.46-7.37 16.46-16.46S213.805 0 204.714 0H84.96z" }),
        react_1.default.createElement("g", { fill: "#fd6559" },
            react_1.default.createElement("path", { d: "M65.378 125.01c-.123-.074-.162-.233-.088-.355s.235-.162.358-.09l3.375 2.02c.123.073.162.232.088.354s-.235.162-.358.09l-3.375-2.018z" }),
            react_1.default.createElement("path", { d: "M65.973 127.354c-.073.124-.032.282.092.354s.283.03.357-.092l2.01-3.38c.073-.123.032-.28-.09-.353s-.284-.03-.357.092l-2.01 3.38z" })),
        react_1.default.createElement("g", { fillRule: "evenodd" },
            react_1.default.createElement("path", { fill: "#ffba53", d: "M98.208 34.25c0 1.14.924 2.063 2.063 2.063s2.063-.924 2.063-2.063-.923-2.063-2.063-2.063-2.063.924-2.063 2.063zm3.514 0a1.45 1.45 0 1 1-2.901 0 1.45 1.45 0 1 1 2.901 0z" }),
            react_1.default.createElement("path", { fill: "#737373", d: "M160.93 75.513c0 1.14.924 2.063 2.063 2.063s2.064-.924 2.064-2.063-.924-2.063-2.064-2.063-2.063.924-2.063 2.063zm3.514 0a1.45 1.45 0 1 1-2.901 0 1.45 1.45 0 1 1 2.901 0z" }),
            react_1.default.createElement("path", { fill: "#41c300", d: "M17.743 28.885a1.24 1.24 0 0 0 1.238-1.238 1.24 1.24 0 0 0-1.238-1.238 1.24 1.24 0 0 0-1.238 1.238 1.24 1.24 0 0 0 1.238 1.238z" })),
        react_1.default.createElement("path", { fill: "#41c300", d: "M148.018 17.663c-.19-.104-.256-.34-.15-.527s.343-.255.532-.15l5.166 2.85c.188.104.255.34.15.527s-.344.255-.532.15l-5.166-2.85z" }),
        react_1.default.createElement("path", { fill: "#41c300", d: "M149.03 21.148c-.104.19-.034.424.155.526s.427.032.53-.157l2.84-5.172c.104-.19.034-.424-.156-.526s-.426-.032-.53.157l-2.84 5.172z" }),
        react_1.default.createElement("g", { fill: "#dadada" },
            react_1.default.createElement("path", { d: "M141.032 144.96c.007-.215.187-.382.402-.373s.383.19.376.406l-.2 5.898c-.007.215-.188.38-.402.372s-.384-.19-.376-.406l.2-5.897z" }),
            react_1.default.createElement("path", { d: "M138.38 147.44c-.215-.006-.393.162-.398.377s.165.395.38.402l5.898.19c.215.007.393-.162.398-.377s-.165-.395-.38-.402l-5.898-.19z" })),
        react_1.default.createElement("path", { fill: "#c0dbf1", d: "M117.64 107.483L91.517 81.36l21.333-21.333c10.232-10.23 23.293-16.98 37.443-19.374L154.21 40h.653a3.9 3.9 0 0 1 3.918 3.919v.653l-.435 4.136c-2.394 14.15-9.143 27.21-19.156 37.225l-21.55 21.55z" }),
        react_1.default.createElement("path", { fill: "#8daac7", d: "M141.15 68.734l-31.13 31.13 7.62 7.62 21.333-21.334c10.23-10.23 16.762-23.075 19.156-37.224l.87-4.136v-.653c0-1.09-.435-1.96-1.088-2.612-3.266 10.014-8.925 19.374-16.762 27.21z" }),
        react_1.default.createElement("path", { fill: "#ffba54", d: "M118.728 128.164a3.42 3.42 0 0 0-4.789 0c-1.742 1.74-2.83 7.183-3.048 7.4v.218s.218.218.218 0c.218 0 5.442-1.1 7.4-3.048 1.742-1.306 1.742-3.265.218-4.57zm-47.89-47.89a3.42 3.42 0 0 0-4.789 0c-1.742 1.742-2.83 6.966-2.83 7.184v.218s.218.218.218 0c.218 0 5.442-1.088 7.402-3.048 1.523-1.088 1.523-3.048 0-4.354zm15.456 32.435c-3.918-3.918-10.45-3.918-14.367 0-5.442 5.442-8.707 21.334-8.925 21.987 0 .435 0 .653.218.87.435.218.87.218 1.306.218.653-.218 16.544-3.265 21.986-8.925 3.918-3.918 3.918-10.23-.218-14.15z" }),
        react_1.default.createElement("path", { fill: "#5a7387", d: "M119.816 118.367l-6.53-6.53 13.06-13.062v13.062l-6.53 6.53z" }),
        react_1.default.createElement("path", { fill: "#c0dbf1", d: "M124.17 131.43l-8.707-8.708 15.673-15.673c1.09-1.09 2.613-1.742 4.354-1.742 3.483 0 6.095 2.83 6.095 6.095 0 1.742-.653 3.266-1.74 4.354L124.17 131.43z" }),
        react_1.default.createElement("path", { fill: "#8daac7", d: "M139.844 111.4l-15.674 15.674-6.53-6.53-2.177 2.177 8.707 8.707 15.674-15.673c1.088-1.09 1.74-2.613 1.74-4.354 0-.87-.217-1.524-.435-2.177-.218.87-.653 1.524-1.306 2.177z" }),
        react_1.default.createElement("path", { fill: "#5a7387", d: "M80.633 100.952c1.524-1.523 3.265-2.612 5.007-3.047l3.7-1.306 13.062 13.06-1.307 3.7c-.653 1.96-1.74 3.7-3.047 5.006L80.633 100.95zm0-21.768l6.53 6.53 13.062-13.06H87.163l-6.53 6.53z" }),
        react_1.default.createElement("path", { fill: "#c0dbf1", d: "M67.57 74.83l8.707 8.707 15.674-15.673c1.088-1.088 1.742-2.612 1.742-4.354 0-3.265-2.83-6.095-6.095-6.095-1.742 0-3.265.653-4.354 1.74L67.57 74.83z" }),
        react_1.default.createElement("path", { fill: "#8cacc6", d: "M124.17 83.537a8.71 8.71 0 0 0 8.708-8.707 8.71 8.71 0 0 0-8.708-8.707 8.71 8.71 0 0 0-8.707 8.707 8.71 8.71 0 0 0 8.707 8.707z" }),
        react_1.default.createElement("path", { fill: "#ffffff", d: "M124.17 85.714c-6.095 0-10.884-4.79-10.884-10.884s4.79-10.884 10.884-10.884 10.884 4.79 10.884 10.884-4.79 10.884-10.884 10.884zm0-17.415c-3.7 0-6.53 2.83-6.53 6.53s2.83 6.53 6.53 6.53 6.53-2.83 6.53-6.53-2.83-6.53-6.53-6.53z" }),
        react_1.default.createElement("path", { fill: "#5a7387", d: "M120.687 80.5c-.653-1.088-.87-2.177-.87-3.483 0-3.7 2.83-6.53 6.53-6.53 1.306 0 2.394.435 3.483.87-1.306-1.74-3.266-3.048-5.66-3.048-3.7 0-6.53 2.83-6.53 6.53 0 2.394 1.307 4.354 3.048 5.66z" }),
        react_1.default.createElement("path", { fill: "#fd6559", d: "M117.64 107.483l-7.184 7.184a2.1 2.1 0 0 1-3.048 0L84.333 91.592a2.1 2.1 0 0 1 0-3.048l7.184-7.184 26.123 26.122z" }),
        react_1.default.createElement("path", { fill: "#e64c47", d: "M117.64 107.483l-7.184 7.184a2.1 2.1 0 0 1-3.048 0l-5.908-5.908 8.5-8.915 7.64 7.64z" }),
        react_1.default.createElement("path", { fill: "#fd6559", d: "M124.213 131.408l6.465-6.465-8.71-8.71-6.465 6.465 8.71 8.71z" }),
        react_1.default.createElement("path", { fill: "#e64c47", d: "M124.213 131.408l6.465-6.465-2.17-2.17-6.465 6.464 2.17 2.17z" }),
        react_1.default.createElement("path", { fill: "#fd6559", d: "M155.082 40h-.653l-4.136.653c-6.75 1.088-13.06 3.265-19.157 6.313l20.898 20.898c3.048-6.095 5.007-12.408 6.313-19.156L159 44.79v-.653c0-2.395-1.74-4.136-3.918-4.136z" }),
        react_1.default.createElement("path", { fill: "#8daac7", d: "M91.952 63.5L76.28 79.184l-6.53-6.53-2.177 2.177 8.707 8.707 15.674-15.673c1.088-1.088 1.742-2.612 1.742-4.354 0-.87-.218-1.524-.435-2.177-.218.87-.653 1.524-1.306 2.177z" }),
        react_1.default.createElement("path", { fill: "#fd6559", d: "M76.3 83.5l6.465-6.465-8.704-8.704-6.465 6.465L76.3 83.5z" }),
        react_1.default.createElement("path", { fill: "#e64c47", d: "M76.3 83.5l6.465-6.465-2.163-2.163-6.465 6.465L76.3 83.5zm70.292-21.078l5.442 5.442c3.048-6.095 5.007-12.408 6.313-19.156L159 44.8v-.653c0-1.088-.435-1.96-1.088-2.612-2.395 7.4-6.313 14.585-11.32 20.898z" }))),
    vk: (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "10", fill: "none" },
        react_1.default.createElement("path", { fill: "#fff", d: "M17.905 9.03l-.06-.114c-.312-.548-.91-1.22-1.8-2.017l-.02-.018-.01-.01-.01-.01h-.01l-.76-.748c-.194-.243-.238-.5-.13-.74.075-.19.356-.587.843-1.195l.61-.776c1.08-1.4 1.55-2.294 1.406-2.683L17.92.63c-.038-.055-.134-.105-.3-.15s-.356-.053-.6-.023l-2.7.018c-.044-.015-.106-.014-.187.005l-.122.027-.047.023-.037.027c-.03.018-.066.05-.103.096s-.07.1-.094.16a14.72 14.72 0 0 1-1.003 2.053l-.637.98c-.194.277-.356.48-.487.61a3.37 3.37 0 0 1-.356.315c-.106.08-.187.113-.243.1l-.16-.037c-.087-.055-.158-.13-.21-.224s-.09-.213-.108-.356l-.033-.37.005-.438.01-.383.014-.753.024-.643.01-.502c0-.176-.01-.315-.033-.415s-.055-.198-.098-.292-.108-.167-.192-.22A1.1 1.1 0 0 0 9.925.12C9.594.047 9.172.007 8.66.001 7.498-.01 6.75.062 6.42.22a1.26 1.26 0 0 0-.356.274c-.112.134-.128.207-.047.22.375.055.64.186.797.392l.056.1c.044.08.088.22.13.42a4.13 4.13 0 0 1 .084.666c.03.444.03.824 0 1.14l-.09.74a1.45 1.45 0 0 1-.127.429l-.113.2c-.02.024-.034.04-.047.046a.72.72 0 0 1-.253.046c-.088 0-.194-.043-.32-.128s-.255-.202-.39-.35a4.7 4.7 0 0 1-.455-.625c-.17-.268-.344-.584-.525-.95l-.15-.265-.384-.744-.43-.945C3.755.768 3.68.67 3.58.603L3.533.576c-.03-.024-.08-.05-.15-.078S3.243.45 3.168.44L.6.457C.338.457.16.515.066.63L.028.685C.01.716 0 .765 0 .832a.71.71 0 0 0 .056.246L1.28 3.56l1.148 1.925.993 1.378.67.83.258.274.234.22c.15.146.37.32.66.525s.612.405.965.603.764.36 1.232.483a4.37 4.37 0 0 0 1.368.151h1.078c.22-.018.384-.085.497-.2l.037-.046c.025-.036.05-.093.07-.17s.033-.16.033-.25c-.006-.262.014-.497.06-.707s.1-.368.16-.475a1.17 1.17 0 0 1 .201-.269.81.81 0 0 1 .16-.132c.03-.015.056-.026.075-.032.15-.05.326-.002.53.142s.394.32.572.53l.642.707c.25.262.47.456.656.584l.187.1c.125.073.288.14.488.2s.375.076.525.046l2.4-.036c.237 0 .422-.038.553-.114s.21-.16.234-.25a.69.69 0 0 0 .005-.31c-.022-.115-.044-.196-.066-.242z" })))
}[superType] || null);
exports.Icon = Icon;


/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(0));
const actions_1 = __webpack_require__(24);
const background_1 = __webpack_require__(17);
const utils_1 = __webpack_require__(11);
const stores_1 = __webpack_require__(10);
const page_1 = __webpack_require__(959);
const AppLayout_1 = __webpack_require__(54);
window.context = 'auth';
(async () => {
    try {
        await actions_1.SettingsActions.init();
        await actions_1.AccountActions.init();
        const element = window.document.createElement('div');
        window.document.body.appendChild(element);
        utils_1.render(react_1.default.createElement(AppLayout_1.AppLayout, null,
            react_1.default.createElement(page_1.Auth, null)), element);
        chrome.runtime.onMessage.addListener((action, _sender, sendResponse) => {
            if (action.type === 'TAB_OPEN_AUTH') {
                stores_1.webextStore.dispatch(stores_1.sideWidgetUISliceActions.close());
                stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.open());
                sendResponse(true);
            }
            return true;
        });
        await background_1.openAuth();
    }
    catch (e) {
        console.error(e);
    }
})();


/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
var Auth_1 = __webpack_require__(960);
Object.defineProperty(exports, "Auth", { enumerable: true, get: function () { return Auth_1.Auth; } });


/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const react_redux_1 = __webpack_require__(7);
const stores_1 = __webpack_require__(10);
const buttonClick_1 = __webpack_require__(181);
const typePopupOpen_1 = __webpack_require__(80);
const Platforms_1 = __webpack_require__(961);
const Form_1 = __webpack_require__(963);
const AuthWrapper_1 = __webpack_require__(972);
const SocialMediaLogin_1 = __webpack_require__(976);
const SuccessScreen_1 = __webpack_require__(978);
const SupportSuccess_1 = __webpack_require__(979);
const TypeSwitcher_1 = __webpack_require__(980);
const createSettings = (setPopupType, t) => ({
    login: {
        socialMedia: true,
        platforms: true,
        switcher: [
            {
                func: () => {
                    setPopupType('recover1');
                    typePopupOpen_1.passwordRecoveryMetric();
                },
                text: t('auth_forgotPassword')
            },
            {
                func: () => {
                    setPopupType('registration');
                    typePopupOpen_1.signupMetric();
                },
                text: t('auth_register')
            },
            {
                func: () => setPopupType('support'),
                text: t('auth_contactSupport')
            }
        ]
    },
    registration: {
        socialMedia: true,
        switcher: [
            {
                func: () => setPopupType('support'),
                text: t('auth_contactSupport')
            },
            {
                func: () => setPopupType('login'),
                text: t('auth_alreadyHaveAnAccount')
            }
        ]
    },
    activationSuccess: {
        successScreen: true,
        platforms: true,
        activationSuccess: true
    },
    loginSuccess: {
        successScreen: true,
        platforms: true
    },
    recover2Success: {
        successScreen: true
    },
    supportSuccess: {
        supportSuccess: true
    },
    recover1: {
        switcher: [
            {
                func: () => {
                    setPopupType('login');
                    buttonClick_1.sendBackToLoginClick();
                },
                text: t('auth_returnToAuth')
            }
        ]
    }
});
const Auth = () => {
    const { t } = react_i18next_1.useTranslation();
    const { hash } = window.location;
    const superType = hash.includes('support') ? 'support' : 'auth';
    const { authWidgetUI, supportWidgetUI } = react_redux_1.useSelector((state) => ({
        authWidgetUI: state === null || state === void 0 ? void 0 : state.authWidgetUI,
        supportWidgetUI: state === null || state === void 0 ? void 0 : state.supportWidgetUI
    }));
    const { type } = superType === 'auth' ? authWidgetUI : supportWidgetUI;
    const setType = superType === 'auth'
        ? (type) => stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setType(type))
        : (type) => stores_1.webextStore.dispatch(stores_1.supportWidgetUIActions.setType(type));
    const settings = createSettings(setType, t);
    const setting = settings[type] || {};
    const { socialMedia, successScreen, platforms, supportSuccess, switcher, activationSuccess } = setting;
    return (react_1.default.createElement(AuthWrapper_1.AuthWrapper, { type: type },
        socialMedia && react_1.default.createElement(SocialMediaLogin_1.SocialMediaLogin, null),
        react_1.default.createElement(Form_1.Form, { type: type, setPopupType: setType }),
        switcher && react_1.default.createElement(TypeSwitcher_1.TypeSwitcher, { switcher: switcher }),
        successScreen && react_1.default.createElement(SuccessScreen_1.SuccessScreen, { activationSuccess: activationSuccess }),
        supportSuccess && react_1.default.createElement(SupportSuccess_1.SupportSuccess, null),
        platforms && react_1.default.createElement(Platforms_1.Platforms, null)));
};
exports.Auth = Auth;


/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platforms = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const PlatformsLinks_1 = __webpack_require__(332);
const Platforms_styles_1 = __webpack_require__(962);
const Platforms = () => {
    const { t } = react_i18next_1.useTranslation();
    return (react_1.default.createElement(Platforms_styles_1.PopupBottom, null,
        react_1.default.createElement(Platforms_styles_1.PopupBottomText, null, t('auth_platforms')),
        react_1.default.createElement(Platforms_styles_1.PopupPlatforms, null,
            react_1.default.createElement(PlatformsLinks_1.PlatformsLinks, null))));
};
exports.Platforms = Platforms;


/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupPlatforms = exports.PopupBottomText = exports.PopupBottom = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.PopupBottom = styled_components_1.default.div.withConfig({ displayName: "PopupBottom", componentId: "sc-19clsbj" }) `
	align-items: center;
	border-top: 0.125em solid #f4f4f4;
	display: flex;
	justify-content: space-between;
	margin-top: 0.5em;
	padding-top: 0.75em;
`;
exports.PopupBottomText = styled_components_1.default.span.withConfig({ displayName: "PopupBottomText", componentId: "sc-1cx1fdc" }) `
	color: #474747;
	font-size: 0.875em;
	line-height: 1.3em;
`;
exports.PopupPlatforms = styled_components_1.default.div.withConfig({ displayName: "PopupPlatforms", componentId: "sc-60zqro" }) `
	display: flex;
	justify-content: space-between;
	width: 9.35em;
`;


/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var Form_1 = __webpack_require__(964);
Object.defineProperty(exports, "Form", { enumerable: true, get: function () { return Form_1.Form; } });


/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const redux_1 = __webpack_require__(44);
const react_redux_1 = __webpack_require__(7);
const react_i18next_1 = __webpack_require__(8);
const actions_1 = __webpack_require__(24);
const stores_1 = __webpack_require__(10);
const aliradar_1 = __webpack_require__(299);
const buttonClick_1 = __webpack_require__(181);
const error_1 = __webpack_require__(965);
const typePopupOpen_1 = __webpack_require__(80);
const S = __importStar(__webpack_require__(966));
const Button_1 = __webpack_require__(182);
const Checkbox_1 = __webpack_require__(969);
const Input_1 = __webpack_require__(970);
const Select_1 = __webpack_require__(971);
const Email = ({ children, webmailProviderUrl }) => webmailProviderUrl ? (react_1.default.createElement(S.FormLink, { blue: true, href: webmailProviderUrl }, children)) : (react_1.default.createElement(react_1.default.Fragment, null, children));
const providers = {
    'aim.com': 'https://mail.aol.com/',
    'aol.com': 'https://mail.aol.com/',
    'fastmail.com': 'https://www.fastmail.com/',
    'games.com': 'https://mail.aol.com/',
    'gmail.com': 'https://mail.google.com/',
    'hotmail.com': 'https://outlook.com/',
    'icloud.com': 'https://www.icloud.com/#mail',
    'love.com': 'https://mail.aol.com/',
    'mac.com': 'https://www.icloud.com/#mail',
    'mail.com': 'https://www.mail.com/',
    'mail.ru': 'https://mail.ru/',
    'me.com': 'https://www.icloud.com/#mail',
    'outlook.com': 'https://outlook.com/',
    'protonmail.ch': 'https://mail.protonmail.com',
    'protonmail.com': 'https://mail.protonmail.com',
    'rambler.ru': 'https://mail.rambler.ru/',
    'wow.com': 'https://mail.aol.com/',
    'yahoo.com': 'https://mail.yahoo.com/',
    'yandex.com': 'https://mail.yandex.com',
    'ygm.com': 'https://mail.aol.com/',
    'zoho.com': 'https://www.zoho.com/mail/'
};
class _Form extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            checkboxChecked: true,
            checkboxError: false,
            email: '',
            emailError: '',
            message: '',
            messageError: '',
            name: '',
            nameError: '',
            password: '',
            passwordError: '',
            passwordRepeat: '',
            passwordRepeatError: '',
            passwordVisible: false,
            topic: '',
            topicError: false
        };
        this.checkboxClick = () => this.setState((state) => ({
            checkboxChecked: !state.checkboxChecked,
            checkboxError: false
        }));
        this.openWebmail = (event) => {
            var _a;
            event.preventDefault();
            const domain = (_a = this.state.email) === null || _a === void 0 ? void 0 : _a.split('@').pop();
            if (!domain) {
                return;
            }
            window.open(providers[domain], '_blank');
            buttonClick_1.sendOpenEmailClick();
        };
        this.setValue = (role, value) => {
            const obj = {
                [role]: value
            };
            if (role === 'topic' && value) {
                obj.topicError = false;
            }
            this.setState(obj);
        };
        this.emailNotRegistered = () => this.setState({
            emailError: (react_1.default.createElement(react_1.default.Fragment, null,
                this.props.t('auth_emailNotRegistered'),
                ' ',
                react_1.default.createElement("span", { onClick: () => this.props.setPopupType('registration') }, this.props.t('auth_createAccount'))))
        });
        this.emailNotActivated = () => this.setState({
            emailError: (react_1.default.createElement(react_1.default.Fragment, null,
                this.props.t('auth_accountNotActivated'),
                ' ',
                react_1.default.createElement("span", { onClick: () => this.props.setPopupType('registrationSuccess') }, this.props.t('auth_sendActivation'))))
        });
        this.emailAlreadyRegistered = () => this.setState({
            emailError: (react_1.default.createElement(react_1.default.Fragment, null,
                this.props.t('auth_emailRegistered'),
                ' ',
                react_1.default.createElement("span", { onClick: () => this.props.setPopupType('login') }, this.props.t('auth_login?'))))
        });
        this.passwordWrong = () => this.setState({
            passwordError: (react_1.default.createElement(react_i18next_1.Trans, null,
                'Incorrect password. Try again or ',
                react_1.default.createElement("span", { onClick: () => this.props.setPopupType('recover1') }, "recover")))
        });
        this.submit = async (event) => {
            event.preventDefault();
            const { type } = this.props;
            const { name, email, password, topic, message } = this.state;
            const username = name;
            const emailError = this.validate('email', true);
            const messageError = this.validate('message', true);
            const nameError = this.validate('name', true);
            const passwordError = this.validate('password', true);
            const passwordRepeatError = this.validate('passwordRepeat', true);
            if (type === 'registration' && this.state.name === '') {
                error_1.nameEmptyErrorMetric();
            }
            if (type === 'registration' && !this.state.checkboxChecked) {
                this.setState({ checkboxError: true });
                error_1.checkboxErrorMetric();
                return;
            }
            if (type === 'support' && !this.state.topic) {
                this.setState({ topicError: true });
                return;
            }
            if ((type === 'login' && (emailError || passwordError)) ||
                (type === 'recover1' && emailError) ||
                (type === 'recover2' && (passwordError || passwordRepeatError)) ||
                (type === 'registration' && (emailError || nameError || passwordError || passwordRepeatError)) ||
                (type === 'support' && (emailError || messageError))) {
                return;
            }
            if (type === 'login') {
                stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(true));
                const response = await aliradar_1.login({ email, password });
                if (response.ok) {
                    stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(false));
                    const responseJson = await response.json();
                    actions_1.signIn(responseJson);
                    this.props.setPopupType('loginSuccess');
                    typePopupOpen_1.signinSuccessMetric();
                }
                else if (response.status === 404) {
                    stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(false));
                    this.emailNotRegistered();
                    error_1.emailUnregisteredErrorMetric();
                }
                else if (response.status === 403) {
                    stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(false));
                    this.emailNotActivated();
                    error_1.accountInactiveErrorMetric();
                }
                else if (response.status === 401) {
                    stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(false));
                    this.passwordWrong();
                    error_1.passwordWrongErrorMetric();
                }
            }
            if (type === 'registration') {
                stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(true));
                const response = await aliradar_1.register({
                    username,
                    email,
                    password,
                    lang: window.navigator.languages[0] || 'ru'
                });
                if (response.ok) {
                    stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(false));
                    this.props.setPopupType('registrationSuccess');
                    typePopupOpen_1.signupSuccessMetric();
                }
                else if (response.status === 409) {
                    stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(false));
                    this.emailNotActivated();
                    error_1.accountInactiveErrorMetric();
                }
                else if (response.status === 403) {
                    stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(false));
                    this.emailAlreadyRegistered();
                    error_1.emailAlreadyRegisteredErrorMetric();
                }
            }
            if (type === 'recover1') {
                stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(true));
                const response = await aliradar_1.recoverPassword({ email });
                if (response.ok) {
                    stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(false));
                    this.props.setPopupType('recover1Success');
                }
                else {
                    stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.setLoading(false));
                    this.emailNotRegistered();
                }
            }
            if (type === 'support') {
                aliradar_1.sendSupportTicket({
                    username,
                    email,
                    topic,
                    message
                });
                this.props.setPopupType('supportSuccess');
            }
        };
        this.togglePasswordVisibility = () => this.setState({ passwordVisible: !this.state.passwordVisible });
        this.validate = (role, checkForEmptiness) => {
            const { props } = this;
            const { state } = this;
            const key = `${role}Error`;
            if (!state.hasOwnProperty(role) || !state.hasOwnProperty(key))
                return;
            const { type, t } = props;
            const input = state[role];
            /* resources for email validator:
            https://www.regular-expressions.info/email.html
            https://help.returnpath.com/hc/en-us/articles/220560587-What-are-the-rules-for-email-address-syntax-
        */
            const emailValidator = /^[a-z0-9_!?#@&|$+*/%=~(){}<>.,:;'"`\[\]\-\^]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
            let error = '';
            // test variables
            const accountNotActivated = 'na@gmail.com';
            const accountNotRegistered = 'nr@gmail.com';
            const accountExisting = 'ok@gmail.com';
            if (role === 'email' && input === '') {
                error_1.emailEmptyErrorMetric();
            }
            if (role === 'email') {
                if (input !== '') {
                    if (!emailValidator.test(input)) {
                        error = t('auth_enterEmail');
                        error_1.emailNotValidErrorMetric();
                    }
                    if (type !== 'registration' && input === accountNotRegistered) {
                        error = (react_1.default.createElement(react_1.default.Fragment, null,
                            t('auth_emailNotRegistered'),
                            ' ',
                            react_1.default.createElement("span", { onClick: () => props.setPopupType('registration') }, t('auth_createAccount'))));
                    }
                    if (input === accountNotActivated) {
                        error = (react_1.default.createElement(react_1.default.Fragment, null,
                            t('auth_accountNotActivated'),
                            ' ',
                            react_1.default.createElement("span", { onClick: () => props.setPopupType('registrationSuccess') }, t('auth_sendActivation'))));
                    }
                    if (type === 'registration' && input === accountExisting) {
                        error = (react_1.default.createElement(react_1.default.Fragment, null,
                            t('auth_emailRegistered'),
                            " ",
                            react_1.default.createElement("span", { onClick: () => props.setPopupType('login') }, t('auth_login?'))));
                    }
                }
                else if (checkForEmptiness) {
                    if (type === 'login') {
                        error = t('auth_enterEmailOrPress');
                    }
                    if (type === 'registration' || type === 'support') {
                        error = t('auth_enterEmail');
                    }
                    if (type === 'recover1') {
                        error = 'Email';
                    }
                }
            }
            if (role === 'message' && input === '' && checkForEmptiness) {
                error = t('auth_enterMessage');
            }
            if (role === 'name' && input === '' && checkForEmptiness) {
                error = t('auth_enterName');
            }
            if (role === 'password') {
                if (input !== '') {
                    if (type === 'registration' && input.length < 6) {
                        error = t('auth_sixSymbols');
                        error_1.passwordShortErrorMetric();
                    }
                    else if (type === 'login' && state.email === accountExisting && input !== '123456') {
                        error = (react_1.default.createElement(react_i18next_1.Trans, null,
                            'Incorrect password. Try again or ',
                            react_1.default.createElement("span", { onClick: () => props.setPopupType('recover1') }, "recover")));
                    }
                }
                else if (checkForEmptiness) {
                    error = type === 'login' ? t('auth_enterPassword') : t('auth_createPassword');
                    if (type === 'login') {
                        error_1.passwordEmptyErrorMetric();
                    }
                }
            }
            if (role === 'passwordRepeat') {
                if (input !== '') {
                    if (input !== state.password) {
                        error = t('auth_passwordsDontMatch');
                        error_1.passwordNotMatchErrorMetric();
                    }
                }
                else if (checkForEmptiness) {
                    error = t('auth_repeatPassword');
                }
            }
            // @ts-ignore
            this.setState({ [key]: error });
            return error;
        };
    }
    componentDidUpdate(prevProps) {
        const { type } = this.props;
        if (type !== 'recover1Success' && type !== 'registrationSuccess' && type !== prevProps.type) {
            this.setState({
                email: '',
                emailError: ''
            });
            this.validate('name');
            this.validate('password');
            this.validate('passwordRepeat');
        }
    }
    render() {
        var _a;
        const { type, t, className, authWidgetUI } = this.props;
        const { email, password, emailError, passwordError, passwordVisible, passwordRepeatError, passwordRepeat, nameError, name, checkboxChecked, checkboxError, topicError, topic, messageError, message } = this.state;
        const emailSplited = ((_a = email === null || email === void 0 ? void 0 : email.split('@')) === null || _a === void 0 ? void 0 : _a.pop()) || '';
        const webmailProviderUrl = providers[emailSplited];
        return (react_1.default.createElement("form", { className: className },
            type === 'login' && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Input_1.Input, { error: emailError, inputRole: "email", placeholder: "Email", value: email, handleChange: this.setValue, validate: this.validate }),
                react_1.default.createElement(Input_1.Input, { error: passwordError, inputRole: "password", passwordVisible: passwordVisible, placeholder: t('auth_password'), type: "password", value: password, handleChange: this.setValue, togglePasswordVisibility: this.togglePasswordVisibility, validate: this.validate }),
                react_1.default.createElement(S.FormAgreement, null,
                    react_1.default.createElement(S.FormText, null,
                        react_1.default.createElement(react_i18next_1.Trans, null,
                            'By logging in, you agree to ',
                            react_1.default.createElement(S.FormLink, { href: "https://aliradar.com/license.html" }, "AliRadar Terms and Conditions"),
                            ' and accept our ',
                            react_1.default.createElement(S.FormLink, { href: "https://aliradar.com/privacy.html" }, "Privacy Policy")))),
                react_1.default.createElement(S.FormButton, { type: type },
                    react_1.default.createElement(Button_1.Button, { onClick: this.submit, loading: authWidgetUI.loading }, t('auth_login'))))),
            type === 'recover1' && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Input_1.Input, { error: emailError, inputRole: "email", placeholder: "Email", value: email, handleChange: this.setValue, validate: this.validate }),
                react_1.default.createElement(S.FormButton, { type: type },
                    react_1.default.createElement(Button_1.Button, { loading: authWidgetUI.loading, onClick: (e) => {
                            this.submit(e);
                            if (this.state.email) {
                                typePopupOpen_1.passwordRecoverySentMetric();
                            }
                        } }, t('auth_sendRecover'))))),
            type === 'recover1Success' && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(S.FormNotification, null,
                    react_1.default.createElement(react_i18next_1.Trans, null,
                        'Password recovery instructions have been sent to ',
                        react_1.default.createElement(Email, { webmailProviderUrl: webmailProviderUrl }, { email }),
                        ". Open the link in the email.")),
                webmailProviderUrl && (react_1.default.createElement(S.FormButton, { type: type },
                    react_1.default.createElement(Button_1.Button, { onClick: this.openWebmail }, t('auth_goToMail')))))),
            type === 'recover2' && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Input_1.Input, { error: passwordError, inputRole: "password", passwordVisible: passwordVisible, placeholder: t('auth_password'), type: "password", value: password, handleChange: this.setValue, togglePasswordVisibility: this.togglePasswordVisibility, validate: this.validate }),
                react_1.default.createElement(Input_1.Input, { error: passwordRepeatError, inputRole: "passwordRepeat", passwordVisible: passwordVisible, placeholder: t('auth_repeatPassword'), type: "password", value: passwordRepeat, handleChange: this.setValue, togglePasswordVisibility: this.togglePasswordVisibility, validate: this.validate }),
                react_1.default.createElement(S.FormButton, { type: type },
                    react_1.default.createElement(Button_1.Button, { onClick: this.submit }, t('auth_saveNewPassword'))))),
            type === 'registration' && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Input_1.Input, { error: emailError, inputRole: "email", placeholder: "Email", value: email, handleChange: this.setValue, validate: this.validate }),
                react_1.default.createElement(Input_1.Input, { error: nameError, inputRole: "name", placeholder: t('auth_name'), value: name, handleChange: this.setValue, validate: this.validate }),
                react_1.default.createElement(Input_1.Input, { error: passwordError, inputRole: "password", passwordVisible: passwordVisible, placeholder: t('auth_createPassword'), type: "password", value: password, handleChange: this.setValue, togglePasswordVisibility: this.togglePasswordVisibility, validate: this.validate }),
                react_1.default.createElement(Input_1.Input, { error: passwordRepeatError, inputRole: "passwordRepeat", passwordVisible: passwordVisible, placeholder: t('auth_repeatPassword'), type: "password", value: passwordRepeat, handleChange: this.setValue, togglePasswordVisibility: this.togglePasswordVisibility, validate: this.validate }),
                react_1.default.createElement(S.FormAgreement, null,
                    checkboxError && react_1.default.createElement(S.FormAgreementError, null, t('auth_tick')),
                    react_1.default.createElement(S.FormCheckbox, null,
                        react_1.default.createElement(Checkbox_1.Checkbox, { checked: checkboxChecked, error: checkboxError, handleChange: this.checkboxClick })),
                    react_1.default.createElement(S.FormText, null,
                        react_1.default.createElement(react_i18next_1.Trans, null,
                            'I consent to ',
                            react_1.default.createElement(S.FormLink, { href: "https://aliradar.com/privacy.html" }, "processing of my personal data"),
                            ' and agree to the ',
                            react_1.default.createElement(S.FormLink, { href: "https://aliradar.com/license.html" }, "Terms and Conditions of use")))),
                react_1.default.createElement(S.FormButton, { type: type },
                    react_1.default.createElement(Button_1.Button, { onClick: this.submit, loading: authWidgetUI.loading }, t('auth_register'))))),
            type === 'registrationSuccess' && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(S.FormNotification, null,
                    react_1.default.createElement(react_i18next_1.Trans, null,
                        'An activation link has been sent to ',
                        react_1.default.createElement(Email, { webmailProviderUrl: webmailProviderUrl }, { email }),
                        ". Please use it to complete your signup.")),
                webmailProviderUrl && (react_1.default.createElement(S.FormButton, { type: type },
                    react_1.default.createElement(Button_1.Button, { onClick: this.openWebmail }, t('auth_goToMail')))))),
            type === 'support' && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(S.FormColumns, null,
                    react_1.default.createElement(S.FormColumn, null,
                        react_1.default.createElement(Input_1.Input, { error: emailError, inputRole: "email", placeholder: "Email", value: email, handleChange: this.setValue, validate: this.validate }),
                        react_1.default.createElement(Select_1.Select, { data: [
                                t('auth_select0'),
                                t('auth_select1'),
                                t('auth_select2'),
                                t('auth_select3'),
                                t('auth_select4'),
                                t('auth_select5'),
                                t('auth_select6')
                            ], error: topicError, inputRole: "topic", value: topic, handleChange: this.setValue }),
                        react_1.default.createElement(S.FormButton, { type: type, marginTop: true, hide: window.location.hash.includes('support') },
                            react_1.default.createElement(Button_1.Button, { superType: "trans", onClick: () => this.props.setPopupType('login') }, t('auth_returnToAuth')))),
                    react_1.default.createElement(S.FormColumn, null,
                        react_1.default.createElement(Input_1.Input, { error: messageError, inputRole: "message", placeholder: t('auth_message'), value: message, handleChange: this.setValue, validate: this.validate }),
                        react_1.default.createElement(S.FormButton, { type: type, marginTop: true },
                            react_1.default.createElement(Button_1.Button, { onClick: this.submit }, t('auth_send')))))))));
    }
}
const mapStateToProps = (state) => ({
    authWidgetUI: state.authWidgetUI
});
exports.Form = redux_1.compose(react_redux_1.connect(mapStateToProps), react_i18next_1.withTranslation())(_Form);


/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.checkboxErrorMetric = exports.emailAlreadyRegisteredErrorMetric = exports.nameEmptyErrorMetric = exports.passwordNotMatchErrorMetric = exports.passwordShortErrorMetric = exports.passwordWrongErrorMetric = exports.emailUnregisteredErrorMetric = exports.accountInactiveErrorMetric = exports.passwordEmptyErrorMetric = exports.emailEmptyErrorMetric = exports.emailNotValidErrorMetric = exports.socialGlErrorMetric = exports.socialVkErrorMetric = exports.socialfbErrorMetric = void 0;
const sender_1 = __webpack_require__(21);
const sendErrorMetric = (label) => sender_1.sendMetric('auth', 'error', label);
const socialfbErrorMetric = () => sendErrorMetric('social-fb');
exports.socialfbErrorMetric = socialfbErrorMetric;
const socialVkErrorMetric = () => sendErrorMetric('social-vk');
exports.socialVkErrorMetric = socialVkErrorMetric;
const socialGlErrorMetric = () => sendErrorMetric('social-gl');
exports.socialGlErrorMetric = socialGlErrorMetric;
const emailNotValidErrorMetric = () => sendErrorMetric('email-not-valid');
exports.emailNotValidErrorMetric = emailNotValidErrorMetric;
const emailEmptyErrorMetric = () => sendErrorMetric('email-empty');
exports.emailEmptyErrorMetric = emailEmptyErrorMetric;
const passwordEmptyErrorMetric = () => sendErrorMetric('password-empty');
exports.passwordEmptyErrorMetric = passwordEmptyErrorMetric;
const accountInactiveErrorMetric = () => sendErrorMetric('account-inactive');
exports.accountInactiveErrorMetric = accountInactiveErrorMetric;
const emailUnregisteredErrorMetric = () => sendErrorMetric('email-unregistered');
exports.emailUnregisteredErrorMetric = emailUnregisteredErrorMetric;
const passwordWrongErrorMetric = () => sendErrorMetric('password-wrong');
exports.passwordWrongErrorMetric = passwordWrongErrorMetric;
const passwordShortErrorMetric = () => sendErrorMetric('password-short');
exports.passwordShortErrorMetric = passwordShortErrorMetric;
const passwordNotMatchErrorMetric = () => sendErrorMetric('password-not-match');
exports.passwordNotMatchErrorMetric = passwordNotMatchErrorMetric;
const nameEmptyErrorMetric = () => sendErrorMetric('name-empty');
exports.nameEmptyErrorMetric = nameEmptyErrorMetric;
const emailAlreadyRegisteredErrorMetric = () => sendErrorMetric('email-already-registered');
exports.emailAlreadyRegisteredErrorMetric = emailAlreadyRegisteredErrorMetric;
const checkboxErrorMetric = () => sendErrorMetric('checkbox');
exports.checkboxErrorMetric = checkboxErrorMetric;


/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormText = exports.FormNotification = exports.FormLink = exports.FormColumns = exports.FormColumn = exports.FormCheckbox = exports.FormButton = exports.FormAgreementError = exports.FormAgreement = void 0;
const styled_components_1 = __importStar(__webpack_require__(3));
const Link_1 = __webpack_require__(176);
exports.FormAgreement = styled_components_1.default.div.withConfig({ displayName: "FormAgreement", componentId: "sc-1ss10aa" }) `
	align-items: flex-start;
	display: flex;
	font-size: 0.875em;
	line-height: 1.36em;
	margin: 2.15em 0 1.05em;
	position: relative;
`;
exports.FormAgreementError = styled_components_1.default.div.withConfig({ displayName: "FormAgreementError", componentId: "sc-uw23u" }) `
	color: #f00;
	font-size: 14px;
	left: 15px;
	position: absolute;
	top: -1.65em;
`;
exports.FormButton = styled_components_1.default.div.withConfig({ displayName: "FormButton", componentId: "sc-18xkml5" }) `
	${({ hide }) => (hide ? 'display: none;' : '')}
	${({ type }) => type &&
    type.indexOf('recover') > -1 &&
    styled_components_1.css `
			margin-top: 1.9em;
		`}

  ${({ marginTop }) => marginTop && 'margin-top: 1.875em;'}
`;
exports.FormCheckbox = styled_components_1.default.div.withConfig({ displayName: "FormCheckbox", componentId: "sc-1ybsw0l" }) `
	flex-grow: 1;
	margin-right: 0.9em;
`;
exports.FormColumn = styled_components_1.default.div.withConfig({ displayName: "FormColumn", componentId: "sc-9k1jnb" }) `
	width: 48.25%;
`;
exports.FormColumns = styled_components_1.default.div.withConfig({ displayName: "FormColumns", componentId: "sc-1bcm243" }) `
	display: flex;
	justify-content: space-between;
`;
exports.FormLink = styled_components_1.default(Link_1.Link).attrs(() => ({
    target: '_blank'
})).withConfig({ displayName: "FormLink", componentId: "sc-xsz8xi" }) `
	transition: color 0.15s;
	color: inherit !important;
	text-decoration: underline !important;

	:hover {
		color: #4da1ff !important;
		text-decoration: underline !important;
	}

	:active {
		color: #2b7edb !important;
		text-decoration: underline !important;
	}

	${({ blue }) => blue &&
    styled_components_1.css `
			color: #4da1ff;
			text-decoration: none;

			:hover {
				text-decoration: underline;
			}
		`}
`;
exports.FormNotification = styled_components_1.default.div.withConfig({ displayName: "FormNotification", componentId: "sc-1m3cg0e" }) `
	line-height: 1.5em;
	margin: 2em 0;
	text-align: center;
`;
exports.FormText = styled_components_1.default.p.withConfig({ displayName: "FormText", componentId: "sc-wa1j8w" }) `
	color: #474747;
	margin: 0;
`;


/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const Icon_1 = __webpack_require__(82);
const S = __importStar(__webpack_require__(968));
const ButtonIcon = styled_components_1.default.span.withConfig({ displayName: "ButtonIcon", componentId: "sc-12b1y7n" }) `
	margin-right: 0.65em;
`;
const Button = ({ children, className = '', onClick, superType, loading = false }) => (react_1.default.createElement(S.Button, { superType: superType, className: className, onClick: loading ? () => { } : (e) => onClick(e) },
    superType && (react_1.default.createElement(ButtonIcon, null,
        react_1.default.createElement(Icon_1.Icon, { superType: superType }))),
    loading ? 'Loading...' : children));
exports.Button = Button;


/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const styled_components_1 = __importStar(__webpack_require__(3));
exports.Button = styled_components_1.default.button.withConfig({ displayName: "Button", componentId: "sc-dwlj18" }) `
	align-items: center;
	border: none;
	border-radius: 0.25em;
	color: #fff;
	cursor: pointer;
	display: flex;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	font-weight: 600;
	height: 3.3125em;
	justify-content: center;
	letter-spacing: -0.3px;
	line-height: 3.3125em;
	outline: none;
	transition: all 0.3s;
	width: 100%;
	:hover {
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
	}
	${({ superType }) => !superType &&
    styled_components_1.css `
			background: #50a2ff;
			font-weight: 700;
			:hover {
				box-shadow: 2px 2px 10px rgba(80, 162, 255, 0.15), 1px 1px 2px rgba(80, 162, 255, 0.2);
			}
			:active {
				background: #2889f4;
			}
		`}
	${({ superType }) => superType === 'trans' &&
    styled_components_1.css `
			background: transparent;
			box-shadow: 0 0 0 0 transparent !important;
			color: #50a2ff;
			font-weight: 700;
			:hover {
				background: transparent;
				text-decoration: underline;
			}
			:active {
				background: transparent;
				color: #2889f4;
			}
		`}
	${({ superType }) => superType === 'google' &&
    styled_components_1.css `
			background: #df4930;
			:hover {
				background: #f04c31;
			}
			:active {
				background: #d73a20;
			}
		`}
	${({ superType }) => superType === 'facebook' &&
    styled_components_1.css `
			background: #507cc0;
			:hover {
				background: #5788d4;
			}
			:active {
				background: #3f6cb2;
			}
		`}
	${({ superType }) => superType === 'vk' &&
    styled_components_1.css `
			background: #49668d;
			:hover {
				background: #4e73a4;
			}
			:active {
				background: #30517c;
			}
		`}
`;


/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importStar(__webpack_require__(3));
const Icon_1 = __webpack_require__(82);
const Input = styled_components_1.default.input.withConfig({ displayName: "Input", componentId: "sc-h9uqmb" }) `
	appearance: none;
	height: 0;
	margin: 0;
	opacity: 0;
	width: 0;
`;
const CheckboxEl = ({ checked, className, handleChange }) => (react_1.default.createElement("label", { className: className },
    checked && react_1.default.createElement(Icon_1.Icon, { fill: "#fff", superType: "checkmark" }),
    react_1.default.createElement(Input, { checked: checked, type: "checkbox", onChange: handleChange })));
exports.Checkbox = styled_components_1.default(CheckboxEl).withConfig({ displayName: "Checkbox", componentId: "sc-xjlyio" }) `
	align-items: center;
	border: 0.5px solid #6cb1ff;
	border-radius: 2px;
	cursor: pointer;
	display: flex;
	height: 18px;
	justify-content: center;
	text-align: center;
	width: 18px;
	${({ checked }) => checked &&
    styled_components_1.css `
			background: #6cb1ff;
		`}
	${({ error }) => error &&
    styled_components_1.css `
			border-color: #f34423;
		`}
`;


/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const react_1 = __importStar(__webpack_require__(0));
const styled_components_1 = __importStar(__webpack_require__(3));
const Icon_1 = __webpack_require__(82);
const Checkmark = styled_components_1.default.div.withConfig({ displayName: "Checkmark", componentId: "sc-cri4zq" }) `
	margin: 0 1.2em 0 0.5em;
	position: absolute;
	right: ${({ margin }) => (margin ? '30px' : '0')};
`;
const Eye = styled_components_1.default.div.withConfig({ displayName: "Eye", componentId: "sc-2547vb" }) `
	cursor: pointer;
	display: flex;
	margin-right: 0.9em;
	position: absolute;
	right: 0;
`;
const Field = styled_components_1.default.input.withConfig({ displayName: "Field", componentId: "sc-e3mm20" }) `
	background: transparent;
	border: none;
	color: #141414;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	height: 3.3125em;
	letter-spacing: -0.3px;
	line-height: 3.3125em;
	outline: none;
	padding: 0 0.9em;
	width: 100%;

	${({ as }) => as === 'textarea' &&
    styled_components_1.css `
			height: 8.5em;
			line-height: 1.5em;
			padding: 1.1em 0.9em;
			resize: none;
		`}
`;
const Notification = styled_components_1.default.div.withConfig({ displayName: "Notification", componentId: "sc-1has74w" }) `
	color: #474747;
	font-size: 16px;
	left: 15px;
	opacity: 0.8;
	pointer-events: none;
	position: absolute;
	top: 15px;
	transition: all 0.15s;

	${({ error }) => error &&
    styled_components_1.css `
			color: #f00;
			opacity: 1;
		`}

	${({ focused }) => focused &&
    styled_components_1.css `
			color: #6cb1ff;
			opacity: 1;
		`}

  ${({ upper }) => upper &&
    styled_components_1.css `
			font-size: 14px;
			pointer-events: auto;
			top: -23px;
		`}

  span {
		color: #6cb1ff;
		cursor: pointer;

		:hover {
			text-decoration: underline;
		}
	}
`;
const Wrapper = styled_components_1.default.div.withConfig({ displayName: "Wrapper", componentId: "sc-7zo9h2" }) `
	align-items: center;
	background: #fafafa;
	border: 1px solid transparent;
	border-radius: 2px;
	display: flex;
	justify-content: space-between;
	position: relative;
	transition: all 0.15s;

	${({ error }) => error &&
    styled_components_1.css `
			background: #fdf2f2;
			border-color: #f00;
		`}

	${({ focused }) => focused &&
    styled_components_1.css `
			background: #f3f8ff;
			border-color: #6cb1ff;
		`}

  & + & {
		margin-top: 1.875em;
	}
`;
const Input = ({ validate, togglePasswordVisibility, value, type, error, passwordVisible, inputRole, handleChange, placeholder }) => {
    const [eyeWasJustClicked, setEyeWasJustClicked] = react_1.useState(false);
    const [focused, setFocused] = react_1.useState(false);
    const [wasFocused, setWasFocused] = react_1.useState(false);
    const refInput = react_1.createRef();
    const handleBlur = (event) => {
        if (eyeWasJustClicked) {
            setEyeWasJustClicked(false);
            event.target.focus();
        }
        else {
            setFocused(false);
            validate(inputRole);
        }
    };
    const handleEyeClick = () => {
        var _a;
        setEyeWasJustClicked(true);
        togglePasswordVisibility && togglePasswordVisibility();
        (_a = refInput.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const handleFocus = () => {
        setFocused(true);
        setWasFocused(true);
    };
    const hideValue = type === 'password' && !passwordVisible;
    return (react_1.default.createElement(Wrapper, { error: error, focused: focused },
        react_1.default.createElement(Field, { as: inputRole === 'message' ? 'textarea' : 'input', ref: refInput, type: inputRole === 'message' ? null : hideValue ? 'password' : 'text', autoComplete: hideValue ? 'new-password' : inputRole === 'email' ? 'email' : undefined, value: value, onBlur: handleBlur, onChange: (event) => handleChange(inputRole, event.target.value), onFocus: handleFocus }),
        react_1.default.createElement(Notification, { error: error, focused: focused, upper: focused || value.length > 0 || !!error }, error || placeholder),
        inputRole !== 'message' && !focused && value.length > 0 && error === '' && (react_1.default.createElement(Checkmark, { margin: type === 'password' },
            react_1.default.createElement(Icon_1.Icon, { fill: "#58bc5a", superType: "checkmark" }))),
        type === 'password' && (react_1.default.createElement(Eye, { onMouseDown: handleEyeClick },
            react_1.default.createElement(Icon_1.Icon, { superType: passwordVisible ? 'eyeClosed' : 'eye' })))));
};
exports.Input = Input;


/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_custom_scrollbars_1 = __webpack_require__(74);
const styled_components_1 = __importStar(__webpack_require__(3));
const Icon_1 = __webpack_require__(82);
const Arrow = styled_components_1.default.div.withConfig({ displayName: "Arrow", componentId: "sc-yk7iyf" }) `
	align-items: center;
	cursor: pointer;
	display: flex;
	height: 100%;
	justify-content: center;
	position: absolute;
	right: 0;
	top: 0;
	width: 3.2em;
`;
const Field = styled_components_1.default.div.withConfig({ displayName: "Field", componentId: "sc-1wo19r8" }) `
	background: transparent;
	border: none;
	color: #50a2ff;
	cursor: pointer;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	height: 3.3125em;
	letter-spacing: -0.3px;
	line-height: 3.3125em;
	outline: none;
	overflow: hidden;
	padding: 0 0.9em;
	white-space: nowrap;
	width: calc(100% - 3.2em);
`;
const Option = styled_components_1.default.div.withConfig({ displayName: "Option", componentId: "sc-13ar9xw" }) `
	background: #fafafa;
	color: #323232;
	cursor: pointer;
	height: 3.3125em;
	line-height: 3.3125em;
	padding: 0 0.9em;
	transition: background 0.15s;
	white-space: nowrap;
	${({ selected }) => selected &&
    styled_components_1.css `
			background: #eee;
		`}
	:hover {
		background: #eee;
	}
`;
const Options = styled_components_1.default.div.withConfig({ displayName: "Options", componentId: "sc-okd4sd" }) `
	height: ${({ optionsHeight }) => optionsHeight}px;
	min-width: 100%;
	position: absolute;
	top: 100%;
	${({ opened }) => opened
    ? ''
    : `
    visibility: hidden;
  `}
`;
const Wrapper = styled_components_1.default.div.withConfig({ displayName: "Wrapper", componentId: "sc-cvg00t" }) `
	align-items: center;
	background: #fafafa;
	border: 0.5px solid transparent;
	border-radius: 2px;
	display: flex;
	justify-content: space-between;
	margin-top: 1.875em;
	position: relative;
	transition: all 0.15s;

	${({ error, opened }) => error &&
    !opened &&
    styled_components_1.css `
			background: #fdf2f2;
			border-color: #f00;

			${Field} {
				color: #f00;
			}
		`}
`;
class Select extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            optionsHeight: 0
        };
        this.optionsRef = react_1.default.createRef();
        this.close = this.close.bind(this);
        this.select = this.select.bind(this);
        this.toggle = this.toggle.bind(this);
        this.setOptionsHeight = this.setOptionsHeight.bind(this);
    }
    close() {
        this.setState({
            opened: false
        });
    }
    select(event) {
        const { props } = this;
        this.close();
        props.handleChange(props.inputRole, event.target.textContent);
    }
    toggle() {
        this.setState((state) => ({
            opened: !state.opened
        }));
    }
    componentDidMount() {
        this.setOptionsHeight();
        window.addEventListener('resize', this.setOptionsHeight);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.setOptionsHeight);
    }
    setOptionsHeight() {
        const $options = this.optionsRef.current;
        this.setState({
            optionsHeight: $options ? window.innerHeight - $options.getBoundingClientRect().top - 10 : 'auto'
        });
    }
    render() {
        const { props } = this;
        const { state } = this;
        const { error, data, value } = props;
        const { opened } = state;
        return (react_1.default.createElement(Wrapper, { error: error, opened: opened },
            react_1.default.createElement(Field, { onClick: this.toggle }, value || data[0]),
            react_1.default.createElement(Options, { opened: opened, optionsHeight: this.state.optionsHeight, ref: this.optionsRef },
                react_1.default.createElement(react_custom_scrollbars_1.Scrollbars, { renderView: ({ style, ...props }) => (react_1.default.createElement("div", Object.assign({}, props, { style: {
                            ...style,
                            height: '100%',
                            marginBottom: 0,
                            overflowX: 'hidden',
                            position: 'static'
                        } }))) }, data.slice(1).map((option, index) => (react_1.default.createElement(Option, { key: index, selected: option === value, onClick: this.select }, option))))),
            react_1.default.createElement(Arrow, { onClick: this.toggle },
                react_1.default.createElement(Icon_1.Icon, { superType: "arrow" }))));
    }
}
exports.Select = Select;


/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthWrapper = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const PopupSubtitle_1 = __webpack_require__(973);
const PopupTitle_1 = __webpack_require__(974);
const S = __importStar(__webpack_require__(975));
const clicker = {
    state: 0,
    onMouseDown: (e) => {
        if (e.target === e.currentTarget) {
            clicker.state = 1;
        }
        else {
            clicker.state = 0;
        }
    },
    onMouseUp: (e, handleClose) => {
        if (clicker.state === 1 && e.target === e.currentTarget) {
            handleClose();
        }
        clicker.state = 0;
    }
};
const AuthWrapper = ({ children, type }) => (react_1.default.createElement(S.AuthWrapper, { onMouseDown: (e) => clicker.onMouseDown(e) },
    react_1.default.createElement(S.Window, { onClick: (e) => e.stopPropagation(), type: type },
        react_1.default.createElement(PopupTitle_1.PopupTitle, { type: type }),
        react_1.default.createElement(PopupSubtitle_1.PopupSubitle, { type: type }),
        children)));
exports.AuthWrapper = AuthWrapper;


/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupSubitle = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const styled_components_1 = __importStar(__webpack_require__(3));
const PopupSubitle = ({ type }) => {
    const { t } = react_i18next_1.useTranslation();
    const key = `auth_${type}_subtitle`;
    const subtitle = t(key);
    return subtitle !== key ? react_1.default.createElement(H3, { type: type }, subtitle) : null;
};
exports.PopupSubitle = PopupSubitle;
const H3 = styled_components_1.default.h3.withConfig({ displayName: "H3", componentId: "sc-1fdsnc0" }) `
	font-size: 1em;
	font-weight: 400;
	line-height: 1.3em;
	margin: 0.7em 0 2.2em;
	text-align: center;
	white-space: pre-line;

	${({ type }) => type === 'support' &&
    styled_components_1.css `
			line-height: 1.5em;
			text-align: left;
		`}

	${({ type }) => type === 'supportSuccess' &&
    styled_components_1.css `
			line-height: 1.5em;
		`}
`;


/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupTitle = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const styled_components_1 = __importStar(__webpack_require__(3));
const PopupTitle = ({ type }) => {
    const { t } = react_i18next_1.useTranslation();
    const key = `auth_${type}_title`;
    const title = t(key);
    return title !== key ? react_1.default.createElement(H2, { type: type }, title) : null;
};
exports.PopupTitle = PopupTitle;
const H2 = styled_components_1.default.h2.withConfig({ displayName: "H2", componentId: "sc-1jsm3ve" }) `
	font-size: 1.125em;
	font-weight: 600;
	line-height: 1em;
	margin: 0;
	text-align: center;

	${({ type }) => type === 'support' &&
    styled_components_1.css `
			border-bottom: 0.125em solid #f4f4f4;
			margin: 0 -1.9445em;
			padding: 0 1.9445em 0.65em;
			text-align: left;
		`}
`;


/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Window = exports.AuthWrapper = void 0;
const styled_components_1 = __importStar(__webpack_require__(3));
exports.AuthWrapper = styled_components_1.default.div.withConfig({ displayName: "AuthWrapper", componentId: "sc-blyuc5" }) `
	align-items: center;
	background: rgba(255, 255, 255, 0.9);
	color: #1b1b1b;
	display: flex;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	height: 100%;
	justify-content: center;
	left: 0;
	letter-spacing: -0.3px;
	position: fixed;
	top: 0;
	transition: opacity 0.15s;
	width: 100%;
	z-index: 10000;

	&,
	& *,
	& *::before,
	& *::after {
		box-sizing: border-box;
	}
`;
exports.Window = styled_components_1.default.div.withConfig({ displayName: "Window", componentId: "sc-wv4ce6" }) `
	background: #fff;
	border-radius: 0.375em;
	box-shadow: 0.625em 0.625em 1.875em rgba(0, 0, 0, 0.07), 0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);
	padding: 3em 2.1875em 2.14em;
	position: relative;
	width: 29.375em;

	${({ type }) => type === 'support' &&
    styled_components_1.css `
			padding-top: 1em;
			width: 54em;
		`}

	${({ type }) => type === 'supportSuccess' &&
    styled_components_1.css `
			width: 54em;
		`}
`;


/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialMediaLogin = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const styled_components_1 = __importDefault(__webpack_require__(3));
const utils_1 = __webpack_require__(11);
const Button_1 = __webpack_require__(182);
const Separator_1 = __webpack_require__(977);
const serializeOptions = (object) => utils_1.serialize(object, { separator: ',' });
const vkLoginInit = () => {
    const baseUrl = 'https://oauth.vk.com/authorize';
    const query = {
        state: 'vk',
        client_id: '6165737',
        redirect_uri: 'https://aliradar.com/redirect',
        response_type: 'token',
        scope: 'offline',
        display: 'popup',
        v: '5.68'
    };
    const url = `${baseUrl}?${utils_1.serialize(query)}`;
    const width = 655;
    const height = 430;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    window.open(url, undefined, serializeOptions({
        width,
        height,
        left,
        top
    }));
};
const fbLoginInit = () => {
    const baseUrl = 'https://www.facebook.com/v2.10/dialog/oauth';
    const query = {
        state: 'fb',
        client_id: '555465414792780',
        redirect_uri: 'https://aliradar.com/redirect',
        response_type: 'token'
    };
    const width = 700;
    const height = 610;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    window.open(`${baseUrl}?${utils_1.serialize(query)}`, undefined, serializeOptions({
        width,
        height,
        left,
        top
    }));
};
const googleLoginInit = () => {
    const baseUrl = 'https://accounts.google.com/o/oauth2/auth';
    const query = {
        state: 'google',
        client_id: '1003200969809-hoek3n7h34pp2uqgpmm9sikfi6iihdd9.apps.googleusercontent.com',
        redirect_uri: 'https://aliradar.com/redirect',
        response_type: 'id_token token',
        scope: 'https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email'
    };
    const width = 515;
    const height = 560;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    window.open(`${baseUrl}?${utils_1.serialize(query)}`, undefined, serializeOptions({
        width,
        height,
        left,
        top
    }));
};
const SocialMediaLogin = () => {
    const { t } = react_i18next_1.useTranslation();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PopupSocialButtons, null,
            react_1.default.createElement(PopupSocialButton, null,
                react_1.default.createElement(Button_1.Button, { onClick: () => googleLoginInit(), superType: "google" }, "Google")),
            react_1.default.createElement(PopupSocialButton, null,
                react_1.default.createElement(Button_1.Button, { onClick: () => fbLoginInit(), superType: "facebook" }, "Facebook")),
            react_1.default.createElement(PopupSocialButton, null,
                react_1.default.createElement(Button_1.Button, { onClick: () => vkLoginInit(), superType: "vk" }, t('auth_vk')))),
        react_1.default.createElement(PopupSeparator, null,
            react_1.default.createElement(Separator_1.Separator, null, t('auth_or')))));
};
exports.SocialMediaLogin = SocialMediaLogin;
const PopupSeparator = styled_components_1.default.div.withConfig({ displayName: "PopupSeparator", componentId: "sc-1d24ndw" }) `
	margin-bottom: 2.2em;
`;
const PopupSocialButton = styled_components_1.default.div.withConfig({ displayName: "PopupSocialButton", componentId: "sc-3lcssk" }) `
	width: 32%;
`;
const PopupSocialButtons = styled_components_1.default.div.withConfig({ displayName: "PopupSocialButtons", componentId: "sc-1i3fm4b" }) `
	display: flex;
	justify-content: space-between;
	margin: 2em 0 0.55em;
`;


/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.Separator = styled_components_1.default.div.withConfig({ displayName: "Separator", componentId: "sc-3dto8" }) `
	align-items: center;
	display: flex;
	font-size: 1.125em;
	font-weight: 600;
	line-height: 1em;

	::before,
	::after {
		background: #f4f4f4;
		content: '';
		height: 0.125em;
		margin-top: 0.25em;
		width: 100%;
	}

	::before {
		margin-right: 0.5em;
	}

	::after {
		margin-left: 0.5em;
	}
`;


/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessScreen = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const styled_components_1 = __importDefault(__webpack_require__(3));
const stores_1 = __webpack_require__(10);
const buttonClick_1 = __webpack_require__(181);
const Button_1 = __webpack_require__(182);
const Icon_1 = __webpack_require__(82);
const PopupSuccess_1 = __webpack_require__(355);
const changeLink = async (changeHref) => {
    const newHref = 'https://aliradar.com/boarding.html';
    changeHref(newHref);
};
const SuccessScreen = ({ activationSuccess }) => {
    const { t } = react_i18next_1.useTranslation();
    const goToAliexpress = () => {
        if (window.location.host.indexOf('aliexpress.') > -1 || window.location.host.indexOf('tmall.ru') > -1) {
            stores_1.webextStore.dispatch(stores_1.authWidgetUIActions.close());
        }
        else {
            window.location.href = 'https://aliexpress.com';
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PopupSuccess_1.PopupSuccess, null,
            react_1.default.createElement(PopupSuccessImage, null,
                react_1.default.createElement(Icon_1.Icon, { superType: "successAuth" })),
            activationSuccess && react_1.default.createElement("p", null, t('auth_activationSuccess')),
            react_1.default.createElement(PopupInstructionLink, { href: "https://aliradar.com/boarding.html", target: "_blank", onClick: buttonClick_1.sendInsturctionsClick }, t('auth_goToInstructions'))),
        react_1.default.createElement(StyledButton, { onClick: () => {
                goToAliexpress();
                buttonClick_1.sendAliexpressClick();
            } }, t('auth_goToAliexpress'))));
};
exports.SuccessScreen = SuccessScreen;
const PopupInstructionLink = styled_components_1.default.a.withConfig({ displayName: "PopupInstructionLink", componentId: "sc-cpkh7o" }) `
	color: #50a2ff !important;
	font-weight: 700;
	text-decoration: none;
`;
const PopupSuccessImage = styled_components_1.default.div.withConfig({ displayName: "PopupSuccessImage", componentId: "sc-1xsdztk" }) `
	margin-bottom: 1.6em;
`;
const StyledButton = styled_components_1.default(Button_1.Button).withConfig({ displayName: "StyledButton", componentId: "sc-jkdmfc" }) `
	margin-bottom: 1.5em;
`;


/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportSuccess = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const Icon_1 = __webpack_require__(82);
const PopupSuccess_1 = __webpack_require__(355);
const SupportSuccess = ({ type }) => (react_1.default.createElement(PopupSuccess_1.PopupSuccess, { type: type },
    react_1.default.createElement(Icon_1.Icon, { superType: "successSupport" })));
exports.SupportSuccess = SupportSuccess;


/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSwitcher = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const TypeSwitcher = ({ switcher }) => (react_1.default.createElement(PopupTypeSwitchers, { singleChild: switcher.length === 1 }, switcher.map(({ func, text }, index) => (react_1.default.createElement(PopupTypeSwitcher, { key: index, onClick: () => func() }, text)))));
exports.TypeSwitcher = TypeSwitcher;
const PopupTypeSwitcher = styled_components_1.default.button.withConfig({ displayName: "PopupTypeSwitcher", componentId: "sc-121n7cc" }) `
	background: transparent;
	border: none;
	color: #50a2ff;
	cursor: pointer;
	font-family: 'Open Sans', sans-serif;
	font-size: 0.875em;
	font-weight: 600;
	line-height: 2em;
	outline: none;
	padding: 0;
	transition: color 0.3s;
	:hover {
		text-decoration: underline;
	}
	:active {
		color: #2889f4;
	}
`;
const PopupTypeSwitchers = styled_components_1.default.div.withConfig({ displayName: "PopupTypeSwitchers", componentId: "sc-u2cvqb" }) `
	display: flex;
	flex-wrap: wrap;
	justify-content: ${({ singleChild }) => (singleChild ? 'center' : 'space-between')};
	margin-top: 0.7em;
`;


/***/ })

/******/ });