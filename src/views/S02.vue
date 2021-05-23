<template>
  <section class="v-A07">
    <router-link to="/" class="home__next"></router-link>
    <img class="e-img-bg" alt="" src="../assets/plan/SCENARIO2@2x.png">
    <img class="e-img-bg QR" alt="" src="../assets/plan/QR1.png">
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

export default defineComponent({

  name: 'S02',

});
</script>

<style scoped lang="scss">
.home__next {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.QR {
  width: 50%;
  left: 50%;
  transform: translate(-50%, 0);
}

</style>
