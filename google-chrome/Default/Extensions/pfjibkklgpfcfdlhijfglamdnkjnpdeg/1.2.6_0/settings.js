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
/******/ 		6: 0
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
/******/ 	deferredModules.push([954,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(0));
const render_1 = __webpack_require__(267);
const actions_1 = __webpack_require__(24);
const AppLayout_1 = __webpack_require__(54);
const SettingsPage_1 = __webpack_require__(955);
__webpack_require__(957);
window.context = 'settings';
const init = async () => {
    actions_1.SettingsActions.init();
    actions_1.EmbeddedWidgetUIActions.initializedFromStorage();
    actions_1.AccountActions.init();
    render_1.render(react_1.default.createElement(AppLayout_1.AppLayout, null,
        react_1.default.createElement(SettingsPage_1.SettingsPage, null)), document.getElementById('settings'));
};
init();


/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsPage = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const RadarFall_1 = __webpack_require__(956);
const Settings_1 = __webpack_require__(310);
const SettingsPage = () => {
    return (react_1.default.createElement("div", { className: "SettingsPage" },
        react_1.default.createElement(RadarFall_1.RadarFall, null),
        react_1.default.createElement(Settings_1.Settings, null)));
};
exports.SettingsPage = SettingsPage;


/***/ }),

/***/ 956:
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
exports.RadarFall = void 0;
const react_1 = __importStar(__webpack_require__(0));
const styled_components_1 = __importDefault(__webpack_require__(3));
const random_range = (min, max) => {
    const rand = Math.random();
    return min + Math.floor(rand * (max - min + 1));
};
const Wrapper = styled_components_1.default.div.withConfig({ displayName: "Wrapper", componentId: "sc-16lcsvq" }) `
	background: radial-gradient(ellipse at bottom, rgba(108, 177, 255, 0.37) 0%, rgb(253, 253, 253) 100%);
	filter: drop-shadow(0 0 5px rgb(255, 255, 255));
	height: 100vh;
	opacity: ${({ opacity }) => opacity};
	overflow: hidden;
	position: absolute;
	transition: opacity 1s;
	width: 100vw;

	z-index: -1;
	.snow {
	}
`;
let css = '';
const generateSnowFlakes = () => {
    if (css) {
        return css;
    }
    const total = 230;
    for (let i = 1; i <= total; i++) {
        const randomX = Math.random() * 100;
        const randomOffset = random_range(-10, 10);
        const randomXEnd = randomX + randomOffset;
        const randomXEndYoyo = randomX + randomOffset / 2;
        const randomYoyoTime = random_range(0.3, 0.8);
        const randomYoyoY = randomYoyoTime * 100;
        const randomScale = Math.random() ** 2;
        const fallDuration = random_range(10, 30);
        const fallDelay = Math.random() * -30;
        const randomRotate = Math.random() < 0.5;
        const opacity = 1 - Math.random() ** 2;
        css += `
    &:nth-child(${i}) {
      opacity: ${opacity};
      filter: blur(${~~(1 / opacity)}px);
      transform: translate(${randomX}vw, -10px) scale(${randomScale});
      animation: fall-${i} ${fallDuration}s ${fallDelay}s linear infinite;
    }

    @keyframes fall-${i} {
      ${randomYoyoTime * 100}% {
        transform: translate(${randomXEnd}vw, calc(${randomYoyoY}vh * 100vh)) scale(${randomScale}) rotate(${randomRotate ? '-' : ''}0deg);
      }

      to {
        transform: translate(${randomXEndYoyo}vw, 100vh) scale(${randomScale}) rotate(${randomRotate ? '-' : ''}${Math.random() * 360}deg);
      }
    }
`;
    }
    return css;
};
const Snow = styled_components_1.default.div.withConfig({ displayName: "Snow", componentId: "sc-pjmgln" }) `
	background-color: gray;
	background-image: url('/assets/img/logo/96.png');
	background-size: contain;
	border: 1px solid white;
	border-radius: 50%;
	height: 20px;
	left: 0;
	position: absolute;
	top: 0;
	width: 20px;
	${generateSnowFlakes}
`;
let cycle = false;
const RadarFall = () => {
    const [clicks, setClicks] = react_1.useState(0);
    const simSimOpened = clicks === 11;
    if (simSimOpened) {
        cycle = true;
        window.localStorage.setItem(chrome.runtime.id, JSON.stringify({
            installed: 0,
            updated: 0
        }));
    }
    else if (cycle) {
        window.localStorage.setItem(chrome.runtime.id, JSON.stringify({
            installed: new Date().getTime(),
            updated: new Date().getTime()
        }));
    }
    else {
        // console.log(11 - clicks)
    }
    return (react_1.default.createElement(Wrapper, { opacity: simSimOpened ? 1 : 0.05, onClick: () => setClicks(clicks < 12 ? clicks + 1 : 1) }, Array(clicks * 10)
        .fill('')
        .map((_e, i) => (react_1.default.createElement(Snow, { className: "snow", key: i })))));
};
exports.RadarFall = RadarFall;


/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });