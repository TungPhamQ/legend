<template>
  <div class="stock-table">
    <div class="title">Stock table</div>
    <div class="flex place-content-between btn">
      <div class="flex option">
        <div
          v-for="button in buttonList"
          :key="button.id"
          :class="{ selected: selectedBtn == button.id }"
          class="btn-tab"
          @click="selectBtn(button.id)"
        >
          {{ button.name }}
        </div>
      </div>
      <div class="flex broker">
        <div
          v-for="button in buttonListBroker"
          :key="button.id"
          :class="{ selected: selectedBtnBroker == button.id }"
          @click="selectBtnBroker(button.id)"
          class="btn-tab"
        >
          {{ button.name }}
        </div>
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
        <div style="color: red">{{ stockTable }}</div>
        <tr v-for="stock in stockList" :key="stock.code">
          <td>{{ stock.code }}</td>
          <td>{{ stock.companyName }}</td>
          <td>{{ stock.price }}</td>
          <td :style="{ color: stock.change.color }">
            {{ stock.change.number }}
          </td>
          <td>{{ stock.volume }}</td>
          <td>{{ stock.netBuy }}</td>
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
      selectedBtn: 'up',
      selectedBtnBroker: 'hsx',

      buttonList: [
        { name: 'Tăng giá%', id: 'up' },
        { name: 'Giảm giá%', id: 'down' },
        { name: 'Top Mua', id: 'topBuy' },
        { name: 'Top Bán', id: 'topSell' },
      ],
      buttonListBroker: [
        { name: 'HSX', id: 'hsx' },
        { name: 'HNX', id: 'hnx' },
        { name: 'UPCOM', id: 'upcom' },
      ],
      stock: {
        list: [
          {
            code: 'VIC1',
            companyName: 'Vin Group',
            price: '120,120',
            change: {
              number: '2%',
              color: 'green',
            },
            volume: '100.000',
            netBuy: '37.234',
          },
          {
            code: 'VIC2',
            companyName: 'Vin Group',
            price: '120,120',
            change: {
              number: '2%',
              color: 'red',
            },
            volume: '100.000',
            netBuy: '37.234',
          },
          {
            code: 'VIC3',
            companyName: 'Vin Group',
            price: '120,120',
            change: {
              number: '2%',
              color: 'green',
            },
            volume: '100.000',
            netBuy: '37.234',
          },
          {
            code: 'VIC4',
            companyName: 'Vin Group',
            price: '120,120',
            change: {
              number: '2%',
              color: 'red',
            },
            volume: '100.000',
            netBuy: '37.234',
          },
          {
            code: 'VIC5',
            companyName: 'Vin Group',
            price: '120,120',
            change: {
              number: '2%',
              color: 'red',
            },
            volume: '100.000',
            netBuy: '37.234',
          },
        ],
      },
    }
  },
  computed: {
    stockList() {
      return this.stock.list
    },
    stockTable() {
      return `${this.selectedBtn}-${this.selectedBtnBroker}`
    },
  },
  methods: {
    selectBtn(btn) {
      this.selectedBtn = btn
    },
    selectBtnBroker(btn) {
      this.selectedBtnBroker = btn
    },
  },
}
</script>
<style scoped>
.stock-table {
  border-radius: 15px;
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.title {
  color: #333;
  font-size: 20px;
  font-weight: 700;
}
td,
th {
  border-bottom: 0.5px solid #dddddd;
  text-align: left;
  padding: 8px;
  text-align: center;
}
th {
  border-bottom: 2px solid #dddddd;
  /* background: #1e3a8a; */
  color: #333;
}

.selected {
  color: #fff;
  background: #3961f8;
  font-weight: 700;
}
.btn-tab {
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
  padding: 3px 10px;
}
</style>
