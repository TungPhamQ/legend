<template>
  <div class="index-info w-1/3">
    <div class="title">Thị trường</div>

    <div class="chart" style="color: red">
      <div>{{ selectedIndex + 'chart' }}</div>
      <TheChart :chartData="chartData" />
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
import TheChart from './TheChart.vue'
export default {
  name: 'IndexInfo',
  components: {
    TheChart,
  },
  data() {
    return {
      isSelected: false,
      selectedIndex: 'vn30',

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
        list: {
          vn30: {
            id: 1,
            code: 'vn30',
            name: 'Chỉ số VN 30',
            chartData: {
              series: [
                {
                  data: [1, 2, 3],
                },
              ],
            },
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          sp500: {
            id: 2,
            code: 'sp500',
            name: 'Chỉ số VN 30',
            chartData: {
              series: [
                {
                  data: [12, 2, 3],
                },
              ],
            },
            price: 1234,
            change: '-2.6%',
            color: 'red',
          },
          downjohn: {
            id: 3,
            code: 'downjohn',
            name: 'Chỉ số VN 30',
            chartData: {
              series: [
                {
                  data: [1, 2, 6],
                },
              ],
            },
            price: 1234,
            change: '-2.6%',
            color: 'red',
          },
          hk: {
            id: 4,
            code: 'hk',
            name: 'Chỉ số VN 30',
            chartData: {
              series: [
                {
                  data: [1, 2, 61],
                },
              ],
            },
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          jp: {
            id: 5,
            code: 'jp',
            name: 'Chỉ số VN 30',
            chartData: {
              series: [
                {
                  data: [1, -1, 3],
                },
              ],
            },
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          vn301: {
            id: 6,
            code: 'vn301',
            name: 'Chỉ số VN 30',
            chartData: {
              series: [
                {
                  data: [1, 2, 3],
                },
              ],
            },
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          vn302: {
            id: 7,
            code: 'vn302',
            name: 'Chỉ số VN 302',
            chartData: {
              series: [
                {
                  data: [1, 2, 31],
                },
              ],
            },
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          vn303: {
            id: 8,
            code: 'vn303',
            name: 'Chỉ số VN 30',
            chartData: {
              series: [
                {
                  data: [1, 21, 3],
                },
              ],
            },
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
          vn304: {
            id: 9,
            code: 'vn304',
            name: 'Chỉ số VN 30',
            chartData: {
              series: [
                {
                  data: [1, 2, 3],
                },
              ],
            },
            price: 1234,
            change: '+2.6%',
            color: 'green',
          },
        },
      },
    }
  },
  computed: {
    chartData() {
      return this.indexData?.list[`${this.selectedIndex}`]?.chartData
    },
  },
  methods: {
    selectIndex(index) {
      this.selectedIndex = index
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
