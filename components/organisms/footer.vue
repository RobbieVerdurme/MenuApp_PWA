<template>
  <div class="phone-viewport">
    <md-bottom-bar md-type="shift" md-sync-route>
      <nuxt-link :to="{name: 'index'}">
        <md-bottom-bar-item id="bottom-bar-item-home" md-label="Home" md-icon="home" />
      </nuxt-link>
      <nuxt-link :to="{name:'list'}">
        <md-bottom-bar-item id="bottom-bar-item-list" md-label="List" md-icon="list" />
      </nuxt-link>
    </md-bottom-bar>
  </div>
</template>

<style scoped>
.phone-viewport {
  width: 100%;
  height: 200px;
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  position: absolute;
  bottom: 0px;
}
</style>
