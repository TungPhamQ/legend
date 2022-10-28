<template>
  <div class="index-info w-1/3">
    <div class="title">Thị trường</div>

    <div class="chart" style="color: red">
      <Chart />{{ selectedIndex + 'chart' }}
    </div>
    <table class="index-table">
      <thead>
        <tr>
          <th v-for="col in indexData.header" :key="col.id">{{ col.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="index in indexData.list"
          :key="index.id"
          :class="{ selected: isSelected }"
          @click="selectIndex(index.code)"
        >
          <td>
            <div class="index">{{ index.code }}</div>
            <div class="index-full-name">{{ index.name }}</div>
          </td>
          <td class="small-chart">small chart</td>
          <td>
            <div class="price" :style="{ color: index.color }">
              {{ index.price }}
            </div>
            <div class="change-percent" :style="{ color: index.color }">
              {{ index.change }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Chart from './Chart.vue'
export default {
  name: 'IndexInfo',
  components: {
    Chart,
  },
  data() {
    return {
      isSelected: false,
      selectedIndex: 'VN30',
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
            name: 'Change',
          },
        ],
        list: [
          {
            id: 1,
            code: 'VN30',
            name: 'Chỉ số VN 30',
            chartData: [],
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          {
            id: 2,
            code: 'SP500',
            name: 'Chỉ số VN 30',
            chartData: [],
            price: 1234,
            change: '-2.6%',
            color: 'red',
          },
          {
            id: 3,
            code: 'downjohn',
            name: 'Chỉ số VN 30',
            chartData: [],
            price: 1234,
            change: '-2.6%',
            color: 'red',
          },
          {
            id: 4,
            code: 'HK',
            name: 'Chỉ số VN 30',
            chartData: [],
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          {
            id: 5,
            code: 'JP',
            name: 'Chỉ số VN 30',
            chartData: [],
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          {
            id: 6,
            code: 'VN30',
            name: 'Chỉ số VN 30',
            chartData: [],
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          {
            id: 7,
            code: 'VN30',
            name: 'Chỉ số VN 30',
            chartData: [],
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          {
            id: 8,
            code: 'VN30',
            name: 'Chỉ số VN 30',
            chartData: [],
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          {
            id: 9,
            code: 'VN30',
            name: 'Chỉ số VN 30',
            chartData: [],
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
        ],
      },
    }
  },
  methods: {
    selectIndex(index) {
      this.selectedIndex = index
      console.log(index)
    },
  },
}
</script>
<style scoped>
.index-info {
  border-radius: 15px;
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: fit-content;
}
.title {
  color: #333;
  font-size: 20px;
  font-weight: 700;
}
.chart {
  width: 100%;
  height: 300px;
  /* background: rgba(0, 0, 0, 0.141); */
}
.index-table {
  width: 100%;
}

tbody tr:hover {
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
th,
td {
  border-bottom: 1px solid #333;
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
.selected {
  background: #373a4055;
  /* color: #fff; */
}
.index {
  font-weight: 700;
  font-size: 16px;
  color: #106ba3;
}
.index-full-name {
  font-size: 12px;
  font-weight: 200;
}
</style>
