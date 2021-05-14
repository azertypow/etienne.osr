<template>
  <section class="v-about">
    <router-link to="/" class="home__next"></router-link>
    <img class="e-img-bg" alt="" src="../assets/plan/02_Who_are_you@2x.png">
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

export default defineComponent({

  name: 'About',

});
</script>

<style scoped lang="scss">
.home__next {
  position: fixed;
  bottom: 0;
  left: 0;
  display: block;
  background: blue;
  width: 200px;
  height: 200px;
  z-index: 100;
}
</style>
