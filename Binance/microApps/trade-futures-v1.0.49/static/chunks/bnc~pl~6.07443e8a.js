(self["webpackJsonp_trade-futures"]=self["webpackJsonp_trade-futures"]||[]).push([[726,34],{bN60:(e,t,n)=>{"use strict";n.d(t,{a:()=>L,H:()=>K});var r,i=n("D57K"),l=n("/SIk"),a=n.n(l),o=n("aWzz"),s=n.n(o),c=n("XgzE"),d=n("Bcqe"),p=n.n(d),u=n("2q8g"),m=n.n(u),h=n("nnRT"),f=n.n(h),v=n("XhNN"),g=n("O94r"),y=n.n(g),x=n("QJpQ"),E=n("DDYV"),_=n("7nmT"),w=n("6i0u"),b={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},S=(0,l.memo)((function(e){var t=e.show,n=void 0===t||t,r=e.fullScreen,l=void 0!==r&&r,o=e.inner,s=e.children,c=e.zIndex;if(!n)return s||null;var d=a().createElement(w.Z,{sx:(0,i.__assign)({zIndex:c||"100"},b)});return l?a().createElement(a().Fragment,null,s,a().createElement("div",{style:{position:o?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",background:"radial-gradient(rgba(0, 0, 0, 0.05) 30%, transparent)",zIndex:2e3}},d)):a().createElement(a().Fragment,null,s,d)}));S.show=function(e){var t=(void 0===e?{}:e).fullScreen,n=void 0!==t&&t;r||(r=document.createElement("div"),document.body.appendChild(r)),_.render(a().createElement(S,{fullScreen:n}),r)},S.hide=function(){r&&_.render(a().createElement(S,{show:!1}),r)};const k=S;var C={fontSize:0,textAlign:"center",padding:"8px 6px",color:"t.secondary"};const z=(0,l.memo)((function(e){var t=e.children,n=(0,i.__rest)(e,["children"]);return a().createElement(v.Z,(0,i.__assign)({sx:C,className:"emptyLine"},n),t)}));var R=n("K3re"),M=n("BE2C"),Z=n("Tr4L"),I=function(){return(0,Z.$)().i18n.language||"undefined"!==typeof window&&window.localStorage.i18nextLng||"en"},H=function(){var e=I();return(0,M.yV)(e)};c.t7.displayName="FixedSizeList";var K=(0,l.memo)((function(e){var t=e.className,n=e.children,r=(0,i.__rest)(e,["className","children"]),l=y()("list-item-entity",t);return a().createElement(a().Fragment,null,a().createElement("div",(0,i.__assign)({className:l},r),n),a().createElement(x.xB,{styles:{".list-item-entity":{display:"flex",alignItems:"center",justifyContent:" space-between",flex:1}}}))})),N=function(){},T=(0,i.__read)([38,40],2),D=T[0],P=T[1],L=function(e){var t=e.displayName||e.name||"Component",n=function(t){var n=function(){var e=H();return(0,R.cp)(e)}();return a().createElement(e,(0,i.__assign)({},t,{direction:n}))};return n.displayName="WithDirection("+t+")",n}(function(e){function t(t){var n,r=e.call(this,t)||this;return r.state={isScrolling:!1,isHover:!1,activeId:0,scrollOffset:0},r.renderItem=function(e){var t=e.index,n=e.style,l=r.props,o=l.dataSource,s=l.itemElement,c=l.openShotCut,d=r.state.activeId,p=!!c&&d===t;return a().createElement(a().Fragment,null,a().createElement("div",{style:n,className:"list-item-container"},a().createElement(s,(0,i.__assign)({},o[t],{activeId:d,active:p}))),a().createElement(x.xB,{styles:{".list-item-container":{display:"flex",alignItems:"center",overflowX:"hidden"}}}))},r.renderChild=function(){var e=r.props,t=e.dataSource,n=void 0===t?[]:t,l=e.itemKey,o=e.itemHeight,s=e.loading,d=void 0!==s&&s,p=e.loadWithContent,u=void 0!==p&&p,m=e.direction,h=e.listSx,f=void 0===h?{}:h,v=e.emptyText,g=e.emptyChildren,y=r.state.isScrolling,x=!d&&0===n.length;r.ListStyle=(0,i.__assign)({direction:m},f);var _=a().createElement(E.Z,{className:"list-auto-sizer"},(function(e){var t=e.width,s=e.height;return a().createElement(c.t7,{style:(0,i.__assign)({direction:m},f),className:"fixed-size-list",width:t,height:s,itemCount:n.length,itemSize:o,itemData:n,itemKey:l,overscanCount:y?10:1,outerRef:r.outerListRef,innerRef:r.innerListRef,useIsScrolling:!0},r.renderItem)}));return d?u?a().createElement(a().Fragment,null,a().createElement(k,{fullScreen:!0,inner:!0}),_):a().createElement(k,{fullScreen:!0,inner:!0}):x?a().createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexGrow:1}},g||(v?a().createElement(z,null,v):null)):_},r.handleScroll=p()(r.handleScroll.bind(r),200),r.handleMouseEnter=r.handleMouseEnter.bind(r),r.handleMouseLeave=r.handleMouseLeave.bind(r),r.handleKeyDown=r.handleKeyDown.bind(r),r.keyScroll=r.keyScroll.bind(r),r.outerListRef=a().createRef(null),r.innerListRef=a().createRef(null),r.maxHeight=t.itemHeight,r.minHeight=.1,r.eventAttached=!1,r.keys=((n={})[D]=0,n[P]=0,n),r}return(0,i.__extends)(t,e),t.prototype.componentDidMount=function(){this.props.openShotCut&&(this.eventAttached=!0,document.addEventListener("keydown",this.handleKeyDown),this.keyScroll())},t.prototype.componentDidUpdate=function(){this.props.openShotCut&&(this.eventAttached||document.addEventListener("keydown",this.handleKeyDown),this.keyScroll())},t.prototype.componentWillUnmount=function(){this.eventAttached&&(this.eventAttached=!1,document.removeEventListener("keydown",this.handleKeyDown)),this.clearTimer()},t.prototype.shouldComponentUpdate=function(e,t){return f()(e.dataSource,this.props.dataSource)?e.loading!==this.props.loading||e.itemHeight!==this.props.itemHeight||e.listSx!==this.props.listSx:(!t.isScrolling||!this.state.isScrolling)&&t.isHover===this.state.isHover},t.prototype.handleMouseEnter=function(){this.setState({isHover:!0})},t.prototype.handleMouseLeave=function(){this.setState({isHover:!1})},t.prototype.handleScroll=function(){var e=this;this.state.isHover&&(this.setState({isScrolling:!0}),this.clearTimer(),this.timer=setTimeout((function(){e.setState({isScrolling:!1})}),1e3))},t.prototype.clearTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},t.prototype.handleKeyDown=function(e){var t,n=e.keyCode,r=e.metaKey,i=e.ctrlKey,l=this.props,a=l.itemHeight,o=l.dataSource,s=l.openShotCut,c=l.onKeyDownCallback,d=l.tradeType,p=this.state.activeId;if(s&&(13===n||n===D||n===P)&&(e&&e.preventDefault(),e.stopPropagation(),this.keys=((t={})[D]=Math.max(this.minHeight,this.state.scrollOffset-a),t[P]=Math.min(this.state.scrollOffset+a,this.maxHeight),t),this.keys[n]&&this.scrollItem(this.keys[n]),13===n)){var u=o.filter((function(e,t){return t===p})),h=u.length?u[0]:{};m()(c)&&c({data:h,metaKey:r,ctrlKey:i,tradeType:d})}},t.prototype.keyScroll=function(){this.innerListRef.current&&(this.maxHeight=this.innerListRef.current.style.height.replace("px","")||this.props.itemHeight),this.outerListRef.current&&this.outerListRef.current.scrollTo({left:0,top:this.state.scrollOffset,behavior:"auto"})},t.prototype.scrollItem=function(e){this.setState({activeId:Math.floor(e/this.props.itemHeight),scrollOffset:e})},t.prototype.render=function(){var e=this.props,t=e.variant,n=e.sx,r=e.tx,i=e.scrollPerf,l=void 0===i||i;return a().createElement(v.Z,{onScroll:l?this.handleScroll:N,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,__css:{position:"relative",display:"flex",flexDirection:"column",flexGrow:1},className:"list-container",variant:t,sx:n,tx:r},this.renderChild())},t.propTypes={dataSource:s().array.isRequired,itemElement:s().elementType.isRequired,itemHeight:s().number.isRequired,itemKey:s().func,sx:s().object,tx:s().string,variant:s().string,loading:s().bool,openShotCut:s().bool,onKeyDownCallback:s().func,emptyText:s().string,tradeType:s().string},t}(a().Component))},"2yOj":(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n("D57K"),i=n("/SIk"),l=n.n(i),a=n("Yn3l"),o=n("Bb2c"),s=n("DhFf"),c=n("KM4q"),d={"&::placeholder":{fontSize:0,color:"t.disabled"}},p={"& input":{fontSize:0,mt:"-5px"},lineHeight:1.5,height:"24px"},u=(0,i.forwardRef)((function(e,t){var n=e.sx,u=e.value,m=e.search,h=e.placeholder,f=(0,r.__read)((0,i.useState)(u),2),v=f[0],g=f[1];(0,a.Z)((function(){return m(v)}),100,[v]);return l().createElement(o.Z,(0,r.__assign)({className:"trade-widget-search",ref:t,prefix:l().createElement(s.Z,{size:20,color:"t.disabled"}),defaultValue:u,value:v,labelFixed:!0,placeholder:h,onChange:function(e){return g(e.target.value)},sx:d,"data-testid":"searchInput",boxProps:{sx:(0,r.__assign)((0,r.__assign)({},p),n)}},v.length>0&&{suffix:l().createElement(c.Z,{fontSize:16,color:"t.disabled",onClick:function(){return g("")}})}))}));const m=l().memo(u)},kFpN:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n("D57K"),i=n("XhNN"),l=n("/SIk"),a=n.n(l),o=n("RdyI");const s=function(e){return a().createElement(o.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:e.color},e),a().createElement("path",{d:"M9 10.368v-1.4L11.968 6l2.968 2.968v1.4H9zM14.936 13v1.4l-2.968 2.968L9 14.4V13h5.936z",fill:"#C1C6CD"}))};const c=function(e){return a().createElement(o.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),a().createElement("path",{opacity:.5,d:"M16 12.85v1.65L12.75 18 9.5 14.5v-1.65H16z",fill:"#848E9C"}),a().createElement("path",{d:"M9.5 9.745v-1.65l3.25-3.5 3.25 3.5v1.65H9.5z",fill:"url(#sorting-up-color-s24_svg__paint0_linear)"}),a().createElement("defs",null,a().createElement("linearGradient",{id:"sorting-up-color-s24_svg__paint0_linear",x1:16,y1:4.594,x2:9.5,y2:4.594,gradientUnits:"userSpaceOnUse"},a().createElement("stop",{stopColor:"#EFB80B"}),a().createElement("stop",{offset:1,stopColor:"#FBDA3C"}))))};const d=function(e){return a().createElement(o.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),a().createElement("path",{opacity:.5,d:"M9 10.153V8.5L12.25 5l3.25 3.501v1.652H9z",fill:"#848E9C"}),a().createElement("path",{d:"M15.5 13.257v1.652l-3.25 3.5L9 14.91v-1.652h6.5z",fill:"url(#sorting-down-color-s24_svg__paint0_linear)"}),a().createElement("defs",null,a().createElement("linearGradient",{id:"sorting-down-color-s24_svg__paint0_linear",x1:9,y1:18.41,x2:15.5,y2:18.41,gradientUnits:"userSpaceOnUse"},a().createElement("stop",{stopColor:"#EFB80B"}),a().createElement("stop",{offset:1,stopColor:"#FBDA3C"}))))};var p={marginTop:"6px",transform:"scale(1.6)",pointerEvents:"none",flex:"none",color:" t.third"},u={display:"flex",color:"t.third","& .sort-item-wrap":{display:"flex"},"& .sort-item-label-icon":{display:"flex",cursor:"pointer"},"& .sort-item-label":{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontSize:12,color:" t.third"}},m=["default","descend","ascend"],h=(0,l.memo)((function(e){var t=e.sortDirections;return null===t?a().createElement(s,{size:10,sx:p,color:"t.third"}):"descend"===t?a().createElement(c,{size:10,sx:p}):"ascend"===t?a().createElement(d,{size:10,sx:p}):a().createElement(s,{size:10,sx:p})}));const f=(0,l.memo)((function(e){var t=e.value,n=e.label,r=e.order,i=e.getOrder,o=e.style,s=e.showSort,c=e.renderProps,d=(0,l.useCallback)((function(e){return function(){var n,r=m.indexOf(e);r<2?r++:r=0,i(((n={})[t]=m[r],n))}}),[i]);return a().createElement("div",{className:"sort-item-wrap",style:o},s?a().createElement("div",{onClick:d(r),className:"sort-item-label-icon"},a().createElement("div",{className:"sort-item-label"},n),a().createElement(h,{sortDirections:r})):a().createElement("div",{className:"sort-item-label-icon"},a().createElement("div",{className:"sort-item-label"},n)),c)}));const v=(0,l.memo)((function(e){var t=e.group,n=e.getGroupOrderKey,l=e.showSort,o=e.active,s=e.renderProps,c=Object.keys(o).length&&Object.keys(o)[0],d=Object.values(o).length?Object.values(o)[0]:"default",p=function(e){n(e)};return a().createElement(i.Z,{sx:u},t.map((function(e,n){var i=e.key,o=e.label,u=(0,r.__rest)(e,["key","label"]);return a().createElement(f,{key:i,value:i,label:o,getOrder:p,showSort:l,style:u,order:c===i?d:"default",renderProps:t.length-1===n?s:""})})))}))},"17TW":(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n("D57K"),i=n("/SIk"),l=n.n(i),a=n("FZ38"),o=n("XhNN"),s=n("9rpF"),c=n("RdyI");const d=function(e){return l().createElement(c.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{d:"M19.5 4.5h-15v2h15v-2zM19.5 17.5h-15v2h15v-2zM19.5 11h-15v2h15v-2z",fill:"currentColor"}))};var p={bg:"popupBg",color:"t.primary"},u={bg:"popupBg",color:"t.primary",borderRadius:"4px",boxShadow:"elevation2",".tabBtn":{textAlign:"left",padding:"8px 16px",maxWidth:"227px"},".tabText":{fontSize:"14px",maxWidth:"227px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}},m={display:"flex",width:"259px",flexWrap:"wrap",bg:"popupBg",color:"t.primary",padding:"10px 16px 0 16px",borderRadius:"4px",boxShadow:"elevation2",".tabBtn":{textAlign:"center",minWidth:"48px",padding:"0 4px",mb:"16px",maxWidth:"227px"},".tabText":{fontSize:"14px",maxWidth:"227px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}},h={display:"flex",width:"100%",justifyContent:"space-between",height:"24px","& .left":{display:"flex",flexWrap:"wrap",overflow:"hidden"}},f={alignItems:"center",justifyContent:"center",color:"t.third",cursor:"pointer",fontSize:0,p:"minor",borderRadius:"2px","&:hover":{color:"primary"},"& .btnChildren":{display:"flex",alignItems:"center"}},v={color:"t.yellow"},g=(0,i.forwardRef)((function(e,t){var n=e.active,i=(0,r.__rest)(e,["active"]),a=n?(0,r.__assign)((0,r.__assign)({},f),v):f;return l().createElement(o.Z,(0,r.__assign)({sx:a},i,{ref:t}))})),y=(0,i.forwardRef)((function(e,t){var n=e.active,i=(0,r.__rest)(e,["active"]),a=n?(0,r.__assign)((0,r.__assign)({},f),v):f;return l().createElement(o.Z,(0,r.__assign)({sx:a},i,{ref:t}))}));const x=l().memo(g);var E=n("OV9X"),_=n("dxf2"),w=((0,i.memo)((function(e){var t=e.trees,n=e.getCoin,i=e.activeTab,s=e.tooltipProps,c=t.length>3;return l().createElement(o.Z,{sx:c?m:u},t.map((function(e){var t=e.description,o=e.sectionKey,c=e.display,d=t?a.Z:l().Fragment,p=(0,r.__assign)({arrow:!0,placement:"right",tip:t,container:function(){},sx:{display:"initial"}},s);return l().createElement(d,(0,r.__assign)({key:o},t?p:{}),l().createElement("div",{className:"tabBtn"},l().createElement(y,{key:o,onClick:function(){return n({display:c,sectionKey:o})},active:o===i},l().createElement(E.Z,{className:"tabText"},c))))})))})),(0,i.memo)((function(e){var t=e.trees,n=e.getCoin,i=e.activeTab,s=e.tooltipProps;return l().createElement(o.Z,{sx:p},t.map((function(e){var t=e.description,o=e.sectionKey,c=e.display,p=t?a.Z:l().Fragment,u=(0,r.__assign)({arrow:!0,placement:"right",tip:t,container:function(){},sx:{display:"initial"}},s);return l().createElement(p,(0,r.__assign)({key:o},t?u:{}),l().createElement(g,{key:o,onClick:function(){return n({display:c,sectionKey:o})},active:o===i},l().createElement(E.Z,{style:{display:"flex"}},o?l().createElement(_.Z,{mr:2,size:10}):l().createElement(d,{mr:2,size:10,color:"t.yellow"}),c)))})))})));const b=(0,i.memo)((function(e){var t=e.list,n=e.activeTab,c=e.switchTab,p=e.tabsStyle,u=e.width,m=e.w,f=e.tooltipProps,v=(0,i.useRef)(null),g=(0,r.__read)((0,i.useState)([]),2),y=g[0],E=g[1],_=(0,i.useMemo)((function(){return t.length?t.sort((function(e,t){return e.sortValue-t.sortValue})):[]}),[t]);(0,i.useEffect)((function(){if(v&&v.current){var e=v.current.getBoundingClientRect().width,t=0,n=!1,r=0;Array.from(v.current.children).forEach((function(i,l){t+=Number(i.getBoundingClientRect().width),e&&!n&&t>e&&(n=!0,r=l)})),r>1&&E(_.slice(r,_.length)),0===r&&E([])}}),[m,u,y.length,_.length]);var b=(0,i.useMemo)((function(){return y.filter((function(e){return e.sectionKey===n})).length}),[y,n]);return l().createElement(o.Z,{sx:h},l().createElement("div",{className:"left",ref:v},t.map((function(e){var t=e.description?a.Z:l().Fragment,i=(0,r.__assign)({arrow:!0,tip:e.description,placement:"top",container:function(){}},f);return l().createElement(t,(0,r.__assign)({key:e.sectionKey},e.description?i:{}),l().createElement(x,{active:e.sectionKey===n,onClick:function(){c(e)},style:p},l().createElement("span",{style:{display:"flex"}},e.display)))}))),Boolean(y.length)&&l().createElement("div",{className:"right"},l().createElement(s.ZP,{enablePortal:!0,trigger:"hover",overlay:l().createElement(w,{trees:y,getCoin:function(e){var t=e.sectionKey,n=y.find((function(e){return e.sectionKey===t}));c(n)},activeTab:n,tooltipProps:f})},l().createElement(o.Z,{sx:{padding:"3px 3px 0 3px",borderRadius:"2px",cursor:"pointer",color:b?"t.primary":"t.third",bg:b?"line":"",":hover":{bg:"line",fontWeight:"600",color:"t.primary"}}},l().createElement(d,{sx:{fontSize:"18px"}})))))}))},JSzP:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n("e5RN"),i=n("O94r"),l=n.n(i),a=n("/SIk"),o=n.n(a),s={"& .wrap":{fontSize:"0",marginTop:"4px",display:"flex",flex:1},"& .default":{fontWeight:"400",cursor:"pointer",textAlign:"center",lineHeight:"16px",padding:"0 5px",color:"t.third",mr:"3px","&:hover":{color:"t.primary",backgroundColor:"bg3",borderRadius:"2px"}},"& .active":{color:"t.primary",fontWeight:"500",backgroundColor:"line",borderRadius:"2px"}};const c=o().memo((function(e){var t=e.types,n=void 0===t?[]:t,i=e.type,a=e.onChange,c=e.style;return o().createElement(r.Z,{sx:s,style:c},o().createElement("div",{className:"wrap"},n.map((function(e){return o().createElement("div",{key:e.key,className:l()(["default"," "+(i===e.key?"active":"")]),onClick:function(){return a(e.key)}},e.label)}))))}))},"89i/":(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n("D57K"),i=n("/SIk"),l=n.n(i),a=n("RdyI");const o=function(e){return l().createElement(a.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.85 19.952a8.698 8.698 0 010-12.301L12 1.5l6.15 6.15a8.698 8.698 0 01-12.3 12.302zm11.265-1.825a5.17 5.17 0 00-1.453-4.466L12 10l-3.66 3.661a5.17 5.17 0 00-1.455 4.466 6.7 6.7 0 01.379-9.062L12 4.328l4.737 4.737a6.699 6.699 0 01.379 9.062zM12 20.5a3.178 3.178 0 002.247-5.425L12 12.83l-2.246 2.246A3.178 3.178 0 0012 20.5z",fill:"currentColor"}))}},"9RIL":(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n("D57K"),i=n("/SIk"),l=n.n(i),a=n("RdyI");const o=function(e){return l().createElement(a.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor"},e),l().createElement("path",{d:"M12.7 11.3c.8.8.8 2.1 0 2.9l-2.6 2.6c-.8.8-2.1.8-3 0-.8-.8-.8-2.1 0-3l.3-.3c-.3-.7-.5-1.5-.5-2.3l-1.2 1.2c-1.6 1.6-1.6 4.2 0 5.8 1.6 1.6 4.2 1.6 5.8 0l2.6-2.6c.3-.3.5-.6.7-.9.9-1.5.7-3.6-.7-4.9l-1.4 1.5z",fill:"currentColor"}),l().createElement("path",{d:"M11.3 12.7c-.8-.8-.8-2.1 0-2.9l2.6-2.6c.8-.8 2.1-.8 3 0 .8.8.8 2.1 0 3l-.3.3c.3.7.5 1.5.5 2.3l1.2-1.2c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0L9.9 8.4c-.3.3-.5.6-.7.9-.9 1.5-.7 3.6.7 4.9l1.4-1.5z",fill:"currentColor"}))}},"8Hfj":(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n("D57K"),i=n("/SIk"),l=n.n(i),a=n("RdyI");const o=function(e){return l().createElement(a.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 96 96",fill:"none"},e),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M64 8H26v80h58V28L64 8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4z",fill:"url(#not-found-data-dark_svg__paint0_linear)"}),l().createElement("path",{d:"M62 71l4-4 4 4-4 4-4-4z",fill:"#1E2026"}),l().createElement("path",{d:"M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z",fill:"#474D57"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z",fill:"url(#not-found-data-dark_svg__paint1_linear)"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z",fill:"url(#not-found-data-dark_svg__paint2_linear)"}),l().createElement("defs",null,l().createElement("linearGradient",{id:"not-found-data-dark_svg__paint0_linear",x1:84,y1:10.162,x2:84,y2:88,gradientUnits:"userSpaceOnUse"},l().createElement("stop",{stopColor:"#2B2F36"}),l().createElement("stop",{offset:1,stopColor:"#474D57"})),l().createElement("linearGradient",{id:"not-found-data-dark_svg__paint1_linear",x1:4.172,y1:68.75,x2:24.328,y2:68.75,gradientUnits:"userSpaceOnUse"},l().createElement("stop",{stopColor:"#929AA5"}),l().createElement("stop",{offset:1,stopColor:"#76808F"})),l().createElement("linearGradient",{id:"not-found-data-dark_svg__paint2_linear",x1:15,y1:48,x2:55,y2:48,gradientUnits:"userSpaceOnUse"},l().createElement("stop",{stopColor:"#929AA5"}),l().createElement("stop",{offset:1,stopColor:"#76808F"}))))}},H3O3:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n("D57K"),i=n("/SIk"),l=n.n(i),a=n("RdyI");const o=function(e){return l().createElement(a.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 96 96",fill:"none"},e),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M64 8H26v80h58V28L64 8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4z",fill:"url(#not-found-data-light_svg__paint0_linear)"}),l().createElement("path",{d:"M62 71l4-4 4 4-4 4-4-4z",fill:"#fff"}),l().createElement("path",{d:"M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z",fill:"#E6E8EA"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.171 73.171l14.5-14.5 5.657 5.658-14.5 14.5-5.657-5.657z",fill:"url(#not-found-data-light_svg__paint1_linear)"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z",fill:"url(#not-found-data-light_svg__paint2_linear)"}),l().createElement("defs",null,l().createElement("linearGradient",{id:"not-found-data-light_svg__paint0_linear",x1:84,y1:10.162,x2:84,y2:88,gradientUnits:"userSpaceOnUse"},l().createElement("stop",{stopColor:"#F5F5F5"}),l().createElement("stop",{offset:1,stopColor:"#E6E8EA"})),l().createElement("linearGradient",{id:"not-found-data-light_svg__paint1_linear",x1:4.171,y1:68.75,x2:24.328,y2:68.75,gradientUnits:"userSpaceOnUse"},l().createElement("stop",{stopColor:"#929AA5"}),l().createElement("stop",{offset:1,stopColor:"#76808F"})),l().createElement("linearGradient",{id:"not-found-data-light_svg__paint2_linear",x1:15,y1:48,x2:55,y2:48,gradientUnits:"userSpaceOnUse"},l().createElement("stop",{stopColor:"#929AA5"}),l().createElement("stop",{offset:1,stopColor:"#76808F"}))))}},dcev:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n("D57K"),i=n("/SIk"),l=n.n(i),a=n("RdyI");const o=function(e){return l().createElement(a.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.06 1.579l1.811-.008 2.736 5.765 6.046.937.563 1.686-4.415 4.526 1.015 6.357-1.473 1.032-5.375-2.987-5.375 2.987-1.472-1.04 1.074-6.353-4.41-4.522.562-1.686 6.04-.936 2.674-5.758z",fill:"currentColor"}))}},eIfy:e=>{"use strict";const t=(e,t,n)=>{const r=t<0?e.length+t:t;if(r>=0&&r<e.length){const r=n<0?e.length+n:n,[i]=e.splice(t,1);e.splice(r,0,i)}};e.exports=(e,n,r)=>(e=[...e],t(e,n,r),e),e.exports.mutate=t},"/mDK":(e,t,n)=>{"use strict";n.d(t,{r:()=>o,A:()=>s});var r=n("5vwO"),i=n("GpFh"),l=n("/SIk");const a=({lowPrice:e,lastPrice:t,highPrice:n,openPrice:r})=>{const i=+t-+r;return{lowPrice:e,lastPrice:t,highPrice:n,openPrice:r,difference:[i>=0?"+":"",(Number(r)?i/+r*100:0).toFixed(2)].join(""),bigThan:(l=t,a=r,+l>=+a)};var l,a};function o(e){const{baseTicker:t,marketTabs:n}=(0,l.useMemo)((()=>({baseTicker:Object.keys(e).reduce(((t,n)=>{const l=e[n]||{},{low:o,close:s,high:c,open:d,parentMarket:p,quoteAsset:u,etf:m}=l,h=(0,i.Z)(l,["low","close","high","open","parentMarket","quoteAsset","etf"]),f=m?"ETF":"USD\u24c8"===p?"FIAT":p,v=a({lowPrice:o,lastPrice:s,highPrice:c,openPrice:d});return t[n]=Object.assign(h,(0,r.Z)({parentMarket:f,quoteAsset:u},v)),t}),{}),marketTabs:void 0})),[e]);return{baseTicker:t,marketTabs:n}}function s(e,t){return Object.keys(t).reduce(((e,n)=>{const i=e[n];if(i){const{lowPrice:l,lastPrice:o,highPrice:s,openPrice:c}=t[n],d=Number(o)-Number(i.lastPrice),p=i.lastPrice?0===d?i.lastFlag:d:void 0;e[n]=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},i),t[n]),a({lowPrice:l,lastPrice:o,highPrice:s,openPrice:c})),{},{lastFlag:p})}return e}),e)}}}]);