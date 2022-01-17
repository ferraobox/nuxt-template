exports.ids = [2];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((number, singularWord) => {
  const text = `${number} ${singularWord}`;

  if (number == 1) {
    return text;
  }

  return text + 's';
});

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeRow.vue?vue&type=template&id=18c95e7d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nuxt-img',{staticClass:"app-house-header",attrs:{"provider":"cloudinary","width":"360","height":"200","src":_vm.home.images[0]}}),_vm._ssrNode(" <div class=\"app-house-body\"><img src=\"/images/icons/heart.svg\" class=\"app-fav\"> <h2>"+_vm._ssrEscape(_vm._s(_vm.home.title))+"</h2> <div class=\"app-address\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.home.location.address)+" "+_vm._s(_vm.home.location.city)+"\n      "+_vm._s(_vm.home.location.state)+"\n    ")+"</div> <div class=\"app-amenities\"><p>"+_vm._ssrEscape("\n        "+_vm._s(_vm.pluralize(_vm.home.guests, 'guest'))+", "+_vm._s(_vm.pluralize(_vm.home.bedrooms, 'room'))+",\n        "+_vm._s(_vm.pluralize(_vm.home.beds, 'bed'))+",\n        "+_vm._s(_vm.pluralize(_vm.home.bathrooms, 'bath'))+"\n      ")+"</p> <p>"+_vm._ssrEscape(_vm._s(_vm.features))+"</p></div> <div class=\"app-flex\"><div class=\"app-rating\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.home.reviewValue)+"\n        ")+"<span>"+_vm._ssrEscape("("+_vm._s(_vm.home.reviewCount)+")")+"</span></div> <div class=\"app-price\">"+_vm._ssrEscape("$"+_vm._s(_vm.home.pricePerNight))+"<span>/ night</span></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeRow.vue?vue&type=template&id=18c95e7d&

// EXTERNAL MODULE: ./utils/pluralize.js
var pluralize = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeRow.vue?vue&type=script&lang=js&
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

/* harmony default export */ var HomeRowvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  },
  computed: {
    features() {
      return this.home.features.slice(0, 3).join(', ');
    }

  },
  methods: {
    pluralize: pluralize["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/HomeRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeRowvue_type_script_lang_js_ = (HomeRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HomeRow.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeRowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0331775f"
  
)

/* harmony default export */ var HomeRow = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-row.js.map