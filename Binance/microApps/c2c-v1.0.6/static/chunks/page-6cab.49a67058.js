(self.webpackJsonp_c2c=self.webpackJsonp_c2c||[]).push([[453],{gYv3:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>D});var r=o("/SIk"),i=o.n(r),s=o("szIg"),a=o("Q755"),n=o("7IDl"),d=o("8Lpi"),l=o("rrXQ"),c=o("G6rc"),u=o("Ne75"),f=o("xjo1"),p=o("voGk"),m=o("nAdt"),h=o("KkEV"),b=o("sJ8p"),v=o("P8ba"),N=i().createElement;const g=(0,n.D8)((()=>Promise.all([o.e(661),o.e(351),o.e(635)]).then(o.bind(o,"szNy"))),{ssr:!1,webpack:()=>["szNy"],modules:["./Info"]}),y=(0,n.D8)((()=>Promise.all([o.e(661),o.e(351)]).then(o.bind(o,"3rj7"))),{ssr:!1,webpack:()=>["3rj7"],modules:["../../components/RWDChat"]}),k=(0,s.connect)(null,(e=>({beginSocket:e.chat.beginSocket,closeSocket:e.chat.closeSocket})))((e=>{const t=(0,s.useDispatch)(),{isLoggedIn:o}=(0,d.b)(),{isOwner:a,orderInfo:n,showChat:l,wsNotice:c}=(0,s.useSelector)((e=>e.orderDetail)),u=(0,r.useCallback)((e=>{t.orderDetail.update({showChat:e})}),[t.orderDetail]),f=(0,r.useCallback)((async()=>{const{data:o}=await t.orderDetail.postOrderMatchByOrderNumber({orderNumber:e.id});o&&null!==o&&void 0!==o&&o.advOrderNumber||(window.location.href="/not-found")}),[t.orderDetail]),p=(0,r.useCallback)((()=>{t.orderDetail.getAppealProgress(e.id)}),[t.orderDetail]);(0,r.useEffect)((()=>{p()}),[p]),(0,r.useEffect)((()=>{f()}),[f]);const k=(0,r.useCallback)((e=>{(null===n||void 0===n?void 0:n.orderNumber)===e.orderNumber&&(t.orderDetail.update({orderInfo:(0,m.Z)((0,m.Z)({},n),e)}),p(),t.orderDetail.update({showTwice:!1}))}),[n,t.orderDetail]);(0,r.useEffect)((()=>{if(n)return e.beginSocket(),(0,v.V)("ORDER_STATUS",k),()=>{e.closeSocket(),(0,v.l)("ORDER_STATUS",k)}}),[JSON.stringify(n)]),(0,r.useEffect)((()=>{n.fiatUnit&&n.orderNumber&&o&&t.orderDetail.postWebsocketNotice({fiat:n.fiatUnit,orderNo:n.orderNumber,scene:"chat"})}),[n.fiatUnit,n.orderNumber,o]),(0,r.useEffect)((()=>{if(o&&null!==n&&void 0!==n&&n.asset&&null!==n&&void 0!==n&&n.fiatUnit&&"SELL"===(null===n||void 0===n?void 0:n.tradeType)&&null!==n&&void 0!==n&&n.payMethods&&a){let o=[],r={};for(let t=0;t<(null===(e=n.payMethods)||void 0===e?void 0:e.length);t++){var e;r[n.payMethods[t].identifier]||(r[n.payMethods[t].identifier]=!0,o.push(n.payMethods[t].identifier))}a&&t.common.getCommissionRate({asset:n.asset,fiat:n.fiatUnit,tradeMethodIdentifiers:o,tradeType:n.tradeType})}}),[o,a,null===n||void 0===n?void 0:n.asset,null===n||void 0===n?void 0:n.fiatUnit,null===n||void 0===n?void 0:n.tradeType,null===n||void 0===n?void 0:n.payMethods]),(0,r.useEffect)((()=>{o&&t.common.getIsNewUser()}),[o]);const w=(0,r.useMemo)((()=>{if(n){const{tradeType:e,orderNumber:t,sellerNickname:o,buyerNickname:r,sellerName:i,buyerName:s,sellerMobilePhone:a,buyerMobilePhone:d}=n;return{orderNumber:t,nickname:"BUY"===e?o:r,name:"BUY"===e?i:s,phone:"BUY"===e?a:d,showChat:l,setShowChat:u}}return{}}),[n,l,u]);return N(h.Z,{justifyContent:"space-between"},n?N(i().Fragment,null,N(g,{id:e.id,refreshAppeal:p,refresh:f}),N(b.Z,{mt:"16px"},N(y,Object.assign({},w,{wsNotice:c})))):"")}));var w=i().createElement;const D=function(){const e=(0,s.useDispatch)(),{metaData:t,configs:o}=(0,r.useContext)(u.Il),{isLoggedIn:i}=(0,d.b)(),{orderNo:m}=(0,n.Hb)().query;return(0,r.useEffect)((()=>{m&&/^\d{1,}$/.test(m)||(window.location.href="/not-found")}),[m]),(0,a.Z)((()=>{e.common.getNewTradeMethodList()})),(0,r.useEffect)((()=>{!1===i?(0,l.GL)():!0===i&&e.common.getUserMigrateQueryStatus()}),[i]),w(c.Z,{metaData:t,configs:o},w(f.Z,{linkType:"fiatOrderDetail"}),i&&w(p.vR,{sx:{minHeight:"100%",width:["100%","100%","1136px"],px:["16px","24px",0]}},w(k,{id:m})))}}}]);