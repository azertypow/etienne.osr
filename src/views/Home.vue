<template>
  <div class="home">
    <router-link to="/about" class="home__next"></router-link>
    <img class="e-img-bg" alt="" src="../assets/plan/01_INTERFACE.png">
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
  position: fixed;
  top: 50%;
  left: 50%;
  display: block;
  //background: blue;
  width: 200px;
  height: 200px;
  z-index: 100;
  transform: translate(-50%, -50%);
}
</style>
