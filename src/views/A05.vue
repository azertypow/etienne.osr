<template>
  <section class="v-A05">
    <router-link to="/A06" class="home__next"></router-link>
    <router-link to="/" class="home__next go-to-home"></router-link>
    <img class="e-img-bg" alt="" src="../assets/plan/A05_Questions_P.2@2x.png">
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

export default defineComponent({

  name: 'A05',

})
;
</script>

<style scoped lang="scss">
.home__next {
  top: 1260px;
  left: auto;
  right: 60px;
  width: 220px;
  height: 100px;
  transform: translate(0%, -50%);
  //background: white;
  //opacity: 1;
}
</style>
