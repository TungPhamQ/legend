<template>
  <div class="search-box">
    <!-- <MagnifyGlass /> -->
    <!-- <input type="text" class="rounded-3xl" v-model="searchInput" /> -->

    <SearchBar @click.native="toggleList" @search="getSearch" />

    <ListDropdown
      class="list-dropdown"
      :listAPI="listAPI"
      @selectNewOption="updateSelectOption"
      @toggleList="toggleList"
      v-if="isShow"
      :search="search"
    />
  </div>
</template>

<script>
import MagnifyGlass from './SearchBox/MagnifyGlass.vue'
import SearchBar from './SearchBox/SearchBar.vue'
import ListDropdown from './SearchBox/ListDropdown.vue'
export default {
  name: 'SearchBox',
  components: { MagnifyGlass, SearchBar, ListDropdown },
  data() {
    return {
      searchInput: '',
      dataSearch: [
        { code: 'VIC', name: 'Vin Group' },
        { code: 'BAF', name: 'Nông nghiệp BAF Việt Nam' },
        { code: 'BAX', name: 'CTCP Thống Nhất' },
      ],
    }
  },
  methods: {
    updateSelectOption(e) {
      this.selected = e
    },
    toggleList() {
      this.isShow = !this.isShow
      console.log(this.isShow)
    },
    getSearch(e) {
      this.search = e
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
}
.list-dropdown {
  z-index: 100;
}
</style>
