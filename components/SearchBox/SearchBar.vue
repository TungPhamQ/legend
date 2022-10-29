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
import MagnifyGlass from './MagnifyGlass.vue'
export default {
  name: 'SearchBar',
  components: {
    MagnifyGlass,
  },
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
.search-bar {
  border: 1px solid #999;
  border-radius: 30px;
  width: 250px;
  height: 30px;
  padding-left: 10px;
  display: flex;
  align-items: center;
}
.search-input {
  padding: 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-left: 15px;
}
.search-input:focus {
  outline: none;
}
</style>
