<template>
  <div class="select-result" v-if="selectedOptions.length">
    <div v-for="item in selectedOptions" :key="item" class="result__item">
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectResult',
  data() {
    return {
      selectedOptions: [],
    }
  },
  props: {
    selected: Array,
  },
  methods: {
    deleteOption(item) {
      console.log(item)
      this.selectedOptions = this.selectedOptions.filter(
        (data) => data !== item
      )
    },
  },
  watch: {
    selected: {
      immediate: true,
      handler() {
        this.selectedOptions = this.selected
      },
    },
    selectedOptions() {
      this.$emit('deleteOption', this.selectedOptions)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select-result {
  display: relative;
  border: 1px solid #999999;
  margin-top: 8px;
  min-height: 48px;
  width: 480px;
  cursor: pointer;
  align-items: center;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
}
.result__item {
  position: relative;
  max-width: 199px;
  min-height: 32px;
  background-color: #f8f8f8;
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8px 4px 8px 8px;
}
.select-result img {
  width: 11px;
  height: 11px;
  margin: 0px 11px 0px 11px;
}
.result__item p {
  /* line-height: 24px; */
  color: #333333;
  margin: 0px 0px 0px 16px;
}
</style>
