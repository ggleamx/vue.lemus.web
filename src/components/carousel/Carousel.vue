<template>
  <div class="carousel-content">
    <carousel-slide
      v-for="(slide, index) in slides"
      :key="slide"
      :index="index"
      :visibleSlide="visibleSlide"
      ><img :src="slide"
    /></carousel-slide>

    <button @click="prev" class="prev">Prev</button>
    <button @click="next" class="next">Next</button>
  </div>
</template>

<script>
import CarouselSlide from "./CarouselSlide.vue";
export default {
  data() {
    return {
      slides: [
        require("../../assets/images/carousel-picture-1.webp"),
        require("../../assets/images/carousel-picture-2.webp"),
        require("../../assets/images/carousel-picture-3.webp"),
        require("../../assets/images/carousel-picture-4.webp"),
      ],

      visibleSlide: 0,
    };
  },
  components: {
    CarouselSlide,
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    },
  },
  methods: {
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
    },
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
  },
};
</script>




<style scoped>
.carousel-content {
  position: relative;
  width: 1000px;
  height: auto;
  overflow: hidden;
  margin-top: 60px;
}

button {
  width: 60px;
  height: 50px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: calc(50% - 20px);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  margin: 5px;
  padding: 5px;
  border: none;
}

button:hover {
  cursor: pointer;
}

.next {
  right: 0;
}
.prev {
  left: 0;
}
</style>
