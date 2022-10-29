<template>
  <div>
    <!-- <StockBar /> -->
    <div class="home">
      <TheNews />
      <div>
        <StockTable class="stock-table" />
        <BestStock />
      </div>
      <IndexInfo />
    </div>
  </div>
</template>

<script>
import TheNews from '../components/TheNews.vue'
import StockTable from '../components/StockTable.vue'
import IndexInfo from '../components/IndexInfo.vue'
import StockBar from '../components/StockBar.vue'
import BestStock from '../components/BestStock.vue'
export default {
  name: 'IndexPage',
  components: { TheNews, StockTable, IndexInfo, StockBar, BestStock },
}
</script>
<style scoped>
.home {
  display: flex;
  gap: 10px;
}
.stock-table {
  margin-bottom: 10px;
}
</style>
