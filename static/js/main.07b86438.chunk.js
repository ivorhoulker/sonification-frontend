(this["webpackJsonpfrontend-only-sound"]=this["webpackJsonpfrontend-only-sound"]||[]).push([[0],{26:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var r=n(5),c=n(6),a=n.n(c),o=n(19),s=n.n(o),i=(n(26),n(0)),u=n.n(i),d=n(1),f=n(2),l=n(20),p=n.n(l);var v=function(){var t=Object(c.useState)({}),e=Object(f.a)(t,2),n=e[0],r=e[1],a=function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("https://covid-api.mmediagroup.fr/v1/cases",{httpAgent:!0});case 3:e=t.sent,r(e),console.log(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),{data:n}},g=n(9);var b=function(){var t=v().data,e=(new g.a).toDestination(),n=function(){var t=Object(d.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.c();case 2:console.log("audio is ready"),n=g.b(),e.triggerAttackRelease("C4","8n",n),e.triggerAttackRelease("E4","8n",n+.5),e.triggerAttackRelease("G4","8n",n+1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("button",{onClick:n,children:"Start Sound"})]}),Object(r.jsx)("div",{children:JSON.stringify(t)})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),h()}},[[53,1,2]]]);
//# sourceMappingURL=main.07b86438.chunk.js.map