<template>
  <div>
    <h1>This is Home Page</h1>
    <TheNews />
  </div>
</template>

<script>
import TheNews from '../components/TheNews.vue'
export default {
  name: 'IndexPage',
  components: { TheNews },
}
</script>
