<template>
  <!----------------------------------------------------------------------->
  <div v-if="onPropertyCard" @mouseover="pictureShadowOn" @mouseleave="pictureShadowOff">
    <!----------------------------------------------------------------------->
    <div class="homesearch-carousel-content">
      <!----------------------------------------------------------------------->
      <carousel-slides v-for="(slide, index) in carouselSlides.imgs.galeria" :key="slide" :index="index"
        :visibleSlide="visibleSlide" class="card-slider">
        <!------------------------------------------------>
        <router-link :to="{
          name: 'single-property',
          params: {
            propertyId: property.numPropiedad,
            neighborhood: property.zona,
          },
        }">
          <img v-if="onPropertyCard" :src="slide.url" />
        </router-link>
        <!------------------------------------------------>
        <div class="homesearch-carousel-content-buttons">
          <!------------------------------------------------>
          <button @click="prev" class="homesearch-prev" :class="{
            pictureShadow: pictureShadow,
          }">
            <svg width="768" height="768" viewBox="0 0 768 768" fill="none">
              <path fill="#fff" d="M579 131.5L510 64L190.5 383.5L510 703L579 635.5L325.5 383.5L579 131.5Z" />
            </svg>
          </button>
          <!------------------------------------------------>
          <button @click="next" class="homesearch-next" :class="{
            pictureShadow: pictureShadow,
          }">
            <svg width="768" height="768" viewBox="0 0 768 768">
              <path fill="#fff" d="M187.5 132l69-67.5 319.5 319.5-319.5 319.5-69-67.5 253.5-252z"></path>
            </svg>
          </button>
          <!------------------------------------------------>
        </div>
      </carousel-slides>
      <!----------------------------------------------------------------------->
    </div>
    <!----------------------------------------------------------------------->
  </div>
  <!----------------------------------------------------------------------->
  <div v-if="!onPropertyCard" class="carousel-container">
    <!----------------------------------------------------------------------->
    <div class="carousel-content">
      <!----------------------------------------------------------------------->
      <carousel-slides v-for="(slide, index) in carouselSlides" :key="slide" :index="index" :visibleSlide="visibleSlide"
        :onHomeView="onHomeView">
        <!------------------------------------------------>
        <img v-if="onHomeView" :src="slide" />
        <div class="carousel-content-buttons">
          <!------------------------------------------------>
          <button @click="prev" class="prev">
            <svg width="768" height="768" viewBox="0 0 768 768" fill="none">
              <path fill="#fff" d="M579 131.5L510 64L190.5 383.5L510 703L579 635.5L325.5 383.5L579 131.5Z" />
            </svg>
          </button>
          <!------------------------------------------------>
          <button @click="next" class="next">
            <svg width="768" height="768" viewBox="0 0 768 768">
              <path fill="#fff" d="M187.5 132l69-67.5 319.5 319.5-319.5 319.5-69-67.5 253.5-252z"></path>
            </svg>
          </button>
        </div>
      </carousel-slides>
      <!----------------------------------------------------------------------->
    </div>
    <!----------------------------------------------------------------------->
  </div>

  <!----------------------------------------------------------------------->
</template>

<script>
import CarouselSlides from "./CarouselSlides.vue";
export default {
  components: {
    CarouselSlides,
  },

  props: {
    carouselSlides: Object,
    onHomeView: Boolean,
    onPropertyCard: Boolean,
    property: Object,
  },

  data() {
    return {
      visibleSlide: 0,
      pictureShadow: false,
    };
  },

  computed: {
    slidesLen() {
      if (this.onPropertyCard) {
        return this.carouselSlides.imgs.galeria.length;
      } else return this.carouselSlides.length;
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
    pictureShadowOn() {
      this.pictureShadow = true;
    },
    pictureShadowOff() {
      this.pictureShadow = false;
    },
  },
};
</script>




<style scoped>
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
}

.carousel-content img {
  width: 100%;
}

.carousel-content-buttons {
  width: 436px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.carousel-content-buttons button {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #27231d;
  color: white;
  margin: 0px;
  transition: all 500ms ease 0ms;
  border: none;
}

.carousel-content-buttons button:hover {
  transition: all 500ms ease 0ms;
  cursor: pointer;
  background-color: #000;
}

.prev {
  left: 0;
  margin-right: 1px;
}

.next {
  right: 0;
}

.carousel-content-buttons svg {
  width: 30px;
  height: 30px;
}

/********************************************/

.homesearch-carousel-content {
  overflow: hidden;
}

.homesearch-carousel-content img {
  object-fit: cover;
  width: 280px;
  height: 210px;
  object-position: 50% 50%;
}

.homesearch-carousel-content-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: -77%;
}

.homesearch-carousel-content-buttons button {
  width: 40px;

  height: 200px;
  border: none;

  z-index: 1;
}

.homesearch-next {
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.4));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.homesearch-prev {
  background: linear-gradient(-90deg, transparent, rgba(0, 0, 0, 0.4));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.pictureShadow {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.homesearch-carousel-content-buttons button:hover {
  transition: all 500ms ease 0ms;
  cursor: pointer;
}

.homesearch-carousel-content-buttons svg {
  width: 18px;
  height: 18px;
}

/********************************************/

@media screen and (min-width: 1640px) {
  .carousel-content-buttons {
    width: 808px;
  }
}
</style>
