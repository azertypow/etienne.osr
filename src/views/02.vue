<template>
  <section class="v-02">
    <router-link to="/B03" class="home__next next__member"></router-link>
    <router-link to="/A04" class="home__next"></router-link>
    <router-link to="/" class="home__next go-to-home"></router-link>
    <img class="e-img-bg" alt="" src="../assets/plan/02_Who_are_you@2x.png">
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

export default defineComponent({

  name: '02',

});
</script>

<style scoped lang="scss">
.home__next {
  top: 865px;
  left: 50%;
  width: 690px;
  height: 110px;
  transform: translate(-50%,-50%);
}

.home__next.next__member {
  top: 735px;
  left: 50%;
  width: 690px;
  height: 110px;
  transform: translate(-50%,-50%);
}
</style>
