<template>
  <section class="v-A05">

    <questions
        class="v-O5-q-1"
    ></questions>
    <questions
        class="v-O5-q-2"
    ></questions>
    <questions
        class="v-O5-q-3"
    ></questions>
    <questions
        class="v-O5-q-4"
    ></questions>
    <questions
        class="v-O5-q-5"
    ></questions>
    <questions
        class="v-O5-q-6"
    ></questions>

    <div class="cache"></div>

    <router-link to="/A06" class="home__next"></router-link>
    <router-link to="/" class="home__next go-to-home"></router-link>
    <img class="e-img-bg" alt="" src="../assets/plan/A05_Questions_P.2@2x.png">
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import Questions from "@/components/Questions.vue"

export default defineComponent({

  name: 'A05',
  components: {Questions},
})
;
</script>

<style scoped lang="scss">
.home__next {
  top: 1190px;
  left: auto;
  right: 115px;
  width: 220px;
  height: 100px;
  transform: translate(0%, -50%);
  //background: white;
  //opacity: 1;
}

.cache {
  background: white;
  //background: red;
  position: fixed;
  right: 0;
  top: 0;
  height: 1050px;
  width: 410px;
  z-index: 5;
}

.v-O5-q-1 {
  top: 64px;
  left: 624px;
}

.v-O5-q-2 {
  top: 228px;
  left: 624px;
}

.v-O5-q-3 {
  top: 392px;
  left: 624px;
}

.v-O5-q-4 {
  top: 556px;
  left: 624px;
}

.v-O5-q-5 {
  top: 720px;
  left: 624px;
}

.v-O5-q-6 {
  top: 884px;
  left: 624px;
}

</style>
