<template>
  <div class="border-2 rounded w-1/3 border-gray-500">
    Stock table
    <div class="flex place-content-between btn">
      <div class="flex option">
        <div class="btn-tab selected">Tăng giá (%)</div>
        <div class="btn-tab">Giảm giá (%)</div>
        <div class="btn-tab">Top mua</div>
        <div class="btn-tab">Top bán</div>
      </div>
      <div class="flex broker">
        <div class="btn-tab selected">HSX</div>
        <div class="btn-tab">HNX</div>
        <div class="btn-tab">UPCOM</div>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Mã</th>
          <th>Tên</th>
          <th>Giá</th>
          <th>+/-(%)</th>
          <th>Tổng KL</th>
          <th>Giá trị mua/bán ròng(triệu USD)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>VGI</td>
          <td>Công ty Viettel</td>
          <td>125</td>
          <td>+2.05%</td>
          <td>150000</td>
          <td>37.289</td>
        </tr>
        <tr>
          <td>VGI</td>
          <td>Công ty Viettel</td>
          <td>125</td>
          <td>+2.05%</td>
          <td>150000</td>
          <td>37.289</td>
        </tr>
        <tr>
          <td>VGI</td>
          <td>Công ty Viettel</td>
          <td>125</td>
          <td>+2.05%</td>
          <td>150000</td>
          <td>37.289</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'StockTable',
  data() {
    return {}
  },
}
</script>
<style scoped>
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
th {
  background: #1e3a8a;
  color: #fff;
}
.selected {
  color: #fff;
  background: #60a5fa;
}
.btn-tab {
  border: 1px solid #6b7280;
  border-radius: 5px 5px 0 0;
}
</style>
