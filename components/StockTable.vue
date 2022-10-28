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
          HSX
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
        <tr v-for="stock in stock.list" :key="stock.code">
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
      selectedBtn: 1,
      selectedBtnBroker: 1,
      buttonList: [
        { name: 'Tăng giá%', id: 1 },
        { name: 'Giảm giá%', id: 2 },
        { name: 'Top Mua', id: 3 },
        { name: 'Top Bán', id: 4 },
      ],
      buttonListBroker: [
        { name: 'HSX', id: 1 },
        { name: 'HNX', id: 2 },
        { name: 'UPCOM', id: 3 },
      ],
      stock: {
        list: [
          {
            code: 'VIC',
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
            code: 'VIC',
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
            code: 'VIC',
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
            code: 'VIC',
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
            code: 'VIC',
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
