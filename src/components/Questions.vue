<template>
  <section class="v-questions">
    <div class="v-question-1" :class="{'is-active': activated  === 1}" @click="buttonClick(1)"></div>
    <div class="v-question-2" :class="{'is-active': activated === 2}" @click="buttonClick(2)"></div>
    <div class="v-question-3" :class="{'is-active': activated === 3}" @click="buttonClick(3)"></div>
    <div class="v-question-4" :class="{'is-active': activated === 4}" @click="buttonClick(4)"></div>
    <div class="v-question-5" :class="{'is-active': activated === 5}" @click="buttonClick(5)"></div>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

export default defineComponent({

  name: 'Questions',

  data() {
    return {
      activated: 0
    }
  },

  methods: {
    buttonClick(num: number) {
      console.log( num )

      this.$emit("clicked")

      this.activated = num
    }
  }
});
</script>

<style scoped lang="scss">

.v-questions {
  position: fixed;
  z-index: 100;
  background: white;
  height: 60px;
  width: 350px;
}

$border-color: #3f0deb;

[class*=v-question-] {
  background: white;
  box-sizing: border-box;
  border: solid 3px $border-color;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
  //opacity: .5;
  //background-color: red;

  &.is-active {
    background-color: $border-color;
    border-color: $border-color;
  }
}

.v-question-1 {
  border-color: lighten($border-color, 45%);
}

$step: 75px;

.v-question-2 {
  left: $step;
  border-color: lighten($border-color, 40%);
}

.v-question-3 {
  left: $step * 2;
  border-color: lighten($border-color, 30%);
}

.v-question-4 {
  left: $step * 3 - 1;
  border-color: lighten($border-color, 20%);
}

.v-question-5 {
  left: $step * 4 - 1;
  border-color: lighten($border-color, 10%);
}

</style>
