(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[15],{353:function(e,s,t){},667:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return d}));var n=t(95),A=t(80),a=t(81),c=t(88),o=t(83),i=t(82),r=t(0),C=(t(353),t(204)),b=t(205),j=t(668),l=t(259),f=t(663),g=t(217),m=t.n(g),x=t(314),p=t.n(x),I=t(21),Q=t(5),d=function(e){Object(o.a)(t,e);var s=Object(i.a)(t);function t(e){var n;return Object(A.a)(this,t),(n=s.call(this,e)).next=n.next.bind(Object(c.a)(n)),n.previous=n.previous.bind(Object(c.a)(n)),n.state={teamintroduct:{},teacherguobao:{},preFourAwards:{},project:[],preFourTeamActivity:{},teamactive:[],notice:[]},m.a.get("https://www.turingteam.me:8081/guest/introduction/introductionQueryLastingOne").then((function(e){console.log(e.data.data.introduction);var s=e.data.data.introduction;n.setState({teamintroduct:s}),document.querySelector("#myvideo").src="https://www.turingteam.me:8081/"+n.state.teamintroduct.introductionVideoUrl})),m.a.get("https://www.turingteam.me:8081/guest/project/queryProject").then((function(e){console.log(e.data.data.Projects);var s=e.data.data.Projects;n.setState({project:s})})),m.a.get("https://www.turingteam.me:8081/guest/inform/informQuery").then((function(e){console.log(e.data.data.informs);var s=e.data.data.informs;n.setState({notice:s})})),n}return Object(a.a)(t,[{key:"next",value:function(){this.slider.slickNext()}},{key:"previous",value:function(){this.slider.slickPrev()}},{key:"render",value:function(){var e=this,s=this.state.teamintroduct;return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(C.a,{children:Object(Q.jsxs)(b.a,{className:"col_introduce",xs:{span:10,offset:3},sm:{span:8,offset:3},md:{span:5,offset:3},lg:{span:10,offset:3},xl:{span:9,offset:3},children:[" ",Object(Q.jsx)("img",{src:"data:image/png;base64,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",alt:"none",className:"left_img"}),Object(Q.jsx)("span",{className:"left-text-introduce",children:" \u56e2\u961f\u7b80\u4ecb"})]})}),Object(Q.jsxs)(C.a,{children:[Object(Q.jsx)(b.a,{xs:{span:18,offset:3},sm:{span:18,offset:3},md:{span:15,offset:3},lg:{span:15,offset:3},xl:{span:12,offset:3},children:Object(Q.jsx)("div",{children:Object(Q.jsx)("video",{controls:"controls",className:"video",id:"myvideo"})})}),Object(Q.jsx)(b.a,{className:"introduct",xs:{span:18,offset:3},sm:{span:18,offset:3},md:{span:15,offset:3},lg:{span:15,offset:3},xl:{span:5,offset:1},children:Object(Q.jsxs)("p",{children:[" ",s.introductionInfo]})})]}),Object(Q.jsx)("br",{}),Object(Q.jsx)("br",{}),Object(Q.jsx)("br",{}),Object(Q.jsx)("br",{}),Object(Q.jsx)("br",{}),Object(Q.jsxs)(C.a,{children:[Object(Q.jsxs)(b.a,{xs:{span:12,offset:3},sm:{span:12,offset:3},md:{span:12,offset:3},lg:{span:10,offset:3},xl:{span:3,offset:3},style:{},children:[" ",Object(Q.jsx)("img",{src:"data:image/png;base64,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",alt:"none",className:"left_img"}),Object(Q.jsx)("span",{className:"left-text-project",children:" \u56e2\u961f\u901a\u544a"})]}),Object(Q.jsx)(b.a,{xs:{span:18,offset:3},sm:{span:18,offset:6},md:{span:24,offset:5},lg:{span:24,offset:5},xl:{span:15,offset:5},children:Object(Q.jsxs)(j.a,{className:"card_index",hoverable:!0,children:[Object(Q.jsx)(l.a,{className:"btn_honor",danger:!0,onClick:this.previous,children:"Previous"}),Object(Q.jsx)("div",{children:Object(Q.jsx)(p.a,Object(n.a)(Object(n.a)({ref:function(s){return e.slider=s}},{speed:200,infinite:!0,slidesToShow:3,slidesToScroll:1,vertical:!0,verticalSwiping:!0}),{},{children:this.state.notice.map((function(e,s){return Object(Q.jsxs)(C.a,{children:[Object(Q.jsxs)(b.a,{className:"notice-noout_index",xs:{span:18,offset:2},sm:{span:20,offset:2},md:{span:20,offset:2},lg:{span:18,offset:2},xl:{span:15,offset:4},children:[e.informContent," "]},s),Object(Q.jsx)(b.a,{className:"notice-noout",xs:{span:18,offset:2},sm:{span:20,offset:2},md:{span:20,offset:2},lg:{span:18,offset:2},xl:{span:15,offset:4},children:e.informEditTime})]})}))}))}),Object(Q.jsx)(I.b,{to:"/notice",children:Object(Q.jsxs)(b.a,{xs:{span:18},sm:{span:20},md:{span:20},lg:{span:18},xl:{span:9},children:["\u66f4\u591a\u901a\u544a",">>>"]})}),Object(Q.jsx)(l.a,{className:"btn_honor",danger:!0,onClick:this.next,children:"TheNext"})]})})]}),Object(Q.jsx)("br",{})," ",Object(Q.jsx)("br",{})," ",Object(Q.jsx)("br",{})," ",Object(Q.jsx)("br",{}),Object(Q.jsx)(C.a,{children:Object(Q.jsxs)(b.a,{xs:{span:12,offset:3},sm:{span:12,offset:3},md:{span:12,offset:3},lg:{span:10,offset:3},xl:{span:5,offset:3},style:{},children:[" ",Object(Q.jsx)("img",{src:"data:image/png;base64,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",alt:"none",className:"left_img"}),Object(Q.jsx)("span",{className:"left-text-project",children:" \u56e2\u961f\u9879\u76ee"})]})}),Object(Q.jsx)(C.a,{style:{margin:"2%"},children:this.state.project.map((function(e,s){return Object(Q.jsxs)(b.a,{xs:{span:15,offset:4},sm:{span:15,offset:4},md:{span:10,offset:1},lg:{span:10,offset:1},xl:{span:9,offset:2},children:[Object(Q.jsx)(I.b,{to:"/projectdetail/".concat(e.projectId),children:Object(Q.jsx)(j.a,{hoverable:!0,style:{wordBreak:"break-all"},children:Object(Q.jsx)(f.a,{autoplay:!0,children:Object(Q.jsx)("img",{className:"project-img",alt:"example",src:"https://www.turingteam.me:8081/"+e.projectGifUrl})})})}),Object(Q.jsx)(b.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:24,offset:0},xl:{span:24,offset:0},children:Object(Q.jsx)(I.b,{to:"/projectdetail/".concat(e.projectId),children:Object(Q.jsx)("h1",{className:"project_content",children:e.projectName})})})]},s)}))}),Object(Q.jsx)(C.a,{children:Object(Q.jsx)(b.a,{xs:{span:8,offset:12},sm:{span:5,offset:15},md:{span:5,offset:18},lg:{span:5,offset:19},xl:{span:5,offset:19},style:{marginBottom:"5%"},children:Object(Q.jsxs)(I.b,{to:"/project",className:" link",children:["\u67e5\u770b\u5168\u90e8\u9879\u76ee",">>>"]})})})]})}}]),t}(r.Component)}}]);
//# sourceMappingURL=15.82ce401d.chunk.js.map