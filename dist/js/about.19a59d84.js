(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")]),t._v(" "+t._s(t.count)+" "),n("button",{on:{click:t.addCount}},[t._v("加加")])])},u=[],c={data:function(){return{count1:0}},computed:{count:function(){return this.$store.state.count}},methods:{addCount:function(){this.$store.commit("setCount",this.count1++)}},beforeRouteUpdate:function(){console.log("当前路由变化的时候触发")},beforeRouteLeave:function(){console.log("路由离开的时候触发")}},s=c,a=n("2877"),i=Object(a["a"])(s,e,u,!1,null,null,null);o["default"]=i.exports}}]);
//# sourceMappingURL=about.19a59d84.js.map