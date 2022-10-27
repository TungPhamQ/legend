<template>
  <div class="search-bar">
    <MagnifyGlass />
    <input
      type="text"
      v-model="search"
      placeholder="Tìm kiếm: "
      class="search-input"
    />
  </div>
</template>

<script>
import MagnifyGlass from '../SearchBox/MagnifyGlass.vue'

export default {
  name: 'SearchBar',
  component: { MagnifyGlass },
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search() {
      this.$emit('search', this.search)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-input {
  padding: 0px;
  width: 100%;
  height: 30px;
  border: 1px solid #999;
  border-radius: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-left: 10px;
  margin: 5px 0px;
}
.search-input:focus {
  border: 1px solid #89d4ff;
  /* box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32); */
  /* border-radius: 4px; */
  outline: none;
}
</style>
