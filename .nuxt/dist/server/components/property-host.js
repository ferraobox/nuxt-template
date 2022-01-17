exports.ids = [7];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (dateSrt => {
  const date = new Date(dateSrt);
  return date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
});

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyHost.vue?vue&type=template&id=53af659d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-background-grey"},[_vm._ssrNode("<div class=\"app-wrapper app-padded-vertical\"><div class=\"app-host-header\"><div><img"+(_vm._ssrAttr("src",_vm.user.image))+"></div> <div><div class=\"app-host-name\">"+_vm._ssrEscape(_vm._s(_vm.user.name))+"</div> <div class=\"app-host-date\">"+_vm._ssrEscape("Joined in "+_vm._s(_vm.shortDate(_vm.user.joined)))+"</div> <div class=\"app-flex\"><div class=\"app-host-reviews\">"+_vm._ssrEscape(_vm._s(_vm.user.reviewCount)+" reviews")+"</div></div></div></div> <div class=\"app-host-description\">"+_vm._ssrEscape(_vm._s(_vm.user.description))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyHost.vue?vue&type=template&id=53af659d&

// EXTERNAL MODULE: ./utils/shortDate.js
var shortDate = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyHost.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PropertyHostvue_type_script_lang_js_ = ({
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    shortDate: shortDate["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/PropertyHost.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyHostvue_type_script_lang_js_ = (PropertyHostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PropertyHost.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyHostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3e4aa2e9"
  
)

/* harmony default export */ var PropertyHost = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=property-host.js.map