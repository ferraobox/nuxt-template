exports.ids = [14];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=short-text.js.map