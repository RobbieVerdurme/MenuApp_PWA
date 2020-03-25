<template>
  <div class="center">
    <!--Selected item-->
    <nuxt-link :to="{name: 'menu-id-info', params: {id: selectedMenu.id}}">
      <span class="md-display-1">{{ selectedMenu.title }}</span>
    </nuxt-link>
    <!--generate button-->
    <md-button class="md-raised md-primary" @click="generateRandomMenuitem">
      {{ generateMenuitem }}
    </md-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedMenu: { title: 'Click on the button to generate a random menu' },
      generateMenuitem: 'Generate menu'
    }
  },
  methods: {
    generateRandomMenuitem () {
      const menulistLength = this.$store.getters['menus/getMenuListLength']
      if (!menulistLength) {
        this.selectedMenu = { title: 'The menulist is empty' }
      } else {
        const randomnumber = Math.floor(Math.random() * menulistLength) + 1
        this.selectedMenu = this.$store.getters['menus/getMenuitem'](randomnumber)
      }
    }
  }
}
</script>

<style scoped>
.center {
  height: 10em;
}
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
