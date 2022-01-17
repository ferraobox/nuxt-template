export const ErrorView = () => import('../../components/ErrorView.vue' /* webpackChunkName: "components/error-view" */).then(c => wrapFunctional(c.default || c))
export const HomeCard = () => import('../../components/HomeCard.vue' /* webpackChunkName: "components/home-card" */).then(c => wrapFunctional(c.default || c))
export const HomeRow = () => import('../../components/HomeRow.vue' /* webpackChunkName: "components/home-row" */).then(c => wrapFunctional(c.default || c))
export const ImageUploader = () => import('../../components/ImageUploader.vue' /* webpackChunkName: "components/image-uploader" */).then(c => wrapFunctional(c.default || c))
export const PropertyDescription = () => import('../../components/PropertyDescription.vue' /* webpackChunkName: "components/property-description" */).then(c => wrapFunctional(c.default || c))
export const PropertyDetails = () => import('../../components/PropertyDetails.vue' /* webpackChunkName: "components/property-details" */).then(c => wrapFunctional(c.default || c))
export const PropertyGallery = () => import('../../components/PropertyGallery.vue' /* webpackChunkName: "components/property-gallery" */).then(c => wrapFunctional(c.default || c))
export const PropertyHost = () => import('../../components/PropertyHost.vue' /* webpackChunkName: "components/property-host" */).then(c => wrapFunctional(c.default || c))
export const PropertyMap = () => import('../../components/PropertyMap.vue' /* webpackChunkName: "components/property-map" */).then(c => wrapFunctional(c.default || c))
export const PropertyReviews = () => import('../../components/PropertyReviews.vue' /* webpackChunkName: "components/property-reviews" */).then(c => wrapFunctional(c.default || c))
export const SearchInput = () => import('../../components/SearchInput.vue' /* webpackChunkName: "components/search-input" */).then(c => wrapFunctional(c.default || c))
export const SectionMore = () => import('../../components/SectionMore.vue' /* webpackChunkName: "components/section-more" */).then(c => wrapFunctional(c.default || c))
export const SectionPremiumListings = () => import('../../components/SectionPremiumListings.vue' /* webpackChunkName: "components/section-premium-listings" */).then(c => wrapFunctional(c.default || c))
export const SectionRecentlyAdded = () => import('../../components/SectionRecentlyAdded.vue' /* webpackChunkName: "components/section-recently-added" */).then(c => wrapFunctional(c.default || c))
export const ShortText = () => import('../../components/ShortText.vue' /* webpackChunkName: "components/short-text" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
