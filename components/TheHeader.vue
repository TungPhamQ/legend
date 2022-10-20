<template>
  <header
    class="header flex place-content-between items-end gap-5 bg-gray-800 h-10"
  >
    <NuxtLogo class="w-10 h-10" />
    <ul class="text-white">
      <li>
        <nuxt-link to="/">Trang chủ |</nuxt-link>
        <nuxt-link to="/stock-analysis">Phân tích cổ phiếu |</nuxt-link>
        <nuxt-link to="/tool">Công cụ |</nuxt-link>
        <nuxt-link to="/wiki">HDSD</nuxt-link>
      </li>
    </ul>
    <SearchBox />
    <div class="text-white">
      <button @click="handleLogin" class="m-1">Login</button>
      <button @click="handleRegister" class="m-1">Register</button>
    </div>
  </header>
</template>

<script>
import NuxtLogo from './NuxtLogo.vue'
import SearchBox from './SearchBox.vue'
export default {
  name: 'The Header',
  components: { NuxtLogo, SearchBox },
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
<style></style>
