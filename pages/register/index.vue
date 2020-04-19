<template>
  <md-card>
    <span v-if="error" class="error">  {{ error }}</span>
    <md-card-header>
      <div class="md-title">
        Register
      </div>
    </md-card-header>
    <md-card-content>
      <div class="md-layout md-gutter">
        <!--Username-->
        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="email">E-mail</label>
            <md-input id="email" v-model="form.email" name="email" autocomplete="given-name" :disabled="sending" />
          </md-field>
        </div>
        <!--/Username-->

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
        <!--/Password-->

        <!--Password Check-->
        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="password">Type password again</label>
            <md-input
              id="password_check"
              v-model="form.passwordCheck"
              type="password"
              name="password_check"
              autocomplete="family-name"
              :disabled="sending"
            />
          </md-field>
        </div>
        <!--/Password Check-->
      </div>
    </md-card-content>
    <md-progress-bar v-if="sending" md-mode="indeterminate" />
    <md-card-actions>
      <md-button class="md-accent" :disabled="sending" @click="register">
        Register
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: null,
        password: null,
        passwordCheck: null
      },
      sending: false,
      error: ''
    }
  },
  methods: {
    /**
    * register user
    */
    register () {
      if (this.form.password === this.form.passwordCheck) {
        this.sending = true
        this.$store.dispatch('registerAccountToFirebase', { email: this.form.email, password: this.form.password }).then(() => {
          this.$router.push({ name: 'index' })
        }).catch((err) => {
          this.error = err
        })
        this.sending = false
      } else { this.error = 'Passwords are not the same' }
    }
  }
}
</script>

<style>

</style>
