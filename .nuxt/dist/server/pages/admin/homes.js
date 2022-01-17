exports.ids = [16,3];
exports.modules = {

/***/ 34:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageUploader.vue?vue&type=template&id=0ce8c9a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input type=\"file\" accept=\".jpeg,.jpg,image/jpeg\">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ImageUploader.vue?vue&type=template&id=0ce8c9a4&

// EXTERNAL MODULE: ./utils/fetchUtils.js
var fetchUtils = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageUploader.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var ImageUploadervue_type_script_lang_js_ = ({
  methods: {
    async uploadFile(e) {
      const file = e.target.files[0];

      if (!file) {
        return;
      }

      const filename = file.name.split('.').slice(0, -1).join('.') + Date.now();
      const options = {
        timestamp: Date.now(),
        public_id: filename
      }; //We do it here because admin web is a SPA
      //Call cloudinary MDW to get the signed url

      const response = await Object(fetchUtils["b" /* unWrap */])(await fetch('/api/cloudinary/signature', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(options)
      }));
      const signature = response.json.signature;

      const readData = fileObj => new Promise(resolve => {
        const reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);

        reader.readAsDataURL(fileObj);
      });

      const data = await readData(file);
      const asset = await this.$cloudinary.upload(data, { ...options,
        signature,
        apiKey: this.$config.cloudinary.apiKey
      });
      this.$emit('file-uploaded', asset.public_id);
    }

  }
});
// CONCATENATED MODULE: ./components/ImageUploader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageUploadervue_type_script_lang_js_ = (ImageUploadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ImageUploader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ImageUploadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "31f5fbcd"
  
)

/* harmony default export */ var ImageUploader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homes_vue_vue_type_style_index_0_id_5879495c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homes_vue_vue_type_style_index_0_id_5879495c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homes_vue_vue_type_style_index_0_id_5879495c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homes_vue_vue_type_style_index_0_id_5879495c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homes_vue_vue_type_style_index_0_id_5879495c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/homes.vue?vue&type=template&id=5879495c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode((_vm._ssrList((_vm.homeList),function(homeItem){return ("<span data-v-5879495c>"+_vm._ssrEscape("\n    "+_vm._s(homeItem.title)+"\n    ")+"<button class=\"text-red-800\" data-v-5879495c>Delete</button><br data-v-5879495c></span>")}))+" <h2 class=\"bold\" data-v-5879495c>Add a Home</h2> "),_vm._ssrNode("<form class=\"form\" data-v-5879495c>","</form>",[_vm._ssrNode("\n    Images:<br data-v-5879495c> "),_c('image-uploader',{on:{"file-uploaded":function($event){return _vm.imageUpdated($event, 0)}}}),_vm._ssrNode(" "),_c('image-uploader',{on:{"file-uploaded":function($event){return _vm.imageUpdated($event, 1)}}}),_vm._ssrNode(" "),_c('image-uploader',{on:{"file-uploaded":function($event){return _vm.imageUpdated($event, 2)}}}),_vm._ssrNode(" "),_c('image-uploader',{on:{"file-uploaded":function($event){return _vm.imageUpdated($event, 3)}}}),_vm._ssrNode(" "),_c('image-uploader',{on:{"file-uploaded":function($event){return _vm.imageUpdated($event, 4)}}}),_vm._ssrNode("\n    Title: <br data-v-5879495c> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.title)))+" class=\"w-60\" data-v-5879495c><br data-v-5879495c>\n    Description<br data-v-5879495c> <textarea class=\"w-104\" data-v-5879495c>"+_vm._ssrEscape(_vm._s(_vm.home.description))+"</textarea><br data-v-5879495c>\n    Note<br data-v-5879495c> <textarea class=\"w-104\" data-v-5879495c>"+_vm._ssrEscape(_vm._s(_vm.home.note))+"</textarea><br data-v-5879495c>\n    Features<br data-v-5879495c> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.features[0])))+" class=\"w-26\" data-v-5879495c> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.features[1])))+" class=\"w-26\" data-v-5879495c> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.features[2])))+" class=\"w-26\" data-v-5879495c> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.features[3])))+" class=\"w-26\" data-v-5879495c> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.features[4])))+" class=\"w-26\" data-v-5879495c><br data-v-5879495c>\n    Price Per Night<br data-v-5879495c> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.home.pricePerNight)))+" class=\"w-14\" data-v-5879495c><br data-v-5879495c>\n    Guests / Rooms / Beds / Baths<br data-v-5879495c> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.home.guests)))+" class=\"w-14\" data-v-5879495c> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.home.bedrooms)))+" class=\"w-14\" data-v-5879495c> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.home.beds)))+" class=\"w-14\" data-v-5879495c> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.home.bathrooms)))+" class=\"w-14\" data-v-5879495c><br data-v-5879495c> <input type=\"text\" autocomplete=\"off\" placeholder=\"Select a location\" data-v-5879495c><br data-v-5879495c>\n\n    Address: <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.location.address)))+" class=\"w-60\" data-v-5879495c><br data-v-5879495c>\n    City: <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.location.city)))+" class=\"w-26\" data-v-5879495c><br data-v-5879495c>\n    State: <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.location.state)))+" class=\"w-26\" data-v-5879495c><br data-v-5879495c>\n    Postal Code: <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.location.postalCode)))+" class=\"w-26\" data-v-5879495c><br data-v-5879495c>\n    Country: <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.location.country)))+" class=\"w-26\" data-v-5879495c><br data-v-5879495c> "),_vm._l((_vm.home.availabilityRanges),function(range,index){return _c('date-picker',{key:index,attrs:{"is-range":"","timezone":"UTC","model-config":{ timeAdjust: '00:00:00' }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var inputValue = ref.inputValue;
var inputEvents = ref.inputEvents;
return [_c('input',_vm._g({domProps:{"value":inputValue.start}},inputEvents.start)),_vm._v("\n        to\n        "),_c('input',_vm._g({domProps:{"value":inputValue.end}},inputEvents.end)),_c('br')]}}],null,true),model:{value:(_vm.home.availabilityRanges[index]),callback:function ($$v) {_vm.$set(_vm.home.availabilityRanges, index, $$v)},expression:"home.availabilityRanges[index]"}})}),_vm._ssrNode(" <button class=\"border px-4 py-2 border-gray-400\" data-v-5879495c>Add</button>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/homes.vue?vue&type=template&id=5879495c&scoped=true&

// EXTERNAL MODULE: ./utils/fetchUtils.js
var fetchUtils = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/homes.vue?vue&type=script&lang=js&
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

/* harmony default export */ var homesvue_type_script_lang_js_ = ({
  data() {
    return {
      homeList: [],
      home: {
        title: '',
        description: '',
        note: '',
        pricePerNight: '',
        guests: '',
        bedrooms: '',
        beds: '',
        bathrooms: '',
        features: ['', '', '', '', ''],
        location: {
          address: '',
          city: '',
          state: '',
          postalCode: '',
          country: ''
        },
        _geoloc: {
          lat: '',
          lng: ''
        },
        images: [],
        availabilityRanges: [{
          start: '',
          end: ''
        }, {
          start: '',
          end: ''
        }]
      }
    };
  },

  mounted() {
    this.$maps.makeAutoComplete(this.$refs.locationSelector, ['address']);
    this.setHomesList();
  },

  methods: {
    async setHomesList() {
      this.homeList = (await Object(fetchUtils["b" /* unWrap */])(await fetch('/api/homes/user/'))).json;
    },

    async onSubmit() {
      const response = await Object(fetchUtils["b" /* unWrap */])(await fetch('/api/homes', {
        method: 'POST',
        body: JSON.stringify(this.home),
        headers: {
          'Content-Type': 'application/json'
        }
      }));
      this.homeList.push({
        title: this.home.title,
        objectID: response.json.homeId
      });
    },

    async deleteHome(homeId) {
      await fetch(`/api/homes/${homeId}`, {
        method: 'DELETE'
      });
      const index = this.homeList.findIndex(obj => obj.objectID == homeId);
      this.homeList.splice(index, 1);
    },

    imageUpdated(imageUrl, index) {
      this.home.images[index] = imageUrl;
    },

    changed(event) {
      var _this$getAddressPart, _this$getAddressPart2, _this$getAddressPart3, _this$getAddressPart4, _this$getAddressPart5, _this$getAddressPart6;

      const addressParts = event.detail.address_components;
      const street = ((_this$getAddressPart = this.getAddressPart(addressParts, 'street_number')) === null || _this$getAddressPart === void 0 ? void 0 : _this$getAddressPart.short_name) || '';
      const route = ((_this$getAddressPart2 = this.getAddressPart(addressParts, 'route')) === null || _this$getAddressPart2 === void 0 ? void 0 : _this$getAddressPart2.short_name) || '';
      this.home.location.address = street + ' ' + route;
      this.home.location.city = ((_this$getAddressPart3 = this.getAddressPart(addressParts, 'locality')) === null || _this$getAddressPart3 === void 0 ? void 0 : _this$getAddressPart3.short_name) || '';
      this.home.location.state = ((_this$getAddressPart4 = this.getAddressPart(addressParts, 'administrative_area_level_1')) === null || _this$getAddressPart4 === void 0 ? void 0 : _this$getAddressPart4.long_name) || '';
      this.home.location.country = ((_this$getAddressPart5 = this.getAddressPart(addressParts, 'country')) === null || _this$getAddressPart5 === void 0 ? void 0 : _this$getAddressPart5.short_name) || '';
      this.home.location.postalCode = ((_this$getAddressPart6 = this.getAddressPart(addressParts, 'postal_code')) === null || _this$getAddressPart6 === void 0 ? void 0 : _this$getAddressPart6.short_name) || '';
      const geo = event.detail.geometry.location;
      this.home._geoloc.lat = geo.lat();
      this.home._geoloc.lng = geo.lng();
    },

    getAddressPart(parts, type) {
      return parts.find(part => part.types.includes(type));
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/homes.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_homesvue_type_script_lang_js_ = (homesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/homes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_homesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5879495c",
  "27aec608"
  
)

/* harmony default export */ var homes = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ImageUploader: __webpack_require__(36).default})


/***/ })

};;
//# sourceMappingURL=homes.js.map