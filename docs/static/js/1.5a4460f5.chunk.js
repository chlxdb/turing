(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[1],{223:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=n.createContext(void 0),c=function(e){var t=e.children,a=e.size;return n.createElement(r.Consumer,null,(function(e){return n.createElement(r.Provider,{value:a||e},t)}))};t.b=r},256:function(e,t,a){"use strict";var n=a(2),r=a(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},o=a(31),i=function(e,t){return r.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:c}))};i.displayName="CloseOutlined";t.a=r.forwardRef(i)},644:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(0),o=a(4),i=a(8),l=a(7),s=a(2),u=a(6),d=a.n(u),f=a(37),b=a(94),v=a(33),m=a(15),p=a(10),h=a(48);function O(e){var t=Object(c.useRef)(),a=Object(c.useRef)(!1);return Object(c.useEffect)((function(){return function(){a.current=!0,p.a.cancel(t.current)}}),[]),function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];a.current||(p.a.cancel(t.current),t.current=Object(p.a)((function(){e.apply(void 0,r)})))}}var y=a(28);function j(e,t){var a,n=e.prefixCls,o=e.id,i=e.active,l=e.tab,s=l.key,u=l.tab,f=l.disabled,b=l.closeIcon,v=e.closable,m=e.renderWrapper,p=e.removeAriaLabel,h=e.editable,O=e.onClick,j=e.onRemove,g=e.onFocus,E=e.style,x="".concat(n,"-tab");c.useEffect((function(){return j}),[]);var C=h&&!1!==v&&!f;function w(e){f||O(e)}var k=c.createElement("div",{key:s,ref:t,className:d()(x,(a={},Object(r.a)(a,"".concat(x,"-with-remove"),C),Object(r.a)(a,"".concat(x,"-active"),i),Object(r.a)(a,"".concat(x,"-disabled"),f),a)),style:E,onClick:w},c.createElement("div",{role:"tab","aria-selected":i,id:o&&"".concat(o,"-tab-").concat(s),className:"".concat(x,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(s),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),w(e)},onKeyDown:function(e){[y.a.SPACE,y.a.ENTER].includes(e.which)&&(e.preventDefault(),w(e))},onFocus:g},u),C&&c.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(x,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:s,event:t})}},b||h.removeIcon||"\xd7"));return m?m(k):k}var g=c.forwardRef(j),E={width:0,height:0,left:0,top:0};var x={width:0,height:0,left:0,top:0,right:0};var C=a(29),w=a(57),k={adjustX:1,adjustY:1},N=[0,0],P={topLeft:{points:["bl","tl"],overflow:k,offset:[0,-4],targetOffset:N},topCenter:{points:["bc","tc"],overflow:k,offset:[0,-4],targetOffset:N},topRight:{points:["br","tr"],overflow:k,offset:[0,-4],targetOffset:N},bottomLeft:{points:["tl","bl"],overflow:k,offset:[0,4],targetOffset:N},bottomCenter:{points:["tc","bc"],overflow:k,offset:[0,4],targetOffset:N},bottomRight:{points:["tr","br"],overflow:k,offset:[0,4],targetOffset:N}};var S=c.forwardRef((function(e,t){var a=e.arrow,n=void 0!==a&&a,i=e.prefixCls,s=void 0===i?"rc-dropdown":i,u=e.transitionName,f=e.animation,b=e.align,v=e.placement,m=void 0===v?"bottomLeft":v,p=e.placements,h=void 0===p?P:p,O=e.getPopupContainer,y=e.showAction,j=e.hideAction,g=e.overlayClassName,E=e.overlayStyle,x=e.visible,C=e.trigger,k=void 0===C?["hover"]:C,N=Object(l.a)(e,["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),S=c.useState(),T=Object(o.a)(S,2),I=T[0],R=T[1],M="visible"in e?x:I,A=c.useRef(null);c.useImperativeHandle(t,(function(){return A.current}));var L=function(){var t=e.overlay;return"function"===typeof t?t():t},B=function(t){var a=e.onOverlayClick,n=L().props;R(!1),a&&a(t),n.onClick&&n.onClick(t)},K=function(){var e=L(),t={prefixCls:"".concat(s,"-menu"),onClick:B};return"string"===typeof e.type&&delete t.prefixCls,c.createElement(c.Fragment,null,n&&c.createElement("div",{className:"".concat(s,"-arrow")}),c.cloneElement(e,t))},D=j;return D||-1===k.indexOf("contextMenu")||(D=["click"]),c.createElement(w.a,Object.assign({},N,{prefixCls:s,ref:A,popupClassName:d()(g,Object(r.a)({},"".concat(s,"-show-arrow"),n)),popupStyle:E,builtinPlacements:h,action:k,showAction:y,hideAction:D||[],popupPlacement:m,popupAlign:b,popupTransitionName:u,popupAnimation:f,popupVisible:M,stretch:function(){var t=e.minOverlayWidthMatchTrigger,a=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!a}()?"minWidth":"",popup:"function"===typeof e.overlay?K:K(),onPopupVisibleChange:function(t){var a=e.onVisibleChange;R(t),"function"===typeof a&&a(t)},getPopupContainer:O}),function(){var t=e.children,a=t.props?t.props:{},n=d()(a.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(s,"-open")}());return I&&t?c.cloneElement(t,{className:n}):t}())}));function T(e,t){var a=e.prefixCls,n=e.editable,r=e.locale,o=e.style;return n&&!1!==n.showAdd?c.createElement("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){n.onEdit("add",{event:e})}},n.addIcon||"+"):null}var I=c.forwardRef(T);function R(e,t){var a=e.prefixCls,n=e.id,i=e.tabs,l=e.locale,s=e.mobile,u=e.moreIcon,f=void 0===u?"More":u,b=e.moreTransitionName,v=e.style,m=e.className,p=e.editable,h=e.tabBarGutter,O=e.rtl,j=e.onTabClick,g=Object(c.useState)(!1),E=Object(o.a)(g,2),x=E[0],w=E[1],k=Object(c.useState)(null),N=Object(o.a)(k,2),P=N[0],T=N[1],R="".concat(n,"-more-popup"),M="".concat(a,"-dropdown"),A=null!==P?"".concat(R,"-").concat(P):null,L=null===l||void 0===l?void 0:l.dropdownAriaLabel,B=c.createElement(C.f,{onClick:function(e){var t=e.key,a=e.domEvent;j(t,a),w(!1)},id:R,tabIndex:-1,role:"listbox","aria-activedescendant":A,selectedKeys:[P],"aria-label":void 0!==L?L:"expanded dropdown"},i.map((function(e){return c.createElement(C.d,{key:e.key,id:"".concat(R,"-").concat(e.key),role:"option","aria-controls":n&&"".concat(n,"-panel-").concat(e.key),disabled:e.disabled},e.tab)})));function K(e){for(var t=i.filter((function(e){return!e.disabled})),a=t.findIndex((function(e){return e.key===P}))||0,n=t.length,r=0;r<n;r+=1){var c=t[a=(a+e+n)%n];if(!c.disabled)return void T(c.key)}}Object(c.useEffect)((function(){var e=document.getElementById(A);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[P]),Object(c.useEffect)((function(){x||T(null)}),[x]);var D=Object(r.a)({},O?"marginRight":"marginLeft",h);i.length||(D.visibility="hidden",D.order=1);var W=d()(Object(r.a)({},"".concat(M,"-rtl"),O)),z=s?null:c.createElement(S,{prefixCls:M,overlay:B,trigger:["hover"],visible:x,transitionName:b,onVisibleChange:w,overlayClassName:W,mouseEnterDelay:.1,mouseLeaveDelay:.1},c.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:D,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":R,id:"".concat(n,"-more"),"aria-expanded":x,onKeyDown:function(e){var t=e.which;if(x)switch(t){case y.a.UP:K(-1),e.preventDefault();break;case y.a.DOWN:K(1),e.preventDefault();break;case y.a.ESC:w(!1);break;case y.a.SPACE:case y.a.ENTER:null!==P&&j(P,e)}else[y.a.DOWN,y.a.SPACE,y.a.ENTER].includes(t)&&(w(!0),e.preventDefault())}},f));return c.createElement("div",{className:d()("".concat(a,"-nav-operations"),m),style:v,ref:t},z,c.createElement(I,{prefixCls:a,locale:l,editable:p}))}var M=c.forwardRef(R),A=Object(c.createContext)(null),L=Math.pow(.995,20);function B(e,t){var a=c.useRef(e),n=c.useState({}),r=Object(o.a)(n,2)[1];return[a.current,function(e){var n="function"===typeof e?e(a.current):e;n!==a.current&&t(n,a.current),a.current=n,r({})}]}var K=function(e){var t,a=e.position,n=e.prefixCls,r=e.extra;if(!r)return null;var o={};return r&&"object"===Object(i.a)(r)&&!c.isValidElement(r)?o=r:o.right=r,"right"===a&&(t=o.right),"left"===a&&(t=o.left),t?c.createElement("div",{className:"".concat(n,"-extra-content")},t):null};function D(e,t){var a,i=c.useContext(A),l=i.prefixCls,u=i.tabs,f=e.className,b=e.style,v=e.id,y=e.animated,j=e.activeKey,C=e.rtl,w=e.extra,k=e.editable,N=e.locale,P=e.tabPosition,S=e.tabBarGutter,T=e.children,R=e.onTabClick,D=e.onTabScroll,W=Object(c.useRef)(),z=Object(c.useRef)(),V=Object(c.useRef)(),q=Object(c.useRef)(),H=function(){var e=Object(c.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,c.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),G=Object(o.a)(H,2),Y=G[0],F=G[1],X="top"===P||"bottom"===P,_=B(0,(function(e,t){X&&D&&D({direction:e>t?"left":"right"})})),J=Object(o.a)(_,2),U=J[0],Q=J[1],Z=B(0,(function(e,t){!X&&D&&D({direction:e>t?"top":"bottom"})})),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ae=Object(c.useState)(0),ne=Object(o.a)(ae,2),re=ne[0],ce=ne[1],oe=Object(c.useState)(0),ie=Object(o.a)(oe,2),le=ie[0],se=ie[1],ue=Object(c.useState)(0),de=Object(o.a)(ue,2),fe=de[0],be=de[1],ve=Object(c.useState)(0),me=Object(o.a)(ve,2),pe=me[0],he=me[1],Oe=Object(c.useState)(null),ye=Object(o.a)(Oe,2),je=ye[0],ge=ye[1],Ee=Object(c.useState)(null),xe=Object(o.a)(Ee,2),Ce=xe[0],we=xe[1],ke=Object(c.useState)(0),Ne=Object(o.a)(ke,2),Pe=Ne[0],Se=Ne[1],Te=Object(c.useState)(0),Ie=Object(o.a)(Te,2),Re=Ie[0],Me=Ie[1],Ae=function(e){var t=Object(c.useRef)([]),a=Object(c.useState)({}),n=Object(o.a)(a,2)[1],r=Object(c.useRef)("function"===typeof e?e():e),i=O((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,n({})}));return[r.current,function(e){t.current.push(e),i()}]}(new Map),Le=Object(o.a)(Ae,2),Be=Le[0],Ke=Le[1],De=function(e,t,a){return Object(c.useMemo)((function(){for(var a,n=new Map,r=t.get(null===(a=e[0])||void 0===a?void 0:a.key)||E,c=r.left+r.width,o=0;o<e.length;o+=1){var i,l=e[o].key,u=t.get(l);u||(u=t.get(null===(i=e[o-1])||void 0===i?void 0:i.key)||E);var d=n.get(l)||Object(s.a)({},u);d.right=c-d.left-d.width,n.set(l,d)}return n}),[e.map((function(e){return e.key})).join("_"),t,a])}(u,Be,re),We="".concat(l,"-nav-operations-hidden"),ze=0,Ve=0;function qe(e){return e<ze?ze:e>Ve?Ve:e}X?C?(ze=0,Ve=Math.max(0,re-je)):(ze=Math.min(0,je-re),Ve=0):(ze=Math.min(0,Ce-le),Ve=0);var He=Object(c.useRef)(),Ge=Object(c.useState)(),Ye=Object(o.a)(Ge,2),Fe=Ye[0],Xe=Ye[1];function _e(){Xe(Date.now())}function Je(){window.clearTimeout(He.current)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=De.get(e)||{width:0,height:0,left:0,right:0,top:0};if(X){var a=U;C?t.right<U?a=t.right:t.right+t.width>U+je&&(a=t.right+t.width-je):t.left<-U?a=-t.left:t.left+t.width>-U+je&&(a=-(t.left+t.width-je)),te(0),Q(qe(a))}else{var n=ee;t.top<-ee?n=-t.top:t.top+t.height>-ee+Ce&&(n=-(t.top+t.height-Ce)),Q(0),te(qe(n))}}!function(e,t){var a=Object(c.useState)(),n=Object(o.a)(a,2),r=n[0],i=n[1],l=Object(c.useState)(0),s=Object(o.a)(l,2),u=s[0],d=s[1],f=Object(c.useState)(0),b=Object(o.a)(f,2),v=b[0],m=b[1],p=Object(c.useState)(),h=Object(o.a)(p,2),O=h[0],y=h[1],j=Object(c.useRef)(),g=Object(c.useRef)(),E=Object(c.useRef)(null);E.current={onTouchStart:function(e){var t=e.touches[0],a=t.screenX,n=t.screenY;i({x:a,y:n}),window.clearInterval(j.current)},onTouchMove:function(e){if(r){e.preventDefault();var a=e.touches[0],n=a.screenX,c=a.screenY;i({x:n,y:c});var o=n-r.x,l=c-r.y;t(o,l);var s=Date.now();d(s),m(s-u),y({x:o,y:l})}},onTouchEnd:function(){if(r&&(i(null),y(null),O)){var e=O.x/v,a=O.y/v,n=Math.abs(e),c=Math.abs(a);if(Math.max(n,c)<.1)return;var o=e,l=a;j.current=window.setInterval((function(){Math.abs(o)<.01&&Math.abs(l)<.01?window.clearInterval(j.current):t(20*(o*=L),20*(l*=L))}),20)}},onWheel:function(e){var a=e.deltaX,n=e.deltaY,r=0,c=Math.abs(a),o=Math.abs(n);c===o?r="x"===g.current?a:n:c>o?(r=a,g.current="x"):(r=n,g.current="y"),t(-r,-r)&&e.preventDefault()}},c.useEffect((function(){function t(e){E.current.onTouchMove(e)}function a(e){E.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",a,{passive:!1}),e.current.addEventListener("touchstart",(function(e){E.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){E.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",a)}}),[])}(W,(function(e,t){function a(e,t){e((function(e){return qe(e+t)}))}if(X){if(je>=re)return!1;a(Q,e)}else{if(Ce>=le)return!1;a(te,t)}return Je(),_e(),!0})),Object(c.useEffect)((function(){return Je(),Fe&&(He.current=window.setTimeout((function(){Xe(0)}),100)),Je}),[Fe]);var Qe=function(e,t,a,n,r){var o,i,l,s=r.tabs,u=r.tabPosition,d=r.rtl;["top","bottom"].includes(u)?(o="width",i=d?"right":"left",l=Math.abs(t.left)):(o="height",i="top",l=-t.top);var f=t[o],b=a[o],v=n[o],m=f;return b+v>f&&(m=f-v),Object(c.useMemo)((function(){if(!s.length)return[0,0];for(var t=s.length,a=t,n=0;n<t;n+=1){var r=e.get(s[n].key)||x;if(r[i]+r[o]>l+m){a=n-1;break}}for(var c=0,u=t-1;u>=0;u-=1)if((e.get(s[u].key)||x)[i]<l){c=u+1;break}return[c,a]}),[e,l,m,u,s.map((function(e){return e.key})).join("_"),d])}(De,{width:je,height:Ce,left:U,top:ee},{width:fe,height:pe},{width:Pe,height:Re},Object(s.a)(Object(s.a)({},e),{},{tabs:u})),Ze=Object(o.a)(Qe,2),$e=Ze[0],et=Ze[1],tt={};"top"===P||"bottom"===P?tt[C?"marginRight":"marginLeft"]=S:tt.marginTop=S;var at=u.map((function(e,t){var a=e.key;return c.createElement(g,{id:v,prefixCls:l,key:a,tab:e,style:0===t?void 0:tt,closable:e.closable,editable:k,active:a===j,renderWrapper:T,removeAriaLabel:null===N||void 0===N?void 0:N.removeAriaLabel,ref:Y(a),onClick:function(e){R(a,e)},onRemove:function(){F(a)},onFocus:function(){Ue(a),_e(),W.current&&(C||(W.current.scrollLeft=0),W.current.scrollTop=0)}})})),nt=O((function(){var e,t,a,n,r,c,o,i,l,s=(null===(e=W.current)||void 0===e?void 0:e.offsetWidth)||0,d=(null===(t=W.current)||void 0===t?void 0:t.offsetHeight)||0,f=(null===(a=q.current)||void 0===a?void 0:a.offsetWidth)||0,b=(null===(n=q.current)||void 0===n?void 0:n.offsetHeight)||0,v=(null===(r=V.current)||void 0===r?void 0:r.offsetWidth)||0,m=(null===(c=V.current)||void 0===c?void 0:c.offsetHeight)||0;ge(s),we(d),Se(f),Me(b);var p=((null===(o=z.current)||void 0===o?void 0:o.offsetWidth)||0)-f,h=((null===(i=z.current)||void 0===i?void 0:i.offsetHeight)||0)-b;ce(p),se(h);var O=null===(l=V.current)||void 0===l?void 0:l.className.includes(We);be(p-(O?0:v)),he(h-(O?0:m)),Ke((function(){var e=new Map;return u.forEach((function(t){var a=t.key,n=Y(a).current;n&&e.set(a,{width:n.offsetWidth,height:n.offsetHeight,left:n.offsetLeft,top:n.offsetTop})})),e}))})),rt=u.slice(0,$e),ct=u.slice(et+1),ot=[].concat(Object(m.a)(rt),Object(m.a)(ct)),it=Object(c.useState)(),lt=Object(o.a)(it,2),st=lt[0],ut=lt[1],dt=De.get(j),ft=Object(c.useRef)();function bt(){p.a.cancel(ft.current)}Object(c.useEffect)((function(){var e={};return dt&&(X?(C?e.right=dt.right:e.left=dt.left,e.width=dt.width):(e.top=dt.top,e.height=dt.height)),bt(),ft.current=Object(p.a)((function(){ut(e)})),bt}),[dt,X,C]),Object(c.useEffect)((function(){Ue()}),[j,dt,De,X]),Object(c.useEffect)((function(){nt()}),[C,S,j,u.map((function(e){return e.key})).join("_")]);var vt,mt,pt,ht,Ot=!!ot.length,yt="".concat(l,"-nav-wrap");return X?C?(mt=U>0,vt=U+je<re):(vt=U<0,mt=-U+je<re):(pt=ee<0,ht=-ee+Ce<le),c.createElement("div",{ref:t,role:"tablist",className:d()("".concat(l,"-nav"),f),style:b,onKeyDown:function(){_e()}},c.createElement(K,{position:"left",extra:w,prefixCls:l}),c.createElement(h.a,{onResize:nt},c.createElement("div",{className:d()(yt,(a={},Object(r.a)(a,"".concat(yt,"-ping-left"),vt),Object(r.a)(a,"".concat(yt,"-ping-right"),mt),Object(r.a)(a,"".concat(yt,"-ping-top"),pt),Object(r.a)(a,"".concat(yt,"-ping-bottom"),ht),a)),ref:W},c.createElement(h.a,{onResize:nt},c.createElement("div",{ref:z,className:"".concat(l,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ee,"px)"),transition:Fe?"none":void 0}},at,c.createElement(I,{ref:q,prefixCls:l,locale:N,editable:k,style:Object(s.a)(Object(s.a)({},0===at.length?void 0:tt),{},{visibility:Ot?"hidden":null})}),c.createElement("div",{className:d()("".concat(l,"-ink-bar"),Object(r.a)({},"".concat(l,"-ink-bar-animated"),y.inkBar)),style:st}))))),c.createElement(M,Object(n.a)({},e,{ref:V,prefixCls:l,tabs:ot,className:!Ot&&We})),c.createElement(K,{position:"right",extra:w,prefixCls:l}))}var W=c.forwardRef(D);function z(e){var t=e.id,a=e.activeKey,n=e.animated,o=e.tabPosition,i=e.rtl,l=e.destroyInactiveTabPane,s=c.useContext(A),u=s.prefixCls,f=s.tabs,b=n.tabPane,v=f.findIndex((function(e){return e.key===a}));return c.createElement("div",{className:d()("".concat(u,"-content-holder"))},c.createElement("div",{className:d()("".concat(u,"-content"),"".concat(u,"-content-").concat(o),Object(r.a)({},"".concat(u,"-content-animated"),b)),style:v&&b?Object(r.a)({},i?"marginRight":"marginLeft","-".concat(v,"00%")):null},f.map((function(e){return c.cloneElement(e.node,{key:e.key,prefixCls:u,tabKey:e.key,id:t,animated:b,active:e.key===a,destroyInactiveTabPane:l})}))))}function V(e){var t=e.prefixCls,a=e.forceRender,n=e.className,r=e.style,i=e.id,l=e.active,u=e.animated,f=e.destroyInactiveTabPane,b=e.tabKey,v=e.children,m=c.useState(a),p=Object(o.a)(m,2),h=p[0],O=p[1];c.useEffect((function(){l?O(!0):f&&O(!1)}),[l,f]);var y={};return l||(u?(y.visibility="hidden",y.height=0,y.overflowY="hidden"):y.display="none"),c.createElement("div",{id:i&&"".concat(i,"-panel-").concat(b),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(b),"aria-hidden":!l,style:Object(s.a)(Object(s.a)({},y),r),className:d()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),n)},(l||h||a)&&v)}var q=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],H=0;function G(e,t){var a,u,m=e.id,p=e.prefixCls,h=void 0===p?"rc-tabs":p,O=e.className,y=e.children,j=e.direction,g=e.activeKey,E=e.defaultActiveKey,x=e.editable,C=e.animated,w=void 0===C?{inkBar:!0,tabPane:!1}:C,k=e.tabPosition,N=void 0===k?"top":k,P=e.tabBarGutter,S=e.tabBarStyle,T=e.tabBarExtraContent,I=e.locale,R=e.moreIcon,M=e.moreTransitionName,L=e.destroyInactiveTabPane,B=e.renderTabBar,K=e.onChange,D=e.onTabClick,V=e.onTabScroll,G=Object(l.a)(e,q),Y=function(e){return Object(f.a)(e).map((function(e){if(c.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return Object(s.a)(Object(s.a)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(y),F="rtl"===j;u=!1===w?{inkBar:!1,tabPane:!1}:!0===w?{inkBar:!0,tabPane:!0}:Object(s.a)({inkBar:!0,tabPane:!1},"object"===Object(i.a)(w)?w:{});var X=Object(c.useState)(!1),_=Object(o.a)(X,2),J=_[0],U=_[1];Object(c.useEffect)((function(){U(Object(b.a)())}),[]);var Q=Object(v.a)((function(){var e;return null===(e=Y[0])||void 0===e?void 0:e.key}),{value:g,defaultValue:E}),Z=Object(o.a)(Q,2),$=Z[0],ee=Z[1],te=Object(c.useState)((function(){return Y.findIndex((function(e){return e.key===$}))})),ae=Object(o.a)(te,2),ne=ae[0],re=ae[1];Object(c.useEffect)((function(){var e,t=Y.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ne,Y.length-1)),ee(null===(e=Y[t])||void 0===e?void 0:e.key));re(t)}),[Y.map((function(e){return e.key})).join("_"),$,ne]);var ce=Object(v.a)(null,{value:m}),oe=Object(o.a)(ce,2),ie=oe[0],le=oe[1],se=N;J&&!["left","right"].includes(N)&&(se="top"),Object(c.useEffect)((function(){m||(le("rc-tabs-".concat(H)),H+=1)}),[]);var ue,de={id:ie,activeKey:$,animated:u,tabPosition:se,rtl:F,mobile:J},fe=Object(s.a)(Object(s.a)({},de),{},{editable:x,locale:I,moreIcon:R,moreTransitionName:M,tabBarGutter:P,onTabClick:function(e,t){null===D||void 0===D||D(e,t),ee(e),null===K||void 0===K||K(e)},onTabScroll:V,extra:T,style:S,panes:y});return ue=B?B(fe,W):c.createElement(W,fe),c.createElement(A.Provider,{value:{tabs:Y,prefixCls:h}},c.createElement("div",Object(n.a)({ref:t,id:m,className:d()(h,"".concat(h,"-").concat(se),(a={},Object(r.a)(a,"".concat(h,"-mobile"),J),Object(r.a)(a,"".concat(h,"-editable"),x),Object(r.a)(a,"".concat(h,"-rtl"),F),a),O)},G),ue,c.createElement(z,Object(n.a)({destroyInactiveTabPane:L},de,{animated:u}))))}var Y=c.forwardRef(G);Y.TabPane=V;var F=Y,X=a(109),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},J=a(31),U=function(e,t){return c.createElement(J.a,Object(s.a)(Object(s.a)({},e),{},{ref:t,icon:_}))};U.displayName="PlusOutlined";var Q=c.forwardRef(U),Z=a(256),$=a(65),ee=a(73),te=a(223),ae=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function ne(e){var t,a=e.type,o=e.className,i=e.size,l=e.onEdit,s=e.hideAdd,u=e.centered,f=e.addIcon,b=ae(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),v=b.prefixCls,m=b.moreIcon,p=void 0===m?c.createElement(X.a,null):m,h=c.useContext(ee.b),O=h.getPrefixCls,y=h.direction,j=O("tabs",v);"editable-card"===a&&(t={onEdit:function(e,t){var a=t.key,n=t.event;null===l||void 0===l||l("add"===e?n:a,e)},removeIcon:c.createElement(Z.a,null),addIcon:f||c.createElement(Q,null),showAdd:!0!==s});var g=O();return Object($.a)(!("onPrevClick"in b)&&!("onNextClick"in b),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),c.createElement(te.b.Consumer,null,(function(e){var l,s=void 0!==i?i:e;return c.createElement(F,Object(n.a)({direction:y,moreTransitionName:"".concat(g,"-slide-up")},b,{className:d()((l={},Object(r.a)(l,"".concat(j,"-").concat(s),s),Object(r.a)(l,"".concat(j,"-card"),["card","editable-card"].includes(a)),Object(r.a)(l,"".concat(j,"-editable-card"),"editable-card"===a),Object(r.a)(l,"".concat(j,"-centered"),u),l),o),editable:t,moreIcon:p,prefixCls:j}))}))}ne.TabPane=V;t.a=ne},668:function(e,t,a){"use strict";var n=a(3),r=a(1),c=a(0),o=a(6),i=a.n(o),l=a(24),s=a(73),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},d=function(e){var t=e.prefixCls,a=e.className,o=e.hoverable,l=void 0===o||o,d=u(e,["prefixCls","className","hoverable"]);return c.createElement(s.a,null,(function(e){var o=(0,e.getPrefixCls)("card",t),s=i()("".concat(o,"-grid"),a,Object(n.a)({},"".concat(o,"-grid-hoverable"),l));return c.createElement("div",Object(r.a)({},d,{className:s}))}))},f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},b=function(e){return c.createElement(s.a,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,o=e.className,l=e.avatar,s=e.title,u=e.description,d=f(e,["prefixCls","className","avatar","title","description"]),b=a("card",n),v=i()("".concat(b,"-meta"),o),m=l?c.createElement("div",{className:"".concat(b,"-meta-avatar")},l):null,p=s?c.createElement("div",{className:"".concat(b,"-meta-title")},s):null,h=u?c.createElement("div",{className:"".concat(b,"-meta-description")},u):null,O=p||h?c.createElement("div",{className:"".concat(b,"-meta-detail")},p,h):null;return c.createElement("div",Object(r.a)({},d,{className:v}),m,O)}))},v=a(644),m=a(204),p=a(205),h=a(223),O=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var y=function(e){var t,a,o,u=c.useContext(s.b),f=u.getPrefixCls,b=u.direction,y=c.useContext(h.b),j=e.prefixCls,g=e.className,E=e.extra,x=e.headStyle,C=void 0===x?{}:x,w=e.bodyStyle,k=void 0===w?{}:w,N=e.title,P=e.loading,S=e.bordered,T=void 0===S||S,I=e.size,R=e.type,M=e.cover,A=e.actions,L=e.tabList,B=e.children,K=e.activeTabKey,D=e.defaultActiveTabKey,W=e.tabBarExtraContent,z=e.hoverable,V=e.tabProps,q=void 0===V?{}:V,H=O(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),G=f("card",j),Y=0===k.padding||"0px"===k.padding?{padding:24}:void 0,F=c.createElement("div",{className:"".concat(G,"-loading-block")}),X=c.createElement("div",{className:"".concat(G,"-loading-content"),style:Y},c.createElement(m.a,{gutter:8},c.createElement(p.a,{span:22},F)),c.createElement(m.a,{gutter:8},c.createElement(p.a,{span:8},F),c.createElement(p.a,{span:15},F)),c.createElement(m.a,{gutter:8},c.createElement(p.a,{span:6},F),c.createElement(p.a,{span:18},F)),c.createElement(m.a,{gutter:8},c.createElement(p.a,{span:13},F),c.createElement(p.a,{span:9},F)),c.createElement(m.a,{gutter:8},c.createElement(p.a,{span:4},F),c.createElement(p.a,{span:3},F),c.createElement(p.a,{span:16},F))),_=void 0!==K,J=Object(r.a)(Object(r.a)({},q),(t={},Object(n.a)(t,_?"activeKey":"defaultActiveKey",_?K:D),Object(n.a)(t,"tabBarExtraContent",W),t)),U=L&&L.length?c.createElement(v.a,Object(r.a)({size:"large"},J,{className:"".concat(G,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),L.map((function(e){return c.createElement(v.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(N||E||U)&&(o=c.createElement("div",{className:"".concat(G,"-head"),style:C},c.createElement("div",{className:"".concat(G,"-head-wrapper")},N&&c.createElement("div",{className:"".concat(G,"-head-title")},N),E&&c.createElement("div",{className:"".concat(G,"-extra")},E)),U));var Q=M?c.createElement("div",{className:"".concat(G,"-cover")},M):null,Z=c.createElement("div",{className:"".concat(G,"-body"),style:k},P?X:B),$=A&&A.length?c.createElement("ul",{className:"".concat(G,"-actions")},function(e){return e.map((function(t,a){return c.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},c.createElement("span",null,t))}))}(A)):null,ee=Object(l.a)(H,["onTabChange"]),te=I||y,ae=i()(G,(a={},Object(n.a)(a,"".concat(G,"-loading"),P),Object(n.a)(a,"".concat(G,"-bordered"),T),Object(n.a)(a,"".concat(G,"-hoverable"),z),Object(n.a)(a,"".concat(G,"-contain-grid"),function(){var t;return c.Children.forEach(e.children,(function(e){e&&e.type&&e.type===d&&(t=!0)})),t}()),Object(n.a)(a,"".concat(G,"-contain-tabs"),L&&L.length),Object(n.a)(a,"".concat(G,"-").concat(te),te),Object(n.a)(a,"".concat(G,"-type-").concat(R),!!R),Object(n.a)(a,"".concat(G,"-rtl"),"rtl"===b),a),g);return c.createElement("div",Object(r.a)({},ee,{className:ae}),o,Q,Z,$)};y.Grid=d,y.Meta=b;t.a=y}}]);
//# sourceMappingURL=1.5a4460f5.chunk.js.map