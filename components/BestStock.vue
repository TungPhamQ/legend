<template>
  <div class="stock-table">
    <div class="title">Cổ phiếu đáng chú ý</div>

    <table>
      <thead class="header">
        <tr>
          <th>Mã</th>
          <th>Chart</th>
          <th>SMG</th>
          <th>Giá</th>
          <th>%D</th>
          <th>%W</th>
          <th>%M</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in bestStock.list" :key="stock.code">
          <td>{{ stock.code }}</td>
          <td>mini chart</td>
          <td class="smg-wrapper">
            <div class="smg">
              {{ stock.smg }}
            </div>
          </td>
          <td>{{ stock.price }}</td>
          <td :style="{ color: stock.dayChange.color }">
            {{ stock.dayChange.number }}
          </td>
          <td :style="{ color: stock.weekChange.color }">
            {{ stock.weekChange.number }}
          </td>
          <td :style="{ color: stock.monthChange.color }">
            {{ stock.monthChange.number }}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="title">Ngành đáng chú ý</div>

    <table>
      <thead class="header">
        <tr>
          <th>Mã</th>
          <th>Chart</th>
          <th>SMG</th>
          <th>Giá</th>
          <th>%D</th>
          <th>%W</th>
          <th>%M</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in bestStock.list" :key="stock.code">
          <td>{{ stock.code }}</td>
          <td>mini chart</td>
          <td class="smg-wrapper">
            <div class="smg">
              {{ stock.smg }}
            </div>
          </td>
          <td>{{ stock.price }}</td>
          <td :style="{ color: stock.dayChange.color }">
            {{ stock.dayChange.number }}
          </td>
          <td :style="{ color: stock.weekChange.color }">
            {{ stock.weekChange.number }}
          </td>
          <td :style="{ color: stock.monthChange.color }">
            {{ stock.monthChange.number }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BestStock',
  data() {
    return {
      bestStock: {
        list: [
          {
            code: 'VGI',
            chart: [],
            smg: '99',
            price: '33,336',
            dayChange: {
              number: '3%',
              color: 'red',
            },
            weekChange: {
              number: '3%',
              color: 'green',
            },
            monthChange: {
              number: '3%',
              color: 'green',
            },
          },
          {
            code: 'VGI2',
            chart: [],
            smg: '99',
            price: '33,336',
            dayChange: {
              number: '3%',
              color: 'red',
            },
            weekChange: {
              number: '3%',
              color: 'green',
            },
            monthChange: {
              number: '3%',
              color: 'green',
            },
          },
          {
            code: 'VGI3',
            chart: [],
            smg: '99',
            price: '33,336',
            dayChange: {
              number: '3%',
              color: 'red',
            },
            weekChange: {
              number: '3%',
              color: 'green',
            },
            monthChange: {
              number: '3%',
              color: 'green',
            },
          },
          {
            code: 'VGI4',
            chart: [],
            smg: '99',
            price: '33,336',
            dayChange: {
              number: '3%',
              color: 'red',
            },
            weekChange: {
              number: '3%',
              color: 'green',
            },
            monthChange: {
              number: '3%',
              color: 'green',
            },
          },
        ],
      },
    }
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
  border-bottom: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

th {
  border-bottom: 2px solid #dddddd;
  background: #1e3a8a;
  color: #fff;
  padding: 5px 25px;
}
.selected {
  color: #fff;
  background: #60a5fa;
}
.btn-tab {
  border: 1px solid #6b7280;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
}
.header {
  width: 100%;
}
.smg-wrapper {
  display: flex;
  justify-content: center;
}
.smg {
  color: green;
  border: 3px solid green;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
}
table {
  margin-bottom: 20px;
  z-index: 1;
}
</style>
