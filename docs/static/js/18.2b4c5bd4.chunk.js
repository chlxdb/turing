(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[18],{642:function(e,t,a){},660:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var s=a(80),n=a(81),c=a(83),i=a(82),l=a(0),o=a(217),r=a.n(o),d=a(204),f=a(205),p=(a(642),a(668)),j=a(663),h=a(5),m={width:"60vw"},b=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).get=function(){var e=n.props.match.params.id;r.a.get("http://150.158.171.105:7777/guest/leadInspection/getLeadInspcetionById/"+e,{}).then((function(e){console.log(e.data.data);var t=e.data.data;n.setState({detail:t})}))},n.state={detail:{}},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.get()}},{key:"render",value:function(){var e=this.state.detail;return Object(h.jsxs)("div",{className:"div_box",children:[Object(h.jsx)(d.a,{className:"box_row",children:Object(h.jsx)(f.a,{xs:{span:22,offset:1},sm:{span:20,offset:2},md:{span:18,offset:3},lg:{span:11,offset:7},xl:{span:10,offset:6},children:Object(h.jsx)(p.a,{className:"leader_card",hoverable:!0,children:Object(h.jsx)(j.a,{autoplay:!0,children:Object(h.jsx)("div",{style:m,children:Object(h.jsx)("img",{className:"img",alt:"example",src:"http://150.158.171.105:7777/"+e.img})})})})})}),Object(h.jsx)(d.a,{children:Object(h.jsxs)(f.a,{className:"col_liveContent",xs:{span:20,offset:2},sm:{span:20,offset:2},md:{span:18,offset:3},lg:{span:15,offset:5},xl:{span:18,offset:3},children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsx)("span",{className:"span_time",children:e.date}),Object(h.jsx)("p",{className:"livecontent",children:e.content})]})})]})}}]),a}(l.Component)}}]);
//# sourceMappingURL=18.2b4c5bd4.chunk.js.map