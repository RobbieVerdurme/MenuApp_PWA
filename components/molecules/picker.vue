<template>
  <div class="center">
    <!--Selected item-->
    <nuxt-link v-if="selectedMenu.key" :to="{name: 'menu-id-info', params: {id: selectedMenu.key}}">
      <span class="md-display-1">{{ selectedMenu.name }}</span>
    </nuxt-link>
    <span v-else class="md-display-1">{{ selectedMenu.name }}</span>
    <!--generate button-->
    <md-button class=" md-fab md-raised md-primary" @click="generateRandomMenuitem">
      <md-icon>cached</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedMenu: { name: 'Click on the button to generate a random menu' }
    }
  },
  methods: {
    /**
     * generate a random menu item
     */
    generateRandomMenuitem () {
      const menulistLength = this.$store.getters.getMenuListLength
      if (!menulistLength) {
        this.selectedMenu = { title: 'The menulist is empty' }
      } else {
        const randomnumber = Math.floor(Math.random() * menulistLength)
        this.selectedMenu = this.$store.getters.getMenuitem(randomnumber)
      }
    }
  }
}
</script>

<style scoped>
.center span {
    text-align: center;
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}

.center button {
    margin: 0;
    position: absolute;
    top: 70%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}
</style>
