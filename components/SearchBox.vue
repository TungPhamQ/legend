<template>
  <div class="border-white border-2 rounded-3xl bg-white mb-0.5">
    <MagnifyGlass />
    <input type="text" class="rounded-3xl" v-model="searchInput" />
  </div>
</template>

<script>
import MagnifyGlass from './SearchBox/MagnifyGlass.vue'
export default {
  name: 'SearchBox',
  components: { MagnifyGlass },
  data() {
    return {
      searchInput: '',
      dataSearch: [
        { code: 'VIC', name: 'Vin Group' },
        { code: 'BAF', name: 'Nông nghiệp BAF Việt Nam' },
        { code: 'BAX', name: 'CTCP Thống Nhất' },
      ],
    }
  },
}
</script>
<style>
input:focus {
  outline: none;
}
</style>
