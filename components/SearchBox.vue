<template>
  <!-- TODO:  ADD CLICK OUTSIDE -->
  <div class="search-box">
    <SearchBar @click.native="toggleList" @search="getSearch" />
    <ListDropdown
      class="list-dropdown"
      :listAPI="listAPI"
      :search="search"
      v-if="isShow"
      @click.native="toggleList"
    />
  </div>
</template>

<script>
import SearchBar from './SearchBox/SearchBar.vue'
import ListDropdown from './SearchBox/ListDropdown.vue'
export default {
  name: 'SearchBox',
  components: { SearchBar, ListDropdown },
  props: { listAPI: Array },
  data() {
    return {
      search: '',
      isShow: false,
    }
  },
  methods: {
    updateSelectOption(e) {
      this.selected = e
    },
    toggleList() {
      this.isShow = !this.isShow
    },
    getSearch(e) {
      this.search = e
    },
  },
  watch: {
    search() {
      if (this.search) this.isShow = true
    },
  },
}
</script>
<style>
/* input:focus {
  outline: none;
} */
.search-box {
  margin-right: 10px;
  position: relative;
}
.list-dropdown {
  z-index: 100;
  position: absolute;
}
</style>
