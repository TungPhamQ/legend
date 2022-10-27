<template>
  <div class="stock-bar">
    <ul class="flex gap-4">
      <li
        v-for="stock in stockList"
        :key="stock.name"
        :style="{ color: stock.color }"
      >
        <span>{{ stock.name }}</span
        ><span>{{ stock.change }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StockBar',
  components: {},
  data() {
    return {
      stockList: [
        { name: 'VIC', change: '+2.5%', color: 'green' },
        { name: 'VIC', change: '-2.5%', color: 'red' },
        { name: 'VIC', change: '+2.5%', color: 'green' },
        { name: 'VIC', change: '-2.5%', color: 'red' },
        { name: 'VIC', change: '+2.5%', color: 'green' },
      ],
    }
  },
}
</script>
<style scoped>
.stock-bar {
  background: #cccccceb;
  padding: 5px;
  height: auto;
  width: 100%;
}
</style>
