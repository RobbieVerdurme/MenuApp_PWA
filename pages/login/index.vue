<template>
  <form>
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">
          Login
        </div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <!--Username-->
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="email">First Name</label>
              <md-input id="email" v-model="form.email" name="email" autocomplete="given-name" :disabled="sending" />
            </md-field>
          </div>

          <!--Password-->
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="password">Password</label>
              <md-input
                id="password"
                v-model="form.password"
                type="password"
                name="password"
                autocomplete="family-name"
                :disabled="sending"
              />
            </md-field>
          </div>
        </div>
      </md-card-content>
      <md-progress-bar v-if="sending" md-mode="indeterminate" />
      <md-card-actions>
        <md-button class="md-primary" :disabled="sending" @click="login">
          Login
        </md-button>
      </md-card-actions>
    </md-card>
  </form>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: null,
      password: null
    },
    sending: false
  }),
  methods: {
    login () {
      this.sending = true
      try {
        this.$store.dispatch('user/signIn', { email: this.form.email, password: this.form.password })
        this.$router.push({ name: 'index' })
      } catch (e) {
        this.sending = false
        console.error(e)
      }
    }
  }
}
</script>
