(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(43)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(18),l=n.n(o),s=(n(28),n(1)),r=n(2),i=n(4),m=n(3),u=n(5),h=n(20),p=n(10),d=(n(29),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"qrcode-wrapper"},c.a.createElement("img",{className:"qrcode-img",src:"http://qny.kuniseichi.cn/qrcode-bg.jpg"}))}}]),t}(a.Component)),b=(n(30),n(31),n(32),n(33),n(34),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,this.props.children)}}]),t}(a.Component)),E=function(e){var t=e.children;return c.a.createElement("section",{className:"passage-wrapper"},t)},f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){n.setState({show:!n.state.show})},n.state={show:!1},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("section",{className:"line-wrapper",style:this.state.show?{color:"#1890ff"}:{color:"rgb(89, 89, 89)"},onClick:this.handleClick},c.a.createElement("section",null,c.a.createElement("a",{href:this.props.url,style:this.state.show?{color:"#1890ff"}:{color:"rgb(89, 89, 89)"}},this.props.content)),this.props.children?this.state.show?c.a.createElement("i",{className:"iconfont iconarrowdropdownshangbian arrow"}):c.a.createElement("i",{className:"iconfont iconarrowdropdownxiabian arrow"}):null),c.a.createElement("section",{className:"line-padding"},this.state.show?this.props.children:null))}}]),t}(a.Component),g=n(19),j=n.n(g),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleKeyDown=function(e){if(""==e.target.value)n.props.changeShowCatelog(!0),n.props.changeShowIndex(!1);else if(13==e.keyCode){var t=e.target.value;j.a.ajax({url:"https://kuniseichi.cn/api_v1/index/"+t,async:!0,success:function(e){e.success&&(n.props.changeShowCatelog(!1),n.props.changeShowIndex(!0),n.props.onGetPassageIndex(e.data.passages))}})}},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"input-wrapper"},c.a.createElement("i",{className:"iconfont iconsearch input-icon-search"}),c.a.createElement("input",{className:"input",placeholder:"\u5173\u952e\u5b57\u641c\u7d22",onKeyUp:this.handleKeyDown}))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).changeShowCatelog=function(e){n.setState({showCatelog:e})},n.changeShowIndex=function(e){n.setState({showIndex:e})},n.onGetPassageIndex=function(e){n.setState({passageIndex:e}),console.log(n.state.passageIndex)},n.state={showCatelog:!0,showIndex:!1,passageIndex:[]},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=[],t=!0,n=!1,a=void 0;try{for(var o,l=this.state.passageIndex[Symbol.iterator]();!(t=(o=l.next()).done);t=!0){var s=o.value;e.push(c.a.createElement("section",{className:"passage-list"},c.a.createElement("a",{className:"title",href:s.url},s.title),c.a.createElement("a",{className:"content",href:s.url},s.content)))}}catch(r){n=!0,a=r}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}return c.a.createElement(b,{title:"\u6587\u7ae0\u7d22\u5f15"},c.a.createElement(E,null,c.a.createElement(O,{showCatelog:this.state.showCatelog,showIndex:this.state.showIndex,changeShowCatelog:this.changeShowCatelog,changeShowIndex:this.changeShowIndex,onGetPassageIndex:this.onGetPassageIndex}),c.a.createElement("section",{style:this.state.showCatelog?{display:"block"}:{display:"none"}},c.a.createElement(f,{content:"\u732b\u54aa\u79d1\u666e"},c.a.createElement(f,{content:"\u732b\u7684\u8d77\u6e90",url:"https://mp.weixin.qq.com/s?__biz=Mzg4MzA2NzMzMg==&mid=2247483671&idx=1&sn=603c41fd17bf04319836ecbec66935ec&chksm=cf4c51bcf83bd8aa7e0337ec26b12f0de1a583f2c7dccdf872c28937f67d2ad0b6108ff62010&token=407447556&lang=zh_CN#rd"})),c.a.createElement(f,{content:"\u75be\u75c5\u767e\u79d1"},c.a.createElement(f,{content:"\u4eba\u732b\u5171\u60a3\u75c5"},c.a.createElement(f,{content:"\u5df4\u65af\u5fb7\u6746\u83cc\u75c5",url:"https://mp.weixin.qq.com/s?__biz=Mzg4MzA2NzMzMg==&mid=2247483685&idx=1&sn=402644df256550b0ba31085480cc2696&chksm=cf4c518ef83bd898854aa62332a6d8a31b3aac2f31e118a40e01efa89a33cdabdc23b246a205&token=407447556&lang=zh_CN#rd"}),c.a.createElement(f,{content:"\u5f13\u5f62\u866b",url:"https://mp.weixin.qq.com/s?__biz=Mzg4MzA2NzMzMg==&mid=2247483686&idx=1&sn=8e7d66caf13dabef2a1d097aa2f06f7c&chksm=cf4c518df83bd89b6042af0bce571eb89ad68d98cb56a51156896dc1d4e038fb0f18af2a3b21&token=1903241140&lang=zh_CN#rd"}),c.a.createElement(f,{content:"\u6c99\u95e8\u6c0f\u83cc"}),c.a.createElement(f,{content:"\u88ab\u732b\u6293\u54ac\u9700\u8981\u6253\u72c2\u72ac\u75ab\u82d7\u5417\uff1f",url:"https://zhuanlan.zhihu.com/p/67669606"}),c.a.createElement(f,{content:"\u732b\u6293\u75c5",url:"https://zhuanlan.zhihu.com/p/67670308"}),c.a.createElement(f,{content:"\u4e00\u7bc7\u6587\u7ae0\u641e\u5b9a\u732b\u7663",url:"https://zhuanlan.zhihu.com/p/67670709"}),c.a.createElement(f,{content:"\u7ee6\u866b\u75c5",url:"https://zhuanlan.zhihu.com/p/67676681"}),c.a.createElement(f,{content:"\u517b\u732b\u8981\u5c0f\u5fc3\u86d4\u866b\u75c5",url:"https://zhuanlan.zhihu.com/p/67671118"}),c.a.createElement(f,{content:"\u8df3\u86a4\u8fc7\u654f\u6027\u76ae\u708e",url:"https://zhuanlan.zhihu.com/p/67676804"}),c.a.createElement(f,{content:"\u94a9\u866b\u75c5",url:"https://zhuanlan.zhihu.com/p/67676862"}),c.a.createElement(f,{content:"\u5982\u4f55\u9884\u9632\u4eba\u732b\u5171\u60a3\u75c5\uff1f",url:"https://zhuanlan.zhihu.com/p/67675849"}),c.a.createElement(f,{content:"\u5b55\u5987\u7a76\u7adf\u80fd\u4e0d\u80fd\u517b\u732b",url:"https://zhuanlan.zhihu.com/p/67676238"})),c.a.createElement(f,{content:"\u547c\u5438\u7cfb\u7edf"},c.a.createElement(f,{content:"\u6211\u7684\u732b\u54aa\u611f\u5192\u4e86\u5417\uff1f",url:"https://zhuanlan.zhihu.com/p/67676998"}),c.a.createElement(f,{content:"\u732b\u54aa\u6253\u55b7\u568f\u662f\u611f\u5192\u4e86\u5417\uff1f",url:"https://zhuanlan.zhihu.com/p/67677159"})),c.a.createElement(f,{content:"\u6ccc\u5c3f\u7cfb\u7edf"},c.a.createElement(f,{content:"\u732b\u54aa\u5e38\u89c1\u75c5-\u4e0b\u6ccc\u5c3f\u9053\u75be\u75c5",url:"https://zhuanlan.zhihu.com/p/67678929"})),c.a.createElement(f,{content:"\u6d88\u5316\u7cfb\u7edf"},c.a.createElement(f,{content:"\u4ece\u5455\u5410\u7269\u770b\u732b\u54aa\u5065\u5eb7",url:"https://mp.weixin.qq.com/s?__biz=Mzg4MzA2NzMzMg==&mid=2247483668&idx=1&sn=9db6c7fd36ef1bb79ed84d34530e037e&chksm=cf4c51bff83bd8a9d8aeb1ec83385d14889698971a9aa2626586f074ac05100f3c9a71b6d8de&token=1903241140&lang=zh_CN#rd"}),c.a.createElement(f,{content:"\u732b\u54aa\u5e38\u89c1\u53e3\u8154\u75be\u75c5",url:"https://zhuanlan.zhihu.com/p/67679289"})),c.a.createElement(f,{content:"\u76ae\u80a4\u75be\u75c5"},c.a.createElement(f,{content:"\u4e00\u7bc7\u6587\u7ae0\u641e\u5b9a\u732b\u7663",url:"https://zhuanlan.zhihu.com/p/67670709"})),c.a.createElement(f,{content:"\u773c\u79d1\u75be\u75c5"},c.a.createElement(f,{content:"\u732b\u54aa\u5e38\u89c1\u773c\u79d1\u75be\u75c5",url:"https://zhuanlan.zhihu.com/p/67679498"})),c.a.createElement(f,{content:"\u8033\u79d1\u75be\u75c5"},c.a.createElement(f,{content:"\u6b63\u786e\u6cbb\u7597\u732b\u54aa\u8033\u87a8",url:"https://zhuanlan.zhihu.com/p/67679679"})),c.a.createElement(f,{content:"\u91cd\u8981\u4f20\u67d3\u75c5"},c.a.createElement(f,{content:"\u732b\u54aa\u7b2c\u4e00\u6740\u624b-\u732b\u4f20\u8179",url:"https://zhuanlan.zhihu.com/p/67684236"}),c.a.createElement(f,{content:"\u732b\u676f\u72b6\u75c5\u6bd2",url:"https://zhuanlan.zhihu.com/p/67684366"}),c.a.createElement(f,{content:"\u732b\u75b1\u75b9\u75c5\u6bd2",url:"https://zhuanlan.zhihu.com/p/67684486"}),c.a.createElement(f,{content:"\u732b\u761f",url:"https://zhuanlan.zhihu.com/p/67684601"})))),c.a.createElement("section",{style:this.state.showIndex?{display:"block"}:{display:"none"}},e.length>0?e:c.a.createElement("section",{className:"no-result"},"\u6ca1\u6709\u627e\u5230\u76f8\u5e94\u7ed3\u679c"))),c.a.createElement(d,null))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).changeShowCatelog=function(e){n.setState({showCatelog:e})},n.changeShowIndex=function(e){n.setState({showIndex:e})},n.onGetPassageIndex=function(e){n.setState({passageIndex:e}),console.log(n.state.passageIndex)},n.state={showCatelog:!0,showIndex:!1,passageIndex:[]},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(b,{title:"\u5907\u5fd8\u5f55"},c.a.createElement(E,null,c.a.createElement("section",{className:"schedule"},c.a.createElement("section",{className:"title"},c.a.createElement("section",{className:"content"},"\u4eca\u65e5\u4e8b\u9879"),c.a.createElement("section",{className:"set"},"\u8bbe\u7f6e")),c.a.createElement("section",null))))}}]),t}(a.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{class:"one-title-1"},c.a.createElement("section",{className:"one-title-2"},this.props.num),c.a.createElement("section",{className:"one-title-3"},c.a.createElement("section",{className:"one-title-4","data-brushtype":"text"},this.props.title),c.a.createElement("section",{className:"one-title-5"}),c.a.createElement("section",{className:"one-title-6","data-width":"90%"})))}}]),t}(a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"two-title-1"},c.a.createElement("section",{className:"two-title-2"},c.a.createElement("section",{"data-bgless":"spin","data-bglessp":"90",className:"two-title-3"})),c.a.createElement("section",{className:"two-title-4"},c.a.createElement("span",{className:"","data-original-title":"",title:""},this.props.num),"."),c.a.createElement("section",{className:"two-title-5","data-brushtype":"text"},c.a.createElement("em",null,this.props.title)),c.a.createElement("section",{className:"two-title-6"},c.a.createElement("section",{"data-bgless":"spin","data-bglessp":"90",className:"two-title-7"})))}}]),t}(a.Component),N=function(e){var t=e.children;return c.a.createElement("section",{className:"zw"},t)},x=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{class:"paragraph"},c.a.createElement("p",{class:"wx-title"},"\u53c2\u8003\u5185\u5bb9"),this.props.children)}}]),t}(a.Component),v=(a.Component,function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{class:"one-quote-1"},c.a.createElement("section",{class:"one-quote-2"},c.a.createElement("section",{class:"one-quote-3"},this.props.content,c.a.createElement("p",{class:"one-quote-4"},"\u2014\u2014",this.props.author))))}}]),t}(a.Component)),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{class:"img-wrapper"},c.a.createElement("img",{class:"format-img",src:this.props.url,alt:""}),c.a.createElement("p",{class:"img-text"},this.props.title))}}]),t}(a.Component),I=(a.Component,function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("ul",{className:"one-list-1"},this.props.children)}}]),t}(a.Component)),S=(a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(b,{title:"\u732b\u761f"},c.a.createElement(E,null,c.a.createElement(z,{num:"01",title:"\u732b\u761f"}),c.a.createElement(N,null,"\u732b\u761f\u53c8\u79f0\u6cdb\u767d\u7ec6\u80de\u51cf\u5c11\u75c7\uff0c\u662f\u4e00\u79cd\u597d\u53d1\u4e8e\u5e7c\u732b\u7684\u4f20\u67d3\u75c5\u3002"),c.a.createElement(N,null,c.a.createElement("strong",null,"\u4e3b\u8981\u7684\u611f\u67d3\u6765\u6e90\u662f\u6025\u6027\u611f\u67d3\u671f\u732b\u7684\u7caa\u4fbf\u3001\u5c3f\u6db2\u3001\u553e\u6db2\u53ca\u5455\u5410\u7269\u3002")),c.a.createElement(N,null,"\u867d\u7136\u732b\u761f\u662f\u79cd\u9ad8\u5ea6\u4f20\u67d3\u6027\u7684\u75be\u75c5\uff0c\u4f46\u7531\u4e8e\u9884\u9632\u63a5\u79cd\u7684\u6548\u679c\u975e\u5e38\u597d\uff0c\u56e0\u6b64\u73b0\u5728\u5df1\u8f83\u5c11\u89c1\u4e86\u3002"),c.a.createElement(y,{num:"1",title:"\u75c7\u72b6"}),c.a.createElement(N,null,"\u4e34\u5e8a\u75c7\u72b6\u4e25\u91cd\u7684\u7a0b\u5ea6\u6709\u76f8\u5f53\u5927\u7684\u4e2a\u4f53\u5dee\u5f02\uff0c\u89c6\u4e2a\u4f53\u5bf9\u4e8e\u672c\u75c5\u6bd2\u7684\u611f\u53d7\u6027\u800c\u5b9a\uff0c\u4ece\u65e0\u75c7\u72b6\u7684\u611f\u67d3\u5230\u8f7b\u5fae\u77ed\u6682\u7684\u53d1\u70e7\u53ca\u6cdb\u767d\u7ec6\u80de\u51cf\u5c11\uff0c\u518d\u5230\u4e25\u91cd\u7684\u6025\u6027\u5f81\u5019\uff0c\u751a\u81f3\u6b7b\u4ea1\u3002"),c.a.createElement(N,null,"\u4e00\u822c\u800c\u8a00\uff0c\u5e7c\u732b\u7684\u611f\u67d3\u75c7\u72b6\u901a\u5e38\u8f83\u4e3a\u4e25\u91cd\u3002\u672c\u75c5\u7684\u6f5c\u4f0f\u671f\u4e3a2-10d\uff0c\u6700\u5148\u51fa\u73b0\u7684\u75c7\u72b6\u4e3a\u55dc\u7761\u3001\u53d1\u70e7\u3001\u538c\u98df\u3001\u660e\u663e\u53e3\u6e34\u4f46\u5374\u62d2\u7edd\u996e\u6c34\uff0c\u901a\u5e38\u4e5f\u4f1a\u51fa\u73b0\u5455\u5410\u7684\u75c7\u72b6\uff0c\u4f46\u65e9\u671f\u5e76\u4e0d\u5e38\u53d1\u751f\u8179\u6cfb\uff0c\u4e8e\u8179\u90e8\u89e6\u8bca\u65f6\u4f1a\u53d1\u73b0\u5145\u6ee1\u6c14\u4f53\u53ca\u6db2\u4f53\u7684\u80a0\u9053\uff0c\u4e5f\u53ef\u80fd\u4f1a\u8bf1\u53d1\u75db\u89c9\u3002"),c.a.createElement(N,null,"\u8fc7\u4e862~3d\u4e4b\u540e\uff0c\u75c7\u72b6\u4fbf\u4f1a\u6709\u5f88\u5927\u7684\u5dee\u5f02\uff0c\u5982:\u53d1\u70e7\u3001\u5927\u91cf\u6c34\u6837\u8179\u6cfb\u6216\u75c5\u75be\u3001\u4e25\u91cd\u8131\u6c34\u53ca\u7535\u89e3\u8d28\u4e0d\u5e73\u8861\u3002\u4e00\u65e6\u4f53\u6e29\u4e0b\u964d\u81f3\u6b63\u5e38\u4ee5\u4e0b\u65f6\uff0c\u591a\u534a\u4f1a\u9020\u6210\u6b7b\u4ea1\u3002 \u6b7b\u4ea1\u7387\u4e3a25%~75%\uff0c\u6b7b\u4ea1\u7684\u539f\u56e0\u4e3a\u8131\u6c34\u3001\u7535\u89e3\u8d28\u4e0d\u5e73\u8861\u53ca\u7ee7\u53d1\u6027\u7684\u7ec6\u83cc\u611f\u67d3\u3002"),c.a.createElement(y,{num:"2",title:"\u6cbb\u7597"}),c.a.createElement(N,null,"\u6cbb\u7597\u4e0a\u4e3b\u8981\u91c7\u7528\u652f\u6301\u7597\u6cd5\u53ca\u5bf9\u75c7\u6cbb\u7597\uff0c\u4f7f\u732b\u54aa\u672c\u8eab\u7684\u514d\u75ab\u7cfb\u7edf\u80fd\u514b\u670d\u611f\u67d3\u3002"),c.a.createElement(I,null,c.a.createElement("li",null,"\u63a7\u5236\u5e76\u9884\u9632\u7ee7\u53d1\u6027\u7684\u7ec6\u83cc\u611f\u67d3"),c.a.createElement("li",null,"\u6b62\u6cfb\u6b62\u5410"),c.a.createElement("li",null,"\u589e\u52a0\u98df\u7269\u9002\u53e3\u6027")),c.a.createElement(y,{num:"3",title:"\u9884\u9632"}),c.a.createElement(N,null,"\u6309\u65f6\u63a5\u79cd\u75ab\u82d7\u3002"),c.a.createElement(x,null,c.a.createElement("p",{class:"wx"},"[1]\u6797\u653f\u6bc5. \u732b\u535a\u58eb\u7684\u732b\u75c5\u5b66[M]. 2014:427-429."))))}}]),t}(a.Component)),M=(a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"title-1"},c.a.createElement("section",{"data-brushtype":"text",className:"title-2"},this.props.title),c.a.createElement("section",{className:"title-3"},c.a.createElement("section",{className:"title-4"}),c.a.createElement("section",{className:"title-5"})))}}]),t}(a.Component)),_=(a.Component,a.Component,a.Component,a.Component,function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{class:"img-wrapper2"},c.a.createElement("img",{class:"format-img",src:this.props.url,alt:""}),c.a.createElement("p",{class:"img-text"},this.props.title))}}]),t}(a.Component)),q=(a.Component,a.Component,a.Component,function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("section",{className:"grid-col grid-col_1/2@minMd"},c.a.createElement("h3",{className:"txt m-txt_heavy m-txt_uppercase u-vr1x"},this.props.title),c.a.createElement("section",{className:"progressBar"},c.a.createElement("section",{className:"progressBar-inner"},c.a.createElement("span",{className:"u-isVisuallyHidden"},"1 out of 5")),c.a.createElement("span",{className:"progressBar-range progressBar-range_"+this.props.num+"/5"}))))}}]),t}(a.Component)),B=(a.Component,function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement(S,null),c.a.createElement(d,null))}}]),t}(a.Component)),G=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"shell"},c.a.createElement(h.a,null,c.a.createElement(p.a,{path:"/",exact:!0,component:B}),c.a.createElement(p.a,{path:"/catalog/",component:w}),c.a.createElement(p.a,{path:"/schedule/",component:C})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.0ab46406.chunk.js.map