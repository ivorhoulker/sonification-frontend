(this["webpackJsonpfrontend-only-sound"]=this["webpackJsonpfrontend-only-sound"]||[]).push([[0],{27:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n(3),a=n.n(c),s=n(20),o=n.n(s),u=(n(27),n(0)),i=n.n(u),p=n(1),l=n(2),f=n(21),b=n.n(f);var h=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(p.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.kanye.rest/");case 3:t=e.sent,r(t.data.quote),console.log("Api response",t.data.quote),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),{data:n,refreshData:function(){a()}}},j=n(4),v=n(11),d=n.n(v);var O=function(){var e=Object(c.useState)(new d.a),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),o=Object(l.a)(s,2),u=o[0],f=o[1],b=Object(c.useState)(!1),v=Object(l.a)(b,2),O=v[0],x=v[1],k=h(),w=(k.data,k.refreshData,Object(c.useState)(!1)),y=Object(l.a)(w,2);function m(){return(m=Object(p.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{f(!0),n.speak({text:t,queue:!1,listeners:{onend:function(){f(!1),x(!1)}}})}catch(r){console.error(r),f(!1),x(!1)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(p.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.pause();case 3:x(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function S(){return(S=Object(p.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.resume();case 3:x(!1),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function C(){return(C=Object(p.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.cancel();case 3:f(!1),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function D(){return(D=Object(p.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n||a(new d.a),e.next=4,n.init({volume:1,lang:"zh-HK",rate:1,pitch:1,splitSentences:!0});case 4:t=e.sent,console.log("Speech is ready, voices are available",t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}y[0],y[1],(new j.b).toDestination(),Object(c.useEffect)((function(){!function(){D.apply(this,arguments)}()}),[]);var F=Object(c.useState)("\u5462\u5957\u65b9\u6848\u76ee\u524d\u5f97\u5230\u9999\u6e2f\u6559\u80b2\u3001\u96fb\u8166\u4e2d\u6587\u8cc7\u8a0a\u8655\u7406\u7b49\u591a\u65b9\u9762\u5605\u652f\u6301\u3002\u57fa\u65bc\u7cb5\u62fc\u5605\u62fc\u97f3\u8f38\u5165\u6cd5\u4ea6\u90fd\u767c\u5c55\u5f97\u76f8\u7576\u6210\u719f\u3002\u9664\u5497\u9999\u6e2f\uff0c\u53f0\u7063\u540c\u65e5\u672c\u4ea6\u90fd\u6709\u4f7f\u7528\u5462\u5957\u65b9\u6848\u5605\u8f38\u5165\u7cfb\u7d71\u51fa\u552e\uff0c\u5167\u5730\u90fd\u6709\u6c11\u9593\u4eba\u58eb\u64da\u6b64\u88fd\u4f5c\u5605\u8f38\u5165\u65b9\u6848\u3002\u65b9\u6848\u5f97\u5230\u653f\u5e9c\u3001\u5546\u754c\u3001\u5b78\u754c\u7b49\u5ee3\u6cdb\u8a8d\u540c\u3002"),q=Object(l.a)(F,2),E=q[0],P=q[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("form",{children:Object(r.jsx)("textarea",{rows:20,cols:50,onChange:function(e){e.preventDefault(),P(e.target.value)},value:E,name:"sentence"})}),u&&!O?Object(r.jsx)("button",{onClick:function(){return function(){return g.apply(this,arguments)}()},children:"Pause sentence"}):u&&O?Object(r.jsx)("button",{onClick:function(){return function(){return S.apply(this,arguments)}()},children:"Resume sentence"}):Object(r.jsx)("button",{onClick:function(){return function(e){return m.apply(this,arguments)}(E)},children:"Speak sentence"}),u&&Object(r.jsx)("button",{onClick:function(){return function(){return C.apply(this,arguments)}()},children:"Cancel sentence"})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),x()}},[[55,1,2]]]);
//# sourceMappingURL=main.8a4626c6.chunk.js.map