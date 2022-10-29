import Vue from 'vue'
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import stockInit from 'highcharts/modules/stock'
// your imported custom plugin or in this scenario the 'vue-session' plugin
import VueSession from 'vue-session'
Vue.use(VueSession)

if (typeof Highcharts === 'object') {
  stockInit(Highcharts)
}

Vue.use(HighchartsVue)
