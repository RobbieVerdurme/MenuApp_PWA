<template>
  <md-list>
    <md-list-item>
      <md-card>
        <md-card-header>
          <div class="md-title">
            Profile {{ user.displayName }}
          </div>
          <md-card-header>
            <md-card-content>
              <table>
                <tr>
                  <td>Email : </td>
                  <td>{{ user.email }}</td>
                </tr>
              </table>
            </md-card-content>
            <md-progress-bar v-if="sending" md-mode="indeterminate" />
            <md-card-actions>
              <md-button class="md-accent" :disabled="sending" @click="logout">
                Logout
              </md-button>
            </md-card-actions>
          </md-card-header>
        </md-card-header>
      </md-card>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  middleware: 'authenticated',
  data () {
    return {
      user: this.$fireAuth.currentUser,
      sending: false
    }
  },
  methods: {
    logout () {
      this.sending = true
      this.$store.dispatch('user/signOut')
        .then(() => {
          this.sending = false
          this.$router.push({ name: 'login' })
        }).catch((err) => {
          alert(err)
        })
    }
  }
}
</script>
