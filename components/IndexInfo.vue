<template>
  <div class="index-info w-1/3">
    <div class="select-btn">
      <span class="select">1M</span>
      <span>3M</span>
      <span>5M</span>
      <span>1Y</span>
      <span>3Y</span>
      <span>5Y</span>
    </div>
    <div class="chart"></div>
    <table class="index-table">
      <thead>
        <tr>
          <th v-for="col in indexData.header" :key="col.id">{{ col.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="">
            <div class="index">VN30</div>
            <div class="index-full-name">Chỉ số vn 30</div>
          </td>
          <td class="small-chart">small chart</td>
          <td>
            <div class="price">1230</div>
            <div class="change-percent">+1%</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'StockTable',
  data() {
    return {
      indexData: {
        header: [
          {
            id: 1,
            name: 'Index',
          },
          {
            id: 2,
            name: 'Chart',
          },
          {
            id: 3,
            name: 'Change1',
          },
        ],
      },
    }
  },
}
</script>
<style scoped>
.index-info {
  padding: 3px;
  border: 1px solid gray;
}
.chart {
  width: 100%;
  height: 300px;
  background: gray;
}
.index-table {
  width: 100%;
}
th,
td {
  border: 1px solid #333;
}
th {
  text-align: left;
}
.select-btn {
  display: flex;
}
.select-btn span {
  border: 1px solid #333;
  border-radius: 3px 3px 0 0;
  color: #000;
  padding: 2px 4px;
}
.select-btn .select {
  background: #2563eb;
  color: #fff;
}
</style>
