<template>
  <header class="header flex place-content-between items-end gap-5 h-10">
    <div class="flex items-center">
      <NuxtLogo class="w-10 h-10 logo" />
      <ul class="nav-bar">
        <li>
          <nuxt-link to="/" :class="{ active: theRoute == '/' }"
            >Trang chủ
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/stock-analysis"
            :class="{ active: theRoute == '/stock-analysis' }"
            >Phân tích cổ phiếu
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/tool" :class="{ active: theRoute == '/tool' }"
            >Công cụ
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/wiki" :class="{ active: theRoute == '/wiki' }"
            >HDSD</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div class="flex items-center">
      <SearchBox :listAPI="listAPI" />
      <div class="">
        <button @click="handleLogin" class="m-1">Login</button>
        <button @click="handleRegister" class="m-1 register">Register</button>
      </div>
    </div>
  </header>
</template>

<script>
import NuxtLogo from './NuxtLogo.vue'
import SearchBox from './SearchBox.vue'
export default {
  name: 'The Header',
  components: { NuxtLogo, SearchBox },
  data() {
    return {
      listAPI: [
        { name: 'Vin Group', code: 'VIC' },
        { name: 'Tập đoàn FLC', code: 'FLC' },
        { name: 'Công ty đầu tư địa ốc An Khang', code: 'KAC' },
        { name: 'Công ty Thủy sản MeKong', code: 'AAM' },
      ],
    }
  },
  computed: {
    theRoute() {
      return this.$route.path
    },
  },
  methods: {
    handleLogin() {
      window.alert('Show Login Modal')
    },
    handleRegister() {
      window.alert('Show Register Modal')
    },
  },
}
</script>
<style>
.header {
  height: auto;
  padding: 4px 24px 4px 4px;
  margin-bottom: 10px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  position: sticky;
  top: 0;
  z-index: 999;
}
.logo {
  margin-right: 5px;
}
ul li {
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
}
.nav-bar {
  display: flex;
  justify-content: space-around;
  gap: 15px;
}
.register {
  background: #093aec;
  color: #fff;
  padding: 6px 16px;
  border-radius: 4px;
  font-weight: 700;
}
.active {
  color: #3961f8;
}
</style>
