(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-452c4894"],{"18ed":function(t,e,i){},"52d2":function(t,e,i){"use strict";var n=i("cb4e"),s=i.n(n);s.a},8317:function(t,e,i){"use strict";var n=i("e82a"),s=i.n(n);s.a},9960:function(t,e,i){},cb4e:function(t,e,i){},d5d4:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"p__tools"},[i("menu-recipt"),i("vue-page-transition",{attrs:{id:"tools_panel",name:"slideInDown"}},[i("router-view")],1),i("close-bar")],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu-recipt",class:t.playMode},[i("div",{staticClass:"menu_list"},[i("router-link",{staticClass:"menu_link",attrs:{to:"/tools/todo"}},[i("i",{staticClass:"material-icons"},[t._v("list")]),i("span",{staticClass:"title"},[t._v("to-do list")])]),i("router-link",{staticClass:"menu_link",attrs:{to:"/tools/analytics"}},[i("i",{staticClass:"material-icons"},[t._v("assessment")]),i("span",{staticClass:"title"},[t._v("analytics")])]),i("router-link",{staticClass:"menu_link",attrs:{to:"/tools/ringtones"}},[i("i",{staticClass:"material-icons"},[t._v("library_music")]),i("span",{staticClass:"title"},[t._v("ringtones")])])],1),i("reciprocal")],1)},a=[],r=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),c=i("2f62"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reciprocal-panel",class:t.playMode},[i("div",{staticClass:"out-circle"},[i("div",{staticClass:"inner-circle"},[i("div",{staticClass:"play-btn"},[!1===t.playing?i("i",{staticClass:"material-icons",on:{click:function(e){return t.togglePlaying(!0)}}},[t._v("play_circle_filled")]):i("i",{staticClass:"material-icons",on:{click:function(e){return t.togglePlaying(!1)}}},[t._v("pause_circle_filled")])])])]),i("div",{staticClass:"mession"},[i("div",{staticClass:"time-block"},[t._v(t._s(t._f("timeformat")(t.time)))]),i("transition-group",{staticClass:"bounce-block",attrs:{name:"bounce"}},[i("div",{key:t.nowMession.id,staticClass:"title"},[t._v("\n        "+t._s("work"===t.playMode?t.nowMession.title:"take a break"))])])],1)])},u=[],m=i("3d20"),d=i.n(m);function p(t){for(var e=1;e<arguments.length;e++)if(e%2){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){Object(r["a"])(t,e,i[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}var f={data:function(){return{timer:null}},mounted:function(){this.isStart&&this.playing&&this.timmerRecip()},created:function(){var t=this;this.$bus.$on("onTimeStop",function(e){window.clearInterval(t.timer)})},destroyed:function(){this.timer&&window.clearInterval(this.timer),this.$bus.$off("onTimeStop")},computed:p({},Object(c["b"])(["ring","playing","playMode","playingTime","modeTime","isStart","todos","nowTodoID"]),{time:function(){return this.isStart?this.playingTime:this.modeTime[this.playMode]},nowMession:function(){var t=this;return this.todos.filter(function(e){return e.id===t.nowTodoID})[0]}}),methods:{togglePlaying:function(t){this.$store.commit("togglePlaying",{value:t}),this.isStart||!0!==t?this.isStart&&!0===t?this.timmerRecip():!1===t&&window.clearInterval(this.timer):(this.$store.commit("toggleStarted",{value:!0}),this.$store.commit("setPlayingTime",{value:this.modeTime[this.playMode]}),this.timmerRecip())},timmerRecip:function(){var t=this;this.timer=setInterval(function(){t.$store.commit("countDownPlayingTime"),t.playingTime<=0&&(t.$store.commit("addTimesInMession"),t.resetPlaying(),t.ringAndAlert())},1e3)},resetPlaying:function(){window.clearInterval(this.timer),this.$store.commit("toggleStarted",{value:!1}),this.$store.commit("togglePlaying",{value:!1}),this.$store.commit("setPlayingTime",{value:0})},ringAndAlert:function(){var t=null;"none"!==this.ring[this.playMode]&&(t=new Audio("".concat("/TheF2E_Week1_Pomodoro/dist/","audio/alert/").concat(this.ring[this.playMode],".mp3")),t.play()),d.a.fire({heightAuto:!1,title:"".concat("break"===this.playMode?"休息":"工作","時間到囉"),type:"success",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定"}).then(function(e){e.value&&t&&t.pause()})}}},v=f,y=(i("52d2"),i("2877")),g=Object(y["a"])(v,l,u,!1,null,"3e5f332b",null),h=g.exports;function b(t){for(var e=1;e<arguments.length;e++)if(e%2){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){Object(r["a"])(t,e,i[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}var _={components:{Reciprocal:h},computed:b({},Object(c["b"])(["playing","playMode"]))},w=_,O=(i("e6ac"),Object(y["a"])(w,o,a,!1,null,"2713f3ee",null)),C=O.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"close-bar"},[i("router-link",{staticClass:"close_link",attrs:{to:"/"}},[i("i",{staticClass:"material-icons"},[t._v("close")])]),i("div",{staticClass:"menu-title"},[t._v("POMODORO")])],1)},P=[],j={},M=j,T=(i("8317"),Object(y["a"])(M,k,P,!1,null,"103b7676",null)),$=T.exports,S={components:{MenuRecipt:C,CloseBar:$}},D=S,I=(i("e5e3"),Object(y["a"])(D,n,s,!1,null,"11da85f0",null));e["default"]=I.exports},e5e3:function(t,e,i){"use strict";var n=i("9960"),s=i.n(n);s.a},e6ac:function(t,e,i){"use strict";var n=i("18ed"),s=i.n(n);s.a},e82a:function(t,e,i){}}]);
//# sourceMappingURL=chunk-452c4894.a2bfa89f.js.map