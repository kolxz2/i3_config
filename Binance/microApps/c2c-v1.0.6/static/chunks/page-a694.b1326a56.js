(self.webpackJsonp_c2c=self.webpackJsonp_c2c||[]).push([[488],{"l+79":(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>ke});var r=i("nAdt"),a=i("/SIk"),o=i.n(a),n=i("Q755"),c=i("G6rc"),s=i("szIg"),l=i("krwy"),d=i("vM3x"),p=i.n(d),u=i("7IDl"),m=i("5wYV"),x=i("8Lpi"),f=i("KkEV"),v=i("SbIO"),g=i("sJ8p"),h=i("CVOX"),b=o().createElement;function y(){const{p2pAds:e}=h.Z.site(),t=(0,u.tv)(),[i]=(0,l.$)(),r=(0,a.useMemo)((()=>b(f.Z,{id:"C2Ceditads_btn_back",sx:{cursor:"pointer",fontSize:"12px"},onClick:()=>{t.push(e)}},b(v.Z,null,"<"),b(v.Z,{ml:"-4px"},"<"),b(v.Z,{ml:"4px"},i("c2c_ui_naviagtion_back")))),[i]);return b(g.Z,{tx:"container",variant:"box",sx:{width:"100%",bg:"white",top:0,boxShadow:" 0px 0px 4px rgba(0,0,0,0.08)"}},b(f.Z,{tx:"container",variant:"content",flexDirection:"column"},b(f.Z,{tx:"editAdv",variant:"editTitle"},b(v.Z,{as:"h1",fontSize:"24px",my:3},i("c2c-ui-pc-myposts-list-publishError-dialog-btn-edit")),r)))}const A=o().memo(y);var E=o().createElement;const Z=function(){const[e]=(0,l.$)(),{0:t,1:i}=(0,a.useState)(0),r=[e("c2c-ui-trade-price"),e("c2c-ui-pc-post-step2-label-amount"),e("c2c-ui-pc-post-step2-label-payment"),e("c2c-ui-trade-buy-remark"),e("c2c-ui-pc-post-step3-label-userConditions")],o=(0,a.useCallback)((e=>{i(e),document.querySelector("body").scrollTop=document.querySelector(`#c2c_advDetail_level${e+1}`).offsetTop+180}),[]);return E(f.Z,{tx:"editAdv",variant:"editBody_left"},E(f.Z,{tx:"editAdv",variant:"editBody_left_box"},E(f.Z,{flexDirection:"column",alignItems:"center"},r.map(((e,i)=>i!==r.length-1?[E(g.Z,{key:e,tx:"editAdv",variant:"elb_cicle",sx:{bg:t===i?"#F0B90B":"#E6E8EA"}},E(g.Z,{tx:"editAdv",variant:"elb_cicle_c"})),E(g.Z,{key:e+i,tx:"editAdv",variant:"elb_line"})]:E(g.Z,{key:e,tx:"editAdv",variant:"elb_cicle",sx:{bg:t===i?"#F0B90B":"#E6E8EA"}},E(g.Z,{tx:"editAdv",variant:"elb_cicle_c"}))))),E(f.Z,{flexDirection:"column",alignItems:"flex-start",ml:"12px"},r.map(((e,i)=>E(v.Z,{key:i,sx:{color:t===i?"#D0980B":"#1E2026",mt:0===i?"-4px":0,height:"20px",lineHeight:"20px",mb:4===i?0:"20px",wordBreak:"break-all",cursor:"pointer","&:hover":{color:"#F0B90B"}},onClick:()=>{o(i)}},e))))))};var S=i("OaRt"),C=o().createElement;function k({tranPrice:e}){const[t]=(0,l.$)(),{isMobile:i}=(0,s.useSelector)((e=>e.common)),{tradeType:r,advData:o,quotedPriceDate:n}=(0,s.useSelector)((e=>e.editAdv)),{priceScale:c,fiatScale:d}=o,p=(0,a.useMemo)((()=>"BUY"===r?t("c2c-ui-pc-post-step1-label-highestPrice"):"SELL"===r?t("c2c-ui-pc-post-step1-label-lowestPrice"):null),[t,r]);return C(f.Z,{tx:"editAdv",variant:"col1",id:"c2c_advDetail_level1"},C(f.Z,{tx:"editAdv",variant:"col1_F1"},i?null:C(v.Z,{color:"BUY"===r?"secondary":"#F84960"},r),i?null:C(v.Z,{tx:"editAdv",variant:"p1",mt:"10px"},o.asset,"/",o.fiatUnit),i?C(g.Z,{sx:{width:"100%",pb:"10px",borderBottom:"1px dashed #EAECEF"}},"BUY"===o.tradeType?t("c2c-ui-trade-buy-maintitle").replace("{BTC}",` ${o.asset} `).replace("{CNY}",` ${o.fiatUnit} `):t("c2c-ui-trade-sell-maintitle").replace("{BTC}",` ${o.asset} `).replace("{CNY}",` ${o.fiatUnit} `)):null),C(f.Z,{tx:"editAdv",variant:"col1_F2"},C(f.Z,{tx:"editAdv",variant:"col1_F2_box",sx:{alignItems:i?"flex-end":"flex-start"}},C(v.Z,{tx:"editAdv",variant:"p1_t"},p),C(v.Z,{tx:"editAdv",variant:"p1",sx:{fontSize:i?"16px":"24px"}},o.fiatSymbol," ",(0,S.xG)(n.referencePrice,(0,S.mK)(c)))),C(f.Z,{tx:"editAdv",variant:"col1_F2_box"},C(v.Z,{tx:"editAdv",variant:"p1_t"},t("c2c-ui-pc-myposts-tabletop-price")),C(v.Z,{tx:"editAdv",variant:"p1"},o.fiatSymbol," ",(0,S.xG)(e[1],(0,S.mK)(c))," "))))}const w=o().memo(k);var T=i("xJ8I"),M=i("3wcf"),L=i("D57K"),B=i("09Mm");const D=function(e){return o().createElement(B.Z,(0,L.__assign)({width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none"},e),o().createElement("path",{d:"M2 7.25h12v1.5H2v-1.5z",fill:"currentColor"}),o().createElement("path",{d:"M8.75 2v12h-1.5V2h1.5z",fill:"currentColor"}))};var F=(0,a.forwardRef)((function(e,t){var i=e.value,r=void 0===i?"":i,a=e.disabled,n=void 0!==a&&a,c=e.infoText,s=void 0===c?"":c,l=e.error,d=void 0!==l&&l,p=e.errorText,u=void 0===p?"":p,m=e.reduceHandle,x=e.addHandle,v=e.changHandle,g={width:"24px",height:"24px",ml:"4px",borderRadius:"4px",cursor:"pointer",border:"1px solid #E6E8EA",":hover":{bg:"#F0B90B",color:"white",border:"1px solid #F0B90B"}};return o().createElement(f.Z,{ref:t,flexWrap:"wrap",width:"100%"},o().createElement(T.Z,{variant:"outlineLarge",disabled:n,labelFixed:!0,placeholder:"",error:d,errorText:u,infoText:s,value:r,sx:{width:["230px","200px"],textAlign:"center"},prefix:o().createElement(f.Z,{sx:g,alignItems:"center",onClick:function(){m&&m()}},o().createElement(M.Z,{size:16,m:"auto"})),suffix:o().createElement(f.Z,{sx:g,alignItems:"center",onClick:function(){x&&x()}},o().createElement(D,{size:16,m:"auto"})),onChange:function(e){v&&v(e.currentTarget.value)}}))}));F.displayName="AdjustTextField";const R=F;var P=i("189K"),_=o().createElement;function I({price:e,changePrice:t,priceFloatingRatio:i,tranPrice:r,setPriceFloating:o,priceErrorMessage:n,setMessage:c}){const[d]=(0,l.$)(),{advData:u,advGlobalCfgDate:m,priceType:x}=(0,s.useSelector)((e=>e.editAdv)),{priceScale:g}=u,{floatingPriceRatioLowerLimit:h,floatingPriceRatioUpperLimit:b}=m,y=(0,a.useCallback)((()=>{i>0&&o(new(p())(i).minus(.01).toFixed(2))}),[o,i]),A=(0,a.useCallback)((()=>{i>=0&&""!==i&&o(new(p())(i).plus(.01).toFixed(2))}),[o,i]),E=(0,a.useCallback)((e=>{e=e.replace("%",""),i===e&&(e=e.substr(0,e.length-1)),/^-?\d+\.?\d{0,2}$/.test(e)&&o(e),e||o("")}),[o,i]),Z=(0,a.useCallback)((()=>{e>0&&t(new(p())(e).minus(.01).toFixed(g))}),[t,e,g]),C=(0,a.useCallback)((()=>{e>=0&&""!==e&&t(new(p())(e).plus(.01).toFixed(g))}),[t,e,g]),k=(0,a.useCallback)((e=>{new RegExp(`^-?\\d+\\.?\\d{0,${g}}$`).test(e)&&t(e),e||t("")}),[t,g]);return(0,a.useEffect)((()=>{2===x&&c(i<h||i>b?d("c2c-ui-pc-post-step1-floatingPriceMargin-error1").replace("%1$s",h).replace("%2$s",b):null)}),[x,i,h,b,d]),(0,a.useEffect)((()=>{1===x&&!1===isNaN(r[2])&&!1===isNaN(r[3])&&(e<r[2]||e>r[3]?c(d("c2c-ui-pc-post-step1-fixedPrice-error4").replace("%@",new(p())(r[2]).toFixed(g,1)).replace("%2@",new(p())(r[3]).toFixed(g,1))):c(null))}),[g,x,e,d]),_(f.Z,{tx:"editAdv",variant:"editBodyBox"},_(v.Z,{tx:"editAdv",variant:"p2_t"},d(1===x?"c2c-ui-pc-post-step1-radio-fixed":"c2c-ui-pc-post-step1-label-floatingPriceMargin")),2===x?_(R,{value:i?`${i}%`:"",reduceHandle:y,addHandle:A,changHandle:E,error:n,errorText:n}):null,1===x?_(R,{value:e,reduceHandle:Z,addHandle:C,changHandle:k,error:n,errorText:n}):null,2===x?_(f.Z,{sx:{mt:"8px",flexDirection:["column","row","row"],alignItems:["flex-start","center","center"]}},_(P.Z,{placement:"top",tip:d("c2c-ui-pc-post-step1-tooltips-priceFormula")},_(v.Z,{sx:{color:"#48515D",borderBottom:"1px dashed #48515D",mr:"8px"}},d("c2c-ui-pc-post-step1-label-priceFormula"))),_(f.Z,{alignItems:"center"},_(v.Z,{color:"#5E6673",mr:"4px"},`${(0,S.xG)(r[0],(0,S.mK)(g))} * ${i}% \u2248  `),_(v.Z,null,(0,S.xG)(r[1],(0,S.mK)(g))))):null)}const U=o().memo(I);var $=i("RPIV");const N=function(e){return o().createElement(B.Z,(0,L.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor"},e),o().createElement("path",{d:"M12.7 11.3c.8.8.8 2.1 0 2.9l-2.6 2.6c-.8.8-2.1.8-3 0-.8-.8-.8-2.1 0-3l.3-.3c-.3-.7-.5-1.5-.5-2.3l-1.2 1.2c-1.6 1.6-1.6 4.2 0 5.8 1.6 1.6 4.2 1.6 5.8 0l2.6-2.6c.3-.3.5-.6.7-.9.9-1.5.7-3.6-.7-4.9l-1.4 1.5z",fill:"currentColor"}),o().createElement("path",{d:"M11.3 12.7c-.8-.8-.8-2.1 0-2.9l2.6-2.6c.8-.8 2.1-.8 3 0 .8.8.8 2.1 0 3l-.3.3c.3.7.5 1.5.5 2.3l1.2-1.2c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0L9.9 8.4c-.3.3-.5.6-.7.9-.9 1.5-.7 3.6.7 4.9l1.4-1.5z",fill:"currentColor"}))};var z=o().createElement;function H({bt1Info:e="",bt2Info:t="",bt1Error:i=!1,bt2Error:r=!1,bt1ErrorMessage:o="",bt2ErrorMessage:n="",bt1Disabled:c=!1,bt2Disabled:s=!1,bt1Palace:d="",bt2Palace:p="",relationIcon:u="linkage",bt1Val:m="",bt2Val:x="",bt1ChangeHandle:h,bt2ChangeHandle:b,bt1Suffix:y=null,bt2Suffix:A=null}){const[E]=(0,l.$)(),Z=(0,a.useMemo)((()=>({linkage:z(N,{size:"24px",sx:{transform:"rotate(45deg)",mx:[0,"8px"],mt:"12px",color:"#848E9C"}}),together:z(v.Z,{sx:{fontSize:"28px",color:"#848E9C",mx:["4px","12px"],mt:"2px"}}," ~ ")}[u])),[u]);return z(f.Z,{width:"100%"},z(g.Z,{height:"70px"},z(T.Z,{boxProps:{width:["100%","240px"]},variant:"outlineLarge",disabled:c,labelFixed:!0,placeholder:E("c2c-ui-pc-post-step2-placeholder-amount")||d,error:i,errorText:o,infoText:e,suffix:y,value:m,onChange:e=>{h&&h(e.currentTarget.value)}})),Z,z(g.Z,{height:"70px"},z(T.Z,{boxProps:{width:["100%","240px"]},variant:"outlineLarge",disabled:s,labelFixed:!0,placeholder:p,error:r,errorText:n,infoText:t,suffix:A,defaultValue:x,value:x,onChange:e=>{b&&b(e.currentTarget.value)}})))}const Y=o().memo(H);var V=o().createElement;function j({tranPrice:e,initAmount:t,setAmount:i,amountError:r,setAmountError:n}){const[c]=(0,l.$)(),{advData:d,tradeType:u}=(0,s.useSelector)((e=>e.editAdv)),{userAsset:m}=(0,s.useSelector)((e=>e.common)),x=(0,s.useSelector)((e=>e.loading.effects.editAdv.postAdvDetail)),g=(0,s.useSelector)((e=>e.loading.effects.common.getUserAsset)),{asset:h,assetScale:b,fiatUnit:y,fiatScale:A}=d,E=(0,a.useMemo)((()=>{var e;return m&&m.length>0?new(p())(null===(e=m.filter((e=>e.asset===h))[0])||void 0===e?void 0:e.free).plus(d.surplusAmount).toFixed(b,1):0}),[h,m,b,d]),Z=(0,a.useCallback)((e=>{new RegExp(`^-?\\d+\\.?\\d{0,${b}}$`).test(e)&&i(e),e||i("")}),[u,i,b]),S=(0,a.useCallback)((()=>{"SELL"===u&&i(E)}),[u,E,i]),C=(0,a.useMemo)((()=>"SELL"===u?V($.Z,{type:"button",variant:"quiet",onClick:S},c("c2c-ui-trade-all")):null),[u,S,c]),k=(0,a.useMemo)((()=>V(f.Z,{alignItems:"center"},C,V(v.Z,{mr:"10px"},h))),[h,C]),w=(0,a.useMemo)((()=>t?new(p())(t).multipliedBy(e[1]).toFixed(A):0),[e,t,A]);return(0,a.useEffect)((()=>{if(!x&&!g){if(!t||0==t)return void n(c("c2c-ui-pc-post-step2-placeholder-amount"));if("SELL"===u&&Number(t)>Number(E))return void n(c("c2c-ui-pc-post-step2-amount-error2"));n(null)}}),[t,u,E,x,g,c]),V(o().Fragment,null,V(v.Z,{tx:"editAdv",variant:"p2_t"},c("c2c-adv-fee-edit-total-amount")),V(f.Z,{sx:{height:"70px",flexDirection:"column",width:"100%"}},V(T.Z,{boxProps:{height:"40px",width:["100%","520px"]},variant:"outlineLarge",labelFixed:!0,placeholder:c("c2c-ui-pc-post-step2-placeholder-amount"),error:!!r,errorText:r,suffix:k,value:t,onChange:e=>{Z&&Z(e.currentTarget.value)}}),r?null:V(f.Z,{sx:{mt:"6px",alignItems:"center",justifyContent:"space-between",width:["100%","520px"]}},"SELL"===u?V(f.Z,{alignItems:"center"},V(v.Z,{color:"#76808F",fontSize:"12px"},`${c("c2c-ui-trade-sell-balance")}: `),V(v.Z,{color:"#1E2026",fontSize:"12px",ml:"4px"},E),V(v.Z,{color:"#1E2026",fontSize:"12px",ml:"2px"},h)):V(v.Z,null),V(v.Z,{fontSize:"12px",color:"#76808F"},`\u2248 ${w} ${y}`))))}function G({tranPrice:e,initAmount:t,minSingleTransAmount:i,setMinAmount:r,maxSingleTransAmount:n,setMaxAmount:c,minLimitError:d,setMinError:u,maxLimitError:m,setMaxError:x}){const[f]=(0,l.$)(),g=(0,s.useSelector)((e=>e.loading.effects.editAdv.postAdvDetail)),h=(0,s.useSelector)((e=>e.loading.effects.editAdv.postAdvTransAmountLimit)),{advData:b,advAmountCfgDate:y,quotedPriceDate:A}=(0,s.useSelector)((e=>e.editAdv)),{fiatUnit:E,fiatScale:Z}=b,{fiatTransAmountLowerLimit:S,fiatTransAmountUpperLimit:C}=y,k=(0,a.useMemo)((()=>t?new(p())(t).multipliedBy(e[1]).toFixed(Z):0),[e,t,Z]),w=(0,a.useCallback)((e=>{new RegExp(`^-?\\d+\\.?\\d{0,${null===A||void 0===A?void 0:A.currencyScale}}$`).test(e)&&r(e),e||r("")}),[r,null===A||void 0===A?void 0:A.currencyScale]),T=(0,a.useCallback)((e=>{new RegExp(`^-?\\d+\\.?\\d{0,${null===A||void 0===A?void 0:A.currencyScale}}$`).test(e)&&c(e),e||c("")}),[c,null===A||void 0===A?void 0:A.currencyScale]);return(0,a.useEffect)((()=>{if(!g&&!h){if(!i||0==i)return void u(f("c2c-ui-pc-post-step2-minLimit-error1"));if(u(null),S&&S>=0&&i<S)return void u(f("c2c-ui-pc-post-step2-orderLimit-error3").replace("{--}",S));if(u(null),!n||0==n)return void x(f("c2c-ui-pc-post-step2-maxLimit-error1"));if(x(null),C&&C>0&&n>C)return void x(f("c2c-ui-pc-post-step2-orderLimit-error4").replace("{--}",C));if(x(null),Number(i)>Number(n))return void u(f("c2c-ui-pc-post-step2-orderLimit-error2"));if(u(null),Number(i)>k)return void u(f("c2c-ui-pc-post-step2-orderLimit-error5"));u(null)}}),[i,n,k,null===A||void 0===A?void 0:A.currencyScale,S,C,f,u,x,g,h]),V(o().Fragment,null,V(v.Z,{tx:"editAdv",variant:"p2_t",sx:{mt:"16px"}},f("c2c-ui-pc-post-step2-label-orderLimit")),V(Y,{bt1Info:"",bt2Info:"",bt1Error:!!d,bt2Error:!!m,bt1ErrorMessage:d,bt2ErrorMessage:m,bt1Disabled:!1,bt2Disabled:!1,bt1Palace:f("c2c-ui-pc-post-step2-placeholder-minLimit"),bt2Palace:f("c2c-ui-pc-post-step2-placeholder-maxLimit"),relationIcon:"together",bt1Val:i,bt2Val:n,bt1Suffix:V(v.Z,{mr:"10px"},E),bt2Suffix:V(v.Z,{mr:"10px"},E),bt1ChangeHandle:w,bt2ChangeHandle:T}))}var q=i("xtUa"),K=i("If2F"),W=i("OFKq"),O=i("P+tR"),X=i("IRE/"),J=i("PAqe"),Q=o().createElement;const ee=function({setTradeError:e}){const[t]=(0,l.$)(),i=(0,s.useDispatch)(),{advGlobalCfgDate:r,tradeType:n,tradeMethods:c}=(0,s.useSelector)((e=>e.editAdv)),{maxPayMethodCount:d}=r,{newMethodList:p,userAllPayList:u}=(0,s.useSelector)((e=>e.common)),m=(0,a.useCallback)((e=>{const t=c.concat();t.splice(e,1),i.editAdv.update({tradeMethods:t})}),[i.editAdv,c]),x=(0,a.useCallback)((()=>{(0,X.mW)({t:t,methodList:p,defaultTradeMethods:[],onSelected:e=>{for(let t=0;t<p.length;t++)if(e===p[t].identifier){if(c.every((t=>t.identifier!==e))){const e=c.concat();e.push(p[t]),i.editAdv.update({tradeMethods:e})}return}}})}),[X.mW,t,p,c,i.editAdv]),h=(0,a.useMemo)((()=>{if("BUY"===n){const e=c.map(((e,t)=>{const{identifier:i,tradeMethodBgColor:r,tradeMethodName:a,name:o}=e;return Q(f.Z,{tx:"editAdv",variant:"paymentBoxBuyFlex",key:i,sx:{}},Q(g.Z,{tx:"editAdv",variant:"payBuyName",sx:{color:r}},a||o),Q(W.Z,{sx:{cursor:"pointer",color:"#76808E"},onClick:()=>{m(t)},size:12}))}));return Q(o().Fragment,null,e,c.length<d?Q(g.Z,{tx:"editAdv",variant:"BoxBuyAdd",onClick:x},"+ Add"):null)}}),[n,c,d,m,x]),b=(0,a.useCallback)((()=>{(0,J.mW)({t:t,paymentList:u,refresh:()=>i.common.getUserAllPayment(),onSelected:e=>{for(let t=0;t<u.length;t++)if(e===u[t].id){let r=!0;for(let t=0;t<c.length;t++){if((c[t].payId||c[t].id)==e){r=!1;break}}if(r){const e=c.concat();e.push(u[t]),i.editAdv.update({tradeMethods:e})}return}}})}),[t,J.mW,u,c,i.common,i.editAdv]),y=(0,a.useMemo)((()=>{if("SELL"===n){const e=c.map(((e,t)=>{const{payId:i,id:r,tradeMethodBgColor:a}=e,o=i||r;let n={};for(let c=0;c<u.length;c++)u[c].id===o&&(n=u[c]);return Q(f.Z,{tx:"editAdv",variant:"paymentBoxSellFlex",key:o},Q(f.Z,{justifyContent:"space-between",mb:"8px"},Q(f.Z,{alignItems:"center"},Q(g.Z,{sx:{color:a,fontWeight:500,p:"2px 8px",bg:"#FAFAFA",borderRadius:"2px",maxWidth:["250px","500px","700px"],overflow:"hidden",textOverflow:"ellipsis",wordBreak:"keep-all",whiteSpace:"nowrap"}},n.tradeMethodName),Q(v.Z,{ml:"8px"},n.payee)),Q(W.Z,{sx:{cursor:"pointer"},onClick:()=>{m(t)},size:12})),Q(O.Z,{item:n,needCopy:!1}))}));return Q(o().Fragment,null,e,c.length<d?Q(g.Z,{tx:"editAdv",variant:"BoxBuyAdd",onClick:b},"+ Add"):null)}}),[n,c,d,u,m,b]),A=(0,a.useMemo)((()=>"BUY"===n?h:y),[h,y]),E=(0,a.useMemo)((()=>0===c.length?Q(v.Z,{mt:"5px",mb:"20px",color:"#D9304E"},t("c2c-ui-pc-post-step2-payment-arror1")):Q(v.Z,{mt:"5px",mb:"20px"},t("c2c-ui-pc-post-step2-description-payment").replace("{XX}",d))),[t,c,d]);return(0,a.useEffect)((()=>{c.length<1?e(!0):e(null)}),[c,e]),Q(o().Fragment,null,Q(f.Z,{tx:"editAdv",variant:"paymentBox",flexDirection:"BUY"===n?"row":"column"},A),E)};var te=o().createElement;const ie=function({setTradeError:e}){const[t]=(0,l.$)(),i=(0,s.useDispatch)(),{payTimeLimit:r}=(0,s.useSelector)((e=>e.editAdv)),{timeLimit:o}=(0,s.useSelector)((e=>e.postAd)),n=(0,a.useMemo)((()=>{const e={value:r,onChange:e=>{i.editAdv.update({payTimeLimit:e})},optionList:o.map((e=>({value:+e.value,label:t(e.label)})))};return te(q.Z,{value:e.value,sx:{borderColor:"lines.primary",width:"130px",pr:"40px"},onValueChange:t=>{e.onChange(t)}},e.optionList.map((({label:e,value:t})=>te(K.Z,{key:e,value:+t},e))))}),[i.editAdv,r,t,o]);return te(f.Z,{tx:"editAdv",variant:"editBodyBox",id:"c2c_advDetail_level3"},te(f.Z,{mb:"6px"},te(v.Z,{tx:"editAdv",variant:"p2_t",mb:0},t("c2c-ui-pc-post-step2-label-payment"))),te(ee,{setTradeError:e}),te(v.Z,{tx:"editAdv",variant:"p2_t"},t("c2c-ui-pc-post-step2-label-paymentTimeLimit")),n)};var re=o().createElement;function ae({remarks:e,setRemarks:t,autoReplyMsg:i,setReply:r}){const[a]=(0,l.$)(),{isMobile:o}=(0,s.useSelector)((e=>e.common)),n={border:"1px solid #EAECEF",resize:"none",fontSize:"14px",width:o?"95%":"98%",marginLeft:"-2px",padding:"8px"};return re(f.Z,{tx:"editAdv",variant:"editBodyBox",id:"c2c_advDetail_level4"},re(v.Z,{tx:"editAdv",variant:"p2_t"},a("c2c-ui-pc-post-step3-label-remarks")),re("textarea",{rows:"5",maxLength:1e3,style:n,placeholder:a("c2c-ui-pc-post-step3-placeholder-remarks"),onChange:e=>t(e.target.value),value:e}),re(f.Z,{width:"100%",justifyContent:"flex-end"},re(v.Z,{color:"#48515D"},e&&e.length||"0","/1000")),re(v.Z,{tx:"editAdv",variant:"p2_t",mt:"8px"},a("c2c-ui-pc-post-step3-label-autoReply")),re("textarea",{rows:"5",maxLength:1e3,style:n,placeholder:a("c2c-ui-pc-post-step3-placeholder-autoReply"),onChange:e=>r(e.target.value),value:i}),re(f.Z,{width:"100%",justifyContent:"flex-end"},re(v.Z,{color:"#48515D"},i&&i.length||"0","/1000")))}const oe=o().memo(ae);var ne=i("3Dfw"),ce=i("ozMS"),se=i("7fF7"),le=o().createElement;const de=function(){const[e]=(0,l.$)(),t=(0,s.useDispatch)(),{0:i,1:r}=(0,a.useState)(!1),{0:o,1:n}=(0,a.useState)(!1),{conditionChecked:c,buyerRegDaysLimit:d,balanceChecked:p,buyerBtcPositionLimit:u,advGlobalCfgDate:m}=(0,s.useSelector)((e=>e.editAdv)),{userBtcHoldingRcmdValue:x,userBtcHoldingUpperLimit:h,userRegisterDaysRcmdValue:b,userRegisterDaysUpperLimit:y}=m,A=(0,a.useCallback)((e=>t.editAdv.update(e)),[t.editAdv]),E=(0,a.useCallback)((e=>{!e.target.checked||d?A({conditionChecked:e.target.checked}):A({buyerRegDaysLimit:b,conditionChecked:e.target.checked})}),[A,b,d]),Z=(0,a.useCallback)((e=>{if(!e.currentTarget.value)return void A({buyerRegDaysLimit:""});const t=Number(e.currentTarget.value);se.Z.positiveNum.test(t)?A({buyerRegDaysLimit:t}):0!==t&&"0"!==t||A({buyerRegDaysLimit:0})}),[A]),S=(0,a.useCallback)((e=>{!e.target.checked||u?A({balanceChecked:e.target.checked}):A({balanceChecked:e.target.checked,buyerBtcPositionLimit:x})}),[A,x,u]),C=(0,a.useCallback)((e=>{const t=new RegExp("^-?\\d+\\.?\\d{0,4}$"),i=e.currentTarget.value;i?0!==i&&"0"!==i?t.test(i)&&A({buyerBtcPositionLimit:i}):A({buyerBtcPositionLimit:0}):A({buyerBtcPositionLimit:""})}),[A]);return(0,a.useEffect)((()=>{if(c){if(!d&&0!==d)return void r(e("c2c-ui-pc-post-step3-checkbox-registeredDays-error1"));if(d>y)return void r(e("c2c-ui-pc-post-step3-checkbox-registeredDays-error2").replace("{XX}",y))}r(!1)}),[c,d,y,e]),(0,a.useEffect)((()=>{if(p){if(!u||0==u)return void n(e("c2c-ui-pc-post-step3-checkbox-holdinigBTC-error2-empty"));if(u>h)return void n(e("c2c-ui-pc-post-step3-checkbox-holdinigBTC-error1").replace("{XX}",h))}n(!1)}),[p,u,h,e]),le(f.Z,{id:"c2c_advDetail_level5",tx:"editAdv",variant:"editBodyBox",sx:{pb:"14px"}},le(v.Z,{tx:"editAdv",variant:"p2_t"},e("c2c-ui-pc-post-step3-label-userConditions")),le(f.Z,{alignItems:"center",mb:"15px"},le(ne.Z,{id:"kycCheck",name:"kycCheck",defaultChecked:!0,disabled:!0}),le(v.Z,null,e("c2c-ui-pc-post-step3-checkbox-completedKYC"))),le(f.Z,{flexDirection:"column",mb:"5px"},le(f.Z,{alignItems:"center"},le(ce.Z,{width:"auto"},le(ne.Z,{id:"dayCheck",name:"dayCheck",checked:c,onChange:E}),le(v.Z,null,e("c2c-ui-pc-post-step3-checkbox-registered"))),le(T.Z,{boxProps:{sx:{mt:"-2px",mx:"5px"}},width:d?8*d.toString().length+12+"px":"20px",value:d,onChange:Z}),le(v.Z,null,e("c2c-ui-pc-post-step3-checkbox-registeredDays"))),le(g.Z,{sx:{height:"12px",visibility:i?"visible":"hidden",fontSize:"12px",color:"#D9304E"}},i)),le(f.Z,{flexDirection:"column"},le(f.Z,{alignItems:"center"},le(ce.Z,{width:"auto"},le(ne.Z,{id:"balanceCheck",name:"balanceCheck",checked:p,onChange:S}),le(v.Z,null,e("c2c-ui-pc-post-step3-checkbox-holdinigBTC"))),le(T.Z,{boxProps:{sx:{mt:"-2px",mx:"5px"}},width:u?8*u.toString().length+12+"px":"20px",value:u,onChange:C}),le(v.Z,null,"BTC")),le(g.Z,{sx:{height:"12px",visibility:o?"visible":"hidden",fontSize:"12px",color:"#D9304E"}},o)))};var pe=o().createElement;const ue=function({tranPrice:e,price:t=0,changePrice:i,priceFloatingRatio:r=100,setPriceFloating:a,initAmount:o,setAmount:n=(()=>{}),minSingleTransAmount:c,setMinAmount:s=(()=>{}),maxSingleTransAmount:l,setMaxAmount:d=(()=>{}),remarks:p,setRemarks:u=(()=>{}),autoReplyMsg:m,setReply:x=(()=>{}),priceErrorMessage:v,setMessage:h=(()=>{}),amountError:b,setAmountError:y=(()=>{}),minLimitError:A,setMinError:E=(()=>{}),maxLimitError:S,setMaxError:C=(()=>{}),setTradeError:k=(()=>{})}){return pe(g.Z,{tx:"editAdv",variant:"editBody"},pe(f.Z,{tx:"editAdv",variant:"editBodyMain"},pe(Z,null),pe(f.Z,{tx:"editAdv",variant:"editBody_right"},pe(w,{tranPrice:e}),pe(U,{tranPrice:e,price:t,changePrice:i,priceFloatingRatio:r,setPriceFloating:a,priceErrorMessage:v,setMessage:h}),pe(f.Z,{id:"c2c_advDetail_level2",tx:"editAdv",variant:"editBodyBox",sx:{pb:"4px"}},pe(j,{tranPrice:e,initAmount:o,setAmount:n,amountError:b,setAmountError:y}),pe(G,{tranPrice:e,initAmount:o,minSingleTransAmount:c,setMinAmount:s,maxSingleTransAmount:l,setMaxAmount:d,minLimitError:A,setMinError:E,maxLimitError:S,setMaxError:C})),pe(ie,{setTradeError:k}),pe(oe,{remarks:p,setRemarks:u,autoReplyMsg:m,setReply:x}),pe(de,null))))};var me=i("j/s1"),xe=i("g1g7"),fe=i("sNcw"),ve=o().createElement;const ge=me.ZP.div.withConfig({displayName:"ConfirmBox__SaveButton",componentId:"rf77l3-0"})(["font-weight:500px;width:",";background:",";cursor:",";color:",";height:40px;line-height:40px;text-align:center;border-radius:4px;"],(e=>e.isMobile?"118px":"200px"),(e=>e.noError?"linear-gradient(90deg, #F0B90B 0%, #FBDA3C 100%)":"#E6E8EA"),(e=>e.noError?"pointer":"default"),(e=>e.noError?"#212833":"#AEB4BC"));function he({advNo:e,price:t,priceFloatingRatio:i,initAmount:r,minSingleTransAmount:o,maxSingleTransAmount:n,remarks:c,autoReplyMsg:d,priceErrorMessage:p,amountError:m,minLimitError:x,maxLimitError:v,tradeMethodsError:g}){const{p2pAds:b}=h.Z.site(),y=(0,u.tv)(),[A]=(0,l.$)(),E=(0,s.useDispatch)(),{isMobile:Z,newMethodList:S}=(0,s.useSelector)((e=>e.common)),{showTwiceBox:C,advData:k,balanceChecked:w,buyerBtcPositionLimit:T,conditionChecked:M,buyerRegDaysLimit:L,payTimeLimit:B,tradeType:D,tradeMethods:F}=(0,s.useSelector)((e=>e.editAdv)),R=!p&&!g&&!m&!x&!v;let P={asset:k.asset,fiatUnit:k.fiatUnit,priceType:k.priceType,fiatScale:k.fiatScale,assetScale:k.assetScale,priceScale:k.priceScale,advNo:e,autoReplyMsg:d,initAmount:r,payTimeLimit:B,price:t,priceFloatingRatio:i,minSingleTransAmount:o,maxSingleTransAmount:n,remarks:c,tradeMethods:"BUY"===D?F:F.map((e=>({tradeMethodBgColor:e.tradeMethodBgColor,identifier:e.identifier,payAccount:e.payAccount,payBank:e.payBank,payId:e.payId,payMethodId:e.payMethodId||e.payId,paySubBank:e.paySubBank,payType:e.payType,tradeMethodName:e.tradeMethodName}))),tradeType:D};w&&T>0&&(P=Object.assign({},P,{buyerBtcPositionLimit:T})),M&&L>0&&(P=Object.assign({},P,{buyerRegDaysLimit:L}));const _=(0,a.useCallback)((async()=>{await xe.Z.info({title:A("c2c-ui-pc-myposts-editDetail-exitDialog-title"),message:A("c2c-ui-pc-myposts-editDetail-exitDialog-content"),confirmTxt:A("c2c-ui-pc-myposts-editDetail-exitDialog-btn-notNow"),cancelTxt:A("c2c-ui-pc-myposts-editDetail-exitDialog-btn-exit")})||y.push(b)}),[A]),I=(0,a.useCallback)((()=>{R&&E.editAdv.update({showTwiceBox:!C,advNewData:P})}),[Z,E.editAdv,C,P,R]);return ve(f.Z,{tx:"editAdv",variant:"editBodyBox_bottom"},ve(f.Z,{sx:{flexDirection:["column","row"],mx:"auto",width:"100%",maxWidth:"1136px",px:[0,"24px",0],justifyContent:["center","space-between"]}},ve(fe.Z,{tradeType:D,asset:k.asset,assetScale:k.assetScale,amount:r,paymentMethodsList:S}),ve(f.Z,{sx:{width:["100%","auto"],justifyContent:"center"}},ve($.Z,{variant:"outline",colorStyle:"second",width:["118px","200px"],mr:"8px",onClick:()=>{_()}},A("c2c-ui-pc-myposts-list-closeConfirm-dialog-btn-cancel")),ve(ge,{isMobile:Z,onClick:()=>{I()},noError:R},A("c2c-ui-pc-post-step3-btn-post")))))}const be=o().memo(he);var ye=i("/uJm"),Ae=i("xjo1"),Ee=i("nwlf"),Ze=i("rrXQ"),Se=i("Ne75"),Ce=o().createElement;const ke=function(){const{p2pAds:e}=h.Z.site(),t=(0,u.tv)(),[i]=(0,l.$)(),o=(0,s.useDispatch)(),{metaData:d,configs:f}=(0,a.useContext)(Se.Il),{isLoggedIn:v}=(0,x.b)(),{enqueueNotification:g}=(0,m.Z)(),{usdt2asset:b,newMethodList:y}=(0,s.useSelector)((e=>e.common)),{showTwiceBox:E,advData:Z,advNewData:S,priceType:C,exchangeRateDate:k,advGlobalCfgDate:w,tradeMethods:T}=(0,s.useSelector)((e=>e.editAdv)),{fixedPriceRatioLowerLimit:M,fixedPriceRatioUpperLimit:L}=w,{code:B}=(0,u.Hb)().query,{0:D,1:F}=(0,a.useState)(0),{0:R,1:P}=(0,a.useState)(0),{0:_,1:I}=(0,a.useState)(0),{0:U,1:$}=(0,a.useState)(0),{0:N,1:z}=(0,a.useState)(0),{0:H,1:Y}=(0,a.useState)(""),{0:V,1:j}=(0,a.useState)(""),{0:G,1:q}=(0,a.useState)(null),{0:K,1:W}=(0,a.useState)(null),{0:O,1:X}=(0,a.useState)(null),{0:J,1:Q}=(0,a.useState)(null),{0:ee,1:te}=(0,a.useState)(null);(0,n.Z)((()=>{o.common.getNewTradeMethodList()})),(0,a.useEffect)((()=>{B&&/^\d{1,}$/.test(B)||(window.location.href="/not-found")}),[B]),(0,a.useEffect)((()=>{if(Z.fiatUnit&&Z.asset&&Z.tradeType){const e={fiat:Z.fiatUnit,asset:Z.asset,tradeType:Z.tradeType};o.postAd.getTimeLimit(e)}}),[Z.asset,Z.fiatUnit,Z.tradeType]);const ie=(0,Ee.Z)({usdt2asset:b,asset:Z.asset,exchangeRateDate:k,fiat:Z.fiatUnit,rate:1===C?100:R,priceType:C,price:D,fixedPriceUpperLimit:L,fixedPriceLowerLimit:M});(0,a.useEffect)((()=>{F(Z.price),Z.priceFloatingRatio&&2===Z.priceType&&P(new(p())(Z.priceFloatingRatio).toFixed(2))}),[Z.price,Z.priceFloatingRatio,Z.priceType]),(0,a.useEffect)((()=>{!1===v&&(0,Ze.GL)()}),[v]),(0,a.useEffect)((()=>{v&&(o.editAdv.getExchangeRateList(),o.common.getUserMigrateQueryStatus())}),[v]),(0,a.useEffect)((()=>{v&&B&&async function(){const{data:e}=await o.editAdv.postAdvDetail({advNo:B});e&&null!==e&&void 0!==e&&e.tradeType||(window.location.href="/not-found")}()}),[v,B]),(0,a.useEffect)((()=>{v&&Z&&o.editAdv.getAdvGlobalConfig({fiat:Z.fiatUnit})}),[v,Z]),(0,a.useEffect)((()=>{v&&B&&Z&&(o.editAdv.postQuotedPrice({assets:[Z.asset],fiatCurrency:Z.fiatUnit,tradeType:Z.tradeType}),o.editAdv.postAdvTransAmountLimit({asset:Z.asset,fiatCurrency:Z.fiatUnit,limitScene:Z.classify}),"SELL"===Z.tradeType&&(o.common.getUserAllPayment(),o.common.getUserAsset()),o.common.getWebsocketCurrencyRate([Z.asset]))}),[v,B,Z,o.editAdv,o.common]),(0,a.useEffect)((()=>{I(new(p())(Z.surplusAmount).toFixed(Z.assetScale)),$(new(p())(Z.minSingleTransAmount)),z(new(p())(Z.maxSingleTransAmount)),Y(Z.remarks||""),j(Z.autoReplyMsg||"")}),[Z.surplusAmount,Z.assetScale,Z.minSingleTransAmount,Z.maxSingleTransAmount,Z.remarks,Z.autoReplyMsg]);const re=(0,a.useCallback)((()=>{o.editAdv.update({showTwiceBox:!1})}),[o.editAdv]);return(0,a.useEffect)((()=>{if(Z.asset,Z.fiatUnit&&("BUY"===Z.tradeType&&o.common.getCommissionRate({asset:Z.asset,fiat:Z.fiatUnit,tradeMethodIdentifiers:T.length>0?T.map((e=>e.identifier)):[],tradeType:"BUY"}),"SELL"===Z.tradeType)){let e=[],t={};for(let i=0;i<T.length;i++)t[T[i].identifier]||(e.push(T[i].identifier),t[T[i].identifier]=!0);o.common.getCommissionRate({asset:Z.asset,fiat:Z.fiatUnit,tradeMethodIdentifiers:e,tradeType:"SELL"})}}),[Z.asset,Z.fiatUnit,Z.tradeType,T]),Ce(c.Z,{metaData:d,configs:f,withFooter:!1},Ce(Ae.Z,{linkType:"advEdit"}),Ce(A,null),v&&Ce(ue,{tranPrice:ie,price:D,changePrice:F,priceFloatingRatio:R,setPriceFloating:P,initAmount:_,setAmount:I,minSingleTransAmount:U,setMinAmount:$,maxSingleTransAmount:N,setMaxAmount:z,remarks:H,setRemarks:Y,autoReplyMsg:V,setReply:j,priceErrorMessage:G,setMessage:q,amountError:K,setAmountError:W,minLimitError:O,setMinError:X,maxLimitError:J,setMaxError:Q,setTradeError:te}),v&&Ce(be,{advNo:B,price:D,priceFloatingRatio:R,initAmount:_,minSingleTransAmount:U,maxSingleTransAmount:N,remarks:H,autoReplyMsg:V,priceErrorMessage:G,amountError:K,minLimitError:O,maxLimitError:J,tradeMethodsError:ee}),Ce(ye.Z,{dispatch:o,price:ie,show:E,data:S,closeHandle:re,confirmHandle:async a=>{const{success:n,message:c,code:s}=await o.editAdv.postAdvUpdate((0,r.Z)((0,r.Z)((0,r.Z)({},S),a),{},{tradeMethods:"BUY"===Z.tradeType?S.tradeMethods:S.tradeMethods.map((e=>({identifier:e.identifier,payId:e.payMethodId,payType:e.payType}))),priceFloatingRatio:1===Z.priceType?"":S.priceFloatingRatio,initAmount:new(p())(Z.initAmount).plus(S.initAmount).minus(Z.surplusAmount).toFixed(Z.assetScale,1)}));return n&&(g(i("c2c-ui-pc-post-confirm-toast-postSuccess"),{variant:"success",autoHideDuration:1e3,anchorOrigin:{vertical:"top",horizontal:"right"}}),t.push(e)),o.editAdv.update({showTwiceBox:!1}),{success:n,message:c,code:s}},paymentMethodsList:y}))}}}]);