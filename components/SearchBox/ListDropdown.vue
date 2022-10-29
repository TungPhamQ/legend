<template>
  <div class="dropdown">
    <div v-for="stock in filteredList" :key="stock.code" class="stock-wrap">
      <nuxt-link :to="`/${stock.code}`">
        <span class="code">{{ stock.code }}</span>
        <span class="name">{{ stock.name }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: { listAPI: Array, search: String },
  computed: {
    filteredList() {
      // TODO: need to add debounce later
      return this.listAPI.filter((item) => {
        const itemArray = Object.values(item)
        const itemString = itemArray.join()
        return itemString
          .toLowerCase()
          .trim()
          .includes(this.search.toLowerCase().trim())
      })
    },
  },
}
</script>

<style scoped>
.dropdown {
  background: #fff;
  width: 300px;
  height: auto;
  padding: 5px 0;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.stock-wrap {
  display: flex;
  cursor: pointer;
  padding: 10px;
}
.stock-wrap:hover {
  background: rgba(0, 0, 0, 0.1);
}
.code {
  font-weight: 500;
  line-height: 1.57143;
  font-size: 0.875rem;
  width: 40px;
  margin-right: 10px;
}
.name {
  line-height: 1.57143;
  font-size: 0.875rem;
  font-weight: 400;
}
</style>
