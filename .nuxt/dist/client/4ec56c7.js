(window.webpackJsonp=window.webpackJsonp||[]).push([[10,15],{437:function(t,e,n){"use strict";e.a=function(t){return new Date(t).toLocaleDateString(void 0,{day:"numeric",month:"long",year:"numeric"})}},438:function(t,e,n){"use strict";n.r(e);n(264),n(80);var r={props:{text:{type:String,required:!0},target:{type:Number,required:!0}},data:function(){return{isExpanded:!1,chunks:[]}},computed:{isTooLong:function(){return 2===this.chunks.length},displayText:function(){return!this.isTooLong||this.isExpanded?this.chunks.join(" "):this.chunks[0]+"..."}},created:function(){this.chunks=this.getChunks()},methods:{getChunks:function(){var t=this.text.indexOf(" ",this.target);return this.text.length<=this.target||-1===t?[this.text]:[this.text.substring(0,t),this.text.substring(t)]}}},o=n(27),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("\n  "+t._s(t.displayText)+" "),n("br"),t._v(" "),t.isTooLong&&!t.isExpanded?n("button",{staticClass:"comment",attrs:{type:"button"},on:{click:function(e){t.isExpanded=!0}}},[t._v("\n    show\n  ")]):t._e(),t._v(" "),t.isTooLong&&t.isExpanded?n("button",{staticClass:"comment",attrs:{type:"button"},on:{click:function(e){t.isExpanded=!1}}},[t._v("\n    hide\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},448:function(t,e,n){"use strict";n.r(e);var r=n(437),o={props:{reviews:{type:Array,required:!0}},methods:{shortDate:r.a}},c=n(27),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-padded-vertical"},[n("div",{staticClass:"app-wrapper"},[n("div",{staticClass:"app-testimonials"},t._l(t.reviews,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"app-testimonial-header"},[n("div",[n("img",{attrs:{src:e.reviewer.image}})]),t._v(" "),n("div",[n("p",{staticClass:"app-testimonial-name"},[t._v("\n              "+t._s(e.reviewer.name)+"\n            ")]),t._v(" "),n("p",{staticClass:"app-testimonial-date"},[t._v("\n              "+t._s(t.shortDate(e.date))+"\n            ")])])]),t._v(" "),n("div",{staticClass:"app-testimonial-body"},[n("short-text",{attrs:{text:e.comment,target:150}})],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ShortText:n(438).default})}}]);