(self["webpackJsonp_trade-futures"]=self["webpackJsonp_trade-futures"]||[]).push([[416],{fcuc:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r("D57K"),i=r("/SIk"),a=r.n(i),l=r("RdyI");const s=function(e){return a().createElement(l.Z,(0,o.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.997 9.004h-2.009v6h2.009v-6zm-2.009-4h2.009v2.009h-2.009v-2.01z",fill:"currentColor"}))}},Du7o:(e,t,r)=>{"use strict";r.d(t,{y:()=>s});var o=r("D57K"),i=r("/SIk"),a=r.n(i),l=r("XhNN"),s=(0,i.forwardRef)((function(e,t){var r=e.children,i=(0,o.__rest)(e,["children"]);return a().createElement(l.Z,(0,o.__assign)({},i,{ref:t,__css:{position:["fixed","static"],zIndex:[1,"auto"],left:["0px","unset"],bottom:["0px","unset"],pt:"md",pb:["md","0px"],px:["md","0px"],width:["100%","unset"],boxShadow:["0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08)","none"],bg:"popupBg"}}),r)}))},rZ8U:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var o=r("/SIk");const i=(0,o.createContext)({symbol:"",changeSymbol:e=>{console.info(e)},useColumn:e=>({}),actionModifyOrder:e=>Promise.resolve(),actionCancel:(e,t)=>Promise.resolve(),actionModifyConfirmModal:(e,t,r)=>!1,actionStrategyModal:e=>!1,useStrategyOrder:(...e)=>({}),checked:!0,handleHideOtherPairs:e=>!0,emptyText:"You have no open orders.",headers:[]})},Xvf3:(e,t,r)=>{"use strict";r.d(t,{f8:()=>c,HU:()=>u,ZP:()=>m});var o=r("/SIk"),i=r.n(o),a=r("NJWl"),l=r("e5RN"),s=r("rZ8U"),n=r("+Nt9"),d=i().createElement;const c={bg:"modalBg",p:0,py:"4px",mt:"8px"},u={alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"12px",lineHeight:"16px",p:"minor",whiteSpace:"nowrap",height:"24px",minWidth:"96px",color:"t.primary",":hover":{bg:"line"}},p=()=>{const{getI18n:e}=(0,n.Z)(),{actionCancel:t}=(0,o.useContext)(s.Z);return d(a.Z,{sx:c},[{text:e("actionAll",{defaultValue:"All"}),message:e("actionAllMsg",{defaultValue:"Are you sure you want to cancel all?"})},{text:e("actionLimit",{defaultValue:"Limit"}),message:e("actionLimitMsg",{defaultValue:"Are you sure to cancel all Limit orders?"})},{text:e("actionStopLimit",{defaultValue:"Stop-Limit"}),message:e("actionStopLimitMsg",{defaultValue:"Are you sure to cancel all Stop-Limit orders?"})}].map(((e,r)=>d(l.Z,{key:r,sx:u,onClick:()=>{t(r,e.message)}},e.text))))},m=i().memo(p)},SKkT:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var o=r("5vwO"),i=r("/SIk"),a=r.n(i),l=r("xpv6"),s=r("FOuV"),n=r("Gbz3"),d=r("B+lg"),c=a().createElement;const u=({order:e,onClose:t})=>{const{symbol:r,side:a,positionSide:u,modifyParams:p={},onConfirm:m}=e,{positionMode:y=!1}=(0,n.F7)(),{getI18n:g}=(0,n.yk)(),[h,f]=(0,l.g)(s.Zv,s.Xd),{limitPrice:x,qty:b,amendedField:O}=p,k="BUY"===a?"buy":"sell",Z=(({side:e,positionSide:t,getFutI18n:r,positionMode:o})=>{const i=r("buyLong",{defaultValue:"Buy/Long"}),a=r("sellShort",{defaultValue:"Sell/Short"}),l=r("OpenLong",{defaultValue:"Open Long"}),s=r("OpenShort",{defaultValue:"Open Short"}),n=r("CloseShort",{defaultValue:"Close Short"}),d=r("CloseLong",{defaultValue:"Close Long"});let c;return c=o?"BUY"===e?"SHORT"===t?n:l:"SHORT"===t?s:d:"BUY"===e?i:a,c})({side:a,positionSide:u,getFutI18n:g,positionMode:y}),v=(0,i.useCallback)((()=>{const e=(0,o.Z)((0,o.Z)({},h),{},{needConfirm:!1});f(e)}),[f,h]);return c(d.Z,{symbol:r,title:Z,color:k,amendedField:O,isMarket:!1,limitPrice:x,qty:b,isClose:!1,onClose:t,onConfirm:m,closeTip:v})},p=a().memo(u)},"+Nt9":(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var o=r("U0yl");const i=e=>(0,o.Z)("trd-openOrder",e)},DHzs:(e,t,r)=>{"use strict";r.d(t,{Q:()=>a});var o=r("/SIk"),i=r("Vg22");const a=()=>{const e=(0,i.useSelector)((e=>e.loading.effects.orders.queryOpenOrder)),t=(0,i.useSelector)((e=>e.orders.openOrder.apiError)),r=(0,i.useDispatch)(),a=(0,o.useCallback)((()=>{e||r.orders.queryOpenOrder()}),[e,r.orders]);return(0,o.useMemo)((()=>({loading:e,apiError:t,onRefresh:a})),[e,t,a])}},"7cvD":(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Te});var o=r("5vwO"),i=r("/SIk"),a=r.n(i),l=r("Vg22"),s=r("TeQN"),n=r("XhNN"),d=r("e5RN"),c=r("X46w"),u=r("MwrP"),p=r.n(u),m=r("qNjr"),y=r("MvZp"),g=r("pVAJ"),h=r("lv1b"),f=r("6Afj"),x=r("Gbz3"),b=r("AHTf"),O=r("Qa1J"),k=r("Scox"),Z=r("4xt1"),v=r("tsUn"),C=r("XXmh"),P=r("EPGa"),S=r("FOuV"),T=r("H3aL"),V=r("GG68"),w=r("869M"),I=r("+Nt9"),M=r("Tfqf");const L=(0,b.nM)(),N=e=>L?(({symbol:e,insertTime:t,side:r,origType:o,type:i,price:a,origQty:l,executedQty:s,stopPrice:n,workingType:d,activatePrice:c,avgPrice:u,priceRate:p})=>{var m;const{getI18n:y}=(0,I.Z)(),{isCoinUnit:h}=(0,M.Q)(),{getI18n:f}=(0,w.yk)(),x=(0,g.iB)()[e]||{},{equalQtyPrecision:V,pricePrecision:L,quantityPrecision:N,marginAsset:R,contractVal:A=100}=x,{tickers:F={}}=(0,O.s)((0,b.l6)(!0))||{},{lastPrice:E}=F[e]||{},{getFormatSize:B}=(0,g.dd)(),{ts:_}=B(e),$=(0,k.i)({side:r,type:o}),H=Number(n)||Number(a),z=(0,Z.uf)(H,_);let q=$&&H&&z?`${y(null===(m=S.HZ[d])||void 0===m?void 0:m.replace(/\s/g,"-"),{defaultValue:S.HZ[d]})} \r\n${[$,z].join(" ")}`:b.GR;Number(c)&&(q=`${f("activationPrice",{defaultValue:"Activation Price"})} \r\n${["BUY"===r?"<=":">=",+c].join(" ")}`);const D=S.Y1.includes(i)?b.GR:(0,Z.uf)(a,L),K=f("Cont",{defaultValue:"Cont"}),Q=S.cQ.includes(i)?n:i===P.Jm.TRAILING_STOP_MARKET?c||E:a;let U,Y=e;return x&&(U=(0,v.H)(x,f),Y=U.shortName),{nextDate:(0,C.v)(new Date(t),"yyyy-MM-dd hh:mm:ss"),nextPair:Y,symbolName:U,nextType:y(`type-${i}`,{defaultValue:i})||i,nextPrice:D,nextAmount:h?`${(0,T.unitChangeCoinQty)({quantity:l,contractVal:A,price:Q,precision:V})} ${R}`:`${(0,Z.uf)(l,N)} ${K}`,nextFilled:h?`${(0,T.unitChangeCoinQty)({quantity:s,contractVal:A,price:u,precision:V})} ${R}`:`${(0,Z.uf)(s,N)} ${K}`,nextTriggerConditions:q}})(e):(({symbol:e,insertTime:t,side:r,origType:o,type:i,price:a,origQty:l,executedQty:s,stopPrice:n,workingType:d,activatePrice:c,avgPrice:u,priceRate:p})=>{var m;const{getI18n:y}=(0,I.Z)(),{getI18n:h}=(0,w.yk)(),f=(0,g.iB)()[e]||{},{getFormatedQuantity:x}=(0,V.s7)(f),{pricePrecision:T,quantityPrecision:M}=f,{tickers:L={}}=(0,O.s)((0,b.l6)(!0))||{},{lastPrice:N}=L[e]||{},{getFormatSize:R}=(0,g.dd)(),{ts:A}=R(e),F=(0,k.i)({side:r,type:o}),E=Number(n)||Number(a),B=(0,Z.uf)(E,A);let _=F&&E&&B?`${y(null===(m=S.HZ[d])||void 0===m?void 0:m.replace(/\s/g,"-"),{defaultValue:S.HZ[d]})} \r\n${[F,B].join(" ")}`:b.GR;Number(c)&&(_=`${h("activationPrice",{defaultValue:"Activation Price"})} \r\n${["BUY"===r?"<=":">=",+c].join(" ")}`);const $=S.Y1.includes(i)?b.GR:(0,Z.uf)(a,T),H=S.cQ.includes(o)?n:i===P.Jm.TRAILING_STOP_MARKET?c||N:a;let z,q=e;return f&&(z=(0,v.H)(f,h),q=z.shortName),{nextDate:(0,C.v)(new Date(t),"yyyy-MM-dd hh:mm:ss"),nextPair:q,symbolName:z,nextType:y(`type-${i}`,{defaultValue:i})||i,nextPrice:$,nextAmount:x({quantity:l,price:H,qtyPrecision:M}),nextFilled:x({quantity:s,price:u,qtyPrecision:M}),nextTriggerConditions:_}})(e);var R=r("Uqe+"),A=r("Xvf3"),F=a().createElement;var E=r("Kwub"),B=r("R89y");const _=()=>{const[{loading:e},t]=(0,E.Z)((async(e={})=>(e=>"batch"in e?(0,B.O9)({type:e.type,symbol:e.symbol}):(0,B.Ce)(e))(e)),[]);return{loading:e,delOpenOrders:t}},$=()=>{const[{loading:e},t]=(0,E.Z)((async(e={})=>(e=>"batch"in e?(0,B.y)({type:e.type,symbol:e.symbol}):(0,B.r7)(e))(e)),[]);return{loading:e,delOpenOrders:t}},H=(0,b.nM)();const z=(0,b.nM)(),q=e=>z?function({symbol:e,side:t,quantity:r,type:o,price:i,stopPrice:a,avgPrice:l,closePosition:s}){const{getI18n:n}=(0,I.Z)(),{getI18n:d}=(0,w.yk)(),{isCoinUnit:c}=(0,M.Q)(),u=(0,g.iB)()[e]||{},{equalQtyPrecision:p,marginAsset:m,contractVal:y=100,quantityPrecision:h,close:f}=u,x=d("Cont",{defaultValue:"Cont"}),b=n("closePosition",{defaultValue:"Close Positioin"}),O=S.cQ.includes(o)?a:o===P.Jm.MARKET?l||f:i,k=c?`${(0,T.unitChangeCoinQty)({quantity:r,contractVal:y,price:O,precision:p})} ${m}`:`${(0,Z.uf)(r,h)} ${x}`;return{amount:s?b:k,sideProps:"BUY"===t?{color:"buy",children:n("sideBuy",{defaultValue:"Buy"})}:{color:"sell",children:n("sideSell",{defaultValue:"Sell"})}}}(e):function({symbol:e,side:t,quantity:r,type:o,price:i,stopPrice:a,avgPrice:l,closePosition:s}){const{getI18n:n}=(0,I.Z)(),d=(0,g.iB)()[e]||{},{getFormatedQuantity:c}=(0,V.s7)(d),{quantityPrecision:u,close:p}=d,m=n("closePosition",{defaultValue:"Close Positioin"}),y=c({quantity:r,price:S.cQ.includes(o)?a:o===P.Jm.MARKET?l||p:i,qtyPrecision:u});return{amount:s?m:y,sideProps:"BUY"===t?{color:"buy",children:n("sideBuy",{defaultValue:"Buy"})}:{color:"sell",children:n("sideSell",{defaultValue:"Sell"})}}}(e);r("DHzs");var D=r("Wx6g"),K=r("8RC1"),Q=r("rZ8U"),U=r("OV9X"),Y=r("Rhv4"),G=r("Du7o"),J=r("Fidm"),j=r("fcuc"),W=r("zZ5f"),X=r("jQmP"),ee=a().createElement;const te=({mainOrder:e,subOrders:t})=>{const{isLight:r}=(0,g.Fg)(),o=2===(null===t||void 0===t?void 0:t.length);return ee(a().Fragment,null,e,ee("svg",{width:"100%",height:"100%",viewBox:"0 0 504 54",fill:"none",style:{margin:"0 auto -5px"},xmlns:"http://www.w3.org/2000/svg"},o?ee(a().Fragment,null,ee("path",{d:"M252 0 L252 27 L122 27 L122 54",style:{stroke:r?"#F5F5F5":"#474D57",strokeWidth:"3px"}}),ee("path",{d:"M252 27 L382 27 L382 54",style:{stroke:r?"#F5F5F5":"#474D57",strokeWidth:"3px"}})):ee("path",{d:"M252 0 L252 54",style:{stroke:r?"#F5F5F5":"#474D57",strokeWidth:"3px"}})),ee(d.Z,{justifyContent:o?"space-between":"center"},t))},re=({mainOrder:e,subOrders:t})=>{const r=2===t.length?380:190,{isLight:o}=(0,g.Fg)();return ee(a().Fragment,null,e,ee(d.Z,{justifyContent:"start"},ee("svg",{width:"30",height:"100%",fill:"none",viewBox:`0 0 30 ${r}`,xmlns:"http://www.w3.org/2000/svg"},2===(null===t||void 0===t?void 0:t.length)?ee(a().Fragment,null,ee("path",{d:`M15 0 L15 ${r/4} L30 ${r/4}`,style:{stroke:o?"#F5F5F5":"#474D57",strokeWidth:"4px"}}),ee("path",{d:`M15 ${r/4} L15 ${3*r/4} L30 ${3*r/4}`,style:{stroke:o?"#F5F5F5":"#474D57",strokeWidth:"4px"}})):ee("path",{d:`M15 0 L15 ${r/2} L30 ${r/2}`,style:{stroke:o?"#F5F5F5":"#474D57",strokeWidth:"4px"}})),ee(n.Z,{sx:{width:"calc(100% - 30px)"}},t)))},oe=e=>ee(D.Z,null,(({isMobile:t})=>ee(t?re:te,e)));var ie=r("O94r"),ae=r.n(ie),le=r("Bb2c"),se=r("kjyE"),ne=r("7Q68"),de=a().createElement;const{LAST_PRICE:ce,MARK_PRICE:ue}=S.gu,pe=e=>{var t;return null===e||void 0===e||null===(t=e.toLowerCase())||void 0===t?void 0:t.replace(/_/g,"-")},me=[P.Jm.LIMIT,P.Jm.STOP_LIMIT,P.Jm.TAKE_PROFIT_LIMIT],ye={mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",".description":{color:"t.primary",mb:"10px",display:"inline-block"},".card":{width:["100%","284px"],borderRadius:"2px",border:"1px solid",borderColor:"lines.border",fontSize:"14px",lineHeight:"16px","&.orderA":{".orderType":{mt:"0px",mb:"0px",".type":{color:"t.third"}}},"&.orderB":{mr:"auto",ml:"0px","&.only":{ml:"auto"}},"&.orderC":{mr:"0px",ml:"auto"}},".title":{px:"16px",py:"8px",backgroundColor:"dialog.panelBg",color:"primary"},".content":{px:"16px",paddingTop:"8px",paddingBottom:"16px"},".row":{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",marginTop:"xs","&.editable":{marginTop:"4px"}},".orderType":{mt:"sm",mb:"sm",lineHeight:"19px",".type":{color:"t.primary"},".status":{color:"t.third"}}},ge=({order:e={},subOrderLength:t})=>{const{getI18n:r}=(0,I.Z)(),{getI18n:o}=(0,x.yk)(),{type:a,status:l,price:s,reduceOnly:d}=e,{useStrategyOrder:c}=(0,i.useContext)(Q.Z),{amount:u,sideProps:p}=c(e);return de(n.Z,{sx:ye},de("div",{className:"description"},1===t?r("orderA-OTO-description",{defaultValue:"If order A executes, orders B will be placed."}):r("orderA-OTOCO-description",{defaultValue:"If order A executes, orders B and C will be placed."})),de("div",{className:"card orderA"},de("div",{className:"title"},r("orderA",{defaultValue:"Order A"})),de("div",{className:"content"},de("div",{className:"row orderType"},de(U.Z,{color:"t.third",className:"type"},r(`type-${a}`,{defaultValue:a})),de(U.Z,{fontSize:0,color:"t.third",className:"status"},r(`status-${pe(l)}`,{defaultValue:l}))),de("div",{className:"row"},de(U.Z,{color:"t.third"},r("side",{defaultValue:"Side"})),de(U.Z,p)),de("div",{className:"row"},de(U.Z,{color:"t.third"},r("amount",{defaultValue:"Amount"})),de(U.Z,{color:"t.primary"},u)),me.includes(a)&&de("div",{className:"row"},de(U.Z,{color:"t.third"},r("price",{defaultValue:"Price"})),de(U.Z,{color:"t.primary"},s)),de("div",{className:"row"},de(U.Z,{color:"t.third"},r("reduceOnly",{defaultValue:"Reduce Only"})),de(U.Z,{color:"t.primary"},o(d?"openOrder-true":"openOrder-false",{defaultValue:d?"True":"False"}))))))},he=({step:e,tickSizePrecision:t,order:r,changeOrder:a,index:l,subOrderLength:s})=>{const{getI18n:d}=(0,I.Z)(),{getI18n:c}=(0,x.yk)(),{type:u,status:p,stopPrice:m,workingType:y,price:g,reduceOnly:h}=r||{},{useStrategyOrder:f}=(0,i.useContext)(Q.Z),{amount:b,sideProps:O}=f(r),k=d("Last-Price",{defaultValue:"Last Price"}),Z=d("Mark-Price",{defaultValue:"Mark Price"}),v="PENDING"===p,C={[ce]:k,[ue]:Z},P=(0,i.useCallback)((e=>{(0,se._p)(e,(e=>a((0,o.Z)((0,o.Z)({},r),{},{stopPrice:e}),l)),"",t)}),[a,r,t,l]),S=(0,i.useCallback)((e=>a((0,o.Z)((0,o.Z)({},r),{},{workingType:e}),l)),[a,r,l]);return de(n.Z,{sx:ye},0===l&&de("div",{className:"description"},2===s?d("orderB-OTOCO-description",{defaultValue:"If order B executes cancel order C."}):""),1===l&&de("div",{className:"description"},2===s?d("orderC-OTOCO-description",{defaultValue:"If order C executes cancel order B."}):""),de("div",{className:ae()({orderB:0===l,orderC:1===l,only:1===s,card:!0})},de("div",{className:"title"},d(0===l?"orderB":"orderC",{defaultValue:0===l?"Order B":"Order C"})),de("div",{className:"content"},de("div",{className:"row orderType"},de(U.Z,{fontSize:2,color:"t.primary"},d(`type-${u}`,{defaultValue:u})),de(U.Z,{fontSize:0,color:"t.third"},d(`status-${pe(p)}`,{defaultValue:p}))),de("div",{className:"row"},de(U.Z,{color:"t.third"},d("side",{defaultValue:"Side"})),de(U.Z,O)),de("div",{className:"row"},de(U.Z,{color:"t.third"},d("amount",{defaultValue:"Amount"})),de(U.Z,{color:"t.primary"},b)),me.includes(u)&&de("div",{className:"row"},de(U.Z,{color:"t.third"},d("price",{defaultValue:"Price"})),de(U.Z,{color:"t.primary"},g)),de("div",{className:"row "+(v?"editable":"")},de(U.Z,{color:"t.third"},d("triggerPrice",{defaultValue:"Trigger Price"})),v?de(le.Z,{type:"number",variant:"outline",step:e,value:m,onChange:P,boxProps:{sx:{height:"24px",lineHeight:1,mt:0,pl:[0,"minor"],fontSize:"12px",border:"none",backgroundColor:"dialog.panelBg"}},sx:{textAlign:"right"}}):de(U.Z,{color:"t.primary"},m)),de("div",{className:"row "+(v?"editable":"")},de(U.Z,{color:"t.third"},d("trigger",{defaultValue:"Trigger"})),v?de(ne.Z,{sx:{height:"16px",minHeight:"16px",py:"3px",border:"none",color:"t.primary",svg:{height:"16px",right:"-6px",marginTop:"4px"}},workingType:y,changeWorkingType:S}):de(U.Z,{color:"t.primary"},C[y])),de("div",{className:"row"},de(U.Z,{color:"t.third"},d("reduceOnly",{defaultValue:"Reduce Only"})),de(U.Z,{color:"t.primary"}," ",c(h?"openOrder-true":"openOrder-false",{defaultValue:h?"True":"False"}))))))};var fe=a().createElement;const xe=e=>{const{getI18n:t,i18n:{language:r}}=(0,I.Z)(),{isMobile:a,visible:l,order:s={},onClose:u}=e,m=(0,g.iB)()[s.symbol]||{},y=(0,X.p)(m.tickSize),h=m.tickSize,f=!p()(s)&&l,{0:x,1:b}=(0,i.useState)(!1),{0:O,1:k}=(0,i.useState)({}),{0:Z,1:v}=(0,i.useState)({}),{0:C,1:S}=(0,i.useState)([]),T=(0,i.useCallback)(((e,t)=>{const r=C.map(((r,o)=>o===t?e:r));S(r)}),[C]),V=(0,i.useCallback)((async()=>{const{strategyId:e,strategyType:t}=s;b(!0);const r=await(0,J.Su)({strategyId:e,strategyType:t});b(!1);const{success:o,data:i}=r;o&&i&&(k(i),v(i.subOrders[0]),"OTOCO"===i.strategyType?S(i.subOrders.slice(1,3)):S(i.subOrders.slice(1,2)))}),[s]);(0,i.useEffect)((()=>{f?V():(k({}),v({}),S([]))}),[V,f]);const{setMessageInfo:w}=(0,g.YT)(),M=(0,i.useCallback)((async e=>{e.type!==P.Jm.STOP_MARKET&&e.type!==P.Jm.TAKE_PROFIT_MARKET||delete e.price,delete e.status;const{success:o,message:i}=await(0,J.ZX)(e,{language:r});o&&w({message:t("update-strategy-suc"),variant:"success"})}),[t,r,w]),L=(0,i.useCallback)((()=>{const{strategyType:e}=O,t=[];C.forEach(((r,i)=>{(function(e,t){return Number(t.stopPrice)!==Number(e.stopPrice)||t.workingType!==e.workingType})(r,O.subOrders[i+1])&&t.push(M((0,o.Z)((0,o.Z)({},r),{},{strategyType:e})))})),Promise.all(t).finally(u)}),[u,O,C,M]);return fe(Y.Z,{open:f,onCloseIconClick:u,sx:{width:["100%","640px"],height:["100%","auto"]},contentSx:{height:["100%","auto"],p:0}},fe(n.Z,{as:"h3",__css:{borderBottom:["none","2px solid"],borderBottomColor:["transparent","primary"],px:"md",pt:["50px","sm"],pb:["6px","sm"],textAlign:["unset","center"],fontSize:["xp","md"],lineHeight:"20px",fontWeight:"medium"}},t("strategyOrder",{defaultValue:"Strategy Order"})),fe(n.Z,{sx:{height:"calc(100% - 76px)",overflowY:"auto",p:"md"}},fe(n.Z,{sx:{minHeight:"400px"}},fe(W.Z,{inner:!0,show:x}),fe(oe,{mainOrder:fe(ge,{order:Z,subOrderLength:C.length}),subOrders:C.map(((e,t)=>fe(he,{key:e.strategySubId,index:t,tickSizePrecision:y,step:Number(h),order:e,changeOrder:T,subOrderLength:C.length})))}),fe(d.Z,{alignItems:"start",mt:"md",color:"t.third"},fe(j.Z,{size:32,mr:"xs",height:"0.5em"}),fe(U.Z,{fontSize:"14px",lineHeight:"16px"},"OTOCO"===O.strategyType?t("strategyOrderTip"):t("strategyOrderTip2")))),a&&fe(n.Z,{sx:{width:"100%",height:"64px"}}),fe(G.y,{sx:{bg:"popupBg"}},fe(d.Z,null,fe(c.Z,{flex:"auto",variant:"outline",sx:{boxShadow:"outlineBtnShadow",color:"t.primary",mr:"md",height:"40px"},onClick:u},t("cancel",{defaultValue:"Cancel"})),fe(c.Z,{flex:"auto",onClick:L,height:"40px"},t("confirm",{defaultValue:"Confirm"}))))))},be=a().memo(xe);var Oe=r("SKkT"),ke=a().createElement;const Ze=(0,f.ck)("mobile",(()=>Promise.all([r.e(374),r.e(712),r.e(162)]).then(r.bind(r,"c/hh")))),ve=(0,f.ck)("pc",(()=>Promise.all([r.e(374),r.e(712),r.e(773)]).then(r.bind(r,"60qa")))),Ce=(0,b.nM)(),Pe=[null,"LIMIT","STOP"],Se=()=>{const{isLight:e}=(0,g.Fg)(),[t,{onCheckHeader:r,onSortHeader:u}]=(()=>{const{getI18n:e}=(0,I.Z)(),{getI18n:t}=(0,x.yk)(),r=(0,x.C3)()===b.UW,[a,l]=(0,R.Z)(b.rR,["reduceOnly","postOnly","strategy"]),[s,n]=(0,R.Z)(b.sx,["time","symbol","type","side","price","amount","filled","reduceOnly","postOnly","conditions","strategy","action"]);return[(0,i.useMemo)((()=>{const i=[{key:"time",text:e("time",{defaultValue:"Time"}),checkable:!1,sortable:!0},{key:"symbol",text:e("symbol",{defaultValue:"Symbol"}),checkable:!1,sortable:!0},{key:"type",text:e("type",{defaultValue:"Type"}),checkable:!1,sortable:!0},{key:"side",text:e("side",{defaultValue:"Side"}),checkable:!1,sortable:!0},{key:"price",text:e("price",{defaultValue:"Price"}),checkable:!1,sortable:!0},{key:"amount",text:e("amount",{defaultValue:"Amount"}),checkable:!1,sortable:!0},{key:"filled",text:e("filled",{defaultValue:"Filled"}),checkable:!1,sortable:!0},{key:"reduceOnly",text:e("reduceOnly",{defaultValue:"Reduce Only"}),checkable:!0,sortable:!0},{key:"postOnly",text:t("orderType-postOnly",{defaultValue:"Post Only"}),checkable:!0,sortable:!0},{key:"conditions",text:e("triggerConditions",{defaultValue:"Trigger"}),checkable:!1,sortable:!0},{key:"strategy",text:e("strategy",{defaultValue:"Strategy"}),checkable:!0,sortable:!0},{key:"action",text:e("action",{defaultValue:"Cancel All"}),overlay:F(A.ZP,null),checkable:!1,sortable:!0}];if(r)return i.map((e=>(0,o.Z)((0,o.Z)({},e),{},{checkable:!1,sortable:!1,defaultChecked:!0})));const l=i.map((e=>(0,o.Z)((0,o.Z)({},e),{},{defaultChecked:!e.checkable||(null===a||void 0===a?void 0:a.includes(e.key))||!1})));return s&&l.sort(((e,t)=>s.indexOf(e.key)-s.indexOf(t.key))),l}),[e,t,r,a,s]),{onCheckHeader:l,onSortHeader:n}]})(),[f]=(0,g.z4)(),O=(0,l.useDispatch)(),{enqueueNotification:k}=(0,y.Z)(),{getI18n:Z}=(0,x.yk)(),{getI18n:v}=(0,I.Z)(),{0:C,1:P}=(0,i.useState)(""),{0:S,1:T}=(0,i.useState)({}),{preOrders:V}=(0,g.E)(),w=(0,l.useSelector)((e=>e.loading.effects.orders.queryOpenOrder));(0,i.useEffect)((()=>{O.orders.queryOpenOrder()}),[]);const{loading:M,delOpenOrders:L}=H?$():_(),{isOrderHideOtherPairs:E}=(0,g.VX)(),{0:B,1:z}=(0,i.useState)(E),U=(0,i.useCallback)((e=>{z(e),O.userProfile.save({key:"isOrderHideOtherPairs",value:e})}),[O.userProfile]),Y=(0,h.Nm)(V,B,f),G=(0,x.d0)(Ce),J=(0,i.useCallback)((async e=>{const t="number"===typeof e?{batch:!0,type:Pe[e],symbol:B?f:null}:Y.filter((t=>e(t)))[0];p()(t)||await L(t)}),[B,f,Y,L]),j=(0,i.useCallback)((async(t,r)=>{r?K.ZP.show({isLight:e,showCloseIcon:!1,sx:{width:["300px","360px"],height:"auto"},children:ke(n.Z,null,ke(n.Z,{px:1,pt:[0,"16px"],sx:{textAlign:"center"}},ke(s.Z,{size:[60,96]}),ke("div",null,r)),ke(d.Z,{mt:"24px"},ke(c.Z,{sx:{width:.5,mr:3},sz:"l",flexGrow:1,colorStyle:"secondary",onClick:()=>K.ZP.close()},v("dialog-cancel",{defaultValue:"Cancel"})),ke(c.Z,{sx:{width:.5},sz:"l",flexGrow:1,onClick:()=>{J(t),K.ZP.close()}},v("dialog-confirm",{defaultValue:"Confirm"}))))}):J(t)}),[J,v,e]),W=(0,i.useCallback)((async e=>{const{success:t}=await(0,m.nC)(e,{});t&&k({header:Z("amendmentOrderSubmitted",{defaultValue:"Amendment Order Submitted"})})}),[Z,k]),X=!Y.length&&w,ee=(0,i.useCallback)((()=>{P(""),T({})}),[P,T]),te=(0,i.useCallback)((e=>{P("STRATEGY_ORDER"),T(e)}),[P,T]),re=(0,i.useCallback)(((e,t,r)=>{P("MODIFY_ORDER"),T((0,o.Z)((0,o.Z)({},e),{},{modifyParams:t,onConfirm:r}))}),[P,T]),oe=v("nodata",{defaultValue:"You have no open orders."}),ie=(0,i.useMemo)((()=>({symbol:f,emptyText:oe,actionCancel:j,actionModifyOrder:W,actionStrategyModal:te,actionModifyConfirmModal:re,changeSymbol:G,handleHideOtherPairs:U,checked:B,useColumn:N,useStrategyOrder:q,headers:t})),[j,W,te,re,G,B,oe,U,f,t]);return ke(Q.Z.Provider,{value:ie},ke(D.Z,null,(({isMobile:e,isIPad:o})=>ke(a().Fragment,null,o?ke(Ze,{isMobile:e,items:Y,girdLoading:X,outLoading:w||M}):ke(ve,{headers:t,onCheckHeader:r,onSortHeader:u,items:Y,loading:w||M}),"STRATEGY_ORDER"===C&&ke(be,{isMobile:e,visible:!0,order:S,onClose:ee}),"MODIFY_ORDER"===C&&ke(Oe.Z,{order:S,onClose:ee})))))},Te=a().memo(Se)},Scox:(e,t,r)=>{"use strict";r.d(t,{i:()=>o});const o=({side:e,type:t})=>"BUY"===e&&"STOP"===t?">=":"SELL"===e&&"STOP"===t?"<=":"BUY"===e&&"STOP_MARKET"===t?">=":"SELL"===e&&"STOP_MARKET"===t||"BUY"===e&&"TAKE_PROFIT"===t?"<=":"SELL"===e&&"TAKE_PROFIT"===t?">=":"BUY"===e&&"TAKE_PROFIT_MARKET"===t?"<=":"SELL"===e&&"TAKE_PROFIT_MARKET"===t?">=":""}}]);