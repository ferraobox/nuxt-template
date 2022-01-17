exports.ids = [12];
exports.modules = {

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionPremiumListings.vue?vue&type=template&id=10f38425&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-padded-vertical"},[_vm._ssrNode("<div class=\"app-wrapper\">","</div>",[_vm._ssrNode("<h2 class=\"app-title\">Premium Listings</h2> "),_vm._ssrNode("<div class=\"app-gallery\">","</div>",_vm._l((_vm.listings),function(listing,index){return _c('nuxt-link',{key:index,staticClass:"app-gallery-item",class:("city-" + (listing.id)),attrs:{"to":listing.url}},[_c('div',[_c('h3',[_vm._v(_vm._s(listing.city))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(listing.country))])])])}),1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SectionPremiumListings.vue?vue&type=template&id=10f38425&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionPremiumListings.vue?vue&type=script&lang=js&
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
const listings = [{
  id: 'paris',
  city: 'Paris',
  country: 'France',
  url: '/search?lat=48.856614&lng=2.3522219&label=Paris,%20France'
}, {
  id: 'new-york',
  city: 'New York',
  country: 'USA',
  url: '/search?lat=40.7127753&lng=-74.0059728&label=New%20York,%20USA'
}, {
  id: 'london',
  city: 'London',
  country: 'UK',
  url: '/search?lat=51.5073509&lng=-0.1277583&label=London,%20UK'
}, {
  id: 'dubai',
  city: 'Dubai',
  country: 'UAE',
  url: '/search?lat=25.2048493&lng=55.2707828&label=Dubai%20-%20United%20Arab%20Emirates'
}];
/* harmony default export */ var SectionPremiumListingsvue_type_script_lang_js_ = ({
  data() {
    return {
      listings
    };
  }

});
// CONCATENATED MODULE: ./components/SectionPremiumListings.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SectionPremiumListingsvue_type_script_lang_js_ = (SectionPremiumListingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SectionPremiumListings.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SectionPremiumListingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b03ff0d"
  
)

/* harmony default export */ var SectionPremiumListings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=section-premium-listings.js.map