(function(e){function t(t){for(var o,r,c=t[0],u=t[1],d=t[2],l=0,s=[];l<c.length;l++)r=c[l],i[r]&&s.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(s.length)s.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-27484737":"ffcb056d","chunk-485d9638":"e3233cd0","chunk-50fe95b6":"6e343bf6","chunk-64f56baa":"cb64bc04","chunk-7b9c04b5":"1f14c62e","chunk-7d6186c6":"16c74296"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-27484737":1,"chunk-485d9638":1,"chunk-50fe95b6":1,"chunk-64f56baa":1,"chunk-7b9c04b5":1,"chunk-7d6186c6":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-27484737":"7f6cf496","chunk-485d9638":"f22262ea","chunk-50fe95b6":"b09954dc","chunk-64f56baa":"b923958d","chunk-7b9c04b5":"c81de78b","chunk-7d6186c6":"619e57b0"}[e]+".css",i=u.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var d=a[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===i))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){d=s[c],l=d.getAttribute("data-href");if(l===o||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){r[e]=0}));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(function(t,n){o=i[e]=[t,n]});t.push(o[2]=a);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),d=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}i[e]=void 0}};var s=setTimeout(function(){d({type:"timeout",target:l})},12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/TheF2E_Week1_Pomodoro/dist/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("6b54"),n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-page-transition",{attrs:{id:"app",name:"fade"}},[n("router-view")],1)},i=[],a=(n("5c0b"),n("2877")),c={},u=Object(a["a"])(c,r,i,!1,null,null,null),d=u.exports,l=n("8c4f");o["a"].use(l["a"]);var s=new l["a"]({base:"/TheF2E_Week1_Pomodoro/dist/",routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-50fe95b6"),n.e("chunk-64f56baa")]).then(n.bind(null,"bb51"))}},{path:"/tools",name:"tools",component:function(){return Promise.all([n.e("chunk-50fe95b6"),n.e("chunk-7d6186c6")]).then(n.bind(null,"d5d4"))},children:[{path:"todo",name:"todo",component:function(){return Promise.all([n.e("chunk-50fe95b6"),n.e("chunk-7b9c04b5")]).then(n.bind(null,"a3b3"))}},{path:"analytics",name:"analytics",component:function(){return n.e("chunk-27484737").then(n.bind(null,"41f2"))}},{path:"ringtones",name:"ringtones",component:function(){return n.e("chunk-485d9638").then(n.bind(null,"628d"))}}]},{path:"*",redirect:"/"}]}),f=(n("ac6a"),n("2f62"));o["a"].use(f["a"]);var h=new f["a"].Store({state:{playMode:"work",isStart:!1,playing:!1,playingTime:0,modeTime:{work:1500,break:300},todos:[{id:1562918030517,title:"the First thing to do today",isCompleted:!1,doTimes:3,remark:""},{id:1562918049596,title:"the second thing to do today",isCompleted:!1,doTimes:5,remark:""},{id:1562918051424,title:"the third thing to do today",isCompleted:!1,doTimes:3,remark:""},{id:1562918068435,title:"the forth thing to do today",isCompleted:!0,doTimes:4,remark:""},{id:1562918077667,title:"the five thing to do today",isCompleted:!1,doTimes:4,remark:""}],nowTodoID:1562918030517,dashValue:"",ring:{work:"default",break:"alert"}},mutations:{onChangeWorkRing:function(e,t){var n=t.value;e.ring.work=n},onChangeBreakRing:function(e,t){var n=t.value;e.ring.break=n},addTimesInMession:function(e){"work"===e.playMode&&e.todos.forEach(function(t){t.id===e.nowTodoID&&(t.doTimes+=1),e.dashValue="0%"})},onChangeDashValue:function(e,t){var n=t.value;e.dashValue=n},switchPlayMode:function(e){!0!==e.playing&&!0!==e.isStart&&(e.playMode="break"===e.playMode?"work":"break")},setPlayMode:function(e,t){var n=t.value;e.playMode=n},togglePlaying:function(e,t){var n=t.value;e.playing=n},toggleStarted:function(e,t){var n=t.value;e.isStart=n},setPlayingTime:function(e,t){var n=t.value;e.playingTime=n},countDownPlayingTime:function(e){e.playingTime=e.playingTime-1},addTodoItem:function(e,t){var n=t.title;e.todos.push({id:(new Date).valueOf(),title:n,isCompleted:!1,doTimes:0,remark:""})},toggleItemCompleted:function(e,t){var n=t.id;e.todos.forEach(function(e){e.id===n&&(e.isCompleted=!e.isCompleted)})},deleteTodoItemById:function(e,t){var n=t.id;e.todos=e.todos.filter(function(e){return e.id!==n})},editTodoItemById:function(e,t){var n=t.id,o=t.text;e.todos.forEach(function(e){e.id===n&&(e.title=o)})},onChangeNowMession:function(e,t){var n=t.id;e.nowTodoID=n}},actions:{}}),p=new o["a"];Object.defineProperty(o["a"].prototype,"$bus",{get:function(){return this.$root.bus}});var m=p,g=n("9483");Object(g["a"])("".concat("/TheF2E_Week1_Pomodoro/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var b=n("f0eb");n("8594");o["a"].use(b["default"]),o["a"].config.productionTip=!1,o["a"].filter("timeformat",function(e){var t=e%60,n=Math.floor(e/60)%60,o=Math.floor(Math.floor(e/60)/60);return 1===t.toString().length&&(t="0"+t.toString()),1===n.toString().length&&(n="0"+n.toString()),1===o.toString().length&&(o="0"+o.toString()),"".concat(n,":").concat(t)}),new o["a"]({data:function(){return{bus:m}},router:s,store:h,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},8594:function(e,t,n){}});
//# sourceMappingURL=app.ec1981bc.js.map