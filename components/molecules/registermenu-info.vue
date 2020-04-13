<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <!--Menu title-->
        <md-field>
          <label>Type menu title here</label>
          <md-input v-model="title" @change="setMenuTitle" />
        </md-field>
        <!--/Menu title-->

        <!--Menu description-->
        <md-field>
          <label>Type menu description + number of persons here</label>
          <md-input v-model="description" @change="setMenuDescription" />
        </md-field>
        <!--/Menu description-->
      </md-card-header-text>
    </md-card-header>
  </md-card>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data () {
    return {
      title: this.menu.name,
      description: this.menu.discritpion
    }
  },
  methods: {
    /**
     * set menu title
     */
    setMenuTitle () {
      this.$emit('setMenuTitle', this.title)
    },

    /**
     * set menu description
     */
    setMenuDescription () {
      this.$emit('setMenuDescription', this.description)
    }
  }
}
</script>
