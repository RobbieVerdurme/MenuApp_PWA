<template>
  <md-list>
    <md-list-item>
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <h1> {{ menu.title }} </h1>
          </md-card-header-text>
        </md-card-header>
        <md-card-content> {{ menu.content }} </md-card-content>
      </md-card>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>
