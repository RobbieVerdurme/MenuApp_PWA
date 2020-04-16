<template>
  <md-card>
    <nuxt-link :to="{name: 'menu-id-info', params: {id: item.key} }" class="contentwith">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            {{ item.name }}
          </div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>{{ item.discritpion }}</md-card-content>
    </nuxt-link>
    <md-card-actions v-if="this.$store.getters['user/getLogin'] && this.$fireAuth.currentUser.email === item.createrMenu">
      <md-button class="md-accent" @click="editMenu">
        Edit
      </md-button>
    </md-card-actions>
    <md-card-actions v-if="this.$store.getters['user/getLogin'] && this.$fireAuth.currentUser.email === item.createrMenu">
      <md-button class="md-accent" @click="deleteMenu">
        Delete
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    /**
     * delete the menu from firebase
     */
    deleteMenu () {
      this.$store.dispatch('menus/deleteMenuFromFirebase', this.item).catch((err) => {
        alert(err)
      })
    },
    /**
     * edit the menu
     */
    editMenu () {
      this.$store.commit('menus/setSelectedMenu', this.item)
      this.$router.push({ name: 'menu-register-info' })
    }
  }
}
</script>
<style scoped>
.contentwith {
  width: 100%;
}
</style>
