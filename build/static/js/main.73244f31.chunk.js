(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{28:function(e,t,n){"use strict";var a=n(8),r=n(33),o=n(27),c={newsDetail:{pageTitle:"\u9996\u9875",user:"admin"},todos:[{id:parseInt(1e7*Math.random()),isComplete:!1,title:"\u5b66\u4e60redux"},{id:parseInt(1e7*Math.random()),isComplete:!0,title:"\u5b66\u4e60react"},{id:parseInt(1e7*Math.random()),isComplete:!1,title:"\u5b66\u4e60node"}]};var i=Object(a.c)({pageTitle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.newsDetail,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE_TITLE":return Object(o.a)({},e,{pageTitle:t.data});default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.todos,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INFO_LIST":return t.data;default:return e}}}),u=Object(a.d)(i,Object(a.a)(r.a));t.a=u},35:function(e,t,n){e.exports=n(50)},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=n(20),u=n(7),l=n(22),s=n.n(l),h=n(31),m=n(13),d=n(14),p=n(17),f=n(15),b=n(16),v=function(e){return function(t){function n(e){var t;return Object(m.a)(this,n),(t=Object(p.a)(this,Object(f.a)(n).call(this,e))).state={component:null},t}return Object(b.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(s.a.mark(function t(){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,a=n.default,this.setState({component:a});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),n}(r.a.Component)},g=n(18),E=n(9),O=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={isGoing:!0,numberOfGuests:2},n.handleInputChange=n.handleInputChange.bind(Object(E.a)(n)),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(g.a)({},a,n))}},{key:"shouldComponentUpdate",value:function(e,t){return!(t.numberOfGuests>5)}},{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("label",null,"\u53c2\u4e0e:",r.a.createElement("input",{name:"isGoing",type:"checkbox",checked:this.state.isGoing,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"\u6765\u5bbe\u4eba\u6570:",r.a.createElement("input",{name:"numberOfGuests",type:"number",value:this.state.numberOfGuests,onChange:this.handleInputChange})))}}]),t}(r.a.Component),w=v(function(){return n.e(7).then(n.bind(null,101))}),j=v(function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,102))}),k=v(function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,211))}),C=function(){return r.a.createElement(u.e,null,r.a.createElement(u.c,{exact:!0,path:"/home",component:w}),r.a.createElement(u.c,{path:"/",exact:!0,render:function(){return r.a.createElement(u.b,{to:"index"})}}),r.a.createElement(u.c,{path:"/doc/:id",component:j}),r.a.createElement(u.c,{path:"/form",component:O}),r.a.createElement(u.c,{path:"/index",component:k}),"\u3011  ",r.a.createElement(u.c,{component:j}))},y=(n(48),n(25)),I=n(28);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y.a,{store:I.a},r.a.createElement(i.a,{getUserConfirmation:function(e,t){t(window.confirm(e))}},r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,3]]]);
//# sourceMappingURL=main.73244f31.chunk.js.map