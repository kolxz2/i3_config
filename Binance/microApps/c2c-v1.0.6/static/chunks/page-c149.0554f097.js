(self.webpackJsonp_c2c=self.webpackJsonp_c2c||[]).push([[385],{"+3sl":(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>ae});var a=i("nAdt"),o=i("/SIk"),n=i.n(o),r=i("szIg"),l=i("G6rc"),d=i("7IDl"),s=i("xjo1"),c=i("/ZSM"),u=i("KkEV"),m=i("CVOX"),p=i("krwy"),f=i("sJ8p"),v=i("SbIO"),x=i("OMZR"),y=i("OaRt"),h=i("Fgm1"),b=i("/7ZK"),Z=i("vM3x"),g=i.n(Z),T=n().createElement;function C({data:e,tradeType:t,setAmount:i}){const[a]=(0,p.$)(),{userAsset:n}=(0,r.useSelector)((e=>e.common)),l=[null===e||void 0===e?void 0:e.minSingleTransAmount,null===e||void 0===e?void 0:e.dynamicMaxSingleTransAmount],d=[`${a("c2c-ui-trade-buy-limit")}:${null===e||void 0===e?void 0:e.minSingleTransAmount}-${null===e||void 0===e?void 0:e.dynamicMaxSingleTransAmount}  ${null===e||void 0===e?void 0:e.fiatUnit}`,`${a("c2c-ui-trade-sell-limit")}:${null===e||void 0===e?void 0:e.minSingleTransAmount}-${null===e||void 0===e?void 0:e.dynamicMaxSingleTransAmount}  ${null===e||void 0===e?void 0:e.fiatUnit}`],s=(0,o.useMemo)((()=>{var t;const i=(null===(t=n.filter((t=>t.asset===(null===e||void 0===e?void 0:e.asset)))[0])||void 0===t?void 0:t.free)||0,a="BUY"===(null===e||void 0===e?void 0:e.tradeType)?Math.min(Number(i),Number(null===e||void 0===e?void 0:e.dynamicMaxSingleTransQuantity)):Number(null===e||void 0===e?void 0:e.dynamicMaxSingleTransAmount);return"BUY"===(null===e||void 0===e?void 0:e.tradeType)?new(g())(a).toFixed(null===e||void 0===e?void 0:e.assetScale,1):new(g())(a).toFixed(null===e||void 0===e?void 0:e.fiatScale,1)}),[n,e]),c=(0,o.useCallback)(((e,t)=>{i(t?"":e)}),[i]),u=(0,o.useMemo)((()=>{if("sell"===t){var i;const t=(null===(i=n.filter((t=>t.asset===(null===e||void 0===e?void 0:e.asset)))[0])||void 0===i?void 0:i.free)||0;return new(g())(t).toFixed(null===e||void 0===e?void 0:e.assetScale,1)}}),[t,n,e]);return T(b.Z,{asset:e.asset,balance:u,tradeType:t,suffix:T(v.Z,{mr:"10px",color:"#AEB4BC"},null===e||void 0===e?void 0:e.fiatUnit),fiatUnit:null===e||void 0===e?void 0:e.fiatUnit,placeholder:`${(0,y.xG)(null===e||void 0===e?void 0:e.minSingleTransAmount,(0,y.mK)(null===e||void 0===e?void 0:e.fiatScale))} - ${(0,y.xG)(null===e||void 0===e?void 0:e.dynamicMaxSingleTransAmount,(0,y.mK)(null===e||void 0===e?void 0:e.fiatScale))}`,exTransValue:null===e||void 0===e?void 0:e.price,exSuffix:T(v.Z,{mr:"10px",color:"#AEB4BC"},null===e||void 0===e?void 0:e.asset),exPlaceholder:new(g())(0).toFixed(null===e||void 0===e?void 0:e.assetScale,1),exMaxValue:s,initvalue:"",onChange:c,limit:l,limitText:"buy"===t?d[0]:d[1],decimalLength:null===e||void 0===e?void 0:e.fiatScale,exDecimalLength:null===e||void 0===e?void 0:e.assetScale,name:"matchPrice",different:!0,amountID:"buy"===t?"C2Cofferbuydetail_input_amount":"C2Cofferselldetail_input_amount",quantityID:"buy"===t?"C2Cofferbuydetail_input_quantity":"C2Cofferselldetail_input_quantity",allID:"buy"===t?"C2Cofferbuydetail_btn_buyall":"C2Cofferselldetail_btn_sellall"})}const S=n().memo(C);var M=i("RNvQ"),k=i.n(M),D=i("RPIV"),_=i("xtUa"),A=i("If2F"),L=i("5wYV"),E=i("Pb5q"),w=i("g1g7"),$=i("h0+G"),N=i("03hH"),I=i("R9ZS"),B=i("b9Li"),U=n().createElement;const F=({payId:e,setPayId:t,paylist:i,tradeType:a})=>{const[n]=(0,p.$)(),{isMobile:l}=(0,r.useSelector)((e=>e.common)),d=(0,o.useCallback)((e=>{for(let t=0;t<i.length;t++){const{fields:a,id:o,tradeMethodName:n,payee:r,tradeMethodBgColor:l,tradeMethodShortName:d}=i[t];let s=r;if(a&&a.length>0&&(s="payee"!==a[0].fieldContentType?a[0].fieldValue:a[1]?a[1].fieldValue:r),o.toString()===e){return(d?d+s:n+s).length>30&&(s=`${s.slice(0,20)}...`),U(u.Z,{alignItems:"center"},U(u.Z,{alignItems:"center",sx:{px:"8px",bg:"#FAFAFA",color:l,fontSize:"14px",mr:"6px",borderRadius:"2px"}},d||n),U(v.Z,null,s))}}}),[i,l]),s=(0,o.useCallback)((e=>{const{fields:t,payee:i,tradeMethodName:a,tradeMethodBgColor:o,tradeMethodShortName:n}=e;let r=i;return t&&t.length>0&&(r="payee"!==t[0].fieldContentType?t[0].fieldValue:t[1]?t[1].fieldValue:i),(n?n+r:a+r).length>30&&(r=`${r.slice(0,18)}...`),U(u.Z,{alignItems:"center",key:i+r},U(u.Z,{alignItems:"center",sx:{px:"8px",bg:"#FAFAFA",color:o,fontSize:"14px",mr:"6px",borderRadius:"2px"}},n||a),U(v.Z,null,r))}),[]);return U(u.Z,{flexDirection:"column",width:"100%",mb:"15px"},U(v.Z,{color:"#76808F",mt:"10px"},n("buy"===a?"c2c-ui-trade-buy-method":"c2c-ui-trade-sell-methods")),U(_.Z,{id:"C2Cofferselldetail_btn_transfer",placeholder:n("c2c-ui-trade-buy-selpay"),name:"payId",limit:8,value:e,onValueChange:t,renderValue:d,sx:{borderColor:"lines.primary",mt:"4px",width:"100%",height:"40px",lineHeight:"26px"}},null===i||void 0===i?void 0:i.map((e=>U(A.Z,{key:e.id,value:e.id.toString()},s(e))))))},R=({href:e,tradeType:t})=>{const[i]=(0,p.$)(),{isMobile:a}=(0,r.useSelector)((e=>e.common));return U(u.Z,{flexDirection:"column",width:"100%",mb:"15px"},U(v.Z,{color:"#76808F",mt:"10px"},i("buy"===t?"c2c-ui-trade-buy-method":"c2c-ui-trade-sell-methods")),U(D.Z,{id:"C2Cofferselldetail_btn_addpayment",as:"a",href:e,variant:"outline",sx:{width:"100%",color:"#D0980B",mt:"4px",height:"40px",lineHeight:a?"24px":"",fontSize:!a&&i("c2c-ui-trade-set-payment").length>10?[0,"12px","14px"]:"14px"}},i("c2c-ui-trade-set-payment")))},z=({tradeType:e,onCancel:t})=>{const[i]=(0,p.$)();return U(D.Z,{id:"buy"===e?"C2Cofferbuydetail_btn_cancel":"C2Cofferselldetail_btn_cancel",variant:"outline",colorStyle:"second",sx:{width:"33%",height:"40px",fontSize:"16px",mr:"1%"},onClick:t},i("c2c-ui-cancel"))},V=({tradeType:e,onSubmit:t,disabled:i=!1,cssStyle:o={},text:n="",limit:r=!1})=>{const[l]=(0,p.$)();return U(D.Z,{id:"buy"===e?"C2Cofferbuydetail_btn_buy":"C2Cofferselldetail_btn_sell",type:"button",variant:r?"outline":"default",colorStyle:r?"":e,disabled:i,sx:(0,a.Z)({width:"112px"},o),onClick:t},r?l("c2c_module_ads_not_support_condition"):n)},O={"083637":{message:"c2c-ui-makeorder-refresh-msg",confirmText:"c2c-ui-makeorder-refresh-confirm",confirmLink:""},"083022":{message:"c2c-ui-trade-makeorder-transfer-msg",confirmText:"c2c-ui-trade-makeorder-transfer-confirm",confirmLink:""}};const P=function({tradeType:e,data:t=null,onCancel:i,amount:l,onRefresh:s,closeHandler:c}){const v=(0,d.tv)(),[x]=(0,p.$)(),y=(0,r.useDispatch)(),{enqueueNotification:h}=(0,L.Z)(),{loginStatus:b,toNeedLogin:Z}=(0,N.Z)(),{isMobile:g,kycPassed:T,bindMobileStatus:C,userRegisterDays:S,userTotalBTC:M,userPayList:D,useNewTransfer:_}=(0,r.useSelector)((e=>e.common)),A=(0,r.useSelector)((e=>e.loading.effects.trade.postMakeOrder)),P=(0,$.Z)(D,null===t||void 0===t?void 0:t.tradeMethods),{0:q,1:K}=(0,o.useState)(!1),{0:Y,1:G}=(0,o.useState)(""),{0:H,1:Q}=(0,o.useState)(void 0),{setting:J,transfer:W,p2pOrderDetail:j,p2pOrders:X,founding:ee}=m.Z.site(),te=(0,o.useMemo)((()=>("buy"===e||!!H)&&!!l),[l,e,H]),ie=(0,o.useCallback)((()=>{var e;return null===(e=P.filter((e=>e.id.toString()===H))[0])||void 0===e?void 0:e.identifier}),[H,P]),ae=(0,o.useCallback)((async()=>{const{data:e,success:t,message:i}=await y.common.postSecurityFaceStatus();if(t&&e.qrCode&&e.id){const{success:t,message:i}=await y.common.postFaceQrValid({transId:e.qrCode});return t?(G(e.id),void K(!0)):void w.Z.info({message:i,confirmTxt:x("c2c-ui-iknow"),needCancel:!1})}w.Z.info({message:i,confirmTxt:x("c2c-ui-iknow"),needCancel:!1})}),[y.common,w.Z.info,x]),oe=(0,o.useCallback)((async()=>{const{data:e,success:t}=await y.common.getC2cUseInfoAsync();return{isKyc:!!t&&e.kycPassed,isSms:!!t&&e.bindMobileStatus}}),[y.common]),ne=k()((async()=>{if(!te)return;if(!b)return void Z();let i=T,o=C;if(!T||!C){const{data:e,success:t}=await y.common.getC2cUseInfoAsync();t&&(i=e.kycPassed,o=e.bindMobileStatus)}if(!o||!i){if(!(await(0,E.F)({t:x,bindMobileStatus:o,kycStatus:i,onUpdate:oe})))return!1}let n={advOrderNumber:null===t||void 0===t?void 0:t.advNo,asset:null===t||void 0===t?void 0:t.asset,matchPrice:null===t||void 0===t?void 0:t.price,fiatUnit:null===t||void 0===t?void 0:t.fiatUnit,buyType:"BY_MONEY",totalAmount:l,tradeType:e.toUpperCase(),origin:"MAKE_TAKE"};"sell"===e&&(n=(0,a.Z)((0,a.Z)({},n),{},{payId:H,payType:ie(H)}));const{message:r,code:d,success:u,data:m}=await y.trade.postMakeOrder(n);if(c&&c(),u){if(!m.result){return void(await w.Z.info({message:x("c2c-ui-makeorder-pending-msg"),confirmTxt:x("c2c-ui-makeorder-pending-confirm"),cancelTxt:x("c2c-ui-trade-refresh-no")})&&v.push(`${j}?orderNo=${null===m||void 0===m?void 0:m.orderMatch.orderNumber}`))}h(x("c2c-ui-trade-makeorder-success"),{anchorOrigin:{horizontal:"right",vertical:"top"},variant:"success"}),setTimeout((()=>{v.push(`${j}?orderNo=${null===m||void 0===m?void 0:m.orderMatch.orderNumber}`)}),2e3)}else if("083637"===d){var p,f,g,S,M;await w.Z.info({title:null!==(p=O[d])&&void 0!==p&&p.title?x(null===(f=O[d])||void 0===f?void 0:f.title):void 0,message:x(null===(g=O[d])||void 0===g?void 0:g.message),confirmTxt:x(null===(S=O[d])||void 0===S?void 0:S.confirmText),needCancel:!(null===(M=O[d])||void 0===M||!M.cancelText)})&&s&&s()}else if("083022"===d){var k,D,A,L,$;await w.Z.info({title:null!==(k=O[d])&&void 0!==k&&k.title?x(null===(D=O[d])||void 0===D?void 0:D.title):void 0,message:x(null===(A=O[d])||void 0===A?void 0:A.message),confirmTxt:x(null===(L=O[d])||void 0===L?void 0:L.confirmText),needCancel:!(null===($=O[d])||void 0===$||!$.cancelText)})&&window.open(_?ee:W,"_self")}else if("083665"===d){const{success:e,data:t}=await y.common.postOrderUndoList();if(e){await w.Z.info({message:r,confirmTxt:x("c2c-ui-iknow"),needCancel:!1})&&((null===t||void 0===t?void 0:t.length)>1?v.push(X):1===(null===t||void 0===t?void 0:t.length)&&v.push(`${j}?orderNo=${t[0].orderNumber}`))}}else"031101"===d&&ae()}),50);let re=!1;return b&&(re=!1===(null===t||void 0===t?void 0:t.isTradable)),(0,o.useEffect)((()=>{var e;P&&Q(P[0]?null===(e=P[0])||void 0===e?void 0:e.id.toString():void 0)}),[D,t.tradeMethods]),U(n().Fragment,null,"buy"===e?null:P.length>0&&H?U(F,{tradeType:e,payId:H,setPayId:Q,paylist:P}):U(R,{tradeType:e,href:J}),U(f.Z,{sx:{mt:"20px",width:"100%"}},U(u.Z,{sx:{height:"40px",width:"100%"}},g?null:U(z,{tradeType:e,onCancel:i}),U(V,{tradeType:e,onSubmit:ne,data:t,disabled:!te||A,text:(0,I.TL)(x(`c2c-ui-trade-${e}-crypto`),[t.asset],/{crypto}/gi),limit:re,cssStyle:{px:[0,2,4],ml:[0,0,3],width:["100%","66%","66%"],height:"40px",fontSize:!g&&x(`c2c-ui-trade-${e}-now`).length>10?[0,"14px","16px"]:"16px"}}))),U(B.Z,{visible:q,transId:Y,setVisible:K}))};var q=i("HFTe"),K=n().createElement;function Y({remarks:e=null,tradeType:t}){const{ruleT1:i}=(0,r.useSelector)((e=>e.trade)),[a]=(0,p.$)(),n=(0,o.useMemo)((()=>e?K(u.Z,{flexDirection:"column"},K(f.Z,{tx:"ADT",variant:"t1RequireTitle"},a("c2c-ui-trade-buy-remark")),K(u.Z,{tx:"ADT",variant:"RequireBox"},K(v.Z,{sx:{whiteSpace:"pre-wrap"}},e))):null),[e,a]),l=(0,o.useMemo)((()=>i?K(u.Z,{flexDirection:"column",alignItems:"flex-start"},K(q.Z,{tip:a("c2c-ui-trade-rule-t1-detail"),placement:"bottom"},K(f.Z,{id:"SELL"===t?"C2Cofferbuydetail_hover_t1":"",tx:"ADT",variant:"t1RequireTitle",sx:{borderBottom:"1px dashed #1E2026"}},a("c2c-ui-trade-rule-t1"))),K(v.Z,{tx:"ADT",variant:"t1Box"},i)):null),[i,a]);return K(u.Z,{flexDirection:"column"},n,"SELL"===t?l:null)}const G=n().memo(Y);var H=n().createElement;const Q=function({advDetail:e,refreshContent:t,onCancel:i,onRefresh:a}){const{advertiserDetail:n}=m.Z.site(),[r]=(0,p.$)(),{0:l,1:d}=(0,o.useState)(void 0),s=(0,o.useMemo)((()=>"SELL"===e.tradeType?r("c2c-ui-trade-buy-maintitle").replace("{BTC}",` ${e.asset} `).replace("{CNY}",` ${e.fiatUnit} `):r("c2c-ui-trade-sell-maintitle").replace("{BTC}",` ${e.asset} `).replace("{CNY}",` ${e.fiatUnit} `)),[r,e.tradeType,e.asset,e.fiatUnit]),c=(0,o.useMemo)((()=>{if(null!==e&&void 0!==e&&e.tradeMethods){const t={},i=[];for(let a=0;a<e.tradeMethods.length;a++)t[e.tradeMethods[a].identifier]||(t[e.tradeMethods[a].identifier]=!0,i.push(e.tradeMethods[a]));return i.map(((e,t)=>{const{tradeMethodShortName:i,tradeMethodName:a,tradeMethodBgColor:o}=e;return H(u.Z,{key:t,alignItems:"center",mb:"8px"},o?H(f.Z,{tx:"trade",variant:"payLine",sx:{bg:o}}):null,H(v.Z,{fontSize:"14px",sx:{wordBreak:"break-all"}},a))}))}}),[e]);return H(u.Z,{tx:"ADT",variant:"pcFlex"},H(u.Z,{tx:"ADT",variant:"leftModal"},H(u.Z,{tx:"ADT",variant:"leftCenter"},H(u.Z,{tx:"ADT",variant:"lc_top"},H(v.Z,{sx:{fontSize:"24px",color:"#1E2026",fontWeight:500}},s),H(u.Z,{alignItems:"flex-start",flexDirection:"column"},H(u.Z,{mt:"25px",mb:"12px",alignItems:"center"},H(v.Z,{color:"#76808F",mr:"8px"},r("c2c-ui-trade-price")),H(v.Z,{color:"#0B0E11",mr:"4px"},(0,y.xG)(e.price,(0,y.mK)(e.priceScale))),H(v.Z,{color:"#0B0E11"},e.fiatUnit,"/",e.asset),!!t&&H(v.Z,{sx:{fontSize:"12px",color:"#76808F",ml:"6px"}},t)),H(u.Z,{alignItems:"center"},H(v.Z,{color:"#76808F",mr:"8px"},r("c2c-ui-trade-content-available")),H(v.Z,{color:"#0B0E11"},(0,y.xG)(e.tradableQuantity,(0,y.mK)(e.assetScale))," ",e.asset)))),H(u.Z,{tx:"ADT",variant:"lc_bottom"},H(S,{data:e,tradeType:"SELL"===e.tradeType?"buy":"sell",setAmount:d}),H(P,{tradeType:"SELL"===e.tradeType?"buy":"sell",data:e,amount:l,onCancel:i,onRefresh:a})))),H(u.Z,{tx:"ADT",variant:"rightModal"},H(v.Z,{tx:"ADT",variant:"rightTitle"},r("c2c-ui-trade-tradinginfo")),e.nickName?H(u.Z,{mb:"16px",alignItems:"center"},H(v.Z,{mr:"8px",color:"#76808F"},"SELL"===e.tradeType?r("c2c-ui-trade-buy-sellernickname"):r("c2c-ui-trade-sell-buyernickname")),H(h.Z,{id:"SELL"===e.tradeType?"C2Cofferbuydetail_link_merchantdetail":"C2Cofferselldetail_link_merchant",href:`${n}?advertiserNo=${e.userNo}`,cssStyle:{textDecoration:"underline",color:"#D0980B",cursor:"pointer",mr:"4px"}},e.nickName),"merchant"===(null===e||void 0===e?void 0:e.userType)?H(x.Z,{color:"primary",size:18}):null):null,H(u.Z,{mb:"16px",alignItems:"center"},H(v.Z,{mr:"8px",color:"#76808F"},`${r("c2c-ui-pc-post-step2-label-paymentTimeLimit")}:`),H(v.Z,{color:"#14151A"},e.payTimeLimit," ",e.payTimeLimit>10?r("c2c_user_trade_minutes"):r("c2c-ui-trade-time-hrs"))),H(u.Z,{tx:"ADT",variant:"paymentsModal"},H(v.Z,{color:"#76808F",mb:"16px"},"SELL"===e.tradeType?r("c2c-ui-trade-buy-method"):r("c2c-ui-trade-sell-methods")),H(u.Z,{flexDirection:"column"},c)),H(u.Z,{flexDirection:"column",sx:{maxHeight:"415px",overflow:"auto",width:"100%"}},H(G,{tradeType:e.tradeType,remarks:e.remarks}))))};var J=n().createElement;const W=function({advDetail:e,refreshContent:t,onCancel:i,onRefresh:a}){const{advertiserDetail:n}=m.Z.site(),[r]=(0,p.$)(),{0:l,1:d}=(0,o.useState)(void 0),s=(0,o.useMemo)((()=>"SELL"===e.tradeType?r("c2c-ui-trade-buy-maintitle").replace("{BTC}",` ${e.asset} `).replace("{CNY}",` ${e.fiatUnit} `):r("c2c-ui-trade-sell-maintitle").replace("{BTC}",` ${e.asset} `).replace("{CNY}",` ${e.fiatUnit} `)),[r,e.tradeType,e.asset,e.fiatUnit]),c=(0,o.useMemo)((()=>{if(null!==e&&void 0!==e&&e.tradeMethods){const t={},i=[];for(let a=0;a<e.tradeMethods.length;a++)t[e.tradeMethods[a].identifier]||(t[e.tradeMethods[a].identifier]=!0,i.push(e.tradeMethods[a]));return i.map(((e,t)=>{const{tradeMethodShortName:i,tradeMethodName:a,tradeMethodBgColor:o}=e;return J(u.Z,{key:t,alignItems:"center",mb:"4px"},o?J(f.Z,{tx:"trade",variant:"payLine",sx:{bg:o}}):null,J(v.Z,{fontSize:"12px"},a))}))}}),[e]);return J(u.Z,{tx:"ADT",variant:"mobFlex"},J(u.Z,{tx:"ADT",variant:"topBox",sx:{bg:"SELL"===e.tradeType?"#02C076":"#F84960"}},J(v.Z,{sx:{fontSize:"24px",color:"#1E2026",mb:"12px"}},s),J(u.Z,{mb:"10px",alignItems:"center"},J(v.Z,{color:"#5E6673",mr:"8px"},r("c2c-ui-trade-price")),J(v.Z,{color:"#0B0E11",mr:"4px"},(0,y.xG)(e.price,(0,y.mK)(e.priceScale))),J(v.Z,{color:"#0B0E11"},e.fiatUnit,"/",e.asset),!!t&&J(v.Z,{sx:{fontSize:"12px",color:"white",ml:"6px"}},t)),J(u.Z,{alignItems:"center"},J(v.Z,{color:"#5E6673",mr:"8px"},r("c2c-ui-trade-content-available")),J(v.Z,{color:"#0B0E11"},(0,y.xG)(e.tradableQuantity,(0,y.mK)(e.assetScale))," ",e.asset))),J(u.Z,{sx:{width:"100%",mt:"-70px",px:"16px"}},J(u.Z,{tx:"ADT",variant:"mobPayBox"},J(S,{data:e,tradeType:"SELL"===e.tradeType?"buy":"sell",setAmount:d}),J(P,{tradeType:"SELL"===e.tradeType?"buy":"sell",data:e,amount:l,onCancel:i,onRefresh:a}))),J(u.Z,{flexDirection:"column",width:"100%",px:"16px"},J(v.Z,{sx:{fontWeight:500,color:"#12161C",mb:"16px"}},r("c2c-ui-trade-tradinginfo")),J(u.Z,{tx:"ADT",variant:"mobLineBox"},J(v.Z,{color:"#76808F"},"SELL"===e.tradeType?r("c2c-ui-trade-buy-sellernickname"):r("c2c-ui-trade-sell-buyernickname")),J(u.Z,{alignItems:"center"},"merchant"===(null===e||void 0===e?void 0:e.userType)?J(x.Z,{color:"primary",size:18}):null,J(h.Z,{id:"SELL"===e.tradeType?"C2Cofferbuydetail_link_merchantdetail":"C2Cofferselldetail_link_merchant",href:`${n}?advertiserNo=${e.userNo}`,cssStyle:{textDecoration:"underline",color:"#D0980B",cursor:"pointer",mr:"4px"}},e.nickName),J(v.Z,{ml:"8px",fontWeight:900,color:"#76808F"},">"))),J(u.Z,{tx:"ADT",variant:"mobLineBox"},J(v.Z,{color:"#76808F"},r("c2c-ui-pc-post-step2-label-paymentTimeLimit")),J(v.Z,{color:"#14151A"},e.payTimeLimit," ",e.payTimeLimit>10?r("c2c_user_trade_minutes"):r("c2c_user_trade_hrs"))),J(u.Z,{sx:{mb:"16px",flexDirection:"column",borderBottom:"1px solid #E6E8EA"}},J(v.Z,{color:"#76808F",mb:"12px"},"SELL"===e.tradeType?r("c2c-ui-trade-buy-method"):r("c2c-ui-trade-sell-methods")),J(u.Z,{flexDirection:"column",mb:"10px"},c)),J(u.Z,{sx:{flexDirection:"column",width:"100%",mb:"20px"}},J(G,{tradeType:e.tradeType,remarks:e.remarks}))))};var j=n().createElement;const X=function({advDetail:e,refreshContent:t,setAdvDetail:i}){const{p2pTrade:l}=m.Z.site(),s=(0,d.tv)(),c=(0,r.useDispatch)(),{isMobile:p}=(0,r.useSelector)((e=>e.common)),f=(0,o.useCallback)((()=>{s.push(l)}),[]),v=(0,o.useCallback)((async()=>{const t=await c.trade.getAdvdetailAsync({advNo:e.advNo});var o,n;null!==t&&void 0!==t&&t.success&&i((0,a.Z)((0,a.Z)({},null===t||void 0===t||null===(o=t.data)||void 0===o?void 0:o.adv),null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.advertiser))}),[e.advNo,c.trade]);return p?j(n().Fragment,null,e.tradeType&&j(W,{advDetail:e,refreshContent:t,onCancel:f,onRefresh:v})):j(u.Z,{sx:{width:"100%",bg:"#f9f9fa"}},e.tradeType&&j(Q,{advDetail:e,refreshContent:t,onCancel:f,onRefresh:v}))};var ee=i("EuUR"),te=i("Ne75"),ie=n().createElement;const ae=function(){const e=(0,r.useDispatch)(),{metaData:t,configs:i}=(0,o.useContext)(te.Il),{loginStatus:n}=(0,N.Z)(),{0:u,1:m}=(0,o.useState)({}),p=(0,d.Hb)().query.code,{refreshContent:f,advDetail:v}=(0,ee.Z)(p,!0);return(0,o.useEffect)((()=>{v&&m((0,a.Z)({},v))}),[v]),(0,o.useEffect)((()=>{n&&(e.common.getC2cUseInfoAsync(),e.common.getUserPayment(),e.common.getUserAsset(),e.common.postUserTotalBTC(),e.common.getUserMigrateQueryStatus())}),[e.common,n,e.trade]),(0,o.useEffect)((()=>{u.fiatUnit&&n&&e.trade.getOrderT1Tips({fiatUnit:u.fiatUnit})}),[e.trade,u.fiatUnit,n]),ie(l.Z,{metaData:t,configs:i,bg:"bg"},ie(s.Z,{linkType:"adv"}),ie(X,{advDetail:u,refreshContent:f,setAdvDetail:m}),ie(c.Z,{fiat:u.fiatUnit}))}}}]);