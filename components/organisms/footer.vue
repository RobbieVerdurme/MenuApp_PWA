<template>
  <div class="phone-viewport">
    <md-bottom-bar md-type="shift" class="bottombar">
      <md-bottom-bar-item id="bottom-bar-item-home" md-label="Home" md-icon="home" class="withitem" />
      <md-bottom-bar-item id="bottom-bar-item-pages" md-label="List" md-icon="list" class="withitem" />
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

.bottombar {
  background-color: orange;
}

.withitem {
  width: 50%;
}

</style>
