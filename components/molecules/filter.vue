<template>
  <div>
    <label>Filter</label>
    <md-field>
      <label>Type the name of the recipe here</label>
      <md-input v-model="filtertext" @change="filterList" />
    </md-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filtertext: ''
    }
  },
  methods: {
    /**
     * filter the list with the filtertext
     * send to parrent(listpage) to filter the list
     */
    filterList (event) {
      this.$emit('filterListTextChanged', this.filtertext)
    }
  }
}
</script>
