(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[17],{383:function(e,t,s){},653:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return m}));var a=s(80),n=s(81),c=s(83),l=s(82),i=s(0),r=s(217),o=s.n(r),d=s(204),f=s(205),j=(s(383),s(21)),p=s(668),h=s(663),u=s(5),b={width:"60vw"},m=function(e){Object(c.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).get=function(){o.a.get("http://150.158.171.105:7777/guest/leadInspection/getAllLeadInspcetions").then((function(e){var t=e.data.data;n.setState({leaders:t})}))},n.state={leaders:[]},n}return Object(n.a)(s,[{key:"componentDidMount",value:function(){this.get()}},{key:"render",value:function(){var e=this.state.leaders;return Object(u.jsx)("div",{children:Object(u.jsx)(d.a,{className:"box_row",children:e.map((function(e,t){return Object(u.jsxs)(f.a,{xs:{span:22,offset:1},sm:{span:20,offset:2},md:{span:18,offset:2},lg:{span:10,offset:1},xl:{span:9,offset:2},children:[Object(u.jsx)(p.a,{hoverable:!0,style:{wordBreak:"break-all"},children:Object(u.jsx)(h.a,{autoplay:!0,children:Object(u.jsx)("div",{style:b,children:Object(u.jsx)("img",{className:"img",alt:"example",src:"http://150.158.171.105:7777/"+e.img})})})}),Object(u.jsxs)(f.a,{className:"col_liveContent",xs:{span:20,offset:1},sm:{span:20,offset:1},md:{span:20,offset:1},lg:{span:24,offset:1},xl:{span:24,offset:1},children:[Object(u.jsx)("h1",{children:e.title}),Object(u.jsx)("span",{className:"span_time",children:e.date}),"\xa0 \xa0",Object(u.jsxs)(j.b,{to:"/leaderdetail/".concat(e.id),children:["\u66f4\u591a\u8be6\u60c5 ",">>>"]})]},t)]},t)}))})})}}]),s}(i.Component)}}]);
//# sourceMappingURL=17.b2043cf1.chunk.js.map