<template>
  <!--Field for preperation-->
  <md-field>
    <label>Type the preperation of the menu</label>
    <md-textarea v-model="preperation" md-autogrow @change="setMenuPreperation" />
  </md-field>
  <!--/Field for preperation-->
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
      preperation: this.menu.preperation
    }
  },
  methods: {
    /**
     * set menu preperation
     * send to parrent to set preperation
     */
    setMenuPreperation () {
      this.$emit('setMenuPreperation', this.preperation)
    }
  }
}
</script>
