(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(7),o=n.n(s),r=(n(15),n(1)),i=n(2),l=n(4),u=n(3),h=n(5),p=(n(16),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"qrcode-wrapper"},c.a.createElement("img",{className:"qrcode-img",src:"http://qny.kuniseichi.cn/qrcode-bg.jpg"}))}}]),t}(a.Component)),m=(n(17),n(18),n(19),n(20),n(21),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{class:"one-title-1"},c.a.createElement("section",{className:"one-title-2"},this.props.num),c.a.createElement("section",{className:"one-title-3"},c.a.createElement("section",{className:"one-title-4","data-brushtype":"text"},this.props.title),c.a.createElement("section",{className:"one-title-5"}),c.a.createElement("section",{className:"one-title-6","data-width":"90%"})))}}]),t}(a.Component)),d=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"two-title-1"},c.a.createElement("section",{className:"two-title-2"},c.a.createElement("section",{"data-bgless":"spin","data-bglessp":"90",className:"two-title-3"})),c.a.createElement("section",{className:"two-title-4"},c.a.createElement("span",{className:"","data-original-title":"",title:""},this.props.num),"."),c.a.createElement("section",{className:"two-title-5","data-brushtype":"text"},c.a.createElement("em",null,this.props.title)),c.a.createElement("section",{className:"two-title-6"},c.a.createElement("section",{"data-bgless":"spin","data-bglessp":"90",className:"two-title-7"})))}}]),t}(a.Component),b=function(e){var t=e.children;return c.a.createElement("section",{className:"zw"},t)},f=function(e){var t=e.children;return c.a.createElement("section",{className:"passage-wrapper"},t)},j=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"setTitle",value:function(){var e=this.props.title;document.title=e}},{key:"componentDidMount",value:function(){this.setTitle()}},{key:"componentDidUpdate",value:function(){this.setTitle()}},{key:"render",value:function(){return c.a.createElement("section",null,this.props.children)}}]),t}(a.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{class:"paragraph"},c.a.createElement("p",{class:"wx-title"},"\u53c2\u8003\u5185\u5bb9"),this.props.children)}}]),t}(a.Component),O=(a.Component,function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{class:"img-wrapper"},c.a.createElement("img",{class:"format-img",src:this.props.url,alt:""}),c.a.createElement("p",{class:"img-text"},this.props.title))}}]),t}(a.Component)),E=(a.Component,function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{class:"one-quote-1"},c.a.createElement("section",{class:"one-quote-2"},c.a.createElement("section",{class:"one-quote-3"},this.props.content,c.a.createElement("p",{class:"one-quote-4"},"\u2014\u2014",this.props.author))))}}]),t}(a.Component)),g=(a.Component,function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("ul",{className:"one-list-1"},this.props.children)}}]),t}(a.Component)),y=(a.Component,a.Component,a.Component,a.Component,a.Component,function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){n.setState({show:!n.state.show})},n.state={show:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("section",{className:"line-wrapper",style:this.state.show?{color:"#1890ff"}:{color:"rgb(89, 89, 89)"},onClick:this.handleClick},c.a.createElement("section",null,c.a.createElement("a",{href:this.props.url},this.props.content)),this.props.children?this.state.show?c.a.createElement("i",{className:"iconfont iconarrowdropdownshangbian arrow"}):c.a.createElement("i",{className:"iconfont iconarrowdropdownxiabian arrow"}):null),c.a.createElement("section",{className:"line-padding"},this.state.show?this.props.children:null))}}]),t}(a.Component)),v=n(8),C=n.n(v),N=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleKeyDown=function(e){if(""==e.target.value)n.props.changeShowCatelog(!0),n.props.changeShowIndex(!1);else if(13==e.keyCode){var t=e.target.value;C.a.ajax({url:"https://kuniseichi.cn/api_v1/index/"+t,async:!0,success:function(e){e.success&&(n.props.changeShowCatelog(!1),n.props.changeShowIndex(!0),n.props.onGetPassageIndex(e.data.passages))}})}},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"input-wrapper"},c.a.createElement("i",{className:"iconfont iconsearch input-icon-search"}),c.a.createElement("input",{className:"input",placeholder:"\u5173\u952e\u5b57\u641c\u7d22",onKeyUp:this.handleKeyDown}))}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).changeShowCatelog=function(e){n.setState({showCatelog:e})},n.changeShowIndex=function(e){n.setState({showIndex:e})},n.onGetPassageIndex=function(e){n.setState({passageIndex:e}),console.log(n.state.passageIndex)},n.state={showCatelog:!0,showIndex:!1,passageIndex:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[],t=!0,n=!1,a=void 0;try{for(var s,o=this.state.passageIndex[Symbol.iterator]();!(t=(s=o.next()).done);t=!0){var r=s.value;e.push(c.a.createElement("section",{className:"passage-list"},c.a.createElement("a",{className:"title",href:r.url},r.title),c.a.createElement("a",{className:"content",href:r.url},r.content),c.a.createElement("section",{className:"line"},r.url)))}}catch(i){n=!0,a=i}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}return c.a.createElement(j,{title:"\u6587\u7ae0\u7d22\u5f15"},c.a.createElement(f,null,c.a.createElement(N,{showCatelog:this.state.showCatelog,showIndex:this.state.showIndex,changeShowCatelog:this.changeShowCatelog,changeShowIndex:this.changeShowIndex,onGetPassageIndex:this.onGetPassageIndex}),c.a.createElement("section",{style:this.state.showCatelog?{display:"block"}:{display:"none"}},c.a.createElement(y,{content:"\u732b\u54aa\u79d1\u666e"},c.a.createElement(y,{content:"\u732b\u7684\u8d77\u6e90"}))),c.a.createElement("section",{style:this.state.showIndex?{display:"block"}:{display:"none"}},e.length>0?e:c.a.createElement("section",{className:"no-result"},"\u6ca1\u6709\u627e\u5230\u76f8\u5e94\u7ed3\u679c"))))}}]),t}(a.Component),x=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement(k,null),c.a.createElement(p,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.2e30972f.chunk.js.map