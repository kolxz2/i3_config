(self.webpackJsonp_launchpad=self.webpackJsonp_launchpad||[]).push([[281],{T1Kw:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>He});var o=a("cJ43"),i=a("7/s2"),n=a("/SIk"),s=a.n(n),l=a("n2bT"),r=a("gPXT"),c=a("V2p8"),u=a("ImIg"),p=a("Tr4L"),m=a("t/hT"),d=a("7F9O"),x=a("e4ut"),h=a("KA2E"),v=a("uJnp");s().createElement;var f=a("VI06"),g=a("Am2c"),Z=a("LVTr"),b=a("yo4O"),y=a("dvAs"),N=a("GTDV"),S=a("qp7r"),w=a("XwHo"),k=a("oHq2"),I=s().createElement;const C=({sx:e})=>{const{t:t,i18n:{language:a}}=(0,p.$)("launchpad2.0"),{isMobile:o}=(0,m.F)(),{locale:i}=(0,v.UO)(),{positionInfo:n,id:s,positionStartTimestamp:l,positionEndTimestamp:c,limit:C}=(0,u.useSelector)((({stackSchemaDetail:e})=>e)),D=null===(null===n||void 0===n?void 0:n.bnbAveragePosition),P=+new Date>l+864e5,T=!D||D&&P,$=(0,b.Z)(),L=(0,y.m)(n.assetName);return I(N.mN,{sx:(0,x.Z)({textAlign:"left",flexDirection:"column",px:["sm","md","md"],pt:[3,4,4],pb:4,position:"relative"},e)},I(r.Z,{flexDirection:"column",flex:1},(null===C||void 0===C?void 0:C.needKyc)&&I(r.Z,{sx:(0,x.Z)({px:"xs",py:"6px",borderRadius:"4px",backgroundColor:"#DFF6EE",alignItems:"center",height:"24px",width:"fit-content"},!o&&{position:"absolute",top:"24px",right:"24px"})},I(f.Z,{width:"16px",src:(0,h.ZB)("kycSupport.png")}),I(g.Z,{ml:"6px",fontSize:"12px",color:"buy"},t("KYC Verified"))),I(g.Z,{color:"t.primary",variant:o?"captionSub":"subtitle2",mt:[3,0,0]},t("Your max commitment limit (avg {{assetName}} holdings)",{assetName:null===n||void 0===n?void 0:n.assetName})),I(r.Z,{sx:{mt:"xs",color:"t.primary"}},I(g.Z,{sx:{fontSize:["20px","28px","28px"],lineHeight:["32px","36px","36px"],color:"t.primary",fontWeight:["bold","semibold","semibold"]}},D?t("Calculating..."):`${(0,h.LS)(n.bnbAveragePosition,4)} ${null===n||void 0===n?void 0:n.assetName}`)),I(r.Z,{flexDirection:["column","row","row"],sx:{justifyContent:"space-between",alignItems:["flex-start","center","center"]},mt:[0,"20px","20px"]},I(g.Z,{mt:["sm",0,0],color:"t.yellow",variant:"linkCaption",fontWeight:"normal",sx:{cursor:"pointer"},textAlign:["center","left"],onClick:()=>(()=>{if(d.Q6)return void(0,h.iF)(`pages/mp/subscriptionHoldingList/index?shouldUseHaveDataStyle=${T}`);const{close:e}=(0,k.u_)({modalSymbol:"HoldCoinDialogPure_Subscription",type:"",fullScreen:o,sx:{width:["auto","484px","484px"]},title:T?t("launchpad2.0:{{assetName}} holding details",{assetName:null===n||void 0===n?void 0:n.assetName}):t("launchpad2.0:Account balance overview"),content:I(w.Z,{shouldUseHaveDataStyle:T,assetName:null===n||void 0===n?void 0:n.assetName,averageBnbAsset:null===n||void 0===n?void 0:n.averageBnbAsset,positionEndTimestamp:c,projectId:s,close:()=>e()})})})()},t(T?"{{assetName}} holding details":"Detailed {{assetName}} calculation rules",{assetName:null===n||void 0===n?void 0:n.assetName})),I(Z.Z,{width:["100%","auto","auto"],mt:["md",0,0],variant:"default",colorStyle:o?"secondary":"flatprimary",sz:"l",onClick:()=>{const e=(0,h.Gr)("tradePair",i,{base:L.baseAsset,quote:L.quoteAsset},$);(0,h.iF)(e)}},t("Buy {{asset}}",{asset:null===n||void 0===n?void 0:n.assetName}))),I(r.Z,{mt:["md","auto","auto"]},I(S.Z,{iconName:"ToolTipG",size:"16px",sx:{mr:1}}),I(g.Z,{variant:"caption",color:"t.third"},t("warmup desc")))))};var D=a("MLNG");s().createElement;var P=s().createElement;const T=({title:e,asset:t,assetName:a,icon:o,sx:i})=>{const{isMobile:n}=(0,m.F)();return P(r.Z,{flexDirection:"column",color:"t.primary",sx:(0,x.Z)({},i)},P(g.Z,{variant:n?"captionSub":"subtitle2"},P(S.Z,{iconName:o,size:n?"16px":"20px",sx:{verticalAlign:"-4px",display:"inline-block",mr:1}}),e),P(g.Z,{variant:n?"headline6":"headline4",mt:2},t," ",a))},$=()=>{const{t:e}=(0,p.$)("launchpad2.0"),t=(0,u.useSelector)((({stackSchemaDetail:e})=>e));return P(N.mN,{sx:{bg:"#FFFDF7"},p:[0,0],mt:["sm","sm",0],ml:[0,0,"plus"]},P(l.Z,{flex:1,sx:{py:["sm","md"],borderRadius:"4px",px:["sm","md"]}},P(r.Z,{sx:{flexDirection:"column",alignSelf:"flex-start"}},P(T,{title:t.projectStatus<5?e("Total {{assetName}} already committed",{assetName:t.positionInfo.assetName}):e("Total {{assetName}} committed",{assetName:t.positionInfo.assetName}),icon:"bnb-lite",asset:(0,h.LS)(null===t||void 0===t?void 0:t.totalInvestAmount,4),assetName:t.positionInfo.assetName}),P(T,{title:e("Total participants"),asset:(+t.investUsers).toLocaleString(),assetName:"",icon:"user-circled-g",sx:{mt:[4,5,5]}}))),P(S.Z,{iconName:"participateCoin",size:"auto",sx:{position:"absolute",display:"block",height:"100%",width:"auto",right:"0px",top:"0px",bottom:"0px"}}))};var L=a("YjSF"),j=a("TVEO"),F=a("JvlY"),A=a("K6q+"),z=a("iLCG"),U=a("g8sP"),M=a("+mjx"),B=a("W7Re"),E=a("A2op"),H=a("8f5V"),R=a("A7CV"),K=a("Mkmb"),G=s().createElement;const W=e=>{var t,a;let{close:o,purchased:i,assetName:c}=e,m=(0,F.Z)(e,["close","purchased","assetName"]);const{t:x}=(0,p.$)("launchpad2.0"),{0:v,1:f}=(0,n.useState)(!1),b=(0,u.useDispatch)(),y=(0,u.useSelector)((({stackSchemaDetail:e})=>e)),{enqueueNotification:N}=(0,M.Z)();return G(s().Fragment,null,G(l.Z,{px:d.Q6?3:0},G(r.Z,{flexDirection:"column"},G(r.Z,{justifyContent:"space-between"},G(g.Z,{sx:{color:"t.secondary"}},x("{{assetName}} amount to commit",{assetName:null===(t=y.positionInfo)||void 0===t?void 0:t.assetName})),G(g.Z,{variant:"subtitle2",sx:{color:"t.primary"}},(0,h.LS)(i,4),"\xa0",c)),G(g.Z,{variant:"caption",mt:"28px",sx:{lineHeight:"16px",color:"t.secondary"}},G(j.c,{i18nKey:"confirm submmit tip",ns:"launchpad2.0",values:{assetName:null===(a=y.positionInfo)||void 0===a?void 0:a.assetName},components:{sk:G(g.Z,{sx:{color:"t.primary",fontWeight:"bold",display:"inline-block"}})}}))),G(r.Z,{justifyContent:"space-between",my:4},G(Z.Z,{width:"152px",variant:"outline",colorStyle:"second",sz:"l",mr:2,onClick:()=>o(!1)},x("Cancel")),G(Z.Z,{width:"152px",sz:"l",mr:2,onClick:()=>(async()=>{try{await b.stackSchemaDetail.fetchPurchaseCoin({projectId:y.id,amount:i}),N(x("BNB successfully committed"),{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3})}catch(e){if((null===e||void 0===e?void 0:e.code)===d.Bq.LPD_IP_FAIL)return b.stackSchemaDetail.updateState({isPuchaseFailTipShow:!0}),void o();Object.values(d.bB).includes(code)&&N(null===e||void 0===e?void 0:e.message,{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:3e3})}b.stackSchemaDetail.fetchDetail({pid:m.pid,testFlag:m.testFlag,lang:m.locale}),b.stackSchemaDetail.fetchPositionInfo({projectId:m.pid}),o(!1)})()},x("Commit Now")))),G(K.Z,{tipType:"ip",tipVisible:v,setTipVisible:f}))},O=e=>{return d.Q6?(t=W,e=>{var a,o;const i=(0,n.useRef)(null===D.Z||void 0===D.Z?void 0:D.Z.getCurrentInstance()),{pid:s,locale:l,testFlag:r}=(null===i||void 0===i||null===(a=i.current)||void 0===a||null===(o=a.router)||void 0===o?void 0:o.params)||{};return G(t,Object.assign({pid:s,locale:l,testFlag:r},e))})(e):(e=>t=>{const{pid:a,locale:o,testFlag:i}=(0,v.UO)();return G(e,Object.assign({pid:a,locale:o,testFlag:i},t))})(W)(e);var t};var _=s().createElement;const V=e=>{let{left:t,asset:a,assetName:o}=e,i=(0,F.Z)(e,["left","asset","assetName"]);return _(B.uM,Object.assign({},i,{label:t,value:_(g.Z,null,(0,h.LS)(a,4),"\xa0",o)}))},Y=({setOpen:e,closeP:t})=>{var a,o,i,s,c,x,v,f;const{t:b}=(0,p.$)("launchpad2.0"),{isMobile:y}=(0,m.F)(),N=(0,u.useDispatch)(),S=(0,u.useSelector)((({stackSchemaDetail:e})=>e)),{enqueueNotification:w}=(0,M.Z)(),{0:I,1:C}=(0,n.useState)(""),{0:D,1:P}=(0,n.useState)(""),{0:T,1:$}=(0,n.useState)(!1),{0:L,1:j}=(0,n.useState)(!0),{0:F,1:B}=(0,n.useState)("Please enter a valid number."),{0:K,1:G}=(0,n.useState)(""),{0:W,1:Y}=(0,n.useState)("");(0,n.useEffect)((()=>{N.launchpool.fetchUserAssetCount({asset:S.positionInfo.assetName}).then((e=>{let t=(0,h.Ln)((0,E.h9)(S.positionInfo.maxPurchaseAmount,S.positionInfo.purchasedAmount),4);G((0,h.Ln)(t,4)),Y((0,h.Ln)(e,4)),P((0,h.Ln)(t<e?t:e,4))}))}),[N.launchpool,S.positionInfo.maxPurchaseAmount,S.positionInfo.purchasedAmount]);const q=(0,n.useMemo)((()=>{var e;const t=null===(e=S.links)||void 0===e?void 0:e.find((e=>"pdf"===e.name));return t?(0,H.$I)(t.link):"/"}),[]),Q=e=>{const t=/^[0-9]+\.?[0-9]{0,4}$/;let a=!t.test(e)||+D<e||0===+e;var o,i;(C(e),$(a),+e>+K)&&(S.positionInfo.purchasedAmount>0?B(b("Your remaining commitment amount is {{num}} {{assetName}}",{num:K,assetName:null===(o=S.positionInfo)||void 0===o?void 0:o.assetName})):B(b("Your max commitment limit is {{num}} {{assetName}}",{num:K,assetName:null===(i=S.positionInfo)||void 0===i?void 0:i.assetName})));+W<+e&&B(b("Insufficient balance")),t.test(e)&&0!==+e||B(b("Please enter a valid number."))},J=()=>{e(!1),C(""),$(""),j(!0)};return _(l.Z,{px:d.Q6?3:0},_(V,{sx:{mt:d.Q6?0:"sm"},left:b("Max commitment limit",{assetName:null===(a=S.positionInfo)||void 0===a?void 0:a.assetName}),asset:null===S||void 0===S||null===(o=S.positionInfo)||void 0===o?void 0:o.maxPurchaseAmount,assetName:null===(i=S.positionInfo)||void 0===i?void 0:i.assetName}),S.positionInfo.purchasedAmount>0&&_(V,{sx:{my:"md"},left:b("Remaining commitment amount"),asset:K,assetName:null===(s=S.positionInfo)||void 0===s?void 0:s.assetName}),_(V,{sx:{mt:S.positionInfo.purchasedAmount>0?"":"md"},left:b("Spot wallet balance",{assetName:null===(c=S.positionInfo)||void 0===c?void 0:c.assetName}),asset:W,assetName:null===(x=S.positionInfo)||void 0===x?void 0:x.assetName}),_(l.Z,{mt:"28px"},_(R.tH,{type:"digit",boxProps:{width:"100%"},variant:"outlineLarge",value:I,onChange:e=>C(e.currentTarget.value),onBlur:e=>Q(e.currentTarget.value),label:_(g.Z,{mr:"xs"},b("Amount to commit",{assetName:null===(v=S.positionInfo)||void 0===v?void 0:v.assetName})),labelFixed:!0,error:T,errorText:F,placeholder:b("Available {{asset}} {{assetName}}",{asset:D,assetName:null===(f=S.positionInfo)||void 0===f?void 0:f.assetName}),suffix:_(Z.Z,{variant:"quiet",onClick:()=>(e=>{let t=(0,h.Ln)(e,4);Q(t)})(D)},b("Max"))})),_(r.Z,{alignItems:"center",mt:"md"},_(A.Z,{sx:{width:"auto",flex:"0 0 auto"}},_(z.Z,{value:L,checked:L,onChange:e=>{j(e.target.checked)}})),_(r.Z,{sx:{flexWrap:"wrap",alignItems:"center",ml:"xs"},variant:"caption",fontSize:"12px"},b("I have read and agree to the"),_(U.Z,{color:"t.yellow",target:"_blank",ml:"minor",href:q},b("purchase agreement")))),_(r.Z,{justifyContent:"space-between",mt:4,mb:3},_(Z.Z,{width:"152px",mx:0,variant:"outline",colorStyle:"second",sz:"l",onClick:()=>t()},b("Cancel")),_(Z.Z,{width:"152px",mx:0,sz:"l",onClick:()=>(()=>{var e,a;if(Q(I),T||!+I)return;if(!L)return w(b("You must tick the purchase agreement"),{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3});const{close:o}=(0,k.u_)({modalSymbol:"PurchaseConfDialog",type:y?"drawer":"",sx:{width:["100%","360px","360px"]},title:b("Confirm {{assetName}} commitment",{assetName:null===(e=S.positionInfo)||void 0===e?void 0:e.assetName}),content:_(O,{close:()=>{o(),t()},purchased:I,assetName:null===(a=S.positionInfo)||void 0===a?void 0:a.assetName,closeDialog:J})})})()},b("Commit Now"))))};var q=a("D57K"),Q=(0,n.forwardRef)((function(e,t){return s().createElement(l.Z,(0,q.__assign)({ref:t,as:"div",tx:"tag",variant:"default"},e,{__css:{display:"inline-block"}}))}));Q.displayName="Tag";const J=Q;var X=s().createElement;const ee=()=>{const{t:e}=(0,p.$)("launchpad2.0");return X(J,{display:"flex",ml:"xs",height:["auto","20px","20px"],justifyContent:"center",alignItems:"center"},X(S.Z,{iconName:"lock-close-g",sx:{mr:1,width:["14px","16px","16px"],height:["14px","16px","16px"]}}),X(g.Z,{variant:"captionSub",color:"#D89F00"},e("Locked")))},te=({noBackground:e,tipText:t})=>{const{t:a}=(0,p.$)("launchpad2.0");return X(L.Z,{arrow:!0,trigger:"click",tip:t,placement:"bottom"},e?X(r.Z,{display:"inline-flex",mr:"auto",mt:"xs"},X(S.Z,{iconName:"CircledArrowUpG",size:"auto",sx:{mr:1,width:"16px",height:"16px"}}),X(g.Z,{variant:"captionSub",color:"t.yellow",cursor:"pointer"},a("Hard cap reached"))):X(J,{display:"inline-flex",ml:"sm",height:"20px",justifyContent:"center",alignItems:"center"},X(S.Z,{iconName:"CircledArrowUpG",size:"auto",sx:{mr:1,width:"16px",height:"16px"}}),X(g.Z,{variant:"captionSub",color:"t.yellow",cursor:"pointer"},a("Hard cap reached"))))};var ae=s().createElement;const oe=({sx:e,canNotStackCausedRiskLimit:t,hitAccountKycLimit:a,areaListStr:o})=>{const{t:i,i18n:{language:n}}=(0,p.$)("launchpad2.0"),{isMobile:c}=(0,m.F)(),{positionInfo:d,isPuchaseFailTipShow:v}=(0,u.useSelector)((({stackSchemaDetail:e})=>e)),f=(0,b.Z)(),y=(0,u.useDispatch)();return ae(s().Fragment,null,ae(N.mN,{needKyc:!0,canNotStackCausedRiskLimit:t,sx:(0,x.Z)({flexDirection:"column",position:"relative"},e)},ae(N.u8,{isShow:t,kycType:a?"account":"admin",areaListStr:o}),!t&&ae(r.Z,{color:"t.secondary",alignItems:"center"},ae(g.Z,{variant:["caption","subtitle1","subtitle1"]},ae(j.c,{i18nKey:"Your max commitment limit {{asset}} {{assetName}}",ns:"launchpad2.0",values:{asset:(0,h.LS)(null===d||void 0===d?void 0:d.maxPurchaseAmount,4),assetName:d.assetName},components:{sk:ae(g.Z,{sx:{color:"t.primary",fontWeight:"bold",display:"inline-block"}})}})),ae(L.Z,{arrow:!0,tip:i("Calculated based on your past average {{assetName}} holdings across multiple wallets.",{assetName:null===d||void 0===d?void 0:d.assetName}),placement:"top"},ae(r.Z,null,ae(S.Z,{iconName:"CircledInfoF",size:"14px",sx:{cursor:"pointer",ml:1}})))),ae(l.Z,{sx:{mt:t?[3,4]:0,px:t?["sm",4]:0}},ae(g.Z,{variant:["captionSub","subtitle2","subtitle2"],alignItems:"center",sx:{mt:t?0:["sm","md","md"],color:"t.secondary",display:"flex"}},i("Your committed {{assetName}} amount",{assetName:null===d||void 0===d?void 0:d.assetName}),d.purchasedAmount>0&&ae(ee,null)),ae(r.Z,{mt:"xs",flexDirection:["column","row","row"],alignItems:["flex-start","center","center"],justifyContent:"space-between"},ae(g.Z,{sx:{fontSize:["20px","28px","28px"],color:"t.primary",fontWeight:["bold","semibold","semibold"]}},(0,h.LS)(d.purchasedAmount,4),"\xa0",null===d||void 0===d?void 0:d.assetName),ae(Z.Z,{width:["100%","auto","auto"],inactive:(null===d||void 0===d?void 0:d.purchaseUpperLimit)||t,mt:["md",0,0],sz:"l",minWidth:"127px",onClick:()=>{if(null!==d&&void 0!==d&&d.purchaseUpperLimit||t)return!1;const{close:e}=(0,k.u_)({modalSymbol:"PurchaseCoinDialog",type:c?"drawer":"",sx:{width:["100%","360px","360px"]},title:i("commit {{assetName}}",{assetName:null===d||void 0===d?void 0:d.assetName}),content:ae(Y,{closeP:()=>e()})})}},i("commit {{assetName}}",{assetName:null===d||void 0===d?void 0:d.assetName})))),ae(r.Z,{sx:{mt:["sm","auto","auto"],minHeight:"16px",px:t?["sm",4]:0}},ae(S.Z,{iconName:"ToolTipG",size:"16px",sx:{mr:1}}),ae(g.Z,{variant:"caption",as:"span",color:"t.third"},!(null!==d&&void 0!==d&&d.purchaseUpperLimit)&&i("Only {{assetName}} in your spot wallet can be used to participate.",{assetName:null===d||void 0===d?void 0:d.assetName}),(0,h.Ln)(d.purchasedAmount,4)>0&&(0,h.Gr)("forzenBNB",n,{},f)&&ae(j.c,{i18nKey:"View locked {{assetName}}, Go to LPD wallet",ns:"launchpad2.0",components:{lk:ae(g.Z,{display:"inline",color:"t.yellow",variant:"linkCaption",fontWeight:"normal",sx:{cursor:"pointer"},onClick:()=>{(0,h.iF)((0,h.Gr)("forzenBNB",n,{},f))}})}})))),ae(K.Z,{tipType:"ip",tipVisible:v,setTipVisible:e=>y.stackSchemaDetail.updateState({isPuchaseFailTipShow:e})}))};var ie=s().createElement;const ne=({sx:e})=>{const{t:t}=(0,p.$)("launchpad2.0"),{positionInfo:a,limit:o}=(0,u.useSelector)((({stackSchemaDetail:e})=>e));return ie(s().Fragment,null,ie(N.mN,{needKyc:null===o||void 0===o?void 0:o.needKyc,sx:(0,x.Z)({flexDirection:"column",position:"relative"},e)},ie(r.Z,{alignItems:"center"},ie(g.Z,{color:"t.secondary",sx:{fontSize:["12px","14px"],fontWeight:[400,500],lineHeight:["16px","20px"]},variant:"subtitle2"},ie(j.c,{i18nKey:"Your max commitment limit {{asset}} {{assetName}}",ns:"launchpad2.0",values:{asset:(0,h.LS)(null===a||void 0===a?void 0:a.maxPurchaseAmount,4),assetName:a.assetName},components:{sk:ie(g.Z,{sx:{color:"t.primary",fontWeight:"bold",display:"inline-block"}})}})),ie(L.Z,{arrow:!0,tip:t("Calculated based on your past average {{assetName}} holdings across multiple wallets.",{assetName:null===a||void 0===a?void 0:a.assetName}),placement:"top"},ie(l.Z,{height:"14px"},ie(S.Z,{iconName:"CircledInfoF",size:"14px",sx:{cursor:"pointer",ml:1}})))),ie(f.Z,{width:["100px","120px","120px"],my:[0,"md","md"],src:(0,h.ZB)("noReward.png")}),ie(r.Z,{mt:[5,"auto","auto"]},ie(S.Z,{iconName:"ToolTipG",size:"16px",sx:{mr:1}}),ie(g.Z,{variant:"caption",textAlign:"left",color:"t.third",sx:{lineHeight:"20px",display:"flex"}},t("Unfortunately, you did not have sufficient average {{assetName}} holdings to participate.",{assetName:null===a||void 0===a?void 0:a.assetName})))))};var se=s().createElement;const le=({sx:e})=>{const{t:t,i18n:{language:a}}=(0,p.$)("launchpad2.0"),{positionInfo:o,links:i}=(0,u.useSelector)((({stackSchemaDetail:e})=>e)),c=(0,b.Z)(),d=(0,n.useMemo)((()=>c.indexOf("www")>-1?`https://${c}/${a}`:`https://www.${c}/${a}`),[a,c]),v=(0,n.useMemo)((()=>null===i||void 0===i?void 0:i.find((e=>"calcRule"===e.name))),[i]),{isMobile:f}=(0,m.F)();return se(s().Fragment,null,se(N.mN,{needKyc:!0,sx:(0,x.Z)({flexDirection:"column"},e)},se(r.Z,{alignItems:"center"},se(g.Z,{variant:f?"caption":"subtitle1",color:"t.secondary",mr:1},t("Your committed {{assetName}} amount",{assetName:o.assetName})),se(g.Z,{variant:f?"captionSub":"subtitle1",color:"t.primary"},(0,h.LS)(o.purchasedAmount,4),null===o||void 0===o?void 0:o.assetName),o.purchasedAmount>0?se(ee,null):null),se(l.Z,{mt:[4,5,5]},se(g.Z,{variant:f?"caption":"subtitle2",color:"t.primary"},t("Your estimated allocation")),se(r.Z,{flex:1,mt:2,flexDirection:["column","row","row"],alignItems:["flex-start","center","center"],justifyContent:"space-between"},se(g.Z,{variant:f?"headline6":"headline4"},t("Calculating...")),(0,h.Gr)("forzenBNB",a,{},c)&&(f?se(U.Z,{mt:3,color:"t.yellow",href:(0,h.Gr)("forzenBNB",a,{},c)},t("View Locked {{assetName}}",{assetName:o.assetName})):se(Z.Z,{colorStyle:"secondary",sz:"l",onClick:()=>(0,h.iF)((0,h.Gr)("forzenBNB",a,{},c))},t("View Locked {{assetName}}",{assetName:o.assetName}))))),se(r.Z,{sx:{wordBreak:"break-word",color:"t.third",fontSize:"12px",lineHeight:"16px",mt:[4,"auto","auto"]}},se(S.Z,{iconName:"ToolTipG",size:"16px",sx:{mr:1}}),se(g.Z,{sx:{lineHeight:"16px"}},se(j.c,{i18nKey:"calculator tip",ns:"launchpad2.0",components:{lk:se(U.Z,{color:"t.yellow",target:"_blank",href:`${d}${null===v||void 0===v?void 0:v.link}`}),sk:se(g.Z,{sx:{color:"t.primary",fontWeight:"bold",display:"inline-block"}})}})))))};var re=s().createElement;const ce=({finish:e,txt:t})=>{const{isMobile:a}=(0,m.F)(),o=re(S.Z,{iconName:e?"CheckMarkS24":"CircledMoreG",size:"16px",mr:"minor"});return re(r.Z,{alignItems:"center"},o,re(g.Z,{variant:a?"caption":"subtitle2",color:"t.primary",ml:1},t))},ue=({sx:e})=>{var t;const{t:a,i18n:{language:o}}=(0,p.$)("launchpad2.0"),{isMobile:i}=(0,m.F)(),s=(0,u.useSelector)((({stackSchemaDetail:e})=>e)),c=(0,b.Z)(),d=(0,n.useMemo)((()=>`https://www.${c}/${o}`),[o]),x=(0,n.useMemo)((()=>{var e;return null===(e=s.links)||void 0===e?void 0:e.find((e=>"calcRule"===e.name))}),[s]),v=(0,n.useMemo)((()=>a("You have reached the hard cap per user amount of rewards allocation per user of {{maxCoins}} {{coin}}.",{maxCoins:s.maxCoinsPerUser,coin:s.productCode})),[a]);return re(r.Z,{sx:{position:"relative"}},re(N.mN,{sx:{flexDirection:"column"}},re(l.Z,null,re(r.Z,{flex:1,flexDirection:"column"},ce({finish:s.positionInfo.hasFinishDeducted,txt:s.positionInfo.hasFinishDeducted?a("Deducted"):a("Deducted amount")}),re(g.Z,{variant:i?"headline6":"headline4",color:"t.primary",mt:"xs"},(0,h.xx)(null===s||void 0===s?void 0:s.positionInfo.deductedAmount)," \xa0",null===s||void 0===s||null===(t=s.positionInfo)||void 0===t?void 0:t.assetName)),re(r.Z,{flex:1,flexDirection:"column",mt:"md"},re(r.Z,{alignItems:"center",height:"24px"},ce({finish:s.positionInfo.rebated,txt:a("Your final allocation")}),re(L.Z,{arrow:!0,trigger:"click",tip:re(j.c,{i18nKey:"Your estimated rewards allocation is calculated as Your committed {{assetName}} / Total committed {{assetName}} * Total rewards.",ns:"launchpad2.0",values:{assetName:s.positionInfo.assetName},components:{lk:re(U.Z,{sx:{display:"inline-block",color:"t.yellow",textDecoration:"underline",cursor:"pointer"},target:"_blank",href:`${d}${null===x||void 0===x?void 0:x.link}`})}}),placement:"top"},re(r.Z,null,re(S.Z,{iconName:"CircledInfoF",size:"14px",sx:{cursor:"pointer",ml:1}}))),!i&&s.positionInfo.rebateCoinsUpperLimit&&re(te,{noBackground:i,tipText:v})),re(g.Z,{variant:i?"headline6":"headline4",color:"t.primary",mt:"xs"},(0,h.xx)(null===s||void 0===s?void 0:s.positionInfo.rebateCoinsAmount),"\xa0",null===s||void 0===s?void 0:s.productCode),i&&s.positionInfo.rebateCoinsUpperLimit&&re(te,{noBackground:i,tipText:v}))),re(r.Z,{sx:{mt:["md","auto","auto"],minHeight:"16px"}},re(S.Z,{iconName:"ToolTipG",size:"16px",sx:{mr:1}}),s.positionInfo.hasFinishDeducted?re(g.Z,{variant:"caption",sx:{flexWarp:"warp",color:"t.third",display:"inline-block"}},re(j.c,{i18nKey:"final result desc",ns:"launchpad2.0",values:{assetName:null===s||void 0===s?void 0:s.assetType,productCode:null===s||void 0===s?void 0:s.productCode},components:{spotlk:re(U.Z,{color:"t.yellow",target:"_blank",href:(0,h.Gr)("spotWallet",o,{},c)}),tradelk:re(U.Z,{target:"_blank",color:"t.yellow",href:(0,h.Gr)("tradeBTC",o,{asset:null===s||void 0===s?void 0:s.productCode},c)})}})):re(g.Z,{variant:"caption",sx:{flexWarp:"warp",color:"t.third",display:"inline-block"}},re(j.c,{i18nKey:"final result desc2",ns:"launchpad2.0",values:{assetName:null===s||void 0===s?void 0:s.assetType,productCode:null===s||void 0===s?void 0:s.productCode},components:{b:re(g.Z,{display:"inline",color:"t.primary",fontWeight:"500"})}})))))};var pe=s().createElement;const me=()=>{const e=(0,u.useSelector)((({stackSchemaDetail:e})=>e));return e.projectStatus<4?pe(N.OA,{assetType:null===e||void 0===e?void 0:e.assetType}):e.projectStatus>3?pe($,null):null};var de=a("oYFM"),xe=s().createElement;const he=()=>{const{login:e,sureIsLogin:t,data:a}=(0,u.useSelector)((({app:e,stackSchemaDetail:t})=>({login:e.login,sureIsLogin:e.sureIsLogin,data:t}))),{hitAdminKycLimit:o,hitAccountKycLimit:i,kycRefused:n,kycNoOpen:s,isParticipating:l,canNotStackCausedRiskLimit:r}=(0,de.C)({limit:null===a||void 0===a?void 0:a.limit,position:null===a||void 0===a?void 0:a.positionInfo,type:"stackSchema"});return t?e?i&&!l?xe(N.Lt,{type:"lpd",kycType:"account"}):n?xe(N.B,{positionInfo:a.positionInfo||{}}):s?xe(N.LU,{positionInfo:a.positionInfo||{}}):o&&!l?xe(N.Lt,{type:"lpd",areaListStr:null===a||void 0===a?void 0:a.kyc,kycType:"admin"}):1===a.projectStatus?xe(C,null):4===a.projectStatus?0===(0,h.Ln)(a.positionInfo.bnbAveragePosition,4)?xe(ne,null):xe(oe,{canNotStackCausedRiskLimit:r,hitAccountKycLimit:i,areaListStr:null===a||void 0===a?void 0:a.kyc}):5===a.projectStatus?0===(0,h.Ln)(a.positionInfo.purchasedAmount,4)?xe(N.G7,{assetName:null===(c=a.positionInfo)||void 0===c?void 0:c.assetName}):xe(le,null):6===a.projectStatus||7===a.projectStatus?0===(0,h.Ln)(a.positionInfo.purchasedAmount,4)?xe(N.G7,{assetName:null===(m=a.positionInfo)||void 0===m?void 0:m.assetName}):xe(ue,{assetName:null===(p=a.positionInfo)||void 0===p?void 0:p.assetName}):null:xe(N.zv,null):null;var c,p,m};var ve=s().createElement;const fe=e=>{const{sureIsLogin:t,projectStatus:a,positionInfo:o}=(0,u.useSelector)((({app:e,stackSchemaDetail:t})=>({sureIsLogin:e.sureIsLogin,projectStatus:t.projectStatus,positionInfo:t.positionInfo}))),{t:i,i18n:{language:n}}=(0,p.$)("launchpad2.0");(0,v.tv)();return t?ve(r.Z,{sx:(0,x.Z)({flexDirection:["column","column","row"]},e)},ve(l.Z,{width:["100%","100%","560px"],flexShrink:"0"},ve(he,null)),ve(l.Z,{display:6!==a&&7!==a||0!==(0,h.Ln)(o.purchasedAmount,4)?"block":"none",width:["100%","100%","560px"],flexShrink:"0"},ve(me,null))):null};var ge=a("ERuB"),Ze=a("0qv+"),be=a("lEPr"),ye=a("noyk"),Ne=s().createElement;const Se=({data:e})=>{const{t:t,i18n:{language:a}}=(0,p.$)(["launchpad","launchpad2.0"]),{statusVariant:o,text:i}=(0,n.useMemo)((()=>(0,h.mC)(e.projectStatus)),[e.projectStatus]),{0:s,1:c,2:u}=(0,n.useMemo)((()=>{let a=(0,h.hD)(e)||t("lpd-v1-purchase-waitprice"),o=t("lpd-v1-purchase-waitprice"),i=t("lpd-v1-purchase-waitprice");return e.maxCostInUsd&&e.distributePrice?i=`${e.maxCoinsPerUser} ${e.productCode}\n        = ${(0,h.uf)(e.maxCoinsPerUser*e.distributePrice,4,3)} ${e.assetType} (\u2248 ${parseInt(+e.maxCostInUsd,10)} USD)`:e.maxCostInUsd?i=`${parseInt(+e.maxCostInUsd,10)} USD (${(+e.maxCoinsPerUser).toLocaleString()} ${e.productCode})\n        `:e.distributePrice&&(i=`${e.maxCoinsPerUser} ${e.productCode}\n        = ${(0,h.uf)(e.maxCoinsPerUser*e.distributePrice,4,3)} ${e.assetType}`),e.distributeNum&&0!==+e.distributeNum&&(o=`${(0,h.uf)(e.distributeNum,4,3)} ${e.productCode}`),[[t("launchpad2.0:Sale Price"),a],[t("launchpad2.0:Tokens Offered"),o],[t("launchpad2.0:Hard cap per user"),i]]}),[a,e]);return(0,n.useMemo)((()=>{var t;const a=null===(t=e.themeColor)||void 0===t?void 0:t.split(",");return 2===(null===a||void 0===a?void 0:a.length)?a:["#15141A","#474D57"]}),[]),Ne(r.Z,{flexDirection:"column",px:[0,"md","md"]},Ne(r.Z,{flexDirection:"row",pt:"40px",pb:"24px"},Ne(l.Z,{width:"204px",height:"140px",mr:4},Ne(f.Z,{width:"100%",height:"100%",src:(0,h.$I)(e.productPic),sx:{borderRadius:"8px"}})),Ne(l.Z,{sx:{position:"relative"},flex:1},Ne(r.Z,{fontSize:["16px","20px","24px"],flexWrap:"wrap",alignItems:"center",color:"t.primary"},Ne(g.Z,{variant:"headline5",mb:"xs",mr:"sm"},e.projectName),Ne(l.Z,{mb:"xs"},Ne(Ze.Z,{colorStyle:o,iconSize:"16px"},t(`launchpad2.0:${i}`))),7===e.projectStatus&&Ne(l.Z,{sx:{position:"absolute",right:0,top:0}},Ne(ge.Z,{type:"subscription",data:e,theme:"detail"}))),Ne(g.Z,{variant:"body2",color:["t.third","t.secondary"],mt:2,mb:"sm"},t(e.projectDesc)),Ne(l.Z,null,Ne(be.Z,{data:e})))),Ne(r.Z,{mt:"xs",flexWrap:"wrap"},Ne(B.ZP,{label:t("Type"),value:t("Subscription"),direction:"column",withTooltip:!0,tipText:t("launchpad2.0:subscrip rule description")}),Ne(B.ZP,{label:s[0],value:s[1],direction:"column"}),Ne(B.ZP,{label:c[0],value:c[1],direction:"column"}),Ne(B.ZP,{label:u[0],value:u[1],direction:"column",last:!0})))},we=(0,n.memo)((({data:e})=>{const{t:t,i18n:{language:a}}=(0,p.$)(["launchpad","launchpad2.0"]),{statusVariant:o,text:i}=(0,n.useMemo)((()=>(0,h.mC)(e.projectStatus)),[e.projectStatus]),{0:s,1:c,2:u}=(0,n.useMemo)((()=>{let a=(0,h.hD)(e)||t("lpd-v1-purchase-waitprice"),o=t("lpd-v1-purchase-waitprice"),i=t("lpd-v1-purchase-waitprice");return e.maxCostInUsd&&e.distributePrice?i=`${e.maxCoinsPerUser} ${e.productCode}\n        = ${(0,h.uf)(e.maxCoinsPerUser*e.distributePrice,4,3)} ${e.assetType} (\u2248 ${parseInt(+e.maxCostInUsd,10)} USD)`:e.maxCostInUsd?i=`${parseInt(+e.maxCostInUsd,10)} USD (${(+e.maxCoinsPerUser).toLocaleString()} ${e.productCode})\n        `:e.distributePrice&&(i=`${e.maxCoinsPerUser} ${e.productCode}\n        = ${(0,h.uf)(e.maxCoinsPerUser*e.distributePrice,4,3)} ${e.assetType}`),e.distributeNum&&0!==+e.distributeNum&&(o=`${(0,h.uf)(e.distributeNum,4,3)} ${e.productCode}`),[[t("launchpad2.0:Sale Price"),a],[t("launchpad2.0:Tokens Offered"),o],[t("launchpad2.0:Hard cap per user"),i]]}),[a,e]);return(0,n.useMemo)((()=>{var t;const a=null===(t=e.themeColor)||void 0===t?void 0:t.split(",");return 2===(null===a||void 0===a?void 0:a.length)?a:["#15141A","#474D57"]}),[]),Ne(r.Z,{flexDirection:["column","row"],sx:{position:"relative"},fontSize:"0",alignItems:"center"},Ne(f.Z,{width:"100%",height:"100%",src:(0,h.$I)(e.productPic),sx:{borderRadius:"4px",mb:"16px"}}),Ne(l.Z,{width:"100%"},Ne(ye.Z,{defaultShow:!1,title:e.projectName,slot:Ne(Ze.Z,{colorStyle:o,mb:"md",mt:"ls",iconSize:"12px"},t(`launchpad2.0:${i}`))},Ne(l.Z,{flexWrap:"wrap",width:"100%"},Ne(B.ZP,{label:s[0],value:s[1]}),Ne(B.ZP,{label:u[0],value:u[1]}),Ne(B.ZP,{label:c[0],value:c[1]})),Ne(l.Z,{mb:"sm",mt:"-8px"},Ne(be.Z,{data:e})))))})),ke=()=>{const e=(0,u.useSelector)((({stackSchemaDetail:e})=>e));return Ne(s().Fragment,null,Ne(l.Z,{bg:"bg1",width:"100%",px:"sm",pt:"md",sx:{borderRadius:"32px 32px 0px 0px;"},display:["block","none"]},Ne(we,{data:e})),Ne(r.Z,{display:["none","block"],flexDirection:"column"},Ne(Se,{data:e})))};var Ie=a("xlhf"),Ce=a("I0Hr"),De=a("JT6q"),Pe=s().createElement;const Te=({number:e,activeIndex:t})=>{const a={width:["24px","32px"],height:["24px","32px"]},o=(0,n.useMemo)((()=>e===t?(0,x.Z)({bg:"primary",fontSize:"14px",color:"t.primary"},a):e<t?(0,x.Z)({bg:"rgba(255, 239, 135, .3)",fontSize:"14px",color:"primary"},a):(0,x.Z)({bg:"line",fontSize:"14px",color:"t.disabled"},a)),[t,a]);return Pe(r.Z,{sx:(0,x.Z)((0,x.Z)({},o),{},{borderRadius:"50%"}),justifyContent:"center",alignItems:"center"},e>=t?e:d.Q6?Pe(S.Z,{iconName:"StepsOver",size:"24px"}):Pe(Ie.Z,{size:"20px"}))},$e=({type:e})=>Pe(l.Z,{flex:1,width:["1px","2px"],bg:0!==e?"outlineHover":"#F3F3F3",my:2===e?"12px":2,borderRadius:"4px",minHeight:"32px"}),Le=e=>{let t=Object.assign({},e);return Pe(l.Z,t)},je=({number:e,activeIndex:t,content:a,duration:o,title:i,time:s,productCode:c,fetchProjectDetail:u})=>{const{t:m,i18n:{language:d}}=(0,p.$)("launchpad2.0"),x=(0,n.useMemo)((()=>e>t?0:t===e?2:1),[e,t]),v=(0,b.Z)();return Pe(r.Z,{sx:{position:"relative"}},Pe(r.Z,{flexDirection:"column",alignItems:"center",flex:["0 0 32px","0 0 48px"],sx:{position:"relative",mr:[2,4]}},Pe(Te,{type:x,number:e,activeIndex:t}),4!==e?Pe($e,{type:x}):null),Pe(Le,{type:x,width:"100%"},Pe(r.Z,{justifyContent:"space-between"},Pe(r.Z,{flexDirection:"column"},Pe(g.Z,{variant:"subtitle1",color:"t.primary",mb:2},m(i)),Pe(g.Z,{variant:"captionSub",color:"t.third",mb:2},s))),2===x?Pe(l.Z,{width:"100%"},Pe(g.Z,{variant:"body2",color:"t.primary",mt:1,maxWidth:["100%","100%","560px"]},Pe(j.c,{i18nKey:`subscription-timeDesc-${e}`,ns:"launchpad2.0",components:{lk:Pe(U.Z,{color:"t.yellow",target:"_blank",display:"inline",href:(0,h.Gr)("BNBCalRule",d,{},v)}),ttips:Pe(g.Z,{display:"inline",as:"span"}),b:Pe(g.Z,{display:"inline",color:"t.primary",fontWeight:"500"}),productCode:c}})),Pe(l.Z,{width:"560px",mt:"40px",display:["none","none","block"]},o),Pe(l.Z,{mt:4,mb:4===e?0:[4,"xp"]},a)):null))},Fe=[{name:"BNB Holding Calculation Period",time:"positionStartTimestamp"},{name:"Subscription Period",time:"purchaseStartTimestamp"},{name:"Calculation Period",time:"purchaseEndTimestamp"},{name:"Final Results",time:"publishedTimestamp"}],Ae=({data:e,content:t,fetchProjectDetail:a})=>{var o;const{t:i,i18n:{language:s}}=(0,p.$)("launchpad2.0"),l=(0,n.useMemo)((()=>1===+e.projectStatus?1:+e.projectStatus<5?2:5===+e.projectStatus?3:4),[e.projectStatus]),c=!d.Q6&&!((6===e.projectStatus||7===e.projectStatus)&&(0,h.Ln)(null===(o=e.positionInfo)||void 0===o?void 0:o.purchasedAmount,4)>0),u=(0,n.useMemo)((()=>e.projectStatus<=6?Pe(ge.Z,{data:e,theme:"detail",timeoutCallBack:a}):null),[]);return Pe(r.Z,{flexDirection:"column",pb:[4,"xp"],px:[3,4,4],sx:{position:"relative"}},Pe(r.Z,{justifyContent:"space-between",alignItems:"center"},Pe(g.Z,{fontSize:["20px","24px"],lineHeight:["28px","32px"],fontWeight:["500","700"],mb:4,my:[4,"xp"]},i("Subscription Timeline")),c?Pe(De.Z,{display:["none","inline-block"],text:i("launchpad2.0:Launchpad History"),locale:s,location:"stackSchema"}):null),Fe.map(((a,o)=>Pe(je,{key:o,number:o+1,activeIndex:l,content:t,title:a.name,duration:u,productCode:e.productCode,time:(0,Ce.v)(new Date(+e[a.time]),"yyyy-MM-dd hh:mm")}))),c?Pe(De.Z,{display:["inline-block","none"],text:i("launchpad2.0:Launchpad History"),locale:s,location:"stackSchema"}):null)};var ze=a("leJf"),Ue=s().createElement;const Me=({fetchProjectDetail:e})=>{const t=(0,u.useSelector)((({stackSchemaDetail:e})=>e)),{isPC:a}=(0,m.F)(),{i18n:{language:o}}=(0,p.$)();(0,n.useMemo)((()=>/cn/i.test(o)?"w5glqkw58f":"cx0cbidyi9"),[o]);return Ue(l.Z,{bg:"bg2"},d.Q6?null:Ue(ze.Z,{countDownComponent:a?null:Ue(l.Z,{ml:["sm","auto"],mr:["sm",0],mt:["24px",0]},Ue(ge.Z,{data:t,theme:"detail",timeoutCallBack:e}))}),Ue(r.Z,{justifyContent:"center",bg:"bg1",sx:{borderTopLeftRadius:"32px",borderTopRightRadius:"32px"}},Ue(l.Z,{width:"100%",maxWidth:"1248px"},Ue(ke,null),Ue(Ae,{data:t,content:Ue(fe,null),fetchProjectDetail:e}),Ue(c.Z,{info:t.projectInfo,links:t.links,productCode:t.productCode}))))};var Be=s().createElement;const Ee=()=>{const e=(0,u.useSelector)((({app:e})=>e.login)),{pid:t,testFlag:a,lang:o}=(0,v.UO)(),{fetchKycDetail:i,fetchPositionInfo:l,fetchDetail:r}=(0,u.useDispatch)().stackSchemaDetail,c=(0,n.useCallback)((()=>r({pid:t,testFlag:a,lang:o})),[t,a,o]);return(0,n.useEffect)((()=>{r({pid:t,testFlag:a,lang:o})}),[]),(0,n.useEffect)((()=>{e&&(i(t),l({projectId:t}))}),[e]),Be(s().Fragment,null,Be(Me,{fetchProjectDetail:c}))};Ee.namespaces=["launchpad2.0"],Ee.getInitialProps=async e=>await e.appContext.store.dispatch.stackSchemaDetail.fetchDetail({pid:e.params.pid,testFlag:e.params.testFlag,lang:e.params.locale});const He=(0,o.b)((0,i.X)(Ee))}}]);