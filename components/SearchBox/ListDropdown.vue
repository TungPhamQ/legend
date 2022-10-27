<template>
  <div class="list-dropdown">
    <div class="list-scroll">
      <div v-for="item in filteredSearchOption" :key="item.code">
        <label class="option container">
          <span class="checkmark"></span>
          {{ item.code }}
          {{ item.name }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListDropdown',
  data() {
    return {
      selectedOptions: [],
    }
  },
  props: {
    listAPI: null,
    selected: Array,
    search: String,
  },
  computed: {
    filteredSearchOption: function () {
      return this.listAPI.filter((item) => {
        const itemArray = Object.values(item)
        const itemString = itemArray.join()
        return itemString
          .toLowerCase()
          .trim()
          .includes(this.search.toLowerCase().trim())
      })
    },
  },
  methods: {
    selectNewOption: function ($event) {
      const index = this.selectedOptions.indexOf($event.target.value)
      if (index == -1) {
        this.selectedOptions.push($event.target.value)
      } else {
        this.selectedOptions.splice(index, 1)
      }
    },
    acceptSelection() {
      this.toggleList()
    },
    cancelSelection() {
      this.selectedOptions = []
      this.$emit('selectNewOption', this.selectedOptions)
      this.toggleList()
    },
    toggleList() {
      this.$emit('toggleList')
    },
  },
  watch: {
    selected: {
      immediate: true,
      handler() {
        this.selectedOptions = this.selected
      },
    },
  },
}
</script>

<!-- Add " scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-dropdown {
  position: relative;
  margin: auto;
  width: 100%;
  height: 304px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(102, 102, 102, 0.2);
}
.list-scroll {
  overflow-y: scroll;
  height: 304px;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #dcdcdc;
  border-radius: 6px;
}
.option {
  display: block;
  line-height: 10px;
  padding: 8px 0px;
}
.option:hover {
  background-color: #e7f1fd;
}
.button {
  position: absolute;
  bottom: 0px;
  background-color: #fff;
  display: block;
  width: 100%;
  padding: 8px 0px 16px 16px;
}
.button__accept {
  /* margin-top: 10px; */
  cursor: pointer;
  background-color: #007bc3;
  color: #fff;
  padding: 4px 19px;
  outline: none;
  border: 0px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  font-weight: 700;
  height: 32px;
  width: 104px;
}
input {
  padding-left: 19px;
}
.button__cancel {
  cursor: pointer;
  border: 0px;
  background-color: #fff;
  color: #007bc3;
  font-weight: 400;
  font-size: 16px;
  width: 82px;
  height: 24px;
}
/* Custom checkbox */
/* The container */
.container {
  display: block;
  position: relative;
  padding: 0px 0px 0px 48px;
  line-height: 40px;
  margin-bottom: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 11px;
  left: 19px;
  height: 18px;
  width: 18px;
  background-color: #eee;
}
/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}
/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #45d1c9;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 4px;
  top: 2px;
  width: 6px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
