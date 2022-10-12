<template>
  <!----------------------------------------------------------------------->
  <div v-if="onPropertyCard" @mouseover="pictureShadowOn" @mouseleave="pictureShadowOff">
    <!----------------------------------------------------------------------->
    <div class="homesearch-carousel-content">
      <!----------------------------------------------------------------------->
      <carousel-slides v-for="(slide, index) in carouselSlides.imgs.portada.slice().reverse()" :key="slide"
        :index="index" :visibleSlide="visibleSlide" class="card-slider">
        <!------------------------------------------------>
        <router-link :to="{
          name: 'single-property',
          params: {
            propertyId: property.numPropiedad,
            neighborhood: property.zona ?? 'Norte',
          },
        }">
          <img :src="slide.url" />
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
  <div v-if="onHomeView" class="carousel-container">
    <!----------------------------------------------------------------------->
    <div class="home-carousel-content">
      <!----------------------------------------------------------------------->
      <carousel-slides v-for="(slide, index) in carouselSlides" :key="slide" :index="index" :visibleSlide="visibleSlide"
        :onHomeView="onHomeView">
        <!------------------------------------------------>
        <div>
          <img :src="slide" />
        </div>
        <!------------------------------------------------>
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
  <div v-if="onPropertyView" @mouseover="propertyButtonsOn" @mouseleave="propertyButtonsOff">
    <!----------------------------------------------------------------------->
    <div class="property-carousel-content">
      <!----------------------------------------------------------------------->
      <carousel-slides v-for="(slide, index) in carouselSlides.slice().reverse()" :key="slide" :index="index"
        :visibleSlide="visibleSlide" :onPropertyView="onPropertyView">
        <!------------------------------------------------>
        <img :src="slide.url" />
        <div class="carousel-gradient-effect"></div>

        <div class="single-property-carousel-buttons">
          <!------------------------------------------------>
          <button @click="prev" class="single-property-prev" :class="{
            singlePropertyCarouselButtons: singlePropertyCarouselButtons,
          }">
            <svg width="768" height="768" viewBox="0 0 768 768" fill="none">
              <path fill="#fff" d="M579 131.5L510 64L190.5 383.5L510 703L579 635.5L325.5 383.5L579 131.5Z" />
            </svg>
          </button>
          <!------------------------------------------------>
          <button @click="next" class="single-property-next" :class="{
            singlePropertyCarouselButtons: singlePropertyCarouselButtons,
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
    onPropertyView: Boolean,
    property: Object,
    activeSlide: Number,
  },



  data() {
    return {
      visibleSlide: 0,
      pictureShadow: false,
      singlePropertyCarouselButtons: false,

    };
  },

  computed: {
    slidesLen() {
      if (this.onPropertyCard) {
        return this.carouselSlides.imgs.portada.length;
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
      this.$emit("selectedSlide", this.visibleSlide);
    },

    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;


      } else {
        this.visibleSlide++;

      }
      this.$emit("selectedSlide", this.visibleSlide);
    },

    thumbNailSelection(activeSlide) {
      this.visibleSlide = this.activeSlide;
    },

    pictureShadowOn() {
      this.pictureShadow = true;
    },
    pictureShadowOff() {
      this.pictureShadow = false;
    },
    propertyButtonsOn() {
      this.singlePropertyCarouselButtons = true;

    },
    propertyButtonsOff() {
      this.singlePropertyCarouselButtons = false;

    },



  },

  watch: {
    activeSlide() {
      this.thumbNailSelection();
      console.log(this.activeSlide);
    },
  }



};
</script>




<style scoped>
.carousel-container {
  background: #ebebeb;
  width: 100%;
  padding-bottom: 60px;
}

.home-carousel-content {
  position: relative;
  height: auto;
  overflow: hidden;
  margin-top: 60px;
}

.home-carousel-content img {
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
  cursor: pointer;
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
.property-carousel-content {
  /* border: 1px solid red; */

}

.carousel-gradient-effect {
  background: radial-gradient(circle farthest-side at 0 150%, rgba(0, 0, 0, .4) 0, transparent 80%);
  width: 100%;
  height: calc(100vh - (210px));
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 60px;
}

.carousel-thumbnails-container {
  display: flex;
  height: 61px;
}



/* .carousel-thumbnails {
  width: calc(100% - 456px);
  height: 61px;
  margin-top: -4px;

  display: flex;
}  */

/* .carousel-thumbnails li::after {
  content: "";
  opacity: .4;
  transition: opacity .3s ease;
  position: absolute;
  pointer-events: none;
  width: 90px;
  height: 61px;
  background: #000;
  margin-left: -90px;
} */


/* .carousel-thumbnails li:hover:after {
  opacity: 0;
} */

/* 
li.thumnailPictureSelected:hover:after {
  opacity: 0;
} */


.property-carousel-content img {
  object-fit: cover;
  width: 100%;
  height: calc(100vh - (210px));
  object-position: 50% 50%;
}

/* .carousel-thumbnails img {
  width: 90px;
  height: 61px;
  cursor: pointer;
} */

.single-property-carousel-buttons {
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
  margin-top: -23.9%;
}

.single-property-carousel-buttons button {
  width: 40px;
  height: 40px;
  border: none;
  z-index: 1;
  cursor: pointer;
}

.single-property-carousel-buttons button:hover {
  transition: all 500ms ease 0ms;
  cursor: pointer;
}


.single-property-carousel-buttons svg {
  width: 28.5px;
  height: 28.5px;
}


.single-property-next {
  background: transparent;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.single-property-prev {
  background: transparent;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.singlePropertyCarouselButtons {
  opacity: 1;
  transition: opacity 0.3s ease;

}

.carousel-thumbnails-buttons {
  width: 456px;
  display: flex;
  justify-content: flex-end;
  margin-top: -4px;
  height: 61px;
  cursor: pointer;

}

.carousel-thumbnails-buttons button {
  background-color: transparent;
  border: none;
  font-family: Georama, Verdana, Helvetica, sans-serif;
  font-size: 13.5px;
  line-height: 17px;
  color: #000;
  letter-spacing: 2px;
  font-weight: 700;
  padding: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.walktrough-button {
  width: 228px;
  background-color: #d7d7d7;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease;
  padding: 0 15px;

}

.walktrough-button svg {
  height: 28px;
  width: 20%;
  margin-right: 30px;
}

.walktrough-button-text {
  width: 80%;
}

.walktrough-button:hover {
  background-color: #b9b3b3;
  ;
  transition: all .3s ease;
}


.vr-button {
  width: 228px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0155cb;
  transition: all .3s ease;
  cursor: pointer;
  padding: 0 15px;
}

.vr-button svg {
  height: 28px;
  width: 22%;
}

.vr-button-text {
  width: 78%;
}

.vr-button:hover {
  transition: all .3s ease;
  background-color: #0144A2;
}

.vr-button button {
  color: #fff;
  margin-left: 14px;
}

/********************************************/

@media screen and (min-width: 1640px) {
  .carousel-content-buttons {
    width: 808px;
  }

  .carousel-gradient-effect {
    background: radial-gradient(circle farthest-side at 0 150%, rgba(0, 0, 0, .65) 0, transparent 60%);
  }
}
</style>
