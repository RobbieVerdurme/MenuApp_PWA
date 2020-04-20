<template>
  <md-card>
    <nuxt-link :to="{name: 'menu-id-info', params: {id: item.key} }">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            {{ item.name }}
          </div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>{{ item.description }}</md-card-content>
    </nuxt-link>
    <md-card-actions v-if="this.$store.getters.getLogin && this.$fireAuth.currentUser.email === item.createrMenu" class="center">
      <md-button class="md-accent" @click="deleteMenu">
        Delete
      </md-button>
      <md-button class="md-accent" @click="editMenu">
        Edit
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
      this.$store.dispatch('deleteMenuFromFirebase', this.item).catch((err) => {
        alert(err)
      })
    },
    /**
     * edit the menu
     */
    editMenu () {
      this.$store.commit('setSelectedMenu', this.item)
      this.$router.push({ name: 'menu-register-info' })
    }
  }
}
</script>
<style scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>
