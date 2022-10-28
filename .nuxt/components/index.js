export const BestStock = () => import('../..\\components\\BestStock.vue' /* webpackChunkName: "components/best-stock" */).then(c => wrapFunctional(c.default || c))
export const Chart = () => import('../..\\components\\Chart.vue' /* webpackChunkName: "components/chart" */).then(c => wrapFunctional(c.default || c))
export const IndexInfo = () => import('../..\\components\\IndexInfo.vue' /* webpackChunkName: "components/index-info" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const SearchBox = () => import('../..\\components\\SearchBox.vue' /* webpackChunkName: "components/search-box" */).then(c => wrapFunctional(c.default || c))
export const StockBar = () => import('../..\\components\\StockBar.vue' /* webpackChunkName: "components/stock-bar" */).then(c => wrapFunctional(c.default || c))
export const StockTable = () => import('../..\\components\\StockTable.vue' /* webpackChunkName: "components/stock-table" */).then(c => wrapFunctional(c.default || c))
export const TheHeader = () => import('../..\\components\\TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c))
export const TheNews = () => import('../..\\components\\TheNews.vue' /* webpackChunkName: "components/the-news" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const SearchBoxListDropdown = () => import('../..\\components\\SearchBox\\ListDropdown.vue' /* webpackChunkName: "components/search-box-list-dropdown" */).then(c => wrapFunctional(c.default || c))
export const SearchBoxMagnifyGlass = () => import('../..\\components\\SearchBox\\MagnifyGlass.vue' /* webpackChunkName: "components/search-box-magnify-glass" */).then(c => wrapFunctional(c.default || c))
export const SearchBar = () => import('../..\\components\\SearchBox\\SearchBar.vue' /* webpackChunkName: "components/search-bar" */).then(c => wrapFunctional(c.default || c))
export const SearchBoxSelectResult = () => import('../..\\components\\SearchBox\\SelectResult.vue' /* webpackChunkName: "components/search-box-select-result" */).then(c => wrapFunctional(c.default || c))

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
