(self["webpackJsonp_trade-spot"]=self["webpackJsonp_trade-spot"]||[]).push([[909],{b0a3:(e,t,n)=>{"use strict";n.d(t,{Dr:()=>s,L2:()=>o});var r=n("D57K"),a=n("CtoH"),i=n("7pGL"),s=function(e){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var t,n,s,o,l;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:t=[],r.label=1;case 1:return r.trys.push([1,3,,4]),[4,(0,a.U2)("/bapi/margin/v1/private/isolated-margin/isolated-margin-account-details"+(0,i.X)(e))];case 2:return n=r.sent(),s=n.success,o=n.data,l=void 0===o?[]:o,s&&(t=l),[3,4];case 3:return r.sent(),[3,4];case 4:return[2,t]}}))}))},o=function(e){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var t,n,i,s,o;return(0,r.__generator)(this,(function(l){switch(l.label){case 0:t={total:0},l.label=1;case 1:return l.trys.push([1,3,,4]),[4,(0,a.v_)("/bapi/composite/v1/private/promo/voucher/pageQuery",(0,r.__assign)({voucherStatus:"ENABLE",voucherSubType:"MARGIN_LOAN"},e))];case 2:return n=l.sent(),i=n.success,s=n.data,o=void 0===s?{total:0}:s,i&&(t=o),[3,4];case 3:return l.sent(),[3,4];case 4:return[2,t]}}))}))}},G3LC:(e,t,n)=>{"use strict";n.d(t,{bs:()=>i,T$:()=>s,J2:()=>o});var r=n("D57K"),a=n("CtoH"),i=function(e){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var t;return(0,r.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,a.v_)("/bapi/margin/v1/private/isolated-margin/borrow",e)];case 1:return[2,n.sent()];case 2:throw t=n.sent(),new Error(t.message);case 3:return[2]}}))}))},s=function(e,t){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var n,i;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:n="0",r.label=1;case 1:return r.trys.push([1,3,,4]),[4,(0,a.U2)("/bapi/margin/v1/private/isolated-margin/borrowable/"+t+"?asset="+e)];case 2:return i=r.sent().data,n=i||"0",[3,4];case 3:return r.sent(),[3,4];case 4:return[2,n]}}))}))},o=function(e){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var t;return(0,r.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,a.v_)("/bapi/margin/v1/private/isolated-margin/repay",e)];case 1:return[2,n.sent()];case 2:throw t=n.sent(),new Error(t.message);case 3:return[2]}}))}))}},U1z1:(e,t,n)=>{"use strict";n.d(t,{g:()=>i,d:()=>s});var r=n("D57K"),a=n("CtoH"),i=function(e){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var t,n,i,s,o,l,u,c;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:t=!1,n="",r.label=1;case 1:return r.trys.push([1,3,,4]),[4,(0,a.v_)("/bapi/margin/v1/private/isolated-margin/manual-liquidation/"+e)];case 2:return i=r.sent(),s=i.success,o=i.message,t=s,n=o,[3,4];case 3:return l=r.sent(),n=null!==(c=null===(u=l.errorMsg)||void 0===u?void 0:u.message)&&void 0!==c?c:l.message,[3,4];case 4:return[2,[t,n]]}}))}))},s=function(){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var e,t;return(0,r.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,a.U2)("/bapi/margin/v1/public/isolated-margin/pair/coeff")];case 1:return e=n.sent(),t=e.data,e.success?[2,t]:[3,3];case 2:return n.sent(),[2,[]];case 3:return[2]}}))}))}},DYRu:(e,t,n)=>{"use strict";n.d(t,{nd:()=>i,s$:()=>s,aA:()=>o,mA:()=>l});var r=n("CtoH"),a={CROSS_LIST_ALL:"/bapi/margin/v1/friendly/margin/vip/spec/list-all",CROSS_MAX_BORROW:"/bapi/margin/v1/private/margin/max-borrow",ISOLATED_MAX_BORROW:"/bapi/margin/v1/public/isolated-margin/pair/vip-level"},i=function(e){return void 0===e&&(e=[]),(0,r.U2)(a.CROSS_MAX_BORROW+"?assets="+e.join(","))},s=function(){return(0,r.U2)(a.CROSS_LIST_ALL)},o=function(){return(0,r.U2)(a.ISOLATED_MAX_BORROW)},l=function(e){return(0,r.U2)("/bapi/margin/v2/public/asset-service/product/get-product-by-symbol?symbol="+e)}},"h5t/":(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r,a=n("D57K"),i=n("/SIk"),s=n.n(i),o=n("7nmT"),l=n("hXPd"),u={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},c=(0,i.memo)((function(e){var t=e.show,n=void 0===t||t,r=e.fullScreen,i=void 0!==r&&r,o=e.inner,c=e.children,d=e.zIndex;if(!n)return c||null;var p=s().createElement(l.Z,{sx:(0,a.__assign)({zIndex:d||"100"},u)});return i?s().createElement(s().Fragment,null,c,s().createElement("div",{style:{position:o?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",background:"radial-gradient(rgba(0, 0, 0, 0.05) 30%, transparent)",zIndex:2e3}},p)):s().createElement(s().Fragment,null,c,p)}));c.show=function(e){var t=(void 0===e?{}:e).fullScreen,n=void 0!==t&&t;r||(r=document.createElement("div"),document.body.appendChild(r)),o.render(s().createElement(c,{fullScreen:n}),r)},c.hide=function(){r&&o.render(s().createElement(c,{show:!1}),r)};const d=c},EXH1:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n("D57K"),a=n("/SIk"),i=n.n(a),s=n("h6zb");const o=function(e){return i().createElement(s.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),i().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.997 9.004h-2.009v6h2.009v-6zm-2.009-4h2.009v2.009h-2.009v-2.01z",fill:"currentColor"}))}},LwM2:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n("D57K"),a=n("/SIk"),i=n.n(a),s=n("h6zb");const o=function(e){return i().createElement(s.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 96 96",fill:"none"},e),i().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M88 48c0 22.091-17.909 40-40 40S8 70.091 8 48 25.909 8 48 8s40 17.909 40 40z",fill:"url(#prompt-b96_svg__paint0_linear)"}),i().createElement("path",{d:"M48 19c16.016 0 29 12.984 29 29S64.016 77 48 77 19 64.016 19 48s12.984-29 29-29z",fill:"url(#prompt-b96_svg__paint1_linear)"}),i().createElement("path",{d:"M45 66h6v-6h-6v6zM51 54V30h-6v24h6z",fill:"#14151A"}),i().createElement("defs",null,i().createElement("linearGradient",{id:"prompt-b96_svg__paint0_linear",x1:8,y1:48,x2:102.5,y2:48,gradientUnits:"userSpaceOnUse"},i().createElement("stop",{stopColor:"#F0B90B",stopOpacity:0}),i().createElement("stop",{offset:1,stopColor:"#F0B90B"})),i().createElement("linearGradient",{id:"prompt-b96_svg__paint1_linear",x1:77,y1:48,x2:19,y2:48,gradientUnits:"userSpaceOnUse"},i().createElement("stop",{stopColor:"#F0B90B"}),i().createElement("stop",{offset:1,stopColor:"#F8D33A"}))))}},xCH4:(e,t,n)=>{"use strict";n.d(t,{ZK:()=>o,pY:()=>l,SZ:()=>u});var r=n("D57K"),a=n("/SIk"),i=n.n(a),s=n("Tr4L"),o=(n("RX+5"),function(e,t){void 0===t&&(t="trade-ui");var n=(0,s.$)(t),r=n.t;return{i18n:n.i18n,getI18n:(0,a.useCallback)((function(t,n){return void 0===n&&(n={}),r(e+"-"+t,n)}),[e,r])}}),l=function(e){var t=(0,s.$)(e),n=t.t,i=(0,r.__rest)(t,["t"]),o=(0,a.useCallback)((function(t,r){var a=e.find((function(e){return n(e+":"+t)!==t}));return a?n(a+":"+t,r):""+t||""}),[n]);return(0,r.__assign)((0,r.__assign)({},i),{getI18n:o})},u=function(e,t){return i().forwardRef((function(n,a){var s=o(t),l=s.i18n,u=s.getI18n;return i().createElement(e,(0,r.__assign)({ref:a,i18n:l,getI18n:u},n))}))}},hDn1:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n("D57K"),a=n("/SIk"),i=n.n(a),s=n("++X6"),o=n("3UG5"),l=n("e2Lm"),u=n("O94r"),c=n.n(u),d="32px",p="24px",v=(0,a.forwardRef)((function(e,t){var n=e.children,a=e.labelMarginLeft,o=e.moveUp,l=e.isLargeOutline,u=e.required;return n?i().createElement(s.Z,(0,r.__assign)({ref:t,as:"label",className:c()({"bn-input-label-required":u},"bn-input-label"),tx:"forms",variant:"label"},e,{__css:{position:"absolute",pointerEvents:o?"":"none",top:o?l?"-24px":"-32px":0,left:a,lineHeight:l?p:d,transitionProperty:"top,font-size",transitionDuration:".3s",transitionTimingFunction:"ease",zIndex:"1",cursor:"text","&.bn-input-label-required::before":{display:"inline-block",marginRight:"minor",color:"error",content:'"*"'}}})):null}));v.displayName="TextFieldLabel";var f=(0,a.forwardRef)((function(e,t){var n=e.onFocus,a=e.onBlur,o=e.onChange,l=e.type,u=(0,r.__rest)(e,["onFocus","onBlur","onChange","type"]),c="number"===l?{lang:"en"}:{};return i().createElement(s.Z,(0,r.__assign)({ref:t,as:"input","data-bn-type":"input"},c,u,{type:l,onFocus:n,onBlur:a,onChange:o,__css:{width:"100%",height:"100%",padding:"0",outline:"none",border:"none",bg:"inherit",opacity:1,"&::placeholder":{color:"t.placeholder",fontSize:"14px"}}}))}));f.displayName="TextFieldInput";var m=(0,a.forwardRef)((function(e,t){var n=e.variant,a=void 0===n?"default":n,u=e.id,c=e.value,m=e.defaultValue,_=e.label,g=e.labelFixed,b=void 0!==g&&g,h=e.placeholder,x=e.error,E=e.disabled,w=e.prefix,y=e.suffix,S=e.infoText,C=void 0===S?"":S,R=e.errorText,L=void 0===R?"":R,F=e.onFocus,O=e.onBlur,I=e.onChange,B=e.boxProps,Z=e.required,z=e.sx,T=void 0===z?{}:z,A=(0,r.__rest)(e,["variant","id","value","defaultValue","label","labelFixed","placeholder","error","disabled","prefix","suffix","infoText","errorText","onFocus","onBlur","onChange","boxProps","required","sx"]),D=i().useState(""),U=D[0],M=D[1],N=i().useRef(null!==c&&void 0!==c).current,k=i().useState(m),H=k[0],K=k[1];N&&c!==H&&K(c);var X=!_||b?h:"",q="outline"!==a&&"outlineLarge"!==a||b?"0px":"xs",G=x?"error":"info",P="inline"===a?"":x?L:C,W="inline"!==a?"":x?L:"focus"===U?C:"",$="outlineLarge"===a,J=E?"disabled":x?"error":U;""!==J&&(J="bn-input-status-"+J);var V="string"===typeof _?_:A["area-label"];return i().createElement(o.Z,(0,r.__assign)({tx:"textField",className:J,variant:a},B,{__css:{display:"inline-flex",position:"relative",height:$?"40px":d,mt:_?$?p:d:"minor",mb:P.length>0?"16px":"0px",alignItems:"center",lineHeight:1.6,"&.bn-input-status-focus .bn-input-label":{top:$?"-24px":"-32px"}}}),w&&i().createElement(s.Z,{className:"bn-input-prefix"},w),i().createElement(f,(0,r.__assign)({id:u,onFocus:function(e){M("focus"),F&&F(e)},onBlur:function(e){M(""),O&&O(e)},onChange:function(e){N||K(e.target.value),I&&I(e)},ref:t,value:H,"aria-label":V,disabled:E,placeholder:X,sx:T,required:Z},A)),y&&i().createElement(s.Z,{className:"bn-input-suffix"},y),i().createElement(v,{htmlFor:u,labelMarginLeft:q,moveUp:b||!!H&&""!==H,isLargeOutline:$,required:Z},_),P.length>0&&i().createElement(l.Z,{className:"bn-input-helper-text",variant:"textField.helperText."+G,__css:{position:"absolute",bottom:"-20px",lineHeight:"16px"}},P),W.length>0&&i().createElement(s.Z,{className:"bn-input-tooltip"},i().createElement(s.Z,{className:"bn-input-tooltip-arrow"}),i().createElement(s.Z,{className:"bn-input-tooltip-content"},W)))}));m.displayName="TextField";const _=m}}]);