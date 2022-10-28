<template>
  <div class="dropdown">
    <div v-for="stock in listAPI" :key="stock.code" class="stock-wrap">
      <nuxt-link :to="`tool/${stock.code}`">
        <span class="code">{{ stock.code }}</span>
        <span class="name">{{ stock.name }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: { listAPI: Array },
}
</script>

<style scoped>
.dropdown {
  background: #fff;
  width: 300px;
  height: auto;
  padding: 5px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.stock-wrap {
  margin: 10px;
  display: flex;
  cursor: pointer;
  padding: 4px 10px;
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
