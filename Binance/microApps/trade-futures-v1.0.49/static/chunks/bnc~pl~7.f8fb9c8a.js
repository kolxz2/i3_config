(self["webpackJsonp_trade-futures"]=self["webpackJsonp_trade-futures"]||[]).push([[34],{dcev:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var i=t("D57K"),c=t("/SIk"),s=t.n(c),n=t("RdyI");const o=function(e){return s().createElement(n.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),s().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.06 1.579l1.811-.008 2.736 5.765 6.046.937.563 1.686-4.415 4.526 1.015 6.357-1.473 1.032-5.375-2.987-5.375 2.987-1.472-1.04 1.074-6.353-4.41-4.522.562-1.686 6.04-.936 2.674-5.758z",fill:"currentColor"}))}},"/mDK":(e,r,t)=>{"use strict";t.d(r,{r:()=>o,A:()=>a});var i=t("5vwO"),c=t("GpFh"),s=t("/SIk");const n=({lowPrice:e,lastPrice:r,highPrice:t,openPrice:i})=>{const c=+r-+i;return{lowPrice:e,lastPrice:r,highPrice:t,openPrice:i,difference:[c>=0?"+":"",(Number(i)?c/+i*100:0).toFixed(2)].join(""),bigThan:(s=r,n=i,+s>=+n)};var s,n};function o(e){const{baseTicker:r,marketTabs:t}=(0,s.useMemo)((()=>({baseTicker:Object.keys(e).reduce(((r,t)=>{const s=e[t]||{},{low:o,close:a,high:l,open:u,parentMarket:P,quoteAsset:h,etf:d}=s,p=(0,c.Z)(s,["low","close","high","open","parentMarket","quoteAsset","etf"]),b=d?"ETF":"USD\u24c8"===P?"FIAT":P,f=n({lowPrice:o,lastPrice:a,highPrice:l,openPrice:u});return r[t]=Object.assign(p,(0,i.Z)({parentMarket:b,quoteAsset:h},f)),r}),{}),marketTabs:void 0})),[e]);return{baseTicker:r,marketTabs:t}}function a(e,r){return Object.keys(r).reduce(((e,t)=>{const c=e[t];if(c){const{lowPrice:s,lastPrice:o,highPrice:a,openPrice:l}=r[t],u=Number(o)-Number(c.lastPrice),P=c.lastPrice?0===u?c.lastFlag:u:void 0;e[t]=(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},c),r[t]),n({lowPrice:s,lastPrice:o,highPrice:a,openPrice:l})),{},{lastFlag:P})}return e}),e)}}}]);