(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6,7],{101:function(e,t,n){"use strict";n.r(t);var a=n(13),o=n(14),i=n(17),l=n(15),c=n(16),s=n(0),r=n.n(s),u=n(20),h=n(25),m=n(28),p=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!(t.numberOfGuests>5)&&(console.log(m.a),!0)}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{store:m.a},r.a.createElement("div",{id:"test-container"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/doc/3"},"doc",m.a.todos)),r.a.createElement("div",{onClick:function(){return e.props.history.goBack()}},'\u8fd4\u56de\u4e0a\u4e00\u9875"&11111')))}}]),t}(s.Component);t.default=p},102:function(e,t,n){"use strict";n.r(t);var a=n(27),o=n(13),i=n(14),l=n(17),c=n(15),s=n(16),r=n(0),u=n.n(r),h=n(7),m=n(20),p=n(209),d=n(25),b=p.a.TabPane,y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={date:new Date,tabList:[{label:"tab1",content:"aaaa"},{label:"tab2",content:"bbb"},{label:"tab3",content:"ccc"}]},n.TabPanes=n.state.tabList.map(function(e,t){return u.a.createElement(b,{tab:e.label,key:t+1},e.content)}),n.button=n.state.tabList.length>4?u.a.createElement("p",null,"\u5927\u4e8e4\u6761"):3===n.state.tabList.length?u.a.createElement("p",null,"3\u6761\u6570\u636e"):u.a.createElement("p",null,"3\u6761\u4ee5\u5185"),n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return u.a.createElement("div",{id:"test-container"},"\u5f53\u524d\u8def\u7531\uff1a",this.props.pageTitle,this.props.user,u.a.createElement("h2",null,"It is ",this.state.date.toLocaleTimeString(),"."),this.button,this.state.tabList.length>4&&u.a.createElement("h2",null,"You have ",this.state.tabList.length," unread messages."),this.state.tabList.length>4?u.a.createElement("p",null,"\u5927\u4e8e4\u6761"):u.a.createElement("p",null,"4\u6761\u4ee5\u5185"),u.a.createElement("div",null,u.a.createElement("h1",null,"doc\u7ec4\u4ef6"),u.a.createElement(h.a,{message:function(e){return"Are you sure you want to go to ".concat(e.pathname)}})),u.a.createElement("li",null,u.a.createElement(m.b,{to:"/"},"\u6587\u6863\u4e2d\u5fc3")),u.a.createElement(p.a,{type:"card"},this.TabPanes))}}]),t}(r.Component);t.default=Object(d.b)(function(e){return Object(a.a)({},e.pageTitle)})(y)},188:function(e,t,n){},206:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},211:function(e,t,n){"use strict";n.r(t);var a=n(13),o=n(14),i=n(17),l=n(15),c=n(16),s=n(0),r=n.n(s),u=n(7),h=(n(188),n(101)),m=n(18),p=n(9),d=n(25);var b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={isGoing:!0,numberOfGuests:2},n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(m.a)({},a,n))}},{key:"shouldComponentUpdate",value:function(e,t){return!(t.numberOfGuests>5)}},{key:"componentDidMount",value:function(){var e=this.props.setPageTitle;console.log(this.props),e("\u65b0\u7684\u6807\u9898")}},{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.user;return r.a.createElement("form",null,r.a.createElement("label",null,"\u53c2\u4e0e:",t,n,r.a.createElement("input",{name:"isGoing",type:"checkbox",checked:this.state.isGoing,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"\u6765\u5bbe\u4eba\u6570:",r.a.createElement("input",{name:"numberOfGuests",type:"number",value:this.state.numberOfGuests,onChange:this.handleInputChange})))}}]),t}(r.a.Component),y=Object(d.b)(function(e){return{pageTitle:e.pageTitle.pageTitle,user:e.pageTitle.user,infoList:e.todos}},function(e,t){return{setPageTitle:function(t){e(function(e,n){setTimeout(function(){e({type:"SET_PAGE_TITLE",data:t})},2e3)})},settodos:function(t){e({})}}})(b),f=n(102),g=n(20),k=n(210),E=n(99),v=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={openKeys:[],selectedKeys:[]},n.onOpenChange=function(e){if(0!==e.length&&1!==e.length){var t=e[e.length-1];t.includes(e[0])?n.setState({openKeys:e}):n.setState({openKeys:[t]})}else n.setState({openKeys:e})},n.renderMenuItem=function(e){var t=e.key,n=e.icon,a=e.title;return r.a.createElement(k.b.Item,{key:t},r.a.createElement(g.b,{to:t},n&&r.a.createElement(E.a,{type:n}),r.a.createElement("span",null,a)))},n.renderSubMenu=function(e){var t=e.key,a=e.icon,o=e.title,i=e.subs;return r.a.createElement(k.b.SubMenu,{key:t,title:r.a.createElement("span",null,a&&r.a.createElement(E.a,{type:a}),r.a.createElement("span",null,o))},i&&i.map(function(e){return e.subs&&e.subs.length>0?n.renderSubMenu(e):n.renderMenuItem(e)}))},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e="./".split("/");switch(e.length){case 2:this.setState({selectedKeys:["./"]});break;case 5:this.setState({selectedKeys:["./"],openKeys:[e.slice(0,3).join("/"),e.slice(0,4).join("/")]});break;default:this.setState({selectedKeys:["./"],openKeys:["./".substr(0,"./".lastIndexOf("/"))]})}}},{key:"componentWillReceiveProps",value:function(e){console.log(this.props.location);this.setState({selectedKeys:["/index"]})}},{key:"render",value:function(){var e=this,t=this.state,n=t.openKeys,a=t.selectedKeys;return r.a.createElement(k.b,{onOpenChange:this.onOpenChange,onClick:function(t){var n=t.key;return e.setState({selectedKeys:[n]})},openKeys:n,selectedKeys:a,theme:this.props.theme?this.props.theme:"dark",mode:"inline"},this.props.menus&&this.props.menus.map(function(t){return t.subs&&t.subs.length>0?e.renderSubMenu(t):e.renderMenuItem(t)}))}}]),t}(r.a.Component),O=n(208);n.d(t,"default",function(){return I});var j=O.a.Header,C=O.a.Sider,S=O.a.Content,T=[{title:"\u57fa\u672c\u7ec4\u4ef6",icon:"laptop",key:"/index",subs:[{key:"/index/rendering",title:"\u6309\u94ae",icon:""},{key:"/index/doc",title:"\u56fe\u6807",icon:""}]},{title:"\u5bfc\u822a\u7ec4\u4ef6",icon:"bars",key:"/home/navigation",subs:[{key:"/home/navigation/dropdown",title:"\u4e0b\u62c9\u83dc\u5355",icon:""},{key:"/home/navigation/menu",title:"\u5bfc\u822a\u83dc\u5355",icon:""},{key:"/home/navigation/steps",title:"\u6b65\u9aa4\u6761",icon:""}]},{title:"\u8f93\u5165\u7ec4\u4ef6",icon:"edit",key:"/home/entry",subs:[{key:"/home/entry/form",title:"\u8868\u5355",icon:"",subs:[{key:"/home/entry/form/basic-form",title:"\u57fa\u7840\u8868\u5355",icon:""},{key:"/home/entry/form/step-form",title:"\u5206\u6b65\u8868\u5355",icon:""}]},{key:"/home/entry/upload",title:"\u4e0a\u4f20",icon:""}]},{title:"\u663e\u793a\u7ec4\u4ef6",icon:"desktop",key:"/home/display",subs:[{key:"/home/display/carousel",title:"\u8f6e\u64ad\u56fe",icon:""},{key:"/home/display/collapse",title:"\u6298\u53e0\u9762\u677f",icon:""},{key:"/home/display/list",title:"\u5217\u8868",icon:""},{key:"/home/display/table",title:"\u8868\u683c",icon:""},{key:"/home/display/tabs",title:"\u6807\u7b7e\u9875",icon:""}]},{title:"\u53cd\u9988\u7ec4\u4ef6",icon:"message",key:"/home/feedback",subs:[{key:"/home/feedback/modal",title:"\u5bf9\u8bdd\u6846",icon:""},{key:"/home/feedback/notification",title:"\u901a\u77e5\u63d0\u9192\u6846",icon:""},{key:"/home/feedback/spin",title:"\u52a0\u8f7d\u4e2d",icon:""}]},{title:"\u5176\u5b83",icon:"bulb",key:"/home/other",subs:[{key:"/home/other/animation",title:"\u52a8\u753b",icon:""},{key:"/home/other/gallery",title:"\u753b\u5eca",icon:""},{key:"/home/other/draft",title:"\u5bcc\u6587\u672c",icon:""},{key:"/home/other/chart",title:"\u56fe\u8868",icon:""},{key:"/home/other/loading",title:"\u52a0\u8f7d\u52a8\u753b",icon:""},{key:"/home/other/404",title:"404",icon:""},{key:"/home/other/springText",title:"\u5f39\u6027\u6587\u5b57",icon:""}]},{title:"\u5173\u4e8e",icon:"info-circle-o",key:"/home/about"}],I=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).toggle=function(){n.setState({collapsed:!n.state.collapsed})},n.state={collapsed:!1},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement(C,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:n(206),alt:""})," ",r.a.createElement("span",null,"\u4e2a\u4eba\u7f51\u7ad9")),r.a.createElement(v,{menus:T})),r.a.createElement(O.a,null,r.a.createElement(j,{style:{background:"#fff",padding:0}},r.a.createElement(E.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle})),r.a.createElement(S,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},r.a.createElement(u.c,{path:"".concat(this.props.match.url,"/rendering"),exact:!0,component:y}),r.a.createElement(u.c,{path:"".concat(this.props.match.url,"/home"),component:h.default}),r.a.createElement(u.c,{path:"".concat(this.props.match.url,"/doc"),strict:!0,component:f.default}),r.a.createElement(u.c,{exact:!0,path:this.props.match.url,render:function(){return r.a.createElement("h3",null,"\u8bf7\u9009\u62e9\u4e00\u4e2a\u4e3b\u9898")}}))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=5.419f6c5c.chunk.js.map