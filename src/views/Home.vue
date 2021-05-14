<template>
  <div class="home">
    <router-link to="/02" class="home__next"></router-link>
    <img class="e-img-bg" alt="" src="../assets/plan/01_INTERFACE@2x.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.home__next {
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  transform: translate(-50%, -50%);
}
</style>
