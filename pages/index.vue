<template>
  <div>
    <h1>This is Home Page</h1>
    <div class="flex gap-px">
      <TheNews />
      <StockTable />
      <IndexInfo />
    </div>
  </div>
</template>

<script>
import TheNews from '../components/TheNews.vue'
import StockTable from '../components/StockTable.vue'
export default {
  name: 'IndexPage',
  components: { TheNews, StockTable },
}
</script>
