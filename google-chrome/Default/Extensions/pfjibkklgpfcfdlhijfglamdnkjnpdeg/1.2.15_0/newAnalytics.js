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
/******/ 		4: 0
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
/******/ 	deferredModules.push([979,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shopOpened_1 = __webpack_require__(980);
const itemOpened_1 = __webpack_require__(981);
const workers_1 = __webpack_require__(982);
const initMetrics = () => {
    shopOpened_1.shopOpened();
    itemOpened_1.itemOpened();
};
const initWorkers = () => {
    workers_1.shopOpenedCleaner();
    workers_1.itemOpenedCleaner();
    workers_1.sendAppVersion();
};
const init = () => {
    initMetrics();
    initWorkers();
};
init();


/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopOpened = void 0;
const find_1 = __importDefault(__webpack_require__(186));
const sender_1 = __webpack_require__(21);
const shops = ['aliexpress.com', 'aliexpress.ru', 'tmall.ru', 'gearbest.com'];
const urls = shops.map((e) => `*://*.${e}/*`);
const getShopName = (url) => find_1.default((x) => url.includes(x), shops);
const getShopsFromStorage = () => JSON.parse(localStorage.getItem('shopOpened') || '[]');
const setShopInStorage = (shop) => {
    const shops = getShopsFromStorage();
    const shopInStorage = checkShopInStorage(shop);
    if (!shopInStorage) {
        shops.push(shop);
        localStorage.setItem('shopOpened', JSON.stringify(shops));
    }
};
const checkShopInStorage = (shop) => {
    const shops = getShopsFromStorage();
    const inStorage = shops.some((x) => x === shop);
    if (inStorage) {
        return true;
    }
    return false;
};
const shopOpened = () => {
    const callback = (details) => {
        const shopName = getShopName(details.url);
        const shopInStorage = checkShopInStorage(shopName);
        if (!shopInStorage) {
            setShopInStorage(shopName);
            sender_1.sendMetric('shop', 'unique-open', shopName, true);
        }
    };
    chrome.webRequest.onBeforeRequest.addListener(callback, {
        urls,
        types: ['main_frame']
    });
};
exports.shopOpened = shopOpened;


/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.itemOpened = exports.marketPatterns = void 0;
const ramda_1 = __webpack_require__(23);
const utils_1 = __webpack_require__(11);
const aliradar_1 = __webpack_require__(32);
const sender_1 = __webpack_require__(21);
exports.marketPatterns = ['aliexpress.com', 'aliexpress.ru', 'tmall.ru', 'gearbest.com'];
const urls = exports.marketPatterns.map((e) => `*://*.${e}/*`);
const findShopName = async (url) => {
    const pagePatterns = await aliradar_1.PagePatterns.get();
    const shopNames = ramda_1.keys(pagePatterns);
    const regexs = ramda_1.map((x) => { var _a; return (_a = pagePatterns === null || pagePatterns === void 0 ? void 0 : pagePatterns[x]) === null || _a === void 0 ? void 0 : _a.productPage; }, shopNames);
    const urlInListOfRegex = ramda_1.reduce((_acc, curr) => (ramda_1.test(new RegExp(curr), url) ? ramda_1.reduced(true) : false), false);
    const siteNameIndex = ramda_1.findIndex(urlInListOfRegex, regexs);
    if (siteNameIndex < 0) {
        return '';
    }
    return shopNames[siteNameIndex];
};
const itemOpened = () => {
    utils_1.ChromeStorage.set({ itemOpened: {} }); // TODO delete this fukn shit cleaner
    const callback = async (details) => {
        const { url, statusCode = 0 } = details;
        const shopName = findShopName(url);
        if (statusCode === 200 && shopName) {
            await sender_1.sendMetric('shop', 'item-opened', shopName, true);
        }
    };
    chrome.webRequest.onCompleted.addListener(callback, {
        urls,
        types: ['main_frame']
    });
};
exports.itemOpened = itemOpened;


/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAppVersion = exports.itemOpenedCleaner = exports.shopOpenedCleaner = void 0;
const dayjs_1 = __importDefault(__webpack_require__(46));
const utils_1 = __webpack_require__(11);
const threeHoursInMs = 10800000;
const shopOpenedCleaner = () => {
    setInterval(() => {
        const date = localStorage.getItem('shopOpenedTime');
        if (date === null) {
            localStorage.setItem('shopOpenedTime', dayjs_1.default().format('DD/MM/YYYY'));
        }
        else if (date !== dayjs_1.default().format('DD/MM/YYYY')) {
            localStorage.setItem('shopOpened', '[]');
            localStorage.setItem('shopOpenedTime', dayjs_1.default().format('DD/MM/YYYY'));
        }
    }, threeHoursInMs);
};
exports.shopOpenedCleaner = shopOpenedCleaner;
const itemOpenedCleaner = () => {
    setInterval(async () => {
        const date = (await utils_1.ChromeStorage.get('itemOpenedTime')).shopOpenedTime;
        if (date === undefined) {
            utils_1.ChromeStorage.set({ itemOpenedTime: dayjs_1.default().format('DD/MM/YYYY') });
        }
        else if (date !== dayjs_1.default().format('DD/MM/YYYY')) {
            utils_1.ChromeStorage.set({ itemOpened: {} });
            utils_1.ChromeStorage.set({ itemOpenedTime: dayjs_1.default().format('DD/MM/YYYY') });
        }
    }, threeHoursInMs);
};
exports.itemOpenedCleaner = itemOpenedCleaner;
// @ts-ignore
const getVersion = () => chrome.app.getDetails().version;
const sendAppVersion = () => {
    chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
        if (request.getAppVersion) {
            sendResponse({ appVersion: getVersion() });
        }
        return true;
    });
};
exports.sendAppVersion = sendAppVersion;


/***/ })

/******/ });