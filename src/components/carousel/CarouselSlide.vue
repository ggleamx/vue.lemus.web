<template>
  <div v-show="visibleSlide === index" class="carousel-slide">
    <slot></slot>
    <div v-show="index === 0" class="carousel-slide">uno</div>
    <div v-show="index === 1" class="carousel-slide">dos</div>
    <div v-show="index === 2" class="carousel-slide">tres</div>
    <div v-show="index === 3" class="carousel-slide">cuatro</div>
  </div>
</template>


<script>
export default {
  props: ["visibleSlide", "index"],
  data() {
    return {};
  },
};
</script>



