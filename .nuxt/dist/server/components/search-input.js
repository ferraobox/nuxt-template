exports.ids = [10];
exports.modules = {

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchInput.vue?vue&type=template&id=5ef6e498&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{ref:"citySearch",attrs:{"type":"text","placeholder":"Enter your address"},on:{"changed":_vm.changed}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SearchInput.vue?vue&type=template&id=5ef6e498&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchInput.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var SearchInputvue_type_script_lang_js_ = ({
  mounted() {
    this.$maps.makeAutoComplete(this.$refs.citySearch);
  },

  methods: {
    changed(event) {
      const place = event.detail;

      if (!place.geometry) {
        return;
      }

      this.$router.push({
        name: 'search',
        query: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          label: this.$refs.citySearch.value
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/SearchInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchInputvue_type_script_lang_js_ = (SearchInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SearchInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "212f3466"
  
)

/* harmony default export */ var SearchInput = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=search-input.js.map