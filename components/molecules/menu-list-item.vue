<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">
          {{ item.title }}
        </div>
      </md-card-header-text>
      <md-card-media>
        <img src="https://omegamma.com.au/wp-content/uploads/2017/04/default-image.jpg" alt="">
      </md-card-media>
    </md-card-header>
    <md-card-content> {{ item.content }} </md-card-content>
  </md-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
