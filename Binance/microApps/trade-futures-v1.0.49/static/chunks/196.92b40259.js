(self["webpackJsonp_trade-futures"]=self["webpackJsonp_trade-futures"]||[]).push([[196],{LvN6:(e,t,a)=>{"use strict";a.d(t,{Bs:()=>r,li:()=>s,n:()=>o,Wm:()=>m,t9:()=>T});var i=a("AHTf"),n=a("QlFx");const r="1d",s=1,o=200,l=(0,i.nM)(),m=l?["ALL","TRANSFER","COIN_SWAP","REALIZED_PNL","FUNDING_FEE","COMMISSION","INSURANCE_CLEAR","REFERRAL_KICKBACK","COMMISSION_REBATE","CROSS_COLLATERAL_TRANSFER","OPTIONS_PREMIUM_FEE","OPTIONS_SETTLE_PROFIT","BATTLE_COMMISSION","BATTLE_REALIZED_PNL"]:["ALL","TRANSFER","REALIZED_PNL","FUNDING_FEE","COMMISSION","AUTO_EXCHANGE","INSURANCE_CLEAR","REFERRAL_KICKBACK","COMMISSION_REBATE","CROSS_COLLATERAL_TRANSFER","OPTIONS_PREMIUM_FEE","OPTIONS_SETTLE_PROFIT","POSITION_LIMIT_INCREASE_FEE"],T=l?n.lE:(e,t)=>e},m4or:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x});var i=a("5vwO"),n=a("Wx6g"),r=a("6Afj"),s=a("x+gY"),o=a("7Pma"),l=a("OhB/"),m=a("Kwub"),T=a("wZts"),d=a("e5RN"),c=a("D57K"),E=a("/SIk"),u=a.n(E),p=a("eXOl"),I=a("LvN6");function A(e,t){const a=new Date,i=a.setHours(24,0,0,0),n=`get${e}`;return{startTime:a[`set${e}`](a[n]()-t),endTime:i}}const S={"1d":{label:"1 Day",getTimes:()=>A("Date",1)},"1w":{label:"1 Week",getTimes:()=>A("Date",7)},"1m":{label:"1 Month",getTimes:()=>A("Month",1)},"3m":{label:"3 Months",getTimes:()=>A("Month",3)}};var O=u().createElement;const R=(0,r.ck)("mobile",(()=>Promise.all([a.e(374),a.e(712),a.e(162)]).then(a.bind(a,"qYua")))),_=(0,r.ck)("pc",(()=>Promise.all([a.e(374),a.e(712),a.e(773)]).then(a.bind(a,"CQpL")))),N=["TRANSFER","WITHDRAW","DEPOSIT"],f=["COIN_SWAP_WITHDRAW","COIN_SWAP_DEPOSIT"],P="Init",y="UpdateFilter",L="UpdateBalanceType",M="FetchSuccess",g={nextPage:I.li,hasMore:!0,balanceType:"ALL",filters:{timePeriod:I.Bs,startTime:0,endTime:0},items:[],symbolMap:{}},b=(0,s.j)({[P](e){const{symbolMap:t,items:a}=e;return(0,i.Z)((0,i.Z)({},g),{},{items:a,symbolMap:t})},[L](e,t){const{type:a}=t.payload;e.balanceType=a},[y](e,t){const{startTime:a,endTime:i,timePeriod:n}=t.payload;void 0!==n&&(e.filters.timePeriod=n),void 0!==a&&(e.filters.startTime=a),void 0!==i&&(e.filters.endTime=i)},[M](e,t){const{data:a,page:i}=t.payload;i===I.li?e.items=a:a.length&&(e.items=e.items.concat(a)),e.hasMore=a.length>0,e.nextPage=i+1}},g),h=(0,o.Z)(y),C=(0,o.Z)(L),v=(0,o.Z)(M),w=(0,o.Z)(P);function F(e){let t=function(e){const t=S[e];return t?t.getTimes():null}(e.timePeriod);return t||(t={startTime:e.startTime,endTime:e.endTime}),t}const Z=()=>()=>Promise.resolve(),D=({active:e=!1})=>{const t=(0,p.AM)(),[a,r]=(0,E.useReducer)(b,(0,i.Z)((0,i.Z)({},g),{},{symbolMap:t})),{nextPage:s,filters:o,hasMore:u}=a,{items:A=[],balanceType:S}=a;let P=(0,l.I9)(A);"TRANSFER"===S?P=A.filter((e=>-1!==N.indexOf(null===e||void 0===e?void 0:e.balancetype))):"COIN_SWAP"===S?P=A.filter((e=>-1!==f.indexOf(null===e||void 0===e?void 0:e.balancetype))):S&&"ALL"!==S&&(P=A.filter((e=>(null===e||void 0===e?void 0:e.balancetype)===S)));const y="ALL"===S||P.some((e=>null===e||void 0===e?void 0:e.symbol)),{startTime:L,endTime:M}=F(o),{0:D,1:x}=(0,E.useState)(Z),[{loading:W},k]=(0,m.Z)((async({page:e=I.li,times:t}={})=>{const{startTime:a,endTime:i}=t||{startTime:L,endTime:M};if(x(Z),null===a||null===i)return;const{data:n}=await(async({startTime:e,endTime:t,rows:a,page:i}={})=>{let n;try{n=await(0,T.v_)("/bapi/futures/v1/private/future/user-data/transaction-history",{startTime:e,endTime:t-1,page:i,rows:a})}catch(r){throw new Error("nework error")}if("000000"!==n.code)throw new Error(n.message||"unknown error");return{data:n.data||[],total:n.total}})({startTime:a,endTime:i,page:e,rows:I.n});r(v({data:n,page:e}))}),[L,M],{loading:!0});(0,E.useEffect)(function(e,t){var a;return function(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];var r=+new Date;(!a||r-a>t)&&(e.call.apply(e,(0,c.__spreadArray)([null],i)),a=r)}}((()=>{x((()=>()=>k({page:s})))}),100),[k,s]);const B=(0,E.useCallback)((({type:e,startTime:t,endTime:a})=>{r(h({timePeriod:e,startTime:t,endTime:a})),k({page:I.li,times:{startTime:t,endTime:a}})}),[k]),U=e=>r(C({type:e})),K=()=>{r(w()),B((0,l.OQ)("1d"))},H=!W&&A.length<=0;return(0,E.useEffect)((()=>{e&&B((0,l.OQ)("1d"))}),[e]),O(d.Z,{sx:{flexDirection:"column",height:"100%",pb:"xs"}},O(n.Z,null,(({isMobile:e,isIPad:t})=>t?O(R,{isMobile:e,hasMore:u,loadMore:D,showSymbolColumn:y,isEmpty:H,data:P,loading:W,filterType:o.timePeriod,balanceType:S,onFilterChange:U,onReset:K,onSearch:B}):O(_,{filterType:o.timePeriod,onSearch:B,balanceType:S,onFilterChange:U,onReset:K,hasMore:u,loadMore:D,showSymbolColumn:y,isEmpty:H,data:P,loading:W,currentPage:s-1}))))},x=u().memo(D)},"x+gY":(e,t,a)=>{"use strict";a.d(t,{j:()=>s});var i=a("5vwO"),n=a("d019"),r=a("rfrl");const s=(e,t)=>(0,n.Z)(Object.keys(e).reduce(((t,a)=>(0,i.Z)((0,i.Z)({},t),{},{[a]:(t,i)=>(0,r.ZP)(t,(t=>e[a](t,i)))})),{}),t)}}]);