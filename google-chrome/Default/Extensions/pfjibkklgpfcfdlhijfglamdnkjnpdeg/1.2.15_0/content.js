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
/******/ 		3: 0
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
/******/ 	deferredModules.push([375,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsOpenedMetric = void 0;
const sender_1 = __webpack_require__(21);
const settingsOpenedMetric = (from) => sender_1.sendMetric('settings', 'opened', from);
exports.settingsOpenedMetric = settingsOpenedMetric;


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.Button = styled_components_1.default.button.withConfig({ displayName: "Button", componentId: "sc-1q78692" }) `
	background: #50a2ff;
	border: none;
	border-radius: 4px;
	color: #fff;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: -0.3px;
	line-height: 20px;
	padding: 7px 42px;
	transition: box-shadow 0.3s, background-color 0.3s;
	:hover {
		box-shadow: 2px 2px 10px rgba(80, 162, 255, 0.15), 1px 1px 2px rgba(80, 162, 255, 0.2);
	}
	:active {
		background: #2889f4;
	}
	:focus {
		outline: none;
	}
`;


/***/ }),

/***/ 182:
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
exports.Root = exports.WrapperDefault = void 0;
const styled_components_1 = __importStar(__webpack_require__(3));
const react_1 = __importDefault(__webpack_require__(0));
exports.WrapperDefault = styled_components_1.default.div.withConfig({ displayName: "WrapperDefault", componentId: "sc-1kcpom2" }) `
	background: #fff;
	border-radius: 20px;
	position: fixed;
`;
const GlobalStyle = styled_components_1.createGlobalStyle `
  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    font-weight: 400;
    font-style: normal;
    src: url("${chrome.extension.getURL('/assets/fonts/Roboto-Regular.ttf')}");
  }

  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    font-weight: 500;
    font-style: normal;
    src: url("${chrome.extension.getURL('/assets/fonts/Roboto-Medium.ttf')}");
  }

  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    font-weight: 700;
    font-style: normal;
    src: url("${chrome.extension.getURL('/assets/fonts/Roboto-Bold.ttf')}");
  }
`;
const Wrapper = styled_components_1.default.div.withConfig({ displayName: "Wrapper", componentId: "sc-13hsu7f" }) `
	box-sizing: border-box;
	color: #1b1b1b;
	font-family: 'Roboto', sans-serif;
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}
`;
const Root = ({ children }) => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(GlobalStyle, null),
    react_1.default.createElement(Wrapper, null, children)));
exports.Root = Root;


/***/ }),

/***/ 305:
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
exports.FooterAliradarLogo = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const S = __importStar(__webpack_require__(680));
const FooterAliradarLogo = () => (react_1.default.createElement("a", { href: "https://aliradar.com/", rel: "noopener noreferrer", target: "_blank" },
    react_1.default.createElement(S.FooterAliradarLogo, { width: "67", height: "9", viewBox: "0 0 67 9" },
        react_1.default.createElement("path", { fill: "#000", fillRule: "nonzero", d: "M6.568 8.886a36.885 36.885 0 0 0-.307-.94l-.325-.962H2.613c-.107.322-.215.643-.324.964a56.2 56.2 0 0 0-.3.938H0c.321-.946.624-1.821.91-2.624a92.992 92.992 0 0 1 1.658-4.291c.266-.638.544-1.261.83-1.87h1.816A66.758 66.758 0 0 1 6.86 3.993c.276.71.556 1.466.845 2.27.288.802.591 1.677.912 2.623h-2.05zM4.266 2.092a13.48 13.48 0 0 1-.188.52c-.082.219-.176.472-.28.762-.105.287-.224.604-.352.95-.132.345-.262.709-.397 1.089H5.48c-.128-.38-.255-.746-.378-1.092-.12-.347-.237-.664-.348-.953-.108-.288-.204-.541-.288-.76-.082-.22-.15-.392-.2-.516zm11.718 5.095v1.7H10.3V.1h1.915v7.086h3.77zM17.801.101h1.915v8.785h-1.915V.101zM24.761 0c1.278 0 2.256.234 2.935.703.68.47 1.019 1.199 1.019 2.187 0 .617-.137 1.118-.411 1.502-.275.385-.67.687-1.185.907.172.22.352.47.54.754.189.283.375.579.559.887.184.309.362.63.534.964.171.333.331.66.478.982h-2.14c-.157-.287-.315-.579-.474-.875a24.093 24.093 0 0 0-.993-1.654 8.646 8.646 0 0 0-.493-.678h-.945v3.207h-1.916V.228c.418-.084.85-.143 1.296-.177C24.01.017 24.41 0 24.762 0zm.112 1.686c-.14 0-.265.004-.375.013l-.313.025v2.383h.54c.72 0 1.236-.093 1.547-.279.31-.186.466-.503.466-.95 0-.431-.157-.738-.472-.92-.315-.181-.78-.272-1.393-.272zm12.263 7.2a35.994 35.994 0 0 0-.306-.94l-.326-.962h-3.323c-.106.322-.214.643-.323.964a54.09 54.09 0 0 0-.3.938h-1.99c.322-.946.625-1.821.91-2.624a92.992 92.992 0 0 1 1.658-4.291c.266-.638.545-1.261.83-1.87h1.816a68.667 68.667 0 0 1 1.647 3.891c.276.71.556 1.467.845 2.27.289.803.591 1.678.913 2.624h-2.05zm-2.301-6.794a13.5 13.5 0 0 1-.189.52c-.081.219-.176.472-.28.762-.104.287-.223.604-.352.95-.131.345-.262.709-.397 1.089h2.433c-.129-.38-.256-.746-.379-1.092-.12-.347-.237-.664-.347-.953l-.289-.76c-.082-.22-.15-.392-.2-.516zm7.949 5.184c.09.009.194.015.313.02.118.003.26.005.423.005.958 0 1.668-.249 2.13-.747.463-.499.694-1.188.694-2.067 0-.921-.221-1.618-.663-2.091-.442-.473-1.142-.71-2.1-.71-.13 0-.265.002-.405.006a3.76 3.76 0 0 0-.392.032v5.552zm5.536-2.789c0 .761-.114 1.424-.343 1.99A3.683 3.683 0 0 1 47 7.886a4.115 4.115 0 0 1-1.54.836c-.607.186-1.286.279-2.039.279a18.9 18.9 0 0 1-1.203-.044 9.584 9.584 0 0 1-1.35-.184V.215c.441-.084.902-.141 1.38-.17.48-.03.89-.045 1.234-.045.729 0 1.39.085 1.983.254a4.003 4.003 0 0 1 1.528.798c.426.363.753.828.983 1.395.229.566.343 1.246.343 2.04zm7.587 4.4a36.923 36.923 0 0 0-.307-.941l-.325-.962h-3.323c-.106.322-.215.643-.323.964-.107.323-.207.634-.3.938h-1.99c.322-.946.624-1.821.91-2.624a92.048 92.048 0 0 1 1.658-4.291c.266-.638.544-1.261.83-1.87h1.816A66.062 66.062 0 0 1 56.2 3.993c.276.71.556 1.466.845 2.27.288.802.591 1.677.912 2.623h-2.05zm-2.302-6.795c-.042.126-.104.302-.188.52-.082.219-.176.472-.28.762-.104.287-.223.604-.352.95-.131.345-.262.709-.397 1.089h2.433a84.22 84.22 0 0 0-.379-1.092c-.12-.347-.237-.664-.348-.953-.108-.288-.204-.541-.288-.76-.082-.22-.15-.392-.2-.516zM62.132 0c1.276 0 2.254.234 2.934.703.679.47 1.018 1.199 1.018 2.187 0 .617-.137 1.118-.41 1.502-.275.385-.67.687-1.186.907.173.22.352.47.54.754.19.283.375.579.56.887.183.309.361.63.533.964.172.333.332.66.479.982h-2.14c-.158-.287-.315-.579-.475-.875a24.108 24.108 0 0 0-.992-1.654 8.643 8.643 0 0 0-.493-.678h-.946v3.207H59.64V.228c.418-.084.85-.143 1.296-.177C61.38.017 61.78 0 62.132 0zm.11 1.686c-.14 0-.264.004-.374.013l-.314.025v2.383h.54c.72 0 1.236-.093 1.548-.279.31-.186.466-.503.466-.95 0-.431-.158-.738-.473-.92-.315-.181-.78-.272-1.393-.272z" }))));
exports.FooterAliradarLogo = FooterAliradarLogo;


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerSectionClosed = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importDefault(__webpack_require__(3));
const colors_1 = __webpack_require__(72);
const mapTypeToColor_1 = __webpack_require__(93);
const TabSpacer_1 = __webpack_require__(129);
const Bold_1 = __webpack_require__(54);
const detailedSeller_1 = __webpack_require__(173);
const getType = (overall, rating) => (Number(rating) < 10 ? 'unknown' : overall);
const getText = (overall, rating) => (Number(rating) < 10 ? '?' : overall);
const SellerSectionIndeterm = () => (react_1.default.createElement(Div, { type: "unknown" },
    react_1.default.createElement(Bold_1.Bold, null, "?"),
    react_1.default.createElement(TabSpacer_1.TabSpacer, null),
    "%"));
const LoaderWrapper = styled_components_1.default.div.withConfig({ displayName: "LoaderWrapper", componentId: "sc-1dbm1r3" }) `
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: center;
	width: 100%;
`;
const LoaderImageWrapper = styled_components_1.default.img.withConfig({ displayName: "LoaderImageWrapper", componentId: "sc-14hdqj7" }) `
	width: 30px;
`;
const Loader = () => (react_1.default.createElement(LoaderWrapper, { className: "SimilarList loading icon" },
    react_1.default.createElement(LoaderImageWrapper, { src: chrome.extension.getURL('assets/img/loader.svg'), alt: "loader" })));
const Div = styled_components_1.default.div.withConfig({ displayName: "Div", componentId: "sc-wtwk8r" }) `
	color: ${({ type }) => colors_1.colors(mapTypeToColor_1.mapTypeToColor(type))};
`;
const SellerSectionClosed = () => {
    var _a, _b, _c, _d;
    const item = react_redux_1.useSelector(({ item }) => item);
    const initialized = (item === null || item === void 0 ? void 0 : item.initialized) || false;
    const overall = ((_a = item === null || item === void 0 ? void 0 : item.detailedSeller) === null || _a === void 0 ? void 0 : _a.overall) || 0;
    const statusOverall = ((_c = (_b = item === null || item === void 0 ? void 0 : item.detailedSeller) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.overall) || detailedSeller_1.Status.UNKNOWN;
    const rating = ((_d = item === null || item === void 0 ? void 0 : item.detailedSeller) === null || _d === void 0 ? void 0 : _d.rating) || 0;
    if (!initialized)
        return react_1.default.createElement(Loader, null);
    if ((!rating && !overall) || !statusOverall)
        return react_1.default.createElement(SellerSectionIndeterm, null);
    return (react_1.default.createElement(Div, { type: getType(statusOverall, rating) },
        react_1.default.createElement(Bold_1.Bold, null, getText(overall, rating)),
        react_1.default.createElement(TabSpacer_1.TabSpacer, null),
        "%"));
};
exports.SellerSectionClosed = SellerSectionClosed;


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsSectionClosed = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const react_redux_1 = __webpack_require__(7);
const TabSpacer_1 = __webpack_require__(129);
const CameraIcon_1 = __webpack_require__(766);
const Bold_1 = __webpack_require__(54);
const Loader_1 = __webpack_require__(79);
const Div = styled_components_1.default.div.withConfig({ displayName: "Div", componentId: "sc-wqxfik" }) `
	color: #808080;
	display: flex;
	flex-direction: row;
`;
const ReviewsSectionClosed = ({ big = false }) => {
    const { reviewsCount, initialized } = react_redux_1.useSelector((state) => state.reviews);
    return (react_1.default.createElement(Div, null,
        ((reviewsCount > 0 || initialized) && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Bold_1.Bold, null, reviewsCount),
            react_1.default.createElement(TabSpacer_1.TabSpacer, null)))) || react_1.default.createElement(Loader_1.Loader, null),
        react_1.default.createElement(CameraIcon_1.CameraIcon, { size: big ? '18' : '14', color: reviewsCount > 0 ? '#929292' : '#b7b7b7' })));
};
exports.ReviewsSectionClosed = ReviewsSectionClosed;


/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimilarSectionClosed = exports.Div = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importDefault(__webpack_require__(3));
const colors_1 = __webpack_require__(72);
const RadarIcon_1 = __webpack_require__(767);
const Bold_1 = __webpack_require__(54);
exports.Div = styled_components_1.default.div.withConfig({ displayName: "Div", componentId: "sc-wvswav" }) `
	align-items: center;
	color: ${colors_1.colors('green')};
	display: flex;
	font-size: 25px;
	height: 45px;
	justify-content: center;
	position: relative;
	width: 45px;
`;
const SimilarSectionClosed = () => {
    const { similars, initialized } = react_redux_1.useSelector(({ similar }) => similar);
    return (react_1.default.createElement(exports.Div, null,
        react_1.default.createElement(RadarIcon_1.RadarIcon, { loading: !initialized && !(similars === null || similars === void 0 ? void 0 : similars.length), count: similars === null || similars === void 0 ? void 0 : similars.length }),
        (similars === null || similars === void 0 ? void 0 : similars.length) !== 0 && react_1.default.createElement(Bold_1.Bold, null, (similars === null || similars === void 0 ? void 0 : similars.length) > 100 ? 99 : similars === null || similars === void 0 ? void 0 : similars.length)));
};
exports.SimilarSectionClosed = SimilarSectionClosed;


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/img/loader.svg";

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigItemList = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const react_window_1 = __webpack_require__(983);
const CustomScrollArea_1 = __webpack_require__(127);
const constants_1 = __webpack_require__(774);
const constants_2 = __webpack_require__(325);
const BigItem_1 = __webpack_require__(775);
const Container = styled_components_1.default.div.withConfig({ displayName: "Container", componentId: "sc-xgpnmb" }) `
	//transform: scale(0.95);
	display: flex;
	flex-wrap: wrap;
`;
const GirdView = ({ index, style, items, type, options }) => (react_1.default.createElement("div", { style: { display: 'flex', ...style } },
    items.length > index * 3 && react_1.default.createElement(BigItem_1.BigItem, { type: type, key: index + 1000, item: items[index * 3], options: options }),
    items.length > index * 3 + 1 && (react_1.default.createElement(BigItem_1.BigItem, { type: type, key: index + 2000, item: items[index * 3 + 1], options: options })),
    items.length > index * 3 + 2 && (react_1.default.createElement(BigItem_1.BigItem, { type: type, key: index + 3000, item: items[index * 3 + 2], options: options }))));
const ListView = ({ index, items, type, options }) => (react_1.default.createElement(BigItem_1.BigItem, { type: type, key: index, item: items[index], options: options }));
const BigItemList = ({ items, options, type, scrollArea }) => {
    if (type !== 'similar') {
        return (react_1.default.createElement(CustomScrollArea_1.CustomScrollArea, null,
            react_1.default.createElement(Container, null, items.map((item, index) => (react_1.default.createElement(BigItem_1.BigItem, { type: type, key: index, item: item, options: options }))))));
    }
    return (react_1.default.createElement(react_window_1.FixedSizeList, { onScroll: (e) => {
            if (e.scrollDirection == 'forward') {
                // FIXME the delivery module have some protection, hack it
                // setDeliverySimilarIntoStore(
                //   items,
                //   ~~(e.scrollOffset / BIG_ITEM_CONSTANTS.GRID_VIEW_ITEM_HEIGHT) * 3,
                // )
            }
        }, ref: scrollArea, style: { overflow: 'hidden', willChange: 'unset' }, outerElementType: CustomScrollArea_1.CustomScrollbarsVirtualList, itemSize: options.isListView ? BigItem_1.BIG_ITEM_CONSTANTS.LIST_VIEW_ITEM_HEIGHT : BigItem_1.BIG_ITEM_CONSTANTS.GRID_VIEW_ITEM_HEIGHT, itemCount: options.isListView ? items.length : Math.ceil(items.length / 3), width: constants_2.SIDE_WIDGET.WIDTH, height: constants_2.SIDE_WIDGET.HEIGHT - constants_1.SIMILAR_SECTION.SECTION_HEADER.HEIGHT }, ({ index, style }) => options.isListView ? (react_1.default.createElement(ListView, { index: index, items: items, type: type, options: options })) : (react_1.default.createElement(GirdView, { style: style, index: index, items: items, type: type, options: options }))));
};
exports.BigItemList = BigItemList;


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SIDE_WIDGET = void 0;
exports.SIDE_WIDGET = {
    HEIGHT: 409,
    WIDTH: 380
};


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BIG_ITEM_CONSTANTS = void 0;
exports.BIG_ITEM_CONSTANTS = {
    LIST_VIEW_ITEM_HEIGHT: 105,
    GRID_VIEW_ITEM_HEIGHT: 140
};


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initAliStore = void 0;
const favorites_1 = __webpack_require__(155);
const account_1 = __webpack_require__(190);
const settings_1 = __webpack_require__(118);
const item_1 = __webpack_require__(96);
const photoReviews_1 = __webpack_require__(131);
const stores_1 = __webpack_require__(10);
const item_2 = __webpack_require__(792);
const similars_1 = __webpack_require__(132);
const updateHots_1 = __webpack_require__(179);
const utils_1 = __webpack_require__(11);
const initAliStore = async () => {
    favorites_1.FavoritesActions.init();
    account_1.AccountActions.init();
    settings_1.SettingsActions.init();
    const port = chrome.runtime.connect({ name: 'aliexpress_item' });
    port.onMessage.addListener(async (msg) => {
        var _a, _b, _c;
        if (msg.item) {
            await item_1.ItemActions.initStore({ item: msg.item });
            const item = await utils_1.ChromeStorage.getItem((_a = msg === null || msg === void 0 ? void 0 : msg.item) === null || _a === void 0 ? void 0 : _a.id);
            if (item) {
                await item_1.ItemActions.initStore({ item });
            }
            chrome.storage.onChanged.addListener((e) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (((_b = e[(_a = msg.item) === null || _a === void 0 ? void 0 : _a.id]) === null || _b === void 0 ? void 0 : _b.newValue) && ((_e = (_d = e[(_c = msg.item) === null || _c === void 0 ? void 0 : _c.id]) === null || _d === void 0 ? void 0 : _d.newValue) === null || _e === void 0 ? void 0 : _e.id) === ((_f = msg.item) === null || _f === void 0 ? void 0 : _f.id)) {
                    item_1.ItemActions.initStore({ item: (_h = e[(_g = msg.item) === null || _g === void 0 ? void 0 : _g.id]) === null || _h === void 0 ? void 0 : _h.newValue });
                }
            });
            photoReviews_1.getPhotoData((_b = msg.item) === null || _b === void 0 ? void 0 : _b.id, (_c = msg.item) === null || _c === void 0 ? void 0 : _c.adminseq).then((photoData) => {
                stores_1.webextStore.dispatch(stores_1.reviewsSliceActions.addUserReviewsAndPhotos(photoData));
            });
            await favorites_1.FavoritesActions.init();
        }
        if (window.context === 'content' && (msg === null || msg === void 0 ? void 0 : msg.action) === 'PARSE_FROM_CONTENT') {
            const parsedItem = await new item_2.Item(document.documentElement).parse();
            port.postMessage({ action: 'PARSED_ITEM', item: parsedItem });
        }
        if (msg.photoData) {
            stores_1.webextStore.dispatch(stores_1.reviewsSliceActions.addUserReviewsAndPhotos(msg.photoData));
        }
        if (msg.similars) {
            similars_1.SimilarsActions.initStore({ similars: msg.similars });
        }
        if (msg.hotCategories && msg.hotItems) {
            updateHots_1.updateHots(msg);
        }
        return true;
    });
    if (window.context === 'content') {
        const parsedItem = await new item_2.Item(document.documentElement).parse();
        port.postMessage({ action: 'PARSED_ITEM', item: parsedItem });
    }
};
exports.initAliStore = initAliStore;


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const Svg = styled_components_1.default.svg.withConfig({ displayName: "Svg", componentId: "sc-f4vqxv" }) `
	fill: ${({ options }) => options.fill};
	transition: fill 0.3s;
	:hover {
		fill: ${({ options }) => options.fillHover};
	}
	:active {
		fill: ${({ options }) => options.fillActive};
	}
`;
const defaultOptions = {
    fill: '#000',
    fillHover: '#000',
    fillActive: '#000',
    width: 14
};
const ArrowIcon = ({ options }) => {
    const opt = { ...defaultOptions, ...options };
    return (react_1.default.createElement(Svg, { width: opt.width, height: (opt.width * 9) / 14, viewBox: "0 0 14 9", xmlns: "http://www.w3.org/2000/svg", options: opt },
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.63333 0L7 5.36667L12.3667 0L14 1.63333L7 8.63333L0 1.63333L1.63333 0Z" })));
};
exports.ArrowIcon = ArrowIcon;


/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)))

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(376);


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(377);
__webpack_require__(872);
__webpack_require__(900);
window.hostname = window.location.hostname;
window.context = 'content';


/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = __webpack_require__(24);
// import { wildberries } from './wildberries/inject';
const inject_1 = __webpack_require__(668);
const inject_2 = __webpack_require__(796);
const stores_1 = __webpack_require__(10);
const getInstalledDate_1 = __webpack_require__(77);
actions_1.SettingsActions.init();
actions_1.EmbeddedWidgetUIActions.initializedFromStorage();
const supportedSites = {
    aliexpress: inject_1.aliexpress,
    tmall: inject_1.aliexpress,
    aliradar: inject_2.aliradar
    // wildberries
};
const sitename = (_d = (_c = (_b = (_a = window.location) === null || _a === void 0 ? void 0 : _a.hostname) === null || _b === void 0 ? void 0 : _b.split('.')) === null || _c === void 0 ? void 0 : _c.slice(-2, -1)) === null || _d === void 0 ? void 0 : _d[0];
const initFunction = supportedSites[sitename];
if (initFunction !== undefined) {
    (async () => {
        try {
            await actions_1.AccountActions.init();
            stores_1.webextStore.dispatch(stores_1.globalsSliceActions.setInstalledDate((await getInstalledDate_1.getInstalledDate()).installed));
        }
        catch (e) {
            console.error(e);
        }
    })();
    initFunction();
}


/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.aliexpress = void 0;
const utils_1 = __webpack_require__(11);
const getInstalledDate_1 = __webpack_require__(77);
const injectOldWidgets_1 = __webpack_require__(669);
const isAliexpressProductPage_1 = __webpack_require__(95);
const initAliStores_1 = __webpack_require__(330);
const aliexpress = async () => {
    if ((await utils_1.isOld()) || (await getInstalledDate_1.getInstalledDate()).installed === 1) {
        await injectOldWidgets_1.injectOldWidgets();
    }
    else if (await isAliexpressProductPage_1.isAliexpressProductPage(window.location.href)) {
        await initAliStores_1.initAliStore();
    }
};
exports.aliexpress = aliexpress;


/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectOldWidgets = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const utils_1 = __webpack_require__(11);
const AppLayout_1 = __webpack_require__(53);
const EmbeddedWidget_1 = __webpack_require__(674);
const SideWidget_1 = __webpack_require__(698);
const isAliexpressProductPage_1 = __webpack_require__(95);
const aliradar_1 = __webpack_require__(32);
const initAliStores_1 = __webpack_require__(330);
const injectOldWidgets = async () => {
    var _a;
    if (!(await isAliexpressProductPage_1.isAliexpressProductPage(window.location.href))) {
        return;
    }
    initAliStores_1.initAliStore();
    // embedded widget
    const { aliexpress: { productPageSelectors, productPageIds } } = await aliradar_1.PagePatterns.get();
    const modalRootEmbeddedWidget = () => {
        var _a;
        return (_a = productPageSelectors === null || productPageSelectors === void 0 ? void 0 : productPageSelectors.reduce((acc, selector) => {
            const component = document.querySelector(selector);
            if (component) {
                return component;
            }
            return acc;
        }, null)) !== null && _a !== void 0 ? _a : productPageIds === null || productPageIds === void 0 ? void 0 : productPageIds.reduce((acc, id) => {
            const component = document.getElementById(id);
            if (component) {
                return component;
            }
            return acc;
        }, null);
    };
    let observer = null;
    const embeddedWidgetRender = () => {
        var _a;
        let containerEmbeddedWidget = document.querySelector('#arRootEmbeddedWidget');
        if (!containerEmbeddedWidget) {
            containerEmbeddedWidget = document.createElement('div');
            containerEmbeddedWidget.id = 'arRootEmbeddedWidget';
            (_a = modalRootEmbeddedWidget()) === null || _a === void 0 ? void 0 : _a.appendChild(containerEmbeddedWidget);
        }
        utils_1.render(react_1.default.createElement(AppLayout_1.AppLayout, null,
            react_1.default.createElement(EmbeddedWidget_1.EmbeddedWidget, null)), containerEmbeddedWidget);
    };
    embeddedWidgetRender();
    document.addEventListener('readystatechange', () => {
        embeddedWidgetRender();
        if (modalRootEmbeddedWidget() && !observer) {
            observer = new MutationObserver(() => {
                embeddedWidgetRender();
            });
            // Начинаем наблюдение за настроенными изменениями целевого элемента
            observer === null || observer === void 0 ? void 0 : observer.observe(modalRootEmbeddedWidget(), {
                attributes: true,
                childList: true,
                subtree: true
            });
        }
    });
    // side widget
    let containerSideWidget = document.querySelector('#arRoot');
    if (!containerSideWidget) {
        containerSideWidget = document.createElement('div');
        containerSideWidget.id = 'arRoot';
        (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.appendChild(containerSideWidget);
    }
    utils_1.render(react_1.default.createElement(AppLayout_1.AppLayout, null,
        react_1.default.createElement(SideWidget_1.Index, null),
        ","), containerSideWidget);
};
exports.injectOldWidgets = injectOldWidgets;


/***/ }),

/***/ 674:
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
exports.EmbeddedWidget = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const EmbeddedWidget_styles_1 = __webpack_require__(675);
const Footer_1 = __webpack_require__(676);
const EmbeddedWidgetSkeleton_1 = __webpack_require__(681);
const SellerSectionOpened_1 = __webpack_require__(170);
const PriceSectionOpened_1 = __webpack_require__(174);
const Version_1 = __webpack_require__(123);
const EmbeddedWidget = () => {
    const sectionsRef = react_1.useRef();
    const { isOpen, wasToggled } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.embeddedWidgetUI);
    const { initialized } = react_redux_1.useSelector(({ item }) => item);
    if (!initialized) {
        return react_1.default.createElement(EmbeddedWidgetSkeleton_1.EmbeddedWidgetSkeleton, null);
    }
    if (isOpen === null) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Version_1.Version, { isShowDebug: true, isPositionAbsolute: false }),
        react_1.default.createElement(EmbeddedWidget_styles_1.Container, null,
            react_1.default.createElement(EmbeddedWidget_styles_1.AnimatedSections, { wasToggled: wasToggled, sectionsRef: sectionsRef, open: isOpen },
                react_1.default.createElement(EmbeddedWidget_styles_1.Sections, { ref: sectionsRef },
                    react_1.default.createElement(EmbeddedWidget_styles_1.Section, null,
                        react_1.default.createElement(PriceSectionOpened_1.PriceSectionOpened, { embeddedWidget: true, withPriceFilter: true })),
                    react_1.default.createElement(EmbeddedWidget_styles_1.Section, null,
                        react_1.default.createElement(SellerSectionOpened_1.SellerSectionOpened, { embeddedWidget: true })))),
            react_1.default.createElement(Footer_1.Footer, null))));
};
exports.EmbeddedWidget = EmbeddedWidget;


/***/ }),

/***/ 675:
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
exports.Section = exports.Sections = exports.AnimatedSections = exports.Container = void 0;
const styled_components_1 = __importStar(__webpack_require__(3));
exports.Container = styled_components_1.default.div.withConfig({ displayName: "Container", componentId: "sc-11r5zto" }) `
	border-bottom: 1px solid #e9e9e9;
	border-left: 1px solid #e8e8e8;
	border-radius: 5px;
	border-right: 1px solid #e8e8e8;
	border-top: 1px solid #e9e9e9;
	margin: 12px 0;
	min-width: 630px;
	overflow: hidden;
`;
const closeSections = (sectionsRef) => {
    const height = sectionsRef.current.clientHeight;
    return styled_components_1.keyframes `
    0% {
      max-height: ${height}px;
    }
    100% {
      max-height: 0;
    }
  `;
};
const openSections = (sectionsRef) => {
    const height = sectionsRef.current.clientHeight;
    return styled_components_1.keyframes `
    0% {
      max-height: 0;
    }
    99% {
      max-height: ${height}px;
    }
    100% {
      max-height: unset;
    }
  `;
};
exports.AnimatedSections = styled_components_1.default.div.withConfig({ displayName: "AnimatedSections", componentId: "sc-1v87amt" }) `
	overflow: hidden;

	${({ wasToggled, open, sectionsRef }) => {
    if (wasToggled) {
        return styled_components_1.css `
				animation: 0.4s ${open ? openSections(sectionsRef) : closeSections(sectionsRef)} ease;
				animation-fill-mode: forwards;
			`;
    }
    if (!wasToggled && !open) {
        return styled_components_1.css `
				max-height: 0;
			`;
    }
    return styled_components_1.css ``;
}}
`;
exports.Sections = styled_components_1.default.div.withConfig({ displayName: "Sections", componentId: "sc-1flseo1" }) `
	display: flex;
`;
exports.Section = styled_components_1.default.div.withConfig({ displayName: "Section", componentId: "sc-jevh0s" }) `
	border-bottom: 1px solid #e8e8e8;
	display: flex;
	flex-direction: column;
	width: 50%;

	& + & {
		border-left: 1px solid #e8e8e8;
	}
`;


/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const FooterCollapse_1 = __webpack_require__(677);
const FooterGear_1 = __webpack_require__(679);
const FooterAliradarLogo_1 = __webpack_require__(305);
const StyledFooterGear = styled_components_1.default(FooterGear_1.FooterGear).withConfig({ displayName: "StyledFooterGear", componentId: "sc-1r82wni" }) `
	display: block;
	margin: 0 1px 0 auto;
	opacity: 0;
`;
const StyledFooterLogo = styled_components_1.default(FooterAliradarLogo_1.FooterAliradarLogo).withConfig({ displayName: "StyledFooterLogo", componentId: "sc-1wsozws" }) `
	display: block;
`;
const Div = styled_components_1.default.div.withConfig({ displayName: "Div", componentId: "sc-4uh01u" }) `
	align-items: center;
	background: #fdfdfd;
	display: flex;
	height: 100%;
	justify-content: space-between;
	padding: 0 0 0 20px;

	&:hover ${FooterCollapse_1.CollapseArrow} {
		fill-opacity: 0.5;
	}

	&:hover ${StyledFooterGear} {
		opacity: 1;
	}

	&:hover ${FooterCollapse_1.CollapseTitle} {
		opacity: 0.5;
	}
`;
const Footer = () => (react_1.default.createElement(Div, null,
    react_1.default.createElement(StyledFooterLogo, null),
    react_1.default.createElement(StyledFooterGear, null),
    react_1.default.createElement(FooterCollapse_1.FooterCollapse, null)));
exports.Footer = Footer;


/***/ }),

/***/ 677:
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
exports.FooterCollapse = exports.CollapseArrow = exports.CollapseTitle = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importStar(__webpack_require__(3));
const actions_1 = __webpack_require__(24);
const stores_1 = __webpack_require__(10);
const TextSwitcher_1 = __webpack_require__(678);
const Div = styled_components_1.default.div.withConfig({ displayName: "Div", componentId: "sc-1161m48" }) `
	align-items: center;
	cursor: pointer;
	display: flex;
	height: 30px;
	justify-content: center;
	transition: background 0.3s;

	:hover {
		background: rgba(153, 153, 153, 0.15);
	}

	:active {
		background: rgba(153, 153, 153, 0.25);
	}
`;
exports.CollapseTitle = styled_components_1.default(TextSwitcher_1.TextSwitcher).withConfig({ displayName: "CollapseTitle", componentId: "sc-stk4ik" }) `
	color: #000;
	font-size: 11px;
	font-weight: 600;
	line-height: 12px;
	opacity: 0.3;
	padding: 0 10px;
	transition: opacity 0.3s;
`;
exports.CollapseArrow = styled_components_1.default.svg.withConfig({ displayName: "CollapseArrow", componentId: "sc-1shadyz" }) `
	fill-opacity: 0.3;
	margin-right: 10px;
	transition: fill-opacity 0.3s;

	${({ expanded }) => expanded &&
    styled_components_1.css `
			transform: rotate(180deg);
		`}
`;
const FooterCollapse = () => {
    const { t } = react_i18next_1.useTranslation();
    const { isOpen } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.embeddedWidgetUI);
    const settings = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.settings);
    return (react_1.default.createElement(Div, { onClick: () => {
            var _a;
            actions_1.SettingsActions.update({
                name: 'onpageCollapsed',
                value: !((_a = settings === null || settings === void 0 ? void 0 : settings.onpageCollapsed) === null || _a === void 0 ? void 0 : _a.value)
            });
            stores_1.webextStore.dispatch(stores_1.EmbeddedWidgetUISliceActions.toggle());
        } },
        react_1.default.createElement(exports.CollapseTitle, { minWidth: "55px", texts: [t('show'), t('hide')], textIndex: Number(isOpen) }),
        react_1.default.createElement(exports.CollapseArrow, { expanded: isOpen, width: "11", height: "7", viewBox: "0 0 11 7" },
            react_1.default.createElement("g", { fill: "none", fillRule: "evenodd", transform: "translate(-9 -9)" },
                react_1.default.createElement("rect", { width: "29", height: "25", rx: "2" }),
                react_1.default.createElement("path", { fill: "#000", fillRule: "nonzero", d: "M20 10.115L18.958 9 14.5 13.768 10.042 9 9 10.115 14.5 16z" })))));
};
exports.FooterCollapse = FooterCollapse;


/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextSwitcher = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
// this component creates a box which size is based on the widest text from props
const TextSwitcher = ({ texts, textIndex, className, minWidth }) => (react_1.default.createElement(Container, { className: className, minWidth: minWidth }, texts.map((text, index) => (react_1.default.createElement(Text, { key: index, show: textIndex === index }, text)))));
exports.TextSwitcher = TextSwitcher;
const Container = styled_components_1.default.div.withConfig({ displayName: "Container", componentId: "sc-1lv05g3" }) `
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;

	${({ minWidth }) => minWidth && `min-width: ${minWidth}`};
`;
const Text = styled_components_1.default.div.withConfig({ displayName: "Text", componentId: "sc-1o0l75p" }) `
	height: 0;
	line-height: 0;

	${({ show }) => !show && 'visibility: hidden'};
`;


/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterGear = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const settingsOpened_1 = __webpack_require__(169);
const stores_1 = __webpack_require__(10);
const GearBackground = styled_components_1.default.rect.withConfig({ displayName: "GearBackground", componentId: "sc-1676jf5" }) `
	fill-opacity: 0;
	transition: fill-opacity 0.3s;
`;
const Svg = styled_components_1.default.svg.withConfig({ displayName: "Svg", componentId: "sc-1rjfwc4" }) `
	cursor: pointer;
	transition: opacity 0.3s;

	:hover {
		${GearBackground} {
			fill-opacity: 0.15;
		}
	}

	:active {
		${GearBackground} {
			fill-opacity: 0.25;
		}
	}
`;
const FooterGear = ({ className, withBg = true, size = 30, label = 'from-page-widget' }) => (react_1.default.createElement(Svg, { onClick: () => {
        settingsOpened_1.settingsOpenedMetric(label);
        if (withBg) {
            stores_1.webextStore.dispatch(stores_1.settingsWidgetUISliceActions.open());
        }
        else {
            window.open(chrome.runtime.getURL('settings.html'), '_blank');
        }
    }, className: className, width: size, height: size, viewBox: `0 0 ${size} ${size}` },
    react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
        withBg ? react_1.default.createElement(GearBackground, { width: size, height: size, fill: "#999" }) : '',
        react_1.default.createElement("path", { fill: "#000", fillOpacity: ".3", fillRule: "nonzero", transform: withBg ? 'translate(1 2)' : 'translate(-8 -7)', d: "M19.962 12.334c-.019-.169-.215-.296-.385-.296-.55 0-1.038-.323-1.243-.822a1.336 1.336 0 0 1 .336-1.484.333.333 0 0 0 .036-.452 5.937 5.937 0 0 0-.95-.96.334.334 0 0 0-.456.037c-.358.396-1 .543-1.497.336a1.333 1.333 0 0 1-.81-1.303.333.333 0 0 0-.295-.35 5.99 5.99 0 0 0-1.35-.004.334.334 0 0 0-.297.344c.02.556-.31 1.07-.821 1.28-.49.2-1.129.054-1.486-.338a.335.335 0 0 0-.452-.038 5.96 5.96 0 0 0-.971.96.334.334 0 0 0 .036.455c.417.378.552.98.335 1.497-.207.494-.719.811-1.305.811a.326.326 0 0 0-.347.295 6.01 6.01 0 0 0-.002 1.364c.018.17.221.295.393.295a1.316 1.316 0 0 1 1.235.823c.21.511.075 1.107-.336 1.483a.333.333 0 0 0-.036.452c.278.356.598.679.949.96.137.112.337.096.456-.035.36-.397 1.002-.544 1.496-.337.518.217.844.74.812 1.302-.01.177.12.33.295.35a5.964 5.964 0 0 0 1.35.005.334.334 0 0 0 .297-.344c-.02-.556.31-1.07.82-1.28a1.385 1.385 0 0 1 1.486.338.335.335 0 0 0 .453.038c.36-.281.686-.604.97-.96a.333.333 0 0 0-.035-.455 1.33 1.33 0 0 1-.336-1.497 1.343 1.343 0 0 1 1.227-.813l.075.001a.334.334 0 0 0 .35-.294c.054-.45.054-.91.003-1.364zm-5.952 2.68a2.004 2.004 0 0 1-2.002-2.001c0-1.104.898-2.002 2.002-2.002 1.103 0 2 .898 2 2.002a2.004 2.004 0 0 1-2 2.001z" }))));
exports.FooterGear = FooterGear;


/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterAliradarLogo = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.FooterAliradarLogo = styled_components_1.default.svg.withConfig({ displayName: "FooterAliradarLogo", componentId: "sc-yqpf4f" }) `
	fill-opacity: 0.3;
	transition: fill-opacity 0.3s;

	:hover {
		fill-opacity: 0.4;
	}

	:active {
		fill-opacity: 0.5;
	}
`;


/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbeddedWidgetSkeleton = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const Svg = styled_components_1.default.div.withConfig({ displayName: "Svg", componentId: "sc-dux6w" }) `
	display: flex;
	height: 384px;
	overflow: hidden;
	position: relative;
	width: 630px;
	@keyframes skeleton-mask {
		from {
			transform: translateX(-200%);
		}
		to {
			transform: translateX(0);
		}
	}

	svg {
		height: 100%;
		width: 100%;
		&[fill='#dddfe1'],
		&[stroke='#dddfe1'] {
			mask: url(#skeleton-mask);
		}
		#skeleton-mask-overlay {
			animation: skeleton-mask 1.5s infinite;
		}
	}
`;
const EmbeddedWidgetSkeleton = () => (react_1.default.createElement(Svg, null,
    react_1.default.createElement("img", { src: chrome.extension.getURL('assets/img/skeleton_emdedded_widget.svg'), alt: "loader" })));
exports.EmbeddedWidgetSkeleton = EmbeddedWidgetSkeleton;


/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importDefault(__webpack_require__(3));
const SettingsContent_1 = __webpack_require__(699);
const BoardingWidget_1 = __webpack_require__(747);
const BoardingOverlay_1 = __webpack_require__(760);
const Gallery_1 = __webpack_require__(317);
const SideWidget_1 = __webpack_require__(762);
const SideAndBoarding = styled_components_1.default.div.withConfig({ displayName: "SideAndBoarding", componentId: "sc-y8dzed" }) `
	align-items: flex-start;
	bottom: 60px;
	display: flex;
	left: 0;
	position: fixed;
	z-index: 1200;
`;
const Index = () => {
    const globals = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.globals);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        (globals.sitename === 'aliexpress' || globals.sitename === 'tmall') && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(SideAndBoarding, null,
                react_1.default.createElement(BoardingOverlay_1.BoardingOverlay, null),
                react_1.default.createElement(SideWidget_1.SideWidget, null),
                react_1.default.createElement(BoardingWidget_1.BoardingWidget, null)),
            react_1.default.createElement(Gallery_1.Gallery, { isWidget: true }))),
        react_1.default.createElement(SettingsContent_1.SettingsContent, null)));
};
exports.Index = Index;


/***/ }),

/***/ 699:
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
exports.SettingsContent = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const stores_1 = __webpack_require__(10);
const Settings_1 = __webpack_require__(312);
const S = __importStar(__webpack_require__(746));
const SettingsContent = () => {
    const { isOpen } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.settingsWidgetUI);
    return (react_1.default.createElement(react_1.default.Fragment, null, isOpen && (react_1.default.createElement(S.SettingsContent, null,
        react_1.default.createElement(S.Background, { onClick: () => stores_1.webextStore.dispatch(stores_1.settingsWidgetUISliceActions.close()) }),
        react_1.default.createElement(Settings_1.Settings, { contentPage: true })))));
};
exports.SettingsContent = SettingsContent;


/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsContent = exports.Background = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.Background = styled_components_1.default.div.withConfig({ displayName: "Background", componentId: "sc-q9kfvn" }) `
	background-color: rgba(113, 112, 112, 0.6);
	height: 100%;
	position: absolute;
	width: 100%;
`;
exports.SettingsContent = styled_components_1.default.div.withConfig({ displayName: "SettingsContent", componentId: "sc-nj1bmz" }) `
	align-items: center;
	color: #474747;
	display: flex;
	font-family: 'Open Sans', sans-serif;
	height: 100vh;
	justify-content: center;
	left: 0;
	position: fixed;
	top: 0;
	transition: opacity 0.5s;
	width: 100vw;
	z-index: 99999999999;
`;


/***/ }),

/***/ 747:
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
exports.BoardingWidget = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const stores_1 = __webpack_require__(10);
const Boarding_1 = __webpack_require__(748);
const removeHash = () => window.history.pushState('', document.title, window.location.pathname + window.location.search);
const BoardingWidget = () => {
    const boarding = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.boarding);
    react_1.useEffect(() => {
        const { hash } = window.location;
        if (hash.includes('arboarding')) {
            stores_1.webextStore.dispatch(stores_1.boardingSliceActions.changeDisplay(true));
            removeHash();
        }
    });
    if (!boarding.display) {
        return null;
    }
    return react_1.default.createElement(Boarding_1.Boarding, null);
};
exports.BoardingWidget = BoardingWidget;


/***/ }),

/***/ 748:
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
exports.Boarding = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const react_i18next_1 = __webpack_require__(8);
const styled_components_1 = __importDefault(__webpack_require__(3));
const boarding_1 = __webpack_require__(117);
const stores_1 = __webpack_require__(10);
const Widget_1 = __webpack_require__(749);
const LastBoardingWidget_1 = __webpack_require__(756);
const arrow_1 = __webpack_require__(758);
const close_1 = __webpack_require__(759);
const CloseSection = ({ displayTooltip, changeDisplayTooltip, tooltip }) => (react_1.default.createElement(CloseSectionWrapper, null,
    displayTooltip && react_1.default.createElement(TooltipText, null, tooltip),
    react_1.default.createElement(close_1.CloseIcon, { clickFn: () => {
            stores_1.webextStore.dispatch(stores_1.boardingSliceActions.changeAnimationDisplay(false));
            stores_1.webextStore.dispatch(stores_1.boardingSliceActions.changeDisplay(false));
            boarding_1.boardingSkipMetric();
        }, mouseEnterFn: () => changeDisplayTooltip(true), mouseLeaveFn: () => changeDisplayTooltip(false) })));
const getMargin = ({ boarding }) => (boarding.currentInstruction === 'greeting' ? '0 0 -6px' : '4px 0 0');
const BoardingWraper = styled_components_1.default.div.withConfig({ displayName: "BoardingWraper", componentId: "sc-2kavjz" }) `
	margin: ${getMargin};
	padding-left: 74px;
	position: relative;
`;
const TooltipText = styled_components_1.default.div.withConfig({ displayName: "TooltipText", componentId: "sc-kl4jv9" }) `
	color: #fff;
	font-family: 'Open Sans', sans-serif;
	font-size: 12px;
	font-weight: 600;
	line-height: 24px;
	margin-right: 10px;
`;
const CloseSectionWrapper = styled_components_1.default.div.withConfig({ displayName: "CloseSectionWrapper", componentId: "sc-ikqqz5" }) `
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-bottom: 12px;
`;
const Boarding = () => {
    const boarding = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.boarding);
    const [displayTooltip, changeDisplayTooltip] = react_1.useState(false);
    const { t } = react_i18next_1.useTranslation();
    if (boarding.currentInstruction === 'bye') {
        return react_1.default.createElement(LastBoardingWidget_1.LastBoardingWidget, null);
    }
    return (react_1.default.createElement(BoardingWraper, { boarding: boarding },
        react_1.default.createElement(CloseSection, { displayTooltip: displayTooltip, 
            // BoardingPopup={BoardingPopup}
            changeDisplayTooltip: changeDisplayTooltip, tooltip: t('boarding_close') }),
        react_1.default.createElement(Widget_1.Widget, null),
        react_1.default.createElement(arrow_1.ArrowIcon, null)));
};
exports.Boarding = Boarding;


/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const styled_components_1 = __importDefault(__webpack_require__(3));
const react_redux_1 = __webpack_require__(7);
const actions_1 = __webpack_require__(24);
const PulseAnimation_1 = __webpack_require__(126);
const greating_1 = __webpack_require__(751);
const price_1 = __webpack_require__(752);
const reviews_1 = __webpack_require__(753);
const seller_1 = __webpack_require__(754);
const similar_1 = __webpack_require__(755);
const FooterTextContainer = styled_components_1.default.div.withConfig({ displayName: "FooterTextContainer", componentId: "sc-1vq7qk3" }) `
	width: 65%;
`;
const ButtonContainer = styled_components_1.default.div.withConfig({ displayName: "ButtonContainer", componentId: "sc-g2ullp" }) `
	display: flex;
	justify-content: flex-end;
	padding: 45px 25px 0 0;
	width: 35%;
`;
const FooterTextWrapper = styled_components_1.default.div.withConfig({ displayName: "FooterTextWrapper", componentId: "sc-yj4g0f" }) `
	color: #50a2ff;
	font-family: 'Open Sans', sans-serif;
	font-size: 15px;
	font-weight: 600;
	line-height: 20px;
	padding: 20px 0 0 30px;
	white-space: pre-line;
`;
const IconWrapper = styled_components_1.default.div.withConfig({ displayName: "IconWrapper", componentId: "sc-1aengqs" }) `
	display: flex;
	justify-content: flex-end;
	padding-right: 34px;
	padding-top: 30px;
	width: 33%;
`;
const BoardingFooter = styled_components_1.default.div.withConfig({ displayName: "BoardingFooter", componentId: "sc-ll0eqk" }) `
	background: #f3f8ff;
	display: flex;
	height: 110px;
	width: 100%;
`;
const TextHeader = styled_components_1.default.div.withConfig({ displayName: "TextHeader", componentId: "sc-1nkssf7" }) `
	color: #1b1b1b;
	font-family: 'Open Sans', sans-serif;
	font-size: 20px;
	font-weight: bold;
	letter-spacing: -0.3px;
	line-height: 20px;
	padding-bottom: 15px;
	white-space: pre-line;
`;
const TextBody = styled_components_1.default.div.withConfig({ displayName: "TextBody", componentId: "sc-a1yb4f" }) `
	color: #1b1b1b;
	font-family: 'Open Sans', sans-serif;
	font-size: 15px;
	font-weight: 600;
	line-height: 20px;
	white-space: pre-line;
`;
const ButtonWrapper = styled_components_1.default.div.withConfig({ displayName: "ButtonWrapper", componentId: "sc-19td3qy" }) `
	background: #fff;
	border: 1px solid #50a2ff;
	border-radius: 4px;
	color: #50a2ff;
	cursor: pointer;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	font-weight: 600;
	height: 35px;
	letter-spacing: -0.3px;
	line-height: 33px;
	text-align: center;
	transition: border-color 0.3s, box-shadow 0.3s, color 0.3s;
	width: 131px;
	z-index: 1201;
	:hover {
		box-shadow: 2px 2px 10px rgba(52, 144, 246, 0.15), 1px 1px 3px rgba(71, 156, 251, 0.2);
	}
	:active {
		border-color: #2889f4;
		color: #2889f4;
	}
`;
const BoardingBody = styled_components_1.default.div.withConfig({ displayName: "BoardingBody", componentId: "sc-qatac0" }) `
	display: flex;
	flex-direction: row;
	height: 129px;
	width: 100%;
`;
const TextWrapper = styled_components_1.default.div.withConfig({ displayName: "TextWrapper", componentId: "sc-qpbyey" }) `
	padding-left: 30px;
	padding-top: 29px;
	width: 67%;
`;
const BoardingWrapper = styled_components_1.default.div.withConfig({ displayName: "BoardingWrapper", componentId: "sc-1jv3p99" }) `
	align-items: center;
	background: #ffffff;
	border-radius: 8px;
	box-shadow: 10px 10px 29px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), -2px 0px 6px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	height: 239px;
	justify-content: center;
	overflow: hidden;
	width: 450px;
	z-index: 1200;
`;
const Widget = () => {
    const boarding = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.boarding);
    const { t } = react_i18next_1.useTranslation();
    const instruction = boarding.currentInstruction;
    const icon = (instruction === 'greeting' && react_1.default.createElement(greating_1.GreatingIcon, null)) ||
        (instruction === 'price' && react_1.default.createElement(price_1.PriceIcon, null)) ||
        (instruction === 'seller' && react_1.default.createElement(seller_1.SellerIcon, null)) ||
        (instruction === 'similar' && react_1.default.createElement(similar_1.SimilarIcon, null)) ||
        (instruction === 'reviews' && react_1.default.createElement(reviews_1.ReviewsIcon, null));
    // TODO в nextInstruction нужно передавать 1 параметр
    return (react_1.default.createElement(BoardingWrapper, { className: "arboardingclicker" },
        react_1.default.createElement(BoardingBody, null,
            react_1.default.createElement(TextWrapper, null,
                react_1.default.createElement(TextHeader, null, t(`boarding_widget_${instruction}_title`)),
                react_1.default.createElement(TextBody, null, t(`boarding_widget_${instruction}_description`))),
            react_1.default.createElement(IconWrapper, null, icon)),
        react_1.default.createElement(BoardingFooter, null,
            react_1.default.createElement(FooterTextContainer, null,
                react_1.default.createElement(FooterTextWrapper, null, t(`boarding_widget_${instruction}_tip`))),
            react_1.default.createElement(ButtonContainer, null,
                react_1.default.createElement(ButtonWrapper, { className: "arboardingclicker", onClick: () => actions_1.BoardingActions.nextInstruction() }, t('boarding_button_next')),
                boarding.display && boarding.displayAnimation && boarding.remainInstructions.length === 1 && (react_1.default.createElement(PulseAnimation_1.PulseAnimation, { onClick: () => actions_1.BoardingActions.nextInstruction(), bottomMargin: "22", rightMargin: "65" }))))));
};
exports.Widget = Widget;


/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreatingIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const GreatingIcon = () => (react_1.default.createElement("svg", { width: 112, height: 84, viewBox: "0 0 112 84", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.809 0C38.2283 0 34.5149 3.71339 34.5149 8.29408L34.5149 8.31706H23.1924C18.6514 8.31706 14.9702 11.9983 14.9702 16.5393C14.9702 21.0803 18.6514 24.7615 23.1924 24.7615H26.0177C23.9508 25.9383 22.2474 27.6801 21.1176 29.7767H9.99997C4.47714 29.7767 0 34.2538 0 39.7766C0 44.4865 3.25604 48.4358 7.63994 49.4965C4.62757 51.7225 2.6741 55.2994 2.6741 59.3325C2.6741 66.0826 8.14618 71.5547 14.8963 71.5547H23.4484C22.708 72.789 22.2824 74.2337 22.2824 75.7777C22.2824 80.3187 25.9636 83.9999 30.5046 83.9999H91.1595C95.7005 83.9999 99.3817 80.3187 99.3817 75.7777C99.3817 74.2337 98.9561 72.789 98.2157 71.5547H99.6387C106.389 71.5547 111.861 66.0826 111.861 59.3325C111.861 52.5824 106.389 47.1103 99.6387 47.1103H91.7241C92.0379 46.8193 92.3329 46.5084 92.6073 46.1796C95.8942 43.8914 98.0454 40.0853 98.0454 35.7767C98.0454 28.7811 92.3744 23.1101 85.3788 23.1101H85.2253C87.2046 21.6187 88.4885 19.2537 88.504 16.5882L103.151 16.5882C107.732 16.5882 111.445 12.8748 111.445 8.29408C111.445 3.71339 107.732 0 103.151 0L42.809 0Z", fill: "#F2F8FF" }),
    react_1.default.createElement("path", { d: "M32.9429 62.9898C32.881 62.9528 32.8612 62.8728 32.8988 62.8111C32.9363 62.7494 33.017 62.7295 33.079 62.7666L34.7792 63.7833C34.8412 63.8204 34.861 63.9004 34.8234 63.962C34.7858 64.0237 34.7051 64.0436 34.6431 64.0066L32.9429 62.9898Z", fill: "#FD6559" }),
    react_1.default.createElement("path", { d: "M33.2425 64.1715C33.2056 64.2335 33.2262 64.3133 33.2886 64.3497C33.3509 64.3861 33.4314 64.3653 33.4683 64.3033L34.4812 62.6007C34.5181 62.5387 34.4975 62.4589 34.4351 62.4225C34.3727 62.3861 34.2922 62.4069 34.2553 62.4689L33.2425 64.1715Z", fill: "#FD6559" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M49.4851 17.2571C49.4851 17.8312 49.9504 18.2965 50.5245 18.2965C51.0985 18.2965 51.5638 17.8312 51.5638 17.2571C51.5638 16.6831 51.0985 16.2178 50.5245 16.2178C49.9504 16.2178 49.4851 16.6831 49.4851 17.2571ZM51.255 17.2574C51.255 17.661 50.9279 17.9881 50.5243 17.9881C50.1208 17.9881 49.7937 17.661 49.7937 17.2574C49.7937 16.8539 50.1208 16.5267 50.5243 16.5267C50.9279 16.5267 51.255 16.8539 51.255 17.2574Z", fill: "#FF9F08" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M81.0891 38.0491C81.0891 38.6232 81.5545 39.0885 82.1285 39.0885C82.7025 39.0885 83.1678 38.6232 83.1678 38.0491C83.1678 37.4751 82.7025 37.0098 82.1285 37.0098C81.5545 37.0098 81.0891 37.4751 81.0891 38.0491ZM82.8586 38.0491C82.8586 38.4527 82.5315 38.7798 82.128 38.7798C81.7244 38.7798 81.3973 38.4527 81.3973 38.0491C81.3973 37.6456 81.7244 37.3185 82.128 37.3185C82.5315 37.3185 82.8586 37.6456 82.8586 38.0491Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.94027 14.5541C9.28468 14.5541 9.56389 14.2749 9.56389 13.9305C9.56389 13.5861 9.28468 13.3069 8.94027 13.3069C8.59585 13.3069 8.31665 13.5861 8.31665 13.9305C8.31665 14.2749 8.59585 14.5541 8.94027 14.5541Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { d: "M74.583 8.9002C74.4882 8.84789 74.4544 8.72896 74.5075 8.63457C74.5607 8.54017 74.6807 8.50604 74.7755 8.55835L77.3782 9.99353C77.473 10.0458 77.5068 10.1648 77.4537 10.2592C77.4005 10.3536 77.2805 10.3877 77.1857 10.3354L74.583 8.9002Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M75.093 10.6564C75.0409 10.7514 75.076 10.8699 75.1714 10.9212C75.2668 10.9725 75.3864 10.9371 75.4386 10.8422L76.8689 8.23691C76.9211 8.14196 76.886 8.0234 76.7906 7.9721C76.6951 7.92081 76.5755 7.9562 76.5234 8.05115L75.093 10.6564Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M71.0633 73.0431C71.0669 72.9348 71.1577 72.8507 71.2659 72.8554C71.3742 72.86 71.459 72.9515 71.4553 73.0598L71.3551 76.0309C71.3514 76.1392 71.2607 76.2232 71.1524 76.2186C71.0442 76.214 70.9594 76.1224 70.963 76.0141L71.0633 73.0431Z", fill: "#DADADA" }),
    react_1.default.createElement("path", { d: "M69.7275 74.2918C69.6192 74.2884 69.5294 74.3734 69.5269 74.4817C69.5244 74.59 69.6102 74.6807 69.7185 74.6841L72.6897 74.7793C72.798 74.7828 72.8878 74.6978 72.8903 74.5895C72.8928 74.4812 72.807 74.3905 72.6988 74.3871L69.7275 74.2918Z", fill: "#DADADA" }),
    react_1.default.createElement("path", { d: "M58.7661 50.8228L46.4475 38.5043L56.5076 28.4442C61.3324 23.6195 67.4916 20.4372 74.1641 19.308L76.0119 19C76.1145 19 76.2171 19 76.3198 19C77.3464 19 78.1676 19.8212 78.1676 20.8478C78.1676 20.9505 78.1676 21.0531 78.1676 21.1558L77.9624 23.1062C76.8332 29.7787 73.6509 35.938 68.9288 40.6601L58.7661 50.8228Z", fill: "#C0DBF1" }),
    react_1.default.createElement("path", { d: "M69.8526 32.5501L55.1731 47.2296L58.766 50.8225L68.826 40.7624C73.6508 35.9376 76.7304 29.8811 77.8596 23.2085L78.2702 21.2581C78.2702 21.1554 78.2702 21.0528 78.2702 20.9501C78.2702 20.4369 78.065 20.0262 77.757 19.7183C76.2172 24.4404 73.5482 28.8545 69.8526 32.5501Z", fill: "#7DA4CC" }),
    react_1.default.createElement("path", { d: "M59.2793 60.5752C58.6634 59.9593 57.6368 59.9593 57.0209 60.5752C56.1997 61.3965 55.6864 63.9628 55.5837 64.0655C55.5837 64.1682 55.5837 64.1682 55.5837 64.1682C55.5837 64.1682 55.6864 64.2709 55.6864 64.1682C55.7891 64.1682 58.2528 63.6549 59.1767 62.731C59.9978 62.1151 59.9978 61.1912 59.2793 60.5752Z", fill: "#FF9F08" }),
    react_1.default.createElement("path", { d: "M36.6944 37.991C36.0785 37.3751 35.052 37.3751 34.436 37.991C33.6148 38.8122 33.1016 41.2759 33.1016 41.3786C33.1016 41.4813 33.1016 41.4813 33.1016 41.4813C33.1016 41.4813 33.2042 41.584 33.2042 41.4813C33.3069 41.4813 35.7706 40.968 36.6945 40.0441C37.413 39.5309 37.413 38.6069 36.6944 37.991Z", fill: "#FF9F08" }),
    react_1.default.createElement("path", { d: "M43.984 53.2869C42.1362 51.4392 39.0565 51.4392 37.2088 53.2869C34.6424 55.8533 33.1027 63.347 33 63.655C33 63.8602 33 63.9629 33.1027 64.0656C33.308 64.1683 33.5133 64.1683 33.7186 64.1683C34.0266 64.0656 41.5203 62.6284 44.0867 59.9595C45.9344 58.1117 45.9344 55.1347 43.984 53.2869Z", fill: "#FF9F08" }),
    react_1.default.createElement("path", { d: "M59.7923 55.9551L56.7126 52.8755L62.8719 46.7163V52.8755L59.7923 55.9551Z", fill: "#4B7394" }),
    react_1.default.createElement("path", { d: "M61.8459 62.1144L57.7397 58.0082L65.1309 50.6171C65.6441 50.1039 66.3627 49.7959 67.184 49.7959C68.8264 49.7959 70.0583 51.1304 70.0583 52.6702C70.0583 53.4915 69.7503 54.2101 69.2371 54.7233L61.8459 62.1144Z", fill: "#C0DBF1" }),
    react_1.default.createElement("path", { d: "M69.237 52.6702L61.8459 60.0613L58.7663 56.9816L57.7397 58.0082L61.8459 62.1143L69.237 54.7232C69.7502 54.2099 70.0582 53.4913 70.0582 52.6701C70.0582 52.2594 69.9555 51.9515 69.8529 51.6436C69.7502 52.0542 69.5449 52.3622 69.237 52.6702Z", fill: "#7DA4CC" }),
    react_1.default.createElement("path", { d: "M41.3145 47.7428C42.033 47.0243 42.8543 46.5109 43.6755 46.3056L45.4207 45.6897L51.5799 51.8489L50.9639 53.5941C50.656 54.518 50.1427 55.3392 49.5268 55.9551L41.3145 47.7428Z", fill: "#4B7394" }),
    react_1.default.createElement("path", { d: "M41.3145 37.4778L44.3941 40.5574L50.5533 34.3982H44.3941L41.3145 37.4778Z", fill: "#4B7394" }),
    react_1.default.createElement("path", { d: "M35.1555 35.4241L39.2616 39.5302L46.6527 32.1391C47.166 31.6259 47.474 30.9072 47.474 30.086C47.474 28.5461 46.1395 27.2117 44.5996 27.2117C43.7784 27.2117 43.0598 27.5196 42.5465 28.0329L35.1555 35.4241Z", fill: "#C0DBF1" }),
    react_1.default.createElement("path", { d: "M61.8459 39.5304C64.1136 39.5304 65.952 37.692 65.952 35.4242C65.952 33.1565 64.1136 31.3181 61.8459 31.3181C59.5781 31.3181 57.7397 33.1565 57.7397 35.4242C57.7397 37.692 59.5781 39.5304 61.8459 39.5304Z", fill: "#7DA4CC" }),
    react_1.default.createElement("path", { d: "M61.8454 40.5572C58.971 40.5572 56.7126 38.2988 56.7126 35.4245C56.7126 32.5501 58.971 30.2917 61.8454 30.2917C64.7197 30.2917 66.9781 32.5501 66.9781 35.4245C66.9781 38.2988 64.7197 40.5572 61.8454 40.5572ZM61.8454 32.3449C60.1002 32.3449 58.7658 33.6793 58.7658 35.4245C58.7658 37.1696 60.1002 38.5041 61.8454 38.5041C63.5905 38.5041 64.925 37.1696 64.925 35.4245C64.925 33.6793 63.5905 32.3449 61.8454 32.3449Z", fill: "white" }),
    react_1.default.createElement("path", { d: "M60.2036 38.0933C59.8956 37.58 59.793 37.0668 59.793 36.4508C59.793 34.7057 61.1274 33.3712 62.8726 33.3712C63.4885 33.3712 64.0018 33.5765 64.515 33.7819C63.8991 32.9607 62.9752 32.3447 61.846 32.3447C60.1008 32.3447 58.7664 33.6792 58.7664 35.4243C58.7664 36.5534 59.3824 37.4774 60.2036 38.0933Z", fill: "#4B7394" }),
    react_1.default.createElement("path", { d: "M58.7656 50.8232L55.378 54.2108C54.9673 54.6214 54.3515 54.6214 53.9408 54.2108L43.0595 43.3294C42.6488 42.9187 42.6488 42.3029 43.0595 41.8922L46.447 38.5046L58.7656 50.8232Z", fill: "#FF3939" }),
    react_1.default.createElement("path", { d: "M58.7661 50.8235L55.3786 54.2111C54.9679 54.6217 54.3521 54.6217 53.9414 54.2111L51.1553 51.425C53.9847 48.4738 53.2773 49.1811 55.1636 47.2209L58.7661 50.8235Z", fill: "#EB1A1A" }),
    react_1.default.createElement("path", { d: "M61.8657 62.1047L64.9143 59.0562L60.8064 54.9483L57.7578 57.9969L61.8657 62.1047Z", fill: "#FF3939" }),
    react_1.default.createElement("path", { d: "M61.8657 62.1047L64.9143 59.0562L63.8911 58.033L60.8425 61.0816L61.8657 62.1047Z", fill: "#EB1A1A" }),
    react_1.default.createElement("path", { d: "M76.4228 19C76.3201 19 76.2175 19 76.1148 19L74.1644 19.308C70.9821 19.8212 68.0052 20.8478 65.1309 22.2849C65.1309 22.2849 66.9786 24.1326 70.0583 27.2123C73.138 30.292 74.9857 32.1398 74.9857 32.1398C76.4229 29.2654 77.3468 26.2885 77.9627 23.1062L78.2706 21.2585C78.2706 21.1558 78.2706 21.0532 78.2706 20.9505C78.2706 19.8212 77.4494 19 76.4228 19Z", fill: "#FF3939" }),
    react_1.default.createElement("path", { d: "M46.6527 30.0864L39.2616 37.4775L36.182 34.3979L35.1555 35.4244L39.2616 39.5305L46.6527 32.1394C47.166 31.6262 47.474 30.9075 47.474 30.0863C47.474 29.6757 47.3713 29.3678 47.2687 29.0598C47.166 29.4705 46.9607 29.7784 46.6527 30.0864Z", fill: "#7DA4CC" }),
    react_1.default.createElement("path", { d: "M39.272 39.5139L42.3206 36.4653L38.2161 32.3609L35.1675 35.4095L39.272 39.5139Z", fill: "#FF3939" }),
    react_1.default.createElement("path", { d: "M39.2715 39.5139L42.3201 36.4653L41.3002 35.4454L38.2516 38.494L39.2715 39.5139Z", fill: "#EB1A1A" }),
    react_1.default.createElement("path", { d: "M72.4192 29.573L74.9855 32.1394C76.4227 29.2651 77.3466 26.2881 77.9625 23.1058L78.2704 21.2581C78.2704 21.1554 78.2704 21.0528 78.2704 20.9501C78.2704 20.4369 78.0652 20.0262 77.7572 19.7183C76.628 23.2084 74.7803 26.596 72.4192 29.573Z", fill: "#EB1A1A" })));
exports.GreatingIcon = GreatingIcon;


/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const PriceIcon = () => (react_1.default.createElement("svg", { width: 112, height: 84, viewBox: "0 0 112 84", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.809 0C38.2283 0 34.5149 3.71339 34.5149 8.29408L34.5149 8.31706H23.1924C18.6514 8.31706 14.9702 11.9983 14.9702 16.5393C14.9702 21.0803 18.6514 24.7615 23.1924 24.7615H26.0177C23.9508 25.9383 22.2474 27.6801 21.1176 29.7767H9.99997C4.47714 29.7767 0 34.2538 0 39.7766C0 44.4865 3.25604 48.4358 7.63994 49.4965C4.62757 51.7225 2.6741 55.2994 2.6741 59.3325C2.6741 66.0826 8.14618 71.5547 14.8963 71.5547H23.4484C22.708 72.789 22.2824 74.2337 22.2824 75.7777C22.2824 80.3187 25.9636 83.9999 30.5046 83.9999H91.1595C95.7005 83.9999 99.3817 80.3187 99.3817 75.7777C99.3817 74.2337 98.9561 72.789 98.2157 71.5547H99.6387C106.389 71.5547 111.861 66.0826 111.861 59.3325C111.861 52.5824 106.389 47.1103 99.6387 47.1103H91.7241C92.0379 46.8193 92.3329 46.5084 92.6073 46.1796C95.8942 43.8914 98.0454 40.0853 98.0454 35.7767C98.0454 28.7811 92.3744 23.1101 85.3788 23.1101H85.2253C87.2046 21.6187 88.4885 19.2537 88.504 16.5882L103.151 16.5882C107.732 16.5882 111.445 12.8748 111.445 8.29408C111.445 3.71339 107.732 0 103.151 0L42.809 0Z", fill: "#F2F8FF" }),
    react_1.default.createElement("path", { d: "M32.9428 62.9898C32.8808 62.9528 32.8611 62.8728 32.8986 62.8111C32.9362 62.7494 33.0169 62.7295 33.0789 62.7666L34.7791 63.7833C34.8411 63.8204 34.8608 63.9004 34.8233 63.962C34.7857 64.0237 34.705 64.0436 34.643 64.0066L32.9428 62.9898Z", fill: "#FD6559" }),
    react_1.default.createElement("path", { d: "M33.2422 64.1715C33.2053 64.2335 33.226 64.3133 33.2883 64.3497C33.3507 64.3861 33.4312 64.3653 33.4681 64.3033L34.4809 62.6007C34.5178 62.5387 34.4972 62.4589 34.4348 62.4225C34.3725 62.3861 34.292 62.4069 34.2551 62.4689L33.2422 64.1715Z", fill: "#FD6559" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.4849 38.2571C34.4849 38.8312 34.9502 39.2965 35.5242 39.2965C36.0983 39.2965 36.5636 38.8312 36.5636 38.2571C36.5636 37.6831 36.0983 37.2178 35.5242 37.2178C34.9502 37.2178 34.4849 37.6831 34.4849 38.2571ZM36.2548 38.2574C36.2548 38.661 35.9276 38.9881 35.5241 38.9881C35.1205 38.9881 34.7934 38.661 34.7934 38.2574C34.7934 37.8539 35.1205 37.5267 35.5241 37.5267C35.9276 37.5267 36.2548 37.8539 36.2548 38.2574Z", fill: "#FF9F08" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M81.0892 38.0491C81.0892 38.6232 81.5546 39.0885 82.1286 39.0885C82.7026 39.0885 83.168 38.6232 83.168 38.0491C83.168 37.4751 82.7026 37.0098 82.1286 37.0098C81.5546 37.0098 81.0892 37.4751 81.0892 38.0491ZM82.8588 38.0491C82.8588 38.4527 82.5316 38.7798 82.1281 38.7798C81.7245 38.7798 81.3974 38.4527 81.3974 38.0491C81.3974 37.6456 81.7245 37.3185 82.1281 37.3185C82.5316 37.3185 82.8588 37.6456 82.8588 38.0491Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.94039 14.5542C9.28481 14.5542 9.56401 14.275 9.56401 13.9306C9.56401 13.5862 9.28481 13.307 8.94039 13.307C8.59598 13.307 8.31677 13.5862 8.31677 13.9306C8.31677 14.275 8.59598 14.5542 8.94039 14.5542Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { d: "M69.5833 18.9004C69.4884 18.8481 69.4546 18.7292 69.5078 18.6348C69.5609 18.5404 69.6809 18.5063 69.7758 18.5586L72.3784 19.9938C72.4733 20.0461 72.5071 20.165 72.4539 20.2594C72.4008 20.3538 72.2808 20.3879 72.1859 20.3356L69.5833 18.9004Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M70.0934 20.6567C70.0412 20.7516 70.0763 20.8702 70.1718 20.9215C70.2672 20.9728 70.3868 20.9374 70.4389 20.8424L71.8693 18.2372C71.9214 18.1422 71.8863 18.0236 71.7909 17.9723C71.6955 17.9211 71.5759 17.9564 71.5238 18.0514L70.0934 20.6567Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M71.0634 73.0431C71.0671 72.9348 71.1578 72.8507 71.266 72.8554C71.3743 72.86 71.4591 72.9515 71.4554 73.0598L71.3552 76.0309C71.3515 76.1392 71.2608 76.2232 71.1526 76.2186C71.0443 76.214 70.9595 76.1224 70.9632 76.0141L71.0634 73.0431Z", fill: "#DADADA" }),
    react_1.default.createElement("path", { d: "M69.7275 74.2918C69.6192 74.2884 69.5294 74.3734 69.5269 74.4817C69.5244 74.59 69.6102 74.6807 69.7185 74.6841L72.6897 74.7793C72.798 74.7828 72.8878 74.6978 72.8903 74.5895C72.8928 74.4812 72.807 74.3905 72.6988 74.3871L69.7275 74.2918Z", fill: "#DADADA" }),
    react_1.default.createElement("path", { d: "M62.6236 36.2389L59.8329 35.3438C59.8098 35.3362 59.7867 35.3286 59.7631 35.3215C57.8736 34.7624 55.8691 35.658 54.1211 36.2134C54.1043 33.059 58.5037 30.5178 61 30L61.5 23L58.3439 21.9841C57.2106 22.2493 56.1152 22.6714 55.0898 23.2228L51.8178 22.1816L49.0303 24.8019L49.6925 27.6703C46.5027 31.3196 44.6606 35.9728 45.7859 40.8469C46.2023 42.6506 46.8937 44.7794 48.858 45.3769L52.051 46.3688C53.9091 46.9774 55.8225 46.0681 57.5853 45.5657C57.631 46.7374 57.2723 47.6949 56.5 48.5C54.5266 50.5571 51.2562 51.9001 48.4521 52.2534L50.0569 59.2046L53.3228 60.2192C54.5251 59.9425 55.7099 59.4656 56.8771 58.7899L57.1172 59.8299L60.7575 60.7511L63.1705 58.2242L62.2376 54.1834C64.4719 51.5415 65.9917 48.3024 66.246 44.8073C66.4284 42.3008 66.1446 37.8196 63.5026 36.5208C63.2377 36.3906 62.944 36.2975 62.6236 36.2389Z", fill: "#099B10" }),
    react_1.default.createElement("path", { d: "M61.5604 22.4858L58.3924 21.86C57.1672 22.1467 55.9834 22.5903 54.8406 23.1884L55.5151 26.1101C57.512 24.4963 59.2781 23.02 61.5604 22.4858Z", fill: "#099B10" }),
    react_1.default.createElement("path", { d: "M60.9573 47.4602L57.4998 47.0004C56.2645 49.8248 51.8354 51.7995 48.4732 52.2464L52.5001 53.0005C53.8122 52.826 54.8213 52.57 56.2645 51.953C57.7077 51.3366 60.0511 49.5294 60.9573 47.4602Z", fill: "#52CC01" }),
    react_1.default.createElement("path", { d: "M52.553 25.2309L49.0176 24.8036L51.8163 22.195L55.2364 22.603L52.553 25.2309Z", fill: "#52CC01" }),
    react_1.default.createElement("path", { d: "M59.8558 56.7816C57.9362 58.4905 55.9578 59.5792 53.9209 60.0479L52.2925 52.9942C54.8294 52.6874 57.4571 51.5254 59.3154 49.7032C60.2174 48.8186 61.188 47.6504 61.0758 46.2385C60.9431 44.5675 59.7028 44.7992 58.5202 45.0894C56.1131 45.68 52.9194 47.4219 50.9327 44.8042C49.2787 42.625 48.9807 39.0008 49.3283 36.3954C49.7477 33.2525 51.2898 30.4566 53.2389 28.1206L52.567 25.2099L55.2424 22.5864L55.9046 25.4546C57.6551 23.9294 59.543 22.929 61.568 22.4544L61.4279 30.0178C59.4999 30.4999 57.5418 31.3793 56.0942 32.7988C55.281 33.5963 53.6237 35.7506 54.9236 36.9664C55.791 37.7778 57.9847 36.7054 58.8402 36.3855C60.3367 35.86 62.3367 35.3361 63.8111 36.3217C65.3306 37.3375 65.8594 39.5586 66.1283 41.2818C66.8582 45.9583 65.3285 50.5267 62.5017 54.0305L63.4484 58.1309L60.7731 60.7545L59.8558 56.7816Z", fill: "#4DC100" })));
exports.PriceIcon = PriceIcon;


/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const ReviewsIcon = () => (react_1.default.createElement("svg", { width: 112, height: 84, viewBox: "0 0 112 84", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.809 0C38.2283 0 34.5149 3.71339 34.5149 8.29408L34.5149 8.31706H23.1924C18.6514 8.31706 14.9702 11.9983 14.9702 16.5393C14.9702 21.0803 18.6514 24.7615 23.1924 24.7615H26.0177C23.9508 25.9383 22.2474 27.6801 21.1176 29.7767H9.99997C4.47714 29.7767 0 34.2538 0 39.7766C0 44.4865 3.25604 48.4358 7.63994 49.4965C4.62757 51.7225 2.6741 55.2994 2.6741 59.3325C2.6741 66.0826 8.14618 71.5547 14.8963 71.5547H23.4484C22.708 72.789 22.2824 74.2337 22.2824 75.7777C22.2824 80.3187 25.9636 83.9999 30.5046 83.9999H91.1595C95.7005 83.9999 99.3817 80.3187 99.3817 75.7777C99.3817 74.2337 98.9561 72.789 98.2157 71.5547H99.6387C106.389 71.5547 111.861 66.0826 111.861 59.3325C111.861 52.5824 106.389 47.1103 99.6387 47.1103H91.7241C92.0379 46.8193 92.3329 46.5084 92.6073 46.1796C95.8942 43.8914 98.0454 40.0853 98.0454 35.7767C98.0454 28.7811 92.3744 23.1101 85.3788 23.1101H85.2253C87.2046 21.6187 88.4885 19.2537 88.504 16.5882L103.151 16.5882C107.732 16.5882 111.445 12.8748 111.445 8.29408C111.445 3.71339 107.732 0 103.151 0L42.809 0Z", fill: "#F2F8FF" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.4844 41.2581C18.4844 41.8321 18.9497 42.2975 19.5237 42.2975C20.0978 42.2975 20.5631 41.8321 20.5631 41.2581C20.5631 40.6841 20.0978 40.2188 19.5237 40.2188C18.9497 40.2188 18.4844 40.6841 18.4844 41.2581ZM20.2543 41.2584C20.2543 41.6619 19.9271 41.9891 19.5236 41.9891C19.1201 41.9891 18.7929 41.6619 18.7929 41.2584C18.7929 40.8548 19.1201 40.5277 19.5236 40.5277C19.9271 40.5277 20.2543 40.8548 20.2543 41.2584Z", fill: "#FF9F08" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M81.0891 38.0491C81.0891 38.6232 81.5545 39.0885 82.1285 39.0885C82.7025 39.0885 83.1678 38.6232 83.1678 38.0491C83.1678 37.4751 82.7025 37.0098 82.1285 37.0098C81.5545 37.0098 81.0891 37.4751 81.0891 38.0491ZM82.8586 38.0491C82.8586 38.4527 82.5315 38.7798 82.128 38.7798C81.7244 38.7798 81.3973 38.4527 81.3973 38.0491C81.3973 37.6456 81.7244 37.3185 82.128 37.3185C82.5315 37.3185 82.8586 37.6456 82.8586 38.0491Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.9405 19.5544C12.2849 19.5544 12.5641 19.2752 12.5641 18.9307C12.5641 18.5863 12.2849 18.3071 11.9405 18.3071C11.5961 18.3071 11.3169 18.5863 11.3169 18.9307C11.3169 19.2752 11.5961 19.5544 11.9405 19.5544Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { d: "M61.1224 15.8291C61.0436 15.7857 61.0155 15.6869 61.0596 15.6085C61.1038 15.5301 61.2034 15.5018 61.2822 15.5452L63.4438 16.7372C63.5226 16.7806 63.5507 16.8794 63.5066 16.9578C63.4624 17.0362 63.3628 17.0645 63.284 17.0211L61.1224 15.8291Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M61.5461 17.2876C61.5028 17.3664 61.532 17.4649 61.6112 17.5075C61.6905 17.5501 61.7898 17.5207 61.8331 17.4419L63.0211 15.2781C63.0644 15.1992 63.0353 15.1007 62.956 15.0581C62.8768 15.0155 62.7774 15.0449 62.7341 15.1238L61.5461 17.2876Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M41.618 67.2702C41.6216 67.1619 41.7123 67.0779 41.8206 67.0825C41.9289 67.0872 42.0137 67.1787 42.01 67.287L41.9098 70.2581C41.9061 70.3664 41.8154 70.4504 41.7071 70.4458C41.5989 70.4411 41.5141 70.3496 41.5177 70.2413L41.618 67.2702Z", fill: "#DADADA" }),
    react_1.default.createElement("path", { d: "M40.2822 68.519C40.1739 68.5155 40.0841 68.6005 40.0816 68.7089C40.0791 68.8172 40.1649 68.9078 40.2731 68.9113L43.2444 69.0065C43.3527 69.01 43.4425 68.925 43.445 68.8167C43.4475 68.7083 43.3617 68.6177 43.2534 68.6142L40.2822 68.519Z", fill: "#DADADA" }),
    react_1.default.createElement("path", { d: "M31 32.425C31 30.0281 32.9431 28.085 35.34 28.085H67.8903C70.2872 28.085 72.2303 30.0281 72.2303 32.425V49.7851C72.2303 52.1821 70.2872 54.1252 67.8903 54.1252H46.1901L41.8501 58.4652L40.7651 54.1252H35.34C32.9431 54.1252 31 52.1821 31 49.7851V32.425Z", fill: "#CA2D2D" }),
    react_1.default.createElement("path", { d: "M31 32.425C31 30.0281 32.9431 28.085 35.34 28.085H67.8903C70.2872 28.085 72.2303 30.0281 72.2303 32.425V49.7851C72.2303 52.1821 70.2872 54.1252 67.8903 54.1252H46.1901L41.8501 58.4652L40.7651 54.1252H35.34C32.9431 54.1252 31 52.1821 31 49.7851V32.425Z", fill: "#CA2D2D" }),
    react_1.default.createElement("path", { d: "M33.1699 31.34C33.1699 28.9431 35.113 27 37.51 27H68.9752C71.3721 27 73.3152 28.9431 73.3152 31.34V47.6152C73.3152 50.0121 71.3721 51.9552 68.9752 51.9552H48.36L44.02 56.2952L42.935 51.9552H37.51C35.113 51.9552 33.1699 50.0121 33.1699 47.6152V31.34Z", fill: "#ED3E3E" }),
    react_1.default.createElement("rect", { x: "53.7852", y: "33.51", width: "14.1051", height: "2.17002", rx: "1.08501", fill: "white" }),
    react_1.default.createElement("path", { d: "M53.7852 34.595C53.7852 33.9958 54.2709 33.51 54.8702 33.51V35.68C54.2709 35.68 53.7852 35.1943 53.7852 34.595Z", fill: "#DFDADA" }),
    react_1.default.createElement("rect", { x: "53.7852", y: "37.8501", width: "14.1051", height: "2.17002", rx: "1.08501", fill: "white" }),
    react_1.default.createElement("path", { d: "M53.7852 38.9351C53.7852 38.3359 54.2709 37.8501 54.8702 37.8501V40.0201C54.2709 40.0201 53.7852 39.5343 53.7852 38.9351Z", fill: "#DFDADA" }),
    react_1.default.createElement("rect", { x: "53.7852", y: "42.1901", width: "7.59506", height: "2.17002", rx: "1.08501", fill: "white" }),
    react_1.default.createElement("path", { d: "M53.7852 43.2751C53.7852 42.6758 54.2709 42.1901 54.8702 42.1901V44.3601C54.2709 44.3601 53.7852 43.8743 53.7852 43.2751Z", fill: "#DFDADA" }),
    react_1.default.createElement("path", { d: "M49.6515 35.0682C48.3567 33.7733 46.2574 33.7733 44.9625 35.0682L44.2311 35.7996C44.0567 35.9739 43.7739 35.9739 43.5995 35.7996L42.8798 35.0798C41.585 33.785 39.4857 33.785 38.1908 35.0798C36.896 36.3747 36.896 38.474 38.1908 39.7688L43.6 45.178C43.7744 45.3523 44.0572 45.3523 44.2315 45.178L49.6515 39.7571C50.9463 38.4623 50.9463 36.363 49.6515 35.0682Z", fill: "white" }),
    react_1.default.createElement("path", { d: "M39.9252 39.7681C38.6304 38.4733 38.6304 36.3739 39.9252 35.0791C40.3499 34.6543 40.8615 34.3699 41.4025 34.2238C40.294 33.9245 39.0609 34.209 38.1908 35.0791C36.896 36.3739 36.896 38.4732 38.1908 39.7681L43.6 45.1772C43.7744 45.3516 44.0572 45.3516 44.2315 45.1772L44.7829 44.6258L39.9252 39.7681Z", fill: "#DFDADA" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M89.5786 58.8781L83.3639 57.8254L78.3272 64.2016L84.4513 65.2915L89.5786 58.8781Z", fill: "#008BE3" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M83.4341 57.8821L79.4087 51.9553L74.4003 58.4594L78.3377 64.202L83.4341 57.8821Z", fill: "#0099FF" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M79.4059 51.9565L85.398 52.9389L89.5906 58.885L83.4232 57.8763L79.4059 51.9565Z", fill: "#3AB0FF" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M84.6726 55.8197L81.8196 55.5428L80.6449 53.7799L83.3609 54.1262L84.6726 55.8197Z", fill: "white" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M80.3066 57.4214L81.8408 55.5347L80.6567 53.7635L79.0111 55.8811L79.9235 56.1694L80.3066 57.4214Z", fill: "#E1E1E1" })));
exports.ReviewsIcon = ReviewsIcon;


/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const SellerIcon = () => (react_1.default.createElement("svg", { width: 112, height: 84, viewBox: "0 0 112 84", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.809 0C38.2283 0 34.5149 3.71339 34.5149 8.29408L34.5149 8.31706H23.1924C18.6514 8.31706 14.9702 11.9983 14.9702 16.5393C14.9702 21.0803 18.6514 24.7615 23.1924 24.7615H26.0177C23.9508 25.9383 22.2474 27.6801 21.1176 29.7767H9.99997C4.47714 29.7767 0 34.2538 0 39.7766C0 44.4865 3.25604 48.4358 7.63994 49.4965C4.62757 51.7225 2.6741 55.2994 2.6741 59.3325C2.6741 66.0826 8.14618 71.5547 14.8963 71.5547H23.4484C22.708 72.789 22.2824 74.2337 22.2824 75.7777C22.2824 80.3187 25.9636 83.9999 30.5046 83.9999H91.1595C95.7005 83.9999 99.3817 80.3187 99.3817 75.7777C99.3817 74.2337 98.9561 72.789 98.2157 71.5547H99.6387C106.389 71.5547 111.861 66.0826 111.861 59.3325C111.861 52.5824 106.389 47.1103 99.6387 47.1103H91.7241C92.0379 46.8193 92.3329 46.5084 92.6073 46.1796C95.8942 43.8914 98.0454 40.0853 98.0454 35.7767C98.0454 28.7811 92.3744 23.1101 85.3788 23.1101H85.2253C87.2046 21.6187 88.4885 19.2537 88.504 16.5882L103.151 16.5882C107.732 16.5882 111.445 12.8748 111.445 8.29408C111.445 3.71339 107.732 0 103.151 0L42.809 0Z", fill: "#F2F8FF" }),
    react_1.default.createElement("path", { d: "M71.7228 49.2522V24.4727L65.5158 21L59.3089 23.7632V49.2522L65.5148 52.7245L71.7228 49.2522Z", fill: "#4DC100" }),
    react_1.default.createElement("path", { d: "M59.3157 23.7708L65.5174 27.0059L71.7243 24.4508L65.5174 21L59.3157 23.7708Z", fill: "#52CC01" }),
    react_1.default.createElement("path", { d: "M65.5191 27.0319V52.6914L59.3319 49.2891V23.7712L65.5191 27.0319Z", fill: "#36A500" }),
    react_1.default.createElement("path", { d: "M62.0699 54.7088V42.4654L55.863 38.9316L49.656 42.4605V54.7088L55.8619 58.2422L62.0699 54.7088Z", fill: "#EB1A1A" }),
    react_1.default.createElement("path", { d: "M49.656 42.3776L55.872 45.8283L62.0706 42.4545L55.863 38.9316L49.656 42.3776Z", fill: "#FF3939" }),
    react_1.default.createElement("path", { d: "M55.8525 45.8263V58.2441L51.0391 55.5049L51.006 43.1089L55.8525 45.8263Z", fill: "#DD1616" }),
    react_1.default.createElement("path", { d: "M52.4139 60.2902V39.6424L46.207 36.1729L40 39.6375V60.2902L46.206 63.7593L52.4139 60.2902Z", fill: "#FF9F2C" }),
    react_1.default.createElement("path", { d: "M40 39.6188L46.216 43.0695L52.4139 39.6237L46.207 36.1729L40 39.6188Z", fill: "#FFD800" }),
    react_1.default.createElement("path", { d: "M46.2524 43.0636V63.7286L40 60.3109V39.6161L46.2524 43.0636Z", fill: "#FF812C" }),
    react_1.default.createElement("circle", { cx: "43.7669", cy: "38.7668", r: "0.766705", fill: "#FFD800" }),
    react_1.default.createElement("path", { d: "M32.9428 62.9898C32.8808 62.9528 32.8611 62.8728 32.8986 62.8111C32.9362 62.7494 33.0169 62.7295 33.0789 62.7666L34.7791 63.7833C34.8411 63.8204 34.8608 63.9004 34.8233 63.962C34.7857 64.0237 34.705 64.0436 34.643 64.0066L32.9428 62.9898Z", fill: "#52CC01" }),
    react_1.default.createElement("path", { d: "M33.2423 64.1715C33.2054 64.2335 33.226 64.3133 33.2884 64.3497C33.3507 64.3861 33.4312 64.3653 33.4681 64.3033L34.481 62.6007C34.5179 62.5387 34.4973 62.4589 34.4349 62.4225C34.3725 62.3861 34.2921 62.4069 34.2551 62.4689L33.2423 64.1715Z", fill: "#52CC01" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.4849 34.2571C31.4849 34.8312 31.9502 35.2965 32.5242 35.2965C33.0983 35.2965 33.5636 34.8312 33.5636 34.2571C33.5636 33.6831 33.0983 33.2178 32.5242 33.2178C31.9502 33.2178 31.4849 33.6831 31.4849 34.2571ZM33.2548 34.2574C33.2548 34.661 32.9276 34.9881 32.5241 34.9881C32.1205 34.9881 31.7934 34.661 31.7934 34.2574C31.7934 33.8539 32.1205 33.5267 32.5241 33.5267C32.9276 33.5267 33.2548 33.8539 33.2548 34.2574Z", fill: "#FF9F08" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M81.0892 38.0491C81.0892 38.6232 81.5545 39.0885 82.1285 39.0885C82.7026 39.0885 83.1679 38.6232 83.1679 38.0491C83.1679 37.4751 82.7026 37.0098 82.1285 37.0098C81.5545 37.0098 81.0892 37.4751 81.0892 38.0491ZM82.8587 38.0491C82.8587 38.4527 82.5316 38.7798 82.128 38.7798C81.7245 38.7798 81.3973 38.4527 81.3973 38.0491C81.3973 37.6456 81.7245 37.3185 82.128 37.3185C82.5316 37.3185 82.8587 37.6456 82.8587 38.0491Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.94039 14.5542C9.28481 14.5542 9.56401 14.275 9.56401 13.9306C9.56401 13.5862 9.28481 13.307 8.94039 13.307C8.59598 13.307 8.31677 13.5862 8.31677 13.9306C8.31677 14.275 8.59598 14.5542 8.94039 14.5542Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { d: "M73.5583 17.849C73.4795 17.8056 73.4514 17.7068 73.4956 17.6284C73.5397 17.55 73.6394 17.5216 73.7182 17.5651L75.8798 18.7571C75.9586 18.8005 75.9866 18.8993 75.9425 18.9777C75.8984 19.0561 75.7987 19.0844 75.7199 19.041L73.5583 17.849Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M73.982 19.3075C73.9387 19.3863 73.9678 19.4848 74.0471 19.5274C74.1263 19.57 74.2257 19.5406 74.269 19.4618L75.457 17.298C75.5003 17.2191 75.4711 17.1206 75.3919 17.078C75.3126 17.0354 75.2133 17.0648 75.17 17.1437L73.982 19.3075Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M72.0634 60.0432C72.067 59.9349 72.1577 59.8509 72.266 59.8555C72.3743 59.8601 72.4591 59.9517 72.4554 60.0599L72.3552 63.031C72.3515 63.1393 72.2608 63.2233 72.1525 63.2187C72.0443 63.2141 71.9595 63.1226 71.9631 63.0143L72.0634 60.0432Z", fill: "#DADADA" }),
    react_1.default.createElement("path", { d: "M70.7275 61.292C70.6192 61.2885 70.5294 61.3735 70.5269 61.4818C70.5244 61.5902 70.6101 61.6808 70.7184 61.6843L73.6897 61.7795C73.798 61.7829 73.8878 61.6979 73.8903 61.5896C73.8928 61.4813 73.807 61.3906 73.6987 61.3872L70.7275 61.292Z", fill: "#DADADA" })));
exports.SellerIcon = SellerIcon;


/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimilarIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const SimilarIcon = () => (react_1.default.createElement("svg", { width: 112, height: 84, viewBox: "0 0 112 84", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.809 0C38.2283 0 34.5149 3.71339 34.5149 8.29408L34.5149 8.31706H23.1924C18.6514 8.31706 14.9702 11.9983 14.9702 16.5393C14.9702 21.0803 18.6514 24.7615 23.1924 24.7615H26.0177C23.9508 25.9383 22.2474 27.6801 21.1176 29.7767H9.99997C4.47714 29.7767 0 34.2538 0 39.7766C0 44.4865 3.25604 48.4358 7.63994 49.4965C4.62757 51.7225 2.6741 55.2994 2.6741 59.3325C2.6741 66.0826 8.14618 71.5547 14.8963 71.5547H23.4484C22.708 72.789 22.2824 74.2337 22.2824 75.7777C22.2824 80.3187 25.9636 83.9999 30.5046 83.9999H91.1595C95.7005 83.9999 99.3817 80.3187 99.3817 75.7777C99.3817 74.2337 98.9561 72.789 98.2157 71.5547H99.6387C106.389 71.5547 111.861 66.0826 111.861 59.3325C111.861 52.5824 106.389 47.1103 99.6387 47.1103H91.7241C92.0379 46.8193 92.3329 46.5084 92.6073 46.1796C95.8942 43.8914 98.0454 40.0853 98.0454 35.7767C98.0454 28.7811 92.3744 23.1101 85.3788 23.1101H85.2253C87.2046 21.6187 88.4885 19.2537 88.504 16.5882L103.151 16.5882C107.732 16.5882 111.445 12.8748 111.445 8.29408C111.445 3.71339 107.732 0 103.151 0L42.809 0Z", fill: "#F2F8FF" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.6071 24.7878L38.9239 38.7545L54.126 41.6674L58.1532 28.6965L44.6071 24.7878Z", fill: "#FF3939" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.6374 24.8067L38.918 38.7517L35.8639 34.9837L41.3038 22.7271L44.6374 24.8067Z", fill: "#EB1A1A" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.1758 28.6987L55.101 26.7507L41.3159 22.7377L44.6132 24.8031L58.1758 28.6987Z", fill: "#D3D2D2" }),
    react_1.default.createElement("path", { d: "M48.2002 28.6227C48.2002 28.6227 47.8793 31.293 49.929 32.0671C51.9788 32.8412 53.3978 30.2736 53.3978 30.2736", stroke: "#FAF6F6", strokeWidth: "1.20549" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.6665 47.4702L63.4485 65.5639L81.353 56.9027L75.6215 41.0482L58.6665 47.4702Z", fill: "#0099FF" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.7136 47.4634L63.4417 65.5631L57.4187 64.1625L53.6891 47.9409L58.7136 47.4634Z", fill: "#0081D8" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M75.6471 41.0327L70.9899 41.4438L53.7088 47.9442L58.685 47.4802L75.6471 41.0327Z", fill: "#D3D2D2" }),
    react_1.default.createElement("path", { d: "M65.3044 48.5326C65.3044 48.5326 67.0003 51.4119 69.7027 50.6139C72.4051 49.816 71.9202 46.2013 71.9202 46.2013", stroke: "#FAF6F6", strokeWidth: "1.56622" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.4849 50.2571C35.4849 50.8312 35.9502 51.2965 36.5242 51.2965C37.0983 51.2965 37.5636 50.8312 37.5636 50.2571C37.5636 49.6831 37.0983 49.2178 36.5242 49.2178C35.9502 49.2178 35.4849 49.6831 35.4849 50.2571ZM37.2548 50.2574C37.2548 50.661 36.9276 50.9881 36.5241 50.9881C36.1205 50.9881 35.7934 50.661 35.7934 50.2574C35.7934 49.8539 36.1205 49.5267 36.5241 49.5267C36.9276 49.5267 37.2548 49.8539 37.2548 50.2574Z", fill: "#FF9F08" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M81.0892 38.0491C81.0892 38.6232 81.5546 39.0885 82.1286 39.0885C82.7026 39.0885 83.168 38.6232 83.168 38.0491C83.168 37.4751 82.7026 37.0098 82.1286 37.0098C81.5546 37.0098 81.0892 37.4751 81.0892 38.0491ZM82.8588 38.0491C82.8588 38.4527 82.5316 38.7798 82.1281 38.7798C81.7245 38.7798 81.3974 38.4527 81.3974 38.0491C81.3974 37.6456 81.7245 37.3185 82.1281 37.3185C82.5316 37.3185 82.8588 37.6456 82.8588 38.0491Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.9405 19.5544C12.2849 19.5544 12.5641 19.2752 12.5641 18.9307C12.5641 18.5863 12.2849 18.3071 11.9405 18.3071C11.5961 18.3071 11.3169 18.5863 11.3169 18.9307C11.3169 19.2752 11.5961 19.5544 11.9405 19.5544Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { d: "M68.1225 19.8295C68.0437 19.786 68.0156 19.6873 68.0598 19.6089C68.1039 19.5305 68.2036 19.5021 68.2823 19.5456L70.444 20.7375C70.5227 20.781 70.5508 20.8798 70.5067 20.9582C70.4625 21.0366 70.3629 21.0649 70.2841 21.0215L68.1225 19.8295Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M68.5461 21.288C68.5028 21.3668 68.532 21.4653 68.6112 21.5079C68.6905 21.5505 68.7898 21.5211 68.8331 21.4422L70.0211 19.2784C70.0644 19.1996 70.0353 19.1011 69.956 19.0585C69.8768 19.0159 69.7774 19.0453 69.7341 19.1241L68.5461 21.288Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M41.6181 63.2703C41.6217 63.1621 41.7125 63.078 41.8207 63.0827C41.929 63.0873 42.0138 63.1788 42.0101 63.2871L41.9099 66.2582C41.9062 66.3665 41.8155 66.4505 41.7073 66.4459C41.599 66.4413 41.5142 66.3497 41.5178 66.2414L41.6181 63.2703Z", fill: "#DADADA" }),
    react_1.default.createElement("path", { d: "M40.2822 64.5191C40.1739 64.5157 40.0841 64.6007 40.0816 64.709C40.0791 64.8173 40.1649 64.908 40.2731 64.9114L43.2444 65.0066C43.3527 65.0101 43.4425 64.9251 43.445 64.8168C43.4475 64.7085 43.3617 64.6178 43.2534 64.6144L40.2822 64.5191Z", fill: "#DADADA" })));
exports.SimilarIcon = SimilarIcon;


/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastBoardingWidget = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const react_i18next_1 = __webpack_require__(8);
const boarding_1 = __webpack_require__(117);
const stores_1 = __webpack_require__(10);
const bye_1 = __webpack_require__(757);
const FirstButtonWrapper = styled_components_1.default.div.withConfig({ displayName: "FirstButtonWrapper", componentId: "sc-1dbxumy" }) `
	color: #50a2ff;
	cursor: pointer;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.3px;
	line-height: 19px;
	padding-bottom: 19px;
	transition: color 0.3s;
	:hover {
		text-decoration: underline;
	}
	:active {
		color: #2889f4;
	}
`;
const SecondButtonWrapper = styled_components_1.default.div.withConfig({ displayName: "SecondButtonWrapper", componentId: "sc-1g7278d" }) `
	background-color: #50a2ff;
	border-radius: 4px;
	color: #fff;
	cursor: pointer;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	font-weight: 600;
	height: 48px;
	letter-spacing: -0.3px;
	line-height: 48px;
	text-align: center;
	transition: background-color 0.3s, box-shadow 0.3s;
	width: 304px;
	:hover {
		box-shadow: 2px 2px 10px rgba(80, 162, 255, 0.15), 1px 1px 2px rgba(80, 162, 255, 0.2);
	}
	:active {
		background-color: #2889f4;
	}
`;
const ImageWrapper = styled_components_1.default.div.withConfig({ displayName: "ImageWrapper", componentId: "sc-105ldi5" }) `
	display: flex;
	justify-content: center;
	padding-top: 25px;
`;
const HeaderWrapper = styled_components_1.default.div.withConfig({ displayName: "HeaderWrapper", componentId: "sc-1hzlrx" }) `
	color: #1b1b1b;
	font-family: 'Open Sans', sans-serif;
	font-size: 20px;
	font-weight: bold;
	letter-spacing: -0.3px;
	line-height: 28px;
	text-align: center;
	white-space: pre-line;
`;
const LastWidgetContainer = styled_components_1.default.div.withConfig({ displayName: "LastWidgetContainer", componentId: "sc-sd8ot2" }) `
	display: flex;
	flex-direction: column;
	padding-top: 30px;
`;
const ButtonWrapper = styled_components_1.default.div.withConfig({ displayName: "ButtonWrapper", componentId: "sc-23oryp" }) `
	align-items: center;
	background: #ffffff;
	border: 1px solid #50a2ff;
	border-radius: 4px;
	color: #50a2ff;
	cursor: pointer;
	display: flex;
	font-family: Open Sans;
	font-size: 16px;
	height: 34px;
	justify-content: center;
	letter-spacing: -0.3px;
	line-height: 19px;
	width: 130px;
`;
const ByeButtonsWrapper = styled_components_1.default.div.withConfig({ displayName: "ByeButtonsWrapper", componentId: "sc-gd0h9u" }) `
	align-items: center;
	display: flex;
	flex-direction: column;
	padding-top: 21px;
`;
const LastWidgetWrapper = styled_components_1.default.div.withConfig({ displayName: "LastWidgetWrapper", componentId: "sc-7cop0" }) `
	background: #ffffff;
	border-radius: 8px;
	box-shadow: 10px 10px 29px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), -2px 0px 6px rgba(0, 0, 0, 0.2);
	display: flex;
	height: 356px;
	justify-content: center;
	left: calc(50vw - (394px / 2));
	position: fixed;
	top: calc(50vh - (356px / 2));
	width: 394px;
	z-index: 1200;
`;
const LastBoardingWidget = () => {
    const { t } = react_i18next_1.useTranslation();
    return (react_1.default.createElement(LastWidgetWrapper, null,
        react_1.default.createElement(LastWidgetContainer, null,
            react_1.default.createElement(HeaderWrapper, null, t('boarding_widget_bye_title')),
            react_1.default.createElement(ImageWrapper, null,
                react_1.default.createElement(bye_1.ByeIcon, null)),
            react_1.default.createElement(ByeButtonsWrapper, null,
                react_1.default.createElement(FirstButtonWrapper, { onClick: () => {
                        stores_1.webextStore.dispatch(stores_1.boardingSliceActions.changeDisplay(false));
                        window.open(chrome.runtime.getURL('auth.html#support'));
                        boarding_1.boardingQestionsLeftMetric();
                    } }, t('boarding_button_questions')),
                react_1.default.createElement(SecondButtonWrapper, { onClick: () => {
                        stores_1.webextStore.dispatch(stores_1.boardingSliceActions.changeDisplay(false));
                        boarding_1.boardingClearMetric();
                    } }, t('boarding_button_understand'))))));
};
exports.LastBoardingWidget = LastBoardingWidget;


/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByeIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const ByeIcon = () => (react_1.default.createElement("svg", { width: 142, height: 108, viewBox: "0 0 142 108", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M54.3425 0.984375C48.5276 0.984375 43.8137 5.69828 43.8137 11.5132L43.8138 11.5433H29.4411C23.6766 11.5433 19.0036 16.2163 19.0036 21.9808C19.0036 27.7453 23.6766 32.4183 29.4411 32.4183H33.0265C30.4035 33.9121 28.2417 36.1227 26.8078 38.7835H12.6943C5.68343 38.7835 0 44.4669 0 51.4778C0 57.4568 4.13363 62.4704 9.699 63.8167C5.8744 66.6424 3.39416 71.1833 3.39416 76.3035C3.39416 84.8724 10.3406 91.8188 18.9094 91.8188H29.7657C28.826 93.3857 28.2858 95.2195 28.2858 97.1795C28.2858 102.944 32.9588 107.617 38.7233 107.617H115.721C121.485 107.617 126.158 102.944 126.158 97.1795C126.158 95.2195 125.618 93.3857 124.678 91.8188H126.484C135.053 91.8188 142 84.8724 142 76.3035C142 67.7347 135.053 60.7883 126.484 60.7883H116.437C116.835 60.4191 117.209 60.0246 117.558 59.6075C121.731 56.7029 124.462 51.8707 124.462 46.4006C124.462 37.5202 117.263 30.3212 108.383 30.3212H108.189C110.701 28.4277 112.33 25.4256 112.35 22.042H130.943C136.758 22.042 141.472 17.3281 141.472 11.5132C141.472 5.69828 136.758 0.984375 130.943 0.984375L54.3425 0.984375Z", fill: "#F2F8FF" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40.6553 63.8119L58.3132 60.8209L72.6241 78.9377L55.2236 82.0344L40.6553 63.8119Z", fill: "#F16C00" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.1147 60.9848L69.5522 44.145L83.7826 62.6252L72.5953 78.9419L58.1147 60.9848Z", fill: "#F98A00" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M69.5601 44.1462L52.5345 46.9374L40.6221 63.8321L58.1456 60.9662L69.5601 44.1462Z", fill: "#FF9F08" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M54.5972 55.1288L62.7036 54.342L66.0412 49.3331L58.3242 50.3172L54.5972 55.1288Z", fill: "white" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.9996 59.6781L62.6404 54.3176L66.0049 49.285L70.6807 55.3018L68.0883 56.1209L66.9996 59.6781Z", fill: "#E1E1E1" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.3501 64.7821C32.3501 65.5107 32.9408 66.1015 33.6695 66.1015C34.3982 66.1015 34.9889 65.5107 34.9889 64.7821C34.9889 64.0534 34.3982 63.4626 33.6695 63.4626C32.9408 63.4626 32.3501 64.0534 32.3501 64.7821ZM34.5966 64.7824C34.5966 65.2947 34.1813 65.71 33.669 65.71C33.1568 65.71 32.7415 65.2947 32.7415 64.7824C32.7415 64.2702 33.1568 63.8549 33.669 63.8549C34.1813 63.8549 34.5966 64.2702 34.5966 64.7824Z", fill: "#FF9F08" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M102.938 49.285C102.938 50.0137 103.528 50.6044 104.257 50.6044C104.986 50.6044 105.576 50.0137 105.576 49.285C105.576 48.5563 104.986 47.9656 104.257 47.9656C103.528 47.9656 102.938 48.5563 102.938 49.285ZM105.183 49.2853C105.183 49.7976 104.768 50.2129 104.256 50.2129C103.743 50.2129 103.328 49.7976 103.328 49.2853C103.328 48.773 103.743 48.3578 104.256 48.3578C104.768 48.3578 105.183 48.773 105.183 49.2853Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M41.4137 25.4178C41.8509 25.4178 42.2054 25.0633 42.2054 24.6261C42.2054 24.1889 41.8509 23.8345 41.4137 23.8345C40.9765 23.8345 40.6221 24.1889 40.6221 24.6261C40.6221 25.0633 40.9765 25.4178 41.4137 25.4178Z", fill: "#3490F6" }),
    react_1.default.createElement("path", { d: "M96.6317 69.3168C96.5317 69.2617 96.496 69.1363 96.5521 69.0368C96.6081 68.9373 96.7346 68.9013 96.8346 68.9564L99.5786 70.4696C99.6786 70.5247 99.7143 70.6501 99.6582 70.7496C99.6022 70.8492 99.4757 70.8851 99.3757 70.83L96.6317 69.3168Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M97.1687 71.1676C97.1138 71.2677 97.1508 71.3927 97.2514 71.4468C97.352 71.5009 97.4781 71.4636 97.5331 71.3635L99.0411 68.6167C99.0961 68.5166 99.0591 68.3916 98.9585 68.3375C98.8579 68.2834 98.7318 68.3207 98.6768 68.4208L97.1687 71.1676Z", fill: "#FF2929" }),
    react_1.default.createElement("path", { d: "M57.9086 88.9185C57.9133 88.781 58.0284 88.6744 58.1658 88.6802C58.3033 88.6861 58.4109 88.8023 58.4063 88.9398L58.279 92.7114C58.2744 92.8488 58.1592 92.9555 58.0218 92.9496C57.8844 92.9438 57.7767 92.8276 57.7814 92.6901L57.9086 88.9185Z", fill: "#DADADA" }),
    react_1.default.createElement("path", { d: "M56.2137 90.5045C56.0762 90.5001 55.9622 90.608 55.959 90.7455C55.9559 90.883 56.0647 90.9981 56.2022 91.0025L59.974 91.1233C60.1115 91.1278 60.2255 91.0198 60.2287 90.8823C60.2318 90.7448 60.123 90.6298 59.9855 90.6254L56.2137 90.5045Z", fill: "#DADADA" }),
    react_1.default.createElement("circle", { cx: "98.7809", cy: "30.4784", r: "1.15741", transform: "rotate(106.884 98.7809 30.4784)", fill: "#0099FF" }),
    react_1.default.createElement("circle", { cx: "96.8524", cy: "26.8703", r: "0.578705", transform: "rotate(106.884 96.8524 26.8703)", fill: "#0099FF" }),
    react_1.default.createElement("path", { d: "M86.1249 48.0364C87.3825 48.2944 88.6075 47.5019 88.8609 46.2663C89.1144 45.0308 88.3004 43.82 87.0428 43.562C85.7851 43.304 84.5601 44.0965 84.3067 45.332C84.0532 46.5676 84.8672 47.7784 86.1249 48.0364Z", fill: "#0088E2" }),
    react_1.default.createElement("path", { d: "M94.4613 43.9192L80.082 40.9694C79.0222 40.7519 78.009 41.3269 77.8189 42.2536C77.6288 43.1803 78.3338 44.1077 79.3936 44.3251L93.7728 47.275C94.8326 47.4924 95.8459 46.9175 96.036 45.9908C96.2261 45.0641 95.5211 44.1367 94.4613 43.9192Z", fill: "#56BBFF" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M94.8575 38.4577L94.0737 42.2781C93.904 43.1052 94.4257 43.9108 95.2395 44.0778L79.2995 40.8077C80.1133 40.9747 80.9106 40.4396 81.0803 39.6125L81.864 35.7921C82.4979 32.7024 85.1174 30.5376 88.0853 30.3958C87.9815 30.0847 87.9549 29.7415 88.0259 29.3957C88.238 28.3615 89.2351 27.6923 90.2527 27.901C91.2703 28.1098 91.9233 29.1176 91.7112 30.1517C91.6402 30.4976 91.4806 30.8025 91.2627 31.0477C93.9351 32.3466 95.4913 35.368 94.8575 38.4577ZM89.1307 29.6231C89.0459 30.0366 89.3074 30.4393 89.7143 30.5227C90.1211 30.6062 90.52 30.339 90.6049 29.9255C90.6898 29.5113 90.4284 29.1087 90.0215 29.0252C89.6146 28.9417 89.2157 29.2089 89.1307 29.6231Z", fill: "#0099FF" }),
    react_1.default.createElement("path", { d: "M77.7065 42.812C77.715 43.5084 78.4056 44.1813 79.378 44.3151L93.7954 47.2728C94.7419 47.5326 95.6416 47.186 95.9237 46.5492L77.7065 42.812Z", fill: "#0099FF" })));
exports.ByeIcon = ByeIcon;


/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const ArrowWrapper = styled_components_1.default.div.withConfig({ displayName: "ArrowWrapper", componentId: "sc-cqzlfg" }) `
	bottom: 44px;
	left: 8px;
	position: absolute;
`;
const ArrowIcon = () => (react_1.default.createElement(ArrowWrapper, null,
    react_1.default.createElement("svg", { width: 58, height: 16, viewBox: "0 0 58 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M56 6.75C56.6904 6.75 57.25 7.30964 57.25 8C57.25 8.69036 56.6904 9.25 56 9.25V6.75ZM0 8L12.5 0.783122V15.2169L0 8ZM56 9.25H11.25V6.75H56V9.25Z", fill: "#F3F8FF" }))));
exports.ArrowIcon = ArrowIcon;


/***/ }),

/***/ 759:
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
exports.CloseIcon = void 0;
const react_1 = __importStar(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const CloseIcon = ({ clickFn, mouseEnterFn, mouseLeaveFn }) => {
    const [hovered, changeHovered] = react_1.useState(false);
    return (react_1.default.createElement(IconWrapper, { onClick: clickFn, onMouseEnter: () => {
            changeHovered(true);
            mouseEnterFn();
        }, onMouseLeave: () => {
            changeHovered(false);
            mouseLeaveFn();
        } },
        react_1.default.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement(PathWrapper, { hovered: hovered, d: "M18.1819 6.73629L16.9 5.45447L11.8182 10.5363L6.73641 5.45447L5.45459 6.73629L10.5364 11.8181L5.45459 16.8999L6.73641 18.1817L11.8182 13.0999L16.9 18.1817L18.1819 16.8999L13.1 11.8181L18.1819 6.73629Z" }))));
};
exports.CloseIcon = CloseIcon;
const PathWrapper = styled_components_1.default.path.withConfig({ displayName: "PathWrapper", componentId: "sc-12xandl" }) `
	fill: white;
	fill-opacity: ${({ hovered }) => (hovered ? '1' : '.8')};
	transition: fill-opacity 0.3s;
`;
const IconWrapper = styled_components_1.default.div.withConfig({ displayName: "IconWrapper", componentId: "sc-1p1r149" }) `
	align-items: center;
	cursor: pointer;
	display: flex;
	height: 24px;
	justify-content: center;
	width: 24px;
`;


/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardingOverlay = exports.BoardingOverlayStyled = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.BoardingOverlayStyled = styled_components_1.default.div.withConfig({ displayName: "BoardingOverlayStyled", componentId: "sc-dhkupz" }) `
	background: rgba(0, 0, 0, 0.7);
	bottom: 0%;
	height: 100%;
	left: 0%;
	position: fixed;
	right: 0%;
	top: 0%;
	width: 100%;
`;
const BoardingOverlay = () => {
    const boarding = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.boarding);
    if (!(boarding === null || boarding === void 0 ? void 0 : boarding.display)) {
        return null;
    }
    return react_1.default.createElement(exports.BoardingOverlayStyled, { className: "arboardingclicker" });
};
exports.BoardingOverlay = BoardingOverlay;


/***/ }),

/***/ 762:
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
exports.SideWidget = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importStar(__webpack_require__(3));
const stores_1 = __webpack_require__(10);
const SideWidgetClosed_1 = __webpack_require__(763);
const SideWidgetOpened_1 = __webpack_require__(768);
const Version_1 = __webpack_require__(123);
const SideWidgetMain = styled_components_1.default.div.withConfig({ displayName: "SideWidgetMain", componentId: "sc-1a96sxs" }) `
	align-items: center;
	background-color: white;
	border-radius: 0 6px 6px 0;
	box-shadow: 10px 10px 29px 0 rgba(0, 0, 0, 0.07), 2px 2px 4px 0 rgba(0, 0, 0, 0.15);
	display: flex;
	min-height: 66px;
	overflow: hidden;

	${({ opened }) => !opened &&
    styled_components_1.css `
			padding: 0 10px 0 15px;
		`}
`;
const SideWidgetContainer = styled_components_1.default.div.withConfig({ displayName: "SideWidgetContainer", componentId: "sc-qr7sqp" }) `
	/* aliexpress:
   * .detail-gallery { z-index: 12; }
   * .header         { z-index: 20; }
   * .top-lighthouse { z-index: 22; }
   */

	align-self: flex-end;
	position: relative;
`;
// TODO убрать когда избранные будут открываться в попапе
const removeHash = () => window.history.pushState('', document.title, window.location.pathname + window.location.search);
const SideWidget = () => {
    const boarding = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.boarding);
    const { isOpen } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.sideWidgetUI);
    const { isOpen: isOpenSettingsWidgetUI } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.settingsWidgetUI);
    const { isOpen: isOpenGalleryWidget } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.galleryWidgetUI);
    const wrapperRef = react_1.useRef(null);
    const handleClickOutside = react_1.useCallback((event) => {
        if (wrapperRef !== null &&
            !wrapperRef.current.contains(event.target) &&
            ![...Array.from(document.querySelectorAll('.sideWidgetExcludedClick'))].some((e) => e.isSameNode(event.target)) &&
            isOpen &&
            !isOpenSettingsWidgetUI &&
            !boarding.display &&
            !isOpenGalleryWidget) {
            stores_1.webextStore.dispatch(stores_1.sideWidgetUISliceActions.close());
        }
    }, [isOpen, wrapperRef, isOpenSettingsWidgetUI, boarding.display, isOpenGalleryWidget]);
    react_1.useEffect(() => {
        // TODO убрать когда избранные будут открываться в попапе
        const { hash } = window.location;
        if (hash.includes('arfavs')) {
            stores_1.webextStore.dispatch(stores_1.sideWidgetUISliceActions.openTab('favorites'));
            removeHash();
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);
    return (react_1.default.createElement(SideWidgetContainer, { ref: wrapperRef },
        react_1.default.createElement(Version_1.Version, { isShowDebug: true, isPositionAbsolute: false }),
        react_1.default.createElement(SideWidgetMain, { opened: isOpen }, isOpen ? react_1.default.createElement(SideWidgetOpened_1.SideWidgetOpened, null) : react_1.default.createElement(SideWidgetClosed_1.SideWidgetClosed, null))));
};
exports.SideWidget = SideWidget;


/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideWidgetClosed = void 0;
const ramda_1 = __webpack_require__(23);
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importDefault(__webpack_require__(3));
const widgetTabOpened_1 = __webpack_require__(122);
const stores_1 = __webpack_require__(10);
const SideWidgetSkeleton_1 = __webpack_require__(764);
const SellerSectionClosed_1 = __webpack_require__(319);
const PriceSectionClosed_1 = __webpack_require__(177);
const ReviewsSectionClosed_1 = __webpack_require__(320);
const SimilarSectionClosed_1 = __webpack_require__(321);
const PulseAnimation_1 = __webpack_require__(126);
const sitename = window.location.hostname.split('.').slice(-2, -1)[0];
const needAnimationForBoarding = (boarding, currentTab) => {
    if (boarding.display && boarding.displayAnimation && ramda_1.head(boarding.remainInstructions) === currentTab) {
        return true;
    }
    return false;
};
const Div = styled_components_1.default.div.withConfig({ displayName: "Div", componentId: "sc-1b10oie" }) `
	align-items: center;
	display: flex;
`;
const WidgetRight = styled_components_1.default.div.withConfig({ displayName: "WidgetRight", componentId: "sc-1foceuc" }) `
	align-items: stretch;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	font-size: 20px;
	margin-left: 1px;
`;
const Button = styled_components_1.default.div.withConfig({ displayName: "Button", componentId: "sc-12eyjhq" }) `
	border-radius: 2px;
	line-height: 24px;
	padding: ${({ similar }) => (similar ? '2px' : '0 5px')};

	${({ big }) => big && 'font-size: 25px'};

	:hover {
		background-color: rgba(176, 185, 207, 0.15);
		cursor: pointer;
	}

	:active {
		background-color: rgba(176, 185, 207, 0.23);
	}

	& + & {
		margin-left: 1px;
	}

	${({ displayAnimation }) => (displayAnimation ? 'background-color: black;' : '')}
`;
const Bottom = styled_components_1.default.div.withConfig({ displayName: "Bottom", componentId: "sc-1d9hnd2" }) `
	display: flex;
	justify-content: space-evenly;
	margin-top: 1px;
`;
const SideWidgetClosed = () => {
    const dispatch = react_redux_1.useDispatch();
    const boarding = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.boarding);
    const { isListView = false } = react_redux_1.useSelector(({ similar }) => similar);
    const { lastPrice } = react_redux_1.useSelector(({ item }) => item);
    if (!(lastPrice === null || lastPrice === void 0 ? void 0 : lastPrice.curr)) {
        return react_1.default.createElement(SideWidgetSkeleton_1.SideWidgetSkeleton, null);
    }
    return (react_1.default.createElement(Div, null,
        react_1.default.createElement(Button, { similar: true, onClick: () => {
                widgetTabOpened_1.widgetTabOpenedMetric('similar');
                widgetTabOpened_1.widgetTabOpenedMetric(`${isListView ? 'list' : 'grid'}-similar`);
                stores_1.webextStore.dispatch(stores_1.sideWidgetUISliceActions.openTab('similar'));
            } },
            react_1.default.createElement(SimilarSectionClosed_1.SimilarSectionClosed, null)),
        react_1.default.createElement(WidgetRight, null,
            react_1.default.createElement(Button, { big: sitename === 'gearbest', onClick: () => {
                    widgetTabOpened_1.widgetTabOpenedMetric('history');
                    dispatch(stores_1.sideWidgetUISliceActions.openTab('price'));
                } },
                react_1.default.createElement(PriceSectionClosed_1.PriceSectionClosed, null),
                needAnimationForBoarding(boarding, 'price') && react_1.default.createElement(PulseAnimation_1.PulseAnimation, { bottomMargin: "23", rightMargin: "35" })),
            sitename === 'aliexpress' && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Bottom, null,
                    react_1.default.createElement(Button, { onClick: () => {
                            widgetTabOpened_1.widgetTabOpenedMetric('seller');
                            dispatch(stores_1.sideWidgetUISliceActions.openTab('seller'));
                        } },
                        react_1.default.createElement(SellerSectionClosed_1.SellerSectionClosed, null)),
                    react_1.default.createElement(Button, { onClick: () => {
                            widgetTabOpened_1.widgetTabOpenedMetric('reviews');
                            dispatch(stores_1.sideWidgetUISliceActions.openTab('reviews'));
                        } },
                        react_1.default.createElement(ReviewsSectionClosed_1.ReviewsSectionClosed, null))))))));
};
exports.SideWidgetClosed = SideWidgetClosed;


/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideWidgetSkeleton = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const Svg = styled_components_1.default.div.withConfig({ displayName: "Svg", componentId: "sc-awiq4r" }) `
	display: flex;
	height: 66px;
	overflow: hidden;
	position: relative;
	width: 163px;
	@keyframes skeleton-mask {
		from {
			transform: translateX(-200%);
		}
		to {
			transform: translateX(0);
		}
	}

	svg {
		height: 100%;
		width: 100%;
		&[fill='#dddfe1'],
		&[stroke='#dddfe1'] {
			mask: url(#skeleton-mask);
		}
		#skeleton-mask-overlay {
			animation: skeleton-mask 1.5s infinite;
		}
	}
`;
const SideWidgetSkeleton = () => (react_1.default.createElement(Svg, null,
    react_1.default.createElement("img", { src: chrome.extension.getURL('assets/img/skeleton_side_widget.svg'), alt: "loader" })));
exports.SideWidgetSkeleton = SideWidgetSkeleton;


/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const CameraIcon = ({ size = '14', color = '#000' }) => (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, viewBox: "0 0 14 13" },
    react_1.default.createElement("path", { fill: color, fillRule: "evenodd", d: "M10.66 1.649h1.837c.83 0 1.503.66 1.503 1.475v8.4C14 12.34 13.327 13 12.497 13H1.503C.673 13 0 12.34 0 11.525V3.124c0-.815.673-1.475 1.503-1.475H3.34a.563.563 0 0 0 .466-.245l.788-1.16A.563.563 0 0 1 5.06 0h3.88c.188 0 .362.092.466.245l.788 1.159a.563.563 0 0 0 .466.245zM7 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" })));
exports.CameraIcon = CameraIcon;


/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadarIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const loader_svg_1 = __importDefault(__webpack_require__(322));
const RadarIcon = ({ loading, count }) => loading ? (react_1.default.createElement("img", { src: chrome.extension.getURL(loader_svg_1.default), alt: "" })) : (react_1.default.createElement(Svg, { width: "46", height: "46", viewBox: "0 0 46 46", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, count ? (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23ZM23 1C10.8497 1 1 10.8497 1 23C1 35.1503 10.8497 45 23 45C35.1503 45 45 35.1503 45 23C45 10.8497 35.1503 1 23 1Z", fill: "#41C300" }),
    react_1.default.createElement("path", { opacity: "0.28", fillRule: "evenodd", clipRule: "evenodd", d: "M22.75 35.2475V23.25H10.7525C10.884 29.8169 16.1831 35.116 22.75 35.2475ZM22.75 35.7476C15.9069 35.616 10.384 30.0931 10.2524 23.25H5.75177C5.88429 32.5785 13.4215 40.1157 22.75 40.2482V35.7476ZM23.25 40.2482V35.7476C30.0931 35.616 35.616 30.0931 35.7476 23.25H40.2482C40.1157 32.5785 32.5785 40.1157 23.25 40.2482ZM22.75 40.7483V45.75H23.25V40.7483C32.8546 40.6157 40.6157 32.8546 40.7483 23.25H45.5V22.75H40.7483C40.6157 13.1454 32.8546 5.38432 23.25 5.25172V0.75H22.75V5.25172C13.1454 5.38432 5.38432 13.1454 5.25172 22.75H0.5V23.25H5.25172C5.38432 32.8546 13.1454 40.6157 22.75 40.7483ZM5.75177 22.75H10.2524C10.384 15.9069 15.9069 10.384 22.75 10.2524V5.75177C13.4215 5.88429 5.88429 13.4215 5.75177 22.75ZM23.25 5.75177V10.2524C30.0931 10.384 35.616 15.9069 35.7476 22.75H40.2482C40.1157 13.4215 32.5785 5.88429 23.25 5.75177ZM35.2475 22.75C35.116 16.1831 29.8169 10.884 23.25 10.7525V22.75H35.2475ZM22.75 10.7525C16.1831 10.884 10.884 16.1831 10.7525 22.75H22.75V10.7525ZM35.2475 23.25C35.116 29.8169 29.8169 35.116 23.25 35.2475V23.25H35.2475Z", fill: "#41C300" }))) : (react_1.default.createElement("g", { fill: "none", fillRule: "evenodd", stroke: "#DFDFDF" },
    react_1.default.createElement("g", { transform: "translate(1 1)" },
        react_1.default.createElement("circle", { cx: "22.5", cy: "22.5", r: "22.5", strokeWidth: "1.5" }),
        react_1.default.createElement("circle", { cx: "22.5", cy: "22.5", r: "17.5" }),
        react_1.default.createElement("circle", { cx: "22.5", cy: "22.5", r: "12.5" })),
    react_1.default.createElement("path", { d: "M23.5 1l.25 44.93M1 24h44.976" })))));
exports.RadarIcon = RadarIcon;
const Svg = styled_components_1.default.svg.withConfig({ displayName: "Svg", componentId: "sc-mb4eb7" }) `
	left: 0;
	position: absolute;
	top: 0;
`;


/***/ }),

/***/ 768:
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
exports.SideWidgetOpened = void 0;
const ramda_1 = __webpack_require__(23);
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importStar(__webpack_require__(3));
const constants_1 = __webpack_require__(25);
const utils_1 = __webpack_require__(11);
const stores_1 = __webpack_require__(10);
const widgetTabOpened_1 = __webpack_require__(122);
const ButtonIconWrapper_1 = __webpack_require__(769);
const CloseIconInverted_1 = __webpack_require__(770);
const RadarLogo_1 = __webpack_require__(771);
const SellerSectionOpened_1 = __webpack_require__(170);
const SimilarSectionOpened_1 = __webpack_require__(772);
const SellerSectionClosed_1 = __webpack_require__(319);
const PriceSectionClosed_1 = __webpack_require__(177);
const PriceSectionOpened_1 = __webpack_require__(174);
const FavoritesSectionOpened_1 = __webpack_require__(783);
const ReviewsSectionClosed_1 = __webpack_require__(320);
const ReviewsSectionOpened_1 = __webpack_require__(786);
const SimilarSectionClosed_1 = __webpack_require__(321);
const PulseAnimation_1 = __webpack_require__(126);
const constants_2 = __webpack_require__(325);
const MAP_TAB_NAME_TO_TAB_COMPONENT = {
    similar: react_1.default.createElement(SimilarSectionOpened_1.SimilarSectionOpened, null),
    price: react_1.default.createElement(PriceSectionOpened_1.PriceSectionOpened, { place: "side", withPriceFilter: true }),
    seller: react_1.default.createElement(SellerSectionOpened_1.SellerSectionOpened, null),
    reviews: react_1.default.createElement(ReviewsSectionOpened_1.ReviewsSectionOpened, null),
    favorites: react_1.default.createElement(FavoritesSectionOpened_1.FavoritesSectionOpened, null)
};
const sitename = window.location.hostname.split('.').slice(-2, -1)[0];
const needAnimationForBoarding = (boarding, currentTab) => {
    if (boarding.display && boarding.displayAnimation && ramda_1.head(boarding.remainInstructions) === currentTab) {
        return true;
    }
    return false;
};
const Div = styled_components_1.default.div.withConfig({ displayName: "Div", componentId: "sc-ok1jvh" }) `
	display: flex;
	flex-direction: column;
`;
const WidgetMain = styled_components_1.default.div.withConfig({ displayName: "WidgetMain", componentId: "sc-15pglbz" }) `
	display: flex;
	flex-direction: column;
	height: ${constants_2.SIDE_WIDGET.HEIGHT}px;
	width: ${constants_2.SIDE_WIDGET.WIDTH}px;
`;
const WidgetFooter = styled_components_1.default.div.withConfig({ displayName: "WidgetFooter", componentId: "sc-1s62isi" }) `
	display: flex;
	font-size: 23px;
	height: 66px;
`;
const WidgetHeader = styled_components_1.default.div.withConfig({ displayName: "WidgetHeader", componentId: "sc-10htb0r" }) `
	align-items: center;
	display: flex;
	padding: 3px 5px 3px 35px;
`;
const FooterTab = styled_components_1.default.div.withConfig({ displayName: "FooterTab", componentId: "sc-4k6ys7" }) `
	${({ displayAnimation }) => (displayAnimation ? 'background-color: black;' : 'background-color: #f6f6f6;')}
	align-items: center;
	display: flex;
	flex: 1 0 0;
	height: 66px;
	justify-content: center;
	position: relative;

	${({ active }) => active
    ? styled_components_1.css `
					background-color: #ffffff;
					pointer-events: none;
			  `
    : styled_components_1.css `
					:hover {
						cursor: pointer;
						background-color: rgba(153, 153, 153, 0.15);
					}

					:active {
						background-color: rgba(153, 153, 153, 0.25);
					}
			  `}

	& + & {
		border-left: ${constants_1.aliBorder};
	}
`;
const SideWidgetControls = styled_components_1.default.div.withConfig({ displayName: "SideWidgetControls", componentId: "sc-12n81fy" }) `
	align-items: center;
	display: flex;
	justify-content: flex-end;
`;
const SvgPointer = styled_components_1.default.svg.withConfig({ displayName: "SvgPointer", componentId: "sc-fsh9c3" }) `
	cursor: pointer;
	display: inline-block;
	fill: #959595;
	vertical-align: middle;
	&:hover {
		fill: #777777;
	}
`;
const SvgColor = styled_components_1.default.path.withConfig({ displayName: "SvgColor", componentId: "sc-ei77vg" }) `
	fill: #959595;
	&:hover {
		fill: #777777;
	}
`;
const SideWidgetOpened = () => {
    const dispatch = react_redux_1.useDispatch();
    const boarding = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.boarding);
    const { isListView = false } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.similar);
    const { currentTab } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.sideWidgetUI);
    return (react_1.default.createElement(Div, null,
        react_1.default.createElement(WidgetHeader, null,
            react_1.default.createElement(RadarLogo_1.RadarLogo, null),
            react_1.default.createElement(SideWidgetControls, null,
                react_1.default.createElement(ButtonIconWrapper_1.ButtonIconWrapper, { size: 24 },
                    react_1.default.createElement(SvgPointer, { onClick: () => stores_1.webextStore.dispatch(stores_1.settingsWidgetUISliceActions.open()), xmlns: "http://www.w3.org/2000/svg", width: 17, height: 17, viewBox: "0 0 20 20", fill: "none" },
                        react_1.default.createElement(SvgColor, { fillRule: "evenodd", d: "M19.937 8.9c-.032-.28-.36-.492-.643-.492-.916 0-1.73-.538-2.07-1.37-.348-.852-.124-1.846.56-2.473.215-.197.24-.526.06-.754-.47-.596-1.002-1.134-1.584-1.6-.228-.183-.562-.157-.76.06-.596.66-1.667.905-2.494.56A2.22 2.22 0 0 1 11.655.651c.017-.294-.197-.55-.49-.584-.747-.086-1.5-.09-2.25-.006-.3.032-.505.282-.495.572.033.927-.517 1.784-1.37 2.134-.817.334-1.88.09-2.476-.564a.56.56 0 0 0-.755-.063c-.6.47-1.144 1.01-1.618 1.6-.185.23-.157.563.06.76.696.63.92 1.633.56 2.495-.345.822-1.2 1.352-2.176 1.352-.317-.01-.543.203-.578.49-.088.75-.09 1.517-.004 2.274.03.282.37.492.656.492.87-.022 1.707.517 2.058 1.37s.125 1.846-.56 2.473c-.214.196-.24.525-.06.754A9.93 9.93 0 0 0 3.738 17.8c.23.185.563.16.76-.06.598-.662 1.67-.907 2.493-.56.863.36 1.406 1.233 1.353 2.17-.017.294.2.55.49.584.382.044.767.067 1.152.067a9.92 9.92 0 0 0 1.098-.061c.3-.032.505-.282.495-.573-.034-.927.517-1.784 1.368-2.132a2.31 2.31 0 0 1 2.477.563.56.56 0 0 0 .755.063c.598-.47 1.142-1.007 1.618-1.6.185-.23.16-.562-.06-.76-.696-.63-.922-1.633-.56-2.495a2.24 2.24 0 0 1 2.046-1.356l.124.003c.287.023.55-.197.585-.5a10.01 10.01 0 0 0 .004-2.274zm-9.92 4.467a3.34 3.34 0 0 1-3.336-3.335 3.34 3.34 0 0 1 3.336-3.336 3.34 3.34 0 0 1 3.335 3.336 3.34 3.34 0 0 1-3.335 3.335z" }))),
                react_1.default.createElement(ButtonIconWrapper_1.ButtonIconWrapper, { size: 24, onClick: () => stores_1.webextStore.dispatch(stores_1.sideWidgetUISliceActions.close()) },
                    react_1.default.createElement(CloseIconInverted_1.CloseIconInverted, null)))),
        react_1.default.createElement(WidgetMain, null, utils_1.safeObjectAccess(MAP_TAB_NAME_TO_TAB_COMPONENT)(currentTab)),
        react_1.default.createElement(WidgetFooter, null,
            react_1.default.createElement(FooterTab, { active: currentTab === 'similar', onClick: () => {
                    widgetTabOpened_1.widgetTabOpenedMetric('similar');
                    widgetTabOpened_1.widgetTabOpenedMetric(`${isListView ? 'list' : 'grid'}-similar`);
                    stores_1.webextStore.dispatch(stores_1.sideWidgetUISliceActions.openTab('similar'));
                } },
                react_1.default.createElement(SimilarSectionClosed_1.SimilarSectionClosed, null),
                needAnimationForBoarding(boarding, 'similar') && react_1.default.createElement(PulseAnimation_1.PulseAnimation, { bottomMargin: "9", rightMargin: "20" })),
            react_1.default.createElement(FooterTab, { active: currentTab === 'price', onClick: () => {
                    widgetTabOpened_1.widgetTabOpenedMetric('history');
                    dispatch(stores_1.sideWidgetUISliceActions.openTab('price'));
                } },
                react_1.default.createElement(PriceSectionClosed_1.PriceSectionClosed, null),
                needAnimationForBoarding(boarding, 'price') && react_1.default.createElement(PulseAnimation_1.PulseAnimation, { bottomMargin: "7", rightMargin: "23" })),
            sitename === 'aliexpress' && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(FooterTab, { active: currentTab === 'seller', onClick: () => {
                        widgetTabOpened_1.widgetTabOpenedMetric('seller');
                        stores_1.webextStore.dispatch(stores_1.sideWidgetUISliceActions.openTab('seller'));
                    } },
                    react_1.default.createElement(SellerSectionClosed_1.SellerSectionClosed, null),
                    needAnimationForBoarding(boarding, 'seller') && react_1.default.createElement(PulseAnimation_1.PulseAnimation, { bottomMargin: "7", rightMargin: "23" })),
                react_1.default.createElement(FooterTab, { active: currentTab === 'reviews', onClick: () => {
                        widgetTabOpened_1.widgetTabOpenedMetric('reviews');
                        stores_1.webextStore.dispatch(stores_1.sideWidgetUISliceActions.openTab('reviews'));
                    } },
                    react_1.default.createElement(ReviewsSectionClosed_1.ReviewsSectionClosed, { big: true }),
                    needAnimationForBoarding(boarding, 'reviews') && react_1.default.createElement(PulseAnimation_1.PulseAnimation, { bottomMargin: "7", rightMargin: "20" })))))));
};
exports.SideWidgetOpened = SideWidgetOpened;


/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonIconWrapper = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const ButtonIconWrapper = ({ size, children, onClick }) => (react_1.default.createElement(StyledWrapper, { size: size, onClick: onClick }, children));
exports.ButtonIconWrapper = ButtonIconWrapper;
const StyledWrapper = styled_components_1.default.span.withConfig({ displayName: "StyledWrapper", componentId: "sc-7gljc" }) `
	height: ${({ size, height }) => (Number.isInteger(height) ? height : size)}px;
	margin-left: 5px;
	text-align: center;
	width: ${({ size, width }) => (Number.isInteger(width) ? width : size)}px;
	&:before {
		content: '';
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}
`;
const StyledInner = styled_components_1.default.div.withConfig({ displayName: "StyledInner", componentId: "sc-1nfhlp0" }) `
	display: inline-block;
	vertical-align: middle;
`;


/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseIconInverted = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const CloseIconInverted = ({ size = '14' }) => (react_1.default.createElement(SvgPointer, { width: size, height: size, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" })));
exports.CloseIconInverted = CloseIconInverted;
const SvgPointer = styled_components_1.default.svg.withConfig({ displayName: "SvgPointer", componentId: "sc-1cdf4gl" }) `
	cursor: pointer;
	display: inline-block;
	fill: #959595;
	vertical-align: middle;
	&:hover {
		fill: #777777;
	}
`;


/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadarLogo = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const react_redux_1 = __webpack_require__(7);
const RadarLogo = () => {
    const locale = react_redux_1.useSelector(({ settings }) => { var _a; return (_a = settings === null || settings === void 0 ? void 0 : settings.locale) === null || _a === void 0 ? void 0 : _a.value; });
    const aliradarUrl = locale === 'ru' ? 'https://aliradar.com' : 'https://en.aliradar.com';
    return (react_1.default.createElement(RadarLogoWrapper, { onClick: () => window.open(aliradarUrl) },
        react_1.default.createElement(SvgPointer, { xmlns: "http://www.w3.org/2000/svg", width: 83, height: 11, fill: "none" },
            react_1.default.createElement("path", { fillRule: "evenodd", d: "M30.833 0c1.58 0 2.788.286 3.628.86s1.26 1.463 1.26 2.67c0 .754-.17 1.365-.51 1.835s-.827.838-1.465 1.107l.668.92.69 1.084.66 1.177.592 1.2h-2.646l-.587-1.068-.6-1.053-.617-.967-.6-.828h-1.17v3.916h-2.37V.28a13.2 13.2 0 0 1 1.602-.217L30.833 0zM7.762 9.706l.38 1.145h2.542L9.553 7.654 8.506 4.89 7.488 2.426 6.464.148h-2.25l-1.03 2.278L2.177 4.89 1.13 7.654 0 10.85h2.466l.373-1.143.4-1.174h4.12l.403 1.17zm-2.648-6.55l.23-.628.245.623.352.92.424 1.152.462 1.32H3.86l.484-1.315.096-.256.333-.893.342-.922zM19.886 8.78v2.07h-7.123V.148h2.4V8.78h4.723zm4.6-8.633h-2.375V10.85h2.375V.148zm6.022 1.95l.457-.016c.75 0 1.316.112 1.7.335s.577.6.577 1.128c0 .55-.2.94-.57 1.168s-1.01.342-1.888.342h-.66V2.128l.382-.03zm15.626 8.753l-.416-1.25-.368-1.068h-4.12l-.4 1.174-.373 1.143H37.99l1.13-3.197 1.048-2.765 1.007-2.463 1.03-2.278h2.25l1.025 2.278 1.017 2.463 1.048 2.765 1.132 3.197h-2.542zm-3.03-7.696l.23-.628.245.623.352.92.424 1.152.462 1.32H41.85l.484-1.315.096-.257.333-.892.342-.922zM53.13 8.89l.392.023.53.007c1.198 0 2.085-.303 2.664-.9s.867-1.446.867-2.516c0-1.122-.277-1.97-.83-2.547s-1.428-.864-2.626-.864l-.507.008-.49.038v6.76zm6.4-.972c.283-.692.425-1.503.425-2.433 0-.97-.142-1.802-.425-2.494s-.687-1.26-1.213-1.704S57.163.516 56.43.3s-1.55-.3-2.448-.3L52.46.054c-.59.036-1.16.106-1.705.21v10.458c.546.113 1.102.188 1.668.224l1.485.054c.93 0 1.768-.113 2.516-.34s1.382-.568 1.902-1.023a4.5 4.5 0 0 0 1.205-1.72zm9.904 2.934l-.38-1.145-.403-1.17h-4.12l-.4 1.174-.373 1.143H61.29l1.13-3.197 1.048-2.765 1.007-2.463 1.03-2.278h2.25l1.025 2.278 1.017 2.463 1.048 2.765 1.132 3.197h-2.542zm-3.03-7.696l.23-.628.245.623.352.92.424 1.152.462 1.32H65.15l.484-1.315.096-.256.333-.893.342-.922zM77.283 0c1.58 0 2.788.286 3.628.86s1.26 1.463 1.26 2.67c0 .754-.17 1.365-.51 1.835s-.827.838-1.465 1.107l.668.92.7 1.084.66 1.177.592 1.2h-2.646l-.587-1.068-.6-1.053-.617-.967-.6-.828h-1.17v3.916H74.2V.28c.516-.103 1.05-.175 1.602-.217L77.283 0zm-.325 2.097l.457-.016c.75 0 1.316.112 1.7.335s.577.6.577 1.128c0 .55-.2.94-.57 1.168s-1.01.342-1.888.342h-.66V2.128l.382-.03z", fill: "#959595" }))));
};
exports.RadarLogo = RadarLogo;
const RadarLogoWrapper = styled_components_1.default.div.withConfig({ displayName: "RadarLogoWrapper", componentId: "sc-131v560" }) `
	margin-right: auto;
`;
const SvgPointer = styled_components_1.default.svg.withConfig({ displayName: "SvgPointer", componentId: "sc-wj5hm9" }) `
	cursor: pointer;
	display: inline-block;
	fill: #959595;
	margin-top: -2px;
	vertical-align: middle;
	&:hover {
		fill: #777777;
	}
`;


/***/ }),

/***/ 772:
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
exports.SimilarSectionOpened = void 0;
const react_1 = __importStar(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const react_i18next_1 = __webpack_require__(8);
const react_redux_1 = __webpack_require__(7);
const no_similar_svg_1 = __importDefault(__webpack_require__(323));
const loader_svg_1 = __importDefault(__webpack_require__(322));
const utils_1 = __webpack_require__(11);
const SectionHeader_1 = __webpack_require__(78);
const SimilarItemList_1 = __webpack_require__(773);
const Empty = styled_components_1.default.div.withConfig({ displayName: "Empty", componentId: "sc-xjbuwt" }) `
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
`;
const Loader = styled_components_1.default.img.withConfig({ displayName: "Loader", componentId: "sc-xdzffy" }) `
	height: 60px;
	margin: calc(50% - 30px) auto;
	width: 60px;
`;
const Img = styled_components_1.default.img.withConfig({ displayName: "Img", componentId: "sc-aew7a4" }) `
	margin-bottom: 20px;
`;
const SimilarSectionOpened = () => {
    const { similars, initialized } = react_redux_1.useSelector(({ similar }) => similar);
    const { t } = react_i18next_1.useTranslation();
    const scrollArea = react_1.useRef(null);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SectionHeader_1.SectionHeader, { title: `${t('similarTitle')}${(similars === null || similars === void 0 ? void 0 : similars.length) > 0 ? ` (${(similars === null || similars === void 0 ? void 0 : similars.length) > 100 ? '99+' : similars === null || similars === void 0 ? void 0 : similars.length})` : ''}`, subtitle: initialized && (similars === null || similars === void 0 ? void 0 : similars.length) < 1 ? t('notFound') : undefined }),
        initialized ? ((similars === null || similars === void 0 ? void 0 : similars.length) > 0 ? (react_1.default.createElement(SimilarItemList_1.SimilarItemList, { scrollArea: scrollArea })) : (react_1.default.createElement(Empty, null,
            react_1.default.createElement(Img, { src: utils_1.getURL(no_similar_svg_1.default) }),
            react_1.default.createElement("div", null, t('similarItemsNotFound'))))) : (react_1.default.createElement(Loader, { src: chrome.extension.getURL(loader_svg_1.default), alt: "" }))));
};
exports.SimilarSectionOpened = SimilarSectionOpened;


/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimilarItemList = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const BigItemList_1 = __webpack_require__(324);
const SimilarItemList = ({ scrollArea }) => {
    const { similars, isListView = false } = react_redux_1.useSelector(({ similar }) => similar);
    return react_1.default.createElement(BigItemList_1.BigItemList, { scrollArea: scrollArea, type: "similar", items: similars, options: { isListView } });
};
exports.SimilarItemList = SimilarItemList;


/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SIMILAR_SECTION = void 0;
exports.SIMILAR_SECTION = {
    SECTION_HEADER: {
        HEIGHT: 45
    }
};


/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigItem = void 0;
var BigItem_1 = __webpack_require__(776);
Object.defineProperty(exports, "BigItem", { enumerable: true, get: function () { return BigItem_1.BigItem; } });
__exportStar(__webpack_require__(328), exports);


/***/ }),

/***/ 776:
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
exports.BigItem = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const utils_1 = __webpack_require__(11);
const redirectMark_1 = __webpack_require__(64);
const MouseProvider_1 = __webpack_require__(326);
const itemOpenedFromSimilar_1 = __webpack_require__(327);
const constants_1 = __webpack_require__(25);
const BigItem_utils_1 = __webpack_require__(777);
const Link_1 = __webpack_require__(178);
const ItemInfo_1 = __webpack_require__(778);
const PriceInfo_1 = __webpack_require__(780);
const Tooltip_1 = __webpack_require__(781);
const S = __importStar(__webpack_require__(782));
const shouldShowTooltip = utils_1.isAliexpress();
const BigItem = ({ item, options = {}, type }) => {
    var _a;
    const mainItem = react_redux_1.useSelector(({ item: mainItem }) => mainItem);
    const { curr } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.item.priceStats);
    const currency = (_a = constants_1.MAP_CURRENCY_CODE_TO_SYMBOL[curr]) !== null && _a !== void 0 ? _a : curr;
    const locale = react_redux_1.useSelector((state) => { var _a, _b; return (_b = (_a = state === null || state === void 0 ? void 0 : state.settings) === null || _a === void 0 ? void 0 : _a.locale) === null || _b === void 0 ? void 0 : _b.value; });
    if (!item)
        return null;
    const { imageurl, nameeng, namerus, avg, href } = item;
    const { align = 'center', isListView = true } = options;
    const affHref = `${href}?mark=simin`;
    const link = affHref
        ? {
            href: affHref,
            as: Link_1.Link,
            target: '_blank',
            rel: 'noopener noreferrer',
            title: shouldShowTooltip ? null : (locale === 'ru' && namerus) || nameeng || namerus
        }
        : {};
    const updatedItem = item;
    const itemColor = BigItem_utils_1.getItemPriceColor(mainItem, updatedItem);
    const { min, max } = updatedItem;
    return (react_1.default.createElement(S.BigItem, Object.assign({ type: type, onClick: type === 'similar'
            ? () => {
                itemOpenedFromSimilar_1.itemOpenedFromSimilarMetric();
                redirectMark_1.RedirectMark.addIDSimilar(BigItem_utils_1.getCurrentID(), item.id);
            }
            : null }, link),
        react_1.default.createElement(S.Image, { src: imageurl, type: type }),
        react_1.default.createElement(S.Text, { color: itemColor, align: align, type: type },
            react_1.default.createElement(S.Heading, null,
                react_1.default.createElement(PriceInfo_1.PriceInfo, { isListView: isListView, currency: currency, maxPrice: max, minPrice: min }))),
        shouldShowTooltip && (react_1.default.createElement(MouseProvider_1.MouseProvider, null, (xy) => (react_1.default.createElement(Tooltip_1.TooltipComponent, Object.assign({}, item, { xy: xy }),
            react_1.default.createElement(ItemInfo_1.ItemInfo, { similarItem: item })))))));
};
exports.BigItem = BigItem;


/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemPriceColor = exports.getCurrentID = void 0;
const getCurrentID = () => {
    var _a;
    try {
        return Number((_a = window.location.href.match(/aliexpress\.com\/item\/(\d+)/)) === null || _a === void 0 ? void 0 : _a[1]);
    }
    catch (e) {
        return null;
    }
};
exports.getCurrentID = getCurrentID;
const getItemPriceColor = (mainItem, similarItem) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const isMainItemPriceLessSimilarPrice = ((_f = (_d = (_b = (_a = mainItem === null || mainItem === void 0 ? void 0 : mainItem.lastPrice) === null || _a === void 0 ? void 0 : _a.min) !== null && _b !== void 0 ? _b : (_c = mainItem === null || mainItem === void 0 ? void 0 : mainItem.priceStats) === null || _c === void 0 ? void 0 : _c.min) !== null && _d !== void 0 ? _d : (_e = mainItem === null || mainItem === void 0 ? void 0 : mainItem.lastPrice) === null || _e === void 0 ? void 0 : _e.max) !== null && _f !== void 0 ? _f : (_g = mainItem === null || mainItem === void 0 ? void 0 : mainItem.priceStats) === null || _g === void 0 ? void 0 : _g.max) <
        ((_h = similarItem === null || similarItem === void 0 ? void 0 : similarItem.min) !== null && _h !== void 0 ? _h : similarItem === null || similarItem === void 0 ? void 0 : similarItem.max);
    const isSimilarItemPriceLessMainPrice = ((_p = (_m = (_k = (_j = mainItem === null || mainItem === void 0 ? void 0 : mainItem.lastPrice) === null || _j === void 0 ? void 0 : _j.min) !== null && _k !== void 0 ? _k : (_l = mainItem === null || mainItem === void 0 ? void 0 : mainItem.priceStats) === null || _l === void 0 ? void 0 : _l.min) !== null && _m !== void 0 ? _m : (_o = mainItem === null || mainItem === void 0 ? void 0 : mainItem.lastPrice) === null || _o === void 0 ? void 0 : _o.max) !== null && _p !== void 0 ? _p : (_q = mainItem === null || mainItem === void 0 ? void 0 : mainItem.priceStats) === null || _q === void 0 ? void 0 : _q.max) >
        ((_r = similarItem === null || similarItem === void 0 ? void 0 : similarItem.min) !== null && _r !== void 0 ? _r : similarItem === null || similarItem === void 0 ? void 0 : similarItem.max);
    if (isMainItemPriceLessSimilarPrice) {
        return 'red';
    }
    if (isSimilarItemPriceLessMainPrice) {
        return 'green';
    }
    return 'gray';
};
exports.getItemPriceColor = getItemPriceColor;


/***/ }),

/***/ 778:
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
exports.ItemInfo = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const react_redux_1 = __webpack_require__(7);
const utils_1 = __webpack_require__(11);
const SmileyIcon_1 = __webpack_require__(92);
const StarIcon_1 = __webpack_require__(128);
const S = __importStar(__webpack_require__(779));
const ItemInfo = ({ similarItem }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { t } = react_i18next_1.useTranslation();
    const locale = react_redux_1.useSelector((state) => { var _a, _b; return (_b = (_a = state === null || state === void 0 ? void 0 : state.settings) === null || _a === void 0 ? void 0 : _a.locale) === null || _b === void 0 ? void 0 : _b.value; });
    const isUnknown = !((_b = (_a = similarItem === null || similarItem === void 0 ? void 0 : similarItem.detailedSeller) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.overall);
    return (react_1.default.createElement(S.Item, null,
        react_1.default.createElement(S.ItemHeading, null, locale === 'ru' ? similarItem === null || similarItem === void 0 ? void 0 : similarItem.namerus : (similarItem === null || similarItem === void 0 ? void 0 : similarItem.nameeng) || (similarItem === null || similarItem === void 0 ? void 0 : similarItem.namerus)),
        react_1.default.createElement(S.ItemContent, null,
            react_1.default.createElement(S.ItemSeller, null,
                t('itemTooltipReliability'),
                react_1.default.createElement(S.ItemSellerStatus, null,
                    react_1.default.createElement(SmileyIcon_1.SmileyIcon, { type: isUnknown ? 'unknown' : (_d = (_c = similarItem === null || similarItem === void 0 ? void 0 : similarItem.detailedSeller) === null || _c === void 0 ? void 0 : _c.status) === null || _d === void 0 ? void 0 : _d.overall, size: 16 }),
                    react_1.default.createElement(S.ItemSellerStatusNum, { type: isUnknown ? 'unknown' : (_f = (_e = similarItem === null || similarItem === void 0 ? void 0 : similarItem.detailedSeller) === null || _e === void 0 ? void 0 : _e.status) === null || _f === void 0 ? void 0 : _f.overall },
                        isUnknown ? '?' : (_g = similarItem === null || similarItem === void 0 ? void 0 : similarItem.detailedSeller) === null || _g === void 0 ? void 0 : _g.overall,
                        "%"))),
            react_1.default.createElement(S.ItemInfo, null,
                react_1.default.createElement(S.ItemOrders, null, similarItem === null || similarItem === void 0 ? void 0 :
                    similarItem.tradecount,
                    " ",
                    t(`itemTooltipOrder_${utils_1.pluralForm(similarItem === null || similarItem === void 0 ? void 0 : similarItem.tradecount)}`),
                    react_1.default.createElement("span", null,
                        ' / ', similarItem === null || similarItem === void 0 ? void 0 :
                        similarItem.reviews_count,
                        " ",
                        t(`itemTooltipReview_${utils_1.pluralForm(similarItem === null || similarItem === void 0 ? void 0 : similarItem.reviews_count)}`))),
                // don't show 0 or 0.0 stars
                (similarItem === null || similarItem === void 0 ? void 0 : similarItem.rating) !== 0 && (react_1.default.createElement(S.ItemStars, null, similarItem === null || similarItem === void 0 ? void 0 :
                    similarItem.rating,
                    " ",
                    react_1.default.createElement(StarIcon_1.StarIcon, { fill: true, color: "#878787" })))))));
};
exports.ItemInfo = ItemInfo;


/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSellerStatusNum = exports.ItemSellerStatus = exports.ItemSeller = exports.ItemHeading = exports.ItemContent = exports.ItemInfo = exports.ItemOrders = exports.ItemStars = exports.Item = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
const constants_1 = __webpack_require__(25);
exports.Item = styled_components_1.default.div.withConfig({ displayName: "Item", componentId: "sc-1rnyayd" }) `
	display: flex;
	flex-direction: column;
	padding: 7px 8px 8px 8px;
`;
exports.ItemStars = styled_components_1.default.div.withConfig({ displayName: "ItemStars", componentId: "sc-1v4scog" }) `
	align-items: center;
	color: #000000;
	display: flex;
	flex-grow: 1;
	font-family: Open Sans;
	font-size: 14px;

	margin-top: 6px;

	svg {
		height: 11px;
		margin-left: 2px;
		width: 11px;
	}
`;
exports.ItemOrders = styled_components_1.default.div.withConfig({ displayName: "ItemOrders", componentId: "sc-1nxhjlo" }) `
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
`;
exports.ItemInfo = styled_components_1.default.div.withConfig({ displayName: "ItemInfo", componentId: "sc-1one1q1" }) `
	border-left: 1px solid #e8e8e8;
	color: #747474;
	display: flex;
	flex-direction: column;
	flex-grow: 2;
	font-family: 'Open Sans', sans-serif;

	/* 91 777 заказов / 1 558 отзы... */
	font-size: 12px;
	font-style: normal;
	font-weight: normal;
	letter-spacing: -0.3px;
	line-height: 1;
	/* identical to box height, or 117% */

	overflow: hidden;

	padding-left: 10px;
`;
exports.ItemContent = styled_components_1.default.div.withConfig({ displayName: "ItemContent", componentId: "sc-1hsz3fl" }) `
	display: flex;
	flex-grow: 1;
	margin-top: 7px;
`;
exports.ItemHeading = styled_components_1.default.div.withConfig({ displayName: "ItemHeading", componentId: "sc-1uxx3mj" }) `
	color: #000000;
	font-size: 12px;
	font-weight: 600;
	/* identical to box height, or 133% */
	letter-spacing: -0.3px;
	line-height: 14px;

	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
exports.ItemSeller = styled_components_1.default.div.withConfig({ displayName: "ItemSeller", componentId: "sc-19t7wt3" }) `
	align-items: start;
	color: #000000;
	display: flex;
	flex-direction: column;
	font-family: Open Sans;
	font-size: 12px;

	/* Надежность */
	font-style: normal;
	font-weight: normal;
	height: 34px;
	letter-spacing: -0.3px;
	line-height: 1;
	/* identical to box height, or 117% */

	min-width: 66px;

	padding-right: 10px;
`;
exports.ItemSellerStatus = styled_components_1.default.div.withConfig({ displayName: "ItemSellerStatus", componentId: "sc-pvyr43" }) `
	align-items: center;
	display: flex;
	justify-content: flex-start;
	margin-top: 6px;
`;
exports.ItemSellerStatusNum = styled_components_1.default.div.withConfig({ displayName: "ItemSellerStatusNum", componentId: "sc-kigq7h" }) `
	color: ${({ type }) => constants_1.colors(constants_1.mapTypeToColor(type))};
	font-family: Open Sans;
	font-size: 14px;
	font-style: normal;
	font-weight: bold;
	line-height: 1;
	/* identical to box height, or 129% */

	margin-left: 4px;
`;


/***/ }),

/***/ 780:
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
exports.PriceInfo = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const styled_components_1 = __importDefault(__webpack_require__(3));
const renderPrice_1 = __webpack_require__(130);
const PriceInfo = ({ currency, minPrice, maxPrice, isListView }) => {
    const { t } = react_i18next_1.useTranslation();
    const shouldPlaceCurrencyFirst = ['$', '€'].includes(currency);
    const price = renderPrice_1.renderPrice({ minPrice, maxPrice, t, layout: isListView ? 'list' : 'grid' });
    // long currency render should be truncated when combined with long prices
    const shouldRenderCurrency = `${currency}${price}`.length < 17 || isListView;
    const renderCurrency = shouldRenderCurrency ? react_1.default.createElement(Currency, { small: currency.length === 3 }, currency) : null;
    const renderPriceWithCurrency = shouldPlaceCurrencyFirst ? [renderCurrency, price] : [price, ' ', renderCurrency];
    return react_1.default.createElement(react_1.default.Fragment, null, react_1.Children.toArray(renderPriceWithCurrency));
};
exports.PriceInfo = PriceInfo;
const Currency = styled_components_1.default.span.withConfig({ displayName: "Currency", componentId: "sc-1xbx7k1" }) `
	${({ small }) => small && 'font-size: 10px'};
	font-weight: 400;
`;


/***/ }),

/***/ 781:
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
exports.TooltipComponent = void 0;
const react_1 = __importStar(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const sender_1 = __webpack_require__(21);
const TooltipComponent = ({ xy, children }) => {
    react_1.useEffect(() => {
        sender_1.sendMetric('similar-items', 'displayed', 'similar-tooltip-open');
    }, []);
    // @ts-ignore
    return xy ? react_1.default.createElement(Tooltip, { xy: xy }, children) : null;
};
exports.TooltipComponent = TooltipComponent;
const Tooltip = styled_components_1.default.div.attrs(({ xy }) => ({
    style: { transform: `translate(${xy.x}px,${xy.y - 80}px)` }
})).withConfig({ displayName: "Tooltip", componentId: "sc-1mouong" }) `
	pointer-events: none;
	left: 0;
	top: 0;

	position: fixed;
	z-index: 1000;
	background: rgba(255, 255, 255, 0.98);
	width: 330px;
	height: 70px;
	box-shadow: 2px 2px 6px rgba(9, 19, 80, 0.2), -1px -1px 3px rgba(9, 19, 80, 0.05);
	border-radius: 4px;
	z-index: 1000;

	transition: transform 300ms ease;

	animation: fadeIn ease 500ms;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		60% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;


/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = exports.Text = exports.Image = exports.BigItem = exports.CardBody = exports.Card = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
const constants_1 = __webpack_require__(25);
const BigItem_const_1 = __webpack_require__(328);
exports.Card = styled_components_1.default.div.withConfig({ displayName: "Card", componentId: "sc-j36p70" }) `
	box-shadow: 0 1px 0 0 #e8e8e8;
	display: flex;
	height: ${BigItem_const_1.BIG_ITEM_CONSTANTS.LIST_VIEW_ITEM_HEIGHT}px;
	padding: 6px 7px 7px;
	transition: background-color 0.1s, box-shadow 0.1s;
	width: 100%;
`;
exports.CardBody = styled_components_1.default.div.withConfig({ displayName: "CardBody", componentId: "sc-1o2bni7" }) `
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow: hidden;
`;
exports.BigItem = styled_components_1.default.div.withConfig({ displayName: "BigItem", componentId: "sc-4nqen0" }) `
	box-sizing: border-box;
	position: relative;
	transition: background-color 0.1s, box-shadow 0.1s;
	${({ type }) => type === 'similar'
    ? `
    background-color: #fff;
    border: 1px solid #e8e8e8;
    border-left: none;
    border-top: none;
    height: ${BigItem_const_1.BIG_ITEM_CONSTANTS.GRID_VIEW_ITEM_HEIGHT}px;
    padding: 3px;
    width: 142px;
    &:nth-child(3n+3) {
      border-right: none;
    }
    :hover {
      background-color: #fcfdff;
      box-shadow: 0 0 0 1px inset #dee3ea;
    }
  `
    : `
    border: 1px solid #e9eff4;
    border-radius: 6px;
    height: 118px;
    margin: 0 0 10px 10px;
    width: 106px;
    :hover {
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
    }
  `}
`;
exports.Image = styled_components_1.default.div.withConfig({ displayName: "Image", componentId: "sc-1hr4sgg" }) `
	background: url('${({ src }) => src}_220x220q90.jpg') center center no-repeat;
	background-size: contain;
	flex: 0 0 auto;
	${({ type }) => type === 'similar'
    ? `
    height: 112px;
    width: 116px;
  `
    : `
    height: 95px;
    width: 105px;
  `}
`;
exports.Text = styled_components_1.default.div.withConfig({ displayName: "Text", componentId: "sc-1zemwx" }) `
	/* 24 + 42 + 5 */
	color: ${({ color }) => {
    return color !== undefined ? constants_1.colors(color) : 'inherit';
}};
	position: relative;
	text-align: ${({ align }) => align};
	top: 0;
	transition: top 0.2s;
	${({ type }) => type === 'similar'
    ? `
    font-weight: 700;
    margin-top: 5px;
  `
    : `
    background-color: white;
    font-weight: 600;
    padding: 0 5px;
  `}
`;
exports.Heading = styled_components_1.default.div.withConfig({ displayName: "Heading", componentId: "sc-1u69l8o" }) `
	/* Ellipsis */
	font-size: 14.5px;
	line-height: 16px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;


/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesSectionOpened = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importDefault(__webpack_require__(3));
const background_1 = __webpack_require__(17);
const utils_1 = __webpack_require__(11);
const constants_1 = __webpack_require__(25);
const stores_1 = __webpack_require__(10);
const typePopupOpen_1 = __webpack_require__(81);
const uniqueOpened_1 = __webpack_require__(124);
const CustomScrollArea_1 = __webpack_require__(127);
const SectionHeader_1 = __webpack_require__(78);
const FavoriteItemList_1 = __webpack_require__(784);
const SignIn = styled_components_1.default.span.withConfig({ displayName: "SignIn", componentId: "sc-hgqp71" }) `
	color: ${constants_1.colors('blue')};
	cursor: pointer;
	text-decoration: underline;
`;
const FavoritesSectionOpened = () => {
    const { t } = react_i18next_1.useTranslation();
    const { account, favorites, favoritesCount } = react_redux_1.useSelector((state) => {
        var _a, _b;
        return ({
            account: state === null || state === void 0 ? void 0 : state.account,
            favorites: state === null || state === void 0 ? void 0 : state.favorites,
            favoritesCount: (_b = (_a = state === null || state === void 0 ? void 0 : state.favorites) === null || _a === void 0 ? void 0 : _a.favorites) === null || _b === void 0 ? void 0 : _b.length
        });
    });
    const tabs = [
        {
            name: 'date',
            text: t('trackedListMenu_latest')
        },
        {
            name: 'diff',
            text: t('trackedListMenu_dec')
        }
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SectionHeader_1.SectionHeader, { backButton: true, title: t(`youFollowCountItems_${utils_1.pluralForm(favoritesCount)}`, {
                count: favoritesCount
            }), subtitle: (account === null || account === void 0 ? void 0 : account.token) ? undefined : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(SignIn, { onClick: () => {
                        background_1.openAuth();
                        uniqueOpened_1.uniqueOpenFromTracking();
                        typePopupOpen_1.signinMetric();
                    } }, t('signIn')),
                t('toGetNotifications'))), tabs: tabs, currentTab: favorites.sortType, switchTab: stores_1.favoritesSliceActions.sortFavorites }),
        react_1.default.createElement(CustomScrollArea_1.CustomScrollArea, null,
            react_1.default.createElement(FavoriteItemList_1.FavoriteItemList, null))));
};
exports.FavoritesSectionOpened = FavoritesSectionOpened;


/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteItemList = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const FavoriteItem_1 = __webpack_require__(785);
const FavoriteItemList = () => {
    const { favorites } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.favorites);
    return (react_1.default.createElement(react_1.default.Fragment, null, favorites && favorites.map((favoritesItem, index) => react_1.default.createElement(FavoriteItem_1.FavoriteItem, { key: index, favoritesItem: favoritesItem }))));
};
exports.FavoriteItemList = FavoriteItemList;


/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteItem = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importDefault(__webpack_require__(3));
const constants_1 = __webpack_require__(25);
const trackingAddOrStop_1 = __webpack_require__(121);
const utils_1 = __webpack_require__(11);
const TrashCanIcon_1 = __webpack_require__(329);
const Bold_1 = __webpack_require__(54);
const getPrice_1 = __webpack_require__(80);
const Link_1 = __webpack_require__(178);
const Container = styled_components_1.default.div.withConfig({ displayName: "Container", componentId: "sc-1np5ym8" }) `
	position: relative;

	& + & {
		border-top: ${constants_1.favoritesBorder};
	}

	:hover {
		background-color: #f7f7f7;

		${TrashCanIcon_1.Svg} {
			opacity: 0.15;
		}
	}
`;
const CustomLink = styled_components_1.default(Link_1.Link).withConfig({ displayName: "CustomLink", componentId: "sc-12y0iht" }) `
	display: flex;
	/* 50 = 25 + 25 */
	font-size: 13px;
	padding: 12px 41px 12px 12px;
`;
const Icons = styled_components_1.default.div.withConfig({ displayName: "Icons", componentId: "sc-1ianenf" }) `
	display: flex;
	/* 50 = 25 + 25 */
	flex-direction: column;
	height: 84px;
	justify-content: flex-end;
	padding: 12px 41px 12px 0;
	position: absolute;
	right: 0;
	top: 0;
	width: 41px;
`;
const Image = styled_components_1.default.div.withConfig({ displayName: "Image", componentId: "sc-118602b" }) `
	background: url('${({ src }) => src}') center center no-repeat;
	background-size: cover;
	flex-shrink: 0;
	height: 60px;
	width: 60px;
`;
const Rows = styled_components_1.default.div.withConfig({ displayName: "Rows", componentId: "sc-c1d7nm" }) `
	min-width: 0;
	padding-left: 15px;
`;
const Row = styled_components_1.default.div.withConfig({ displayName: "Row", componentId: "sc-uzevp5" }) `
	/* Ellipsis */
	color: #474747;
	margin-bottom: 4px;
	overflow: hidden;

	text-overflow: ellipsis;
	white-space: nowrap;
`;
const Color = styled_components_1.default.span.withConfig({ displayName: "Color", componentId: "sc-o57m80" }) `
	color: ${({ color }) => constants_1.colors(color)};
`;
// const getPriceText = (currency, changes) => {
// 	if (currency === '$' || currency === '€') {
// 		if (changes < 0) {
// 			return `-${currency}${Math.abs(changes && changes.toFixed(2))}`;
// 		}
// 		return `${currency}${changes && changes.toFixed(2)}`;
// 	}
// 	return `${changes && changes.toFixed(2)}${currency}`;
// };
const PriceText = ({ currency, maxPrice }) => {
    if (currency === '$' || currency === '€') {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            currency,
            react_1.default.createElement(Bold_1.Bold, null, utils_1.round(Number(maxPrice), 0))));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Bold_1.Bold, null, utils_1.round(Number(maxPrice), 0)),
        " ",
        currency));
};
const FavoriteItem = ({ favoritesItem }) => {
    const { id, changes, maxPrice } = favoritesItem;
    const { imageurl, namerus, nameeng } = favoritesItem.item;
    const { curr } = react_redux_1.useSelector(({ item }) => item.lastPrice);
    const locale = react_redux_1.useSelector((state) => { var _a, _b; return (_b = (_a = state === null || state === void 0 ? void 0 : state.settings) === null || _a === void 0 ? void 0 : _a.locale) === null || _b === void 0 ? void 0 : _b.value; });
    const textPriceChanges = getPrice_1.getTextPriceWithCurrency({ curr, price: changes });
    const textPrice = getPrice_1.getTextPriceWithCurrency({ curr, price: maxPrice });
    const { t } = react_i18next_1.useTranslation();
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(CustomLink, { onClick: () => trackingAddOrStop_1.trackingAddOrStopMetric('opened', 'list'), target: "_blank", rel: "noreferrer noopener", href: `https://aliexpress.com/item//${id}.html` },
            react_1.default.createElement(Image, { src: imageurl }),
            react_1.default.createElement(Rows, null,
                react_1.default.createElement(Row, null, (locale === 'ru' && namerus) || nameeng || namerus),
                react_1.default.createElement(Row, null,
                    react_1.default.createElement(Color, { color: "gray" },
                        react_1.default.createElement(Bold_1.Bold, null,
                            " ",
                            textPrice))),
                react_1.default.createElement(Row, null,
                    changes === 0 || changes === undefined
                        ? t('priceNotChanged')
                        : changes > 0
                            ? t('priceIncreased_short')
                            : t('priceDecreased_short'),
                    changes !== 0 && react_1.default.createElement(Color, { color: changes > 0 ? 'red' : 'green' },
                        " ",
                        textPriceChanges)))),
        react_1.default.createElement(Icons, null,
            react_1.default.createElement(TrashCanIcon_1.TrashCanIcon, { id: id, onClick: (e) => e.preventDefault() }))));
};
exports.FavoriteItem = FavoriteItem;


/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsSectionOpened = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const styled_components_1 = __importDefault(__webpack_require__(3));
const react_redux_1 = __webpack_require__(7);
const utils_1 = __webpack_require__(11);
const CustomScrollArea_1 = __webpack_require__(127);
const SectionHeader_1 = __webpack_require__(78);
const SmallPhotoList_1 = __webpack_require__(172);
const stores_1 = __webpack_require__(10);
const no_reviews_svg_1 = __importDefault(__webpack_require__(787));
const ITaoReviewItemList_1 = __webpack_require__(788);
const Empty = styled_components_1.default.div.withConfig({ displayName: "Empty", componentId: "sc-137axvb" }) `
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
`;
const Img = styled_components_1.default.img.withConfig({ displayName: "Img", componentId: "sc-5eb8dh" }) `
	margin-bottom: 20px;
`;
const ReviewsSectionOpened = () => {
    const { t } = react_i18next_1.useTranslation();
    const reviews = react_redux_1.useSelector((state) => state.reviews);
    const { reviewsCount } = reviews;
    const { currentTab } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.reviewsSectionUI);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SectionHeader_1.SectionHeader, { title: `${t('reviewsTitle')}${reviewsCount > 0 ? ` (${reviewsCount})` : ''}`, switchTab: (tab) => stores_1.reviewsSectionUISliceActions.openTab(tab) }),
        reviewsCount > 0 ? (react_1.default.createElement(CustomScrollArea_1.CustomScrollArea, { withPadding: true },
            ['all', 'iTao'].includes(currentTab) && react_1.default.createElement(ITaoReviewItemList_1.ReviewItemList, null),
            ['all', 'photos'].includes(currentTab) && react_1.default.createElement(SmallPhotoList_1.SmallPhotoList, { type: "all" }))) : (react_1.default.createElement(Empty, null,
            react_1.default.createElement(Img, { src: utils_1.getURL(no_reviews_svg_1.default) }),
            react_1.default.createElement("div", null, t('reviewsError_noData'))))));
};
exports.ReviewsSectionOpened = ReviewsSectionOpened;


/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/img/no-reviews.svg";

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewItemList = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const BigItemList_1 = __webpack_require__(324);
const fixDescription = (reviews) => reviews.map((review) => ({
    ...review,
    description: new DOMParser().parseFromString(review.description, 'text/html').body.textContent
}));
const mapReviewsToItems = (reviews) => reviews.map((review) => ({
    href: review.url,
    imageUrl: review.thumbnail,
    text: review.name,
    description: review.description
}));
const ReviewItemList = () => {
    const { iTaoReviews } = react_redux_1.useSelector((state) => state.reviews);
    const fixediTaoReviews = fixDescription(iTaoReviews);
    const items = mapReviewsToItems(fixediTaoReviews);
    return react_1.default.createElement(BigItemList_1.BigItemList, { type: "review", options: { align: 'left' }, items: items });
};
exports.ReviewItemList = ReviewItemList;


/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const getInstalledDate_1 = __webpack_require__(77);
const aliexpress_1 = __webpack_require__(62);
const aliradar_1 = __webpack_require__(32);
class Item {
    constructor(doc) {
        this.doc = doc;
    }
    async parse() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const config = (_b = (_a = (await aliradar_1.PagePatterns.get())) === null || _a === void 0 ? void 0 : _a.aliexpress) === null || _b === void 0 ? void 0 : _b.parserContent;
        let item = {
            name: null,
            rating: null,
            reviews_count: null,
            tradecount: null,
            price: null,
            imageurl: null
        };
        const isDebug = Number((await getInstalledDate_1.getInstalledDate()).installed) === 1;
        for (let configKey of Object.keys(config)) {
            if (((_c = config === null || config === void 0 ? void 0 : config[configKey]) === null || _c === void 0 ? void 0 : _c.attrSelectors) && !item[configKey]) {
                for (const selectorConfig of (_d = config === null || config === void 0 ? void 0 : config[configKey]) === null || _d === void 0 ? void 0 : _d.attrSelectors) {
                    const node = this.doc.querySelector(`[class*=${selectorConfig}]`);
                    if (node) {
                        if (isDebug) {
                            node.setAttribute('style', 'border: solid 2px #01ff00;');
                        }
                        if (configKey === 'price') {
                            const price = (_h = (_g = (_f = (_e = node.textContent) === null || _e === void 0 ? void 0 : _e.trim()) === null || _f === void 0 ? void 0 : _f.replaceAll(',', '.')) === null || _g === void 0 ? void 0 : _g.replace(/\s/g, '')) === null || _h === void 0 ? void 0 : _h.split('-');
                            const beginPrice = (price === null || price === void 0 ? void 0 : price[0]) && parseFloat(price === null || price === void 0 ? void 0 : price[0]);
                            const endPrice = (price === null || price === void 0 ? void 0 : price[1]) && parseFloat(price === null || price === void 0 ? void 0 : price[1]);
                            item[configKey] = {
                                curr: await aliexpress_1.getCurrency(),
                                max: endPrice || beginPrice || null,
                                min: beginPrice || endPrice || null,
                                date: new Date().toISOString().slice(0, 10)
                            };
                            break;
                        }
                        if (configKey === 'rating' || configKey === 'reviews_count' || configKey === 'tradecount') {
                            item[configKey] = (_k = (_j = node === null || node === void 0 ? void 0 : node.textContent) === null || _j === void 0 ? void 0 : _j.match(/[+-]?([0-9]*[.])?[0-9]+/)) === null || _k === void 0 ? void 0 : _k[0];
                            break;
                        }
                        if (configKey === 'name') {
                            item[configKey] = node === null || node === void 0 ? void 0 : node.textContent;
                            break;
                        }
                        item[configKey] = node.textContent;
                        break;
                    }
                }
            }
            if (((_l = config === null || config === void 0 ? void 0 : config[configKey]) === null || _l === void 0 ? void 0 : _l.selectors) && !item[configKey]) {
                for (const selectorConfig of (_m = config === null || config === void 0 ? void 0 : config[configKey]) === null || _m === void 0 ? void 0 : _m.selectors) {
                    if (configKey === 'adminseq') {
                        const sellerNode = this.doc.querySelector(selectorConfig);
                        if (sellerNode === null || sellerNode === void 0 ? void 0 : sellerNode.href) {
                            if (isDebug) {
                                sellerNode.setAttribute('style', 'border: solid 2px #01ff00;');
                            }
                            const adminseq = (_r = (_q = (_p = (_o = sellerNode === null || sellerNode === void 0 ? void 0 : sellerNode.href) === null || _o === void 0 ? void 0 : _o.match(new RegExp(config.seller.regexUrl))) === null || _p === void 0 ? void 0 : _p[1]) === null || _q === void 0 ? void 0 : _q.match('(\\d+)')) === null || _r === void 0 ? void 0 : _r[1];
                            item.adminseq = adminseq;
                            break;
                        }
                    }
                    if (configKey === 'imageurl') {
                        const imageNode = this.doc.querySelector(selectorConfig);
                        if (imageNode === null || imageNode === void 0 ? void 0 : imageNode.src) {
                            if (isDebug) {
                                imageNode.setAttribute('style', 'border: solid 2px #01ff00;');
                            }
                            item[configKey] = imageNode === null || imageNode === void 0 ? void 0 : imageNode.src;
                            break;
                        }
                    }
                }
            }
        }
        return {
            ...item,
            adminseq: (item === null || item === void 0 ? void 0 : item.adminseq) ? item.adminseq : (_t = (_s = (await aliexpress_1.SellerActions.getSellerId())) === null || _s === void 0 ? void 0 : _s.match('(\\d+)')) === null || _t === void 0 ? void 0 : _t[1]
        };
    }
}
exports.Item = Item;


/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.aliradar = void 0;
const actions_1 = __webpack_require__(24);
const socialMediaAuth_1 = __webpack_require__(302);
const utils_1 = __webpack_require__(11);
const boarding_new_1 = __webpack_require__(82);
const injectBoardingPopup_1 = __webpack_require__(797);
const login = async (token) => {
    const response = await socialMediaAuth_1.socialMediaAuth(token);
    actions_1.signIn(response);
    window.close();
};
const aliradar = async () => {
    if (window.location.pathname.includes('thank-you')) {
        const url = 'https://aliradar.com/boarding.html';
        utils_1.ChromeStorage.set({ boardingPage: url });
        const button = document.getElementById('view-instruction');
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            boarding_new_1.boardingOpenInstallMetric();
            window.location.replace(url);
        });
        return;
    }
    if (window.location.pathname.includes('boarding')) {
        await injectBoardingPopup_1.injectBoardingPopup();
        chrome.runtime.sendMessage({ url: 'boarding' });
        return;
    }
    const urlParams = new URLSearchParams(window.location.hash.replace(/^#/, '?'));
    const socialMedia = urlParams.get('state');
    if (!socialMedia)
        return;
    if (socialMedia === 'google') {
        await login({
            googleToken: urlParams.get('id_token'),
            accessToken: urlParams.get('access_token')
        });
    }
    if (socialMedia === 'vk') {
        await login({ vkToken: urlParams.get('access_token') });
    }
    if (socialMedia === 'fb') {
        await login({ fbToken: urlParams.get('access_token') });
    }
};
exports.aliradar = aliradar;


/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectBoardingPopup = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const utils_1 = __webpack_require__(11);
const BoardingPopup_1 = __webpack_require__(798);
const AppLayout_1 = __webpack_require__(53);
const isAliexpressProductPage_1 = __webpack_require__(95);
const inject_1 = __webpack_require__(347);
const actions_1 = __webpack_require__(24);
const getInstalledDate_1 = __webpack_require__(77);
const photoReviews_1 = __webpack_require__(131);
const stores_1 = __webpack_require__(10);
const item_1 = __webpack_require__(96);
const similars_1 = __webpack_require__(132);
const DAUpopup_1 = __webpack_require__(349);
const updateHots_1 = __webpack_require__(179);
const injectWithPorts = () => {
    let isAliProductPage = false;
    const port = chrome.runtime.connect({ name: 'aliexpress_item' });
    port.onMessage.addListener(async (msg) => {
        var _a, _b;
        if (msg.tabUrl) {
            isAliProductPage = await isAliexpressProductPage_1.isAliexpressProductPage(msg.tabUrl);
            if (isAliProductPage) {
                // await render(<ProductSkeleton />, document.getElementById('root'));
            }
            else {
                // await render(<BaseSkeleton />, document.getElementById('root'));
                await inject_1.basePopup();
            }
            await actions_1.FavoritesActions.init();
            await actions_1.AccountActions.init();
            await actions_1.SettingsActions.init();
        }
        if (msg.item) {
            const aliexpressValidation = (!(await utils_1.isOld()) || (await getInstalledDate_1.getInstalledDate()).installed === 1) && isAliProductPage;
            if (aliexpressValidation) {
                photoReviews_1.getPhotoData((_a = msg.item) === null || _a === void 0 ? void 0 : _a.id, (_b = msg.item) === null || _b === void 0 ? void 0 : _b.adminseq).then((photoData) => {
                    stores_1.webextStore.dispatch(stores_1.reviewsSliceActions.addUserReviewsAndPhotos(photoData));
                });
            }
            await item_1.ItemActions.initStore({ item: msg.item });
            await actions_1.FavoritesActions.init();
            DAUpopup_1.dauExtPopupOpened();
            switch (true) {
                case aliexpressValidation:
                    utils_1.render(react_1.default.createElement(AppLayout_1.AppLayout, null,
                        react_1.default.createElement(BoardingPopup_1.BoardingPopup, null)), document.getElementById('root'));
                    break;
                default:
                    inject_1.basePopup();
            }
            // port.disconnect();
        }
        if (msg.photoData) {
            stores_1.webextStore.dispatch(stores_1.reviewsSliceActions.addUserReviewsAndPhotos(msg.photoData));
        }
        if (msg.similars) {
            similars_1.SimilarsActions.initStore({ similars: msg.similars });
        }
        if (msg.hotCategories && msg.hotItems) {
            updateHots_1.updateHots(msg);
        }
    });
};
const injectBoardingPopup = async () => {
    try {
        const popup = document.getElementById('popup');
        window.onload = () => { var _a; return (_a = popup === null || popup === void 0 ? void 0 : popup.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(popup); };
    }
    catch (es) { }
    injectWithPorts();
};
exports.injectBoardingPopup = injectBoardingPopup;


/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardingPopup = void 0;
var BoardingPopup_1 = __webpack_require__(799);
Object.defineProperty(exports, "BoardingPopup", { enumerable: true, get: function () { return BoardingPopup_1.BoardingPopup; } });


/***/ }),

/***/ 799:
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
exports.BoardingPopup = void 0;
const react_1 = __importStar(__webpack_require__(0));
const BoardingActions_1 = __webpack_require__(800);
const boarding_new_1 = __webpack_require__(82);
const ProductPopup_1 = __webpack_require__(333);
const CheckFeatures_1 = __webpack_require__(862);
const Ready_1 = __webpack_require__(863);
const StepsWrapper_1 = __webpack_require__(865);
const Welcome_1 = __webpack_require__(866);
const S = __importStar(__webpack_require__(868));
const boarding_1 = __webpack_require__(869);
const BoardingPopup = () => {
    const [step, setStep] = react_1.useState('welcome');
    const [url, changeUrl] = react_1.useState('0');
    react_1.useEffect(() => {
        boarding_1.BoardingApi.getBoardingItem().then((v) => changeUrl(v));
    }, []);
    react_1.useEffect(() => {
        if (!BoardingActions_1.BoardingActions.port) {
            BoardingActions_1.BoardingActions.subscribeToUpdates(() => {
                setStep('open');
            });
        }
    });
    const getSteps = react_1.useCallback((step) => {
        switch (step) {
            case 'welcome':
                boarding_new_1.boardingStepsFirstMetric();
                return react_1.default.createElement(Welcome_1.Welcome, { nextStep: () => setStep('open') });
            case 'open':
                boarding_new_1.boardingStepsSecondMetric();
                return (react_1.default.createElement(S.PopupSimulator, null,
                    react_1.default.createElement(CheckFeatures_1.CheckFeatures, { nextStep: () => setStep('ready') }),
                    react_1.default.createElement(ProductPopup_1.ProductPopup, { boarding: true })));
            case 'ready':
                boarding_new_1.boardingStepsThirdMetric();
                return react_1.default.createElement(Ready_1.Ready, { url: url });
            default:
                return '';
        }
    }, [url]);
    return react_1.default.createElement(StepsWrapper_1.StepsWrapper, null, getSteps(step));
};
exports.BoardingPopup = BoardingPopup;


/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardingActions = void 0;
class BoardingActions {
    static subscribeToUpdates(callback) {
        this.callback = callback;
        this.port = chrome.runtime.connect({ name: 'boarding' });
        this.port.onMessage.addListener(this.callback);
    }
    static unsubscribe() {
        this.port.onMessage.removeListener(this.callback);
    }
    static sendUpdates() {
        this.port.postMessage({ action: 'boardingUpdated' });
    }
}
exports.BoardingActions = BoardingActions;


/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckFeatures = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const styled_components_1 = __importDefault(__webpack_require__(3));
const Button_1 = __webpack_require__(181);
const Wrapper_1 = __webpack_require__(182);
const Subtitle = styled_components_1.default.div.withConfig({ displayName: "Subtitle", componentId: "sc-1pnqqfe" }) `
	font-size: 16px;
	line-height: 20px;
`;
const FeatureTitle = styled_components_1.default.div.withConfig({ displayName: "FeatureTitle", componentId: "sc-yhsts0" }) `
	font-size: 20px;
	font-weight: 700;
	margin-bottom: 8px;
`;
const Arrow = styled_components_1.default.img.withConfig({ displayName: "Arrow", componentId: "sc-12yr9qo" }) `
	position: absolute;
	right: calc(50% - 8px);
	top: -70px;
`;
const Section = styled_components_1.default.div.withConfig({ displayName: "Section", componentId: "sc-11c4arf" }) `
	align-items: flex-end;
	display: flex;
	justify-content: space-between;
`;
const Text = styled_components_1.default.div.withConfig({ displayName: "Text", componentId: "sc-1wenz8w" }) `
	display: inline-block;
	width: 300px;
`;
const Wrapper = styled_components_1.default(Wrapper_1.WrapperDefault).withConfig({ displayName: "Wrapper", componentId: "sc-6fx2ck" }) `
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1), -1px 1px 15px rgba(0, 0, 0, 0.1);
	height: 132px;
	padding: 30px;
	right: 101px;
	top: 693px;
	width: 520px;
	@media (max-height: 825px) {
		right: 803px;
		top: 474px;
		${Arrow} {
			bottom: 6%;
			right: -51px;
			top: initial;
			transform: rotate(90deg);
		}
	}
	@media (max-height: 825px) and (max-width: 1324px) {
		bottom: calc(100vh - 600px - 6px);
		height: auto;
		right: 804px;
		top: initial;
		width: 310px;
		${Section} {
			align-items: center;
			flex-direction: column;
		}
		${Text} {
			margin-bottom: 15px;
			width: 100%;
		}
	}
`;
const CheckFeatures = ({ nextStep }) => {
    const { t } = react_i18next_1.useTranslation();
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(Arrow, { src: chrome.runtime.getURL('/assets/img/arrow.svg') }),
        react_1.default.createElement(Section, null,
            react_1.default.createElement(Text, null,
                react_1.default.createElement(FeatureTitle, null, t('check_all_tabs')),
                react_1.default.createElement(Subtitle, null, t('use_features'))),
            react_1.default.createElement(Button_1.Button, { onClick: () => nextStep() }, t('next')))));
};
exports.CheckFeatures = CheckFeatures;


/***/ }),

/***/ 863:
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
exports.Ready = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const boarding_new_1 = __webpack_require__(82);
const Button_1 = __webpack_require__(181);
const S = __importStar(__webpack_require__(864));
const actions_1 = __webpack_require__(24);
const Ready = ({ url }) => {
    const { t } = react_i18next_1.useTranslation();
    const handleButton = async () => {
        actions_1.SettingsActions.update({ name: 'popupInstuction', value: false });
        boarding_new_1.boardingOpenAliMetric();
        window.open(url, '_self');
    };
    const handleSupport = async () => {
        boarding_new_1.boardingSupportMetric();
        window.open(chrome.runtime.getURL('auth.html#support'));
    };
    return (react_1.default.createElement(S.Ready, null,
        react_1.default.createElement(S.Title, null, t('enjoy')),
        react_1.default.createElement("img", { src: chrome.runtime.getURL('/assets/img/illustration-2.svg') }),
        react_1.default.createElement(S.Support, { onClick: handleSupport }, t('support_have_que')),
        react_1.default.createElement(Button_1.Button, { onClick: handleButton }, t('start_shopping'))));
};
exports.Ready = Ready;


/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ready = exports.Title = exports.Support = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
const Wrapper_1 = __webpack_require__(182);
exports.Support = styled_components_1.default.a.withConfig({ displayName: "Support", componentId: "sc-1hidv2v" }) `
	color: #50a2ff;
	cursor: pointer;
	font-weight: 500;
	letter-spacing: -0.3px;
	margin: 25px 0 auto;
	transition: color 0.3s;
	:hover {
		color: #50a2ff;
		text-decoration: underline;
	}
	:active {
		color: #2889f4;
	}
`;
exports.Title = styled_components_1.default.div.withConfig({ displayName: "Title", componentId: "sc-e23qx9" }) `
	font-size: 20px;
	font-weight: 700;
	line-height: 28px;
	margin-bottom: 25px;
	text-align: center;
	width: 58%;
`;
exports.Ready = styled_components_1.default(Wrapper_1.WrapperDefault).withConfig({ displayName: "Ready", componentId: "sc-34zp6l" }) `
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 440px;
	left: 50%;
	padding: 30px 30px 40px;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 520px;
`;


/***/ }),

/***/ 865:
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
exports.StepsWrapper = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importStar(__webpack_require__(3));
const GlobalStyle = styled_components_1.createGlobalStyle `
  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    font-weight: 400;
    font-style: normal;
    src: url("${chrome.extension.getURL('/assets/fonts/Roboto-Regular.ttf')}");
  }

  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    font-weight: 500;
    font-style: normal;
    src: url("${chrome.extension.getURL('/assets/fonts/Roboto-Medium.ttf')}");
  }

  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    font-weight: 700;
    font-style: normal;
    src: url("${chrome.extension.getURL('/assets/fonts/Roboto-Bold.ttf')}");
  }
`;
const Wrapper = styled_components_1.default.div.withConfig({ displayName: "Wrapper", componentId: "sc-1i0eux6" }) `
	box-sizing: border-box;
	color: #1b1b1b;
	font-family: 'Roboto', sans-serif;
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}
`;
const StepsWrapper = ({ children }) => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(GlobalStyle, null),
    react_1.default.createElement(Wrapper, null, children)));
exports.StepsWrapper = StepsWrapper;


/***/ }),

/***/ 866:
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
exports.Welcome = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const Button_1 = __webpack_require__(181);
const S = __importStar(__webpack_require__(867));
const Welcome = ({ nextStep }) => {
    const { t } = react_i18next_1.useTranslation();
    return (react_1.default.createElement(S.Wrapper, null,
        react_1.default.createElement(S.Arrow, { src: chrome.runtime.getURL('/assets/img/arrow.svg') }),
        react_1.default.createElement(S.SectionTop, null, t('install')),
        react_1.default.createElement(S.SectionIcon, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(S.SectionIconTitle, null, t('icon_click'))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("img", { src: chrome.runtime.getURL('/assets/img/ic_smile.svg'), alt: "" }))),
        react_1.default.createElement(S.SectionPinnedExtension, null,
            react_1.default.createElement(S.Hr, null),
            react_1.default.createElement("div", null,
                react_1.default.createElement(S.SectionPinnedText, null, t('icon_not_found'))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("img", { src: chrome.runtime.getURL('/assets/img/boarding/pinned_step_1.svg'), alt: "" })),
            react_1.default.createElement("div", null,
                react_1.default.createElement(S.SectionPinnedText, null, t('icon_click_pinned'))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("img", { src: chrome.runtime.getURL('/assets/img/boarding/pinned_step_2.svg'), alt: "" }))),
        react_1.default.createElement(S.SectionFeature, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(S.SectionFeatureTitle, null, t('seller_rating')),
                react_1.default.createElement(S.IconsBlock, null,
                    react_1.default.createElement(S.IconBlock, null,
                        react_1.default.createElement("img", { src: chrome.runtime.getURL('/assets/img/ic_smile_good.svg'), alt: "" }),
                        react_1.default.createElement("div", null, t('high'))),
                    react_1.default.createElement(S.IconBlock, null,
                        react_1.default.createElement("img", { src: chrome.runtime.getURL('/assets/img/ic_smile_mid.svg'), alt: "" }),
                        react_1.default.createElement("div", null, t('average'))),
                    react_1.default.createElement(S.IconBlock, null,
                        react_1.default.createElement("img", { src: chrome.runtime.getURL('/assets/img/ic_smile_bad.svg'), alt: "" }),
                        react_1.default.createElement("div", null, t('low'))))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(S.SectionFeatureTitle, null, t('price')),
                react_1.default.createElement(S.IconsBlock, null,
                    react_1.default.createElement(S.IconBlock, null,
                        react_1.default.createElement("img", { src: chrome.runtime.getURL('/assets/img/ic_arrow_down.svg'), alt: "" }),
                        react_1.default.createElement("div", null, t('dropped'))),
                    react_1.default.createElement(S.IconBlock, null,
                        react_1.default.createElement("img", { src: chrome.runtime.getURL('/assets/img/ic_arrow_up.svg'), alt: "" }),
                        react_1.default.createElement("div", null, t('increased')))))),
        react_1.default.createElement(S.SectionBottom, null,
            react_1.default.createElement(S.SectionBottomText, null, t('icon_feature_desctiption')),
            react_1.default.createElement(Button_1.Button, { onClick: () => nextStep() }, t('next')))));
};
exports.Welcome = Welcome;


/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionPinnedText = exports.Hr = exports.SectionPinnedExtension = exports.Wrapper = exports.SectionTop = exports.SectionIconTitle = exports.SectionIconText = exports.SectionIcon = exports.SectionFeatureTitle = exports.SectionFeature = exports.SectionBottomText = exports.SectionBottom = exports.IconBlock = exports.IconsBlock = exports.Arrow = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
const Wrapper_1 = __webpack_require__(182);
exports.Arrow = styled_components_1.default.img.withConfig({ displayName: "Arrow", componentId: "sc-lh57rv" }) `
	position: absolute;
	right: 61px;
	top: -70px;
`;
exports.IconsBlock = styled_components_1.default.div.withConfig({ displayName: "IconsBlock", componentId: "sc-3irz9g" }) `
	display: flex;
`;
exports.IconBlock = styled_components_1.default.div.withConfig({ displayName: "IconBlock", componentId: "sc-1o1yrg3" }) `
	font-size: 14px;
	margin-right: 23px;
	min-width: 57px;

	:last-of-type {
		margin-right: 0;
	}

	div {
		margin-top: -6px;
	}

	img {
		height: 40px;
	}
`;
exports.SectionBottom = styled_components_1.default.section.withConfig({ displayName: "SectionBottom", componentId: "sc-d4ms7j" }) `
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 0 30px 30px;
`;
exports.SectionBottomText = styled_components_1.default.p.withConfig({ displayName: "SectionBottomText", componentId: "sc-10pkqr0" }) `
	color: #1b1b1b;

	display: flex;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	font-style: italic;
	font-weight: normal;
	letter-spacing: 0.01em;

	line-height: 20px;
	margin: 0;
`;
exports.SectionFeature = styled_components_1.default.section.withConfig({ displayName: "SectionFeature", componentId: "sc-1c2l6p" }) `
	display: flex;
	justify-content: space-between;
	padding: 30px 40px 20px;
	text-align: center;
	width: 100%;
`;
exports.SectionFeatureTitle = styled_components_1.default.div.withConfig({ displayName: "SectionFeatureTitle", componentId: "sc-ahptlg" }) `
	font-weight: 500;
	margin-bottom: 16px;
`;
exports.SectionIcon = styled_components_1.default.section.withConfig({ displayName: "SectionIcon", componentId: "sc-43u5oa" }) `
	background: #fff;
	display: flex;
	justify-content: space-between;
	padding: 9px 30px 3px;
	width: 520px;
`;
exports.SectionIconText = styled_components_1.default.p.withConfig({ displayName: "SectionIconText", componentId: "sc-mpatnx" }) `
	letter-spacing: -0.3px;
	margin: 0;
`;
exports.SectionIconTitle = styled_components_1.default.h2.withConfig({ displayName: "SectionIconTitle", componentId: "sc-gzeejg" }) `
	align-items: center;
	color: #1b1b1b;
	display: flex;
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;
	margin: 20px 0 6px;
	width: 288px;
`;
exports.SectionTop = styled_components_1.default.section.withConfig({ displayName: "SectionTop", componentId: "sc-1aayk3m" }) `
	font-family: Roboto, serif;
	font-size: 16px;
	font-weight: 500;
	padding: 20px 30px;
	width: 100%;
`;
exports.Wrapper = styled_components_1.default(Wrapper_1.WrapperDefault).withConfig({ displayName: "Wrapper", componentId: "sc-xdarou" }) `
	align-items: center;
	background: #f9f9f9;
	display: flex;
	flex-direction: column;
	justify-content: center;
	right: 6px;
	top: 80px;
	width: 520px;
`;
exports.SectionPinnedExtension = styled_components_1.default.section.withConfig({ displayName: "SectionPinnedExtension", componentId: "sc-1oo89cs" }) `
	align-items: center;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;
exports.Hr = styled_components_1.default.hr.withConfig({ displayName: "Hr", componentId: "sc-sm6ut0" }) `
	border: 0.5px solid #d1d1d1;
	width: 460px;
`;
exports.SectionPinnedText = styled_components_1.default.p.withConfig({ displayName: "SectionPinnedText", componentId: "sc-18kbog6" }) `
	color: #1b1b1b;

	display: flex;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	font-style: italic;
	font-weight: normal;

	letter-spacing: 0.01em;
	line-height: 20px;

	margin-top: 20px;
	width: 440px;
`;


/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupSimulator = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.PopupSimulator = styled_components_1.default.div.withConfig({ displayName: "PopupSimulator", componentId: "sc-1qj4abx" }) `
	background: #fff;
	box-shadow: 10px 10px 29px rgba(0, 0, 0, 0.07), 2px 2px 4px rgba(0, 0, 0, 0.15), -2px 0 6px rgba(0, 0, 0, 0.08);
	height: 600px;
	position: fixed;
	right: 6px;
	top: 6px;
	width: 710px;
`;


/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardingApi = void 0;
const background_1 = __webpack_require__(17);
const items = [
    'https://www.aliexpress.com/item/1005001385390597.html',
    'https://www.aliexpress.com/item/1005001470771623.html',
    'https://www.aliexpress.com/item/4001166852869.html',
    'https://www.aliexpress.com/item/1005001369635293.html',
    'https://www.aliexpress.com/item/1000001303060.html',
    'https://www.aliexpress.com/item/1005001631472101.html',
    'https://www.aliexpress.com/item/4001294618105.html',
    'https://www.aliexpress.com/item/1005001414667517.html',
    'https://www.aliexpress.com/item/1005001369503862.html'
];
const getRandomLinkFromItems = () => `${items[Math.floor(Math.random() * items.length)]}#arboarding`;
const getBoardingItem = async () => {
    try {
        const item = await background_1.bgFetchJson('https://api.aliradar.com/v2/items/random');
        if (item === null || item === void 0 ? void 0 : item.id) {
            return `https://www.aliexpress.com/item/${item === null || item === void 0 ? void 0 : item.id}.html#arboarding`;
        }
    }
    catch (e) {
        console.error('getBoardingItem', e);
    }
    return getRandomLinkFromItems();
};
exports.BoardingApi = {
    getBoardingItem
};


/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const bluebird_1 = __webpack_require__(873);
const ramda_1 = __webpack_require__(23);
const tooltip_js_1 = __importDefault(__webpack_require__(876));
const react_1 = __importDefault(__webpack_require__(0));
const utils_1 = __webpack_require__(11);
const constants_1 = __webpack_require__(25);
const stores_1 = __webpack_require__(10);
const aliradar_1 = __webpack_require__(32);
const Tooltip_1 = __webpack_require__(877);
const tooltipMetrics_1 = __webpack_require__(98);
const AppLayout_1 = __webpack_require__(53);
window.context = 'content';
let isShowTooltip = true;
const hideTooltip = () => {
    isShowTooltip = false;
};
let links = {};
const port = chrome.runtime.connect({ name: 'aliradar_tooltip' });
const title = document.createElement('div');
const salt = 'gadsf21g';
const tooltipClass = `tooltip-${salt}`;
const tooltipSelector = `.${tooltipClass}`;
const arrowClass = `tooltip-arrow-${salt}`;
const arrowSelector = `.${arrowClass}`;
const innerClass = `tooltip-inner-${salt}`;
const innerSelector = `.${innerClass}`;
const template = `<div class="${tooltipClass}" role="tooltip">
  <div class="${arrowClass}"></div>
  <div class="${innerClass}"></div>
</div>`;
const hide = async (linkHref) => {
    if (links[linkHref].show && links[linkHref].tooltip) {
        links[linkHref].show = false;
        await bluebird_1.delay(650);
        if (!links[linkHref].show) {
            links[linkHref].show = false;
            links[linkHref].tooltip.hide();
            stores_1.webextStore.dispatch(stores_1.tooltipUIActions.closeSimilar());
        }
    }
};
const hideOther = (linkHref) => {
    for (const [key, value] of Object.entries(links || {})) {
        if (linkHref !== key) {
            value.show = false;
        }
    }
    // Object.entries(links || {}).forEach(([key, value]) => {
    // 	linkHref !== key && value?.tooltip?.hide();
    // });
};
const getMeta = () => {
    var _a, _b, _c;
    try {
        const selectors = {
            cover: [
                { selector: 'meta[property="twitter:image"]', attribute: 'content' },
                { selector: 'meta[property="og:image"]', attribute: 'content' },
                { selector: 'meta[itemprop="image"]', attribute: 'content' },
                { selector: 'meta[itemprop="image"]', attribute: 'content' }
            ],
            title: [
                { selector: 'meta[property="twitter:title"]', attribute: 'content' },
                { selector: 'meta[property="og:title"]', attribute: 'content' },
                { selector: 'meta[itemprop="name"]', attribute: 'content' },
                { selector: 'title', content: 1 },
                { selector: 'h1', content: 1 }
            ]
        };
        const resp = Object.entries(selectors).reduce((a, [name, selectors]) => {
            const current = selectors
                .map((e) => {
                const element = document.querySelector(e.selector);
                return (element &&
                    ((e.attribute && element.getAttribute(e.attribute)) || (e.content && (element.textContent || '').trim())));
            })
                .filter((e) => e)[0];
            return { ...a, [name]: current };
        }, {});
        try {
            const YT_REGEXP = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            if (YT_REGEXP.test(window.location.href)) {
                const id = (_a = window.location.href.match(YT_REGEXP)) === null || _a === void 0 ? void 0 : _a[1];
                resp.cover = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                resp.title = (_c = (_b = document.querySelector('h1')) === null || _b === void 0 ? void 0 : _b.textContent) === null || _c === void 0 ? void 0 : _c.trim();
                resp.url = `https://www.youtube.com/watch?v=${id}`;
            }
        }
        catch (e) { }
        resp.weight = 1 / Math.sqrt(links.length);
        return resp;
    }
    catch (e) {
        console.error(e);
        return {};
    }
};
port.onMessage.addListener(async (message) => {
    var _a, _b, _c, _d, _e, _f;
    if (((_a = message === null || message === void 0 ? void 0 : message.responseLink) === null || _a === void 0 ? void 0 : _a.error) && ((_b = message === null || message === void 0 ? void 0 : message.responseLink) === null || _b === void 0 ? void 0 : _b.error) !== 20) {
        deleteLoader(message.responseLink.link);
        if (((_d = (_c = message.responseLink) === null || _c === void 0 ? void 0 : _c.error) === null || _d === void 0 ? void 0 : _d.code) === 404 || ((_f = (_e = message.responseLink) === null || _e === void 0 ? void 0 : _e.error) === null || _f === void 0 ? void 0 : _f.code) === 900) {
            try {
                links[message.responseLink.link] = ramda_1.mergeRight(links[message.responseLink.link], message.responseLink);
                links[message.responseLink.link].node.style.textDecoration = 'line-through';
            }
            catch (e) {
                console.error(e);
            }
        }
    }
    if (message.responseLink && (message.responseLink.namerus || message.responseLink.nameeng)) {
        const data = message.responseLink;
        if ((await utils_1.isOld()) && data.id) {
            const { tooltip_links } = await aliradar_1.FeaturesLinksConfig.get();
            let inputUrl = tooltip_links.replace(':id', data.id);
            links[message.responseLink.link].node.onclick = (event) => {
                event.preventDefault();
                event.stopPropagation();
                window.open(inputUrl, '_blank');
            };
        }
        links[message.responseLink.link] = ramda_1.mergeRight(links[message.responseLink.link], data);
        // if (links?.[message.responseLink.link]?.node?.style) {
        // links[message.responseLink.link].node.style.boxShadow = '0px 0px 19px 1px rgba(0, 255, 52, 0.61) inset';
        // }
        tooltipMetrics_1.hover();
        updateTitle(message.responseLink.link);
        deleteLoader(message.responseLink.link);
    }
    if (message === null || message === void 0 ? void 0 : message.similars) {
        stores_1.webextStore.dispatch(stores_1.similarSliceActions.updateSimilars(message === null || message === void 0 ? void 0 : message.similars));
    }
    return true;
});
const prepareFromBackground = (link) => {
    port.postMessage({
        link,
        url: window.location.href,
        ...getMeta()
    });
};
const checkShowError = (linkHref) => {
    return (links[linkHref].error &&
        (links[linkHref].error.code === 404 || links[linkHref].error.code === 410 || links[linkHref].error.code === 900));
};
const updateTitle = (linkHref) => {
    var _a, _b, _c;
    if (links[linkHref].error && (links[linkHref].error.code === 900 || links[linkHref].error.code === 404)) {
        links[linkHref].lastLink && links[linkHref].node.setAttribute('title', links[linkHref].lastLink);
        deleteLoader(linkHref);
    }
    else {
        const data = { ...links[linkHref] };
        if (!((_a = links[linkHref]) === null || _a === void 0 ? void 0 : _a.show)) {
            return;
        }
        delete data.node;
        delete data.tooltip;
        stores_1.webextStore.dispatch(stores_1.changeDataAllSites({
            data,
            index: linkHref,
            noOneHover: false,
            init: !!links[linkHref].lastLink
        }));
        try {
            links[linkHref].tooltip.updateTitleContent(title);
        }
        catch (e) {
            console.error(e);
        }
        if (((_b = links === null || links === void 0 ? void 0 : links[linkHref]) === null || _b === void 0 ? void 0 : _b.show) && !checkShowError(linkHref) && (data === null || data === void 0 ? void 0 : data.adminseq)) {
            tooltipMetrics_1.tooltipDisplayed();
            (_c = links[linkHref].tooltip) === null || _c === void 0 ? void 0 : _c.show();
        }
    }
};
const createLoader = (linkHref) => setTimeout(() => {
    links[linkHref].node.style.cursor = 'wait';
}, 30);
const deleteLoader = (linkHref, cursor = 'pointer') => setTimeout(() => {
    try {
        links[linkHref].node.style.cursor = cursor;
    }
    catch (e) { }
}, 45);
const getData = async (linkHref) => {
    if (!isShowTooltip) {
        return;
    }
    if (links[linkHref].id) {
        deleteLoader(linkHref);
        tooltipMetrics_1.hover();
        updateTitle(linkHref);
        return;
    }
    try {
        if (links[linkHref].show) {
            createLoader(linkHref);
            // if (!links[linkHref].lastLink && !links[linkHref].startUpdate) {
            if (!links[linkHref].lastLink && !checkShowError(linkHref) && links[linkHref].show) {
                links[linkHref].startUpdate = true;
                prepareFromBackground(links[linkHref].link);
            }
        }
    }
    catch (e) {
        console.error(e);
    }
};
const getDataShow = async (linkHref) => {
    var _a, _b;
    hideOther(linkHref);
    if (checkShowError(linkHref)) {
        links[linkHref].show = false;
        deleteLoader(linkHref);
        return;
    }
    if (!((_b = (_a = links === null || links === void 0 ? void 0 : links[linkHref]) === null || _a === void 0 ? void 0 : _a.tooltip) === null || _b === void 0 ? void 0 : _b._isOpen) && !links[linkHref].show) {
        links[linkHref].show = true;
        await getData(linkHref);
    }
};
const createTooltip = (link, linkHref) => {
    const container = document.getElementById(salt);
    if (!link.tooltip && container) {
        link.tooltip = new tooltip_js_1.default(link.node, {
            container,
            html: true,
            trigger: 'manual',
            title: '<div></div>',
            placement: 'auto',
            arrowSelector,
            innerSelector,
            template
        });
        link.tooltip._clearTitleContent = () => { };
        link.tooltip.show();
        link.tooltip.hide();
        const { _tooltipNode: $TooltipNode = {} } = link.tooltip;
        link.node.onmouseleave = $TooltipNode.onmouseleave = () => {
            // port.postMessage({ abortReq: true });
            hide(linkHref);
        };
        $TooltipNode.onmouseover = $TooltipNode.onmousemove = () => {
            links[linkHref].show = true;
        };
    }
};
const initTooltip = (link) => {
    createTooltip(link, link.link);
    link.node.onclick = tooltipMetrics_1.clickLink;
    link.node.onmousemove = link.node.onmouseenter = () => getDataShow(link.link);
    return link;
};
const checkInLink = (e) => constants_1.ALI_ALTERNATE_LINKS.reduce((a, parentLink) => a || (e.href && decodeURIComponent(e.href).match(parentLink)) || (e.innerText && e.innerText.match(parentLink)), false);
const getLinks = () => {
    // let autoDownloader = 0;
    document.querySelectorAll('a').forEach((e) => {
        var _a;
        if (e.closest(tooltipSelector)) {
            return;
        }
        try {
            let link = checkInLink(e);
            if (link && link[0]) {
                link = (_a = link[0]) === null || _a === void 0 ? void 0 : _a.replace('http://', 'https://');
                if (typeof link === 'string') {
                    links[link] = initTooltip({ node: e, link });
                }
                // setTimeout(() => {
                // 	prepareFromBackground(link, false);
                // }, autoDownloader);
                // autoDownloader += 12000;
            }
        }
        catch (e) {
            console.error('getLinks', e);
        }
    });
};
const createComponent = async (link) => {
    const div = document.createElement('div');
    div.id = salt;
    document.body.append(div);
    div.appendChild(title);
    await utils_1.render(react_1.default.createElement(AppLayout_1.AppLayout, null,
        react_1.default.createElement(Tooltip_1.Tooltip, { hide: hide, hideTooltip: hideTooltip, tooltipLink: link, selectors: { tooltipSelector, arrowSelector, innerSelector } })), title);
};
let url = null;
const init = async () => {
    var _a;
    if (url === window.location.href) {
        return;
    }
    url = window.location.href;
    const featureLinksConfig = await aliradar_1.FeaturesLinksConfig.get();
    const { tooltip: link = 'https://aliexpress.com/item/:id.html?mark=toolex' } = featureLinksConfig;
    const tooltipConfig = await aliradar_1.TooltipConfig.get();
    try {
        if (stores_1.webextStore.getState().settings.tooltip.value &&
            !((_a = tooltipConfig === null || tooltipConfig === void 0 ? void 0 : tooltipConfig.blacklist) === null || _a === void 0 ? void 0 : _a.some((name) => window.location.hostname.includes(name)))) {
            await bluebird_1.delay(100);
            await createComponent(link);
            getLinks();
        }
    }
    catch (e) {
        console.error(e);
    }
};
exports.init = init;
let observer = null;
let observerStart = window.location.href;
document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
        exports.init().then();
        if (!observer) {
            observer = new MutationObserver(async () => {
                var _a;
                if (observerStart === window.location.href) {
                    return;
                }
                observerStart = window.location.href;
                (_a = document.getElementById('rrmultisearch')) === null || _a === void 0 ? void 0 : _a.remove();
                stores_1.webextStore.dispatch(stores_1.recreate());
                await bluebird_1.delay(5000);
                await exports.init();
            });
            observer === null || observer === void 0 ? void 0 : observer.observe(document.body, {
                attributes: true,
                childList: true,
                subtree: true
            });
        }
    }
});


/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2018 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 3.7.2
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(e){if(true)module.exports=e();else { var f; }}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function (promises) {
    return any(promises);
};

Promise.prototype.any = function () {
    return any(this);
};

};

},{}],2:[function(_dereq_,module,exports){
"use strict";
var firstLineError;
try {throw new Error(); } catch (e) {firstLineError = e;}
var schedule = _dereq_("./schedule");
var Queue = _dereq_("./queue");

function Async() {
    this._customScheduler = false;
    this._isTickUsed = false;
    this._lateQueue = new Queue(16);
    this._normalQueue = new Queue(16);
    this._haveDrainedQueues = false;
    var self = this;
    this.drainQueues = function () {
        self._drainQueues();
    };
    this._schedule = schedule;
}

Async.prototype.setScheduler = function(fn) {
    var prev = this._schedule;
    this._schedule = fn;
    this._customScheduler = true;
    return prev;
};

Async.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
};

Async.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
};


Async.prototype.fatalError = function(e, isNode) {
    if (isNode) {
        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
            "\n");
        process.exit(2);
    } else {
        this.throwLater(e);
    }
};

Async.prototype.throwLater = function(fn, arg) {
    if (arguments.length === 1) {
        arg = fn;
        fn = function () { throw arg; };
    }
    if (typeof setTimeout !== "undefined") {
        setTimeout(function() {
            fn(arg);
        }, 0);
    } else try {
        this._schedule(function() {
            fn(arg);
        });
    } catch (e) {
        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
};

function AsyncInvokeLater(fn, receiver, arg) {
    this._lateQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncInvoke(fn, receiver, arg) {
    this._normalQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncSettlePromises(promise) {
    this._normalQueue._pushOne(promise);
    this._queueTick();
}

Async.prototype.invokeLater = AsyncInvokeLater;
Async.prototype.invoke = AsyncInvoke;
Async.prototype.settlePromises = AsyncSettlePromises;


function _drainQueue(queue) {
    while (queue.length() > 0) {
        _drainQueueStep(queue);
    }
}

function _drainQueueStep(queue) {
    var fn = queue.shift();
    if (typeof fn !== "function") {
        fn._settlePromises();
    } else {
        var receiver = queue.shift();
        var arg = queue.shift();
        fn.call(receiver, arg);
    }
}

Async.prototype._drainQueues = function () {
    _drainQueue(this._normalQueue);
    this._reset();
    this._haveDrainedQueues = true;
    _drainQueue(this._lateQueue);
};

Async.prototype._queueTick = function () {
    if (!this._isTickUsed) {
        this._isTickUsed = true;
        this._schedule(this.drainQueues);
    }
};

Async.prototype._reset = function () {
    this._isTickUsed = false;
};

module.exports = Async;
module.exports.firstLineError = firstLineError;

},{"./queue":26,"./schedule":29}],3:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
var calledBind = false;
var rejectThis = function(_, e) {
    this._reject(e);
};

var targetRejected = function(e, context) {
    context.promiseRejectionQueued = true;
    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
};

var bindingResolved = function(thisArg, context) {
    if (((this._bitField & 50397184) === 0)) {
        this._resolveCallback(context.target);
    }
};

var bindingRejected = function(e, context) {
    if (!context.promiseRejectionQueued) this._reject(e);
};

Promise.prototype.bind = function (thisArg) {
    if (!calledBind) {
        calledBind = true;
        Promise.prototype._propagateFrom = debug.propagateFromFunction();
        Promise.prototype._boundValue = debug.boundValueFunction();
    }
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 1);
    var target = this._target();
    ret._setBoundTo(maybePromise);
    if (maybePromise instanceof Promise) {
        var context = {
            promiseRejectionQueued: false,
            promise: ret,
            target: target,
            bindingPromise: maybePromise
        };
        target._then(INTERNAL, targetRejected, undefined, ret, context);
        maybePromise._then(
            bindingResolved, bindingRejected, undefined, ret, context);
        ret._setOnCancel(maybePromise);
    } else {
        ret._resolveCallback(target);
    }
    return ret;
};

Promise.prototype._setBoundTo = function (obj) {
    if (obj !== undefined) {
        this._bitField = this._bitField | 2097152;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~2097152);
    }
};

Promise.prototype._isBound = function () {
    return (this._bitField & 2097152) === 2097152;
};

Promise.bind = function (thisArg, value) {
    return Promise.resolve(value).bind(thisArg);
};
};

},{}],4:[function(_dereq_,module,exports){
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
var bluebird = _dereq_("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;

},{"./promise":22}],5:[function(_dereq_,module,exports){
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

var getMethodCaller;
var getGetter;
if (false) { var getCompiled, makeGetter, makeMethodCaller; }

function ensureMethod(obj, methodName) {
    var fn;
    if (obj != null) fn = obj[methodName];
    if (typeof fn !== "function") {
        var message = "Object " + util.classString(obj) + " has no method '" +
            util.toString(methodName) + "'";
        throw new Promise.TypeError(message);
    }
    return fn;
}

function caller(obj) {
    var methodName = this.pop();
    var fn = ensureMethod(obj, methodName);
    return fn.apply(obj, this);
}
Promise.prototype.call = function (methodName) {
    var args = [].slice.call(arguments, 1);;
    if (false) { var maybeCaller; }
    args.push(methodName);
    return this._then(caller, undefined, undefined, args, undefined);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    var index = +this;
    if (index < 0) index = Math.max(0, index + obj.length);
    return obj[index];
}
Promise.prototype.get = function (propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, undefined, undefined, propertyName, undefined);
};
};

},{"./util":36}],6:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

Promise.prototype["break"] = Promise.prototype.cancel = function() {
    if (!debug.cancellation()) return this._warn("cancellation is disabled");

    var promise = this;
    var child = promise;
    while (promise._isCancellable()) {
        if (!promise._cancelBy(child)) {
            if (child._isFollowing()) {
                child._followee().cancel();
            } else {
                child._cancelBranched();
            }
            break;
        }

        var parent = promise._cancellationParent;
        if (parent == null || !parent._isCancellable()) {
            if (promise._isFollowing()) {
                promise._followee().cancel();
            } else {
                promise._cancelBranched();
            }
            break;
        } else {
            if (promise._isFollowing()) promise._followee().cancel();
            promise._setWillBeCancelled();
            child = promise;
            promise = parent;
        }
    }
};

Promise.prototype._branchHasCancelled = function() {
    this._branchesRemainingToCancel--;
};

Promise.prototype._enoughBranchesHaveCancelled = function() {
    return this._branchesRemainingToCancel === undefined ||
           this._branchesRemainingToCancel <= 0;
};

Promise.prototype._cancelBy = function(canceller) {
    if (canceller === this) {
        this._branchesRemainingToCancel = 0;
        this._invokeOnCancel();
        return true;
    } else {
        this._branchHasCancelled();
        if (this._enoughBranchesHaveCancelled()) {
            this._invokeOnCancel();
            return true;
        }
    }
    return false;
};

Promise.prototype._cancelBranched = function() {
    if (this._enoughBranchesHaveCancelled()) {
        this._cancel();
    }
};

Promise.prototype._cancel = function() {
    if (!this._isCancellable()) return;
    this._setCancelled();
    async.invoke(this._cancelPromises, this, undefined);
};

Promise.prototype._cancelPromises = function() {
    if (this._length() > 0) this._settlePromises();
};

Promise.prototype._unsetOnCancel = function() {
    this._onCancelField = undefined;
};

Promise.prototype._isCancellable = function() {
    return this.isPending() && !this._isCancelled();
};

Promise.prototype.isCancellable = function() {
    return this.isPending() && !this.isCancelled();
};

Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
    if (util.isArray(onCancelCallback)) {
        for (var i = 0; i < onCancelCallback.length; ++i) {
            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
        }
    } else if (onCancelCallback !== undefined) {
        if (typeof onCancelCallback === "function") {
            if (!internalOnly) {
                var e = tryCatch(onCancelCallback).call(this._boundValue());
                if (e === errorObj) {
                    this._attachExtraTrace(e.e);
                    async.throwLater(e.e);
                }
            }
        } else {
            onCancelCallback._resultCancelled(this);
        }
    }
};

Promise.prototype._invokeOnCancel = function() {
    var onCancelCallback = this._onCancel();
    this._unsetOnCancel();
    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
};

Promise.prototype._invokeInternalOnCancel = function() {
    if (this._isCancellable()) {
        this._doInvokeOnCancel(this._onCancel(), true);
        this._unsetOnCancel();
    }
};

Promise.prototype._resultCancelled = function() {
    this.cancel();
};

};

},{"./util":36}],7:[function(_dereq_,module,exports){
"use strict";
module.exports = function(NEXT_FILTER) {
var util = _dereq_("./util");
var getKeys = _dereq_("./es5").keys;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function catchFilter(instances, cb, promise) {
    return function(e) {
        var boundTo = promise._boundValue();
        predicateLoop: for (var i = 0; i < instances.length; ++i) {
            var item = instances[i];

            if (item === Error ||
                (item != null && item.prototype instanceof Error)) {
                if (e instanceof item) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (typeof item === "function") {
                var matchesPredicate = tryCatch(item).call(boundTo, e);
                if (matchesPredicate === errorObj) {
                    return matchesPredicate;
                } else if (matchesPredicate) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (util.isObject(e)) {
                var keys = getKeys(item);
                for (var j = 0; j < keys.length; ++j) {
                    var key = keys[j];
                    if (item[key] != e[key]) {
                        continue predicateLoop;
                    }
                }
                return tryCatch(cb).call(boundTo, e);
            }
        }
        return NEXT_FILTER;
    };
}

return catchFilter;
};

},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var longStackTraces = false;
var contextStack = [];

Promise.prototype._promiseCreated = function() {};
Promise.prototype._pushContext = function() {};
Promise.prototype._popContext = function() {return null;};
Promise._peekContext = Promise.prototype._peekContext = function() {};

function Context() {
    this._trace = new Context.CapturedTrace(peekContext());
}
Context.prototype._pushContext = function () {
    if (this._trace !== undefined) {
        this._trace._promiseCreated = null;
        contextStack.push(this._trace);
    }
};

Context.prototype._popContext = function () {
    if (this._trace !== undefined) {
        var trace = contextStack.pop();
        var ret = trace._promiseCreated;
        trace._promiseCreated = null;
        return ret;
    }
    return null;
};

function createContext() {
    if (longStackTraces) return new Context();
}

function peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return undefined;
}
Context.CapturedTrace = null;
Context.create = createContext;
Context.deactivateLongStackTraces = function() {};
Context.activateLongStackTraces = function() {
    var Promise_pushContext = Promise.prototype._pushContext;
    var Promise_popContext = Promise.prototype._popContext;
    var Promise_PeekContext = Promise._peekContext;
    var Promise_peekContext = Promise.prototype._peekContext;
    var Promise_promiseCreated = Promise.prototype._promiseCreated;
    Context.deactivateLongStackTraces = function() {
        Promise.prototype._pushContext = Promise_pushContext;
        Promise.prototype._popContext = Promise_popContext;
        Promise._peekContext = Promise_PeekContext;
        Promise.prototype._peekContext = Promise_peekContext;
        Promise.prototype._promiseCreated = Promise_promiseCreated;
        longStackTraces = false;
    };
    longStackTraces = true;
    Promise.prototype._pushContext = Context.prototype._pushContext;
    Promise.prototype._popContext = Context.prototype._popContext;
    Promise._peekContext = Promise.prototype._peekContext = peekContext;
    Promise.prototype._promiseCreated = function() {
        var ctx = this._peekContext();
        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
    };
};
return Context;
};

},{}],9:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, Context,
    enableAsyncHooks, disableAsyncHooks) {
var async = Promise._async;
var Warning = _dereq_("./errors").Warning;
var util = _dereq_("./util");
var es5 = _dereq_("./es5");
var canAttachTrace = util.canAttachTrace;
var unhandledRejectionHandled;
var possiblyUnhandledRejection;
var bluebirdFramePattern =
    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
var stackFramePattern = null;
var formatStack = null;
var indentStackFrames = false;
var printWarning;
var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
                        ( true ||
                         false));

var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
    (debugging || util.env("BLUEBIRD_WARNINGS")));

var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

var deferUnhandledRejectionCheck;
(function() {
    var promises = [];

    function unhandledRejectionCheck() {
        for (var i = 0; i < promises.length; ++i) {
            promises[i]._notifyUnhandledRejection();
        }
        unhandledRejectionClear();
    }

    function unhandledRejectionClear() {
        promises.length = 0;
    }

    deferUnhandledRejectionCheck = function(promise) {
        promises.push(promise);
        setTimeout(unhandledRejectionCheck, 1);
    };

    es5.defineProperty(Promise, "_unhandledRejectionCheck", {
        value: unhandledRejectionCheck
    });
    es5.defineProperty(Promise, "_unhandledRejectionClear", {
        value: unhandledRejectionClear
    });
})();

Promise.prototype.suppressUnhandledRejections = function() {
    var target = this._target();
    target._bitField = ((target._bitField & (~1048576)) |
                      524288);
};

Promise.prototype._ensurePossibleRejectionHandled = function () {
    if ((this._bitField & 524288) !== 0) return;
    this._setRejectionIsUnhandled();
    deferUnhandledRejectionCheck(this);
};

Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
    fireRejectionEvent("rejectionHandled",
                                  unhandledRejectionHandled, undefined, this);
};

Promise.prototype._setReturnedNonUndefined = function() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._returnedNonUndefined = function() {
    return (this._bitField & 268435456) !== 0;
};

Promise.prototype._notifyUnhandledRejection = function () {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue();
        this._setUnhandledRejectionIsNotified();
        fireRejectionEvent("unhandledRejection",
                                      possiblyUnhandledRejection, reason, this);
    }
};

Promise.prototype._setUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField | 262144;
};

Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField & (~262144);
};

Promise.prototype._isUnhandledRejectionNotified = function () {
    return (this._bitField & 262144) > 0;
};

Promise.prototype._setRejectionIsUnhandled = function () {
    this._bitField = this._bitField | 1048576;
};

Promise.prototype._unsetRejectionIsUnhandled = function () {
    this._bitField = this._bitField & (~1048576);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled = function () {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
    return warn(message, shouldUseOwnTrace, promise || this);
};

Promise.onPossiblyUnhandledRejection = function (fn) {
    var context = Promise._getContext();
    possiblyUnhandledRejection = util.contextBind(context, fn);
};

Promise.onUnhandledRejectionHandled = function (fn) {
    var context = Promise._getContext();
    unhandledRejectionHandled = util.contextBind(context, fn);
};

var disableLongStackTraces = function() {};
Promise.longStackTraces = function () {
    if (async.haveItemsQueued() && !config.longStackTraces) {
        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (!config.longStackTraces && longStackTracesIsSupported()) {
        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
        var Promise_dereferenceTrace = Promise.prototype._dereferenceTrace;
        config.longStackTraces = true;
        disableLongStackTraces = function() {
            if (async.haveItemsQueued() && !config.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
            }
            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
            Promise.prototype._dereferenceTrace = Promise_dereferenceTrace;
            Context.deactivateLongStackTraces();
            config.longStackTraces = false;
        };
        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
        Promise.prototype._dereferenceTrace = longStackTracesDereferenceTrace;
        Context.activateLongStackTraces();
    }
};

Promise.hasLongStackTraces = function () {
    return config.longStackTraces && longStackTracesIsSupported();
};


var legacyHandlers = {
    unhandledrejection: {
        before: function() {
            var ret = util.global.onunhandledrejection;
            util.global.onunhandledrejection = null;
            return ret;
        },
        after: function(fn) {
            util.global.onunhandledrejection = fn;
        }
    },
    rejectionhandled: {
        before: function() {
            var ret = util.global.onrejectionhandled;
            util.global.onrejectionhandled = null;
            return ret;
        },
        after: function(fn) {
            util.global.onrejectionhandled = fn;
        }
    }
};

var fireDomEvent = (function() {
    var dispatch = function(legacy, e) {
        if (legacy) {
            var fn;
            try {
                fn = legacy.before();
                return !util.global.dispatchEvent(e);
            } finally {
                legacy.after(fn);
            }
        } else {
            return !util.global.dispatchEvent(e);
        }
    };
    try {
        if (typeof CustomEvent === "function") {
            var event = new CustomEvent("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                name = name.toLowerCase();
                var eventData = {
                    detail: event,
                    cancelable: true
                };
                var domEvent = new CustomEvent(name, eventData);
                es5.defineProperty(
                    domEvent, "promise", {value: event.promise});
                es5.defineProperty(
                    domEvent, "reason", {value: event.reason});

                return dispatch(legacyHandlers[name], domEvent);
            };
        } else if (typeof Event === "function") {
            var event = new Event("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                name = name.toLowerCase();
                var domEvent = new Event(name, {
                    cancelable: true
                });
                domEvent.detail = event;
                es5.defineProperty(domEvent, "promise", {value: event.promise});
                es5.defineProperty(domEvent, "reason", {value: event.reason});
                return dispatch(legacyHandlers[name], domEvent);
            };
        } else {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("testingtheevent", false, true, {});
            util.global.dispatchEvent(event);
            return function(name, event) {
                name = name.toLowerCase();
                var domEvent = document.createEvent("CustomEvent");
                domEvent.initCustomEvent(name, false, true,
                    event);
                return dispatch(legacyHandlers[name], domEvent);
            };
        }
    } catch (e) {}
    return function() {
        return false;
    };
})();

var fireGlobalEvent = (function() {
    if (util.isNode) {
        return function() {
            return process.emit.apply(process, arguments);
        };
    } else {
        if (!util.global) {
            return function() {
                return false;
            };
        }
        return function(name) {
            var methodName = "on" + name.toLowerCase();
            var method = util.global[methodName];
            if (!method) return false;
            method.apply(util.global, [].slice.call(arguments, 1));
            return true;
        };
    }
})();

function generatePromiseLifecycleEventObject(name, promise) {
    return {promise: promise};
}

var eventToObjectGenerator = {
    promiseCreated: generatePromiseLifecycleEventObject,
    promiseFulfilled: generatePromiseLifecycleEventObject,
    promiseRejected: generatePromiseLifecycleEventObject,
    promiseResolved: generatePromiseLifecycleEventObject,
    promiseCancelled: generatePromiseLifecycleEventObject,
    promiseChained: function(name, promise, child) {
        return {promise: promise, child: child};
    },
    warning: function(name, warning) {
        return {warning: warning};
    },
    unhandledRejection: function (name, reason, promise) {
        return {reason: reason, promise: promise};
    },
    rejectionHandled: generatePromiseLifecycleEventObject
};

var activeFireEvent = function (name) {
    var globalEventFired = false;
    try {
        globalEventFired = fireGlobalEvent.apply(null, arguments);
    } catch (e) {
        async.throwLater(e);
        globalEventFired = true;
    }

    var domEventFired = false;
    try {
        domEventFired = fireDomEvent(name,
                    eventToObjectGenerator[name].apply(null, arguments));
    } catch (e) {
        async.throwLater(e);
        domEventFired = true;
    }

    return domEventFired || globalEventFired;
};

Promise.config = function(opts) {
    opts = Object(opts);
    if ("longStackTraces" in opts) {
        if (opts.longStackTraces) {
            Promise.longStackTraces();
        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
            disableLongStackTraces();
        }
    }
    if ("warnings" in opts) {
        var warningsOption = opts.warnings;
        config.warnings = !!warningsOption;
        wForgottenReturn = config.warnings;

        if (util.isObject(warningsOption)) {
            if ("wForgottenReturn" in warningsOption) {
                wForgottenReturn = !!warningsOption.wForgottenReturn;
            }
        }
    }
    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
        if (async.haveItemsQueued()) {
            throw new Error(
                "cannot enable cancellation after promises are in use");
        }
        Promise.prototype._clearCancellationData =
            cancellationClearCancellationData;
        Promise.prototype._propagateFrom = cancellationPropagateFrom;
        Promise.prototype._onCancel = cancellationOnCancel;
        Promise.prototype._setOnCancel = cancellationSetOnCancel;
        Promise.prototype._attachCancellationCallback =
            cancellationAttachCancellationCallback;
        Promise.prototype._execute = cancellationExecute;
        propagateFromFunction = cancellationPropagateFrom;
        config.cancellation = true;
    }
    if ("monitoring" in opts) {
        if (opts.monitoring && !config.monitoring) {
            config.monitoring = true;
            Promise.prototype._fireEvent = activeFireEvent;
        } else if (!opts.monitoring && config.monitoring) {
            config.monitoring = false;
            Promise.prototype._fireEvent = defaultFireEvent;
        }
    }
    if ("asyncHooks" in opts && util.nodeSupportsAsyncResource) {
        var prev = config.asyncHooks;
        var cur = !!opts.asyncHooks;
        if (prev !== cur) {
            config.asyncHooks = cur;
            if (cur) {
                enableAsyncHooks();
            } else {
                disableAsyncHooks();
            }
        }
    }
    return Promise;
};

function defaultFireEvent() { return false; }

Promise.prototype._fireEvent = defaultFireEvent;
Promise.prototype._execute = function(executor, resolve, reject) {
    try {
        executor(resolve, reject);
    } catch (e) {
        return e;
    }
};
Promise.prototype._onCancel = function () {};
Promise.prototype._setOnCancel = function (handler) { ; };
Promise.prototype._attachCancellationCallback = function(onCancel) {
    ;
};
Promise.prototype._captureStackTrace = function () {};
Promise.prototype._attachExtraTrace = function () {};
Promise.prototype._dereferenceTrace = function () {};
Promise.prototype._clearCancellationData = function() {};
Promise.prototype._propagateFrom = function (parent, flags) {
    ;
    ;
};

function cancellationExecute(executor, resolve, reject) {
    var promise = this;
    try {
        executor(resolve, reject, function(onCancel) {
            if (typeof onCancel !== "function") {
                throw new TypeError("onCancel must be a function, got: " +
                                    util.toString(onCancel));
            }
            promise._attachCancellationCallback(onCancel);
        });
    } catch (e) {
        return e;
    }
}

function cancellationAttachCancellationCallback(onCancel) {
    if (!this._isCancellable()) return this;

    var previousOnCancel = this._onCancel();
    if (previousOnCancel !== undefined) {
        if (util.isArray(previousOnCancel)) {
            previousOnCancel.push(onCancel);
        } else {
            this._setOnCancel([previousOnCancel, onCancel]);
        }
    } else {
        this._setOnCancel(onCancel);
    }
}

function cancellationOnCancel() {
    return this._onCancelField;
}

function cancellationSetOnCancel(onCancel) {
    this._onCancelField = onCancel;
}

function cancellationClearCancellationData() {
    this._cancellationParent = undefined;
    this._onCancelField = undefined;
}

function cancellationPropagateFrom(parent, flags) {
    if ((flags & 1) !== 0) {
        this._cancellationParent = parent;
        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
        if (branchesRemainingToCancel === undefined) {
            branchesRemainingToCancel = 0;
        }
        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
    }
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}

function bindingPropagateFrom(parent, flags) {
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}
var propagateFromFunction = bindingPropagateFrom;

function boundValueFunction() {
    var ret = this._boundTo;
    if (ret !== undefined) {
        if (ret instanceof Promise) {
            if (ret.isFulfilled()) {
                return ret.value();
            } else {
                return undefined;
            }
        }
    }
    return ret;
}

function longStackTracesCaptureStackTrace() {
    this._trace = new CapturedTrace(this._peekContext());
}

function longStackTracesAttachExtraTrace(error, ignoreSelf) {
    if (canAttachTrace(error)) {
        var trace = this._trace;
        if (trace !== undefined) {
            if (ignoreSelf) trace = trace._parent;
        }
        if (trace !== undefined) {
            trace.attachExtraTrace(error);
        } else if (!error.__stackCleaned__) {
            var parsed = parseStackAndMessage(error);
            util.notEnumerableProp(error, "stack",
                parsed.message + "\n" + parsed.stack.join("\n"));
            util.notEnumerableProp(error, "__stackCleaned__", true);
        }
    }
}

function longStackTracesDereferenceTrace() {
    this._trace = undefined;
}

function checkForgottenReturns(returnValue, promiseCreated, name, promise,
                               parent) {
    if (returnValue === undefined && promiseCreated !== null &&
        wForgottenReturn) {
        if (parent !== undefined && parent._returnedNonUndefined()) return;
        if ((promise._bitField & 65535) === 0) return;

        if (name) name = name + " ";
        var handlerLine = "";
        var creatorLine = "";
        if (promiseCreated._trace) {
            var traceLines = promiseCreated._trace.stack.split("\n");
            var stack = cleanStack(traceLines);
            for (var i = stack.length - 1; i >= 0; --i) {
                var line = stack[i];
                if (!nodeFramePattern.test(line)) {
                    var lineMatches = line.match(parseLinePattern);
                    if (lineMatches) {
                        handlerLine  = "at " + lineMatches[1] +
                            ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                    }
                    break;
                }
            }

            if (stack.length > 0) {
                var firstUserLine = stack[0];
                for (var i = 0; i < traceLines.length; ++i) {

                    if (traceLines[i] === firstUserLine) {
                        if (i > 0) {
                            creatorLine = "\n" + traceLines[i - 1];
                        }
                        break;
                    }
                }

            }
        }
        var msg = "a promise was created in a " + name +
            "handler " + handlerLine + "but was not returned from it, " +
            "see http://goo.gl/rRqMUw" +
            creatorLine;
        promise._warn(msg, true, promiseCreated);
    }
}

function deprecated(name, replacement) {
    var message = name +
        " is deprecated and will be removed in a future version.";
    if (replacement) message += " Use " + replacement + " instead.";
    return warn(message);
}

function warn(message, shouldUseOwnTrace, promise) {
    if (!config.warnings) return;
    var warning = new Warning(message);
    var ctx;
    if (shouldUseOwnTrace) {
        promise._attachExtraTrace(warning);
    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
        ctx.attachExtraTrace(warning);
    } else {
        var parsed = parseStackAndMessage(warning);
        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
    }

    if (!activeFireEvent("warning", warning)) {
        formatAndLogError(warning, "", true);
    }
}

function reconstructStack(message, stacks) {
    for (var i = 0; i < stacks.length - 1; ++i) {
        stacks[i].push("From previous event:");
        stacks[i] = stacks[i].join("\n");
    }
    if (i < stacks.length) {
        stacks[i] = stacks[i].join("\n");
    }
    return message + "\n" + stacks.join("\n");
}

function removeDuplicateOrEmptyJumps(stacks) {
    for (var i = 0; i < stacks.length; ++i) {
        if (stacks[i].length === 0 ||
            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
            stacks.splice(i, 1);
            i--;
        }
    }
}

function removeCommonRoots(stacks) {
    var current = stacks[0];
    for (var i = 1; i < stacks.length; ++i) {
        var prev = stacks[i];
        var currentLastIndex = current.length - 1;
        var currentLastLine = current[currentLastIndex];
        var commonRootMeetPoint = -1;

        for (var j = prev.length - 1; j >= 0; --j) {
            if (prev[j] === currentLastLine) {
                commonRootMeetPoint = j;
                break;
            }
        }

        for (var j = commonRootMeetPoint; j >= 0; --j) {
            var line = prev[j];
            if (current[currentLastIndex] === line) {
                current.pop();
                currentLastIndex--;
            } else {
                break;
            }
        }
        current = prev;
    }
}

function cleanStack(stack) {
    var ret = [];
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        var isTraceLine = "    (No stack trace)" === line ||
            stackFramePattern.test(line);
        var isInternalFrame = isTraceLine && shouldIgnore(line);
        if (isTraceLine && !isInternalFrame) {
            if (indentStackFrames && line.charAt(0) !== " ") {
                line = "    " + line;
            }
            ret.push(line);
        }
    }
    return ret;
}

function stackFramesAsArray(error) {
    var stack = error.stack.replace(/\s+$/g, "").split("\n");
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
            break;
        }
    }
    if (i > 0 && error.name != "SyntaxError") {
        stack = stack.slice(i);
    }
    return stack;
}

function parseStackAndMessage(error) {
    var stack = error.stack;
    var message = error.toString();
    stack = typeof stack === "string" && stack.length > 0
                ? stackFramesAsArray(error) : ["    (No stack trace)"];
    return {
        message: message,
        stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
    };
}

function formatAndLogError(error, title, isSoft) {
    if (typeof console !== "undefined") {
        var message;
        if (util.isObject(error)) {
            var stack = error.stack;
            message = title + formatStack(stack, error);
        } else {
            message = title + String(error);
        }
        if (typeof printWarning === "function") {
            printWarning(message, isSoft);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
}

function fireRejectionEvent(name, localHandler, reason, promise) {
    var localEventFired = false;
    try {
        if (typeof localHandler === "function") {
            localEventFired = true;
            if (name === "rejectionHandled") {
                localHandler(promise);
            } else {
                localHandler(reason, promise);
            }
        }
    } catch (e) {
        async.throwLater(e);
    }

    if (name === "unhandledRejection") {
        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
            formatAndLogError(reason, "Unhandled rejection ");
        }
    } else {
        activeFireEvent(name, promise);
    }
}

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj && typeof obj.toString === "function"
            ? obj.toString() : util.toString(obj);
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function longStackTracesIsSupported() {
    return typeof captureStackTrace === "function";
}

var shouldIgnore = function() { return false; };
var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function parseLineInfo(line) {
    var matches = line.match(parseLineInfoRegex);
    if (matches) {
        return {
            fileName: matches[1],
            line: parseInt(matches[2], 10)
        };
    }
}

function setBounds(firstLineError, lastLineError) {
    if (!longStackTracesIsSupported()) return;
    var firstStackLines = (firstLineError.stack || "").split("\n");
    var lastStackLines = (lastLineError.stack || "").split("\n");
    var firstIndex = -1;
    var lastIndex = -1;
    var firstFileName;
    var lastFileName;
    for (var i = 0; i < firstStackLines.length; ++i) {
        var result = parseLineInfo(firstStackLines[i]);
        if (result) {
            firstFileName = result.fileName;
            firstIndex = result.line;
            break;
        }
    }
    for (var i = 0; i < lastStackLines.length; ++i) {
        var result = parseLineInfo(lastStackLines[i]);
        if (result) {
            lastFileName = result.fileName;
            lastIndex = result.line;
            break;
        }
    }
    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
        firstFileName !== lastFileName || firstIndex >= lastIndex) {
        return;
    }

    shouldIgnore = function(line) {
        if (bluebirdFramePattern.test(line)) return true;
        var info = parseLineInfo(line);
        if (info) {
            if (info.fileName === firstFileName &&
                (firstIndex <= info.line && info.line <= lastIndex)) {
                return true;
            }
        }
        return false;
    };
}

function CapturedTrace(parent) {
    this._parent = parent;
    this._promisesCreated = 0;
    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
    captureStackTrace(this, CapturedTrace);
    if (length > 32) this.uncycle();
}
util.inherits(CapturedTrace, Error);
Context.CapturedTrace = CapturedTrace;

CapturedTrace.prototype.uncycle = function() {
    var length = this._length;
    if (length < 2) return;
    var nodes = [];
    var stackToIndex = {};

    for (var i = 0, node = this; node !== undefined; ++i) {
        nodes.push(node);
        node = node._parent;
    }
    length = this._length = i;
    for (var i = length - 1; i >= 0; --i) {
        var stack = nodes[i].stack;
        if (stackToIndex[stack] === undefined) {
            stackToIndex[stack] = i;
        }
    }
    for (var i = 0; i < length; ++i) {
        var currentStack = nodes[i].stack;
        var index = stackToIndex[currentStack];
        if (index !== undefined && index !== i) {
            if (index > 0) {
                nodes[index - 1]._parent = undefined;
                nodes[index - 1]._length = 1;
            }
            nodes[i]._parent = undefined;
            nodes[i]._length = 1;
            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

            if (index < length - 1) {
                cycleEdgeNode._parent = nodes[index + 1];
                cycleEdgeNode._parent.uncycle();
                cycleEdgeNode._length =
                    cycleEdgeNode._parent._length + 1;
            } else {
                cycleEdgeNode._parent = undefined;
                cycleEdgeNode._length = 1;
            }
            var currentChildLength = cycleEdgeNode._length + 1;
            for (var j = i - 2; j >= 0; --j) {
                nodes[j]._length = currentChildLength;
                currentChildLength++;
            }
            return;
        }
    }
};

CapturedTrace.prototype.attachExtraTrace = function(error) {
    if (error.__stackCleaned__) return;
    this.uncycle();
    var parsed = parseStackAndMessage(error);
    var message = parsed.message;
    var stacks = [parsed.stack];

    var trace = this;
    while (trace !== undefined) {
        stacks.push(cleanStack(trace.stack.split("\n")));
        trace = trace._parent;
    }
    removeCommonRoots(stacks);
    removeDuplicateOrEmptyJumps(stacks);
    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
    util.notEnumerableProp(error, "__stackCleaned__", true);
};

var captureStackTrace = (function stackDetection() {
    var v8stackFramePattern = /^\s*at\s*/;
    var v8stackFormatter = function(stack, error) {
        if (typeof stack === "string") return stack;

        if (error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        Error.stackTraceLimit += 6;
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        var captureStackTrace = Error.captureStackTrace;

        shouldIgnore = function(line) {
            return bluebirdFramePattern.test(line);
        };
        return function(receiver, ignoreUntil) {
            Error.stackTraceLimit += 6;
            captureStackTrace(receiver, ignoreUntil);
            Error.stackTraceLimit -= 6;
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
        stackFramePattern = /@/;
        formatStack = v8stackFormatter;
        indentStackFrames = true;
        return function captureStackTrace(o) {
            o.stack = new Error().stack;
        };
    }

    var hasStackAfterThrow;
    try { throw new Error(); }
    catch(e) {
        hasStackAfterThrow = ("stack" in e);
    }
    if (!("stack" in err) && hasStackAfterThrow &&
        typeof Error.stackTraceLimit === "number") {
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        return function captureStackTrace(o) {
            Error.stackTraceLimit += 6;
            try { throw new Error(); }
            catch(e) { o.stack = e.stack; }
            Error.stackTraceLimit -= 6;
        };
    }

    formatStack = function(stack, error) {
        if (typeof stack === "string") return stack;

        if ((typeof error === "object" ||
            typeof error === "function") &&
            error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    return null;

})([]);

if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
    printWarning = function (message) {
        console.warn(message);
    };
    if (util.isNode && process.stderr.isTTY) {
        printWarning = function(message, isSoft) {
            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
            console.warn(color + message + "\u001b[0m\n");
        };
    } else if (!util.isNode && typeof (new Error().stack) === "string") {
        printWarning = function(message, isSoft) {
            console.warn("%c" + message,
                        isSoft ? "color: darkorange" : "color: red");
        };
    }
}

var config = {
    warnings: warnings,
    longStackTraces: false,
    cancellation: false,
    monitoring: false,
    asyncHooks: false
};

if (longStackTraces) Promise.longStackTraces();

return {
    asyncHooks: function() {
        return config.asyncHooks;
    },
    longStackTraces: function() {
        return config.longStackTraces;
    },
    warnings: function() {
        return config.warnings;
    },
    cancellation: function() {
        return config.cancellation;
    },
    monitoring: function() {
        return config.monitoring;
    },
    propagateFromFunction: function() {
        return propagateFromFunction;
    },
    boundValueFunction: function() {
        return boundValueFunction;
    },
    checkForgottenReturns: checkForgottenReturns,
    setBounds: setBounds,
    warn: warn,
    deprecated: deprecated,
    CapturedTrace: CapturedTrace,
    fireDomEvent: fireDomEvent,
    fireGlobalEvent: fireGlobalEvent
};
};

},{"./errors":12,"./es5":13,"./util":36}],10:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function returner() {
    return this.value;
}
function thrower() {
    throw this.reason;
}

Promise.prototype["return"] =
Promise.prototype.thenReturn = function (value) {
    if (value instanceof Promise) value.suppressUnhandledRejections();
    return this._then(
        returner, undefined, undefined, {value: value}, undefined);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow = function (reason) {
    return this._then(
        thrower, undefined, undefined, {reason: reason}, undefined);
};

Promise.prototype.catchThrow = function (reason) {
    if (arguments.length <= 1) {
        return this._then(
            undefined, thrower, undefined, {reason: reason}, undefined);
    } else {
        var _reason = arguments[1];
        var handler = function() {throw _reason;};
        return this.caught(reason, handler);
    }
};

Promise.prototype.catchReturn = function (value) {
    if (arguments.length <= 1) {
        if (value instanceof Promise) value.suppressUnhandledRejections();
        return this._then(
            undefined, returner, undefined, {value: value}, undefined);
    } else {
        var _value = arguments[1];
        if (_value instanceof Promise) _value.suppressUnhandledRejections();
        var handler = function() {return _value;};
        return this.caught(value, handler);
    }
};
};

},{}],11:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;
var PromiseAll = Promise.all;

function promiseAllThis() {
    return PromiseAll(this);
}

function PromiseMapSeries(promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
}

Promise.prototype.each = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, this, undefined);
};

Promise.prototype.mapSeries = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
};

Promise.each = function (promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, promises, undefined);
};

Promise.mapSeries = PromiseMapSeries;
};


},{}],12:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var Objectfreeze = es5.freeze;
var util = _dereq_("./util");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        notEnumerableProp(this, "message",
            typeof message === "string" ? message : defaultMessage);
        notEnumerableProp(this, "name", nameProperty);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            Error.call(this);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var Warning = subError("Warning", "warning");
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

es5.defineProperty(AggregateError.prototype, "length", {
    value: 0,
    configurable: false,
    writable: true,
    enumerable: true
});
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    if (!(this instanceof OperationalError))
        return new OperationalError(message);
    notEnumerableProp(this, "name", "OperationalError");
    notEnumerableProp(this, "message", message);
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        notEnumerableProp(this, "message", message.message);
        notEnumerableProp(this, "stack", message.stack);
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var errorTypes = Error["__BluebirdErrorTypes__"];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: errorTypes,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    Warning: Warning
};

},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
var isES5 = (function(){
    "use strict";
    return this === undefined;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5,
        propertyIsWritable: function(obj, prop) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            return !!(!descriptor || descriptor.writable || descriptor.set);
        }
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function (o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    };

    var ObjectGetDescriptor = function(o, key) {
        return {value: o[key]};
    };

    var ObjectDefineProperty = function (o, key, desc) {
        o[key] = desc.value;
        return o;
    };

    var ObjectFreeze = function (obj) {
        return obj;
    };

    var ObjectGetPrototypeOf = function (obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    };

    var ArrayIsArray = function (obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    };

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        names: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        getDescriptor: ObjectGetDescriptor,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5,
        propertyIsWritable: function() {
            return true;
        }
    };
}

},{}],14:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function (fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function (promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],15:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, tryConvertToPromise, NEXT_FILTER) {
var util = _dereq_("./util");
var CancellationError = Promise.CancellationError;
var errorObj = util.errorObj;
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);

function PassThroughHandlerContext(promise, type, handler) {
    this.promise = promise;
    this.type = type;
    this.handler = handler;
    this.called = false;
    this.cancelPromise = null;
}

PassThroughHandlerContext.prototype.isFinallyHandler = function() {
    return this.type === 0;
};

function FinallyHandlerCancelReaction(finallyHandler) {
    this.finallyHandler = finallyHandler;
}

FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
    checkCancel(this.finallyHandler);
};

function checkCancel(ctx, reason) {
    if (ctx.cancelPromise != null) {
        if (arguments.length > 1) {
            ctx.cancelPromise._reject(reason);
        } else {
            ctx.cancelPromise._cancel();
        }
        ctx.cancelPromise = null;
        return true;
    }
    return false;
}

function succeed() {
    return finallyHandler.call(this, this.promise._target()._settledValue());
}
function fail(reason) {
    if (checkCancel(this, reason)) return;
    errorObj.e = reason;
    return errorObj;
}
function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    if (!this.called) {
        this.called = true;
        var ret = this.isFinallyHandler()
            ? handler.call(promise._boundValue())
            : handler.call(promise._boundValue(), reasonOrValue);
        if (ret === NEXT_FILTER) {
            return ret;
        } else if (ret !== undefined) {
            promise._setReturnedNonUndefined();
            var maybePromise = tryConvertToPromise(ret, promise);
            if (maybePromise instanceof Promise) {
                if (this.cancelPromise != null) {
                    if (maybePromise._isCancelled()) {
                        var reason =
                            new CancellationError("late cancellation observer");
                        promise._attachExtraTrace(reason);
                        errorObj.e = reason;
                        return errorObj;
                    } else if (maybePromise.isPending()) {
                        maybePromise._attachCancellationCallback(
                            new FinallyHandlerCancelReaction(this));
                    }
                }
                return maybePromise._then(
                    succeed, fail, undefined, this, undefined);
            }
        }
    }

    if (promise.isRejected()) {
        checkCancel(this);
        errorObj.e = reasonOrValue;
        return errorObj;
    } else {
        checkCancel(this);
        return reasonOrValue;
    }
}

Promise.prototype._passThrough = function(handler, type, success, fail) {
    if (typeof handler !== "function") return this.then();
    return this._then(success,
                      fail,
                      undefined,
                      new PassThroughHandlerContext(this, type, handler),
                      undefined);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function (handler) {
    return this._passThrough(handler,
                             0,
                             finallyHandler,
                             finallyHandler);
};


Promise.prototype.tap = function (handler) {
    return this._passThrough(handler, 1, finallyHandler);
};

Promise.prototype.tapCatch = function (handlerOrPredicate) {
    var len = arguments.length;
    if(len === 1) {
        return this._passThrough(handlerOrPredicate,
                                 1,
                                 undefined,
                                 finallyHandler);
    } else {
         var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return Promise.reject(new TypeError(
                    "tapCatch statement predicate: "
                    + "expecting an object but got " + util.classString(item)
                ));
            }
        }
        catchInstances.length = j;
        var handler = arguments[i];
        return this._passThrough(catchFilter(catchInstances, handler, this),
                                 1,
                                 undefined,
                                 finallyHandler);
    }

};

return PassThroughHandlerContext;
};

},{"./catch_filter":7,"./util":36}],16:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          apiRejection,
                          INTERNAL,
                          tryConvertToPromise,
                          Proxyable,
                          debug) {
var errors = _dereq_("./errors");
var TypeError = errors.TypeError;
var util = _dereq_("./util");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
    for (var i = 0; i < yieldHandlers.length; ++i) {
        traceParent._pushContext();
        var result = tryCatch(yieldHandlers[i])(value);
        traceParent._popContext();
        if (result === errorObj) {
            traceParent._pushContext();
            var ret = Promise.reject(errorObj.e);
            traceParent._popContext();
            return ret;
        }
        var maybePromise = tryConvertToPromise(result, traceParent);
        if (maybePromise instanceof Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
    if (debug.cancellation()) {
        var internal = new Promise(INTERNAL);
        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
        this._promise = internal.lastly(function() {
            return _finallyPromise;
        });
        internal._captureStackTrace();
        internal._setOnCancel(this);
    } else {
        var promise = this._promise = new Promise(INTERNAL);
        promise._captureStackTrace();
    }
    this._stack = stack;
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = undefined;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
    this._yieldedPromise = null;
    this._cancellationPhase = false;
}
util.inherits(PromiseSpawn, Proxyable);

PromiseSpawn.prototype._isResolved = function() {
    return this._promise === null;
};

PromiseSpawn.prototype._cleanup = function() {
    this._promise = this._generator = null;
    if (debug.cancellation() && this._finallyPromise !== null) {
        this._finallyPromise._fulfill();
        this._finallyPromise = null;
    }
};

PromiseSpawn.prototype._promiseCancelled = function() {
    if (this._isResolved()) return;
    var implementsReturn = typeof this._generator["return"] !== "undefined";

    var result;
    if (!implementsReturn) {
        var reason = new Promise.CancellationError(
            "generator .return() sentinel");
        Promise.coroutine.returnSentinel = reason;
        this._promise._attachExtraTrace(reason);
        this._promise._pushContext();
        result = tryCatch(this._generator["throw"]).call(this._generator,
                                                         reason);
        this._promise._popContext();
    } else {
        this._promise._pushContext();
        result = tryCatch(this._generator["return"]).call(this._generator,
                                                          undefined);
        this._promise._popContext();
    }
    this._cancellationPhase = true;
    this._yieldedPromise = null;
    this._continue(result);
};

PromiseSpawn.prototype._promiseFulfilled = function(value) {
    this._yieldedPromise = null;
    this._promise._pushContext();
    var result = tryCatch(this._generator.next).call(this._generator, value);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._promiseRejected = function(reason) {
    this._yieldedPromise = null;
    this._promise._attachExtraTrace(reason);
    this._promise._pushContext();
    var result = tryCatch(this._generator["throw"])
        .call(this._generator, reason);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._resultCancelled = function() {
    if (this._yieldedPromise instanceof Promise) {
        var promise = this._yieldedPromise;
        this._yieldedPromise = null;
        promise.cancel();
    }
};

PromiseSpawn.prototype.promise = function () {
    return this._promise;
};

PromiseSpawn.prototype._run = function () {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = undefined;
    this._promiseFulfilled(undefined);
};

PromiseSpawn.prototype._continue = function (result) {
    var promise = this._promise;
    if (result === errorObj) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._rejectCallback(result.e, false);
        }
    }

    var value = result.value;
    if (result.done === true) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._resolveCallback(value);
        }
    } else {
        var maybePromise = tryConvertToPromise(value, this._promise);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise,
                                        this._yieldHandlers,
                                        this._promise);
            if (maybePromise === null) {
                this._promiseRejected(
                    new TypeError(
                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) +
                        "From coroutine:\u000a" +
                        this._stack.split("\n").slice(1, -7).join("\n")
                    )
                );
                return;
            }
        }
        maybePromise = maybePromise._target();
        var bitField = maybePromise._bitField;
        ;
        if (((bitField & 50397184) === 0)) {
            this._yieldedPromise = maybePromise;
            maybePromise._proxy(this, null);
        } else if (((bitField & 33554432) !== 0)) {
            Promise._async.invoke(
                this._promiseFulfilled, this, maybePromise._value()
            );
        } else if (((bitField & 16777216) !== 0)) {
            Promise._async.invoke(
                this._promiseRejected, this, maybePromise._reason()
            );
        } else {
            this._promiseCancelled();
        }
    }
};

Promise.coroutine = function (generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    var stack = new Error().stack;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
                                      stack);
        var ret = spawn.promise();
        spawn._generator = generator;
        spawn._promiseFulfilled(undefined);
        return ret;
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    yieldHandlers.push(fn);
};

Promise.spawn = function (generatorFunction) {
    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var reject;

if (false) { var i, promiseSetters, thenCallbacks, holderClasses, generateHolderClass, promiseSetter, thenCallback; }

Promise.join = function () {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (false) { var context, bitField, maybePromise, i, callbacks, holder, HolderClass, ret; }
    }
    var args = [].slice.call(arguments);;
    if (fn) args.pop();
    var ret = new PromiseArray(args).promise();
    return fn !== undefined ? ret.spread(fn) : ret;
};

};

},{"./util":36}],18:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    var context = Promise._getContext();
    this._callback = util.contextBind(context, fn);
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = [];
    async.invoke(this._asyncInit, this, undefined);
    if (util.isArray(promises)) {
        for (var i = 0; i < promises.length; ++i) {
            var maybePromise = promises[i];
            if (maybePromise instanceof Promise) {
                maybePromise.suppressUnhandledRejections();
            }
        }
    }
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._asyncInit = function() {
    this._init$(undefined, -2);
};

MappingPromiseArray.prototype._init = function () {};

MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;

    if (index < 0) {
        index = (index * -1) - 1;
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return true;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return false;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var promise = this._promise;
        var callback = this._callback;
        var receiver = promise._boundValue();
        promise._pushContext();
        var ret = tryCatch(callback).call(receiver, value, index, length);
        var promiseCreated = promise._popContext();
        debug.checkForgottenReturns(
            ret,
            promiseCreated,
            preservedValues !== null ? "Promise.filter" : "Promise.map",
            promise
        );
        if (ret === errorObj) {
            this._reject(ret.e);
            return true;
        }

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            var bitField = maybePromise._bitField;
            ;
            if (((bitField & 50397184) === 0)) {
                if (limit >= 1) this._inFlight++;
                values[index] = maybePromise;
                maybePromise._proxy(this, (index + 1) * -1);
                return false;
            } else if (((bitField & 33554432) !== 0)) {
                ret = maybePromise._value();
            } else if (((bitField & 16777216) !== 0)) {
                this._reject(maybePromise._reason());
                return true;
            } else {
                this._cancel();
                return true;
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }
        return true;
    }
    return false;
};

MappingPromiseArray.prototype._drainQueue = function () {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        if (this._isResolved()) return;
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter = function (booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues = function () {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }

    var limit = 0;
    if (options !== undefined) {
        if (typeof options === "object" && options !== null) {
            if (typeof options.concurrency !== "number") {
                return Promise.reject(
                    new TypeError("'concurrency' must be a number but it is " +
                                    util.classString(options.concurrency)));
            }
            limit = options.concurrency;
        } else {
            return Promise.reject(new TypeError(
                            "options argument must be an object but it is " +
                             util.classString(options)));
        }
    }
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
}

Promise.prototype.map = function (fn, options) {
    return map(this, fn, options, null);
};

Promise.map = function (promises, fn, options, _filter) {
    return map(promises, fn, options, _filter);
};


};

},{"./util":36}],19:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

Promise.method = function (fn) {
    if (typeof fn !== "function") {
        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
    }
    return function () {
        var ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._pushContext();
        var value = tryCatch(fn).apply(this, arguments);
        var promiseCreated = ret._popContext();
        debug.checkForgottenReturns(
            value, promiseCreated, "Promise.method", ret);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._pushContext();
    var value;
    if (arguments.length > 1) {
        debug.deprecated("calling Promise.try with more than 1 argument");
        var arg = arguments[1];
        var ctx = arguments[2];
        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
                                  : tryCatch(fn).call(ctx, arg);
    } else {
        value = tryCatch(fn)();
    }
    var promiseCreated = ret._popContext();
    debug.checkForgottenReturns(
        value, promiseCreated, "Promise.try", ret);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.prototype._resolveFromSyncValue = function (value) {
    if (value === util.errorObj) {
        this._rejectCallback(value.e, false);
    } else {
        this._resolveCallback(value, true);
    }
};
};

},{"./util":36}],20:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = _dereq_("./errors");
var OperationalError = errors.OperationalError;
var es5 = _dereq_("./es5");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

var rErrorKey = /^(?:name|message|stack|cause)$/;
function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
        ret.name = obj.name;
        ret.message = obj.message;
        ret.stack = obj.stack;
        var keys = es5.keys(obj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!rErrorKey.test(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    util.markAsOriginatingFromRejection(obj);
    return obj;
}

function nodebackForPromise(promise, multiArgs) {
    return function(err, value) {
        if (promise === null) return;
        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (!multiArgs) {
            promise._fulfill(value);
        } else {
            var args = [].slice.call(arguments, 1);;
            promise._fulfill(args);
        }
        promise = null;
    };
}

module.exports = nodebackForPromise;

},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var util = _dereq_("./util");
var async = Promise._async;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function spreadAdapter(val, nodeback) {
    var promise = this;
    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
    var ret =
        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

function successAdapter(val, nodeback) {
    var promise = this;
    var receiver = promise._boundValue();
    var ret = val === undefined
        ? tryCatch(nodeback).call(receiver, null)
        : tryCatch(nodeback).call(receiver, null, val);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}
function errorAdapter(reason, nodeback) {
    var promise = this;
    if (!reason) {
        var newReason = new Error(reason + "");
        newReason.cause = reason;
        reason = newReason;
    }
    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
                                                                     options) {
    if (typeof nodeback == "function") {
        var adapter = successAdapter;
        if (options !== undefined && Object(options).spread) {
            adapter = spreadAdapter;
        }
        this._then(
            adapter,
            errorAdapter,
            undefined,
            this,
            nodeback
        );
    }
    return this;
};
};

},{"./util":36}],22:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var makeSelfResolutionError = function () {
    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var reflectHandler = function() {
    return new Promise.PromiseInspection(this._target());
};
var apiRejection = function(msg) {
    return Promise.reject(new TypeError(msg));
};
function Proxyable() {}
var UNDEFINED_BINDING = {};
var util = _dereq_("./util");
util.setReflectHandler(reflectHandler);

var getDomain = function() {
    var domain = process.domain;
    if (domain === undefined) {
        return null;
    }
    return domain;
};
var getContextDefault = function() {
    return null;
};
var getContextDomain = function() {
    return {
        domain: getDomain(),
        async: null
    };
};
var AsyncResource = util.isNode && util.nodeSupportsAsyncResource ?
    _dereq_("async_hooks").AsyncResource : null;
var getContextAsyncHooks = function() {
    return {
        domain: getDomain(),
        async: new AsyncResource("Bluebird::Promise")
    };
};
var getContext = util.isNode ? getContextDomain : getContextDefault;
util.notEnumerableProp(Promise, "_getContext", getContext);
var enableAsyncHooks = function() {
    getContext = getContextAsyncHooks;
    util.notEnumerableProp(Promise, "_getContext", getContextAsyncHooks);
};
var disableAsyncHooks = function() {
    getContext = getContextDomain;
    util.notEnumerableProp(Promise, "_getContext", getContextDomain);
};

var es5 = _dereq_("./es5");
var Async = _dereq_("./async");
var async = new Async();
es5.defineProperty(Promise, "_async", {value: async});
var errors = _dereq_("./errors");
var TypeError = Promise.TypeError = errors.TypeError;
Promise.RangeError = errors.RangeError;
var CancellationError = Promise.CancellationError = errors.CancellationError;
Promise.TimeoutError = errors.TimeoutError;
Promise.OperationalError = errors.OperationalError;
Promise.RejectionError = errors.OperationalError;
Promise.AggregateError = errors.AggregateError;
var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {};
var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
var PromiseArray =
    _dereq_("./promise_array")(Promise, INTERNAL,
                               tryConvertToPromise, apiRejection, Proxyable);
var Context = _dereq_("./context")(Promise);
 /*jshint unused:false*/
var createContext = Context.create;

var debug = _dereq_("./debuggability")(Promise, Context,
    enableAsyncHooks, disableAsyncHooks);
var CapturedTrace = debug.CapturedTrace;
var PassThroughHandlerContext =
    _dereq_("./finally")(Promise, tryConvertToPromise, NEXT_FILTER);
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
var nodebackForPromise = _dereq_("./nodeback");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
function check(self, executor) {
    if (self == null || self.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (typeof executor !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(executor));
    }

}

function Promise(executor) {
    if (executor !== INTERNAL) {
        check(this, executor);
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = undefined;
    this._rejectionHandler0 = undefined;
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._resolveFromExecutor(executor);
    this._promiseCreated();
    this._fireEvent("promiseCreated", this);
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return apiRejection("Catch statement predicate: " +
                    "expecting an object but got " + util.classString(item));
            }
        }
        catchInstances.length = j;
        fn = arguments[i];

        if (typeof fn !== "function") {
            throw new TypeError("The last argument to .catch() " +
                "must be a function, got " + util.toString(fn));
        }
        return this.then(undefined, catchFilter(catchInstances, fn, this));
    }
    return this.then(undefined, fn);
};

Promise.prototype.reflect = function () {
    return this._then(reflectHandler,
        reflectHandler, undefined, this, undefined);
};

Promise.prototype.then = function (didFulfill, didReject) {
    if (debug.warnings() && arguments.length > 0 &&
        typeof didFulfill !== "function" &&
        typeof didReject !== "function") {
        var msg = ".then() only accepts functions but was passed: " +
                util.classString(didFulfill);
        if (arguments.length > 1) {
            msg += ", " + util.classString(didReject);
        }
        this._warn(msg);
    }
    return this._then(didFulfill, didReject, undefined, undefined, undefined);
};

Promise.prototype.done = function (didFulfill, didReject) {
    var promise =
        this._then(didFulfill, didReject, undefined, undefined, undefined);
    promise._setIsFinal();
};

Promise.prototype.spread = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
};

Promise.prototype.toJSON = function () {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: undefined,
        rejectionReason: undefined
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this.value();
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this.reason();
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function () {
    if (arguments.length > 0) {
        this._warn(".all() was passed arguments but it does not take any");
    }
    return new PromiseArray(this).promise();
};

Promise.prototype.error = function (fn) {
    return this.caught(util.originatesFromRejection, fn);
};

Promise.getNewLibraryCopy = module.exports;

Promise.is = function (val) {
    return val instanceof Promise;
};

Promise.fromNode = Promise.fromCallback = function(fn) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
                                         : false;
    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
    if (result === errorObj) {
        ret._rejectCallback(result.e, true);
    }
    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
    return ret;
};

Promise.all = function (promises) {
    return new PromiseArray(promises).promise();
};

Promise.cast = function (obj) {
    var ret = tryConvertToPromise(obj);
    if (!(ret instanceof Promise)) {
        ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._setFulfilled();
        ret._rejectionHandler0 = obj;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function (reason) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._rejectCallback(reason, true);
    return ret;
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    return async.setScheduler(fn);
};

Promise.prototype._then = function (
    didFulfill,
    didReject,
    _,    receiver,
    internalData
) {
    var haveInternalData = internalData !== undefined;
    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
    var target = this._target();
    var bitField = target._bitField;

    if (!haveInternalData) {
        promise._propagateFrom(this, 3);
        promise._captureStackTrace();
        if (receiver === undefined &&
            ((this._bitField & 2097152) !== 0)) {
            if (!((bitField & 50397184) === 0)) {
                receiver = this._boundValue();
            } else {
                receiver = target === this ? undefined : this._boundTo;
            }
        }
        this._fireEvent("promiseChained", this, promise);
    }

    var context = getContext();
    if (!((bitField & 50397184) === 0)) {
        var handler, value, settler = target._settlePromiseCtx;
        if (((bitField & 33554432) !== 0)) {
            value = target._rejectionHandler0;
            handler = didFulfill;
        } else if (((bitField & 16777216) !== 0)) {
            value = target._fulfillmentHandler0;
            handler = didReject;
            target._unsetRejectionIsUnhandled();
        } else {
            settler = target._settlePromiseLateCancellationObserver;
            value = new CancellationError("late cancellation observer");
            target._attachExtraTrace(value);
            handler = didReject;
        }

        async.invoke(settler, target, {
            handler: util.contextBind(context, handler),
            promise: promise,
            receiver: receiver,
            value: value
        });
    } else {
        target._addCallbacks(didFulfill, didReject, promise,
                receiver, context);
    }

    return promise;
};

Promise.prototype._length = function () {
    return this._bitField & 65535;
};

Promise.prototype._isFateSealed = function () {
    return (this._bitField & 117506048) !== 0;
};

Promise.prototype._isFollowing = function () {
    return (this._bitField & 67108864) === 67108864;
};

Promise.prototype._setLength = function (len) {
    this._bitField = (this._bitField & -65536) |
        (len & 65535);
};

Promise.prototype._setFulfilled = function () {
    this._bitField = this._bitField | 33554432;
    this._fireEvent("promiseFulfilled", this);
};

Promise.prototype._setRejected = function () {
    this._bitField = this._bitField | 16777216;
    this._fireEvent("promiseRejected", this);
};

Promise.prototype._setFollowing = function () {
    this._bitField = this._bitField | 67108864;
    this._fireEvent("promiseResolved", this);
};

Promise.prototype._setIsFinal = function () {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._isFinal = function () {
    return (this._bitField & 4194304) > 0;
};

Promise.prototype._unsetCancelled = function() {
    this._bitField = this._bitField & (~65536);
};

Promise.prototype._setCancelled = function() {
    this._bitField = this._bitField | 65536;
    this._fireEvent("promiseCancelled", this);
};

Promise.prototype._setWillBeCancelled = function() {
    this._bitField = this._bitField | 8388608;
};

Promise.prototype._setAsyncGuaranteed = function() {
    if (async.hasCustomScheduler()) return;
    var bitField = this._bitField;
    this._bitField = bitField |
        (((bitField & 536870912) >> 2) ^
        134217728);
};

Promise.prototype._setNoAsyncGuarantee = function() {
    this._bitField = (this._bitField | 536870912) &
        (~134217728);
};

Promise.prototype._receiverAt = function (index) {
    var ret = index === 0 ? this._receiver0 : this[
            index * 4 - 4 + 3];
    if (ret === UNDEFINED_BINDING) {
        return undefined;
    } else if (ret === undefined && this._isBound()) {
        return this._boundValue();
    }
    return ret;
};

Promise.prototype._promiseAt = function (index) {
    return this[
            index * 4 - 4 + 2];
};

Promise.prototype._fulfillmentHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 0];
};

Promise.prototype._rejectionHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 1];
};

Promise.prototype._boundValue = function() {};

Promise.prototype._migrateCallback0 = function (follower) {
    var bitField = follower._bitField;
    var fulfill = follower._fulfillmentHandler0;
    var reject = follower._rejectionHandler0;
    var promise = follower._promise0;
    var receiver = follower._receiverAt(0);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._migrateCallbackAt = function (follower, index) {
    var fulfill = follower._fulfillmentHandlerAt(index);
    var reject = follower._rejectionHandlerAt(index);
    var promise = follower._promiseAt(index);
    var receiver = follower._receiverAt(index);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._addCallbacks = function (
    fulfill,
    reject,
    promise,
    receiver,
    context
) {
    var index = this._length();

    if (index >= 65535 - 4) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        this._receiver0 = receiver;
        if (typeof fulfill === "function") {
            this._fulfillmentHandler0 = util.contextBind(context, fulfill);
        }
        if (typeof reject === "function") {
            this._rejectionHandler0 = util.contextBind(context, reject);
        }
    } else {
        var base = index * 4 - 4;
        this[base + 2] = promise;
        this[base + 3] = receiver;
        if (typeof fulfill === "function") {
            this[base + 0] =
                util.contextBind(context, fulfill);
        }
        if (typeof reject === "function") {
            this[base + 1] =
                util.contextBind(context, reject);
        }
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._proxy = function (proxyable, arg) {
    this._addCallbacks(undefined, undefined, arg, proxyable, null);
};

Promise.prototype._resolveCallback = function(value, shouldBind) {
    if (((this._bitField & 117506048) !== 0)) return;
    if (value === this)
        return this._rejectCallback(makeSelfResolutionError(), false);
    var maybePromise = tryConvertToPromise(value, this);
    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

    if (shouldBind) this._propagateFrom(maybePromise, 2);


    var promise = maybePromise._target();

    if (promise === this) {
        this._reject(makeSelfResolutionError());
        return;
    }

    var bitField = promise._bitField;
    if (((bitField & 50397184) === 0)) {
        var len = this._length();
        if (len > 0) promise._migrateCallback0(this);
        for (var i = 1; i < len; ++i) {
            promise._migrateCallbackAt(this, i);
        }
        this._setFollowing();
        this._setLength(0);
        this._setFollowee(maybePromise);
    } else if (((bitField & 33554432) !== 0)) {
        this._fulfill(promise._value());
    } else if (((bitField & 16777216) !== 0)) {
        this._reject(promise._reason());
    } else {
        var reason = new CancellationError("late cancellation observer");
        promise._attachExtraTrace(reason);
        this._reject(reason);
    }
};

Promise.prototype._rejectCallback =
function(reason, synchronous, ignoreNonErrorWarnings) {
    var trace = util.ensureErrorObject(reason);
    var hasStack = trace === reason;
    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
        var message = "a promise was rejected with a non-error: " +
            util.classString(reason);
        this._warn(message, true);
    }
    this._attachExtraTrace(trace, synchronous ? hasStack : false);
    this._reject(reason);
};

Promise.prototype._resolveFromExecutor = function (executor) {
    if (executor === INTERNAL) return;
    var promise = this;
    this._captureStackTrace();
    this._pushContext();
    var synchronous = true;
    var r = this._execute(executor, function(value) {
        promise._resolveCallback(value);
    }, function (reason) {
        promise._rejectCallback(reason, synchronous);
    });
    synchronous = false;
    this._popContext();

    if (r !== undefined) {
        promise._rejectCallback(r, true);
    }
};

Promise.prototype._settlePromiseFromHandler = function (
    handler, receiver, value, promise
) {
    var bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;
    promise._pushContext();
    var x;
    if (receiver === APPLY) {
        if (!value || typeof value.length !== "number") {
            x = errorObj;
            x.e = new TypeError("cannot .spread() a non-array: " +
                                    util.classString(value));
        } else {
            x = tryCatch(handler).apply(this._boundValue(), value);
        }
    } else {
        x = tryCatch(handler).call(receiver, value);
    }
    var promiseCreated = promise._popContext();
    bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;

    if (x === NEXT_FILTER) {
        promise._reject(value);
    } else if (x === errorObj) {
        promise._rejectCallback(x.e, false);
    } else {
        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
        promise._resolveCallback(x);
    }
};

Promise.prototype._target = function() {
    var ret = this;
    while (ret._isFollowing()) ret = ret._followee();
    return ret;
};

Promise.prototype._followee = function() {
    return this._rejectionHandler0;
};

Promise.prototype._setFollowee = function(promise) {
    this._rejectionHandler0 = promise;
};

Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
    var isPromise = promise instanceof Promise;
    var bitField = this._bitField;
    var asyncGuaranteed = ((bitField & 134217728) !== 0);
    if (((bitField & 65536) !== 0)) {
        if (isPromise) promise._invokeInternalOnCancel();

        if (receiver instanceof PassThroughHandlerContext &&
            receiver.isFinallyHandler()) {
            receiver.cancelPromise = promise;
            if (tryCatch(handler).call(receiver, value) === errorObj) {
                promise._reject(errorObj.e);
            }
        } else if (handler === reflectHandler) {
            promise._fulfill(reflectHandler.call(receiver));
        } else if (receiver instanceof Proxyable) {
            receiver._promiseCancelled(promise);
        } else if (isPromise || promise instanceof PromiseArray) {
            promise._cancel();
        } else {
            receiver.cancel();
        }
    } else if (typeof handler === "function") {
        if (!isPromise) {
            handler.call(receiver, value, promise);
        } else {
            if (asyncGuaranteed) promise._setAsyncGuaranteed();
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (receiver instanceof Proxyable) {
        if (!receiver._isResolved()) {
            if (((bitField & 33554432) !== 0)) {
                receiver._promiseFulfilled(value, promise);
            } else {
                receiver._promiseRejected(value, promise);
            }
        }
    } else if (isPromise) {
        if (asyncGuaranteed) promise._setAsyncGuaranteed();
        if (((bitField & 33554432) !== 0)) {
            promise._fulfill(value);
        } else {
            promise._reject(value);
        }
    }
};

Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
    var handler = ctx.handler;
    var promise = ctx.promise;
    var receiver = ctx.receiver;
    var value = ctx.value;
    if (typeof handler === "function") {
        if (!(promise instanceof Promise)) {
            handler.call(receiver, value, promise);
        } else {
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (promise instanceof Promise) {
        promise._reject(value);
    }
};

Promise.prototype._settlePromiseCtx = function(ctx) {
    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
};

Promise.prototype._settlePromise0 = function(handler, value, bitField) {
    var promise = this._promise0;
    var receiver = this._receiverAt(0);
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._settlePromise(promise, handler, receiver, value);
};

Promise.prototype._clearCallbackDataAtIndex = function(index) {
    var base = index * 4 - 4;
    this[base + 2] =
    this[base + 3] =
    this[base + 0] =
    this[base + 1] = undefined;
};

Promise.prototype._fulfill = function (value) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._reject(err);
    }
    this._setFulfilled();
    this._rejectionHandler0 = value;

    if ((bitField & 65535) > 0) {
        if (((bitField & 134217728) !== 0)) {
            this._settlePromises();
        } else {
            async.settlePromises(this);
        }
        this._dereferenceTrace();
    }
};

Promise.prototype._reject = function (reason) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    this._setRejected();
    this._fulfillmentHandler0 = reason;

    if (this._isFinal()) {
        return async.fatalError(reason, util.isNode);
    }

    if ((bitField & 65535) > 0) {
        async.settlePromises(this);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._fulfillPromises = function (len, value) {
    for (var i = 1; i < len; i++) {
        var handler = this._fulfillmentHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, value);
    }
};

Promise.prototype._rejectPromises = function (len, reason) {
    for (var i = 1; i < len; i++) {
        var handler = this._rejectionHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, reason);
    }
};

Promise.prototype._settlePromises = function () {
    var bitField = this._bitField;
    var len = (bitField & 65535);

    if (len > 0) {
        if (((bitField & 16842752) !== 0)) {
            var reason = this._fulfillmentHandler0;
            this._settlePromise0(this._rejectionHandler0, reason, bitField);
            this._rejectPromises(len, reason);
        } else {
            var value = this._rejectionHandler0;
            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
            this._fulfillPromises(len, value);
        }
        this._setLength(0);
    }
    this._clearCancellationData();
};

Promise.prototype._settledValue = function() {
    var bitField = this._bitField;
    if (((bitField & 33554432) !== 0)) {
        return this._rejectionHandler0;
    } else if (((bitField & 16777216) !== 0)) {
        return this._fulfillmentHandler0;
    }
};

if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
    es5.defineProperty(Promise.prototype, Symbol.toStringTag, {
        get: function () {
            return "Object";
        }
    });
}

function deferResolve(v) {this.promise._resolveCallback(v);}
function deferReject(v) {this.promise._rejectCallback(v, false);}

Promise.defer = Promise.pending = function() {
    debug.deprecated("Promise.defer", "new Promise");
    var promise = new Promise(INTERNAL);
    return {
        promise: promise,
        resolve: deferResolve,
        reject: deferReject
    };
};

util.notEnumerableProp(Promise,
                       "_makeSelfResolutionError",
                       makeSelfResolutionError);

_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
    debug);
_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
_dereq_("./direct_resolve")(Promise);
_dereq_("./synchronous_inspection")(Promise);
_dereq_("./join")(
    Promise, PromiseArray, tryConvertToPromise, INTERNAL, async);
Promise.Promise = Promise;
Promise.version = "3.7.2";
_dereq_('./call_get.js')(Promise);
_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./nodeify.js')(Promise);
_dereq_('./promisify.js')(Promise, INTERNAL);
_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./settle.js')(Promise, PromiseArray, debug);
_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
_dereq_('./timers.js')(Promise, INTERNAL, debug);
_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
_dereq_('./any.js')(Promise);
_dereq_('./each.js')(Promise, INTERNAL);
_dereq_('./filter.js')(Promise, INTERNAL);
                                                         
    util.toFastProperties(Promise);                                          
    util.toFastProperties(Promise.prototype);                                
    function fillTypes(value) {                                              
        var p = new Promise(INTERNAL);                                       
        p._fulfillmentHandler0 = value;                                      
        p._rejectionHandler0 = value;                                        
        p._promise0 = value;                                                 
        p._receiver0 = value;                                                
    }                                                                        
    // Complete slack tracking, opt out of field-type tracking and           
    // stabilize map                                                         
    fillTypes({a: 1});                                                       
    fillTypes({b: 2});                                                       
    fillTypes({c: 3});                                                       
    fillTypes(1);                                                            
    fillTypes(function(){});                                                 
    fillTypes(undefined);                                                    
    fillTypes(false);                                                        
    fillTypes(new Promise(INTERNAL));                                        
    debug.setBounds(Async.firstLineError, util.lastLineError);               
    return Promise;                                                          

};

},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36,"async_hooks":undefined}],23:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise,
    apiRejection, Proxyable) {
var util = _dereq_("./util");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -2: return [];
    case -3: return {};
    case -6: return new Map();
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    if (values instanceof Promise) {
        promise._propagateFrom(values, 3);
        values.suppressUnhandledRejections();
    }
    promise._setOnCancel(this);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(undefined, -2);
}
util.inherits(PromiseArray, Proxyable);

PromiseArray.prototype.length = function () {
    return this._length;
};

PromiseArray.prototype.promise = function () {
    return this._promise;
};

PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
    var values = tryConvertToPromise(this._values, this._promise);
    if (values instanceof Promise) {
        values = values._target();
        var bitField = values._bitField;
        ;
        this._values = values;

        if (((bitField & 50397184) === 0)) {
            this._promise._setAsyncGuaranteed();
            return values._then(
                init,
                this._reject,
                undefined,
                this,
                resolveValueIfEmpty
           );
        } else if (((bitField & 33554432) !== 0)) {
            values = values._value();
        } else if (((bitField & 16777216) !== 0)) {
            return this._reject(values._reason());
        } else {
            return this._cancel();
        }
    }
    values = util.asArray(values);
    if (values === null) {
        var err = apiRejection(
            "expecting an array or an iterable object but got " + util.classString(values)).reason();
        this._promise._rejectCallback(err, false);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    this._iterate(values);
};

PromiseArray.prototype._iterate = function(values) {
    var len = this.getActualLength(values.length);
    this._length = len;
    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
    var result = this._promise;
    var isResolved = false;
    var bitField = null;
    for (var i = 0; i < len; ++i) {
        var maybePromise = tryConvertToPromise(values[i], result);

        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            bitField = maybePromise._bitField;
        } else {
            bitField = null;
        }

        if (isResolved) {
            if (bitField !== null) {
                maybePromise.suppressUnhandledRejections();
            }
        } else if (bitField !== null) {
            if (((bitField & 50397184) === 0)) {
                maybePromise._proxy(this, i);
                this._values[i] = maybePromise;
            } else if (((bitField & 33554432) !== 0)) {
                isResolved = this._promiseFulfilled(maybePromise._value(), i);
            } else if (((bitField & 16777216) !== 0)) {
                isResolved = this._promiseRejected(maybePromise._reason(), i);
            } else {
                isResolved = this._promiseCancelled(i);
            }
        } else {
            isResolved = this._promiseFulfilled(maybePromise, i);
        }
    }
    if (!isResolved) result._setAsyncGuaranteed();
};

PromiseArray.prototype._isResolved = function () {
    return this._values === null;
};

PromiseArray.prototype._resolve = function (value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype._cancel = function() {
    if (this._isResolved() || !this._promise._isCancellable()) return;
    this._values = null;
    this._promise._cancel();
};

PromiseArray.prototype._reject = function (reason) {
    this._values = null;
    this._promise._rejectCallback(reason, false);
};

PromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

PromiseArray.prototype._promiseCancelled = function() {
    this._cancel();
    return true;
};

PromiseArray.prototype._promiseRejected = function (reason) {
    this._totalResolved++;
    this._reject(reason);
    return true;
};

PromiseArray.prototype._resultCancelled = function() {
    if (this._isResolved()) return;
    var values = this._values;
    this._cancel();
    if (values instanceof Promise) {
        values.cancel();
    } else {
        for (var i = 0; i < values.length; ++i) {
            if (values[i] instanceof Promise) {
                values[i].cancel();
            }
        }
    }
};

PromiseArray.prototype.shouldCopyValues = function () {
    return true;
};

PromiseArray.prototype.getActualLength = function (len) {
    return len;
};

return PromiseArray;
};

},{"./util":36}],24:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = _dereq_("./util");
var nodebackForPromise = _dereq_("./nodeback");
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = _dereq_("./errors").TypeError;
var defaultSuffix = "Async";
var defaultPromisified = {__isPromisified__: true};
var noCopyProps = [
    "arity",    "length",
    "name",
    "arguments",
    "caller",
    "callee",
    "prototype",
    "__isPromisified__"
];
var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

var defaultFilter = function(name) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        name !== "constructor";
};

function propsFilter(key) {
    return !noCopyPropsPattern.test(key);
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                        .replace("%s", suffix));
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        var passesDefaultFilter = filter === defaultFilter
            ? true : defaultFilter(key, value, obj);
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj, passesDefaultFilter)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

var escapeIdentRegex = function(str) {
    return str.replace(/([$])/, "\\$");
};

var makeNodePromisifiedEval;
if (false) { var parameterCount, parameterDeclaration, argumentSequence, switchCaseArgumentOrder; }

function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
    var defaultThis = (function() {return this;})();
    var method = callback;
    if (typeof method === "string") {
        callback = fn;
    }
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        var promise = new Promise(INTERNAL);
        promise._captureStackTrace();
        var cb = typeof method === "string" && this !== defaultThis
            ? this[method] : callback;
        var fn = nodebackForPromise(promise, multiArgs);
        try {
            cb.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            promise._rejectCallback(maybeWrapAsError(e), true, true);
        }
        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
        return promise;
    }
    util.notEnumerableProp(promisified, "__isPromisified__", true);
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        if (promisifier === makeNodePromisified) {
            obj[promisifiedKey] =
                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
        } else {
            var promisified = promisifier(fn, function() {
                return makeNodePromisified(key, THIS, key,
                                           fn, suffix, multiArgs);
            });
            util.notEnumerableProp(promisified, "__isPromisified__", true);
            obj[promisifiedKey] = promisified;
        }
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver, multiArgs) {
    return makeNodePromisified(callback, receiver, undefined,
                                callback, null, multiArgs);
}

Promise.promisify = function (fn, options) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    if (isPromisified(fn)) {
        return fn;
    }
    options = Object(options);
    var receiver = options.context === undefined ? THIS : options.context;
    var multiArgs = !!options.multiArgs;
    var ret = promisify(fn, receiver, multiArgs);
    util.copyDescriptors(fn, ret, propsFilter);
    return ret;
};

Promise.promisifyAll = function (target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    options = Object(options);
    var multiArgs = !!options.multiArgs;
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }

    var keys = util.inheritedDataKeys(target);
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier,
                multiArgs);
            promisifyAll(value, suffix, filter, promisifier, multiArgs);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
};
};


},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");
var isObject = util.isObject;
var es5 = _dereq_("./es5");
var Es6Map;
if (typeof Map === "function") Es6Map = Map;

var mapToEntries = (function() {
    var index = 0;
    var size = 0;

    function extractEntry(value, key) {
        this[index] = value;
        this[index + size] = key;
        index++;
    }

    return function mapToEntries(map) {
        size = map.size;
        index = 0;
        var ret = new Array(map.size * 2);
        map.forEach(extractEntry, ret);
        return ret;
    };
})();

var entriesToMap = function(entries) {
    var ret = new Es6Map();
    var length = entries.length / 2 | 0;
    for (var i = 0; i < length; ++i) {
        var key = entries[length + i];
        var value = entries[i];
        ret.set(key, value);
    }
    return ret;
};

function PropertiesPromiseArray(obj) {
    var isMap = false;
    var entries;
    if (Es6Map !== undefined && obj instanceof Es6Map) {
        entries = mapToEntries(obj);
        isMap = true;
    } else {
        var keys = es5.keys(obj);
        var len = keys.length;
        entries = new Array(len * 2);
        for (var i = 0; i < len; ++i) {
            var key = keys[i];
            entries[i] = obj[key];
            entries[i + len] = key;
        }
    }
    this.constructor$(entries);
    this._isMap = isMap;
    this._init$(undefined, isMap ? -6 : -3);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init = function () {};

PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val;
        if (this._isMap) {
            val = entriesToMap(this._values);
        } else {
            val = {};
            var keyOffset = this.length();
            for (var i = 0, len = this.length(); i < len; ++i) {
                val[this._values[i + keyOffset]] = this._values[i];
            }
        }
        this._resolve(val);
        return true;
    }
    return false;
};

PropertiesPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength = function (len) {
    return len >> 1;
};

function props(promises) {
    var ret;
    var castValue = tryConvertToPromise(promises);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(
            Promise.props, undefined, undefined, undefined, undefined);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 2);
    }
    return ret;
}

Promise.prototype.props = function () {
    return props(this);
};

Promise.props = function (promises) {
    return props(promises);
};
};

},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
"use strict";
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
}

Queue.prototype._willBeOverCapacity = function (size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function (arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function (fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function () {
    var front = this._front,
        ret = this[front];

    this[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function () {
    return this._length;
};

Queue.prototype._checkCapacity = function (size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 1);
    }
};

Queue.prototype._resizeTo = function (capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    var moveItemsCount = (front + length) & (oldCapacity - 1);
    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
};

module.exports = Queue;

},{}],27:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");

var raceLater = function (promise) {
    return promise.then(function(array) {
        return race(array, promise);
    });
};

function race(promises, parent) {
    var maybePromise = tryConvertToPromise(promises);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else {
        promises = util.asArray(promises);
        if (promises === null)
            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
    }

    var ret = new Promise(INTERNAL);
    if (parent !== undefined) {
        ret._propagateFrom(parent, 3);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === undefined && !(i in promises)) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
    }
    return ret;
}

Promise.race = function (promises) {
    return race(promises, undefined);
};

Promise.prototype.race = function () {
    return race(this, undefined);
};

};

},{"./util":36}],28:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

function ReductionPromiseArray(promises, fn, initialValue, _each) {
    this.constructor$(promises);
    var context = Promise._getContext();
    this._fn = util.contextBind(context, fn);
    if (initialValue !== undefined) {
        initialValue = Promise.resolve(initialValue);
        initialValue._attachCancellationCallback(this);
    }
    this._initialValue = initialValue;
    this._currentCancellable = null;
    if(_each === INTERNAL) {
        this._eachValues = Array(this._length);
    } else if (_each === 0) {
        this._eachValues = null;
    } else {
        this._eachValues = undefined;
    }
    this._promise._captureStackTrace();
    this._init$(undefined, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._gotAccum = function(accum) {
    if (this._eachValues !== undefined &&
        this._eachValues !== null &&
        accum !== INTERNAL) {
        this._eachValues.push(accum);
    }
};

ReductionPromiseArray.prototype._eachComplete = function(value) {
    if (this._eachValues !== null) {
        this._eachValues.push(value);
    }
    return this._eachValues;
};

ReductionPromiseArray.prototype._init = function() {};

ReductionPromiseArray.prototype._resolveEmptyArray = function() {
    this._resolve(this._eachValues !== undefined ? this._eachValues
                                                 : this._initialValue);
};

ReductionPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

ReductionPromiseArray.prototype._resolve = function(value) {
    this._promise._resolveCallback(value);
    this._values = null;
};

ReductionPromiseArray.prototype._resultCancelled = function(sender) {
    if (sender === this._initialValue) return this._cancel();
    if (this._isResolved()) return;
    this._resultCancelled$();
    if (this._currentCancellable instanceof Promise) {
        this._currentCancellable.cancel();
    }
    if (this._initialValue instanceof Promise) {
        this._initialValue.cancel();
    }
};

ReductionPromiseArray.prototype._iterate = function (values) {
    this._values = values;
    var value;
    var i;
    var length = values.length;
    if (this._initialValue !== undefined) {
        value = this._initialValue;
        i = 0;
    } else {
        value = Promise.resolve(values[0]);
        i = 1;
    }

    this._currentCancellable = value;

    for (var j = i; j < length; ++j) {
        var maybePromise = values[j];
        if (maybePromise instanceof Promise) {
            maybePromise.suppressUnhandledRejections();
        }
    }

    if (!value.isRejected()) {
        for (; i < length; ++i) {
            var ctx = {
                accum: null,
                value: values[i],
                index: i,
                length: length,
                array: this
            };

            value = value._then(gotAccum, undefined, undefined, ctx, undefined);

            if ((i & 127) === 0) {
                value._setNoAsyncGuarantee();
            }
        }
    }

    if (this._eachValues !== undefined) {
        value = value
            ._then(this._eachComplete, undefined, undefined, this, undefined);
    }
    value._then(completed, completed, undefined, value, this);
};

Promise.prototype.reduce = function (fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function (promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};

function completed(valueOrReason, array) {
    if (this.isFulfilled()) {
        array._resolve(valueOrReason);
    } else {
        array._reject(valueOrReason);
    }
}

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

function gotAccum(accum) {
    this.accum = accum;
    this.array._gotAccum(accum);
    var value = tryConvertToPromise(this.value, this.array._promise);
    if (value instanceof Promise) {
        this.array._currentCancellable = value;
        return value._then(gotValue, undefined, undefined, this, undefined);
    } else {
        return gotValue.call(this, value);
    }
}

function gotValue(value) {
    var array = this.array;
    var promise = array._promise;
    var fn = tryCatch(array._fn);
    promise._pushContext();
    var ret;
    if (array._eachValues !== undefined) {
        ret = fn.call(promise._boundValue(), value, this.index, this.length);
    } else {
        ret = fn.call(promise._boundValue(),
                              this.accum, value, this.index, this.length);
    }
    if (ret instanceof Promise) {
        array._currentCancellable = ret;
    }
    var promiseCreated = promise._popContext();
    debug.checkForgottenReturns(
        ret,
        promiseCreated,
        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
        promise
    );
    return ret;
}
};

},{"./util":36}],29:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var schedule;
var noAsyncScheduler = function() {
    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var NativePromise = util.getNativePromise();
if (util.isNode && typeof MutationObserver === "undefined") {
    var GlobalSetImmediate = global.setImmediate;
    var ProcessNextTick = process.nextTick;
    schedule = util.isRecentNode
                ? function(fn) { GlobalSetImmediate.call(global, fn); }
                : function(fn) { ProcessNextTick.call(process, fn); };
} else if (typeof NativePromise === "function" &&
           typeof NativePromise.resolve === "function") {
    var nativePromise = NativePromise.resolve();
    schedule = function(fn) {
        nativePromise.then(fn);
    };
} else if ((typeof MutationObserver !== "undefined") &&
          !(typeof window !== "undefined" &&
            window.navigator &&
            (window.navigator.standalone || window.cordova)) &&
          ("classList" in document.documentElement)) {
    schedule = (function() {
        var div = document.createElement("div");
        var opts = {attributes: true};
        var toggleScheduled = false;
        var div2 = document.createElement("div");
        var o2 = new MutationObserver(function() {
            div.classList.toggle("foo");
            toggleScheduled = false;
        });
        o2.observe(div2, opts);

        var scheduleToggle = function() {
            if (toggleScheduled) return;
            toggleScheduled = true;
            div2.classList.toggle("foo");
        };

        return function schedule(fn) {
            var o = new MutationObserver(function() {
                o.disconnect();
                fn();
            });
            o.observe(div, opts);
            scheduleToggle();
        };
    })();
} else if (typeof setImmediate !== "undefined") {
    schedule = function (fn) {
        setImmediate(fn);
    };
} else if (typeof setTimeout !== "undefined") {
    schedule = function (fn) {
        setTimeout(fn, 0);
    };
} else {
    schedule = noAsyncScheduler;
}
module.exports = schedule;

},{"./util":36}],30:[function(_dereq_,module,exports){
"use strict";
module.exports =
    function(Promise, PromiseArray, debug) {
var PromiseInspection = Promise.PromiseInspection;
var util = _dereq_("./util");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var ret = new PromiseInspection();
    ret._bitField = 33554432;
    ret._settledValueField = value;
    return this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
    var ret = new PromiseInspection();
    ret._bitField = 16777216;
    ret._settledValueField = reason;
    return this._promiseResolved(index, ret);
};

Promise.settle = function (promises) {
    debug.deprecated(".settle()", ".reflect()");
    return new SettledPromiseArray(promises).promise();
};

Promise.allSettled = function (promises) {
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function () {
    return Promise.settle(this);
};
};

},{"./util":36}],31:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = _dereq_("./util");
var RangeError = _dereq_("./errors").RangeError;
var AggregateError = _dereq_("./errors").AggregateError;
var isArray = util.isArray;
var CANCELLATION = {};


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function () {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(undefined, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function () {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function () {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function () {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany = function (count) {
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled = function (value) {
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
        return true;
    }
    return false;

};
SomePromiseArray.prototype._promiseRejected = function (reason) {
    this._addRejected(reason);
    return this._checkOutcome();
};

SomePromiseArray.prototype._promiseCancelled = function () {
    if (this._values instanceof Promise || this._values == null) {
        return this._cancel();
    }
    this._addRejected(CANCELLATION);
    return this._checkOutcome();
};

SomePromiseArray.prototype._checkOutcome = function() {
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            if (this._values[i] !== CANCELLATION) {
                e.push(this._values[i]);
            }
        }
        if (e.length > 0) {
            this._reject(e);
        } else {
            this._cancel();
        }
        return true;
    }
    return false;
};

SomePromiseArray.prototype._fulfilled = function () {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function () {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected = function (reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled = function (value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill = function () {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError = function (count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray = function () {
    this._reject(this._getRangeError(0));
};

function some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function (promises, howMany) {
    return some(promises, howMany);
};

Promise.prototype.some = function (howMany) {
    return some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== undefined) {
        promise = promise._target();
        this._bitField = promise._bitField;
        this._settledValueField = promise._isFateSealed()
            ? promise._settledValue() : undefined;
    }
    else {
        this._bitField = 0;
        this._settledValueField = undefined;
    }
}

PromiseInspection.prototype._settledValue = function() {
    return this._settledValueField;
};

var value = PromiseInspection.prototype.value = function () {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var reason = PromiseInspection.prototype.error =
PromiseInspection.prototype.reason = function () {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
    return (this._bitField & 33554432) !== 0;
};

var isRejected = PromiseInspection.prototype.isRejected = function () {
    return (this._bitField & 16777216) !== 0;
};

var isPending = PromiseInspection.prototype.isPending = function () {
    return (this._bitField & 50397184) === 0;
};

var isResolved = PromiseInspection.prototype.isResolved = function () {
    return (this._bitField & 50331648) !== 0;
};

PromiseInspection.prototype.isCancelled = function() {
    return (this._bitField & 8454144) !== 0;
};

Promise.prototype.__isCancelled = function() {
    return (this._bitField & 65536) === 65536;
};

Promise.prototype._isCancelled = function() {
    return this._target().__isCancelled();
};

Promise.prototype.isCancelled = function() {
    return (this._target()._bitField & 8454144) !== 0;
};

Promise.prototype.isPending = function() {
    return isPending.call(this._target());
};

Promise.prototype.isRejected = function() {
    return isRejected.call(this._target());
};

Promise.prototype.isFulfilled = function() {
    return isFulfilled.call(this._target());
};

Promise.prototype.isResolved = function() {
    return isResolved.call(this._target());
};

Promise.prototype.value = function() {
    return value.call(this._target());
};

Promise.prototype.reason = function() {
    var target = this._target();
    target._unsetRejectionIsUnhandled();
    return reason.call(target);
};

Promise.prototype._value = function() {
    return this._settledValue();
};

Promise.prototype._reason = function() {
    this._unsetRejectionIsUnhandled();
    return this._settledValue();
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],33:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util");
var errorObj = util.errorObj;
var isObject = util.isObject;

function tryConvertToPromise(obj, context) {
    if (isObject(obj)) {
        if (obj instanceof Promise) return obj;
        var then = getThen(obj);
        if (then === errorObj) {
            if (context) context._pushContext();
            var ret = Promise.reject(then.e);
            if (context) context._popContext();
            return ret;
        } else if (typeof then === "function") {
            if (isAnyBluebirdPromise(obj)) {
                var ret = new Promise(INTERNAL);
                obj._then(
                    ret._fulfill,
                    ret._reject,
                    undefined,
                    ret,
                    null
                );
                return ret;
            }
            return doThenable(obj, then, context);
        }
    }
    return obj;
}

function doGetThen(obj) {
    return obj.then;
}

function getThen(obj) {
    try {
        return doGetThen(obj);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    try {
        return hasProp.call(obj, "_promise0");
    } catch (e) {
        return false;
    }
}

function doThenable(x, then, context) {
    var promise = new Promise(INTERNAL);
    var ret = promise;
    if (context) context._pushContext();
    promise._captureStackTrace();
    if (context) context._popContext();
    var synchronous = true;
    var result = util.tryCatch(then).call(x, resolve, reject);
    synchronous = false;

    if (promise && result === errorObj) {
        promise._rejectCallback(result.e, true, true);
        promise = null;
    }

    function resolve(value) {
        if (!promise) return;
        promise._resolveCallback(value);
        promise = null;
    }

    function reject(reason) {
        if (!promise) return;
        promise._rejectCallback(reason, synchronous, true);
        promise = null;
    }
    return ret;
}

return tryConvertToPromise;
};

},{"./util":36}],34:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, debug) {
var util = _dereq_("./util");
var TimeoutError = Promise.TimeoutError;

function HandleWrapper(handle)  {
    this.handle = handle;
}

HandleWrapper.prototype._resultCancelled = function() {
    clearTimeout(this.handle);
};

var afterValue = function(value) { return delay(+this).thenReturn(value); };
var delay = Promise.delay = function (ms, value) {
    var ret;
    var handle;
    if (value !== undefined) {
        ret = Promise.resolve(value)
                ._then(afterValue, null, null, ms, undefined);
        if (debug.cancellation() && value instanceof Promise) {
            ret._setOnCancel(value);
        }
    } else {
        ret = new Promise(INTERNAL);
        handle = setTimeout(function() { ret._fulfill(); }, +ms);
        if (debug.cancellation()) {
            ret._setOnCancel(new HandleWrapper(handle));
        }
        ret._captureStackTrace();
    }
    ret._setAsyncGuaranteed();
    return ret;
};

Promise.prototype.delay = function (ms) {
    return delay(ms, this);
};

var afterTimeout = function (promise, message, parent) {
    var err;
    if (typeof message !== "string") {
        if (message instanceof Error) {
            err = message;
        } else {
            err = new TimeoutError("operation timed out");
        }
    } else {
        err = new TimeoutError(message);
    }
    util.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._reject(err);

    if (parent != null) {
        parent.cancel();
    }
};

function successClear(value) {
    clearTimeout(this.handle);
    return value;
}

function failureClear(reason) {
    clearTimeout(this.handle);
    throw reason;
}

Promise.prototype.timeout = function (ms, message) {
    ms = +ms;
    var ret, parent;

    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
        if (ret.isPending()) {
            afterTimeout(ret, message, parent);
        }
    }, ms));

    if (debug.cancellation()) {
        parent = this.then();
        ret = parent._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
        ret._setOnCancel(handleWrapper);
    } else {
        ret = this._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
    }

    return ret;
};

};

},{"./util":36}],35:[function(_dereq_,module,exports){
"use strict";
module.exports = function (Promise, apiRejection, tryConvertToPromise,
    createContext, INTERNAL, debug) {
    var util = _dereq_("./util");
    var TypeError = _dereq_("./errors").TypeError;
    var inherits = _dereq_("./util").inherits;
    var errorObj = util.errorObj;
    var tryCatch = util.tryCatch;
    var NULL = {};

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = tryConvertToPromise(thenable);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = new Promise(INTERNAL);
        function iterator() {
            if (i >= len) return ret._fulfill();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = tryConvertToPromise(
                        maybePromise._getDisposer().tryDispose(inspection),
                        resources.promise);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret;
    }

    function Disposer(data, promise, context) {
        this._data = data;
        this._promise = promise;
        this._context = context;
    }

    Disposer.prototype.data = function () {
        return this._data;
    };

    Disposer.prototype.promise = function () {
        return this._promise;
    };

    Disposer.prototype.resource = function () {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return NULL;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var context = this._context;
        if (context !== undefined) context._pushContext();
        var ret = resource !== NULL
            ? this.doDispose(resource, inspection) : null;
        if (context !== undefined) context._popContext();
        this._promise._unsetDisposable();
        this._data = null;
        return ret;
    };

    Disposer.isDisposer = function (d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise, context) {
        this.constructor$(fn, promise, context);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    function maybeUnwrapDisposer(value) {
        if (Disposer.isDisposer(value)) {
            this.resources[this.index]._setDisposable(value);
            return value.promise();
        }
        return value;
    }

    function ResourceList(length) {
        this.length = length;
        this.promise = null;
        this[length-1] = null;
    }

    ResourceList.prototype._resultCancelled = function() {
        var len = this.length;
        for (var i = 0; i < len; ++i) {
            var item = this[i];
            if (item instanceof Promise) {
                item.cancel();
            }
        }
    };

    Promise.using = function () {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") {
            return apiRejection("expecting a function but got " + util.classString(fn));
        }
        var input;
        var spreadArgs = true;
        if (len === 2 && Array.isArray(arguments[0])) {
            input = arguments[0];
            len = input.length;
            spreadArgs = false;
        } else {
            input = arguments;
            len--;
        }
        var resources = new ResourceList(len);
        for (var i = 0; i < len; ++i) {
            var resource = input[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            } else {
                var maybePromise = tryConvertToPromise(resource);
                if (maybePromise instanceof Promise) {
                    resource =
                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                            resources: resources,
                            index: i
                    }, undefined);
                }
            }
            resources[i] = resource;
        }

        var reflectedResources = new Array(resources.length);
        for (var i = 0; i < reflectedResources.length; ++i) {
            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
        }

        var resultPromise = Promise.all(reflectedResources)
            .then(function(inspections) {
                for (var i = 0; i < inspections.length; ++i) {
                    var inspection = inspections[i];
                    if (inspection.isRejected()) {
                        errorObj.e = inspection.error();
                        return errorObj;
                    } else if (!inspection.isFulfilled()) {
                        resultPromise.cancel();
                        return;
                    }
                    inspections[i] = inspection.value();
                }
                promise._pushContext();

                fn = tryCatch(fn);
                var ret = spreadArgs
                    ? fn.apply(undefined, inspections) : fn(inspections);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(
                    ret, promiseCreated, "Promise.using", promise);
                return ret;
            });

        var promise = resultPromise.lastly(function() {
            var inspection = new Promise.PromiseInspection(resultPromise);
            return dispose(resources, inspection);
        });
        resources.promise = promise;
        promise._setOnCancel(resources);
        return promise;
    };

    Promise.prototype._setDisposable = function (disposer) {
        this._bitField = this._bitField | 131072;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function () {
        return (this._bitField & 131072) > 0;
    };

    Promise.prototype._getDisposer = function () {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function () {
        this._bitField = this._bitField & (~131072);
        this._disposer = undefined;
    };

    Promise.prototype.disposer = function (fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this, createContext());
        }
        throw new TypeError();
    };

};

},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var canEvaluate = typeof navigator == "undefined";

var errorObj = {e: {}};
var tryCatchTarget;
var globalObject = typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    typeof global !== "undefined" ? global :
    this !== undefined ? this : null;

function tryCatcher() {
    try {
        var target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};


function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return typeof value === "function" ||
           typeof value === "object" && value !== null;
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(safeToString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);

        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    var excludedPrototypes = [
        Array.prototype,
        Object.prototype,
        Function.prototype
    ];

    var isExcludedProto = function(val) {
        for (var i = 0; i < excludedPrototypes.length; ++i) {
            if (excludedPrototypes[i] === val) {
                return true;
            }
        }
        return false;
    };

    if (es5.isES5) {
        var getKeys = Object.getOwnPropertyNames;
        return function(obj) {
            var ret = [];
            var visitedKeys = Object.create(null);
            while (obj != null && !isExcludedProto(obj)) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        var hasProp = {}.hasOwnProperty;
        return function(obj) {
            if (isExcludedProto(obj)) return [];
            var ret = [];

            /*jshint forin:false */
            enumeration: for (var key in obj) {
                if (hasProp.call(obj, key)) {
                    ret.push(key);
                } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                        if (hasProp.call(excludedPrototypes[i], key)) {
                            continue enumeration;
                        }
                    }
                    ret.push(key);
                }
            }
            return ret;
        };
    }

})();

var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.names(fn.prototype);

            var hasMethods = es5.isES5 && keys.length > 1;
            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                !(keys.length === 1 && keys[0] === "constructor");
            var hasThisAssignmentAndStaticMethods =
                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

            if (hasMethods || hasMethodsOtherThanConstructor ||
                hasThisAssignmentAndStaticMethods) {
                return true;
            }
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027,-W055,-W031*/
    function FakeConstructor() {}
    FakeConstructor.prototype = obj;
    var receiver = new FakeConstructor();
    function ic() {
        return typeof receiver.foo;
    }
    ic();
    ic();
    return obj;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

function safeToString(obj) {
    try {
        return obj + "";
    } catch (e) {
        return "[no string representation]";
    }
}

function isError(obj) {
    return obj instanceof Error ||
        (obj !== null &&
           typeof obj === "object" &&
           typeof obj.message === "string" &&
           typeof obj.name === "string");
}

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
        e["isOperational"] === true);
}

function canAttachTrace(obj) {
    return isError(obj) && es5.propertyIsWritable(obj, "stack");
}

var ensureErrorObject = (function() {
    if (!("stack" in new Error())) {
        return function(value) {
            if (canAttachTrace(value)) return value;
            try {throw new Error(safeToString(value));}
            catch(err) {return err;}
        };
    } else {
        return function(value) {
            if (canAttachTrace(value)) return value;
            return new Error(safeToString(value));
        };
    }
})();

function classString(obj) {
    return {}.toString.call(obj);
}

function copyDescriptors(from, to, filter) {
    var keys = es5.names(from);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (filter(key)) {
            try {
                es5.defineProperty(to, key, es5.getDescriptor(from, key));
            } catch (ignore) {}
        }
    }
}

var asArray = function(v) {
    if (es5.isArray(v)) {
        return v;
    }
    return null;
};

if (typeof Symbol !== "undefined" && Symbol.iterator) {
    var ArrayFrom = typeof Array.from === "function" ? function(v) {
        return Array.from(v);
    } : function(v) {
        var ret = [];
        var it = v[Symbol.iterator]();
        var itResult;
        while (!((itResult = it.next()).done)) {
            ret.push(itResult.value);
        }
        return ret;
    };

    asArray = function(v) {
        if (es5.isArray(v)) {
            return v;
        } else if (v != null && typeof v[Symbol.iterator] === "function") {
            return ArrayFrom(v);
        }
        return null;
    };
}

var isNode = typeof process !== "undefined" &&
        classString(process).toLowerCase() === "[object process]";

var hasEnvVariables = typeof process !== "undefined" &&
    typeof process.env !== "undefined";

function env(key) {
    return hasEnvVariables ? process.env[key] : undefined;
}

function getNativePromise() {
    if (typeof Promise === "function") {
        try {
            var promise = new Promise(function(){});
            if (classString(promise) === "[object Promise]") {
                return Promise;
            }
        } catch (e) {}
    }
}

var reflectHandler;
function contextBind(ctx, cb) {
    if (ctx === null ||
        typeof cb !== "function" ||
        cb === reflectHandler) {
        return cb;
    }

    if (ctx.domain !== null) {
        cb = ctx.domain.bind(cb);
    }

    var async = ctx.async;
    if (async !== null) {
        var old = cb;
        cb = function() {
            var args = (new Array(2)).concat([].slice.call(arguments));;
            args[0] = old;
            args[1] = this;
            return async.runInAsyncScope.apply(async, args);
        };
    }
    return cb;
}

var ret = {
    setReflectHandler: function(fn) {
        reflectHandler = fn;
    },
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    asArray: asArray,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    isError: isError,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch: tryCatch,
    inherits: inherits,
    withAppended: withAppended,
    maybeWrapAsError: maybeWrapAsError,
    toFastProperties: toFastProperties,
    filledRange: filledRange,
    toString: safeToString,
    canAttachTrace: canAttachTrace,
    ensureErrorObject: ensureErrorObject,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    classString: classString,
    copyDescriptors: copyDescriptors,
    isNode: isNode,
    hasEnvVariables: hasEnvVariables,
    env: env,
    global: globalObject,
    getNativePromise: getNativePromise,
    contextBind: contextBind
};
ret.isRecentNode = ret.isNode && (function() {
    var version;
    if (process.versions && process.versions.node) {
        version = process.versions.node.split(".").map(Number);
    } else if (process.version) {
        version = process.version.split(".").map(Number);
    }
    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
})();
ret.nodeSupportsAsyncResource = ret.isNode && (function() {
    var supportsAsync = false;
    try {
        var res = _dereq_("async_hooks").AsyncResource;
        supportsAsync = typeof res.prototype.runInAsyncScope === "function";
    } catch (e) {
        supportsAsync = false;
    }
    return supportsAsync;
})();

if (ret.isNode) ret.toFastProperties(process);

try {throw new Error(); } catch (e) {ret.lastLineError = e;}
module.exports = ret;

},{"./es5":13,"async_hooks":undefined}]},{},[4])(4)
});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(61), __webpack_require__(31), __webpack_require__(874).setImmediate))

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(875);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)))

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31), __webpack_require__(61)))

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(372);
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.3.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  title: '',
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  offset: 0,
  arrowSelector: '.tooltip-arrow, .tooltip__arrow',
  innerSelector: '.tooltip-inner, .tooltip__inner'
};

var Tooltip = function () {
  /**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param {Object} options
   * @param {String} options.placement='top'
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param {String} [options.arrowSelector='.tooltip-arrow, .tooltip__arrow'] - className used to locate the DOM arrow element in the tooltip.
   * @param {String} [options.innerSelector='.tooltip-inner, .tooltip__inner'] - className used to locate the DOM inner element in the tooltip.
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `textContent`.
   * @param {String} [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
   * @param {String} [options.trigger='hover focus']
   *      How tooltip is triggered - click, hover, focus, manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param {Boolean} options.closeOnClickOutside=false - Close a popper on click outside of the popper and reference element. This has effect only when options.trigger is 'click'.
   * @param {String|HTMLElement} options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @param {Object} options.popperOptions={} - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
   *      [options docs](https://popper.js.org/popper-documentation.html)
   * @return {Object} instance - The generated tooltip instance
   */
  function Tooltip(reference, options) {
    classCallCheck(this, Tooltip);

    _initialiseProps.call(this);

    // apply user options over default ones
    options = _extends({}, DEFAULT_OPTIONS, options);

    reference.jquery && (reference = reference[0]);

    // cache reference and options
    this.reference = reference;
    this.options = options;

    // get events list
    var events = typeof options.trigger === 'string' ? options.trigger.split(' ').filter(function (trigger) {
      return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
    }) : [];

    // set initial state
    this._isOpen = false;
    this._popperOptions = {};

    // set event listeners
    this._setEventListeners(reference, events, options);
  }

  //
  // Public methods
  //

  /**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @method Tooltip#show
   * @memberof Tooltip
   */


  /**
   * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#hide
   * @memberof Tooltip
   */


  /**
   * Hides and destroys an element’s tooltip.
   * @method Tooltip#dispose
   * @memberof Tooltip
   */


  /**
   * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#toggle
   * @memberof Tooltip
   */


  /**
   * Updates the tooltip's title content
   * @method Tooltip#updateTitleContent
   * @memberof Tooltip
   * @param {String|HTMLElement} title - The new content to use for the title
   */


  //
  // Private methods
  //

  createClass(Tooltip, [{
    key: '_create',


    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLElement} tooltipNode
     */
    value: function _create(reference, template, title, allowHtml) {
      // create tooltip element
      var tooltipGenerator = window.document.createElement('div');
      tooltipGenerator.innerHTML = template.trim();
      var tooltipNode = tooltipGenerator.childNodes[0];

      // add unique ID to our tooltip (needed for accessibility reasons)
      tooltipNode.id = 'tooltip_' + Math.random().toString(36).substr(2, 10);

      // set initial `aria-hidden` state to `false` (it's visible!)
      tooltipNode.setAttribute('aria-hidden', 'false');

      // add title to tooltip
      var titleNode = tooltipGenerator.querySelector(this.options.innerSelector);
      this._addTitleContent(reference, title, allowHtml, titleNode);

      // return the generated tooltip node
      return tooltipNode;
    }
  }, {
    key: '_addTitleContent',
    value: function _addTitleContent(reference, title, allowHtml, titleNode) {
      if (title.nodeType === 1 || title.nodeType === 11) {
        // if title is a element node or document fragment, append it only if allowHtml is true
        allowHtml && titleNode.appendChild(title);
      } else if (isFunction(title)) {
        // Recursively call ourself so that the return value of the function gets handled appropriately - either
        // as a dom node, a string, or even as another function.
        this._addTitleContent(reference, title.call(reference), allowHtml, titleNode);
      } else {
        // if it's just a simple text, set textContent or innerHtml depending by `allowHtml` value
        allowHtml ? titleNode.innerHTML = title : titleNode.textContent = title;
      }
    }
  }, {
    key: '_show',
    value: function _show(reference, options) {
      // don't show if it's already visible
      // or if it's not being showed
      if (this._isOpen && !this._isOpening) {
        return this;
      }
      this._isOpen = true;

      // if the tooltipNode already exists, just show it
      if (this._tooltipNode) {
        this._tooltipNode.style.visibility = 'visible';
        this._tooltipNode.setAttribute('aria-hidden', 'false');
        this.popperInstance.update();
        return this;
      }

      // get title
      var title = reference.getAttribute('title') || options.title;

      // don't show tooltip if no title is defined
      if (!title) {
        return this;
      }

      // create tooltip node
      var tooltipNode = this._create(reference, options.template, title, options.html);

      // Add `aria-describedby` to our reference element for accessibility reasons
      reference.setAttribute('aria-describedby', tooltipNode.id);

      // append tooltip to container
      var container = this._findContainer(options.container, reference);

      this._append(tooltipNode, container);

      this._popperOptions = _extends({}, options.popperOptions, {
        placement: options.placement
      });

      this._popperOptions.modifiers = _extends({}, this._popperOptions.modifiers, {
        arrow: _extends({}, this._popperOptions.modifiers && this._popperOptions.modifiers.arrow, {
          element: options.arrowSelector
        }),
        offset: _extends({}, this._popperOptions.modifiers && this._popperOptions.modifiers.offset, {
          offset: options.offset || this._popperOptions.modifiers && this._popperOptions.modifiers.offset && this._popperOptions.modifiers.offset.offset || options.offset
        })
      });

      if (options.boundariesElement) {
        this._popperOptions.modifiers.preventOverflow = {
          boundariesElement: options.boundariesElement
        };
      }

      this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](reference, tooltipNode, this._popperOptions);

      this._tooltipNode = tooltipNode;

      return this;
    }
  }, {
    key: '_hide',
    value: function _hide() /*reference, options*/{
      // don't hide if it's already hidden
      if (!this._isOpen) {
        return this;
      }

      this._isOpen = false;

      // hide tooltipNode
      this._tooltipNode.style.visibility = 'hidden';
      this._tooltipNode.setAttribute('aria-hidden', 'true');

      return this;
    }
  }, {
    key: '_dispose',
    value: function _dispose() {
      var _this = this;

      // remove event listeners first to prevent any unexpected behaviour
      this._events.forEach(function (_ref) {
        var func = _ref.func,
            event = _ref.event;

        _this.reference.removeEventListener(event, func);
      });
      this._events = [];

      if (this._tooltipNode) {
        this._hide();

        // destroy instance
        this.popperInstance.destroy();

        // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element
        if (!this.popperInstance.options.removeOnDestroy) {
          this._tooltipNode.parentNode.removeChild(this._tooltipNode);
          this._tooltipNode = null;
        }
      }
      return this;
    }
  }, {
    key: '_findContainer',
    value: function _findContainer(container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      }
      return container;
    }

    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} tooltipNode
     * @param {HTMLElement|String|false} container
     */

  }, {
    key: '_append',
    value: function _append(tooltipNode, container) {
      container.appendChild(tooltipNode);
    }
  }, {
    key: '_setEventListeners',
    value: function _setEventListeners(reference, events, options) {
      var _this2 = this;

      var directEvents = [];
      var oppositeEvents = [];

      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
            break;
          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
            break;
          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
            break;
        }
      });

      // schedule show tooltip
      directEvents.forEach(function (event) {
        var func = function func(evt) {
          if (_this2._isOpening === true) {
            return;
          }
          evt.usedByTooltip = true;
          _this2._scheduleShow(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
      });

      // schedule hide tooltip
      oppositeEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.usedByTooltip === true) {
            return;
          }
          _this2._scheduleHide(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
        if (event === 'click' && options.closeOnClickOutside) {
          document.addEventListener('mousedown', function (e) {
            if (!_this2._isOpening) {
              return;
            }
            var popper = _this2.popperInstance.popper;
            if (reference.contains(e.target) || popper.contains(e.target)) {
              return;
            }
            func(e);
          }, true);
        }
      });
    }
  }, {
    key: '_scheduleShow',
    value: function _scheduleShow(reference, delay, options /*, evt */) {
      var _this3 = this;

      this._isOpening = true;
      // defaults to 0
      var computedDelay = delay && delay.show || delay || 0;
      this._showTimeout = window.setTimeout(function () {
        return _this3._show(reference, options);
      }, computedDelay);
    }
  }, {
    key: '_scheduleHide',
    value: function _scheduleHide(reference, delay, options, evt) {
      var _this4 = this;

      this._isOpening = false;
      // defaults to 0
      var computedDelay = delay && delay.hide || delay || 0;
      window.clearTimeout(this._showTimeout);
      window.setTimeout(function () {
        if (_this4._isOpen === false) {
          return;
        }
        if (!document.body.contains(_this4._tooltipNode)) {
          return;
        }

        // if we are hiding because of a mouseleave, we must check that the new
        // reference isn't the tooltip, because in this case we don't want to hide it
        if (evt.type === 'mouseleave') {
          var isSet = _this4._setTooltipNodeEvent(evt, reference, delay, options);

          // if we set the new event, don't hide the tooltip yet
          // the new event will take care to hide it if necessary
          if (isSet) {
            return;
          }
        }

        _this4._hide(reference, options);
      }, computedDelay);
    }
  }, {
    key: '_updateTitleContent',
    value: function _updateTitleContent(title) {
      if (typeof this._tooltipNode === 'undefined') {
        if (typeof this.options.title !== 'undefined') {
          this.options.title = title;
        }
        return;
      }
      var titleNode = this._tooltipNode.querySelector(this.options.innerSelector);
      this._clearTitleContent(titleNode, this.options.html, this.reference.getAttribute('title') || this.options.title);
      this._addTitleContent(this.reference, title, this.options.html, titleNode);
      this.options.title = title;
      this.popperInstance.update();
    }
  }, {
    key: '_clearTitleContent',
    value: function _clearTitleContent(titleNode, allowHtml, lastTitle) {
      if (lastTitle.nodeType === 1 || lastTitle.nodeType === 11) {
        allowHtml && titleNode.removeChild(lastTitle);
      } else {
        allowHtml ? titleNode.innerHTML = '' : titleNode.textContent = '';
      }
    }
  }]);
  return Tooltip;
}();

/**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return {String} placement - The desired title.
 */


var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.show = function () {
    return _this5._show(_this5.reference, _this5.options);
  };

  this.hide = function () {
    return _this5._hide();
  };

  this.dispose = function () {
    return _this5._dispose();
  };

  this.toggle = function () {
    if (_this5._isOpen) {
      return _this5.hide();
    } else {
      return _this5.show();
    }
  };

  this.updateTitleContent = function (title) {
    return _this5._updateTitleContent(title);
  };

  this._events = [];

  this._setTooltipNodeEvent = function (evt, reference, delay, options) {
    var relatedreference = evt.relatedreference || evt.toElement || evt.relatedTarget;

    var callback = function callback(evt2) {
      var relatedreference2 = evt2.relatedreference || evt2.toElement || evt2.relatedTarget;

      // Remove event listener after call
      _this5._tooltipNode.removeEventListener(evt.type, callback);

      // If the new reference is not the reference element
      if (!reference.contains(relatedreference2)) {
        // Schedule to hide tooltip
        _this5._scheduleHide(reference, options.delay, options, evt2);
      }
    };

    if (_this5._tooltipNode.contains(relatedreference)) {
      // listen to mouseleave on the tooltip element to be able to hide the tooltip
      _this5._tooltipNode.addEventListener(evt.type, callback);
      return true;
    }

    return false;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);
//# sourceMappingURL=tooltip.js.map


/***/ }),

/***/ 877:
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
exports.Tooltip = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const react_i18next_1 = __webpack_require__(8);
const constants_1 = __webpack_require__(25);
const StarIcon_1 = __webpack_require__(128);
const CloseIcon3_1 = __webpack_require__(878);
const CheckedByAliradar_1 = __webpack_require__(879);
const ErrorText_1 = __webpack_require__(881);
const tooltipMetrics_1 = __webpack_require__(98);
const GlobalStyles_1 = __webpack_require__(884);
const Seller_1 = __webpack_require__(886);
const PriceInfo_1 = __webpack_require__(888);
const OpenProductButton_1 = __webpack_require__(890);
const SimilarButton_1 = __webpack_require__(892);
const Similars_1 = __webpack_require__(895);
const Tooltip_utils_1 = __webpack_require__(897);
const S = __importStar(__webpack_require__(898));
const Tooltip = ({ hideTooltip, tooltipLink, hide, selectors: { tooltipSelector, arrowSelector, innerSelector } }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const { t } = react_i18next_1.useTranslation();
    const locale = react_redux_1.useSelector(({ settings }) => { var _a; return (_a = settings === null || settings === void 0 ? void 0 : settings.locale) === null || _a === void 0 ? void 0 : _a.value; });
    const allSites = react_redux_1.useSelector(({ allSites }) => allSites);
    const { noOneHover, init, data, index } = allSites;
    const { isShowSimilar } = react_redux_1.useSelector(({ tooltipUI }) => tooltipUI);
    const similars = react_redux_1.useSelector(({ similar }) => similar === null || similar === void 0 ? void 0 : similar.similars);
    const curr = (_f = (_e = (_d = (_b = (_a = data === null || data === void 0 ? void 0 : data.priceStats) === null || _a === void 0 ? void 0 : _a.curr) !== null && _b !== void 0 ? _b : (_c = data === null || data === void 0 ? void 0 : data.lastPrice) === null || _c === void 0 ? void 0 : _c.curr) !== null && _d !== void 0 ? _d : data === null || data === void 0 ? void 0 : data.curr) !== null && _e !== void 0 ? _e : data === null || data === void 0 ? void 0 : data.userCurr) !== null && _f !== void 0 ? _f : 'USD';
    const currencySymbol = constants_1.MAP_CURRENCY_CODE_TO_SYMBOL[curr] || curr;
    const { priceNotChanged, priceIncreased, roundedPriceChangePercentAbs } = Tooltip_utils_1.calcPrices(data === null || data === void 0 ? void 0 : data.prices, (_g = data === null || data === void 0 ? void 0 : data.priceStats) === null || _g === void 0 ? void 0 : _g.max, (_h = data === null || data === void 0 ? void 0 : data.priceStats) === null || _h === void 0 ? void 0 : _h.min);
    return (react_1.default.createElement(react_1.default.Fragment, null, !noOneHover && init && (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(GlobalStyles_1.GlobalStyles, { selectors: {
                tooltipSelector,
                arrowSelector,
                innerSelector
            } }),
        react_1.default.createElement(S.StyledInfo, null,
            react_1.default.createElement(S.StyledAppBar, null,
                react_1.default.createElement(CheckedByAliradar_1.CheckedByAliradar, null),
                react_1.default.createElement(S.StyledAppBarButtons, null,
                    react_1.default.createElement(S.StyledAppBarGear, { onClick: () => window.open(chrome.runtime.getURL('/settings.html')), withBg: false, size: 17 }),
                    react_1.default.createElement(CloseIcon3_1.CloseIcon3, { onClick: () => {
                            tooltipMetrics_1.closed();
                            hide(index, true);
                            hideTooltip();
                        } }))),
            react_1.default.createElement(S.StyledInfoBody, null,
                react_1.default.createElement(S.Left, null,
                    react_1.default.createElement(S.ImgBlock, null,
                        react_1.default.createElement("img", { src: (_j = data === null || data === void 0 ? void 0 : data.imageurl) !== null && _j !== void 0 ? _j : chrome.runtime.getURL('/assets/img/image_placeholder.svg'), alt: "" }))),
                react_1.default.createElement(S.Right, null,
                    (data === null || data === void 0 ? void 0 : data.priceStats) && ((data === null || data === void 0 ? void 0 : data.name) || (data === null || data === void 0 ? void 0 : data.namerus) || (data === null || data === void 0 ? void 0 : data.nameeng)) && (react_1.default.createElement(PriceInfo_1.PriceInfo, { currency: currencySymbol, minPrice: data.priceStats.min, maxPrice: data.priceStats.max, priceNotChanged: priceNotChanged, priceIncreased: priceIncreased, roundedPriceChangePercentAbs: roundedPriceChangePercentAbs })),
                    react_1.default.createElement(S.Text, null, (locale === 'ru' && (data === null || data === void 0 ? void 0 : data.namerus)) || (data === null || data === void 0 ? void 0 : data.nameeng) || (data === null || data === void 0 ? void 0 : data.namerus)),
                    react_1.default.createElement(S.StyledProduct, null,
                        react_1.default.createElement(Seller_1.Seller, { seller: data === null || data === void 0 ? void 0 : data.detailedSeller }),
                        react_1.default.createElement(S.VerticalLine, null),
                        react_1.default.createElement(S.StyledProductInfo, null,
                            react_1.default.createElement(S.StyledProductRaiting, null,
                                react_1.default.createElement(S.StyledProductRaitingText, null, data.rating),
                                react_1.default.createElement(StarIcon_1.StarIcon, { fill: '#b2b5bb', color: '#b2b5bb' })),
                            react_1.default.createElement(S.StyledProductItem, null,
                                react_1.default.createElement(S.StyledProductInfoText, null, `${data.tradecount ? data.tradecount : '0'} ${t('itemTooltipOrder_many')}`),
                                react_1.default.createElement(S.StyledProductInfoText, null, `${data.reviews_count ? data.reviews_count : '0'} ${t('itemTooltipReview_many')}`)))),
                    react_1.default.createElement(ErrorText_1.ErrorText, { error: data && data.error }),
                    react_1.default.createElement(S.StyledFooterButtons, null,
                        react_1.default.createElement(OpenProductButton_1.OpenProductButton, { tooltipLink: tooltipLink, productId: data.id, disabled: data.error && data.error.code === 404 }),
                        react_1.default.createElement(SimilarButton_1.SimilarButton, { count: similars.length })))),
            isShowSimilar && react_1.default.createElement(Similars_1.Similars, { similars: similars, tooltipLink: tooltipLink }))))));
};
exports.Tooltip = Tooltip;


/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseIcon3 = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const StyledCloseButtonBlock = styled_components_1.default.div.withConfig({ displayName: "StyledCloseButtonBlock", componentId: "sc-1wp6yks" }) `
	cursor: pointer;
	display: flex;
`;
const CloseIcon3 = ({ onClick }) => {
    return (react_1.default.createElement(StyledCloseButtonBlock, { onClick: onClick },
        react_1.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z", fill: "#B2B5BB" }))));
};
exports.CloseIcon3 = CloseIcon3;


/***/ }),

/***/ 879:
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
exports.CheckedByAliradar = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const FooterAliradarLogo_1 = __webpack_require__(305);
const S = __importStar(__webpack_require__(880));
const CheckedByAliradar = () => {
    const { t } = react_i18next_1.useTranslation();
    return (react_1.default.createElement(S.ByRadar, null,
        react_1.default.createElement(S.Checked, null, t('checked')),
        react_1.default.createElement(S.StyledRadarLogo, null,
            react_1.default.createElement(FooterAliradarLogo_1.FooterAliradarLogo, null))));
};
exports.CheckedByAliradar = CheckedByAliradar;


/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledRadarLogo = exports.Checked = exports.ByRadar = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.ByRadar = styled_components_1.default.div.withConfig({ displayName: "ByRadar", componentId: "sc-uqnsjj" }) `
	bottom: 9px;
	color: #b3b3b3;
	display: block;
	font-size: 9px;
	font-weight: 600;
	line-height: 2;
`;
exports.Checked = styled_components_1.default.span.withConfig({ displayName: "Checked", componentId: "sc-1ey8p8l" }) `
	line-height: 16px;
	vertical-align: bottom;
`;
exports.StyledRadarLogo = styled_components_1.default.div.withConfig({ displayName: "StyledRadarLogo", componentId: "sc-10neq33" }) `
	display: inline-block;
	margin-left: 5px;
	transform: translate(0, 2px);
	width: 55px;

	svg {
		width: 100%;
	}
`;


/***/ }),

/***/ 881:
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
exports.ErrorText = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const tooltipMetrics_1 = __webpack_require__(98);
const ErrorText_utils_1 = __webpack_require__(882);
const S = __importStar(__webpack_require__(883));
const ErrorText = ({ error }) => {
    const { t } = react_i18next_1.useTranslation();
    if (error && error.code) {
        return react_1.default.createElement(S.ErrorText, null, ErrorText_utils_1.getErrorByCode(error, t));
    }
    tooltipMetrics_1.tooltipDisplayedInStock();
    return null;
};
exports.ErrorText = ErrorText;


/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorByCode = void 0;
const tooltipMetrics_1 = __webpack_require__(98);
const getErrorByCode = (error, t) => {
    switch (error.code) {
        case 404:
            tooltipMetrics_1.tooltipDisplayedDeleted();
            return t('itemDeleted');
        case 410:
            tooltipMetrics_1.tooltipDisplayedNotAvailable();
            return t('itemNotAllowed');
        default:
            return t('trackedError_noData');
    }
};
exports.getErrorByCode = getErrorByCode;


/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorText = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.ErrorText = styled_components_1.default.div.withConfig({ displayName: "ErrorText", componentId: "sc-1h1yqa8" }) `
	font-family: 'Open Sans', sans-serif;
	font-size: 12px;
	font-weight: 600;
	margin: 1px 0 5px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	&::before {
		background-image: url('${chrome.runtime.getURL('assets/img/ic_notification.svg')}');
		background-position: center 1px;
		background-repeat: no-repeat;
		background-size: contain;
		content: ' ';
		display: inline-block;
		float: left;
		height: 16px;
		margin-right: 5px;
		width: 16px;
	}
`;


/***/ }),

/***/ 884:
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
exports.GlobalStyles = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __webpack_require__(3);
const S = __importStar(__webpack_require__(885));
const GlobalStyles = ({ selectors }) => (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: {} },
    react_1.default.createElement(S.GlobalStyles, { selectors: selectors })));
exports.GlobalStyles = GlobalStyles;


/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyles = void 0;
const styled_components_1 = __webpack_require__(3);
const getArrowUrl = () => chrome.extension.getURL('assets/img/tooltip_arrow.svg');
exports.GlobalStyles = styled_components_1.createGlobalStyle `
div#gadsf21g {
  @font-face {
    font-family: 'Open Sans Light';
    font-weight: normal;
    font-style: normal;
    src: url("${chrome.extension.getURL('/assets/fonts/OpenSans-Light.ttf')}");
  }
  @font-face {
    font-family: 'Open Sans Bold';
    font-weight: normal;
    font-style: normal;
    src: url("${chrome.extension.getURL('/assets/fonts/OpenSans-Bold.ttf')}");
  }
  @font-face {
    font-family: 'Open Sans';
    font-weight: normal;
    font-style: normal;
    src: url("${chrome.extension.getURL('/assets/fonts/OpenSans-Regular.ttf')}");
  }

  @font-face {
    font-family: 'Open Sans SemiBold';
    font-weight: normal;
    font-style: normal;
    src: url("${chrome.extension.getURL('/assets/fonts/OpenSans-SemiBold.ttf')}");
  }

  z-index: 2147483647!important;
  font-family: "Open Sans Regular","Open Sans Bold", sans-serif;
  position: absolute;
  top:0;
  left: 0;
  line-height: 19px;
  * {
    box-sizing: border-box;
  }

  ${({ selectors }) => selectors.tooltipSelector} {
    background: none;
    font-size: .8rem;
    z-index: 2147483647;
    &[aria-hidden="true"] > * {
      opacity: 0;
      transition: opacity 0.1s linear;
    }

    &[aria-hidden="false"] {
      transition: visibility 0s linear 0.1s;
      & > * {
        opacity: 1;
        transition: opacity 0.1s ease-in;
      }
    }

    ${({ selectors }) => selectors.innerSelector} {
      background: #FFF;
      border-radius: 6px;
      box-shadow: 0 7.56098px 15.122px rgba(0, 0, 0, 0.1), 3.02439px 3.02439px 3.02439px rgba(0, 0, 0, 0.1), -0.756098px -0.756098px 3.02439px rgba(0, 0, 0, 0.05);
      width: 420px;
      z-index: 1;
    }

    ${({ selectors }) => selectors.arrowSelector} {
      z-index: 2;
      width: 40px;
      height: 10px;
      position: absolute;
      background-position: -10px -1px;
      background-image: url(${getArrowUrl()});
    }

    &[x-placement^="top"] {
      padding-bottom: 12px;
      ${({ selectors }) => selectors.arrowSelector} {
        bottom: 2px;
        left: calc(50% - 30px);
      }
    }

    &[x-placement^="bottom"] {
      padding-top: 12px;
      ${({ selectors }) => selectors.arrowSelector} {
        top: 2px;
        transform: rotate(180deg);
        left: calc(50% - 30px);
      }
    }

    &[x-placement^="right"] {
      padding-left: 12px;

      ${({ selectors }) => selectors.arrowSelector} {
        left: -13px;
        transform: rotate(90deg);
        top: calc(50% - 30px);
      }
    }

    &[x-placement^="left"] {
      padding-right: 12px;

      ${({ selectors }) => selectors.arrowSelector} {
        right: -13px;
        transform: rotate(-90deg);
        top: calc(50% - 30px);
      }
    }
  }
}
`;


/***/ }),

/***/ 886:
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
exports.Seller = void 0;
const react_i18next_1 = __webpack_require__(8);
const react_1 = __importDefault(__webpack_require__(0));
const SmileyIcon_1 = __webpack_require__(92);
const S = __importStar(__webpack_require__(887));
const Seller = ({ seller }) => {
    var _a, _b, _c, _d;
    const { t } = react_i18next_1.useTranslation();
    const isUnknow = !((_a = seller === null || seller === void 0 ? void 0 : seller.status) === null || _a === void 0 ? void 0 : _a.overall) || ((_b = seller === null || seller === void 0 ? void 0 : seller.status) === null || _b === void 0 ? void 0 : _b.overall) === 'unknown' || !(seller === null || seller === void 0 ? void 0 : seller.overall);
    return (react_1.default.createElement(S.StyledSeller, null,
        react_1.default.createElement(S.Icon, null,
            react_1.default.createElement(S.Title, { type: (_c = seller === null || seller === void 0 ? void 0 : seller.status) === null || _c === void 0 ? void 0 : _c.overall }, isUnknow ? '' : `${seller === null || seller === void 0 ? void 0 : seller.overall}%`),
            react_1.default.createElement(SmileyIcon_1.SmileyIcon, { type: (_d = seller === null || seller === void 0 ? void 0 : seller.status) === null || _d === void 0 ? void 0 : _d.overall, size: 16 })),
        react_1.default.createElement(S.Text, null, isUnknow ? t('sellerTtrustLevelUnknown') : `${t('sellerTitle')}`)));
};
exports.Seller = Seller;


/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Icon = exports.Title = exports.StyledSeller = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
const constants_1 = __webpack_require__(25);
exports.StyledSeller = styled_components_1.default.div.withConfig({ displayName: "StyledSeller", componentId: "sc-1bmnv7m" }) `
	display: flex;
	flex-direction: column;
	margin-right: 5px;
	width: 70px;
`;
exports.Title = styled_components_1.default.h2.withConfig({ displayName: "Title", componentId: "sc-tq9oa0" }) `
	//margin-right: 5px;
	color: ${({ type }) => constants_1.colors(constants_1.mapTypeToColor(type))};
	font-family: 'Open Sans', sans-serif;
	font-size: ${({ embeddedWidget, type }) => (embeddedWidget ? '16px' : type === 'unknown' ? '13px' : '14px')};
	font-weight: bold;
	line-height: 20px;
	margin: 0;
`;
exports.Icon = styled_components_1.default.div.withConfig({ displayName: "Icon", componentId: "sc-ylmrmp" }) `
	align-items: center;
	display: flex;
	float: left;
	height: 16px;
	justify-content: space-between;
	margin: 1.5px 5px 0 0;
	width: 50px;
`;
exports.Text = styled_components_1.default.div.withConfig({ displayName: "Text", componentId: "sc-1jzbz9e" }) `
	font-family: 'Open Sans', sans-serif;
	font-size: 11px;
	font-style: normal;
	font-weight: ${({ bold }) => bold || 400};
	line-height: 13px;
	text-overflow: ellipsis;
	width: 50px;
`;


/***/ }),

/***/ 888:
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
exports.PriceInfo = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const renderPrice_1 = __webpack_require__(130);
const S = __importStar(__webpack_require__(889));
const PriceInfo = ({ minPrice, maxPrice, currency = null, priceNotChanged, priceIncreased, roundedPriceChangePercentAbs }) => {
    const { t } = react_i18next_1.useTranslation();
    const renderedPrice = renderPrice_1.renderPrice({ minPrice, maxPrice, t });
    return (react_1.default.createElement(S.PriceInfo, null,
        react_1.default.createElement(S.PriceSection, null,
            react_1.default.createElement(S.StyledPriceText, null, `${renderedPrice} ${currency || ''}`),
            !priceNotChanged && (react_1.default.createElement(S.StyledPriceChangePercentAbsText, { increased: priceIncreased }, (priceIncreased ? '+' : '-') + (!priceNotChanged ? `${roundedPriceChangePercentAbs}%` : ''))))));
};
exports.PriceInfo = PriceInfo;


/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledPriceChangePercentAbsText = exports.StyledPriceText = exports.PriceSection = exports.PriceInfo = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.PriceInfo = styled_components_1.default.div.withConfig({ displayName: "PriceInfo", componentId: "sc-1kw6vhh" }) `
	margin-bottom: 2px;
`;
exports.PriceSection = styled_components_1.default.div.withConfig({ displayName: "PriceSection", componentId: "sc-cbnh0" }) `
	display: flex;
	justify-content: space-between;
`;
exports.StyledPriceText = styled_components_1.default.p.withConfig({ displayName: "StyledPriceText", componentId: "sc-ghsvwi" }) `
	font-size: 14px;
	font-weight: bold;
	margin: 0;
`;
exports.StyledPriceChangePercentAbsText = styled_components_1.default.p.withConfig({ displayName: "StyledPriceChangePercentAbsText", componentId: "sc-xdim4b" }) `
	align-items: center;
	background: ${({ increased }) => (increased ? '#c300001c' : '#41c3001c')};
	color: ${({ increased }) => (increased ? '#c30000' : '#41c300')};
	display: flex;
	font-size: 12px;
	font-weight: bold;
	justify-content: center;
	margin: 0;
	padding-left: 2px;
	padding-right: 2px;
`;


/***/ }),

/***/ 890:
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
exports.OpenProductButton = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const redirectMark_1 = __webpack_require__(64);
const tooltipMetrics_1 = __webpack_require__(98);
const S = __importStar(__webpack_require__(891));
const OpenProductButton = ({ productId, disabled, tooltipLink }) => {
    const { t } = react_i18next_1.useTranslation();
    return (react_1.default.createElement(S.OpenProductButton, { onClick: () => {
            tooltipMetrics_1.clickButton();
            redirectMark_1.RedirectMark.addID('toolex', productId);
        }, target: "_blank", disabled: disabled, href: tooltipLink.replace(':id', productId) }, t('open_product')));
};
exports.OpenProductButton = OpenProductButton;


/***/ }),

/***/ 891:
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
exports.OpenProductButton = void 0;
const styled_components_1 = __importStar(__webpack_require__(3));
const disabledStyle = styled_components_1.css `
	&:hover {
		background-color: #e2eeff;
		text-decoration: unset !important;
	}
	&:active {
		background-color: #d2e5ff;
		text-decoration: unset !important;
	}
`;
exports.OpenProductButton = styled_components_1.default.a.withConfig({ displayName: "OpenProductButton", componentId: "sc-1ypvmwy" }) `
	//display: block;
	align-items: center !important;
	background-color: ${({ disabled }) => (disabled ? '#F4F4F4' : '#F3F8FF')};
	border-radius: 3px;
	bottom: 0;
	color: ${({ disabled }) => (disabled ? 'rgba(0, 0, 0, 0.3)' : '#4DA1FF')};
	display: flex !important;
	float: left;
	font-family: 'Open Sans', sans-serif;
	font-size: 13px;
	font-weight: 600;
	height: 32px;
	justify-content: center !important;
	letter-spacing: -0.2px;
	line-height: 36px;
	position: relative;
	text-align: center;
	text-decoration: blink;
	text-decoration: unset !important;
	transition: all 300ms ease-in-out;
	width: 147px;
	${({ disabled }) => !disabled && disabledStyle}
`;


/***/ }),

/***/ 892:
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
exports.SimilarButton = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const react_i18next_1 = __webpack_require__(8);
const stores_1 = __webpack_require__(10);
const SimilarIcon_1 = __webpack_require__(893);
const UpDownArrow_1 = __webpack_require__(342);
const S = __importStar(__webpack_require__(894));
const SimilarButton = ({ count }) => {
    const { t } = react_i18next_1.useTranslation();
    const { isShowSimilar } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.tooltipUI);
    return (react_1.default.createElement(S.SimilarButton, { onClick: () => {
            if (count > 0) {
                stores_1.webextStore.dispatch(stores_1.tooltipUIActions.toggleSimilar());
                //	window.dispatchEvent(new Event('scroll'));
            }
        }, target: "_blank" },
        react_1.default.createElement(S.StyledLeftBlock, null,
            react_1.default.createElement(SimilarIcon_1.SimilarIcon, null)),
        `${t('similar')} (${count})`,
        react_1.default.createElement(S.StyledRightBlock, null, count > 0 && react_1.default.createElement(UpDownArrow_1.UpDownArrow, { color: '#B2B5BB', size: 15, active: isShowSimilar }))));
};
exports.SimilarButton = SimilarButton;


/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimilarIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const SimilarIcon = () => (react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3.49999 8C3.49999 5.51472 5.51471 3.5 7.99999 3.5C8.98546 3.5 9.89694 3.81677 10.6382 4.35405L8.58117 6.61675C8.40243 6.54156 8.20606 6.5 7.99999 6.5C7.17156 6.5 6.49999 7.17157 6.49999 8C6.49999 8.82843 7.17156 9.5 7.99999 9.5C8.82842 9.5 9.49999 8.82843 9.49999 8C9.49999 7.74284 9.43528 7.5008 9.32125 7.28927L11.378 5.02685C12.0764 5.8197 12.5 6.86038 12.5 8C12.5 10.4853 10.4853 12.5 7.99999 12.5C5.51471 12.5 3.49999 10.4853 3.49999 8ZM7.99999 2.5C9.24457 2.5 10.3926 2.91339 11.3143 3.61035L12.047 2.80429C12.2328 2.59996 12.549 2.58491 12.7533 2.77066C12.9577 2.95641 12.9727 3.27264 12.787 3.47696L12.0541 4.28317C12.952 5.26201 13.5 6.56701 13.5 8C13.5 11.0376 11.0376 13.5 7.99999 13.5C4.96243 13.5 2.49999 11.0376 2.49999 8C2.49999 4.96243 4.96243 2.5 7.99999 2.5Z", fill: "#50A2FF" })));
exports.SimilarIcon = SimilarIcon;


/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledRightBlock = exports.StyledLeftBlock = exports.SimilarButton = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.SimilarButton = styled_components_1.default.a.withConfig({ displayName: "SimilarButton", componentId: "sc-nh0n5h" }) `
	align-items: center;
	border-radius: 3px;
	bottom: 0;
	color: #000000;
	cursor: pointer !important;
	display: flex;
	float: right;
	font-family: 'Open Sans', sans-serif;
	font-size: 12px;
	font-weight: 600;
	height: 20px;
	justify-content: center;
	letter-spacing: -0.2px;
	line-height: 32px;
	position: relative;
	text-align: center;
	text-decoration: unset !important;
	text-decoration: blink;
	transition: all 300ms ease-in-out;
	width: 125px;
`;
exports.StyledLeftBlock = styled_components_1.default.div.withConfig({ displayName: "StyledLeftBlock", componentId: "sc-50yw9w" }) `
	align-items: center;
	display: flex;
	margin-right: 4px;
`;
exports.StyledRightBlock = styled_components_1.default.div.withConfig({ displayName: "StyledRightBlock", componentId: "sc-z2aywi" }) `
	align-items: center;
	display: flex;
	margin-left: 4px;
`;


/***/ }),

/***/ 895:
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
exports.Similars = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const react_custom_scrollbars_1 = __importDefault(__webpack_require__(73));
const renderPrice_1 = __webpack_require__(130);
const redirectMark_1 = __webpack_require__(64);
const Badge_1 = __webpack_require__(345);
const S = __importStar(__webpack_require__(896));
const windowWheel = (e) => e.preventDefault();
const Similars = ({ similars, tooltipLink }) => {
    const { t } = react_i18next_1.useTranslation();
    const scrollRef = react_1.createRef();
    return (react_1.default.createElement(react_custom_scrollbars_1.default, { ref: scrollRef, onMouseEnter: () => {
            window.addEventListener('wheel', windowWheel, { passive: false });
        }, onMouseLeave: () => {
            window.removeEventListener('wheel', windowWheel);
        }, onWheel: (event) => {
            var _a, _b;
            (_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollLeft(((_b = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _b === void 0 ? void 0 : _b.getScrollLeft()) + (event === null || event === void 0 ? void 0 : event.deltaY) + (event === null || event === void 0 ? void 0 : event.deltaX));
        }, universal: true, style: { width: '100%', height: '148px' } },
        react_1.default.createElement(S.StyledSimilar, null, similars.map((similarItem, index) => {
            const renderedPrice = renderPrice_1.renderPrice({ minPrice: similarItem.min, maxPrice: similarItem.max, t });
            return (react_1.default.createElement(S.StyledSimilarItem, { onClick: () => {
                    redirectMark_1.RedirectMark.addID('simex', similarItem.id);
                }, target: "_blank", href: tooltipLink.replace(':id', similarItem.id), key: index },
                react_1.default.createElement(S.StyledSimilarImgBlock, null,
                    react_1.default.createElement("img", { src: similarItem.imageurl, alt: "" })),
                react_1.default.createElement(S.StyledSimilarPriceContainer, null,
                    react_1.default.createElement(S.StyledSimilarPrice, null, renderedPrice),
                    react_1.default.createElement(Badge_1.Badge, { type: 'similar', changes: 0, currency: similarItem === null || similarItem === void 0 ? void 0 : similarItem.curr, discount: similarItem === null || similarItem === void 0 ? void 0 : similarItem.realsale }))));
        }))));
};
exports.Similars = Similars;


/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSimilarImgBlock = exports.StyledSimilarPrice = exports.StyledSimilarPriceContainer = exports.StyledSimilarItem = exports.StyledSimilar = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
exports.StyledSimilar = styled_components_1.default.div.withConfig({ displayName: "StyledSimilar", componentId: "sc-e2mjp9" }) `
	display: flex;
	flex-direction: row;
	margin-top: 5px;
`;
exports.StyledSimilarItem = styled_components_1.default.a.withConfig({ displayName: "StyledSimilarItem", componentId: "sc-1b87c73" }) `
	border: 0.5px solid #e8e8e8;
	color: #000000;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	margin-bottom: 2px;
	padding: 3px;
	text-decoration: none;
`;
exports.StyledSimilarPriceContainer = styled_components_1.default.div.withConfig({ displayName: "StyledSimilarPriceContainer", componentId: "sc-1h8m6ig" }) `
	align-items: center;
	display: flex;
	justify-content: space-between;
`;
exports.StyledSimilarPrice = styled_components_1.default.p.withConfig({ displayName: "StyledSimilarPrice", componentId: "sc-1dms1qi" }) `
	font-size: 11px;
	margin: 0;
	white-space: nowrap;
`;
exports.StyledSimilarImgBlock = styled_components_1.default.div.withConfig({ displayName: "StyledSimilarImgBlock", componentId: "sc-yjjk1a" }) `
	display: block;
	height: 104px;
	overflow: hidden;
	width: 104px;

	img {
		border-radius: 3px;
		display: inline-block;
		max-height: 100%;
		max-width: 100%;
	}
`;


/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.calcPrices = void 0;
const formatNumbers_1 = __webpack_require__(156);
const calcPrices = (prices, currentPrice, minPrice) => {
    let averagePrice;
    if (prices === null || prices === void 0 ? void 0 : prices.length) {
        averagePrice =
            Number(prices
                .map((e) => +(e === null || e === void 0 ? void 0 : e.max))
                .filter((e) => e)
                .reduce((a, c) => a + c, 0)) / prices.length;
    }
    else {
        averagePrice = Number(currentPrice || minPrice);
    }
    const priceChange = currentPrice - Number(averagePrice);
    const priceChangeSign = Math.sign(priceChange);
    // const priceChangeAbs = Math.abs(priceChange);
    const priceChangePercent = (priceChange / averagePrice) * 100;
    const priceChangePercentAbs = Math.abs(priceChangePercent);
    const priceNotChanged = priceChange === 0;
    const priceIncreased = priceChangeSign >= 0;
    // const priceChangedSignificantly = priceChangePercentAbs > 5;
    // const roundedPriceChangeAbs = roundPriceChange(priceChangeAbs, t);
    const roundedPriceChangePercentAbs = formatNumbers_1.roundPriceChangePercent(priceChangePercentAbs);
    const type = priceNotChanged ? 'unchanged' : priceIncreased ? 'bad' : 'good';
    return { priceNotChanged, priceIncreased, roundedPriceChangePercentAbs, type };
};
exports.calcPrices = calcPrices;


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledProductInfoText = exports.StyledProductItem = exports.StyledProduct = exports.StyledProductRaitingText = exports.StyledProductInfo = exports.StyledProductRaiting = exports.VerticalLine = exports.Text = exports.StyledFooterButtons = exports.StyledAppBarButtons = exports.StyledAppBar = exports.StyledInfoBody = exports.StyledInfo = exports.ImgBlock = exports.Right = exports.Left = exports.StyledAppBarGear = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
const GearIconInverted_1 = __webpack_require__(899);
const constants_1 = __webpack_require__(25);
const TextRotator_1 = __webpack_require__(120);
exports.StyledAppBarGear = styled_components_1.default(GearIconInverted_1.GearIconInverted).withConfig({ displayName: "StyledAppBarGear", componentId: "sc-1diajf" }) `
	display: inline-block;
	margin-left: 4px;
	transform: translate(0, 3px);
`;
exports.Left = styled_components_1.default.div.withConfig({ displayName: "Left", componentId: "sc-1diad4" }) `
	display: flex;
	width: 120px;
`;
exports.Right = styled_components_1.default.div.withConfig({ displayName: "Right", componentId: "sc-1nce831" }) `
	display: flex;
	flex-direction: column;
	max-width: 300px;
	width: 270px;
`;
exports.ImgBlock = styled_components_1.default.div.withConfig({ displayName: "ImgBlock", componentId: "sc-1ysl5kr" }) `
	display: block;
	height: 120px;
	overflow: hidden;
	width: 120px;

	img {
		border-radius: 3px;
		display: inline-block;
		max-height: 100%;
		max-width: 100%;
	}
`;
exports.StyledInfo = styled_components_1.default.div.withConfig({ displayName: "StyledInfo", componentId: "sc-k7o8q8" }) `
	height: 100%;
	margin: 0;
	padding-bottom: 2px;
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 2px;
	text-align: left;
	width: 100%;
`;
exports.StyledInfoBody = styled_components_1.default.div.withConfig({ displayName: "StyledInfoBody", componentId: "sc-1971qp4" }) `
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
exports.StyledAppBar = styled_components_1.default.div.withConfig({ displayName: "StyledAppBar", componentId: "sc-7zt3jz" }) `
	align-items: center;
	display: flex;
	justify-content: space-between;
`;
exports.StyledAppBarButtons = styled_components_1.default.div.withConfig({ displayName: "StyledAppBarButtons", componentId: "sc-1sq7k52" }) `
	align-items: center;
	display: flex;
`;
exports.StyledFooterButtons = styled_components_1.default.div.withConfig({ displayName: "StyledFooterButtons", componentId: "sc-1142mpb" }) `
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-top: 2px;
`;
exports.Text = styled_components_1.default.p.withConfig({ displayName: "Text", componentId: "sc-7gnjiz" }) `
	color: ${({ type }) => (type ? constants_1.colors(constants_1.mapTypeToColor(type)) : 'black')};
	flex-grow: 1;
	font-family: 'Open Sans', sans-serif;
	font-size: ${({ size }) => size || 12}px;
	font-weight: ${({ bold }) => bold || 400};
	height: 100%;
	line-height: 19px;
	margin: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;

	:hover ${ /* sc-selector */TextRotator_1.TextRotatorTextDefault} {
		opacity: 0;
		top: -15px;
	}

	:hover ${ /* sc-selector */TextRotator_1.TextRotatorTextHover} {
		opacity: 1;
		top: 0;
	}
`;
exports.VerticalLine = styled_components_1.default.div.withConfig({ displayName: "VerticalLine", componentId: "sc-1kmbaqa" }) `
	align-self: center;
	background: #e8e8e8;
	height: 39px;
	width: 1px;
`;
exports.StyledProductRaiting = styled_components_1.default.div.withConfig({ displayName: "StyledProductRaiting", componentId: "sc-i57x5u" }) `
	align-items: center;
	display: flex;
	flex-direction: row;
`;
exports.StyledProductInfo = styled_components_1.default.div.withConfig({ displayName: "StyledProductInfo", componentId: "sc-1mqvp0a" }) `
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	margin-left: 15px;
	width: 75px;
`;
exports.StyledProductRaitingText = styled_components_1.default.p.withConfig({ displayName: "StyledProductRaitingText", componentId: "sc-hx26zh" }) `
	font-size: 14px;
	font-weight: bold;
	margin: 0;
	margin-left: 5px;
	margin-right: 5px;
`;
exports.StyledProduct = styled_components_1.default.div.withConfig({ displayName: "StyledProduct", componentId: "sc-1pvspyq" }) `
	display: flex;
`;
exports.StyledProductItem = styled_components_1.default.div.withConfig({ displayName: "StyledProductItem", componentId: "sc-1e8b5ey" }) `
	display: flex;
	flex-direction: column;
`;
exports.StyledProductInfoText = styled_components_1.default.p.withConfig({ displayName: "StyledProductInfoText", componentId: "sc-o9sc6g" }) `
	color: #7c7e83;
	font-size: 11px;
	line-height: 13px;
	margin: 0;
`;


/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GearIconInverted = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const settingsOpened_1 = __webpack_require__(169);
const GearIconInverted = ({ size = 17, color = '#959595', onClick }) => (react_1.default.createElement("svg", { cursor: "pointer", onClick: () => {
        settingsOpened_1.settingsOpenedMetric('from-side-widget');
        onClick();
    }, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 20 20", fill: "none" },
    react_1.default.createElement("path", { fillRule: "evenodd", fill: color, d: "M19.937 8.9c-.032-.28-.36-.492-.643-.492-.916 0-1.73-.538-2.07-1.37-.348-.852-.124-1.846.56-2.473.215-.197.24-.526.06-.754-.47-.596-1.002-1.134-1.584-1.6-.228-.183-.562-.157-.76.06-.596.66-1.667.905-2.494.56A2.22 2.22 0 0 1 11.655.651c.017-.294-.197-.55-.49-.584-.747-.086-1.5-.09-2.25-.006-.3.032-.505.282-.495.572.033.927-.517 1.784-1.37 2.134-.817.334-1.88.09-2.476-.564a.56.56 0 0 0-.755-.063c-.6.47-1.144 1.01-1.618 1.6-.185.23-.157.563.06.76.696.63.92 1.633.56 2.495-.345.822-1.2 1.352-2.176 1.352-.317-.01-.543.203-.578.49-.088.75-.09 1.517-.004 2.274.03.282.37.492.656.492.87-.022 1.707.517 2.058 1.37s.125 1.846-.56 2.473c-.214.196-.24.525-.06.754A9.93 9.93 0 0 0 3.738 17.8c.23.185.563.16.76-.06.598-.662 1.67-.907 2.493-.56.863.36 1.406 1.233 1.353 2.17-.017.294.2.55.49.584.382.044.767.067 1.152.067a9.92 9.92 0 0 0 1.098-.061c.3-.032.505-.282.495-.573-.034-.927.517-1.784 1.368-2.132a2.31 2.31 0 0 1 2.477.563.56.56 0 0 0 .755.063c.598-.47 1.142-1.007 1.618-1.6.185-.23.16-.562-.06-.76-.696-.63-.922-1.633-.56-2.495a2.24 2.24 0 0 1 2.046-1.356l.124.003c.287.023.55-.197.585-.5a10.01 10.01 0 0 0 .004-2.274zm-9.92 4.467a3.34 3.34 0 0 1-3.336-3.335 3.34 3.34 0 0 1 3.336-3.336 3.34 3.34 0 0 1 3.335 3.336 3.34 3.34 0 0 1-3.335 3.335z" })));
exports.GearIconInverted = GearIconInverted;


/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfInjectNeeded = void 0;
const actions_1 = __webpack_require__(24);
const categories_1 = __webpack_require__(340);
const aliradar_1 = __webpack_require__(32);
const stores_1 = __webpack_require__(10);
const background_1 = __webpack_require__(17);
const i18n_1 = __webpack_require__(267);
const multiShops_1 = __webpack_require__(65);
const injectStartButton_1 = __webpack_require__(901);
const injectWidget_1 = __webpack_require__(906);
const microdata_1 = __webpack_require__(338);
const aliexpress_1 = __webpack_require__(62);
const checkIfInjectNeeded = (config) => {
    const host = window.location.href;
    const locks = (config === null || config === void 0 ? void 0 : config.locks) || [];
    const aproved = (config === null || config === void 0 ? void 0 : config.aproved) || [];
    return (microdata_1.isProduct() &&
        !(locks === null || locks === void 0 ? void 0 : locks.some((lock) => host === null || host === void 0 ? void 0 : host.includes(lock))) &&
        (!(aproved === null || aproved === void 0 ? void 0 : aproved.length) || (aproved === null || aproved === void 0 ? void 0 : aproved.length.some((lock) => host === null || host === void 0 ? void 0 : host.includes(lock)))));
};
exports.checkIfInjectNeeded = checkIfInjectNeeded;
const init = async () => {
    var _a, _b, _c, _d, _e;
    const config = await aliradar_1.MultiSimilarConfig.get();
    if (!(await exports.checkIfInjectNeeded(config))) {
        return;
    }
    try {
        let item;
        try {
            item = microdata_1.prepareItemInfo(await aliexpress_1.getCurrency());
            // https://shein.com
            if ((_a = document.location.href) === null || _a === void 0 ? void 0 : _a.includes('shein.com')) {
                item.crumbs = (_c = (_b = Array.from(document.querySelectorAll('.bread-crumb__item-link'))) === null || _b === void 0 ? void 0 : _b.map((v) => { var _a; return (_a = v.textContent) === null || _a === void 0 ? void 0 : _a.trim(); })) === null || _c === void 0 ? void 0 : _c.filter((v) => !(v === null || v === void 0 ? void 0 : v.includes('Главная')));
            }
        }
        catch (e) {
            if (false) {}
        }
        const settings = (_d = stores_1.webextStore.getState()) === null || _d === void 0 ? void 0 : _d.settings;
        if (item && ((_e = settings === null || settings === void 0 ? void 0 : settings.multishop) === null || _e === void 0 ? void 0 : _e.value)) {
            await i18n_1.initI18n();
            await multiShops_1.pageLoad();
            await categories_1.prepareCategories.get(config);
            stores_1.webextStore.dispatch(stores_1.multiSearchSliceActions.initDefaultState({
                results: [],
                item
            }));
            await injectStartButton_1.injectStartButton(item, config);
            await injectWidget_1.injectWidget();
        }
    }
    catch (e) {
        background_1.stopLoader();
        console.error(e);
    }
    await actions_1.SettingsActions.init();
    await actions_1.EmbeddedWidgetUIActions.initializedFromStorage();
};
let url = '';
const interval = setInterval(() => {
    var _a, _b, _c, _d, _e;
    if (window.location.href !== url || !document.querySelector('#rrmultisearch')) {
        stores_1.webextStore.dispatch(stores_1.multiSearchSliceActions.unmount());
        try {
            (_b = (_a = document
                .querySelector('#rrmultisearch')) === null || _a === void 0 ? void 0 : _a.parentNode // @ts-ignore
            ) === null || _b === void 0 ? void 0 : _b.removeChild(document.querySelector('#rrmultisearch'));
        }
        catch (e) { }
        try {
            (_e = (_d = (_c = document
                .querySelector('#rrbuttonSearch')) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode // @ts-ignore
            ) === null || _e === void 0 ? void 0 : _e.removeChild(document.querySelector('#rrbuttonSearch').parentNode);
        }
        catch (e) { }
        init();
        url = window.location.href;
        clearInterval(interval);
    }
}, 1500);


/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectStartButton = void 0;
const multiShops_1 = __webpack_require__(65);
const react_dom_1 = __webpack_require__(91);
const AppLayout_1 = __webpack_require__(53);
const StartButton_1 = __webpack_require__(902);
const react_1 = __importDefault(__webpack_require__(0));
const calcGrams = (text) => {
    if (Array.isArray(text)) {
        text = text.join(' ');
    }
    const words = text
        .toLowerCase()
        .replace(/[^\w\sА-я]/g, ' ')
        .split(' ');
    const grams = [];
    for (const word of words) {
        for (let i = 1; i < word.length - 1; i++) {
            grams.push(word[i - 1] + word[i] + word[i + 1]);
        }
    }
    return grams;
};
const checkParentDisplayed = (e) => {
    try {
        if (e.parentNode) {
            const style = window.getComputedStyle(e);
            if (style.display !== 'none' &&
                style.visibility !== 'hiden' &&
                // @ts-ignore
                !(style.overflow === 'hidden' && (parseInt(style.height) < 2 || parseInt(style.weight) < 1)) &&
                e.parentNode) {
                return checkParentDisplayed(e.parentNode);
            }
        }
        return !e.parentNode;
    }
    catch (e) {
        console.error(e);
    }
    return false;
};
const injectStartButton = async (item, config) => {
    const name = calcGrams([...item.name, ...item.desc]);
    const [title, ...other] = [...Array.from(document.querySelectorAll('h1, h2, [class*="title"],[class*="name"]'))]
        .filter((e) => e.innerText && e.innerText.split(' ').length && checkParentDisplayed(e))
        .sort((x, z) => name.reduce((a, n) => (z.innerText.toLowerCase().includes(n) ? a + 1 : a), z.tagName.toLowerCase() === 'h1' ? 2 : 0) -
        name.reduce((a, n) => (x.innerText.toLowerCase().includes(n) ? a + 1 : a), x.tagName.toLowerCase() === 'h1' ? 2 : 0));
    const bounds = title.getBoundingClientRect();
    if (false) {}
    const element = document.createElement('element');
    element.style.display = 'block';
    element.style.height = '40px';
    element.style.position = 'relative';
    element.style.width = window.innerWidth - bounds.right + bounds.width < 500 ? '100%' : '500px';
    title === null || title === void 0 ? void 0 : title.append(element);
    const { width } = window.getComputedStyle(element);
    multiShops_1.displayed('button');
    react_dom_1.render(react_1.default.createElement(AppLayout_1.AppLayout, null,
        react_1.default.createElement(StartButton_1.StartButton, { config: config, item: item, width: width })), element);
};
exports.injectStartButton = injectStartButton;


/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartButton = void 0;
var StartButton_1 = __webpack_require__(903);
Object.defineProperty(exports, "StartButton", { enumerable: true, get: function () { return StartButton_1.StartButton; } });


/***/ }),

/***/ 903:
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
exports.StartButton = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const multiSearchUI_1 = __webpack_require__(99);
const search_1 = __webpack_require__(134);
const multiShops_1 = __webpack_require__(65);
const stores_1 = __webpack_require__(10);
const Text_1 = __webpack_require__(904);
const S = __importStar(__webpack_require__(905));
const StartButton = ({ config, item, width }) => {
    const ref = react_1.useRef(null);
    const dispatch = react_redux_1.useDispatch();
    const { bounds, widgetState, results, buttonState, isStarted } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.multiSearch);
    const updateBounds = (ref) => {
        if (ref === null || ref === void 0 ? void 0 : ref.current) {
            const { left, top, right, height, width, x, y } = ref.current.getBoundingClientRect();
            dispatch(stores_1.multiSearchSliceActions.updateBounds({
                left,
                top,
                right,
                height,
                width,
                x,
                y
            }));
        }
    };
    react_1.useEffect(() => {
        // setTimeout(() => updateBounds(ref), 100);
        updateBounds(ref);
        !isStarted && search_1.initSearch(config, item);
    }, [isStarted, widgetState, buttonState, ref, results]);
    react_1.useEffect(() => {
        // window.onscroll = throttle(200, false, () => updateBounds(ref));
    }, [ref]);
    const handleClick = react_1.useCallback(() => {
        if (!results.length) {
            return;
        }
        multiShops_1.click();
        if (widgetState !== 'lg') {
            multiSearchUI_1.multiSearchUI.openFullWidget();
        }
        else {
            multiSearchUI_1.multiSearchUI.openWidget();
        }
    }, [widgetState, results]);
    return (react_1.default.createElement(S.StartButton, { id: "rrbuttonSearch", ref: ref, bounds: bounds, width: width, widgetState: widgetState, "data-count": Math.min(results.length, 99) || null, className: `${buttonState} ${widgetState}`, onMouseEnter: () => {
            if (widgetState !== 'lg') {
                multiShops_1.displayed('hover');
                multiSearchUI_1.multiSearchUI.openWidget();
            }
        }, onMouseLeave: () => {
            if (widgetState !== 'lg') {
                multiSearchUI_1.multiSearchUI.closeWidget();
            }
        }, onClick: () => handleClick() },
        react_1.default.createElement(Text_1.Text, { results: results, buttonState: buttonState, widgetState: widgetState })));
};
exports.StartButton = StartButton;


/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const react_i18next_1 = __webpack_require__(8);
const react_1 = __importDefault(__webpack_require__(0));
const Text = ({ results, buttonState, widgetState }) => {
    const { t } = react_i18next_1.useTranslation();
    let text = `${t('similar_ext_similar_on')} AliExpress`;
    if (buttonState === 'notFound') {
        text = t('similar_ext_button_not_found');
    }
    else if (widgetState === 'md') {
        if (!results.length) {
            text = t('similar_ext_button_finding');
        }
        else if (results.some((e) => e.shop === 'beru')) {
            text += t('similar_ext_and_beru');
        }
    }
    return react_1.default.createElement(react_1.default.Fragment, null, text);
};
exports.Text = Text;


/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartButton = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
const getLeftOffset = ({ width }) => (parseInt(width) < 500 ? 'calc(100% - 500px)' : '0');
const getZIndex = ({ widgetState }) => (widgetState === 'md' ? 2147483647 : '0');
exports.StartButton = styled_components_1.default.div.withConfig({ displayName: "StartButton", componentId: "sc-5c7oop" }) `
	background: #ffffff !important;
	border: 0.5px solid #d9e0ee;
	border-radius: 6px;
	box-shadow: 2px 2px 10px rgba(54, 78, 115, 0.05), 1px 1px 3px rgba(54, 78, 115, 0.1);
	box-sizing: border-box;
	color: #364e73;
	cursor: pointer;
	display: block;
	font-family: 'Open Sans', sans-serif !important;
	font-size: 13px;
	font-style: normal;
	font-weight: 600 !important;
	height: 33px !important;
	left: 0;
	letter-spacing: -0.1px;
	line-height: 18px !important;
	margin-bottom: 5px;
	margin-top: 3px;
	overflow: hidden;
	padding: 6px 10px 6px 38px;
	position: absolute;
	text-align: left;
	text-transform: none;
	transition: all 100ms ease-in-out;
	white-space: nowrap;
	width: 195px;
	z-index: ${getZIndex};

	&.md {
		border-bottom: none !important;
		border-radius: 6px 6px 0 0;
		box-shadow: 2px 2px 10px rgba(54, 78, 115, 0.05), 1px 1px 3px rgba(54, 78, 115, 0.1) !important;
		left: ${getLeftOffset};
		width: 498px;
	}

	&:hover {
		border: 0.5px solid #c1d8f2;
		box-shadow: 2px 2px 10px rgba(54, 78, 115, 0.18), 1px 1px 3px rgba(54, 78, 115, 0.15);
		color: #142643;

		&:before {
			background-image: url('${chrome.runtime.getURL('assets/img/logo/ic_aliradar.svg')}');
		}
	}

	&:before {
		background-image: url('${chrome.runtime.getURL('assets/img/logo/ic_aliradar.svg')}');
		background-position: 0 !important;
		background-size: contain;
		content: '';
		display: inline-block;
		height: 21px;
		left: 9px;
		position: absolute;
		top: 5px;
		width: 21px;
	}

	&:active,
	&:focus {
		box-shadow: 2px 2px 10px rgba(52, 144, 246, 0.15), 1px 1px 3px rgba(71, 156, 251, 0.2);
		color: #142643;
		outline: none;
	}

	&.aliradarloading:before {
		animation: spin 1s linear infinite;
		background-image: url('${chrome.runtime.getURL('assets/img/ic_loader.svg')}');
		height: 20px;
		top: 4px;
		width: 20px;
	}

	@keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	&.aliradarloaded:before {
		background-color: rgba(80, 162, 255, 0.2);
		background-image: none;
		border-radius: 2px;
		content: attr(data-count);
		height: 19px;
		line-height: 19px;
		text-align: center;
		top: 6px;
		vertical-align: middle;
		width: 21px;
	}

	& > span {
		background-color: #50a2ff;
		border-radius: 2px;
		color: #fff;
		padding: 2px 5px;

		&:hover {
			background-color: #50a2ff;
			box-shadow: 2px 2px 10px rgba(80, 162, 255, 0.15), 1px 1px 2px rgba(80, 162, 255, 0.2);
		}

		&:active {
			background-color: #2889f4;
		}
	}
`;


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectWidget = void 0;
const react_dom_1 = __webpack_require__(91);
const AppLayout_1 = __webpack_require__(53);
const Widget_1 = __webpack_require__(907);
const react_1 = __importDefault(__webpack_require__(0));
const createContainer = () => {
    if (!document.getElementById('rrmultisearch')) {
        const div = document.createElement('div');
        div.id = 'rrmultisearch';
        div.className = 'rrmultisearch-aliradar';
        document.body.appendChild(div);
    }
};
const injectWidget = async () => {
    createContainer();
    react_dom_1.render(react_1.default.createElement(AppLayout_1.AppLayout, null,
        react_1.default.createElement(Widget_1.Widget, null)), document.getElementById('rrmultisearch'));
};
exports.injectWidget = injectWidget;


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
var Widget_1 = __webpack_require__(908);
Object.defineProperty(exports, "Widget", { enumerable: true, get: function () { return Widget_1.Widget; } });


/***/ }),

/***/ 908:
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
exports.Widget = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const multiSearchUI_1 = __webpack_require__(99);
const stores_1 = __webpack_require__(10);
const Clicker_1 = __webpack_require__(909);
const Header_1 = __webpack_require__(910);
const ItemList_1 = __webpack_require__(911);
const Footer_1 = __webpack_require__(912);
const Categories_1 = __webpack_require__(916);
const HeaderItem_1 = __webpack_require__(917);
const S = __importStar(__webpack_require__(918));
const fixShops = async (multiSearch) => {
    if (document.querySelector('.bottom-goods-bar.fl-r')) {
        // @ts-ignore
        document.querySelector('.bottom-goods-bar.fl-r').style.transition = 'right 300ms';
        // @ts-ignore
        document.querySelector('.bottom-goods-bar.fl-r').style.right = getWidth(multiSearch);
    }
};
const getWidth = ({ widgetState }) => (widgetState === 'lg' ? '606px' : '498px');
const Widget = () => {
    const multiSearch = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.multiSearch);
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        dispatch(stores_1.multiSearchSliceActions.mount());
        return () => {
            dispatch(stores_1.multiSearchSliceActions.unmount());
        };
    }, []);
    // get window height without horizontal scroll (mainly for ozon.ru)
    /* 999 is z-index of cookie-popup on ozon.ru */
    fixShops(multiSearch);
    return (react_1.default.createElement(Clicker_1.Clicker, null,
        react_1.default.createElement(S.Widget, { bounds: multiSearch.bounds, widgetState: multiSearch.widgetState, onMouseEnter: () => {
                if (multiSearch.widgetState !== 'lg') {
                    multiSearchUI_1.multiSearchUI.openWidget();
                }
            }, onMouseLeave: () => {
                if (multiSearch.widgetState !== 'lg') {
                    multiSearchUI_1.multiSearchUI.closeWidget();
                }
            } },
            react_1.default.createElement(S.WidgetWrapper, { widgetState: multiSearch.widgetState, prevState: multiSearch.prevState },
                multiSearch.widgetState === 'lg' && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(HeaderItem_1.HeaderItem, { multiSearch: multiSearch }),
                    react_1.default.createElement(Header_1.Header, { multiSearch: multiSearch }))),
                react_1.default.createElement(Categories_1.Categories, null),
                react_1.default.createElement(ItemList_1.ItemList, null),
                react_1.default.createElement(Footer_1.Footer, null)))));
};
exports.Widget = Widget;


/***/ }),

/***/ 909:
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
exports.Clicker = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importDefault(__webpack_require__(3));
const multiSearchUI_1 = __webpack_require__(99);
const OutsideClick = styled_components_1.default.div.withConfig({ displayName: "OutsideClick", componentId: "sc-1v13etw" }) `
	/* width: 100%;
	height: 100%;
	z-index: 2047483000;
	position: fixed; */
`;
const Clicker = ({ children }) => {
    const ref = react_1.useRef();
    const multiSearch = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.multiSearch);
    const handleClickOutside = (event) => {
        var _a;
        if (!((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
            multiSearchUI_1.multiSearchUI.closeWidget();
        }
    };
    react_1.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [multiSearch.widgetState, multiSearch.remove]);
    return react_1.default.createElement(OutsideClick, { ref: ref }, children);
};
exports.Clicker = Clicker;


/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const styled_components_1 = __importDefault(__webpack_require__(3));
const react_redux_1 = __webpack_require__(7);
const getHeaderWrapperBoxShadow = ({ widgetState }) => (widgetState === 'lg' ? 'none' : '0 0 5px rgba(0, 0, 0, .1)');
const getHeaderWrapperHeight = ({ widgetState }) => (widgetState === 'sm' && '35px') || (widgetState === 'md' && '49px') || (widgetState === 'lg' && '59px');
const getHeaderWrapperPadding = ({ widgetState }) => (widgetState === 'lg' ? '0 20px 5px' : '0 20px');
const HeaderWrapper = styled_components_1.default.div.withConfig({ displayName: "HeaderWrapper", componentId: "sc-l3ofds" }) `
	align-items: center;
	background: #fff;
	box-shadow: ${getHeaderWrapperBoxShadow};
	display: flex;
	height: ${getHeaderWrapperHeight};
	justify-content: space-between;
	padding: ${getHeaderWrapperPadding};
	position: relative;
	z-index: 2;
`;
const MoreInfo = styled_components_1.default.span.withConfig({ displayName: "MoreInfo", componentId: "sc-1a54qtr" }) `
	color: #959595;
	font-family: 'Open Sans', sans-serif;
	font-size: 13px;
`;
const getHeaderDescriptionFontSize = ({ widgetState }) => (widgetState === 'lg' ? '18px' : '16px');
const HeaderDescription = styled_components_1.default.span.withConfig({ displayName: "HeaderDescription", componentId: "sc-1fmlzp6" }) `
	color: #1b1b1b;
	font-size: ${getHeaderDescriptionFontSize};
	font-weight: bold;
	letter-spacing: -0.3px;
`;
const TextRed = styled_components_1.default.span.withConfig({ displayName: "TextRed", componentId: "sc-1up4szs" }) `
	color: #e44026;
`;
const TextYellow = styled_components_1.default.span.withConfig({ displayName: "TextYellow", componentId: "sc-jl0acm" }) `
	color: #eb8e2a;
`;
const getItemsCount = (data) => (data.length > 100 ? `${99}+` : data.length);
const Header = ({ multiSearch }) => {
    const { t } = react_i18next_1.useTranslation();
    const { categories } = react_redux_1.useSelector((state) => state);
    const { catList } = categories;
    return (react_1.default.createElement(HeaderWrapper, { widgetState: multiSearch.widgetState },
        react_1.default.createElement(HeaderDescription, { widgetState: multiSearch.widgetState },
            t('similar_ext_similar_on'),
            "\u00A0",
            react_1.default.createElement(TextYellow, null, "Ali"),
            react_1.default.createElement(TextRed, null, "Express"),
            (multiSearch.results.some((e) => e.shop === 'beru') && t('similar_ext_and_beru')) || '',
            "\u00A0\u00A0(",
            getItemsCount(multiSearch.results),
            ")"),
        (catList === null || catList === void 0 ? void 0 : catList.length) > 0 && react_1.default.createElement(MoreInfo, null, t('specify_category'))));
};
exports.Header = Header;


/***/ }),

/***/ 911:
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
exports.ItemList = exports.ItemListComp = exports.ItemListInnerWrapper = exports.ItemListWrapper = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importDefault(__webpack_require__(3));
const Item_1 = __webpack_require__(337);
const getHeight = ({ widgetState, categoriesHeight, isHot }) => isHot
    ? 'auto'
    : widgetState === 'sm'
        ? 0
        : widgetState === 'md'
            ? '305px'
            : `calc(100vh - ${window.innerHeight - document.documentElement.clientHeight}px - 82px - 59px - 40px - ${categoriesHeight}px)`;
exports.ItemListWrapper = styled_components_1.default.div.withConfig({ displayName: "ItemListWrapper", componentId: "sc-x76bxg" }) `
	background: ${({ ready }) => (!ready ? '#FFF' : 'none')};
	height: ${getHeight};
	position: relative;
`;
const getOverflow = ({ widgetState }) => (widgetState === 'lg' ? 'scroll' : 'scroll');
const getPadding = ({ widgetState }) => (widgetState !== 'lg' ? '0 9px 0' : '9px 9px 20px');
exports.ItemListInnerWrapper = styled_components_1.default.div.withConfig({ displayName: "ItemListInnerWrapper", componentId: "sc-1duot99" }) `
	align-content: flex-start;
	bottom: 0;
	display: flex;
	flex-wrap: wrap;
	height: calc(100%);
	left: 0;
	width: calc(100% + 30px);
	overflow-y: ${getOverflow};
	padding: ${getPadding};
	padding-bottom: 19px;
	position: relative;
	top: 0;
	//* {
	//  transition-duration: 100ms!important;
	//  transition-timing-function: linear!important;
	//}
`;
const getItemsFilter = (CatStore) => (e) => !CatStore.chosenCategories.length || CatStore.chosenCategories.some((cat) => +e.category && +e.category === +cat);
const ItemListComp = ({ isHot = false, results, widgetState, categoriesHeight = 0, isRu, citem = {}, wrapperRef }) => (react_1.default.createElement(exports.ItemListWrapper, { ready: !!results.length, widgetState: widgetState, categoriesHeight: categoriesHeight, isHot: isHot },
    react_1.default.createElement(exports.ItemListInnerWrapper, { ref: wrapperRef, widgetState: widgetState }, ((results.length && results) || [...Array(8)].map((_e, i) => ({ id: i + 1 }))) // placeholder
        .map((item, i) => (react_1.default.createElement(Item_1.Item, { isHot: isHot, key: i, itemData: item, name: isRu ? item.name : item.nameeng || item.name, itemPrice: (item.realsale && (item.max * (100 + item.realsale)) / 100) || citem.price, ready: !!results.length, large: !isHot && widgetState === 'lg' }))))));
exports.ItemListComp = ItemListComp;
const ItemList = () => {
    var _a, _b;
    const { multiSearch, categories } = react_redux_1.useSelector((state) => state);
    const { widgetState, item: citem } = multiSearch;
    const settings = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.settings);
    const isRu = settings.locale.value === 'ru';
    const [results, setResults] = react_1.useState([]);
    react_1.useEffect(() => {
        setResults(multiSearch.results.filter(getItemsFilter(categories)) /* .slice(0, widgetState === 'md' ? 8 : widgetState === 'lg' ? 999 : 24) */);
    }, [multiSearch.results, widgetState]);
    const wrapperRef = react_1.default.createRef();
    if (((_a = wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo) && widgetState === 'md') {
        (_b = wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current) === null || _b === void 0 ? void 0 : _b.scrollTo(0, 0);
    }
    return (react_1.default.createElement(exports.ItemListComp, { results: results, widgetState: widgetState, categoriesHeight: categories.categoriesHeight, isRu: isRu, citem: citem, wrapperRef: wrapperRef }));
};
exports.ItemList = ItemList;


/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const react_i18next_1 = __webpack_require__(8);
const react_redux_1 = __webpack_require__(7);
const multiShops_1 = __webpack_require__(65);
const multiSearchUI_1 = __webpack_require__(99);
const stores_1 = __webpack_require__(10);
const PriceButton_1 = __webpack_require__(311);
const ArrowIcon_1 = __webpack_require__(350);
const Feedback_1 = __webpack_require__(913);
const GearIcon_1 = __webpack_require__(914);
const RadarLogo_1 = __webpack_require__(915);
const OpenButton = styled_components_1.default(PriceButton_1.Button).withConfig({ displayName: "OpenButton", componentId: "sc-1gvvg2h" }) `
	background-color: #50a2ff;
	border-radius: 4px;
	color: #fff;
	font-family: 'Open Sans', sans-serif;
	font-size: 13px;
	font-weight: 600;
	height: 24px;
	line-height: 24px;
	margin: 0;
	margin-left: auto;
	padding: 0;
	text-align: center;
	width: 113px;
	&& {
		transition: box-shadow 0.3s, background-color 0.3s;
	}
	&:hover {
		background-color: #50a2ff;
		box-shadow: 2px 2px 10px rgba(80, 162, 255, 0.15), 1px 1px 2px rgba(80, 162, 255, 0.2);
	}
	&:active {
		background-color: #2889f4;
	}
`;
const ArrowWrapper = styled_components_1.default.div.withConfig({ displayName: "ArrowWrapper", componentId: "sc-1oehs7x" }) `
	margin-left: 8px;
`;
const GearWrapper = styled_components_1.default.div.withConfig({ displayName: "GearWrapper", componentId: "sc-1wup4qj" }) `
	margin-left: ${({ widgetState }) => (widgetState === 'lg' ? 'auto' : '8px')};
`;
const IconWrapper = styled_components_1.default.div.withConfig({ displayName: "IconWrapper", componentId: "sc-1m3vdlu" }) `
	align-items: center;
	border-radius: 2px;
	cursor: pointer;
	display: flex;
	height: 23px;
	justify-content: center;
	transition: background-color 0.3s;
	width: 23px;
	:hover {
		background-color: rgba(0, 0, 0, 0.13);
	}
`;
const TextWrapper = styled_components_1.default.div.withConfig({ displayName: "TextWrapper", componentId: "sc-1d1uzpb" }) `
	align-items: center;
	display: flex;
	${({ hideFeedback }) => (hideFeedback ? '' : 'width: 100%;')}
`;
const LogoWrapper = styled_components_1.default.a.withConfig({ displayName: "LogoWrapper", componentId: "sc-1ehgdva" }) `
	/* override border-bottom on citilink.ru */
	border: none;
	display: flex;
`;
const getBoxShadow = ({ widgetState }) => (widgetState !== 'sm' ? '0 0 5px rgba(0, 0, 0, .1)' : 'none');
const getHeight = ({ widgetState }) => (widgetState !== 'sm' ? (widgetState === 'lg' ? '40px' : '30px') : 0);
const getPadding = ({ widgetState }) => (widgetState === 'lg' ? '0 16px 0 20px' : '0 9px');
const getColor = ({ widgetState }) => (widgetState === 'lg' ? '#f3f8ff' : '#FFF');
const FooterWrapper = styled_components_1.default.div.withConfig({ displayName: "FooterWrapper", componentId: "sc-tzghc8" }) `
	align-items: center;
	background-color: ${getColor};
	box-shadow: ${getBoxShadow};
	display: flex;
	font-family: 'Open Sans SemiBold', sans-serif;
	height: ${getHeight};
	justify-content: space-between;
	overflow: hidden;
	padding: ${getPadding};
	position: relative;
`;
const ShowAll = ({ onClick }) => {
    const { t } = react_i18next_1.useTranslation();
    return react_1.default.createElement(OpenButton, { onClick: onClick }, t('show_all'));
};
const Footer = () => {
    const dispatch = react_redux_1.useDispatch();
    const { widgetState, hideFeedback, results } = react_redux_1.useSelector((state) => state === null || state === void 0 ? void 0 : state.multiSearch);
    return (react_1.default.createElement(FooterWrapper, { widgetState: widgetState },
        react_1.default.createElement(LogoWrapper, { href: "https://aliradar.com", target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement(RadarLogo_1.RadarLogo, null)),
        react_1.default.createElement(TextWrapper, { hideFeedback: hideFeedback },
            react_1.default.createElement(Feedback_1.Feedback, null),
            react_1.default.createElement(GearWrapper, { widgetState: widgetState },
                react_1.default.createElement(IconWrapper, null,
                    react_1.default.createElement(GearIcon_1.GearIcon, null))),
            widgetState === 'lg' ? (react_1.default.createElement(ArrowWrapper, { onClick: () => dispatch(stores_1.multiSearchSliceActions.closeWidget()) },
                react_1.default.createElement(IconWrapper, null,
                    react_1.default.createElement(ArrowIcon_1.ArrowIcon, { options: {
                            fill: '#a3a3a3',
                            fillHover: '#999',
                            fillActive: '#898989',
                            width: 14
                        } })))) : (!!results.length && (react_1.default.createElement(ShowAll, { onClick: () => {
                    multiSearchUI_1.multiSearchUI.openFullWidget();
                    multiShops_1.click();
                } }))))));
};
exports.Footer = Footer;


/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const react_redux_1 = __webpack_require__(7);
const react_i18next_1 = __webpack_require__(8);
const search_1 = __webpack_require__(134);
const multiSearchUI_1 = __webpack_require__(99);
const multiShops_1 = __webpack_require__(65);
const StyledButton = styled_components_1.default.button.withConfig({ displayName: "StyledButton", componentId: "sc-1klva48" }) `
	border: 1px solid #daebfe;
	border-radius: 2px;
	color: #1b1b1b;
	font-family: 'Open Sans', sans-serif;
	font-size: 11px;
	font-weight: 600;
	height: 20px;
	/* override line-height on mvideo.ru */
	line-height: inherit;
	outline: none;
	padding: 0 0 3px;
	transition: background-color 0.3s, border-color 0.3s;
	width: 46px;
	:hover {
		background-color: #cae3fd;
		border-color: #cae3fd;
	}
	:active {
		background-color: #b2d6fd;
		border-color: #b2d6fd;
	}
`;
const ButtonWrapper = styled_components_1.default.div.withConfig({ displayName: "ButtonWrapper", componentId: "sc-1dzo2u9" }) `
	display: flex;
	margin-left: 14px;
	text-align: center;
`;
const HighlightedButton = styled_components_1.default(StyledButton).withConfig({ displayName: "HighlightedButton", componentId: "sc-hkf997" }) `
	background-color: #daebfe;
	margin-left: 9px;
`;
const TransparentButton = styled_components_1.default(StyledButton).withConfig({ displayName: "TransparentButton", componentId: "sc-c65sy5" }) `
	background-color: transparent;
`;
const QuestionSpan = styled_components_1.default.span.withConfig({ displayName: "QuestionSpan", componentId: "sc-1ip8q8o" }) `
	color: #1b1b1b;
	font-size: 11px;
	line-height: 15px;
	margin: 0 0 1px 55px;
	text-align: center;
`;
const Question = () => {
    const { t } = react_i18next_1.useTranslation();
    return react_1.default.createElement(QuestionSpan, null, t('similar_ext_question'));
};
const ThankYou = () => {
    const { t } = react_i18next_1.useTranslation();
    return react_1.default.createElement(QuestionSpan, { marginRight: true }, t('similar_ext_thank_you'));
};
const Yes = ({ cats, hideFeed }) => {
    const { t } = react_i18next_1.useTranslation();
    return (react_1.default.createElement(HighlightedButton, { onClick: () => {
            multiShops_1.useful();
            search_1.rate('useful', cats);
            hideFeed();
        } }, t('yes')));
};
const No = ({ cats, hideFeed }) => {
    const { t } = react_i18next_1.useTranslation();
    return (react_1.default.createElement(TransparentButton, { onClick: () => {
            multiShops_1.useless();
            search_1.rate('useless', cats);
            hideFeed();
        } }, t('no')));
};
const Feedback = () => {
    const multiSearch = react_redux_1.useSelector((state) => state.multiSearch);
    const catList = react_redux_1.useSelector((state) => { var _a; return (_a = state === null || state === void 0 ? void 0 : state.categories) === null || _a === void 0 ? void 0 : _a.catList; });
    const cats = catList.slice(0, 3).map((e) => e.id);
    if ((multiSearch === null || multiSearch === void 0 ? void 0 : multiSearch.hideFeedback) || (multiSearch === null || multiSearch === void 0 ? void 0 : multiSearch.widgetState) !== 'lg') {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        multiSearch.feedbackClicked ? react_1.default.createElement(ThankYou, null) : react_1.default.createElement(Question, null),
        multiSearch.feedbackClicked ? null : (react_1.default.createElement(ButtonWrapper, null,
            react_1.default.createElement(No, { cats: cats, hideFeed: () => multiSearchUI_1.multiSearchUI.clickFeedBack() }),
            react_1.default.createElement(Yes, { cats: cats, hideFeed: () => multiSearchUI_1.multiSearchUI.clickFeedBack() })))));
};
exports.Feedback = Feedback;


/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GearIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const settingsOpened_1 = __webpack_require__(169);
const GearIconWrapper = styled_components_1.default.svg.withConfig({ displayName: "GearIconWrapper", componentId: "sc-oou3pw" }) `
	fill: #a3a3a3;
	transition: fill 0.3s;
	&:hover {
		fill: #999;
	}
	&:active {
		fill: #898989;
	}
`;
const GearIcon = () => (react_1.default.createElement(GearIconWrapper, { width: "17", height: "17", viewBox: "0 0 17 17", xmlns: "http://www.w3.org/2000/svg", onClick: () => {
        settingsOpened_1.settingsOpenedMetric();
        window.open(chrome.runtime.getURL('settings.html'));
    } },
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.4004 7.13763C16.6413 7.13763 16.9199 7.31721 16.9468 7.55617C17.0188 8.19996 17.0179 8.85006 16.943 9.48923C16.9135 9.738 16.6892 9.92573 16.4455 9.90594L16.3404 9.90322C15.589 9.90322 14.8904 10.3661 14.6015 11.0555C14.2941 11.7878 14.4861 12.6402 15.0777 13.176C15.2632 13.3438 15.2854 13.6272 15.1285 13.8219C14.7243 14.3254 14.2619 14.7828 13.7534 15.1815C13.5576 15.3327 13.2799 15.3107 13.1118 15.1279C12.6061 14.5723 11.7062 14.3632 11.0067 14.6489C10.2831 14.9452 9.81518 15.6738 9.84371 16.4615C9.852 16.7088 9.66938 16.9211 9.42288 16.9483C9.11186 16.9829 8.80078 17 8.48976 17C8.16211 17 7.83534 16.9811 7.51053 16.9432C7.26226 16.9146 7.07863 16.6968 7.09337 16.4467C7.13853 15.6502 6.67703 14.9087 5.94335 14.6018C5.24288 14.3078 4.33284 14.516 3.82428 15.0785C3.65546 15.2645 3.37208 15.2866 3.17732 15.1297C2.68078 14.7301 2.22756 14.2723 1.8326 13.7693C1.67934 13.575 1.70243 13.2958 1.88428 13.1288C2.46571 12.5958 2.65674 11.7514 2.35957 11.0269C2.06146 10.3015 1.3508 9.84319 0.610603 9.8621C0.367012 9.8621 0.0799029 9.68411 0.0532098 9.44413C-0.0187732 8.80035 -0.0178876 8.14967 0.0568785 7.51108C0.0863548 7.26604 0.27833 7.08513 0.547855 7.0938C1.37844 7.0938 2.10396 6.64351 2.3974 5.94482C2.70475 5.21198 2.51372 4.35972 1.92211 3.82397C1.73753 3.65604 1.71445 3.37311 1.87138 3.17791C2.27374 2.67581 2.73707 2.21812 3.24652 1.81843C3.44121 1.66669 3.72086 1.6892 3.88798 1.87238C4.39363 2.4285 5.29734 2.63527 5.99218 2.35146C6.71675 2.05468 7.18382 1.32607 7.15612 0.537885C7.14783 0.291012 7.33057 0.0787367 7.57701 0.0515382C8.21385 -0.0191146 8.85436 -0.0168375 9.4893 0.0565984C9.73858 0.0856312 9.92132 0.30303 9.90646 0.553066C9.86129 1.3491 10.3228 2.09067 11.0546 2.39852C11.7579 2.69194 12.668 2.4834 13.1747 1.92229C13.3427 1.73626 13.6269 1.71463 13.8207 1.87011C14.3154 2.26645 14.7686 2.72376 15.1673 3.23003C15.3205 3.42428 15.2983 3.70392 15.1156 3.87097C14.5351 4.40349 14.3441 5.24841 14.6403 5.97291C14.9301 6.68026 15.6214 7.13763 16.4004 7.13763ZM5.67825 8.51814C5.67825 10.0816 6.95004 11.3534 8.51355 11.3534C10.077 11.3534 11.3488 10.0816 11.3488 8.51814C11.3488 6.95474 10.077 5.68292 8.51355 5.68292C6.95004 5.68292 5.67825 6.95474 5.67825 8.51814Z" })));
exports.GearIcon = GearIcon;


/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadarLogo = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const Svg = styled_components_1.default.svg.withConfig({ displayName: "Svg", componentId: "sc-kceg56" }) `
	fill: #a3a3a3;
	transition: fill 0.3s;
	&:hover {
		fill: #999;
	}
	&:active {
		fill: #898989;
	}
`;
const RadarLogo = () => (react_1.default.createElement(Svg, { width: "62", height: "8", viewBox: "0 0 62 8", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { id: "logo_Aliradar", fillRule: "evenodd", clipRule: "evenodd", d: "M23.0517 0C24.2401 0 25.1507 0.208434 25.783 0.625301C26.4155 1.04217 26.7316 1.69028 26.7316 2.56901C26.7316 3.11751 26.604 3.56242 26.3487 3.90436C26.0935 4.2461 25.7259 4.5146 25.2458 4.71006C25.406 4.9053 25.5735 5.1286 25.7488 5.38035C25.9241 5.63189 26.0973 5.89495 26.2688 6.16909C26.4401 6.44344 26.6059 6.72868 26.766 7.02564C26.9258 7.32217 27.0744 7.61327 27.2115 7.89871H25.2192C25.0726 7.6434 24.9259 7.38412 24.7773 7.12127C24.6268 6.85843 24.4744 6.60291 24.3182 6.35492C24.162 6.10715 24.0058 5.87234 23.8536 5.65073C23.701 5.42911 23.5469 5.22842 23.3945 5.04803H22.5145V7.89871H20.7313V0.202783C21.1199 0.127655 21.5217 0.0751282 21.9371 0.0449932C22.3525 0.0150675 22.724 0 23.0517 0ZM5.82855 7.06352C5.93128 7.34897 6.02468 7.62688 6.11425 7.89914H8.02307C7.724 7.05787 7.44191 6.28022 7.17341 5.56682C6.9049 4.853 6.64383 4.18061 6.38679 3.54966C6.12953 2.91892 5.8761 2.31957 5.62288 1.75244C5.37135 1.18553 5.1141 0.63138 4.85345 0.090625H3.16368C2.89708 0.63138 2.63813 1.18553 2.39043 1.75244C2.14103 2.31957 1.8895 2.91892 1.63437 3.54966C1.37712 4.18061 1.11625 4.853 0.847539 5.56682C0.580945 6.28022 0.299069 7.05787 0 7.89914H1.8513C1.93896 7.62856 2.03235 7.35253 2.13126 7.0652C2.23251 6.77996 2.33333 6.49452 2.43245 6.20886H5.52566C5.62648 6.49263 5.72752 6.77787 5.82855 7.06352ZM3.79616 2.32144C3.87427 2.12787 3.93137 1.97217 3.97148 1.85938C4.01882 1.97029 4.08186 2.12222 4.15806 2.31768C4.23617 2.51293 4.32574 2.73831 4.42656 2.99362C4.52951 3.25102 4.63797 3.5327 4.75025 3.84075C4.86466 4.14859 4.98288 4.47358 5.10281 4.81156H2.83804C2.96369 4.47358 3.08553 4.15047 3.20757 3.84431L3.28076 3.65662L3.28078 3.65657C3.37269 3.42096 3.4582 3.20176 3.5353 2.99927C3.6323 2.74187 3.71975 2.51669 3.79616 2.32144ZM14.8802 6.38925V7.89914H9.58843V0.090625H11.3716V6.38925H14.8802ZM18.3544 0.090625H16.5714V7.89914H18.3544V0.090625ZM22.8059 1.51052C22.9088 1.50299 23.0249 1.49922 23.1546 1.49922C23.726 1.49922 24.1584 1.58 24.4517 1.74155C24.7448 1.90311 24.8917 2.17537 24.8917 2.55834C24.8917 2.95658 24.7468 3.23826 24.4574 3.40358C24.1677 3.5687 23.6878 3.65136 23.0173 3.65136H22.5145V1.53291C22.6059 1.52559 22.7029 1.51805 22.8059 1.51052ZM34.5714 7.89914C34.4818 7.62688 34.3886 7.34897 34.2857 7.06352L34.2605 6.99242C34.1679 6.73054 34.0754 6.46908 33.9828 6.20886H30.8896C30.7905 6.49452 30.6896 6.77996 30.5884 7.0652C30.4895 7.35253 30.3961 7.62856 30.3086 7.89914H28.4571C28.7562 7.05787 29.0381 6.28022 29.3047 5.56682C29.5734 4.853 29.8342 4.18061 30.0915 3.54966C30.3466 2.91892 30.5982 2.31957 30.8476 1.75244C31.0953 1.18553 31.3542 0.63138 31.6208 0.090625H33.3106C33.5714 0.63138 33.8285 1.18553 34.08 1.75244C34.3332 2.31957 34.5867 2.91892 34.8437 3.54966C35.101 4.18061 35.3618 4.853 35.6303 5.56682C35.899 6.28022 36.1809 7.05787 36.48 7.89914H34.5714ZM32.2534 2.32144C32.3315 2.12787 32.3886 1.97217 32.4287 1.85938C32.476 1.97029 32.5391 2.12222 32.6153 2.31768C32.6934 2.51293 32.783 2.73831 32.884 2.99362C32.9867 3.25102 33.0952 3.5327 33.2077 3.84075C33.3219 4.14859 33.4401 4.47358 33.56 4.81156H31.2953C31.4209 4.47358 31.5428 4.15047 31.6648 3.84431L31.7381 3.65643L31.7382 3.65596C31.8301 3.42058 31.9155 3.20158 31.9925 2.99927C32.0895 2.74187 32.1772 2.51669 32.2534 2.32144ZM39.8288 6.46835C39.9126 6.47588 40.0096 6.48154 40.1202 6.4853C40.2306 6.48907 40.3619 6.49074 40.5143 6.49074C41.4058 6.49074 42.0668 6.26933 42.4972 5.8261C42.9277 5.38286 43.1429 4.77054 43.1429 3.98933C43.1429 3.17045 42.937 2.5508 42.5259 2.13017C42.1143 1.70954 41.4629 1.49922 40.5714 1.49922C40.4496 1.49922 40.3237 1.5011 40.1943 1.50487C40.0648 1.50864 39.943 1.51805 39.8288 1.53291V6.46835ZM44.6629 5.75787C44.8762 5.25437 44.983 4.66485 44.983 3.9887C44.983 3.28262 44.8762 2.67783 44.6629 2.17474C44.4496 1.67145 44.1448 1.25814 43.7485 0.935231C43.3524 0.612117 42.8783 0.375432 42.3257 0.225385C41.7735 0.0751282 41.1581 0 40.48 0C40.1601 0 39.7774 0.0131841 39.3315 0.0395522C38.8857 0.065711 38.4572 0.116355 38.0456 0.191483V7.79743C38.4572 7.87988 38.8764 7.93429 39.303 7.96066C39.7296 7.98703 40.1028 8 40.4229 8C41.124 8 41.7563 7.91755 42.3202 7.75222C42.884 7.58711 43.362 7.33912 43.7542 7.00848C44.1467 6.67804 44.4496 6.26117 44.6629 5.75787ZM52.0458 7.89914C51.9563 7.62688 51.8629 7.34897 51.7601 7.06352C51.6591 6.77787 51.5581 6.49263 51.4573 6.20886H48.364C48.2649 6.49452 48.1639 6.77996 48.0629 7.0652C47.9637 7.35253 47.8706 7.62856 47.7829 7.89914H45.9316C46.2307 7.05787 46.5125 6.28022 46.7791 5.56682C47.0478 4.853 47.3085 4.18061 47.566 3.54966C47.8209 2.91892 48.0726 2.31957 48.322 1.75244C48.5697 1.18553 48.8287 0.63138 49.0953 0.090625H50.7848C51.0457 0.63138 51.3029 1.18553 51.5545 1.75244C51.8077 2.31957 52.0611 2.91892 52.3182 3.54966C52.5752 4.18061 52.8363 4.853 53.1048 5.56682C53.3733 6.28022 53.6554 7.05787 53.9544 7.89914H52.0458ZM49.7275 2.32144C49.8057 2.12787 49.863 1.97217 49.9029 1.85938C49.9504 1.97029 50.0132 2.12222 50.0896 2.31768C50.1678 2.51293 50.2573 2.73831 50.3582 2.99362C50.4609 3.25102 50.5696 3.5327 50.6818 3.84075C50.7963 4.14859 50.9143 4.47358 51.0344 4.81156H48.7696C48.8953 4.47358 49.0171 4.15047 49.1392 3.84431L49.2122 3.65704C49.3042 3.42125 49.3897 3.20189 49.4669 2.99927C49.5639 2.74187 49.6513 2.51669 49.7275 2.32144ZM57.8402 0C59.0286 0 59.9392 0.208434 60.5715 0.625301C61.204 1.04217 61.5201 1.69028 61.5201 2.56901C61.5201 3.11751 61.3925 3.56242 61.1372 3.90436C60.882 4.2461 60.5144 4.5146 60.0343 4.71006C60.1945 4.9053 60.362 5.1286 60.5373 5.38035C60.7127 5.63189 60.8859 5.89495 61.0571 6.16909C61.2286 6.44344 61.3944 6.72868 61.5545 7.02564C61.7143 7.32217 61.8629 7.61327 62 7.89871H60.0078C59.8611 7.6434 59.7144 7.38412 59.5658 7.12127C59.4153 6.85843 59.2629 6.60291 59.1067 6.35492C58.9505 6.10715 58.7943 5.87234 58.6421 5.65073C58.4895 5.42911 58.3354 5.22842 58.183 5.04803H57.303V7.89871H55.52V0.202783C55.9087 0.127655 56.3105 0.0751282 56.7258 0.0449932C57.141 0.0150675 57.5125 0 57.8402 0ZM57.5944 1.51052C57.6973 1.50299 57.8134 1.49922 57.9431 1.49922C58.5145 1.49922 58.9469 1.58 59.2402 1.74155C59.5333 1.90311 59.6802 2.17537 59.6802 2.55834C59.6802 2.95658 59.5352 3.23826 59.2459 3.40358C58.9562 3.5687 58.4763 3.65136 57.8058 3.65136H57.3029V1.53291C57.3944 1.52559 57.4914 1.51805 57.5944 1.51052Z" })));
exports.RadarLogo = RadarLogo;


/***/ }),

/***/ 916:
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
exports.Categories = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_i18next_1 = __webpack_require__(8);
const react_redux_1 = __webpack_require__(7);
const styled_components_1 = __importDefault(__webpack_require__(3));
const stores_1 = __webpack_require__(10);
const search_1 = __webpack_require__(134);
const multiShops_1 = __webpack_require__(65);
const ArrowIcon_1 = __webpack_require__(350);
const getTransform = ({ collapsed }) => (collapsed ? 'rotateZ(0deg)' : 'rotateZ(180deg)');
const ArrowWrapper = styled_components_1.default.div.withConfig({ displayName: "ArrowWrapper", componentId: "sc-17mfyh8" }) `
	margin-left: 0.5em;
	transform: ${getTransform};
	transition: transform 100ms;
`;
const rowHeight = 36;
const rowMargin = 11;
const getPadding = ({ height }) => (height != 0 ? '0 10px 11px 20px' : '0');
const CategoriesWrapper = styled_components_1.default.div.withConfig({ displayName: "CategoriesWrapper", componentId: "sc-1ubjkpo" }) `
	background-color: #ffffff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	height: ${({ height }) => height}px;
	overflow-y: hidden;
	padding: ${getPadding};
	position: relative;
	z-index: 1;

	& * {
		transition-duration: 300ms;
		transition-property: background-color, color;
	}
`;
const CategoriesWrapperInner = styled_components_1.default.div.withConfig({ displayName: "CategoriesWrapperInner", componentId: "sc-1qigyts" }) `
	align-content: flex-start;
	display: flex;
	flex-wrap: wrap;
`;
const getBackgroundColor = ({ active }) => (active ? '#50a2ff' : '#f3f8ff');
const getColor = ({ active }) => (active ? '#fff' : '#1b1b1b');
const CategoryItem = styled_components_1.default.div.withConfig({ displayName: "CategoryItem", componentId: "sc-1381uk1" }) `
	background-color: ${getBackgroundColor};
	border-radius: 4px;
	color: ${getColor};
	cursor: pointer;
	display: inline-block;
	font-family: 'Open Sans', sans-serif;
	font-size: 13px;
	font-weight: 600;
	height: 27px;
	letter-spacing: -0.3px;
	line-height: 27px;
	margin: 0 9px 9px 0;
	padding: 0 9px;
	user-select: none;
`;
const CategoryMore = styled_components_1.default.div.withConfig({ displayName: "CategoryMore", componentId: "sc-2j9c2p" }) `
	border-radius: 4px;
	color: #3490f6;
	cursor: pointer;
	display: flex;
	font-family: 'Open Sans', sans-serif;
	font-size: 13px;
	font-weight: 600;
	height: 27px;
	line-height: 27px;
	margin-left: auto;
	margin-right: 9px;
	order: 999;
	padding: 0 10px;
	transition: background-color 0.3s;
	:hover {
		background-color: #f3f8ff;
	}
`;
const MoreButton = ({ isShortList, needMore }) => {
    const dispatch = react_redux_1.useDispatch();
    const { t } = react_i18next_1.useTranslation();
    if (needMore) {
        return (react_1.default.createElement(CategoryMore, { active: !isShortList, onClick: () => {
                dispatch(stores_1.categoriesSlice.toggleCategoriesState());
                multiShops_1.categoryToggle();
            } },
            isShortList ? t('more') : t('hide'),
            react_1.default.createElement(ArrowWrapper, { collapsed: isShortList },
                react_1.default.createElement(ArrowIcon_1.ArrowIcon, { options: {
                        fill: '#3490f6',
                        fillHover: '#3490f6',
                        fillActive: '#3490f6',
                        width: 12
                    } }))));
    }
    return null;
};
const Categories = () => {
    const dispatch = react_redux_1.useDispatch();
    const { multiSearch, settings, categories } = react_redux_1.useSelector((state) => state);
    const { catList, isShortList, rowsCount, categoriesHeight, needMore, chosenCategories } = categories;
    react_1.useEffect(() => {
        if (multiSearch.widgetState === 'lg' && rowsCount) {
            dispatch(stores_1.categoriesSlice.setCategoriesHeight(rowsCount * rowHeight + rowMargin));
        }
        else {
            dispatch(stores_1.categoriesSlice.setCategoriesHeight(0));
        }
    }, [multiSearch === null || multiSearch === void 0 ? void 0 : multiSearch.widgetState, rowsCount]);
    return (react_1.default.createElement(react_1.default.Fragment, null, (catList === null || catList === void 0 ? void 0 : catList.length) > 0 && (react_1.default.createElement(CategoriesWrapper, { widgetState: multiSearch.widgetState, height: categoriesHeight },
        react_1.default.createElement(CategoriesWrapperInner, null,
            catList.map((e) => {
                const isActive = chosenCategories.some((a) => a == e.id || (e.id_ru && a == e.id_ru));
                const name = (settings.locale.value === 'ru' ? e.name_ru || e.name_en : e.name_en) || 'no name';
                return (react_1.default.createElement(CategoryItem, { length: name.length, key: e.id, active: isActive, onClick: () => {
                        if (isActive) {
                            dispatch(stores_1.categoriesSlice.removeCategory(e.id));
                            e.id_ru && dispatch(stores_1.categoriesSlice.removeCategory(e.id_ru));
                        }
                        else {
                            dispatch(stores_1.categoriesSlice.addCategory(e.id));
                            e.id_ru && dispatch(stores_1.categoriesSlice.addCategory(e.id_ru));
                            search_1.rate('category', [e.id]);
                            multiShops_1.categoryClick(e.id);
                        }
                    } }, name));
            }),
            react_1.default.createElement(MoreButton, { needMore: needMore, isShortList: isShortList }))))));
};
exports.Categories = Categories;


/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderItem = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const react_redux_1 = __webpack_require__(7);
const stores_1 = __webpack_require__(10);
const CloseIcon2_1 = __webpack_require__(176);
const getPrice_1 = __webpack_require__(80);
const CloseIconWrapper = styled_components_1.default.div.withConfig({ displayName: "CloseIconWrapper", componentId: "sc-tsm579" }) `
	align-self: flex-start;
	cursor: pointer;
	display: flex;
	margin: 14px 0 0 auto;
`;
const getBorderBottom = ({ widgetState }) => (widgetState === 'lg' ? '.5px solid rgba(0, 0, 0, .11)' : 'none');
const getHeight = ({ widgetState }) => (widgetState === 'lg' ? '82px' : 0);
const ItemInfoWrapper = styled_components_1.default.div.withConfig({ displayName: "ItemInfoWrapper", componentId: "sc-1k2hobs" }) `
	align-items: center;
	background: #fff;
	border-bottom: ${getBorderBottom};
	display: flex;
	height: ${getHeight};
	overflow: hidden;
	padding: 0 20px;
`;
const ItemInfoText = styled_components_1.default.div.withConfig({ displayName: "ItemInfoText", componentId: "sc-1pyaqcn" }) `
	color: #1b1b1b;
	font-size: 15px;
	line-height: 24px;
	width: calc(100% - 52px - 20px - 20px - 14px);
	p {
		margin-bottom: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}
`;
const ItemInfoCurrency = styled_components_1.default.span.withConfig({ displayName: "ItemInfoCurrency", componentId: "sc-rbieyg" }) `
	font-size: 0.95em;
	font-weight: bold;
`;
const ItemInfoName = styled_components_1.default.p.withConfig({ displayName: "ItemInfoName", componentId: "sc-1teqat" }) ``;
const ItemInfoImageWraper = styled_components_1.default.div.withConfig({ displayName: "ItemInfoImageWraper", componentId: "sc-c00g0y" }) `
	align-items: center;
	border-radius: 4px;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
	display: flex;
	height: 52px;
	justify-content: center;
	margin-right: 20px;
	width: 52px;
	& > img {
		max-height: 85%;
		max-width: 85%;
	}
`;
const HeaderItem = ({ multiSearch }) => {
    var _a, _b;
    const dispatch = react_redux_1.useDispatch();
    return (react_1.default.createElement(ItemInfoWrapper, { widgetState: multiSearch.widgetState },
        react_1.default.createElement(ItemInfoImageWraper, null,
            react_1.default.createElement("img", { src: multiSearch.item.image || chrome.runtime.getURL('/assets/img/image_placeholder.svg'), alt: "" })),
        react_1.default.createElement(ItemInfoText, null,
            react_1.default.createElement(ItemInfoName, null, multiSearch.item.full_name),
            getPrice_1.getTextPriceWithCurrency({
                price: (_a = multiSearch === null || multiSearch === void 0 ? void 0 : multiSearch.item) === null || _a === void 0 ? void 0 : _a.price,
                curr: (_b = multiSearch === null || multiSearch === void 0 ? void 0 : multiSearch.item) === null || _b === void 0 ? void 0 : _b.curr
            })),
        !multiSearch.popup && (react_1.default.createElement(CloseIconWrapper, { active: multiSearch.widgetState !== 'lg', onClick: () => dispatch(stores_1.multiSearchSliceActions.closeWidget()) },
            react_1.default.createElement(CloseIcon2_1.CloseIcon2, { options: {
                    fill: '#959595',
                    fillHover: '#777',
                    fillActive: '#666',
                    size: 14
                } })))));
};
exports.HeaderItem = HeaderItem;


/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetWrapper = exports.getTransition = exports.getBoxShadow = exports.getBorderRadius = exports.Widget = void 0;
const styled_components_1 = __importDefault(__webpack_require__(3));
const getWidth = ({ widgetState }) => (widgetState === 'lg' ? '606px' : '498px');
exports.Widget = styled_components_1.default.div.withConfig({ displayName: "Widget", componentId: "sc-1wq6iog" }) `
	left: ${({ bounds, widgetState }) => widgetState == 'lg' ? 'calc(100vw - 606px)' : `${bounds.left + window.pageXOffset}px`};
	line-height: 16px;
	position: ${({ widgetState }) => (widgetState == 'lg' ? 'fixed' : 'absolute')};
	top: ${({ bounds, widgetState }) => widgetState == 'lg' ? 0 : ~~(bounds.top + bounds.height + window.pageYOffset)}px;

	z-index: 2147483647; /* Больше чем на Clicker */
	&,
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	${({ widgetState }) => (widgetState === 'sm' ? 'display:none;' : '')};
`;
const getBorderRadius = ({ widgetState }) => (widgetState === 'md' && '0 0 6px 6px') || (widgetState === 'lg' && '0') || 'none;';
exports.getBorderRadius = getBorderRadius;
const getBoxShadow = ({ widgetState }) => (widgetState === 'md' && '2px 2px 10px rgba(54, 78, 115, 0.05), 1px 1px 3px rgba(54, 78, 115, 0.1)') ||
    (widgetState === 'lg' && '-10px -10px 29px rgba(0, 0, 0, .07), -2px -2px 4px rgba(0, 0, 0, .15)') ||
    'none;';
exports.getBoxShadow = getBoxShadow;
const getTransition = ({ widgetState, prevState }) => [widgetState, prevState].every((e) => e === 'md' || e === 'sm') &&
    `
  & *, & {
    transition-property: width, height, padding, background-color, border, margin;
    transition-duration:  200ms;
    transition-timing-function: cubic-bezier(0.83, -0.06, 0.3, 1.05);
  }
  `;
exports.getTransition = getTransition;
exports.WidgetWrapper = styled_components_1.default.div.withConfig({ displayName: "WidgetWrapper", componentId: "sc-4avo2f" }) `
	background: #f7f7f7;
	border: ${({ widgetState }) => (widgetState === 'md' ? '0.5px solid #D9E0EE' : 'none')};
	border-radius: ${exports.getBorderRadius};
	border-top: none;
	box-shadow: ${exports.getBoxShadow};
	max-height: calc(100vh - ${() => window.innerHeight - document.documentElement.clientHeight}px);
	overflow: hidden;
	width: ${getWidth};

	& *,
	& {
		transition-duration: 100ms;
		transition-property: width, height, padding, background-color, border, margin;
		transition-timing-function: cubic-bezier(0.83, -0.06, 0.3, 1.05);
	}
`;


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tooltipDisplayedDeleted = exports.tooltipDisplayedNotAvailable = exports.tooltipDisplayedInStock = exports.tooltipDisplayed = exports.hover = exports.closed = exports.clickButton = exports.clickLink = exports.click = void 0;
const sender_1 = __webpack_require__(21);
const CAT = 'ext-tooltip-other-site';
const domain = window.location.hostname.split('.').splice(-2, 2).join('.');
const click = () => sender_1.sendMetric(CAT, 'item-open', domain);
exports.click = click;
const clickLink = () => {
    exports.click();
    sender_1.sendMetric(CAT, 'item-open-button', domain);
};
exports.clickLink = clickLink;
const clickButton = () => {
    exports.click();
    sender_1.sendMetric(CAT, 'item-open-link', domain);
};
exports.clickButton = clickButton;
const closed = () => sender_1.sendMetric(CAT, 'closed', domain);
exports.closed = closed;
const hover = () => firstHover() && sender_1.sendMetric(CAT, 'link-hover', domain);
exports.hover = hover;
const firstHover = async () => {
    // @ts-ignore
    if (!firstHover.checked) {
        // @ts-ignore
        firstHover.checked = true;
        sender_1.sendMetric(CAT, 'link-hover-first', domain);
    }
    return true;
};
const tooltipDisplayed = () => sender_1.sendMetric(CAT, 'tooltip-displayed', domain);
exports.tooltipDisplayed = tooltipDisplayed;
const tooltipDisplayedInStock = () => sender_1.sendMetric(CAT, 'tooltip-displayed-in-stock', domain);
exports.tooltipDisplayedInStock = tooltipDisplayedInStock;
const tooltipDisplayedNotAvailable = () => sender_1.sendMetric(CAT, 'tooltip-displayed-not-available', domain);
exports.tooltipDisplayedNotAvailable = tooltipDisplayedNotAvailable;
const tooltipDisplayedDeleted = () => sender_1.sendMetric(CAT, 'tooltip-displayed-deleted', domain);
exports.tooltipDisplayedDeleted = tooltipDisplayedDeleted;


/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VariableSizeGrid", function() { return /* binding */ VariableSizeGrid; });
__webpack_require__.d(__webpack_exports__, "VariableSizeList", function() { return /* binding */ VariableSizeList; });
__webpack_require__.d(__webpack_exports__, "FixedSizeGrid", function() { return /* binding */ FixedSizeGrid; });
__webpack_require__.d(__webpack_exports__, "FixedSizeList", function() { return /* binding */ FixedSizeList; });
__webpack_require__.d(__webpack_exports__, "areEqual", function() { return /* binding */ areEqual; });
__webpack_require__.d(__webpack_exports__, "shouldComponentUpdate", function() { return /* binding */ shouldComponentUpdate; });

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(45);

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// EXTERNAL MODULE: ../node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__(50);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(49);

// CONCATENATED MODULE: ../node_modules/react-window/dist/index.esm.js







// Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}

var size = -1; // This utility copied from "dom-helpers" package.

function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (size === -1 || recalculate) {
    var div = document.createElement('div');
    var style = div.style;
    style.width = '50px';
    style.height = '50px';
    style.overflow = 'scroll';
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }

  return size;
}
var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

var IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

var defaultItemKey = function defaultItemKey(_ref) {
  var columnIndex = _ref.columnIndex,
      data = _ref.data,
      rowIndex = _ref.rowIndex;
  return rowIndex + ":" + columnIndex;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;

if (false) {}

function createGridComponent(_ref2) {
  var _class, _temp;

  var getColumnOffset = _ref2.getColumnOffset,
      getColumnStartIndexForOffset = _ref2.getColumnStartIndexForOffset,
      getColumnStopIndexForStartIndex = _ref2.getColumnStopIndexForStartIndex,
      getColumnWidth = _ref2.getColumnWidth,
      getEstimatedTotalHeight = _ref2.getEstimatedTotalHeight,
      getEstimatedTotalWidth = _ref2.getEstimatedTotalWidth,
      getOffsetForColumnAndAlignment = _ref2.getOffsetForColumnAndAlignment,
      getOffsetForRowAndAlignment = _ref2.getOffsetForRowAndAlignment,
      getRowHeight = _ref2.getRowHeight,
      getRowOffset = _ref2.getRowOffset,
      getRowStartIndexForOffset = _ref2.getRowStartIndexForOffset,
      getRowStopIndexForStartIndex = _ref2.getRowStopIndexForStartIndex,
      initInstanceProps = _ref2.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref2.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref2.validateProps;
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(Grid, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function Grid(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized(_assertThisInitialized(_this)));
      _this._resetIsScrollingTimeoutId = null;
      _this._outerRef = void 0;
      _this.state = {
        instance: _assertThisInitialized(_assertThisInitialized(_this)),
        isScrolling: false,
        horizontalScrollDirection: 'forward',
        scrollLeft: typeof _this.props.initialScrollLeft === 'number' ? _this.props.initialScrollLeft : 0,
        scrollTop: typeof _this.props.initialScrollTop === 'number' ? _this.props.initialScrollTop : 0,
        scrollUpdateWasRequested: false,
        verticalScrollDirection: 'forward'
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = Object(memoize_one_esm["a" /* default */])(function (overscanColumnStartIndex, overscanColumnStopIndex, overscanRowStartIndex, overscanRowStopIndex, visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex) {
        return _this.props.onItemsRendered({
          overscanColumnStartIndex: overscanColumnStartIndex,
          overscanColumnStopIndex: overscanColumnStopIndex,
          overscanRowStartIndex: overscanRowStartIndex,
          overscanRowStopIndex: overscanRowStopIndex,
          visibleColumnStartIndex: visibleColumnStartIndex,
          visibleColumnStopIndex: visibleColumnStopIndex,
          visibleRowStartIndex: visibleRowStartIndex,
          visibleRowStopIndex: visibleRowStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = Object(memoize_one_esm["a" /* default */])(function (scrollLeft, scrollTop, horizontalScrollDirection, verticalScrollDirection, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          horizontalScrollDirection: horizontalScrollDirection,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          verticalScrollDirection: verticalScrollDirection,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (rowIndex, columnIndex) {
        var _this$props = _this.props,
            columnWidth = _this$props.columnWidth,
            direction = _this$props.direction,
            rowHeight = _this$props.rowHeight;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && columnWidth, shouldResetStyleCacheOnItemSizeChange && direction, shouldResetStyleCacheOnItemSizeChange && rowHeight);

        var key = rowIndex + ":" + columnIndex;
        var style;

        if (itemStyleCache.hasOwnProperty(key)) {
          style = itemStyleCache[key];
        } else {
          var _offset = getColumnOffset(_this.props, columnIndex, _this._instanceProps);

          var isRtl = direction === 'rtl';
          itemStyleCache[key] = style = {
            position: 'absolute',
            left: isRtl ? undefined : _offset,
            right: isRtl ? _offset : undefined,
            top: getRowOffset(_this.props, rowIndex, _this._instanceProps),
            height: getRowHeight(_this.props, rowIndex, _this._instanceProps),
            width: getColumnWidth(_this.props, columnIndex, _this._instanceProps)
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = Object(memoize_one_esm["a" /* default */])(function (_, __, ___) {
        return {};
      });

      _this._onScroll = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientHeight = _event$currentTarget.clientHeight,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollTop = _event$currentTarget.scrollTop,
            scrollHeight = _event$currentTarget.scrollHeight,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
          // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
          // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
          // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.

          var calculatedScrollLeft = scrollLeft;

          if (direction === 'rtl') {
            switch (getRTLOffsetType()) {
              case 'negative':
                calculatedScrollLeft = -scrollLeft;
                break;

              case 'positive-descending':
                calculatedScrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          calculatedScrollLeft = Math.max(0, Math.min(calculatedScrollLeft, scrollWidth - clientWidth));
          var calculatedScrollTop = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
            scrollLeft: calculatedScrollLeft,
            scrollTop: calculatedScrollTop,
            verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward',
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1);
        });
      };

      return _this;
    }

    Grid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = Grid.prototype;

    _proto.scrollTo = function scrollTo(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;

      if (scrollLeft !== undefined) {
        scrollLeft = Math.max(0, scrollLeft);
      }

      if (scrollTop !== undefined) {
        scrollTop = Math.max(0, scrollTop);
      }

      this.setState(function (prevState) {
        if (scrollLeft === undefined) {
          scrollLeft = prevState.scrollLeft;
        }

        if (scrollTop === undefined) {
          scrollTop = prevState.scrollTop;
        }

        if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
          return null;
        }

        return {
          horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          scrollUpdateWasRequested: true,
          verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward'
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(_ref4) {
      var _ref4$align = _ref4.align,
          align = _ref4$align === void 0 ? 'auto' : _ref4$align,
          columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex;
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          height = _this$props2.height,
          rowCount = _this$props2.rowCount,
          width = _this$props2.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;
      var scrollbarSize = getScrollbarSize();

      if (columnIndex !== undefined) {
        columnIndex = Math.max(0, Math.min(columnIndex, columnCount - 1));
      }

      if (rowIndex !== undefined) {
        rowIndex = Math.max(0, Math.min(rowIndex, rowCount - 1));
      }

      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps); // The scrollbar size should be considered when scrolling an item into view,
      // to ensure it's fully visible.
      // But we only need to account for its size when it's actually visible.

      var horizontalScrollbarSize = estimatedTotalWidth > width ? scrollbarSize : 0;
      var verticalScrollbarSize = estimatedTotalHeight > height ? scrollbarSize : 0;
      this.scrollTo({
        scrollLeft: columnIndex !== undefined ? getOffsetForColumnAndAlignment(this.props, columnIndex, align, scrollLeft, this._instanceProps, verticalScrollbarSize) : scrollLeft,
        scrollTop: rowIndex !== undefined ? getOffsetForRowAndAlignment(this.props, rowIndex, align, scrollTop, this._instanceProps, horizontalScrollbarSize) : scrollTop
      });
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props,
          initialScrollLeft = _this$props3.initialScrollLeft,
          initialScrollTop = _this$props3.initialScrollTop;

      if (this._outerRef != null) {
        var outerRef = this._outerRef;

        if (typeof initialScrollLeft === 'number') {
          outerRef.scrollLeft = initialScrollLeft;
        }

        if (typeof initialScrollTop === 'number') {
          outerRef.scrollTop = initialScrollTop;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var direction = this.props.direction;
      var _this$state2 = this.state,
          scrollLeft = _this$state2.scrollLeft,
          scrollTop = _this$state2.scrollTop,
          scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
        // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
        // So we need to determine which browser behavior we're dealing with, and mimic it.
        var outerRef = this._outerRef;

        if (direction === 'rtl') {
          switch (getRTLOffsetType()) {
            case 'negative':
              outerRef.scrollLeft = -scrollLeft;
              break;

            case 'positive-ascending':
              outerRef.scrollLeft = scrollLeft;
              break;

            default:
              var clientWidth = outerRef.clientWidth,
                  scrollWidth = outerRef.scrollWidth;
              outerRef.scrollLeft = scrollWidth - clientWidth - scrollLeft;
              break;
          }
        } else {
          outerRef.scrollLeft = Math.max(0, scrollLeft);
        }

        outerRef.scrollTop = Math.max(0, scrollTop);
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          columnCount = _this$props4.columnCount,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey : _this$props4$itemKey,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          rowCount = _this$props4.rowCount,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling;

      var _this$_getHorizontalR = this._getHorizontalRangeToRender(),
          columnStartIndex = _this$_getHorizontalR[0],
          columnStopIndex = _this$_getHorizontalR[1];

      var _this$_getVerticalRan = this._getVerticalRangeToRender(),
          rowStartIndex = _this$_getVerticalRan[0],
          rowStopIndex = _this$_getVerticalRan[1];

      var items = [];

      if (columnCount > 0 && rowCount) {
        for (var _rowIndex = rowStartIndex; _rowIndex <= rowStopIndex; _rowIndex++) {
          for (var _columnIndex = columnStartIndex; _columnIndex <= columnStopIndex; _columnIndex++) {
            items.push(Object(react["createElement"])(children, {
              columnIndex: _columnIndex,
              data: itemData,
              isScrolling: useIsScrolling ? isScrolling : undefined,
              key: itemKey({
                columnIndex: _columnIndex,
                data: itemData,
                rowIndex: _rowIndex
              }),
              rowIndex: _rowIndex,
              style: this._getItemStyle(_rowIndex, _columnIndex)
            }));
          }
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps);
      return Object(react["createElement"])(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: this._onScroll,
        ref: this._outerRefSetter,
        style: Object(esm_extends["a" /* default */])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, Object(react["createElement"])(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: estimatedTotalHeight,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: estimatedTotalWidth
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      var _this$props5 = this.props,
          columnCount = _this$props5.columnCount,
          onItemsRendered = _this$props5.onItemsRendered,
          onScroll = _this$props5.onScroll,
          rowCount = _this$props5.rowCount;

      if (typeof onItemsRendered === 'function') {
        if (columnCount > 0 && rowCount > 0) {
          var _this$_getHorizontalR2 = this._getHorizontalRangeToRender(),
              _overscanColumnStartIndex = _this$_getHorizontalR2[0],
              _overscanColumnStopIndex = _this$_getHorizontalR2[1],
              _visibleColumnStartIndex = _this$_getHorizontalR2[2],
              _visibleColumnStopIndex = _this$_getHorizontalR2[3];

          var _this$_getVerticalRan2 = this._getVerticalRangeToRender(),
              _overscanRowStartIndex = _this$_getVerticalRan2[0],
              _overscanRowStopIndex = _this$_getVerticalRan2[1],
              _visibleRowStartIndex = _this$_getVerticalRan2[2],
              _visibleRowStopIndex = _this$_getVerticalRan2[3];

          this._callOnItemsRendered(_overscanColumnStartIndex, _overscanColumnStopIndex, _overscanRowStartIndex, _overscanRowStopIndex, _visibleColumnStartIndex, _visibleColumnStopIndex, _visibleRowStartIndex, _visibleRowStopIndex);
        }
      }

      if (typeof onScroll === 'function') {
        var _this$state3 = this.state,
            _horizontalScrollDirection = _this$state3.horizontalScrollDirection,
            _scrollLeft = _this$state3.scrollLeft,
            _scrollTop = _this$state3.scrollTop,
            _scrollUpdateWasRequested = _this$state3.scrollUpdateWasRequested,
            _verticalScrollDirection = _this$state3.verticalScrollDirection;

        this._callOnScroll(_scrollLeft, _scrollTop, _horizontalScrollDirection, _verticalScrollDirection, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getHorizontalRangeToRender = function _getHorizontalRangeToRender() {
      var _this$props6 = this.props,
          columnCount = _this$props6.columnCount,
          overscanColumnCount = _this$props6.overscanColumnCount,
          overscanColumnsCount = _this$props6.overscanColumnsCount,
          overscanCount = _this$props6.overscanCount,
          rowCount = _this$props6.rowCount;
      var _this$state4 = this.state,
          horizontalScrollDirection = _this$state4.horizontalScrollDirection,
          isScrolling = _this$state4.isScrolling,
          scrollLeft = _this$state4.scrollLeft;
      var overscanCountResolved = overscanColumnCount || overscanColumnsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getColumnStartIndexForOffset(this.props, scrollLeft, this._instanceProps);
      var stopIndex = getColumnStopIndexForStartIndex(this.props, startIndex, scrollLeft, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || horizontalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || horizontalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(columnCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    _proto._getVerticalRangeToRender = function _getVerticalRangeToRender() {
      var _this$props7 = this.props,
          columnCount = _this$props7.columnCount,
          overscanCount = _this$props7.overscanCount,
          overscanRowCount = _this$props7.overscanRowCount,
          overscanRowsCount = _this$props7.overscanRowsCount,
          rowCount = _this$props7.rowCount;
      var _this$state5 = this.state,
          isScrolling = _this$state5.isScrolling,
          verticalScrollDirection = _this$state5.verticalScrollDirection,
          scrollTop = _this$state5.scrollTop;
      var overscanCountResolved = overscanRowCount || overscanRowsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getRowStartIndexForOffset(this.props, scrollTop, this._instanceProps);
      var stopIndex = getRowStopIndexForStartIndex(this.props, startIndex, scrollTop, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || verticalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || verticalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(rowCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return Grid;
  }(react["PureComponent"]), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    useIsScrolling: false
  }, _temp;
}

var validateSharedProps = function validateSharedProps(_ref5, _ref6) {
  var children = _ref5.children,
      direction = _ref5.direction,
      height = _ref5.height,
      innerTagName = _ref5.innerTagName,
      outerTagName = _ref5.outerTagName,
      overscanColumnsCount = _ref5.overscanColumnsCount,
      overscanCount = _ref5.overscanCount,
      overscanRowsCount = _ref5.overscanRowsCount,
      width = _ref5.width;
  var instance = _ref6.instance;

  if (false) {}
};

var DEFAULT_ESTIMATED_ITEM_SIZE = 50;

var index_esm_getEstimatedTotalHeight = function getEstimatedTotalHeight(_ref, _ref2) {
  var rowCount = _ref.rowCount;
  var rowMetadataMap = _ref2.rowMetadataMap,
      estimatedRowHeight = _ref2.estimatedRowHeight,
      lastMeasuredRowIndex = _ref2.lastMeasuredRowIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredRowIndex >= rowCount) {
    lastMeasuredRowIndex = rowCount - 1;
  }

  if (lastMeasuredRowIndex >= 0) {
    var itemMetadata = rowMetadataMap[lastMeasuredRowIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = rowCount - lastMeasuredRowIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedRowHeight;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var index_esm_getEstimatedTotalWidth = function getEstimatedTotalWidth(_ref3, _ref4) {
  var columnCount = _ref3.columnCount;
  var columnMetadataMap = _ref4.columnMetadataMap,
      estimatedColumnWidth = _ref4.estimatedColumnWidth,
      lastMeasuredColumnIndex = _ref4.lastMeasuredColumnIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredColumnIndex >= columnCount) {
    lastMeasuredColumnIndex = columnCount - 1;
  }

  if (lastMeasuredColumnIndex >= 0) {
    var itemMetadata = columnMetadataMap[lastMeasuredColumnIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = columnCount - lastMeasuredColumnIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedColumnWidth;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getItemMetadata = function getItemMetadata(itemType, props, index, instanceProps) {
  var itemMetadataMap, itemSize, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    itemSize = props.columnWidth;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    itemSize = props.rowHeight;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    if (itemType === 'column') {
      instanceProps.lastMeasuredColumnIndex = index;
    } else {
      instanceProps.lastMeasuredRowIndex = index;
    }
  }

  return itemMetadataMap[index];
};

var findNearestItem = function findNearestItem(itemType, props, instanceProps, offset) {
  var itemMetadataMap, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch(itemType, props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch(itemType, props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch = function findNearestItemBinarySearch(itemType, props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata(itemType, props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch = function findNearestItemExponentialSearch(itemType, props, instanceProps, index, offset) {
  var itemCount = itemType === 'column' ? props.columnCount : props.rowCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata(itemType, props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch(itemType, props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var index_esm_getOffsetForIndexAndAlignment = function getOffsetForIndexAndAlignment(itemType, props, index, align, scrollOffset, instanceProps, scrollbarSize) {
  var size = itemType === 'column' ? props.width : props.height;
  var itemMetadata = getItemMetadata(itemType, props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
  // To ensure it reflects actual measurements instead of just estimates.

  var estimatedTotalSize = itemType === 'column' ? index_esm_getEstimatedTotalWidth(props, instanceProps) : index_esm_getEstimatedTotalHeight(props, instanceProps);
  var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
  var minOffset = Math.max(0, itemMetadata.offset - size + scrollbarSize + itemMetadata.size);

  if (align === 'smart') {
    if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
      align = 'auto';
    } else {
      align = 'center';
    }
  }

  switch (align) {
    case 'start':
      return maxOffset;

    case 'end':
      return minOffset;

    case 'center':
      return Math.round(minOffset + (maxOffset - minOffset) / 2);

    case 'auto':
    default:
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset;
      } else if (minOffset > maxOffset) {
        // Because we only take into account the scrollbar size when calculating minOffset
        // this value can be larger than maxOffset when at the end of the list
        return minOffset;
      } else if (scrollOffset < minOffset) {
        return minOffset;
      } else {
        return maxOffset;
      }

  }
};

var VariableSizeGrid =
/*#__PURE__*/
createGridComponent({
  getColumnOffset: function getColumnOffset(props, index, instanceProps) {
    return getItemMetadata('column', props, index, instanceProps).offset;
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(props, scrollLeft, instanceProps) {
    return findNearestItem('column', props, instanceProps, scrollLeft);
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(props, startIndex, scrollLeft, instanceProps) {
    var columnCount = props.columnCount,
        width = props.width;
    var itemMetadata = getItemMetadata('column', props, startIndex, instanceProps);
    var maxOffset = scrollLeft + width;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < columnCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('column', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  getColumnWidth: function getColumnWidth(props, index, instanceProps) {
    return instanceProps.columnMetadataMap[index].size;
  },
  getEstimatedTotalHeight: index_esm_getEstimatedTotalHeight,
  getEstimatedTotalWidth: index_esm_getEstimatedTotalWidth,
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return index_esm_getOffsetForIndexAndAlignment('column', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return index_esm_getOffsetForIndexAndAlignment('row', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getRowOffset: function getRowOffset(props, index, instanceProps) {
    return getItemMetadata('row', props, index, instanceProps).offset;
  },
  getRowHeight: function getRowHeight(props, index, instanceProps) {
    return instanceProps.rowMetadataMap[index].size;
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(props, scrollTop, instanceProps) {
    return findNearestItem('row', props, instanceProps, scrollTop);
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(props, startIndex, scrollTop, instanceProps) {
    var rowCount = props.rowCount,
        height = props.height;
    var itemMetadata = getItemMetadata('row', props, startIndex, instanceProps);
    var maxOffset = scrollTop + height;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < rowCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('row', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref5 = props,
        estimatedColumnWidth = _ref5.estimatedColumnWidth,
        estimatedRowHeight = _ref5.estimatedRowHeight;
    var instanceProps = {
      columnMetadataMap: {},
      estimatedColumnWidth: estimatedColumnWidth || DEFAULT_ESTIMATED_ITEM_SIZE,
      estimatedRowHeight: estimatedRowHeight || DEFAULT_ESTIMATED_ITEM_SIZE,
      lastMeasuredColumnIndex: -1,
      lastMeasuredRowIndex: -1,
      rowMetadataMap: {}
    };

    instance.resetAfterColumnIndex = function (columnIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        columnIndex: columnIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterRowIndex = function (rowIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        rowIndex: rowIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterIndices = function (_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex,
          _ref6$shouldForceUpda = _ref6.shouldForceUpdate,
          shouldForceUpdate = _ref6$shouldForceUpda === void 0 ? true : _ref6$shouldForceUpda;

      if (typeof columnIndex === 'number') {
        instanceProps.lastMeasuredColumnIndex = Math.min(instanceProps.lastMeasuredColumnIndex, columnIndex - 1);
      }

      if (typeof rowIndex === 'number') {
        instanceProps.lastMeasuredRowIndex = Math.min(instanceProps.lastMeasuredRowIndex, rowIndex - 1);
      } // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.


      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref7) {
    var columnWidth = _ref7.columnWidth,
        rowHeight = _ref7.rowHeight;

    if (false) {}
  }
});

var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsDirection = null;
var devWarningsTagName$1 = null;

if (false) {}

function createListComponent(_ref) {
  var _class, _temp;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized(_assertThisInitialized(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_assertThisInitialized(_this)),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = Object(memoize_one_esm["a" /* default */])(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = Object(memoize_one_esm["a" /* default */])(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          var isRtl = direction === 'rtl';
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: 'absolute',
            left: isRtl ? undefined : offsetHorizontal,
            right: isRtl ? offsetHorizontal : undefined,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size : '100%',
            width: isHorizontal ? size : '100%'
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = Object(memoize_one_esm["a" /* default */])(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props,
          direction = _this$props2.direction,
          initialScrollOffset = _this$props2.initialScrollOffset,
          layout = _this$props2.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          layout = _this$props3.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemCount = _this$props4.itemCount,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey,
          layout = _this$props4.layout,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(Object(react["createElement"])(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return Object(react["createElement"])(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: Object(esm_extends["a" /* default */])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, Object(react["createElement"])(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props,
          itemCount = _this$props5.itemCount,
          overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(react["PureComponent"]), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _temp;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children,
      direction = _ref2.direction,
      height = _ref2.height,
      layout = _ref2.layout,
      innerTagName = _ref2.innerTagName,
      outerTagName = _ref2.outerTagName,
      width = _ref2.width;
  var instance = _ref3.instance;

  if (false) { var isHorizontal; }
};

var DEFAULT_ESTIMATED_ITEM_SIZE$1 = 50;

var getItemMetadata$1 = function getItemMetadata(props, index, instanceProps) {
  var _ref = props,
      itemSize = _ref.itemSize;
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    instanceProps.lastMeasuredIndex = index;
  }

  return itemMetadataMap[index];
};

var findNearestItem$1 = function findNearestItem(props, instanceProps, offset) {
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;
  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch$1(props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch$1(props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch$1 = function findNearestItemBinarySearch(props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata$1(props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch$1 = function findNearestItemExponentialSearch(props, instanceProps, index, offset) {
  var itemCount = props.itemCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata$1(props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch$1(props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var index_esm_getEstimatedTotalSize = function getEstimatedTotalSize(_ref2, _ref3) {
  var itemCount = _ref2.itemCount;
  var itemMetadataMap = _ref3.itemMetadataMap,
      estimatedItemSize = _ref3.estimatedItemSize,
      lastMeasuredIndex = _ref3.lastMeasuredIndex;
  var totalSizeOfMeasuredItems = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }

  if (lastMeasuredIndex >= 0) {
    var itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;
  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};

var VariableSizeList =
/*#__PURE__*/
createListComponent({
  getItemOffset: function getItemOffset(props, index, instanceProps) {
    return getItemMetadata$1(props, index, instanceProps).offset;
  },
  getItemSize: function getItemSize(props, index, instanceProps) {
    return instanceProps.itemMetadataMap[index].size;
  },
  getEstimatedTotalSize: index_esm_getEstimatedTotalSize,
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(props, index, align, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
    // To ensure it reflects actual measurements instead of just estimates.

    var estimatedTotalSize = index_esm_getEstimatedTotalSize(props, instanceProps);
    var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
    var minOffset = Math.max(0, itemMetadata.offset - size + itemMetadata.size);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        return Math.round(minOffset + (maxOffset - minOffset) / 2);

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(props, offset, instanceProps) {
    return findNearestItem$1(props, instanceProps, offset);
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(props, startIndex, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        itemCount = props.itemCount,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, startIndex, instanceProps);
    var maxOffset = scrollOffset + size;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < itemCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata$1(props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref4 = props,
        estimatedItemSize = _ref4.estimatedItemSize;
    var instanceProps = {
      itemMetadataMap: {},
      estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE$1,
      lastMeasuredIndex: -1
    };

    instance.resetAfterIndex = function (index, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instanceProps.lastMeasuredIndex = Math.min(instanceProps.lastMeasuredIndex, index - 1); // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.

      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref5) {
    var itemSize = _ref5.itemSize;

    if (false) {}
  }
});

var FixedSizeGrid =
/*#__PURE__*/
createGridComponent({
  getColumnOffset: function getColumnOffset(_ref, index) {
    var columnWidth = _ref.columnWidth;
    return index * columnWidth;
  },
  getColumnWidth: function getColumnWidth(_ref2, index) {
    var columnWidth = _ref2.columnWidth;
    return columnWidth;
  },
  getRowOffset: function getRowOffset(_ref3, index) {
    var rowHeight = _ref3.rowHeight;
    return index * rowHeight;
  },
  getRowHeight: function getRowHeight(_ref4, index) {
    var rowHeight = _ref4.rowHeight;
    return rowHeight;
  },
  getEstimatedTotalHeight: function getEstimatedTotalHeight(_ref5) {
    var rowCount = _ref5.rowCount,
        rowHeight = _ref5.rowHeight;
    return rowHeight * rowCount;
  },
  getEstimatedTotalWidth: function getEstimatedTotalWidth(_ref6) {
    var columnCount = _ref6.columnCount,
        columnWidth = _ref6.columnWidth;
    return columnWidth * columnCount;
  },
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(_ref7, columnIndex, align, scrollLeft, instanceProps, scrollbarSize) {
    var columnCount = _ref7.columnCount,
        columnWidth = _ref7.columnWidth,
        width = _ref7.width;
    var lastColumnOffset = Math.max(0, columnCount * columnWidth - width);
    var maxOffset = Math.min(lastColumnOffset, columnIndex * columnWidth);
    var minOffset = Math.max(0, columnIndex * columnWidth - width + scrollbarSize + columnWidth);

    if (align === 'smart') {
      if (scrollLeft >= minOffset - width && scrollLeft <= maxOffset + width) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(width / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastColumnOffset + Math.floor(width / 2)) {
          return lastColumnOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollLeft >= minOffset && scrollLeft <= maxOffset) {
          return scrollLeft;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollLeft < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(_ref8, rowIndex, align, scrollTop, instanceProps, scrollbarSize) {
    var rowHeight = _ref8.rowHeight,
        height = _ref8.height,
        rowCount = _ref8.rowCount;
    var lastRowOffset = Math.max(0, rowCount * rowHeight - height);
    var maxOffset = Math.min(lastRowOffset, rowIndex * rowHeight);
    var minOffset = Math.max(0, rowIndex * rowHeight - height + scrollbarSize + rowHeight);

    if (align === 'smart') {
      if (scrollTop >= minOffset - height && scrollTop <= maxOffset + height) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(height / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastRowOffset + Math.floor(height / 2)) {
          return lastRowOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollTop >= minOffset && scrollTop <= maxOffset) {
          return scrollTop;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollTop < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(_ref9, scrollLeft) {
    var columnWidth = _ref9.columnWidth,
        columnCount = _ref9.columnCount;
    return Math.max(0, Math.min(columnCount - 1, Math.floor(scrollLeft / columnWidth)));
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(_ref10, startIndex, scrollLeft) {
    var columnWidth = _ref10.columnWidth,
        columnCount = _ref10.columnCount,
        width = _ref10.width;
    var left = startIndex * columnWidth;
    var numVisibleColumns = Math.ceil((width + scrollLeft - left) / columnWidth);
    return Math.max(0, Math.min(columnCount - 1, startIndex + numVisibleColumns - 1 // -1 is because stop index is inclusive
    ));
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(_ref11, scrollTop) {
    var rowHeight = _ref11.rowHeight,
        rowCount = _ref11.rowCount;
    return Math.max(0, Math.min(rowCount - 1, Math.floor(scrollTop / rowHeight)));
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(_ref12, startIndex, scrollTop) {
    var rowHeight = _ref12.rowHeight,
        rowCount = _ref12.rowCount,
        height = _ref12.height;
    var top = startIndex * rowHeight;
    var numVisibleRows = Math.ceil((height + scrollTop - top) / rowHeight);
    return Math.max(0, Math.min(rowCount - 1, startIndex + numVisibleRows - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref13) {
    var columnWidth = _ref13.columnWidth,
        rowHeight = _ref13.rowHeight;

    if (false) {}
  }
});

var FixedSizeList =
/*#__PURE__*/
createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;

    if (false) {}
  }
});

// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo

function areEqual(prevProps, nextProps) {
  var prevStyle = prevProps.style,
      prevRest = Object(objectWithoutPropertiesLoose["a" /* default */])(prevProps, ["style"]);

  var nextStyle = nextProps.style,
      nextRest = Object(objectWithoutPropertiesLoose["a" /* default */])(nextProps, ["style"]);

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate

function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.multiSearchUI = void 0;
const stores_1 = __webpack_require__(10);
let timeout;
let ref;
const closeWidget = () => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => stores_1.webextStore.dispatch(stores_1.multiSearchSliceActions.closeWidget()), 300);
};
const openWidget = () => {
    clearTimeout(timeout);
    stores_1.webextStore.dispatch(stores_1.multiSearchSliceActions.openWidget());
};
const openFullWidget = () => {
    clearTimeout(timeout);
    stores_1.webextStore.dispatch(stores_1.multiSearchSliceActions.openFullWidget());
};
const clickFeedBack = () => {
    stores_1.webextStore.dispatch(stores_1.multiSearchSliceActions.clickFeedBack());
    setTimeout(() => {
        stores_1.webextStore.dispatch(stores_1.multiSearchSliceActions.hideFeedBack());
    }, 3000);
};
const subscribe = (s) => {
    ref = s;
};
let bounds = {};
const updateBounds = (r) => {
    var _a, _b, _c;
    const widgetState = (_b = (_a = stores_1.webextStore === null || stores_1.webextStore === void 0 ? void 0 : stores_1.webextStore.getState()) === null || _a === void 0 ? void 0 : _a.multiSearch) === null || _b === void 0 ? void 0 : _b.widgetState;
    const tempBounds = (_c = r === null || r === void 0 ? void 0 : r.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect();
    bounds = {
        x: `${widgetState == 'lg' ? 'calc(100vw - 606px)' : `${tempBounds.left}px`}`,
        y: `${widgetState == 'lg' ? 0 : ~~(tempBounds.top + tempBounds.height)}px`
    };
};
exports.multiSearchUI = {
    closeWidget,
    openWidget,
    openFullWidget,
    clickFeedBack,
    updateBounds
};


/***/ })

/******/ });