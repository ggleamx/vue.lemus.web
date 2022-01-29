<template>
  <div class="carousel-container">
    <div class="carousel-content">
      <!----------------------------------------------------------------------->
      <carousel-slide
        v-for="(slide, index) in slides"
        :key="slide"
        :index="index"
        :visibleSlide="visibleSlide"
        ><!----------------------------------------------------------------------->
        <img :src="slide" />
        <!----------------------------------------------------------------------->
        <div class="carousel-content-buttons">
          <button @click="prev" class="prev">
            <svg
              width="768"
              height="768"
              viewBox="0 0 768 768"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fff"
                d="M579 131.5L510 64L190.5 383.5L510 703L579 635.5L325.5 383.5L579 131.5Z"
              />
            </svg>
          </button>
          <button @click="next" class="next">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="768"
              height="768"
              viewBox="0 0 768 768"
            >
              <title></title>
              <g id="icomoon-ignore"></g>
              <path
                fill="#fff"
                d="M187.5 132l69-67.5 319.5 319.5-319.5 319.5-69-67.5 253.5-252z"
              ></path>
            </svg>
          </button>
        </div>
        <!----------------------------------------------------------------------->
      </carousel-slide>
      <!----------------------------------------------------------------------->
    </div>
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
.carousel-slide {
  /* border: 1px blue solid; */
}

.carousel-container {
  background: #ebebeb;
  width: 100%;
  padding-bottom: 60px;
}

.carousel-content {
  position: relative;
  height: auto;
  overflow: hidden;
  margin-top: 60px;
  /* border: 2px solid orange; */
}

.carousel-content img {
  width: 100%;
}

.carousel-content-buttons {
  width: 436px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  /* border: 1px solid yellow; */
}

button {
  width: 80px;
  height: 60px;
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #27231d;
  color: white;
  margin: 0px;
  transition: all 500ms ease 0ms;
  border: none;
  /* border: 1px solid red; */
}

button:hover {
  transition: all 500ms ease 0ms;
  cursor: pointer;
  background-color: #000;
}

.next {
  right: 0;
}

.prev {
  left: 0;
  margin-right: 1px;
}

.carousel-content-buttons svg {
  width: 30px;
  height: 30px;
}

@media screen and (min-width: 1640px) {
  .carousel-content-buttons {
    width: 808px;
  }
}
</style>
