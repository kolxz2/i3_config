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
/******/ 		2: 0
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
/******/ 	deferredModules.push([921,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.popupTabListener = exports.parse = exports.getDataFromActiveTab = exports.setDataToTab = exports.getUrlFromActiveTab = exports.setUrlToTab = void 0;
const utils_1 = __webpack_require__(11);
const getCurrency_1 = __webpack_require__(349);
const item_1 = __webpack_require__(94);
const similars_1 = __webpack_require__(131);
const hotProducts_1 = __webpack_require__(132);
const aliradar_1 = __webpack_require__(34);
const sellers_1 = __webpack_require__(160);
const photoReviews_1 = __webpack_require__(130);
const tabData = {};
window.tabsData = tabData;
utils_1.ChromeStorage.setTabsData({});
const getActiveTab = async () => await new Promise((resolve) => chrome.tabs.query({
    active: true,
    currentWindow: true
}, async (tabs) => {
    const currTab = tabs === null || tabs === void 0 ? void 0 : tabs[0];
    if (currTab) {
        // Sanity check
        resolve(currTab);
    }
}));
// URL
const setUrlToTab = async (tabId, url) => {
    if (true) {
        console.log(tabId, url);
    }
    await utils_1.ChromeStorage.update('tabsUrl', {
        [tabId]: { url, tabId, createdAt: new Date().getTime() }
    });
    return true;
};
exports.setUrlToTab = setUrlToTab;
const getUrlFromActiveTab = async (id) => {
    var _a, _b;
    try {
        if (id) {
            return (_a = (await utils_1.ChromeStorage.getTabsUrl())) === null || _a === void 0 ? void 0 : _a[id];
        }
        const tab = await getActiveTab();
        if (tab === null || tab === void 0 ? void 0 : tab.id) {
            return (_b = (await utils_1.ChromeStorage.getTabsUrl())) === null || _b === void 0 ? void 0 : _b[tab.id];
        }
    }
    catch (e) {
        console.error(e);
        return null;
    }
};
exports.getUrlFromActiveTab = getUrlFromActiveTab;
// DATA
const setDataToTab = async (tabId, data = {}) => {
    if (true) {
        console.log(tabId, data);
    }
    await utils_1.ChromeStorage.update('tabsData', {
        [tabId]: { ...data, tabId, createdAt: new Date().getTime() }
    });
    setIcon([tabId]);
    return true;
};
exports.setDataToTab = setDataToTab;
const getDataFromActiveTab = async (id) => {
    var _a, _b;
    try {
        if (!id) {
            const tab = await getActiveTab();
            if (tab === null || tab === void 0 ? void 0 : tab.id) {
                return (_a = (await utils_1.ChromeStorage.getTabsData())) === null || _a === void 0 ? void 0 : _a[tab.id];
            }
        }
        return (_b = (await utils_1.ChromeStorage.getTabsData())) === null || _b === void 0 ? void 0 : _b[id];
    }
    catch (e) {
        console.error(e);
        return null;
    }
};
exports.getDataFromActiveTab = getDataFromActiveTab;
const setIconItemId = async ([tabId]) => {
    var _a;
    if (!tabId) {
        return;
    }
    const tabsData = await utils_1.ChromeStorage.getTabsData();
    const item = (_a = tabsData[tabId]) === null || _a === void 0 ? void 0 : _a.item;
    setIcon(item);
};
const setIcon = async (item) => {
    var _a, _b, _c;
    const detailedSeller = item === null || item === void 0 ? void 0 : item.detailedSeller;
    if ((item === null || item === void 0 ? void 0 : item.id) && (detailedSeller === null || detailedSeller === void 0 ? void 0 : detailedSeller.overall) !== 'unknown') {
        const rating = detailedSeller === null || detailedSeller === void 0 ? void 0 : detailedSeller.overall;
        let seller = (_a = detailedSeller === null || detailedSeller === void 0 ? void 0 : detailedSeller.status) === null || _a === void 0 ? void 0 : _a.overall;
        const priceState = ((_b = item === null || item === void 0 ? void 0 : item.priceStats) === null || _b === void 0 ? void 0 : _b.average) - ((_c = item === null || item === void 0 ? void 0 : item.lastPrice) === null || _c === void 0 ? void 0 : _c.max);
        let price = '';
        if (['young', 'greatYoungSeller', 'goodYoungSeller'].includes(seller)) {
            seller = 'highMed';
        }
        if (seller === 'averageYoungSeller') {
            seller = 'lowMed';
        }
        if (!rating) {
            seller = 'unknown';
        }
        if (rating < 10) {
            seller = 'bad';
        }
        if (priceState < 0) {
            price = 'higher';
        }
        if (priceState > 0) {
            price = 'lower';
        }
        chrome.browserAction.setIcon({
            path: {
                16: `assets/img/seller/${seller}${price ? `_${price}` : ''}.png`,
                32: `assets/img/seller/32/${seller}${price ? `_${price}` : ''}.png`
            }
        });
    }
    else if ((item === null || item === void 0 ? void 0 : item.id) && (detailedSeller === null || detailedSeller === void 0 ? void 0 : detailedSeller.overall) === 'unknown') {
        chrome.browserAction.setIcon({
            path: {
                16: 'assets/img/seller/unknown.png',
                32: 'assets/img/seller/32/unknown.png'
            }
        });
    }
    else {
        chrome.browserAction.setIcon({
            path: 'assets/img/logo/icon_on.png'
        });
    }
};
const _getItemId = async ({ href }) => {
    var _a, _b;
    const hostname = (_a = href === null || href === void 0 ? void 0 : href.split('/')) === null || _a === void 0 ? void 0 : _a[2];
    let data = { hostname, href };
    if ((href === null || href === void 0 ? void 0 : href.includes('aliexpress')) && (href.includes('/item') || /\/catalog\/(.+)\.html\?/.test(href))) {
        let itemId = await item_1.getItemId(href);
        if (!itemId) {
            const response = await fetch(href);
            const htmlRaw = await (response === null || response === void 0 ? void 0 : response.text());
            itemId = (_b = htmlRaw === null || htmlRaw === void 0 ? void 0 : htmlRaw.match(/productId=(\d+.*?)&/)) === null || _b === void 0 ? void 0 : _b[1];
        }
        return itemId;
    }
    return false;
};
const parse = async ({ href, tabId }) => {
    var _a, _b;
    const hostname = (_a = href === null || href === void 0 ? void 0 : href.split('/')) === null || _a === void 0 ? void 0 : _a[2];
    let data = { hostname, href };
    if ((href === null || href === void 0 ? void 0 : href.includes('aliexpress')) && (href.includes('/item') || /\/catalog\/(.+)\.html\?/.test(href))) {
        let itemId = await item_1.getItemId(href);
        if (!itemId) {
            const response = await fetch(href);
            const htmlRaw = await (response === null || response === void 0 ? void 0 : response.text());
            itemId = (_b = htmlRaw === null || htmlRaw === void 0 ? void 0 : htmlRaw.match(/productId=(\d+.*?)&/)) === null || _b === void 0 ? void 0 : _b[1];
        }
        const curr = await getCurrency_1.getCurrency();
        const item = await item_1.ItemActions.init(itemId, curr);
        const similars = await similars_1.SimilarsActions.getSimilarItems(itemId, item === null || item === void 0 ? void 0 : item.category_id, curr);
        const similarsSellers = await sellers_1.getSellers(similars === null || similars === void 0 ? void 0 : similars.map((similarItem) => (similarItem === null || similarItem === void 0 ? void 0 : similarItem.adminseq.toString()) || (similarItem === null || similarItem === void 0 ? void 0 : similarItem.shopId.toString())));
        const hotItems = await hotProducts_1.getHotProducts({});
        const hotCategories = await aliradar_1.HotCategoriesConfig.get();
        data = { ...data, item, similars, similarsSellers, hotItems, hotCategories };
    }
    exports.setDataToTab(tabId, data);
    return data;
};
exports.parse = parse;
const popupTabListener = () => {
    let activeTab = null;
    let tabs = {};
    chrome.tabs.onHighlighted.addListener(async ({ tabIds }) => {
        await setIconItemId(tabIds);
        activeTab = tabs[tabIds === null || tabIds === void 0 ? void 0 : tabIds[0]];
    });
    chrome.tabs.onUpdated.addListener(async (_tabId, _changeInfo, tab) => {
        var _a, _b, _c, _d, _e, _f;
        if ((_changeInfo === null || _changeInfo === void 0 ? void 0 : _changeInfo.status) === 'loading' &&
            (((_a = tab === null || tab === void 0 ? void 0 : tab.url) === null || _a === void 0 ? void 0 : _a.includes('aliradar.com/boarding.html')) ||
                (((_b = tab === null || tab === void 0 ? void 0 : tab.url) === null || _b === void 0 ? void 0 : _b.includes('aliexpress')) && ((tab === null || tab === void 0 ? void 0 : tab.url.includes('/item')) || /\/catalog\/(.+)\.html\?/.test(tab === null || tab === void 0 ? void 0 : tab.url))))) {
            if ((_c = tab === null || tab === void 0 ? void 0 : tab.url) === null || _c === void 0 ? void 0 : _c.includes('aliradar.com/boarding.html')) {
                const pagePatterns = await aliradar_1.PagePatterns.get();
                tab.url = (_d = pagePatterns === null || pagePatterns === void 0 ? void 0 : pagePatterns.aliradar) === null || _d === void 0 ? void 0 : _d.boardingItemUrl;
            }
            activeTab = tab;
            tabs = { ...tabs, [(_e = tab.id) !== null && _e !== void 0 ? _e : 0]: tab };
            const curr = await getCurrency_1.getCurrency();
            const itemId = await _getItemId({ href: tab.url });
            const item = await item_1.ItemActions.init(itemId, curr);
            const data = { item };
            await exports.setDataToTab(tab.id, data);
            await setIconItemId([(_f = tab.id) !== null && _f !== void 0 ? _f : 0]);
        }
    });
    chrome.runtime.onConnect.addListener(async (port) => {
        var _a, _b;
        if (port.name === 'aliexpress_item') {
            const curr = await getCurrency_1.getCurrency();
            const tab = await getActiveTab();
            if ((_a = tab === null || tab === void 0 ? void 0 : tab.url) === null || _a === void 0 ? void 0 : _a.includes('aliradar.com/boarding.html')) {
                const pagePatterns = await aliradar_1.PagePatterns.get();
                tab.url = (_b = pagePatterns === null || pagePatterns === void 0 ? void 0 : pagePatterns.aliradar) === null || _b === void 0 ? void 0 : _b.boardingItemUrl;
            }
            port.postMessage({ tabUrl: tab === null || tab === void 0 ? void 0 : tab.url });
            const itemId = await _getItemId({ href: tab.url });
            const item = await item_1.ItemActions.init(itemId, curr);
            port.postMessage({ item });
            try {
                (item === null || item === void 0 ? void 0 : item.id) &&
                    (item === null || item === void 0 ? void 0 : item.adminseq) &&
                    photoReviews_1.getPhotoData(item === null || item === void 0 ? void 0 : item.id, item === null || item === void 0 ? void 0 : item.adminseq).then((photoData) => {
                        port.postMessage({ photoData });
                    });
            }
            catch (e) { }
            try {
                let similars = await similars_1.SimilarsActions.getSimilarItems(itemId, item === null || item === void 0 ? void 0 : item.category_id, curr);
                const similarsSellers = await sellers_1.getSellers(similars === null || similars === void 0 ? void 0 : similars.map((similarItem) => (similarItem === null || similarItem === void 0 ? void 0 : similarItem.adminseq.toString()) || (similarItem === null || similarItem === void 0 ? void 0 : similarItem.shopId.toString())));
                similars = similars === null || similars === void 0 ? void 0 : similars.map((similarItem) => ({
                    ...similarItem,
                    detailedSeller: similarsSellers === null || similarsSellers === void 0 ? void 0 : similarsSellers.find((similarSeller) => { var _a, _b; return (_a = [similarSeller.id, similarSeller.adminseq]) === null || _a === void 0 ? void 0 : _a.includes((_b = similarItem === null || similarItem === void 0 ? void 0 : similarItem.adminseq) !== null && _b !== void 0 ? _b : similarItem === null || similarItem === void 0 ? void 0 : similarItem.shopId); })
                }));
                port.postMessage({ similars });
            }
            catch (e) { }
            try {
                const hotCategories = await aliradar_1.HotCategoriesConfig.get();
                const hotItems = await hotProducts_1.getHotProducts({});
                port.postMessage({ hotItems, hotCategories });
            }
            catch (e) {
                console.log('HOTS ERROR:', e);
            }
        }
        setIconItemId([activeTab === null || activeTab === void 0 ? void 0 : activeTab.id]);
    });
};
exports.popupTabListener = popupTabListener;


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrency = void 0;
const getCurr = (text) => { var _a, _b; return (_b = (_a = text === null || text === void 0 ? void 0 : text.match(/c_tp=(\w+)&/i)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : null; };
const getCookies = (payload) => new Promise((resolve) => {
    chrome.cookies.getAll(payload, (cookies) => resolve(cookies));
});
const getCurrency = async () => {
    var _a, _b, _c, _d;
    const currRu = getCurr((_b = (_a = (await getCookies({
        domain: 'aliexpress.ru',
        name: 'aep_usuc_f'
    }))) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value);
    if (currRu) {
        return currRu;
    }
    const currCom = getCurr((_d = (_c = (await getCookies({
        domain: 'aliexpress.com',
        name: 'aep_usuc_f'
    }))) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.value);
    if (currCom) {
        return currCom;
    }
    return null;
};
exports.getCurrency = getCurrency;


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const utils_1 = __webpack_require__(11);
const delivery_1 = __webpack_require__(157);
const Connection_1 = __webpack_require__(107);
const Favorites_1 = __webpack_require__(114);
const stores_1 = __webpack_require__(10);
class Account {
    static async getAccountData() {
        const account = await utils_1.ChromeStorage.getAccount();
        if (account) {
            return account;
        }
        return (await Connection_1.axiosInstance.get('accounts')).data;
    }
    static async updatePushToken(pushToken = null) {
        var _a;
        const token = (_a = stores_1.webextStore.getState().account) === null || _a === void 0 ? void 0 : _a.token;
        if (!token) {
            throw new Error('please sign in');
        }
        const tokenSended = !!pushToken;
        pushToken = pushToken || (await utils_1.ChromeStorage.getAccountPush());
        if (!pushToken) {
            return;
        }
        const data = {};
        data.token = pushToken;
        data.lang = chrome.i18n.getUILanguage();
        try {
            data.currency = await delivery_1.getCurrency();
        }
        catch (e) {
            data.currency = data.lang === 'ru' ? 'rub' : 'usd';
        }
        if ((await Favorites_1.Favorites.checkUpdatesChanges(data)) || tokenSended) {
            await utils_1.ChromeStorage.setAccountPush(pushToken);
            return (await Connection_1.axiosInstance.post('accounts/token', data)).data;
        }
    }
    static async deletePushToken() {
        try {
            const pushToken = await utils_1.ChromeStorage.getAccountPush();
            return (await Connection_1.axiosInstance.delete(`accounts/token/${pushToken}`)).data;
        }
        catch (e) {
            // failed to delete push token
        }
    }
}
exports.Account = Account;


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.firebasePushesListener = void 0;
const Account_1 = __webpack_require__(350);
const utils_1 = __webpack_require__(11);
const pushAlert_1 = __webpack_require__(925);
const config = {
    messagingSenderId: '1003200969809'
};
const showNotification = async ({ data }) => {
    try {
        const notification = new Notification(data.title, {
            // @ts-ignore
            type: 'image',
            icon: `assets/img/logo/${data.shop}.png`,
            image: data.imageurl,
            title: data.title,
            body: data.body
        });
        notification.onclick = () => {
            pushAlert_1.pushAlertMetric('opened', data.shop);
            chrome.tabs.create({ url: `${data.link}?mark=notif` });
            notification.close();
        };
        pushAlert_1.pushAlertMetric('displayed', data.shop);
    }
    catch (e) {
        console.error(e);
    }
};
const registerGCMAndReturnToken = () => new Promise((resolve, reject) => chrome.gcm.register([config.messagingSenderId], async (token) => {
    if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError.message);
    }
    resolve(token);
}));
const listen = async () => {
    var _a;
    chrome.gcm.onMessage.removeListener(showNotification);
    const { settings, account = {} } = await utils_1.ChromeStorage.get();
    if (((_a = settings === null || settings === void 0 ? void 0 : settings.notifications) === null || _a === void 0 ? void 0 : _a.value) && account.token) {
        chrome.gcm.onMessage.addListener(showNotification);
    }
};
let interval;
const firebasePushesListener = async () => {
    var _a, _b, _c;
    return;
    // eslint-disable-next-line no-unreachable
    try {
        clearInterval(interval);
        await utils_1.delay(2000);
        const token = await registerGCMAndReturnToken();
        await Account_1.Account.updatePushToken(token);
        await listen();
        // @ts-ignore
        if ((_c = (_b = (_a = chrome === null || chrome === void 0 ? void 0 : chrome.storage) === null || _a === void 0 ? void 0 : _a.local) === null || _b === void 0 ? void 0 : _b.onChanged) === null || _c === void 0 ? void 0 : _c.addListener) {
            // @ts-ignore
            chrome.storage.local.onChanged.addListener(listen);
        }
        else {
            interval = window.setInterval(listen, 30000);
        }
    }
    catch (e) {
        console.warn('push send error', e.message);
    }
};
exports.firebasePushesListener = firebasePushesListener;


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tabsUpdater = exports.startLoader = exports.stopLoader = void 0;
const dispatchTab_1 = __webpack_require__(353);
const loaderPhase = ['•··', '·•·', '··•'];
const loaderPhase3 = ['·  ', '·· ', '···', ' ··', '  ·', '   '];
const loadPhases1 = ['🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚'];
// 12
const printLoader = (phase, count) => chrome.browserAction.setBadgeText({ text: phase[count] });
const printNumber = (n) => chrome.browserAction.setBadgeText({ text: String(n) });
const loaderTabs = new Set();
let timer;
const stopLoader = (tabId, force) => {
    if (!tabId) {
        return;
    }
    if (timer) {
        if (force) {
            loaderTabs.delete(tabId);
        }
        clearInterval(timer);
        timer = null;
        chrome.browserAction.setBadgeText({ text: '' });
    }
};
exports.stopLoader = stopLoader;
const startLoader = (tabId) => {
    if (!tabId) {
        return;
    }
    loaderTabs.add(tabId);
    let counter = 0;
    const phase = loaderPhase;
    if (!timer) {
        timer = setInterval(() => {
            if (counter >= phase.length) {
                counter = 0;
            }
            printLoader(phase, counter);
            counter++;
        }, 200);
    }
};
exports.startLoader = startLoader;
const tabsUpdater = () => {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
        if (changeInfo.status && changeInfo.url && changeInfo.status === 'loading' && changeInfo.url.indexOf('?') === -1) {
            dispatchTab_1.dispatchTab(tabId, { type: 'TAB_UPDATE' });
        }
    });
    /*
    chrome.tabs.onActivated.addListener(({ tabId }) => {
        if ([tabsUpdater.loaderTabs].some((tab) => tab === tabId)) {
            startLoader(tabId);
        } else {
            stopLoader(tabId);
        }
    });

     */
};
exports.tabsUpdater = tabsUpdater;


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchTab = void 0;
const dispatchTab = (tabId, action) => new Promise((resolve) => {
    if (!tabId) {
        return resolve(null);
    }
    chrome.tabs.sendMessage(tabId, action, (response) => {
        resolve(response);
    });
});
exports.dispatchTab = dispatchTab;


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tooltipHelper = exports.exchange = void 0;
const utils_1 = __webpack_require__(11);
const seller_1 = __webpack_require__(161);
const aliexpress_1 = __webpack_require__(71);
const item_1 = __webpack_require__(94);
const constants_1 = __webpack_require__(28);
const sellers_1 = __webpack_require__(160);
const getCurrency_1 = __webpack_require__(349);
const isAliexpressProductPage_1 = __webpack_require__(129);
const dayjs_1 = __importDefault(__webpack_require__(46));
const similar_1 = __webpack_require__(329);
let controller = new AbortController();
let signal = controller.signal;
const exchange = (prices = [], fields = aliexpress_1.EXCHANGE_PRICE_PATTERN, rates, currencyCode) => prices.map((price) => {
    try {
        const to = currencyCode.toLowerCase();
        const from = price[fields.curr].toLowerCase();
        const exchangeRate = (rates[from] && rates[from][to]) || 1;
        if (price[fields.curr].toLowerCase() !== to) {
            for (const key of fields.prices) {
                price[key] = Math.ceil((price[key] || 0) * exchangeRate * 100) / 100;
            }
        }
        price[fields.curr] = to.toUpperCase();
    }
    catch (e) {
        console.error(e);
    }
    return price;
});
exports.exchange = exchange;
const newPageParser = (data, item) => {
    var _a;
    const params = utils_1.finder(data, [
        /"(storeNum)[^\d]+(\d+)/,
        /"(itemStatus)[^\d]+(\d+)/,
        /"(sellerAdminSeq)[^\d]+(\d+)/,
        /"(productId)[^\d]+(\d+)/,
        /"(categoryId)[^\d]+(\d+)/,
        /"(imagePath)":"?([^"]+)/
    ]);
    item.id = +params.productId;
    item.storenum = +params.storeNum;
    item.adminseq = +params.sellerAdminSeq;
    item.category = +params.categoryId;
    item.imageurl = params.imagePath;
    if (+params.itemStatus) {
        item.error = {};
        item.error.code = 410;
    }
    try {
        const act = utils_1.finder(data, [
            /"maxActivityAmount":{"(currency)":"(\w+)"/,
            /"(maxActivityAmount)":{.+"value":([\d.]+).+maxAmount/,
            /"(minActivityAmount)":{.+"value":([\d.]+).+minAmount/
        ]);
        item.userCurr = act.currency;
        item.price = {
            id: item.id,
            min: +act.minActivityAmount,
            max: +act.maxActivityAmount,
            curr: act.currency,
            date: new Date().toISOString().split('T')[0]
        };
    }
    catch (e) {
        console.error(e);
        try {
            const params = utils_1.finder(data, [
                /"maxAmount":{"(currency)":"(\w+)"/,
                /"(maxAmount)":{.+"value":([\d.]+).+minA/,
                /"(minAmount)":{.+"value":([\d.]+)}/
            ]);
            item.userCurr = params.currency;
            item.price = {
                id: item.id,
                min: +params.minAmount,
                max: +params.maxAmount,
                curr: params.currency,
                date: new Date().toISOString().split('T')[0]
            };
        }
        catch (e) {
            console.error(e);
        }
    }
    const $ = new DOMParser().parseFromString(data, 'text/html');
    item.name = (_a = $.querySelector('title')) === null || _a === void 0 ? void 0 : _a.innerText;
};
const oldPageParser = (data, item) => {
    var _a, _b;
    const params = utils_1.finder(data, [
        /window\.runParams\.(productId)[^\d]+(\d+)/,
        /window\.runParams\.(shopId)[^\d]+(\d+)/,
        /window\.runParams\.(adminSeq)[^\d]+(\d+)/,
        /window\.runParams\.(categoryId)[^\d]+(\d+)/,
        /window\.runParams\.(offline)[^\w]+(\w+)/,
        /window\.runParams\.(currencyCode)[^\w]+(\w+)/
    ]);
    item.id = +params.productId;
    item.storenum = +params.shopId;
    item.adminseq = +params.adminSeq;
    item.userCurr = params.currencyCode;
    if (params.offline === 'true') {
        item.error = {};
        item.error.code = 410;
    }
    // item.category = params.categoryId;
    try {
        const act = utils_1.finder(data, [
            /window\.runParams\.(actMinPrice)[^\d]+([\d.]+)/,
            /window\.runParams\.(actMaxPrice)[^\d]+([\d.]+)/,
            /window\.runParams\.(baseCurrencyCode)[^\w]+(\w+)/,
            /window\.runParams\.(currencyRate)[^\d]+([\d.]+)/
        ]);
        item.price = {
            id: item.id,
            min: (+act.actMinPrice * act.currencyRate).toFixed(2),
            max: (+act.actMaxPrice * act.currencyRate).toFixed(2),
            curr: act.baseCurrencyCode,
            date: new Date().toISOString().split('T')[0]
        };
    }
    catch (e) {
        try {
            const params = utils_1.finder(data, [
                /window\.runParams\.(minPrice)[^\d]+([\d.]+)/,
                /window\.runParams\.(maxPrice)[^\d]+([\d.]+)/,
                /window\.runParams\.(baseCurrencyCode)[^\w]+(\w+)/,
                /window\.runParams\.(currencyRate)[^\d]+([\d.]+)/
            ]);
            item.price = {
                id: item.id,
                min: (+params.minPrice * params.currencyRate).toFixed(2),
                max: (+params.maxPrice * params.currencyRate).toFixed(2),
                curr: params.baseCurrencyCode,
                date: new Date().toISOString().split('T')[0]
            };
        }
        catch (e) {
            console.error(e);
        }
    }
    const $ = new DOMParser().parseFromString(data, 'text/html');
    item.imageurl = (_a = $.querySelector('#j-detail-Gallery-main img')) === null || _a === void 0 ? void 0 : _a.getAttribute('src');
    item.name = (_b = $.querySelector('h1.product-name')) === null || _b === void 0 ? void 0 : _b.innerText;
};
const getAliData = async (response, item) => {
    if (response && response.status === 200) {
        try {
            const data = await response.text();
            try {
                oldPageParser(data, item);
            }
            catch (e) {
                newPageParser(data, item);
                console.error(e);
            }
            return item;
        }
        catch (e) {
            item.error = {};
            item.error.code = 500;
        }
    }
    else {
        item.error = {};
        item.error.code = 404;
    }
};
const parseAliradarSeller = async (storenum) => {
    const response = await fetch(`https://api.aliradar.com/v2/sellers/ali/${storenum}`);
    if (response.status === 200) {
        return response.json();
    }
    return null;
};
const parseSeller = async (storenum) => {
    try {
        const sellerInfo = await seller_1.parseAliexpressSeller(storenum);
        if (sellerInfo.info) {
            return {
                seller: { ...aliexpress_1.calculateSellerMetrics(sellerInfo), name: sellerInfo.info.storeName }
            };
        }
        const radarSeller = await sellers_1.getSellers(storenum.toString());
        if (radarSeller) {
            return radarSeller;
        }
        return {
            seller: {
                status: { overall: 'unknown' }
            }
        };
    }
    catch (e) {
        console.error(e);
    }
};
const prepareLink = (link) => (/^https?:\/\//.test(link) ? link : `http://${link}`);
const parseLinkFromRedirectPage = async (s) => {
    const data = (await s.text())
        .replace('\\', '')
        .replace(/%2F/g, '/')
        .replace(/%3F/g, '?')
        .replace(/%3D/g, '=')
        .replace(/%26/g, '&');
    const match = constants_1.ALI_ALTERNATE_LINKS.reduce((a, pattern) => a || data.match(pattern), false);
    if (match) {
        return prepareLink(decodeURIComponent(match[0]));
        // eslint-disable-next-line no-else-return
    }
    else {
        // @ts-ignore
        const match = constants_1.ALI_ALTERNATE_LINKS.reduce((a, pattern) => a || decodeURIComponent(s.url).match(pattern), false);
        if (match && match[0]) {
            return prepareLink(match[0]);
        }
    }
    return null;
    // throw new Error('cant find link on page');
};
const notFinalLink = async (lastLink) => !(await isAliexpressProductPage_1.isAliexpressProductPage(lastLink));
const isSooDeep = (_lastLink, depth) => depth > 0;
async function fetchWithTimeout(resource, options) {
    const { timeout = 3000 } = options;
    const controllerTimeout = new AbortController();
    const id = setTimeout(() => controllerTimeout.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controllerTimeout.signal
    });
    clearTimeout(id);
    return response;
}
const prepareURLAndData = async (link) => {
    let response;
    let lastLink = '';
    let depth = 4; // js or broken url redirects depth
    while (isSooDeep(lastLink, depth) && (await notFinalLink(lastLink))) {
        depth--;
        if (response) {
            lastLink = await parseLinkFromRedirectPage(response);
        }
        if (lastLink === null) {
            throw Error('lastLink === null');
        }
        if (signal.aborted) {
            throw Error('ABORT');
        }
        response = await fetchWithTimeout(prepareLink(lastLink || link), {
            timeout: 10000,
            credentials: 'include',
            signal
        });
        lastLink = response.url;
    }
    lastLink = prepareLink(lastLink.split('?')[0]);
    return { response, lastLink };
};
const fetchData = async (link) => {
    var _a, _b, _c, _d, _e, _f;
    try {
        link = prepareLink(link);
        const { lastLink, response } = await prepareURLAndData(link);
        if ((response === null || response === void 0 ? void 0 : response.status) === 404) {
            return {
                link: (_a = link === null || link === void 0 ? void 0 : link.replace('https://', '')) === null || _a === void 0 ? void 0 : _a.replace('http://', ''),
                lastLink,
                error: {
                    code: 404
                }
            };
        }
        const id = await item_1.getItemId(lastLink);
        if (id) {
            const curr = await getCurrency_1.getCurrency();
            const item = await item_1.ItemActions.init(id, curr);
            const data = { ...item, updated: Date.now() };
            if (data) {
                return {
                    link: (_b = link === null || link === void 0 ? void 0 : link.replace('https://', '')) === null || _b === void 0 ? void 0 : _b.replace('http://', ''),
                    lastLink,
                    ...data
                };
            }
        }
        return {
            link: (_c = link === null || link === void 0 ? void 0 : link.replace('https://', '')) === null || _c === void 0 ? void 0 : _c.replace('http://', ''),
            lastLink,
            error: {
                code: lastLink.includes('404') ? 404 : 900
            }
        };
    }
    catch (e) {
        if ((_d = e === null || e === void 0 ? void 0 : e.toString()) === null || _d === void 0 ? void 0 : _d.includes('aborted')) {
            return {
                link: (_e = link === null || link === void 0 ? void 0 : link.replace('https://', '')) === null || _e === void 0 ? void 0 : _e.replace('http://', ''),
                error: {
                    code: 20,
                    message: e.message
                }
            };
        }
        return {
            link: (_f = link === null || link === void 0 ? void 0 : link.replace('https://', '')) === null || _f === void 0 ? void 0 : _f.replace('http://', ''),
            error: {
                code: 900,
                message: e.message
            }
        };
    }
};
const sendReview = async (link, meta, data) => {
    try {
        const { url, status } = await fetch(meta.url, {
            credentials: 'omit',
            signal
        });
        const isOpen = meta.url === url && status === 200;
        if (isOpen) {
            fetch('https://api.aliradar.com/v2/reviews/ali', {
                method: 'POST',
                body: JSON.stringify({ ...meta, url: link, id: data.id }),
                headers: { 'Content-Type': 'application/json' },
                signal
            }).then();
        }
    }
    catch (e) { }
};
let cache = {};
const cacheSave = async () => {
    await utils_1.ChromeStorage.set({ cache });
};
// setInterval(() => cacheSave(), 30000);
const checkLinks = async ({ link, ...meta }) => {
    var _a;
    if (((_a = cache[link]) === null || _a === void 0 ? void 0 : _a.id) && dayjs_1.default().diff(dayjs_1.default(cache[link].updated), 'hour') < 12) {
        return { link, ...cache[link] };
    }
    const data = await fetchData(link);
    cache[link] = data;
    sendReview(link, meta, data).then();
    return data;
};
let setTimeOutId = null;
const tooltipHelper = async () => {
    cache = await utils_1.ChromeStorage.getOne('cache', {});
    chrome.runtime.onConnect.addListener(async (port) => {
        if (port.name === 'aliradar_tooltip') {
            port.onMessage.addListener((message, port) => {
                if (message.link) {
                    controller === null || controller === void 0 ? void 0 : controller.abort();
                    if (signal.aborted) {
                        controller = new AbortController();
                        signal = controller.signal;
                    }
                    checkLinks(message).then(async (data) => {
                        var _a, _b, _c, _d;
                        port.postMessage({ responseLink: data });
                        if (data === null || data === void 0 ? void 0 : data.id) {
                            try {
                                port.postMessage({
                                    similars: await similar_1.getSimilar({
                                        id: data.id,
                                        category_id: data === null || data === void 0 ? void 0 : data.category_id,
                                        min: (_b = (_a = data === null || data === void 0 ? void 0 : data.priceStats) === null || _a === void 0 ? void 0 : _a.min) !== null && _b !== void 0 ? _b : 0,
                                        max: (_d = (_c = data === null || data === void 0 ? void 0 : data.priceStats) === null || _c === void 0 ? void 0 : _c.max) !== null && _d !== void 0 ? _d : 0,
                                        curr: await getCurrency_1.getCurrency()
                                    })
                                });
                            }
                            catch (err) {
                                console.error(err);
                            }
                        }
                    });
                }
                return true;
            });
        }
    });
};
exports.tooltipHelper = tooltipHelper;


/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __webpack_require__(63);
const popupTabListner_1 = __webpack_require__(348);
const sender_1 = __webpack_require__(21);
const packageVersion_1 = __webpack_require__(922);
const authListener_1 = __webpack_require__(923);
const feedbackInformer_1 = __webpack_require__(300);
const installHandler_1 = __webpack_require__(926);
const cashbackHelper_1 = __webpack_require__(927);
const statHelper_1 = __webpack_require__(930);
const tabsUpdater_1 = __webpack_require__(352);
const uninstallHandler_1 = __webpack_require__(931);
const manageExtensionIcon_1 = __webpack_require__(932);
const googleAnalytics_1 = __webpack_require__(263);
const parserManager_1 = __webpack_require__(933);
const installationHelper_1 = __webpack_require__(934);
const ratesUpdater_1 = __webpack_require__(935);
const favoritesHub_1 = __webpack_require__(936);
const photoApi_1 = __webpack_require__(937);
const fluxActionHandler_1 = __webpack_require__(938);
const firebasePushesListener_1 = __webpack_require__(351);
const tooltipHelper_1 = __webpack_require__(354);
const categoryParser_1 = __webpack_require__(941);
const settingsInit_1 = __webpack_require__(942);
const checkInstallDateForInstruction_1 = __webpack_require__(943);
const cacheCleaner_1 = __webpack_require__(944);
const redirectMark_1 = __webpack_require__(64);
const boarding_1 = __webpack_require__(945);
window.context = 'background';
packageVersion_1.savePackageVersion();
client_1.graphqlBackgroundHandler();
installationHelper_1.installationHelper();
favoritesHub_1.favoritesHub();
ratesUpdater_1.ratesUpdater();
feedbackInformer_1.feedbackInformer();
installHandler_1.installHandler();
cashbackHelper_1.cashbackHelper();
statHelper_1.statHelper();
uninstallHandler_1.uninstallHandler();
manageExtensionIcon_1.manageExtensionIcon();
googleAnalytics_1.backgroundAnalyticsInit();
sender_1.handleSendMetric();
parserManager_1.parserManager();
photoApi_1.photoApi();
authListener_1.authListener().then(() => firebasePushesListener_1.firebasePushesListener());
fluxActionHandler_1.fluxActionHandler();
tabsUpdater_1.tabsUpdater();
categoryParser_1.categoryParser();
tooltipHelper_1.tooltipHelper();
settingsInit_1.settingsInit();
checkInstallDateForInstruction_1.checkInstallDateForInstruction();
cacheCleaner_1.cacheCleanerInit();
boarding_1.onSkipBoarding();
redirectMark_1.RedirectMark.initCleaner();
popupTabListner_1.popupTabListener();


/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageVersion = exports.savePackageVersion = void 0;
const package_json_1 = __importDefault(__webpack_require__(166));
const PACKAGE_VERSION = 'package_version';
const savePackageVersion = async () => {
    const cache = exports.getPackageVersion();
    if (cache && cache === package_json_1.default.version) {
        return;
    }
    localStorage.setItem(PACKAGE_VERSION, package_json_1.default.version);
};
exports.savePackageVersion = savePackageVersion;
const getPackageVersion = () => { var _a; return (_a = localStorage.getItem(PACKAGE_VERSION)) !== null && _a !== void 0 ? _a : null; };
exports.getPackageVersion = getPackageVersion;


/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.authListener = void 0;
const utils_1 = __webpack_require__(11);
const Connection_1 = __webpack_require__(107);
const Account_1 = __webpack_require__(350);
const Favorites_1 = __webpack_require__(114);
const stores_1 = __webpack_require__(10);
const favoritesInit_1 = __webpack_require__(924);
const firebasePushesListener_1 = __webpack_require__(351);
const Ports = {};
Ports.accountActivePorts = new Map();
Ports.sendAll = (msg) => Ports.accountActivePorts.forEach((activePort) => activePort.postMessage(msg));
Ports.savePort = (port) => {
    port.sender.uid = port.sender.tab ? port.sender.tab.id : port.sender.url;
    Ports.accountActivePorts.set(port.sender.uid, port);
    port.onDisconnect.addListener((disconnectedPort) => Ports.accountActivePorts.delete(disconnectedPort.sender.uid));
};
const authListenerOne = async (token) => {
    let accountState;
    if (token) {
        Connection_1.initAxios(token);
    }
    const syncFavorites = async () => {
        await Favorites_1.Favorites.sendLocalToServer();
        await favoritesInit_1.initFavorites();
    };
    chrome.runtime.onConnect.addListener((port) => {
        if (port.name === 'accountSync') {
            Ports.savePort(port);
            port.onMessage.addListener(async (msg) => {
                var _a;
                switch (msg.action) {
                    case 'init':
                        if (token) {
                            accountState = await Account_1.Account.getAccountData();
                            accountState.token = token;
                            Ports.sendAll({ action: 'initialized', data: accountState });
                        }
                        else {
                            // Ports.sendAll({ action: 'signedOut' });
                        }
                        break;
                    case 'authWindowDone':
                        chrome.windows.remove(msg.windowId);
                        break;
                    case 'signIn':
                        accountState = (_a = msg === null || msg === void 0 ? void 0 : msg.payload) === null || _a === void 0 ? void 0 : _a[0];
                        token = accountState === null || accountState === void 0 ? void 0 : accountState.token;
                        await utils_1.ChromeStorage.setApiToken(token);
                        await utils_1.ChromeStorage.setAccount(accountState);
                        Connection_1.initAxios(token);
                        syncFavorites();
                        await firebasePushesListener_1.firebasePushesListener();
                        Ports.sendAll({ action: 'signedIn', data: accountState });
                        break;
                    case 'signOut':
                        // @ts-ignore
                        clearInterval(favoritesInit_1.initFavorites.interval);
                        await utils_1.Cookies.remove({ url: 'https://aliradar.com', name: 'token' });
                        await utils_1.ChromeStorage.setApiToken(null);
                        await utils_1.ChromeStorage.setAccount(null);
                        await utils_1.ChromeStorage.setFavorites([]);
                        stores_1.webextStore.dispatch(stores_1.clearData());
                        await Account_1.Account.deletePushToken();
                        await favoritesInit_1.initFavorites();
                        token = null;
                        accountState = null;
                        Ports.sendAll({ action: 'signedOut' });
                        break;
                    default:
                        console.log(msg);
                }
                return true;
            });
        }
    });
    if (token) {
        accountState = await Account_1.Account.getAccountData();
        accountState.token = token;
        await favoritesInit_1.initFavorites();
        Ports.sendAll({ action: 'signedIn', data: accountState });
    }
};
const getAuthToken = async () => (await utils_1.ChromeStorage.get('apiToken')).apiToken;
const authListener = async () => authListenerOne(await getAuthToken());
exports.authListener = authListener;


/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initFavorites = void 0;
const utils_1 = __webpack_require__(11);
const Favorites_1 = __webpack_require__(114);
const stores_1 = __webpack_require__(10);
let interval;
const updateFavorites = async () => {
    var _a, _b, _c, _d;
    const favorites = await utils_1.ChromeStorage.getFavorites();
    if (
    // axiosInstance.defaults.headers.Authorization
    (_b = (_a = stores_1.webextStore.getState()) === null || _a === void 0 ? void 0 : _a.account) === null || _b === void 0 ? void 0 : _b.token) {
        const favorites = await Favorites_1.Favorites.getFavoritesDataFromServer();
        await utils_1.ChromeStorage.setFavorites(favorites);
    }
    else if (!favorites || !((_d = (_c = stores_1.webextStore.getState()) === null || _c === void 0 ? void 0 : _c.account) === null || _d === void 0 ? void 0 : _d.token)) {
        await utils_1.ChromeStorage.setFavorites([]);
    }
};
const initFavorites = async () => {
    clearInterval(interval);
    interval = setInterval(updateFavorites, 3600000);
    await updateFavorites();
};
exports.initFavorites = initFavorites;


/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pushAlertMetric = void 0;
const sender_1 = __webpack_require__(21);
const shops = {
    ali: 'aliexpress.com',
    gear: 'gearbest.com',
    bg: 'banggood.com',
    jd: 'jd.ru',
    joom: 'joom.com'
};
const pushAlertMetric = (type, shop) => {
    try {
        sender_1.sendMetric('push-alert', type, shops[shop], true);
    }
    catch (e) { }
};
exports.pushAlertMetric = pushAlertMetric;


/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.installHandler = void 0;
const eventRecordTimeout = 1000;
const getInstallSource = async (tabs) => {
    const radarTabs = [];
    const sources = {
        site: /aliradar\.com/i,
        chrome_store: /chrome.google.com.*pfjibkklgpfcfdlhijfglamdnkjnpdeg.*related/i,
        opera_store: /addons.opera.com.*aliexpress-radar/i
    };
    tabs.forEach((tab) => {
        Object.keys(sources).forEach((source) => {
            if (new RegExp(sources[source]).exec(tab.url) !== null) {
                // if(source === 'site' && !tab.title.includes('#')) return;
                radarTabs.push({
                    tab,
                    source
                });
            }
        });
    });
    if (radarTabs.some((tab) => tab.source === 'site')) {
        return 'site';
    }
    if (radarTabs.some((tab) => tab.source === 'chrome_store')) {
        return 'chrome_store';
    }
    if (radarTabs.some((tab) => tab.source === 'opera_store')) {
        return 'opera_store';
    }
    return 'Unknown';
};
// function getParam(url, name) => (url.match(new RegExp('u' + "=(.*?)($|\&)", "i")) || [])[1];
const recordInstall = async () => {
    chrome.cookies.set({
        url: 'https://aliradar.com',
        name: 'extension_deleted',
        value: 'false'
    });
    // @ts-ignore
    chrome.tabs.getAllInWindow(null, (tabs) => {
        const source = getInstallSource(tabs);
        console.info(`Extension installed from ${source}`);
    });
    setTimeout(() => {
        const info = JSON.parse(localStorage.getItem(`${chrome.runtime.id}`));
        if (info === null) {
            localStorage.setItem(`${chrome.runtime.id}`, JSON.stringify({
                installed: new Date().getTime() - eventRecordTimeout,
                updated: new Date().getTime() - eventRecordTimeout
            }));
        }
    }, eventRecordTimeout);
};
const recordUpdate = async (details) => {
    setTimeout(() => {
        const info = JSON.parse(localStorage.getItem(`${chrome.runtime.id}`));
        if (info === null) {
            localStorage.setItem(`${chrome.runtime.id}`, JSON.stringify({
                installed: new Date().getTime() - eventRecordTimeout,
                updated: new Date().getTime() - eventRecordTimeout
            }));
        }
        else if (details) {
            console.info('Extension updated');
            info.updated = new Date().getTime() - eventRecordTimeout;
            localStorage.setItem(`${chrome.runtime.id}`, JSON.stringify(info));
        }
    }, eventRecordTimeout);
};
const installHandler = async () => {
    chrome.runtime.onInstalled.addListener((details) => {
        if (details.reason === 'install') {
            recordInstall();
        }
        else if (details.reason === 'update') {
            recordUpdate(details);
        }
    });
    // recordUpdate(null, true)
    recordUpdate(null);
};
exports.installHandler = installHandler;


/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cashbackHelper = void 0;
const aliradar_1 = __webpack_require__(34);
const utils_1 = __webpack_require__(11);
const helpers_1 = __webpack_require__(928);
const redirectMark_1 = __webpack_require__(64);
const VISITED_WM_DOMAINS = 'visitedWMDomains';
// @ts-ignore
const uLang = (navigator.language || navigator.userLanguage).split('-')[0];
const getTimeouts = () => JSON.parse(localStorage.getItem('timeouts')) || {};
const redirectTimeoutNotDetected = (siteConfig, host) => {
    const timeouts = getTimeouts();
    return Date.now() - (timeouts[host] || 0) > siteConfig.affTimeout;
};
const checkTimeoutEnd = ({ affInstallTimeout, installed, updated }) => Date.now() - Math.max(installed, updated) > affInstallTimeout;
const setRedirectTimeout = (host) => {
    const timeouts = getTimeouts();
    timeouts[host] = Date.now();
    setTimeout(() => localStorage.setItem('timeouts', JSON.stringify(timeouts)), 1);
};
const noOneInstallBetween = ({ ignoreInstallBetween }, installed) => {
    return !ignoreInstallBetween.some(([start, end]) => start <= installed && installed <= end);
};
const redirect = {};
// @ts-ignore
const listenHandler = (config) => ({ url, requestId
// ...details
 }) => {
    const cURL = new URL(url);
    if (cURL.searchParams.has('sk')) {
        return {};
    }
    let mark = cURL.searchParams.get('mark');
    const [sub, domain] = helpers_1.getSplicedHost(cURL.hostname);
    const { wid, installed, isDontVisitedWMSites, subId, ignoreWebs, ignoreWebsRange } = config;
    const isValidIgnoreWebs = helpers_1.checkValidIgnoreWebs(ignoreWebs, installed, wid);
    const isValidIgnoreWebsRange = helpers_1.checkValidIgnoreWebsRange(ignoreWebsRange, installed, wid);
    const siteConfig = config.sites[domain];
    const innerSub = siteConfig.affLinks[sub] ? sub : '*';
    const innerHost = `${innerSub}.${domain}`;
    if ((helpers_1.noOneIgnoreSubs(siteConfig, sub) &&
        isDontVisitedWMSites &&
        isValidIgnoreWebs &&
        isValidIgnoreWebsRange &&
        helpers_1.noOneIgnoreWebs(siteConfig, wid) &&
        checkTimeoutEnd(config) &&
        helpers_1.noOneIgnoreLang(siteConfig, uLang) &&
        noOneInstallBetween(siteConfig, installed) &&
        redirectTimeoutNotDetected(siteConfig, innerHost)) ||
        (helpers_1.checkMarkNeeded(siteConfig) && mark)) {
        try {
            const id = redirectMark_1.RedirectMark.getIdFromUrl(url);
            redirectMark_1.RedirectMark.add({
                mark,
                id
            });
        }
        catch (e) {
            console.error(e);
        }
        setRedirectTimeout(innerHost);
        const redirectUrl = (siteConfig.affLinks[sub] || siteConfig.affLinks['*'])
            .replace('__SUBID__', subId + ((mark && `_${mark.slice(0, 7)}`) || ''))
            .replace('__CURURL__', cURL.origin + cURL.pathname);
        redirect[requestId] = true;
        return { redirectUrl };
    }
};
const hasListenerBR = (callback) => chrome.webRequest.onBeforeRequest.hasListener(callback);
const addListenerBR = (config, callback) => {
    chrome.webRequest.onBeforeRequest.addListener(callback, {
        urls: Object.keys(config.sites).map((e) => `*://*.${e}/*`),
        types: ['main_frame']
    }, ['blocking']);
    chrome.webRequest.onBeforeSendHeaders.addListener(
    // @ts-ignore
    ({ requestId, requestHeaders
    // ...details
     }) => {
        if (redirect[requestId] === true) {
            const rh = requestHeaders ? requestHeaders === null || requestHeaders === void 0 ? void 0 : requestHeaders.filter((e) => e.name.toLowerCase() !== 'pragma') : [];
            let requestHeaders1 = [
                ...rh,
                {
                    name: 'pragma',
                    value: 'cache'
                }
            ];
            return { requestHeaders: requestHeaders1 };
        }
    }, {
        urls: ['*://*.aliradar.com/*'],
        types: ['main_frame']
    }, ['blocking', 'requestHeaders', 'extraHeaders']);
};
const removeListenerBR = (callback) => hasListenerBR(callback) && chrome.webRequest.onBeforeRequest.removeListener(callback);
const getConfig = async () => {
    const config = await aliradar_1.SitesConfig.get();
    const { id } = await new Promise((resolve) => chrome.management.getSelf(resolve));
    const { installed = Date.now(), updated = Date.now() } = JSON.parse(localStorage.getItem(id)) || {};
    config.installed = installed;
    config.updated = updated;
    config.wid = JSON.parse(localStorage.getItem('__wid')) || config.defaultSUBID;
    config.uuid = JSON.parse(localStorage.getItem('__uuid')) || '';
    config.subId = (config.uuid && `${config.uuid}_`) + config.wid;
    config.sites = Object.entries(config.sites).reduce((a, [key, value]) => ({
        ...a,
        [key]: {
            // @ts-ignore
            ...value,
            ...(value.affLinksOld && installed / 1000 < value.old
                ? { affLinks: { ...value.affLinks, ...value.affLinksOld } }
                : {})
        }
    }), {});
    return config;
};
const setIgnoredWMDomain = async (config) => {
    const configWMDomains = config === null || config === void 0 ? void 0 : config.ignoreDomains;
    const { visitedWMDomains = [] } = await utils_1.ChromeStorage.get(VISITED_WM_DOMAINS);
    const isConfigHaveVisitedUrl = configWMDomains === null || configWMDomains === void 0 ? void 0 : configWMDomains.some((configDomainUrl) => {
        return visitedWMDomains && (visitedWMDomains === null || visitedWMDomains === void 0 ? void 0 : visitedWMDomains.some((visitedURL) => visitedURL.includes(configDomainUrl)));
    });
    config.isDontVisitedWMSites = !isConfigHaveVisitedUrl;
    chrome.tabs.onUpdated.addListener(async (_tabId, changeInfo, tab) => {
        var _a;
        if (changeInfo.status === 'loading') {
            const { url } = tab;
            const isVisitedWMUrl = (_a = config === null || config === void 0 ? void 0 : config.ignoreDomains) === null || _a === void 0 ? void 0 : _a.some((domain) => url && (url === null || url === void 0 ? void 0 : url.includes(domain)) && !(visitedWMDomains === null || visitedWMDomains === void 0 ? void 0 : visitedWMDomains.includes(domain)));
            if (isVisitedWMUrl) {
                utils_1.ChromeStorage.set({ [VISITED_WM_DOMAINS]: [...visitedWMDomains, tab.url] });
                config.isDontVisitedWMSites = !isVisitedWMUrl;
            }
        }
    });
};
let doRedirect = false;
const cashbackHelper = async () => {
    try {
        const config = await getConfig();
        await setIgnoredWMDomain(config);
        const callback = listenHandler(config);
        await asyncConditionWorker(config, callback);
        if (doRedirect) {
            addListenerBR(config, callback);
        }
    }
    catch (e) {
        setTimeout(exports.cashbackHelper, 600000);
    }
};
exports.cashbackHelper = cashbackHelper;
const checkNoOneExt = async ({ extLinks }) => (await Promise.all(extLinks.map(async (extLink) => {
    try {
        await (await fetch(extLink)).text();
        return false;
    }
    catch (e) {
        console.info('ext not found');
        return true;
    }
}))).some((e) => e);
const asyncConditionWorker = async (config, callback) => {
    const oldCondition = doRedirect;
    doRedirect = await checkNoOneExt(config);
    if (oldCondition !== doRedirect) {
        removeListenerBR(callback);
        return exports.cashbackHelper();
    }
    setTimeout(() => asyncConditionWorker(config, callback), 3600000);
};


/***/ }),

/***/ 928:
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
__exportStar(__webpack_require__(929), exports);


/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidIgnoreWebsRange = exports.checkValidIgnoreWebs = exports.getSplicedHost = exports.checkMarkNeeded = exports.noOneIgnoreLang = exports.noOneIgnoreWebs = exports.noOneIgnoreSubs = void 0;
const noOneIgnoreSubs = ({ ignoreSubs }, sub) => ignoreSubs.every((ignore) => ignore !== sub);
exports.noOneIgnoreSubs = noOneIgnoreSubs;
const noOneIgnoreWebs = ({ ignoreWebs = [] }, wid) => ignoreWebs.every((ignore) => ignore !== wid);
exports.noOneIgnoreWebs = noOneIgnoreWebs;
const noOneIgnoreLang = ({ ignoreLangs }, uLang) => ignoreLangs.every((lang) => lang !== uLang);
exports.noOneIgnoreLang = noOneIgnoreLang;
const checkMarkNeeded = ({ redirectMarks = true }) => redirectMarks;
exports.checkMarkNeeded = checkMarkNeeded;
const getSplicedHost = (hostname) => {
    hostname = hostname.split('.');
    return [hostname.splice(-2).join('.'), hostname.join('.')].reverse();
};
exports.getSplicedHost = getSplicedHost;
const checkValidIgnoreWebs = (ignoreWebs, installed, widLS) => {
    const isValidIgnoreWebs = ignoreWebs === null || ignoreWebs === void 0 ? void 0 : ignoreWebs.some((web) => {
        const { wid, installBetween } = web;
        const isForbiddenWID = widLS === wid;
        const isForbiddenInstallBetweenRange = widLS === wid && installBetween && installed >= installBetween[0] && installed <= installBetween[1];
        return isForbiddenInstallBetweenRange || isForbiddenWID;
    });
    return !isValidIgnoreWebs;
};
exports.checkValidIgnoreWebs = checkValidIgnoreWebs;
const checkValidIgnoreWebsRange = (ignoreWebsRange, installed, widLS) => {
    const isValidIgnoreWebsRange = ignoreWebsRange === null || ignoreWebsRange === void 0 ? void 0 : ignoreWebsRange.some((web) => {
        const { widFrom, widTo, installBetween } = web;
        const isForbiddenWidRange = widLS >= widFrom && widLS <= widTo;
        const isForbiddenInstallBetweenRange = installBetween && installed >= installBetween[0] && installed <= installBetween[1];
        return isForbiddenWidRange || (isForbiddenInstallBetweenRange && isForbiddenWidRange);
    });
    return !isValidIgnoreWebsRange;
};
exports.checkValidIgnoreWebsRange = checkValidIgnoreWebsRange;


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Part from external monetization for getting webmaster id from landing cookies
 * and sending install/active stats
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.statHelper = void 0;
const api_browser_host = 'https://aliradar.com/api/stats';
const defaultWmid = '5108';
const cookieDomain = 'aliradar.com';
const cookieWmKey = 'w';
const cookieUserKey = 'uuid';
let wmId;
let uuid;
const storageGet = (key, def) => {
    let out = def;
    if (localStorage[key] !== undefined) {
        out = JSON.parse(localStorage[key]);
    }
    return out;
};
const storageSet = (key, value) => {
    localStorage[key] = JSON.stringify(value);
};
/* send install/active statistics */
const sendActiveStats = () => {
    if (wmId && api_browser_host) {
        const def = null;
        let name = '__installed';
        let marker = storageGet(name, def);
        let action = 'active';
        const now = new Date().getTime();
        let shouldSend = false;
        if (marker === def) {
            marker = `${now}${Math.random().toString(36)}`;
            storageSet(name, marker);
            action = 'install';
            shouldSend = true;
        }
        else {
            name = '__actived';
            const lastTime = storageGet(name, def);
            shouldSend = lastTime === def || +lastTime + 24 * 60 * 60 * 1000 < now;
            if (shouldSend) {
                storageSet(name, now);
            }
        }
        if (shouldSend) {
            const webmasterId = wmId;
            const userId = uuid;
            const random = `${Math.random()}`;
            if (action === 'install') {
                fetch(`${api_browser_host}?a=${action}&w=${webmasterId}${userId ? `&uid=${userId}` : ''}`)
                    .then((res) => res.json())
                    .then((response) => {
                    if (response && response.user_id && response.webmaster_id) {
                        storageSet('__uuid', response.user_id);
                        storageSet('__wid', response.webmaster_id);
                        chrome.cookies.set({
                            url: `https://${cookieDomain}`,
                            name: cookieUserKey,
                            value: response.user_id
                        });
                        chrome.cookies.set({
                            url: `https://${cookieDomain}`,
                            name: cookieWmKey,
                            value: response.webmaster_id
                        });
                    }
                })
                    .catch((_err) => { });
            }
            else {
                fetch(`${api_browser_host}?a=${action}&w=${webmasterId}${userId ? `&uid=${userId}` : ''}`)
                    .then((res) => res.json())
                    .then((response) => {
                    if (response && response.user_id && response.webmaster_id) {
                        storageSet('__uuid', response.user_id);
                        storageSet('__wid', response.webmaster_id);
                        chrome.cookies.set({
                            url: `https://${cookieDomain}`,
                            name: cookieUserKey,
                            value: response.user_id
                        });
                        chrome.cookies.set({
                            url: `https://${cookieDomain}`,
                            name: cookieWmKey,
                            value: response.webmaster_id
                        });
                    }
                })
                    .catch((_err) => { });
            }
        }
    }
};
/* get webmaster id */
const checkWebmasterId = (callback) => {
    wmId = storageGet('__wid', undefined);
    if (typeof wmId === 'undefined') {
        chrome.cookies.getAll({ domain: cookieDomain }, (cookies) => {
            let found = false;
            for (let i = 0, l = cookies.length; i < l; i++) {
                if (cookies[i].name === cookieWmKey) {
                    found = true;
                    wmId = cookies[i].value;
                    storageSet('__wid', wmId);
                }
            }
            /* try find in cookies once, if not found - use default wmid */
            if (!found) {
                wmId = defaultWmid;
                storageSet('__wid', wmId);
            }
            callback();
        });
    }
    else {
        callback();
    }
};
/* get user id */
const checkUserId = () => {
    uuid = storageGet('__uuid', undefined);
    if (typeof uuid === 'undefined') {
        chrome.cookies.getAll({ domain: cookieDomain }, (cookies) => {
            let found = false;
            for (let i = 0, l = cookies.length; i < l; i++) {
                if (cookies[i].name === cookieUserKey) {
                    found = true;
                    uuid = cookies[i].value;
                    storageSet('__uuid', uuid);
                }
            }
            checkWebmasterId(sendActiveStats);
        });
    }
    else {
        checkWebmasterId(sendActiveStats);
    }
};
const statHelper = () => {
    checkUserId();
};
exports.statHelper = statHelper;


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.uninstallHandler = void 0;
const utils_1 = __webpack_require__(11);
const getUninstallPageUrl = () => {
    const locale = utils_1.detectLocale();
    if (locale === 'ru') {
        return 'https://aliradar.com/bye.html';
    }
    if (locale === 'fr') {
        return 'https://aliradar.com/fr/bye.html';
    }
    if (locale === 'portu') {
        return 'https://aliradar.com/pt/bye.html';
    }
    if (locale === 'es') {
        return 'https://aliradar.com/es/bye.html';
    }
    return 'https://aliradar.com/en/bye.html';
};
const uninstallHandler = () => {
    chrome.runtime.setUninstallURL(getUninstallPageUrl());
};
exports.uninstallHandler = uninstallHandler;


/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.manageExtensionIcon = void 0;
const sitesToActivateIcon = [
    'aliexpress.com',
    'gearbest.com',
    'joom.com',
    'aliradar.com',
    'citilink',
    'mvideo',
    'dns-shop',
    'ozon'
];
const checkUrl = (url) => sitesToActivateIcon.some((x) => url.includes(x));
const setIcon = (path) => chrome.browserAction.setIcon({
    path
});
const setRedIcon = () => setIcon('assets/img/logo/icon_on.png');
const setGreyIcon = () => setIcon('assets/img/logo/icon_off.png');
const changeIconColor = () => {
    // chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    //   if (tabs.length > 0) {
    //     const url = tabs[0].url
    //     const urlInList = checkUrl(url)
    //     if (urlInList) {
    //       setRedIcon()
    //     } else {
    //       setGreyIcon()
    //     }
    //   }
    // })
};
const detectOpenPopup = () => {
    chrome.runtime.onConnect.addListener((externalPort) => {
        externalPort.onDisconnect.addListener(() => {
            changeIconColor();
        });
        // setRedIcon()
    });
};
const manageExtensionIcon = () => {
    // chrome.tabs.onUpdated.addListener(changeIconColor)
    // chrome.tabs.onActivated.addListener(changeIconColor)
    detectOpenPopup();
};
exports.manageExtensionIcon = manageExtensionIcon;


/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parserManager = void 0;
const dayjs_1 = __importDefault(__webpack_require__(46));
const seller_1 = __webpack_require__(161);
const aliexpress_1 = __webpack_require__(71);
const needToUpdate = async (lastUpdate) => {
    const dayToUpdate = dayjs_1.default();
    return dayToUpdate.diff(dayjs_1.default(lastUpdate).add(2, 'week')) > 0;
};
/**
 * Слушает сообщение с content части после чего обновляет товар,
 * если он не обновлялся больше двух недель.
 */
const compareSellerInfo = async () => {
    chrome.runtime.onMessage.addListener(async (res) => {
        if (res.aliradarSellerInfo) {
            const aliradarInfo = res.aliradarSellerInfo.info;
            const sellerId = res.aliradarSellerInfo.id;
            const aliexpressInfo = await seller_1.parseAliexpressSeller(sellerId);
            if (needToUpdate(aliradarInfo.updated_at) && aliexpressInfo && aliexpressInfo.info) {
                aliexpress_1.SellerActions.sendSellerInfo(aliexpressInfo);
            }
        }
        return true;
    });
};
const parserManager = async () => {
    compareSellerInfo();
};
exports.parserManager = parserManager;


/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.installationHelper = exports.getThankYouPageUrl = void 0;
const utils_1 = __webpack_require__(11);
const getThankYouPageUrl = () => {
    const locale = utils_1.detectLocale();
    if (locale === 'ru') {
        return 'https://aliradar.com/thank-you.html';
    }
    if (locale === 'fr') {
        return 'https://aliradar.com/fr/thank-you.html';
    }
    if (locale === 'portu') {
        return 'https://aliradar.com/pt/thank-you.html';
    }
    if (locale === 'es') {
        return 'https://aliradar.com/es/thank-you.html';
    }
    return 'https://aliradar.com/en/thank-you.html';
};
exports.getThankYouPageUrl = getThankYouPageUrl;
const getThankYouPageUrlFake = () => 'http://localhost:8080/thank-you.html';
const getScript = (url) => `
  const button = document.getElementById('view-instruction');
  button.addEventListener('click', () => {
    window.location = '${url}';
  })
`;
const listener = async (details) => {
    // @ts-ignore
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: exports.getThankYouPageUrl() }, async (tab) => {
            const url = '/BoardingPopup.html';
            utils_1.ChromeStorage.set({ boardingPage: url });
            // @ts-ignore
            chrome.tabs.executeScript(tab.id, { code: getScript(url) });
        });
        chrome.runtime.onInstalled.removeListener(listener);
    }
};
const installationHelper = () => {
    chrome.runtime.onInstalled.addListener(function listener(details) {
        const url = 'https://aliradar.com/boarding.html';
        // @ts-ignore
        if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
            chrome.tabs.create({ url }, async (_tab) => { });
            chrome.runtime.onInstalled.removeListener(listener);
        }
    });
};
exports.installationHelper = installationHelper;


/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ratesUpdater = void 0;
const ramda_1 = __webpack_require__(23);
const utils_1 = __webpack_require__(11);
const aliradar_1 = __webpack_require__(34);
const ratesValidation = (rates) => {
    const filteredRates = ramda_1.map((x) => ramda_1.omit(['ratename', 'updated'], x), rates);
    // @ts-ignore
    // eslint-disable-next-line no-return-assign
    const reducedRates = ramda_1.reduce((acc, curr) => (acc = [...ramda_1.values(curr)]), [], filteredRates);
    try {
        ramda_1.forEach((x) => {
            if (x === null) {
                throw new Error();
            }
        }, reducedRates);
        return true;
    }
    catch (e) {
        return false;
    }
};
const updateRates = async () => {
    const newRates = await aliradar_1.RatesConfig.get();
    const saveInCache = ratesValidation(newRates);
    if (saveInCache) {
        utils_1.ChromeStorage.set({ exchangeRates: newRates });
    }
};
const ratesUpdater = () => {
    updateRates();
    setInterval(updateRates, 3600000);
    updateRates();
};
exports.ratesUpdater = ratesUpdater;


/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.favoritesHub = void 0;
const favoritesHub = () => {
    const activeTabs = new Map();
    const activeTabsBoarding = new Map();
    chrome.runtime.onConnect.addListener((port) => {
        if (port.name === 'favorites') {
            port.sender.uid = port.sender.tab ? port.sender.tab.id : port.sender.url;
            activeTabs.set(port.sender.uid, port);
            port.onDisconnect.addListener((disconnectedPort) => activeTabs.delete(disconnectedPort.sender.uid));
            port.onMessage.addListener(async (_msg, origin) => {
                const uid = origin.sender.tab ? origin.sender.tab.id : origin.sender.url;
                activeTabs.forEach((activePort) => activePort.sender.uid !== uid && activePort.postMessage({ action: 'favoritesUpdated' }));
                return true;
            });
        }
        if (port.name === 'boarding') {
            port.sender.uid = port.sender.tab ? port.sender.tab.id : port.sender.url;
            activeTabsBoarding.set(port.sender.uid, port);
            port.onDisconnect.addListener((disconnectedPort) => activeTabsBoarding.delete(disconnectedPort.sender.uid));
            port.onMessage.addListener(async (_msg, origin) => {
                const uid = origin.sender.tab ? origin.sender.tab.id : origin.sender.url;
                activeTabsBoarding.forEach((activePort) => activePort.sender.uid !== uid && activePort.postMessage({ action: 'boardingUpdated' }));
                return true;
            });
        }
    });
};
exports.favoritesHub = favoritesHub;


/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.photoApi = void 0;
const getPhotoData = async (productId, ownerMemberId, page, _sort, starsCount) => {
    // некоторые сочетания фильтров не работают друг с другом и вернут 0 отзывов.
    // например withPictures=true не работает с фильтром по звездам и сортировкой
    // страница для проверки и тестирования:
    // https://feedback.aliexpress.com/display/productEvaluation.htm?v=2&productId=4000033513173&ownerMemberId=228079431&companyId=237668928&memberType=seller&startValidDate=&i18n=true&evaStartFilterValue=5%20Stars
    const response = await fetch(`https://feedback.aliexpress.com/display/productEvaluation.htm?productId=${productId}&ownerMemberId=${ownerMemberId}${page > 0 ? `&page=${page}` : ''}${starsCount ? `&evaStarFilterValue=${starsCount}%20Stars` : ''}`, { credentials: 'include' });
    return response.text();
};
const photoApi = () => {
    chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
        if (request.getPhotoData) {
            const { productId, ownerMemberId, page, sort, starsCount } = request.getPhotoData;
            getPhotoData(productId, ownerMemberId, page, sort, starsCount).then((data) => {
                sendResponse({ photoData: data });
            });
            return true;
        }
        return true;
    });
};
exports.photoApi = photoApi;


/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fluxActionHandler = void 0;
const background_1 = __webpack_require__(17);
const dispatchTab_1 = __webpack_require__(353);
const utils_1 = __webpack_require__(11);
const tabs_1 = __webpack_require__(939);
const parse_1 = __webpack_require__(940);
const tabsUpdater_1 = __webpack_require__(352);
const redirectMark_1 = __webpack_require__(64);
const popupTabListner_1 = __webpack_require__(348);
const openAuthHandler = async () => {
    var _a, _b;
    const tab = await utils_1.getCurrentTab();
    if (((_a = tab.url) === null || _a === void 0 ? void 0 : _a.includes(chrome.runtime.id)) && ((_b = tab.url) === null || _b === void 0 ? void 0 : _b.includes('auth.html'))) {
        await dispatchTab_1.dispatchTab(tab.id, {
            type: 'TAB_OPEN_AUTH'
        });
    }
    else {
        window.open(chrome.runtime.getURL('auth.html'), '_blank');
    }
    return true;
};
const openSupportHandler = async () => {
    var _a, _b;
    const tab = await utils_1.getCurrentTab();
    if (((_a = tab.url) === null || _a === void 0 ? void 0 : _a.includes(chrome.runtime.id)) && ((_b = tab.url) === null || _b === void 0 ? void 0 : _b.includes('auth.html#support'))) {
        await dispatchTab_1.dispatchTab(tab.id, {
            type: 'TAB_OPEN_AUTH'
        });
    }
    else {
        window.open(chrome.runtime.getURL('auth.html#support'), '_blank');
    }
    return true;
};
const fluxActionHandler = () => chrome.runtime.onMessage.addListener(async (action, sender, sendResponse) => {
    var _a, _b, _c, _d, _e, _f;
    const backgroundFetchTextHandler = () => {
        // @ts-ignore
        fetch(...action.payload)
            .then((response) => {
            response
                .text()
                .then((responseText) => sendResponse(responseText))
                .catch(sendResponse);
        })
            .catch(sendResponse);
    };
    const backgroundFetchJsonHandler = () => {
        // @ts-ignore
        fetch(...action.payload)
            .then((response) => {
            response
                .json()
                .then((responseJson) => {
                sendResponse(responseJson);
            })
                .catch(sendResponse);
        })
            .catch(sendResponse);
    };
    if (action.type === parse_1.PARSE) {
        popupTabListner_1.parse({ href: action.payload.href, tabId: (_b = (_a = sender.tab) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : 0 }).then(sendResponse);
    }
    const getLocalStorageHandler = () => {
        sendResponse(window.localStorage);
    };
    const getCookiesHandler = () => {
        chrome.cookies.getAll(action.payload, (cookies) => sendResponse(cookies));
    };
    const setCookiesHandler = () => {
        chrome.cookies.set(action.payload, (cookies) => sendResponse(cookies));
    };
    const removeCookiesHandler = () => {
        chrome.cookies.remove(action.payload, (cookies) => sendResponse(cookies));
    };
    // ////
    // ////
    // ////
    if (action.type === background_1.FETCH_TEXT) {
        backgroundFetchTextHandler();
        return true;
    }
    if (action.type === background_1.FETCH_JSON) {
        backgroundFetchJsonHandler();
        return true;
    }
    if (action.type === background_1.GET_LOCAL_STORAGE) {
        getLocalStorageHandler();
        return true;
    }
    if (action.type === background_1.GET_COOKIES) {
        getCookiesHandler();
        return true;
    }
    if (action.type === background_1.SET_COOKIES) {
        setCookiesHandler();
        return true;
    }
    if (action.type === background_1.REMOVE_COOKIES) {
        removeCookiesHandler();
        return true;
    }
    if (action.type === background_1.OPEN_AUTH) {
        openAuthHandler();
        return true;
    }
    if (action.type === background_1.OPEN_SUPPORT) {
        openSupportHandler();
        return true;
    }
    if (action.type === background_1.START_LOADER) {
        tabsUpdater_1.startLoader((_c = sender.tab) === null || _c === void 0 ? void 0 : _c.id);
    }
    if (action.type === background_1.STOP_LOADER) {
        tabsUpdater_1.stopLoader((_d = sender.tab) === null || _d === void 0 ? void 0 : _d.id, true);
    }
    if (action.type === 'REDIRECT_MARK') {
        redirectMark_1.RedirectMark.add(action.payload);
    }
    if (action.type === 'REDIRECT_MARK_SIMILAR') {
        redirectMark_1.RedirectMark.addSimilarID(action.payload);
    }
    if (action.type === background_1.CLOSE_TAB) {
        sendResponse(tabs_1.closeTab(((_e = action === null || action === void 0 ? void 0 : action.payload) === null || _e === void 0 ? void 0 : _e.id) || ((_f = sender.tab) === null || _f === void 0 ? void 0 : _f.id)));
    }
    if (action.type === background_1.CREATE_TAB) {
        tabs_1.createTab(action.payload.url).then(sendResponse);
        return true;
    }
    if (action.type === 'CHECK_FEATURE_ID' && action.payload && action.payload.id) {
        sendResponse(redirectMark_1.RedirectMark._checkIDInTables(action.payload.id));
        return true;
    }
    if (action.type === 'SAFE_EVAL' && action.payload) {
        const iframe = document.createElement('iframe');
        iframe.src = '/sandbox.html';
        document.body.appendChild(iframe);
        const message = {
            command: 'eval',
            data: action.payload
        };
        iframe.onload = () => {
            var _a;
            (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(message, '*');
            window.addEventListener('message', (event) => {
                try {
                    sendResponse(event.data);
                    document.body.removeChild(iframe);
                    // @ts-ignore
                    window.removeEventListener('message');
                }
                catch (e) { }
            }, false);
        };
        return true;
    }
    return true;
});
exports.fluxActionHandler = fluxActionHandler;


/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.closeTab = exports.createTab = void 0;
const utils_1 = __webpack_require__(11);
let tabs = 0;
const createTab = async (url) => {
    while (tabs > 5) {
        await utils_1.delay(100);
    }
    tabs++;
    return new Promise((resolve) => chrome.tabs.create({
        url,
        pinned: false,
        active: false
    }, (w) => {
        resolve(w === null || w === void 0 ? void 0 : w.id);
    }));
};
exports.createTab = createTab;
const closeTab = (id) => {
    id &&
        chrome.tabs.remove(id, () => {
            tabs--;
        });
};
exports.closeTab = closeTab;


/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bgParseData = exports.PARSE = void 0;
const dispatchBG_1 = __webpack_require__(39);
exports.PARSE = 'PARSE';
const bgParseData = async (href) => {
    return await dispatchBG_1.dispatchBG({
        type: exports.PARSE,
        payload: { href }
    });
};
exports.bgParseData = bgParseData;


/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryParser = void 0;
const utils_1 = __webpack_require__(11);
const aliexpress_1 = __webpack_require__(71);
const tooltipHelper_1 = __webpack_require__(354);
// https://www.aliexpress.com/af/category/200194004.html?CatId=200194004&isViewCP=y&switch_new_app=y&SortType=create_desc&page=1
const getLink = async () => (await fetch('http://api.aliradar.com/v2/update/categories')).text();
const priceParser = (price, index = 0) => {
    price = price.split('-')[index] || price.split('-')[0] || price;
    price = price
        .match(/(\d[\d\s,.]+)/)[1]
        .replace(/\s/g, '')
        .replace(/,/g, '.')
        .toString()
        .split('.');
    const last = price[price.length - 1];
    if (last && last.length > 0 && last.length < 3) {
        price.pop();
    }
    return price.join('');
};
const getAliData = async (link) => {
    var _a;
    const data = await (await fetch(link, { credentials: 'include' })).text();
    return JSON.parse(`{"${(_a = data.match(/window.runParams = {"(.*)};/)) === null || _a === void 0 ? void 0 : _a[1]}}`);
};
const getRadarItem = async ({ productId }) => await (await fetch(`http://api.aliradar.com/v2/items/ali/${productId}`)).json();
const updateRadarItem = async ({ productId }) => await (await fetch(`http://api.aliradar.com/v2/items/ali/${productId}/prices`, {
    method: 'POST'
})).text();
const checkItems = async ({ items, p4pObjectConfig }, rates) => {
    var _a, _b;
    const curr = (_a = p4pObjectConfig === null || p4pObjectConfig === void 0 ? void 0 : p4pObjectConfig.bcfg) === null || _a === void 0 ? void 0 : _a.currencyType;
    for (const item of items) {
        item.price = ~~priceParser(item.price);
        const radarItem = await getRadarItem(item);
        let lastPrice = (_b = radarItem === null || radarItem === void 0 ? void 0 : radarItem.prices) === null || _b === void 0 ? void 0 : _b[0];
        if (lastPrice) {
            [lastPrice] = tooltipHelper_1.exchange([lastPrice], aliexpress_1.EXCHANGE_PRICE_PATTERN, rates, curr);
            const rC = ~~((Math.log10(item.price) - 1) * 15) || 2;
            if (~~(lastPrice.max / rC) !== ~~(item.price / rC) || ~~(lastPrice.min / rC) !== ~~(item.price / rC)) {
                updateRadarItem(item);
            }
        }
        await utils_1.delay(1000);
    }
};
let timeout = 0;
const categoryParser = async () => {
    clearTimeout(timeout);
    try {
        const authCookie = await utils_1.Cookies.get({
            url: 'https://aliexpress.com',
            name: 'xman_us_t'
        });
        if (authCookie && authCookie.value) {
            const link = await getLink();
            const rates = await aliexpress_1.getRates();
            const aliData = await getAliData(link);
            await checkItems(aliData, rates);
        }
    }
    catch (e) {
        console.error('Category', e);
    }
    timeout = setTimeout(exports.categoryParser, 60 * 60 * 1000);
};
exports.categoryParser = categoryParser;


/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsInit = void 0;
const utils_1 = __webpack_require__(11);
const aliradar_1 = __webpack_require__(34);
const stores_1 = __webpack_require__(10);
let t;
const settingsInit = async () => {
    clearTimeout(t);
    let _settings = await utils_1.ChromeStorage.getSettings();
    const config = await aliradar_1.FeaturesConfig.get();
    if (!_settings) {
        _settings = stores_1.initialSettingsState;
    }
    const settings = { ..._settings };
    for (const [key, val] of Object.entries(_settings)) {
        if (typeof settings[key] !== 'object') {
            delete settings[key];
            continue;
        }
        if (config[key]) {
            if (typeof val === 'object' && !val.disabled) {
                settings[key].disabled = false;
                settings[key].value = true;
            }
        }
        else if (typeof val === 'object' && val.disabled) {
            settings[key].disabled = true;
            settings[key].value = false;
        }
    }
    await utils_1.ChromeStorage.setSettings(settings);
    t = window.setTimeout(exports.settingsInit, 3600000);
};
exports.settingsInit = settingsInit;


/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.checkInstallDateForInstruction = void 0;
const ramda_1 = __webpack_require__(23);
const utils_1 = __webpack_require__(11);
const stores_1 = __webpack_require__(10);
const checkInstallDateForInstruction = () => {
    setTimeout(() => {
        try {
            const extensionID = chrome.runtime.id;
            const installationDetails = JSON.parse(localStorage.getItem(extensionID) || '');
            const installationDate = installationDetails.installed;
            if (new Date('10/3/2019').getTime() > installationDate) {
                utils_1.ChromeStorage.setSettings(ramda_1.mergeRight(stores_1.initialSettingsState, {
                    popupInstuction: { type: 'switch', value: false }
                }));
            }
        }
        catch (e) {
            console.error(e, 'checkInstallDateForInstruction: failed to check install date');
        }
    }, 2000);
};
exports.checkInstallDateForInstruction = checkInstallDateForInstruction;


/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheCleanerInit = void 0;
const similar_1 = __webpack_require__(328);
const delivery_1 = __webpack_require__(157);
const aliradar_1 = __webpack_require__(34);
const cacheCleanerInit = () => {
    try {
        delivery_1.DeliveryApi.startCleaner();
        similar_1.SimilarApi.startCleaner();
        aliradar_1.RatesConfig.startCleaner();
        aliradar_1.MultiSimilarConfig.startCleaner();
        aliradar_1.SitesConfig.startCleaner();
        aliradar_1.TooltipConfig.startCleaner();
        aliradar_1.FeaturesConfig.startCleaner();
        aliradar_1.FeaturesLinksConfig.startCleaner();
    }
    catch (e) {
        if (true) {
            console.error('failed to start cache cleaner', e);
        }
    }
};
exports.cacheCleanerInit = cacheCleanerInit;


/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.onSkipBoarding = void 0;
const boarding_new_1 = __webpack_require__(81);
const onSkipBoarding = () => chrome.runtime.onMessage.addListener((msg, sender) => {
    if (msg.url === 'boarding') {
        chrome.tabs.onRemoved.addListener((tabId) => {
            var _a;
            if (tabId === ((_a = sender.tab) === null || _a === void 0 ? void 0 : _a.id)) {
                boarding_new_1.boardingSkipMetric();
            }
        });
    }
    return true;
});
exports.onSkipBoarding = onSkipBoarding;


/***/ })

/******/ });