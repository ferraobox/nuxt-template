exports.ids = [17,4,5,6,7,8,9,14];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShortText.vue?vue&type=template&id=5793083c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._ssrNode(_vm._ssrEscape("\n  "+_vm._s(_vm.displayText)+" ")+"<br> "+((_vm.isTooLong && !_vm.isExpanded)?("<button type=\"button\" class=\"comment\">\n    show\n  </button>"):"<!---->")+" "+((_vm.isTooLong && _vm.isExpanded)?("<button type=\"button\" class=\"comment\">\n    hide\n  </button>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShortText.vue?vue&type=template&id=5793083c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShortText.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ShortTextvue_type_script_lang_js_ = ({
  props: {
    text: {
      type: String,
      required: true
    },
    target: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      isExpanded: false,
      chunks: []
    };
  },

  computed: {
    isTooLong() {
      return this.chunks.length === 2;
    },

    displayText() {
      if (!this.isTooLong || this.isExpanded) {
        return this.chunks.join(' ');
      } else {
        return this.chunks[0] + '...';
      }
    }

  },

  created() {
    this.chunks = this.getChunks();
  },

  methods: {
    getChunks() {
      const position = this.text.indexOf(' ', this.target);

      if (this.text.length <= this.target || position === -1) {
        return [this.text];
      } else {
        return [this.text.substring(0, position), this.text.substring(position)];
      }
    }

  }
});
// CONCATENATED MODULE: ./components/ShortText.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShortTextvue_type_script_lang_js_ = (ShortTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShortText.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShortTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1a2c50ad"
  
)

/* harmony default export */ var ShortText = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyGallery.vue?vue&type=template&id=42909ec4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-section"},[_vm._ssrNode("<div class=\"app-wrapper\"><div class=\"app-masonry\">"+(_vm._ssrList((_vm.images),function(publicId){return ("<div"+(_vm._ssrStyle(null,("background-image: url(" + (_vm.getImageUrl(publicId)) + ")"), null))+"></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyGallery.vue?vue&type=template&id=42909ec4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyGallery.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PropertyGalleryvue_type_script_lang_js_ = ({
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImageUrl(publicId) {
      return this.$img(publicId, {
        width: 600
      }, {
        provider: 'cloudinary'
      });
    }

  }
});
// CONCATENATED MODULE: ./components/PropertyGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyGalleryvue_type_script_lang_js_ = (PropertyGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PropertyGallery.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyGalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "087735a1"
  
)

/* harmony default export */ var PropertyGallery = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDetails.vue?vue&type=template&id=d48f808e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-double-column"},[_vm._ssrNode("<div><h1>"+_vm._ssrEscape(_vm._s(_vm.home.title))+"</h1> <div class=\"app-flex\"><div class=\"app-address\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.home.location.address)+" "+_vm._s(_vm.home.location.city)+" "+_vm._s(_vm.home.location.state)+"\n        "+_vm._s(_vm.home.location.country)+"\n      ")+"</div> <div class=\"app-rating\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.home.reviewValue)+" ")+"<span>"+_vm._ssrEscape("("+_vm._s(_vm.home.reviewCount)+")")+"</span></div></div> <div class=\"app-property-details-footer\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.pluralize(_vm.home.guests, 'guest'))+" ·\n      "+_vm._s(_vm.pluralize(_vm.home.bedrooms, 'room'))+" · "+_vm._s(_vm.pluralize(_vm.home.beds, 'bed'))+" ·\n      "+_vm._s(_vm.pluralize(_vm.home.bathrooms, 'bath'))+"\n    ")+"</div></div> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"app-price\">"+_vm._ssrEscape("$"+_vm._s(_vm.home.pricePerNight))+"<span> / night</span></div> "),_c('client-only',[_c('date-picker',{staticClass:"app-search",attrs:{"is-range":"","timezone":"UTC","model-config":{ timeAdjust: '00:00:00' }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var inputValue = ref.inputValue;
var inputEvents = ref.inputEvents;
return [_c('input',_vm._g({staticClass:"datepicker",domProps:{"value":inputValue.start}},inputEvents.start)),_vm._v(" "),_c('input',_vm._g({staticClass:"datepicker",domProps:{"value":inputValue.end}},inputEvents.end))]}}]),model:{value:(_vm.range),callback:function ($$v) {_vm.range=$$v},expression:"range"}})],1),_vm._ssrNode(" <button class=\"app-big-button\">Request to book!</button>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyDetails.vue?vue&type=template&id=d48f808e&

// EXTERNAL MODULE: ./utils/pluralize.js
var pluralize = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDetails.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PropertyDetailsvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      range: {
        start: null,
        end: null
      }
    };
  },

  methods: {
    pluralize: pluralize["a" /* default */],

    checkout() {
      if (!this.range.start || !this.range.end) {
        alert('Please select a start and end date');
        return;
      }

      if (this.range.start.toString() == this.range.end.toString()) {
        alert('Start and end dates must be at least 1 day apart');
        return;
      }

      if (!this.$store.state.auth.isLoggedIn) {
        alert('You must sign in to book your stay');
        return;
      }

      const start = this.range.start.getTime() / 1000;
      const end = this.range.end.getTime() / 1000;
      this.$stripe.checkout(this.home.objectID, start, end);
    }

  }
});
// CONCATENATED MODULE: ./components/PropertyDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyDetailsvue_type_script_lang_js_ = (PropertyDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PropertyDetails.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0f6cb891"
  
)

/* harmony default export */ var PropertyDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDescription.vue?vue&type=template&id=3848d1aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-double-column"},[_vm._ssrNode("<div class=\"app-padded-vertical\"><h2><img src=\"/images/icons/quote.svg\" class=\"icon\"></h2> <p class=\"app-summary\">"+_vm._ssrEscape(_vm._s(_vm.home.description))+"</p></div> <div class=\"app-padded-vertical\">"+(_vm._ssrList((_vm.home.features),function(feature,index){return ("<div class=\"app-tag\">"+_vm._ssrEscape("\n      "+_vm._s(feature)+"\n    ")+"</div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyDescription.vue?vue&type=template&id=3848d1aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDescription.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PropertyDescriptionvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/PropertyDescription.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyDescriptionvue_type_script_lang_js_ = (PropertyDescriptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PropertyDescription.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyDescriptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "13c6a9cb"
  
)

/* harmony default export */ var PropertyDescription = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyMap.vue?vue&type=template&id=27d78ca8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"app-wrapper app-padded-vertical\"><h2 class=\"app-subtitle\">Location</h2> <p class=\"app-description\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.home.location.address)+"\n      "+_vm._s(_vm.home.location.city)+"\n      "+_vm._s(_vm.home.location.state)+"\n      "+_vm._s(_vm.home.location.country)+"\n    ")+"</p> <div class=\"app-map\"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyMap.vue?vue&type=template&id=27d78ca8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyMap.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PropertyMapvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  },

  mounted() {
    this.$maps.showMap(this.$refs.map, {
      lat: this.home._geoloc.lat,
      lng: this.home._geoloc.lng
    });
  }

});
// CONCATENATED MODULE: ./components/PropertyMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyMapvue_type_script_lang_js_ = (PropertyMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PropertyMap.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3ca7422b"
  
)

/* harmony default export */ var PropertyMap = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyReviews.vue?vue&type=template&id=a6dbd5d8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-padded-vertical"},[_vm._ssrNode("<div class=\"app-wrapper\">","</div>",[_vm._ssrNode("<div class=\"app-testimonials\">","</div>",_vm._l((_vm.reviews),function(review,index){return _vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"app-testimonial-header\"><div><img"+(_vm._ssrAttr("src",review.reviewer.image))+"></div> <div><p class=\"app-testimonial-name\">"+_vm._ssrEscape("\n              "+_vm._s(review.reviewer.name)+"\n            ")+"</p> <p class=\"app-testimonial-date\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.shortDate(review.date))+"\n            ")+"</p></div></div> "),_vm._ssrNode("<div class=\"app-testimonial-body\">","</div>",[_c('short-text',{attrs:{"text":review.comment,"target":150}})],1)],2)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyReviews.vue?vue&type=template&id=a6dbd5d8&

// EXTERNAL MODULE: ./utils/shortDate.js
var shortDate = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyReviews.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PropertyReviewsvue_type_script_lang_js_ = ({
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  methods: {
    shortDate: shortDate["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/PropertyReviews.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyReviewsvue_type_script_lang_js_ = (PropertyReviewsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PropertyReviews.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyReviewsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4aa5b42c"
  
)

/* harmony default export */ var PropertyReviews = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShortText: __webpack_require__(33).default})


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/_id.vue?vue&type=template&id=43b90271&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_vm._ssrNode("<div class=\"app-wrapper\">","</div>",[_vm._ssrNode("<div class=\"app-property-details\">","</div>",[_c('property-gallery',{attrs:{"images":_vm.home.images}}),_vm._ssrNode(" "),_c('property-details',{attrs:{"home":_vm.home}}),_vm._ssrNode(" "),_c('property-description',{attrs:{"home":_vm.home}}),_vm._ssrNode(" "),_c('property-host',{attrs:{"user":_vm.user}}),_vm._ssrNode(" "),_c('property-map',{attrs:{"home":_vm.home}}),_vm._ssrNode(" "),_c('property-reviews',{attrs:{"reviews":_vm.reviews}})],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/_id.vue?vue&type=template&id=43b90271&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/_id.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async asyncData({
    params,
    $dataApi,
    error
  }) {
    const responses = await Promise.all([//Get Home from the API
    $dataApi.getHomeByHomeId(params.id), //Get home reviews from the API
    $dataApi.getReviewsByHomeId(params.id), //Get home user from the API
    $dataApi.getUserByHomeId(params.id)]);
    const badResponse = responses.find(response => !response.ok);

    if (badResponse) {
      return error({
        statusCode: badResponse.status,
        message: badResponse.statusText
      });
    } //Return Data


    return {
      home: responses[0].json,
      reviews: responses[1].json,
      user: responses[2].json[0]
    };
  },

  head() {
    return {
      title: this.home.title,
      meta: [{
        hid: 'og-type',
        property: 'og:type',
        content: 'website'
      }, {
        hid: 'og-title',
        property: 'og:title',
        content: this.home.title
      }, {
        hid: 'og-desc',
        property: 'og:description',
        content: this.home.description
      }, {
        hid: 'og-image',
        property: 'og:image',
        content: this.$img(this.home.images[0], {
          width: 1200
        }, {
          provider: 'cloudinary'
        })
      }, {
        hid: 'og-url',
        property: 'og:url',
        content: `${this.$config.basicUrl}/home/${this.home.objectID}`
      }, {
        hid: 't-type',
        name: 'twitter:card',
        content: 'summary_large_image'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/home/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6836671c"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PropertyGallery: __webpack_require__(38).default,PropertyDetails: __webpack_require__(39).default,PropertyDescription: __webpack_require__(40).default,PropertyHost: __webpack_require__(41).default,PropertyMap: __webpack_require__(42).default,PropertyReviews: __webpack_require__(43).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map