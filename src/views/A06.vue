<template>
  <section class="v-A06">
    <router-link to="/A07" class="home__next"></router-link>
    <router-link to="/" class="home__next go-to-home"></router-link>
    <img class="e-img-bg" alt="" src="../assets/plan/A06_Questions_P.3@2x.png">
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

export default defineComponent({

  name: 'A06',

});
</script>

<style scoped lang="scss">
.home__next {
  top: 890px;
  left: auto;
  right: 60px;
  width: 410px;
  height: 100px;
  transform: translate(0%, -50%);
}
</style>
