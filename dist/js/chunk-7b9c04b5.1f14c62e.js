(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b9c04b5"],{"1c20":function(t,e,o){"use strict";var n=o("8659"),i=o.n(n);i.a},"1f26":function(t,e,o){},"33d8":function(t,e,o){},"4fc4":function(t,e,o){"use strict";var n=o("1f26"),i=o.n(n);i.a},"6b63":function(t,e,o){},"7db5":function(t,e,o){"use strict";var n=o("33d8"),i=o.n(n);i.a},8659:function(t,e,o){},a3b3:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"p__todoList"},[o("div",{staticClass:"todo-panel"},[o("todo-input",{attrs:{tools:!0}}),o("all-todo-list",{attrs:{title:"TO-DO",todos:t.todosDoing}}),o("all-todo-list",{attrs:{title:"DONE",todos:t.todosCompleted}})],1)])},i=[],s=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),a=o("2f62"),c=o("a57f"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"all-todo-list",class:t.playMode},[o("div",{staticClass:"title-bar"},[o("div",{staticClass:"title"},[t._v(t._s(t.title))]),o("i",{staticClass:"material-icons",class:t.closed?"closed":"",on:{click:t.toggleLsit}},[t._v("arrow_drop_down")])]),o("div",{staticClass:"todo-list",class:t.closed?"closed":""},[o("transition-group",{attrs:{name:"fade"}},t._l(t.todos,function(e){return o("div",{key:e.id,staticClass:"todo-item"},[o("check-box",{attrs:{width:"24",height:"24",size:"16",color:"white",id:e.id,value:e.isCompleted},on:{toggleValue:t.toggleItemCompleted}}),o("div",{staticClass:"item-title",class:e.isCompleted?"line":"",on:{dblclick:function(o){return t.dbClickItem(e.id,e.title)}}},[e.id===t.$store.state.nowTodoID&&"work"===t.$store.state.playMode?o("span"):t._e(),t._v("\n          "+t._s(e.title)+"\n        ")]),!1===e.isCompleted?o("play-btn",{attrs:{id:e.id}}):o("div",{staticClass:"dots"},t._l(e.doTimes,function(t,e){return o("div",{key:e,staticClass:"dot"})}),0)],1)}),0)],1)])},l=[],d=o("3d20"),u=o.n(d),p=o("c321"),m=o("b836"),f={props:["todos","title"],computed:{playMode:function(){return this.$store.state.playMode}},data:function(){return{closed:!1}},components:{CheckBox:p["a"],PlayBtn:m["a"]},methods:{toggleLsit:function(){this.closed=!this.closed},toggleItemCompleted:function(t){this.$store.commit("toggleItemCompleted",{id:t})},dbClickItem:function(t,e){var o=this;u.a.fire({customClass:{header:"alert__header",title:"break"===this.playMode?"alert__btitle":"alert__mtitle",input:"alert__input",popup:"alert__popup",actions:"alert__actions",cancelButton:"alert__cancelbtn"},heightAuto:!1,title:"修改或刪除待辦任務",input:"text",inputValue:e,showCancelButton:!0,confirmButtonText:"確認",cancelButtonText:"刪除"}).then(function(e){"cancel"===e.dismiss&&o.$store.commit("deleteTodoItemById",{id:t}),e.value&&o.$store.commit("editTodoItemById",{id:t,text:e.value})})}}},b=f,h=(o("beac"),o("2877")),y=Object(h["a"])(b,r,l,!1,null,"a19db642",null),v=y.exports;function g(t){for(var e=1;e<arguments.length;e++)if(e%2){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){Object(s["a"])(t,e,o[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}var O={components:{TodoInput:c["a"],AllTodoList:v},computed:g({},Object(a["b"])(["todos"]),{todosDoing:function(){return this.todos.filter(function(t){return!1===t.isCompleted})},todosCompleted:function(){return this.todos.filter(function(t){return!0===t.isCompleted})}})},_=O,C=(o("1c20"),Object(h["a"])(_,n,i,!1,null,null,null));e["default"]=C.exports},a57f:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo_input",class:{break:"break"===t.playMode,tools:t.tools,home:!t.tools}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"add a new mission..."},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.AddTodoItem(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),o("i",{staticClass:"material-icons",on:{click:t.AddTodoItem}},[t._v("add")])])},i=[],s=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),a=o("2f62");function c(t){for(var e=1;e<arguments.length;e++)if(e%2){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){Object(s["a"])(t,e,o[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}var r={props:["tools"],data:function(){return{text:""}},computed:c({},Object(a["b"])(["playing","playMode"])),methods:{AddTodoItem:function(){0!==this.text.trim().length&&(this.$store.commit("addTodoItem",{title:this.text}),this.text="")}}},l=r,d=(o("7db5"),o("2877")),u=Object(d["a"])(l,n,i,!1,null,"cea227d6",null);e["a"]=u.exports},b836:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"play-btn",class:t.home?"home":t.playMode},[o("i",{staticClass:"material-icons",on:{click:t.onChangeNowMession}},[t._v("play_circle_outline")])])},i=[],s=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),a=o("3d20"),c=o.n(a),r=o("2f62");function l(t){for(var e=1;e<arguments.length;e++)if(e%2){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){Object(s["a"])(t,e,o[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}var d={props:["home","id"],computed:l({},Object(r["b"])(["isStart","playMode"])),methods:{onChangeNowMession:function(){var t=this;!0===this.isStart?c.a.fire({heightAuto:!1,title:"正在 ".concat("break"===this.playMode?"休息":"工作","中"),text:"確定要停止目前動作",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定",cancelButtonText:"取消"}).then(function(e){e.value&&(t.$store.commit("toggleStarted",{value:!1}),t.$store.commit("togglePlaying",{value:!1}),t.$store.commit("setPlayMode",{value:"work"}),t.$store.commit("onChangeNowMession",{id:t.id}),t.$bus.$emit("onTimeStop"))}):this.$store.commit("onChangeNowMession",{id:this.id})}}},u=d,p=(o("4fc4"),o("2877")),m=Object(p["a"])(u,n,i,!1,null,"714e3913",null);e["a"]=m.exports},beac:function(t,e,o){"use strict";var n=o("6b63"),i=o.n(n);i.a}}]);
//# sourceMappingURL=chunk-7b9c04b5.1f14c62e.js.map