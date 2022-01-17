exports.ids = [18,11,12,13];
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

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionRecentlyAdded.vue?vue&type=template&id=4cd1f8a8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-padded-vertical"},[_vm._ssrNode("<div class=\"app-wrapper\">","</div>",[_vm._ssrNode("<div class=\"app-carousel\">","</div>",[_vm._ssrNode("<div class=\"app-carousel-header\"><h2>Recently Added</h2></div> "),_vm._ssrNode("<div class=\"app-carousel-items\">","</div>",_vm._l((_vm.homes),function(home,index){return _c('nuxt-link',{key:index,staticClass:"app-house",attrs:{"to":("/home/" + (home.objectID) + "/")}},[_c('div',{staticClass:"app-house-header"},[_c('nuxt-img',{attrs:{"src":home.images[0],"width":"360","height":"175","provider":"cloudinary"}})],1),_vm._v(" "),_c('div',{staticClass:"app-house-body"},[_c('div',{staticClass:"app-rating"},[_vm._v("\n              "+_vm._s(home.reviewValue)+"\n              "),_c('span',[_vm._v("("+_vm._s(home.reviewCount)+")")])]),_vm._v(" "),_c('h2',[_vm._v(_vm._s(home.title))]),_vm._v(" "),_c('div',{staticClass:"app-address"},[_vm._v("\n              "+_vm._s(home.address)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"app-price"},[_vm._v("\n              $"+_vm._s(home.pricePerNight)+"\n              "),_c('span',[_vm._v("/ night")])]),_vm._v(" "),_c('div',{staticClass:"app-house-footer"},[_c('img',{attrs:{"src":"/images/icons/house-blue.svg","width":"16px"}}),_vm._v(" "),_c('div',{staticClass:"app-house-guests"},[_vm._v(_vm._s(home.guests)+" guests")])])])])}),1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SectionRecentlyAdded.vue?vue&type=template&id=4cd1f8a8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionRecentlyAdded.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
/* harmony default export */ var SectionRecentlyAddedvue_type_script_lang_js_ = ({
  props: {
    homes: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/SectionRecentlyAdded.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SectionRecentlyAddedvue_type_script_lang_js_ = (SectionRecentlyAddedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SectionRecentlyAdded.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SectionRecentlyAddedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e091c6c2"
  
)

/* harmony default export */ var SectionRecentlyAdded = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionMore.vue?vue&type=template&id=4d8467ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-padded-vertical"},[_vm._ssrNode("<div class=\"app-wrapper\">","</div>",[_vm._ssrNode("<div class=\"app-dual-picture\">","</div>",[_c('nuxt-link',{staticClass:"city-san-francisco",attrs:{"to":"/search?lat=37.7749295&lng=-122.4194155&label=San%20Francisco,%20CA,%20USA"}},[_c('div',[_c('h3',[_vm._v("Golden Gate Bridge")]),_vm._v(" "),_c('p',[_vm._v("San Francisco")])])]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"city-cancun",attrs:{"to":"/search?lat=21.161908&lng=-86.8515279&label=Cancún,%20Mexico"}},[_c('div',[_c('h3',[_vm._v("Cancún")]),_vm._v(" "),_c('p',[_vm._v("México")])])])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SectionMore.vue?vue&type=template&id=4d8467ac&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SectionMore.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "07fbf13e"
  
)

/* harmony default export */ var SectionMore = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=071a8bec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app"},[_vm._ssrNode("<div class=\"app-container\"><div class=\"app-hero\"><h2>- Settle in somewhere new. Discover stays to live, work, or just relax.</h2></div></div> "),_c('section-premium-listings'),_vm._ssrNode(" "),_c('section-recently-added',{staticClass:"app-background-grey",attrs:{"homes":_vm.homes}}),_vm._ssrNode(" "),_c('section-more')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=071a8bec&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
//By default the vue-loader will look for a file named index.js
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  async asyncData({
    $dataApi,
    error
  }) {
    const homesResponse = await $dataApi.getHomes();

    if (!homesResponse.ok) {
      return error({
        statusCode: homesResponse.status,
        message: homesResponse.statusText
      });
    }

    return {
      homes: homesResponse.json
    };
  },

  head() {
    return {
      title: 'Homepage',
      meta: [{
        name: 'description',
        content: 'App that uses Nuxt, Cloudinary, Stripe, Google Maps and Algolia',
        hid: 'description'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4713921a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionPremiumListings: __webpack_require__(44).default,SectionRecentlyAdded: __webpack_require__(45).default,SectionMore: __webpack_require__(46).default})


/***/ })

};;
//# sourceMappingURL=index.js.map