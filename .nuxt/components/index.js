export { default as BestStock } from '../..\\components\\BestStock.vue'
export { default as Chart } from '../..\\components\\Chart.vue'
export { default as IndexInfo } from '../..\\components\\IndexInfo.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as SearchBox } from '../..\\components\\SearchBox.vue'
export { default as StockBar } from '../..\\components\\StockBar.vue'
export { default as StockTable } from '../..\\components\\StockTable.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'
export { default as TheNews } from '../..\\components\\TheNews.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as SearchBoxListDropdown } from '../..\\components\\SearchBox\\ListDropdown.vue'
export { default as SearchBoxMagnifyGlass } from '../..\\components\\SearchBox\\MagnifyGlass.vue'
export { default as SearchBar } from '../..\\components\\SearchBox\\SearchBar.vue'

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
