(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[10],{248:function(e,t,a){"use strict";var n=a(4),r=a(0),c=a(44);t.a=function(){var e=Object(r.useState)({}),t=Object(n.a)(e,2),a=t[0],s=t[1];return Object(r.useEffect)((function(){var e=c.a.subscribe((function(e){s(e)}));return function(){return c.a.unsubscribe(e)}}),[]),a}},272:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a(87),s=a(73),o=function(e){return e?"function"===typeof e?e():e:null},l=a(47),i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},f=r.forwardRef((function(e,t){var a=e.prefixCls,f=e.title,m=e.content,p=i(e,["prefixCls","title","content"]),u=r.useContext(s.b).getPrefixCls,b=u("popover",a),j=u();return r.createElement(c.a,Object(n.a)({},p,{prefixCls:b,ref:t,overlay:function(e){return r.createElement(r.Fragment,null,f&&r.createElement("div",{className:"".concat(e,"-title")},o(f)),r.createElement("div",{className:"".concat(e,"-inner-content")},o(m)))}(b),transitionName:Object(l.b)(j,"zoom-big",p.transitionName)}))}));f.displayName="Popover",f.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};t.a=f},641:function(e,t,a){},648:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(8),s=a(4),o=a(0),l=a(6),i=a.n(l),f=a(48),m=a(25),p=a(73),u=a(65),b=a(44),j=a(248),d=o.createContext("default"),h=function(e){var t=e.children,a=e.size;return o.createElement(d.Consumer,null,(function(e){return o.createElement(d.Provider,{value:a||e},t)}))},O=d,v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},x=function(e,t){var a,l,d=o.useContext(O),h=o.useState(1),x=Object(s.a)(h,2),g=x[0],y=x[1],N=o.useState(!1),E=Object(s.a)(N,2),w=E[0],C=E[1],P=o.useState(!0),S=Object(s.a)(P,2),z=S[0],k=S[1],_=o.useRef(),I=o.useRef(),R=Object(m.a)(t,_),T=o.useContext(p.b).getPrefixCls,M=function(){if(I.current&&_.current){var t=I.current.offsetWidth,a=_.current.offsetWidth;if(0!==t&&0!==a){var n=e.gap,r=void 0===n?4:n;2*r<a&&y(a-2*r<t?(a-2*r)/t:1)}}};o.useEffect((function(){C(!0)}),[]),o.useEffect((function(){k(!0),y(1)}),[e.src]),o.useEffect((function(){M()}),[e.gap]);var D=e.prefixCls,H=e.shape,W=e.size,A=e.src,B=e.srcSet,G=e.icon,J=e.className,q=e.alt,F=e.draggable,L=e.children,U=v(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),V="default"===W?d:W,X=Object(j.a)(),K=o.useMemo((function(){if("object"!==Object(c.a)(V))return{};var e=b.b.find((function(e){return X[e]})),t=V[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:G?t/2:18}:{}}),[X,V]);Object(u.a)(!("string"===typeof G&&G.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(G,"` at https://ant.design/components/icon"));var Q,Y=T("avatar",D),Z=i()((a={},Object(r.a)(a,"".concat(Y,"-lg"),"large"===V),Object(r.a)(a,"".concat(Y,"-sm"),"small"===V),a)),$=o.isValidElement(A),ee=i()(Y,Z,(l={},Object(r.a)(l,"".concat(Y,"-").concat(H),!!H),Object(r.a)(l,"".concat(Y,"-image"),$||A&&z),Object(r.a)(l,"".concat(Y,"-icon"),!!G),l),J),te="number"===typeof V?{width:V,height:V,lineHeight:"".concat(V,"px"),fontSize:G?V/2:18}:{};if("string"===typeof A&&z)Q=o.createElement("img",{src:A,draggable:F,srcSet:B,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&k(!1)},alt:q});else if($)Q=A;else if(G)Q=G;else if(w||1!==g){var ae="scale(".concat(g,") translateX(-50%)"),ne={msTransform:ae,WebkitTransform:ae,transform:ae},re="number"===typeof V?{lineHeight:"".concat(V,"px")}:{};Q=o.createElement(f.a,{onResize:M},o.createElement("span",{className:"".concat(Y,"-string"),ref:function(e){I.current=e},style:Object(n.a)(Object(n.a)({},re),ne)},L))}else Q=o.createElement("span",{className:"".concat(Y,"-string"),style:{opacity:0},ref:function(e){I.current=e}},L);return delete U.onError,delete U.gap,o.createElement("span",Object(n.a)({},U,{style:Object(n.a)(Object(n.a)(Object(n.a)({},te),K),U.style),className:ee,ref:R}),Q)},g=o.forwardRef(x);g.displayName="Avatar",g.defaultProps={shape:"circle",size:"default"};var y=g,N=a(37),E=a(17),w=a(272),C=function(e){var t=o.useContext(p.b),a=t.getPrefixCls,n=t.direction,c=e.prefixCls,s=e.className,l=void 0===s?"":s,f=e.maxCount,m=e.maxStyle,u=e.size,b=a("avatar-group",c),j=i()(b,Object(r.a)({},"".concat(b,"-rtl"),"rtl"===n),l),d=e.children,O=e.maxPopoverPlacement,v=void 0===O?"top":O,x=Object(N.a)(d).map((function(e,t){return Object(E.a)(e,{key:"avatar-key-".concat(t)})})),g=x.length;if(f&&f<g){var C=x.slice(0,f),P=x.slice(f,g);return C.push(o.createElement(w.a,{key:"avatar-popover-key",content:P,trigger:"hover",placement:v,overlayClassName:"".concat(b,"-popover")},o.createElement(y,{style:m},"+".concat(g-f)))),o.createElement(h,{size:u},o.createElement("div",{className:j,style:e.style},C))}return o.createElement(h,{size:u},o.createElement("div",{className:j,style:e.style},x))},P=y;P.Group=C;t.a=P},659:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(80),r=a(81),c=a(83),s=a(82),o=a(0),l=a(204),i=a(205),f=(a(641),a(217)),m=a.n(f),p=a(668),u=a(663),b=a(648),j=a(87),d=a(5),h={width:"60vw"},O=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).getdetail=function(){var e=r.props.match.params.id;console.log(e),m.a.get("http://www.turingteam.me:8081/guest/project/queryProjectById?id="+e,{}).then((function(e){var t=e.data.data.Project;console.log(t);var a=e.data.data.Project.projectMemberName;console.log(a),r.setState({detail:t}),r.setState({member:a})}))},r.state={detail:{},member:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getdetail()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"div_box",children:[Object(d.jsx)(l.a,{className:"box_row",children:Object(d.jsx)(i.a,{xs:{span:22,offset:1},sm:{span:20,offset:2},md:{span:18,offset:3},lg:{span:11,offset:7},xl:{span:10,offset:6},children:Object(d.jsx)(p.a,{hoverable:!0,style:{wordBreak:"break-all"},children:Object(d.jsx)(u.a,{autoplay:!0,children:Object(d.jsx)("div",{style:h,children:Object(d.jsx)("img",{className:"img",alt:"example",src:"http://150.158.171.105:7777/"+this.state.detail.projectGif})})})})})}),Object(d.jsx)(l.a,{children:Object(d.jsxs)(i.a,{className:"col_liveContent",xs:{span:20,offset:2},sm:{span:20,offset:2},md:{span:18,offset:3},lg:{span:15,offset:5},xl:{span:18,offset:3},children:[Object(d.jsx)("h1",{children:this.state.detail.projectName}),Object(d.jsx)("span",{className:"span_time",children:this.state.detail.date}),Object(d.jsx)("p",{className:"projectcontent",children:this.state.detail.projectContent})]})}),Object(d.jsxs)("div",{className:"paper2",children:[Object(d.jsx)(l.a,{children:Object(d.jsx)(i.a,{span:24,children:Object(d.jsx)("h1",{className:"h1_joinmerber",children:"\u53c2\u4e0e\u9879\u76ee\u6210\u5458"})})}),this.state.member.map((function(e,t){return Object(d.jsxs)(l.a,{className:"joinmerber_row",children:[Object(d.jsx)(i.a,{children:Object(d.jsx)(b.a,{size:80,src:"http://150.158.171.105:7777/"+e.memberIconUrl})}),Object(d.jsxs)(i.a,{xs:{span:20,offset:1},sm:{span:20,offset:1},md:{span:20,offset:1},lg:{span:20,offset:1},xl:{span:12,offset:1},children:[Object(d.jsxs)("p",{className:"p_name",style:{fontSize:"1.5vw"},children:[e.memberName,Object(d.jsxs)("span",{children:["(",e.memberMajor,")"]})]}),Object(d.jsxs)("p",{className:"p_memberTechnology",children:["\u5b66\u4e60\u65b9\u5411\uff1a",Object(d.jsx)("span",{className:"p_memberTechnology",children:e.memberTechnology})]})]}),Object(d.jsx)(j.a,{placement:"bottom",title:e.memberIntroduction,children:Object(d.jsx)(i.a,{className:"card_col_foot",xs:{span:20,offset:1},sm:{span:20,offset:1},md:{span:20,offset:1},lg:{span:20,offset:1},xl:{span:18,offset:1},children:Object(d.jsxs)("p",{children:["\u5bc4\u8bed\uff1a",Object(d.jsx)("span",{children:e.memberIntroduction})]})})})]},t)}))]})]})}}]),a}(o.Component)}}]);
//# sourceMappingURL=10.0828833c.chunk.js.map