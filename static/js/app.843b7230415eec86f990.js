webpackJsonp([1],{"/PEs":function(t,e){},"8xrC":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},r,!1,function(t){n("hhHY")},null,null).exports,o=n("/ocq"),s=n("BO1k"),l=n.n(s),u=n("ifoU"),c=n.n(u),d=n("M4fF"),h=n.n(d),f=n("u4Bf"),v=n.n(f),p={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tile",class:this.tileType,attrs:{type:"button"},on:{click:this.onClick}})},staticRenderFns:[]};var w={components:{tile:n("VU/8")({props:["color","posX","posY"],computed:{tileType:function(){return this.color+"Tile"}},methods:{onClick:function(){this.$emit("onFlip",this.posX,this.posY)}}},p,!1,function(t){n("hAMs")},null,null).exports,draggable:v.a},props:["board"],methods:{color:function(t){return"Head"===t.state?t.head:t.tail},onFlip:function(t,e){this.$emit("onFlip",t,e)}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},[t._l(t.board,function(e,a){return n("div",{key:a,staticClass:"board-row",staticStyle:{float:"left"}},[n("draggable",{attrs:{list:e,group:"board"}},t._l(e,function(e,r){return n("div",{key:r,staticClass:"list-group-item"},[n("tile",{attrs:{color:t.color(e),posX:a,posY:r},on:{onFlip:t.onFlip}})],1)}),0)],1)}),t._v(" "),n("div",{staticStyle:{clear:"both"}})],2)},staticRenderFns:[]};var _={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer"},[t._l(t.answer,function(e,a){return n("div",{key:a,staticClass:"board-row",staticStyle:{float:"left"}},t._l(e,function(t,e){return n("div",{key:e,staticClass:"tile",class:t+"Tile"})}),0)}),t._v(" "),n("div",{staticStyle:{clear:"both"}})],2)},staticRenderFns:[]};function b(t){var e=new c.a,n=!0,a=!1,r=void 0;try{for(var i,o=l()(t);!(n=(i=o.next()).done);n=!0){var s=i.value,u=!0,d=!1,h=void 0;try{for(var f,v=l()(s);!(u=(f=v.next()).done);u=!0){var p=f.value;if(e.has(p)?e.set(p,e.get(p)+1):e.set(p,1),e.get(p)>=3)return!1}}catch(t){d=!0,h=t}finally{try{!u&&v.return&&v.return()}finally{if(d)throw h}}}}catch(t){a=!0,r=t}finally{try{!n&&o.return&&o.return()}finally{if(a)throw r}}return!0}function H(){for(;;){var t=[],e=!0,n=!1,a=void 0;try{for(var r,i=l()(Array(9).keys());!(e=(r=i.next()).done);e=!0){var o=r.value;t.push({x:o%3,y:Math.floor(o/3)})}}catch(t){n=!0,a=t}finally{try{!e&&i.return&&i.return()}finally{if(n)throw a}}h.a.shuffle(t);var s=[[{head:"Pink",tail:"Yellow",state:"Head"},{head:"Orange",tail:"Yellow",state:"Head"},{head:"Orange",tail:"Pink",state:"Head"}],[{head:"Pink",tail:"Green",state:"Head"},{head:"Yellow",tail:"Blue",state:"Head"},{head:"Orange",tail:"Brown",state:"Head"}],[{head:"Green",tail:"Blue",state:"Head"},{head:"Brown",tail:"Blue",state:"Head"},{head:"Brown",tail:"Green",state:"Head"}]],u=[],c=!0,d=!1,f=void 0;try{for(var v,p=l()(Array(3).keys());!(c=(v=p.next()).done);c=!0){var w=v.value,y=[],_=!0,H=!1,k=void 0;try{for(var m,g=l()(Array(3).keys());!(_=(m=g.next()).done);_=!0){var x=t[3*w+m.value],B=x.x,C=x.y,A=s[B][C];0===(O=2,(F=0)+Math.floor((O-F)*Math.random()))?y.push(A.tail):y.push(A.head)}}catch(t){H=!0,k=t}finally{try{!_&&g.return&&g.return()}finally{if(H)throw k}}u.push(y)}}catch(t){d=!0,f=t}finally{try{!c&&p.return&&p.return()}finally{if(d)throw f}}if(b(u))return u}var F,O}var k={components:{board:n("VU/8")(w,y,!1,function(t){n("ibGO")},null,null).exports,answer:n("VU/8")({generateMap:function(){return[["Orange","Pink","Brown"],["Pink","Blue","Brown"],["Orange","Yellow","Green"]]},props:["answer"]},_,!1,function(t){n("8xrC")},null,null).exports},data:function(){return{board:[[{head:"Pink",tail:"Yellow",state:"Head"},{head:"Orange",tail:"Yellow",state:"Head"},{head:"Orange",tail:"Pink",state:"Head"}],[{head:"Pink",tail:"Green",state:"Head"},{head:"Yellow",tail:"Blue",state:"Head"},{head:"Orange",tail:"Brown",state:"Head"}],[{head:"Green",tail:"Blue",state:"Head"},{head:"Brown",tail:"Blue",state:"Head"},{head:"Brown",tail:"Green",state:"Head"}]],answer:H(),state:"Answering"}},computed:{nextButtonClass:function(){return"Answering"===this.state?"next-btn-disapper":"next-btn-appear"}},methods:{onAnswer:function(){this.check()?this.state="Waiting":alert("できてないよ")},onFlip:function(t,e){this.board[t][e].state="Head"===this.board[t][e].state?"Tail":"Head"},onNext:function(){this.answer=H(),this.state="Answering"},check:function(){var t=this,e=!0;return this.board.forEach(function(n,a){3!==n.length&&(e=!1),n.forEach(function(n,r){var i;t.answer[a][r]!==("Head"===(i=n).state?i.head:i.tail)&&(e=!1)})}),e}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h3",[t._v("お題")]),t._v(" "),n("answer",{attrs:{answer:t.answer}}),t._v(" "),n("p",[t._v("上の絵のようにタイルをひっくり返したり並び替えてね。")]),t._v(" "),n("p",[t._v("ヒント：クリックするとひっくり返るよ")]),t._v(" "),n("p",[t._v("ヒント2：ドラッグすると位置が変わるよ")]),t._v(" "),n("p",{class:t.nextButtonClass},[t._v("正解だよ〜すごいね。next problem ボタンを押すと次の問題が出題されるよ")]),t._v(" "),n("board",{attrs:{board:t.board},on:{onFlip:t.onFlip}}),t._v(" "),n("div",[n("button",{on:{click:t.onAnswer}},[t._v("Answer")])]),t._v(" "),n("div",[n("button",{class:t.nextButtonClass,on:{click:t.onNext}},[t._v("next problem")])])],1)},staticRenderFns:[]};var g=n("VU/8")(k,m,!1,function(t){n("/PEs")},null,null).exports;a.a.use(o.a);var x=new o.a({routes:[{path:"/",name:"Game",component:g}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:x,components:{App:i},template:"<App/>"})},hAMs:function(t,e){},hhHY:function(t,e){},ibGO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.843b7230415eec86f990.js.map