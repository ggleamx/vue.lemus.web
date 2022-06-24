<template>
  <!----------------------------------------------------------------------->
  <div v-if="onPropertyCard" @mouseover="pictureShadowOn" @mouseleave="pictureShadowOff">
    <!----------------------------------------------------------------------->
    <div class="homesearch-carousel-content">
      <!----------------------------------------------------------------------->
      <carousel-slides v-for="(slide, index) in carouselSlides.imgs.portada" :key="slide" :index="index"
        :visibleSlide="visibleSlide" class="card-slider">
        <!------------------------------------------------>
        <router-link :to="{
          name: 'single-property',
          params: {
            propertyId: property.numPropiedad,
            neighborhood: property.zona,
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
      <carousel-slides v-for="(slide, index) in carouselSlides" :key="slide" :index="index" :visibleSlide="visibleSlide"
        :onPropertyView="onPropertyView">
        <!------------------------------------------------>
        <img :src="slide.url" />
        <div class="carousel-gradient-effect"></div>
        <div class="carousel-thumbnails-container">
          <div class="carousel-thumbnails">
            <li @click="thumbNailSelectionStyle" v-for="(slide, index) in carouselSlides" :class="{
              thumnailPictureSelected: thumbNailPictureActive,
            }">
              <img @click="thumbNailSelection(index)" :src="slide.url" />
            </li>
          </div>
          <div class="carousel-thumbnails-buttons">
            <div class="walktrough-button">
              <button>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                  <title></title>
                  <g id="icomoon-ignore">
                  </g>
                  <path d="M96 64l320 192-320 192z"></path>
                </svg>
                <div class="walktrough-button-text"> VIDEO<br>RECORRIDO</div>
              </button>
            </div>
            <div class="vr-button">


              <button>
                <svg width="639" height="270" viewBox="0 0 639 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M163.247 108.872L170.375 89.432C173.399 90.728 176.585 91.8081 179.933 92.6721C183.281 93.5361 186.791 94.238 190.463 94.778C194.243 95.21 198.131 95.426 202.127 95.426C207.527 95.426 211.901 94.94 215.249 93.968C218.705 92.888 221.243 91.268 222.863 89.108C224.591 86.84 225.455 84.086 225.455 80.846C225.455 76.526 223.565 73.3401 219.785 71.288C216.005 69.236 210.281 68.21 202.613 68.21H185.603V48.77H202.937C207.473 48.77 211.199 48.284 214.115 47.312C217.031 46.34 219.137 44.936 220.433 43.1C221.837 41.264 222.539 39.05 222.539 36.458C222.539 32.57 220.703 29.6 217.031 27.548C213.467 25.388 208.067 24.308 200.831 24.308C196.079 24.308 191.219 24.74 186.251 25.604C181.391 26.36 176.693 27.71 172.157 29.654L165.839 9.40404C169.079 7.67604 172.751 6.16404 176.855 4.86804C181.067 3.57205 185.603 2.60004 190.463 1.95204C195.431 1.30404 200.615 0.980043 206.015 0.980043C215.303 0.980043 223.133 2.16804 229.505 4.54405C235.877 6.92005 240.737 10.322 244.085 14.75C247.433 19.07 249.107 24.362 249.107 30.626C249.107 36.35 247.595 41.426 244.571 45.854C241.547 50.282 237.227 53.684 231.611 56.06C238.523 58.112 243.707 61.46 247.163 66.104C250.727 70.64 252.509 76.148 252.509 82.628C252.509 90.08 250.619 96.398 246.839 101.582C243.167 106.766 237.767 110.762 230.639 113.57C223.511 116.27 214.763 117.62 204.395 117.62C198.779 117.62 193.595 117.296 188.843 116.648C184.091 116.108 179.663 115.19 175.559 113.894C171.563 112.598 167.459 110.924 163.247 108.872Z"
                    fill="white" />
                  <path
                    d="M314.499 117.62C304.131 117.62 295.383 115.676 288.255 111.788C281.235 107.9 275.889 101.906 272.217 93.806C268.545 85.598 266.709 75.23 266.709 62.702C266.709 49.094 268.707 37.754 272.703 28.682C276.807 19.502 282.855 12.59 290.847 7.94604C298.839 3.30204 308.721 0.980043 320.493 0.980043C325.353 0.980043 329.997 1.25004 334.425 1.79004C338.961 2.22204 343.173 2.92404 347.061 3.89604C350.949 4.76005 354.405 5.84004 357.429 7.13604L351.273 28.034C348.033 27.062 344.955 26.252 342.039 25.604C339.231 24.956 336.369 24.47 333.453 24.146C330.537 23.714 327.513 23.498 324.381 23.498C316.605 23.498 310.503 24.794 306.075 27.386C301.647 29.978 298.515 33.974 296.679 39.374C294.843 44.774 293.925 51.524 293.925 59.624C293.925 66.968 294.411 73.07 295.383 77.93C296.463 82.682 297.975 86.462 299.919 89.2701C301.863 92.078 304.185 94.0221 306.885 95.1021C309.585 96.1821 312.609 96.722 315.957 96.722C321.573 96.722 325.947 95.318 329.079 92.51C332.319 89.594 333.939 85.22 333.939 79.388C333.939 75.932 333.129 73.0161 331.509 70.6401C329.997 68.2641 327.783 66.482 324.867 65.294C322.059 63.998 318.657 63.35 314.661 63.35C311.961 63.35 309.261 63.728 306.561 64.484C303.969 65.24 301.377 66.32 298.785 67.724C296.301 69.128 293.871 70.802 291.495 72.746L291.171 53.954C293.871 51.686 296.895 49.796 300.243 48.284C303.699 46.664 307.371 45.476 311.259 44.72C315.255 43.964 319.467 43.586 323.895 43.586C331.671 43.586 338.205 44.936 343.497 47.636C348.897 50.228 352.947 54.17 355.647 59.462C358.455 64.646 359.859 70.91 359.859 78.2541C359.859 91.2141 356.025 101.042 348.357 107.738C340.797 114.326 329.511 117.62 314.499 117.62Z"
                    fill="white" />
                  <path
                    d="M369.684 59.3C369.684 48.068 370.764 38.726 372.924 31.274C375.192 23.714 378.378 17.72 382.482 13.292C386.694 8.86405 391.716 5.73205 397.548 3.89604C403.38 1.95204 409.914 0.980043 417.15 0.980043C424.494 0.980043 431.082 1.95204 436.914 3.89604C442.746 5.84004 447.714 9.08005 451.818 13.616C456.03 18.044 459.216 23.984 461.376 31.436C463.536 38.888 464.616 48.176 464.616 59.3C464.616 70.316 463.482 79.604 461.214 87.164C458.946 94.616 455.706 100.61 451.494 105.146C447.282 109.574 442.26 112.76 436.428 114.704C430.596 116.648 424.17 117.62 417.15 117.62C410.022 117.62 403.542 116.648 397.71 114.704C391.878 112.76 386.856 109.574 382.644 105.146C378.54 100.61 375.354 94.616 373.086 87.164C370.818 79.712 369.684 70.424 369.684 59.3ZM397.062 60.272C397.062 67.9401 397.548 74.2041 398.52 79.064C399.492 83.924 400.842 87.65 402.57 90.2421C404.406 92.8341 406.566 94.6161 409.05 95.5881C411.534 96.5601 414.234 97.0461 417.15 97.0461C419.958 97.0461 422.604 96.5601 425.088 95.5881C427.572 94.6161 429.732 92.8341 431.568 90.2421C433.404 87.65 434.808 83.924 435.78 79.064C436.752 74.2041 437.238 67.9401 437.238 60.272C437.238 51.956 436.698 45.26 435.618 40.184C434.646 35 433.242 31.112 431.406 28.52C429.57 25.82 427.41 23.984 424.926 23.012C422.55 22.04 419.958 21.554 417.15 21.554C414.234 21.554 411.534 22.04 409.05 23.012C406.674 23.984 404.568 25.82 402.732 28.52C400.896 31.112 399.492 35 398.52 40.184C397.548 45.26 397.062 51.956 397.062 60.272Z"
                    fill="white" />
                  <path
                    d="M496.959 51.2C491.667 51.2 487.293 50.066 483.837 47.798C480.381 45.422 477.789 42.29 476.061 38.402C474.333 34.514 473.469 30.302 473.469 25.766C473.469 22.526 473.901 19.394 474.765 16.37C475.629 13.238 476.979 10.484 478.815 8.10805C480.759 5.73205 483.243 3.84204 486.267 2.43804C489.291 0.926044 492.855 0.170044 496.959 0.170044C501.063 0.170044 504.573 0.872045 507.489 2.27605C510.513 3.68005 512.997 5.62405 514.941 8.10805C516.885 10.484 518.289 13.238 519.153 16.37C520.017 19.394 520.449 22.526 520.449 25.766C520.449 30.302 519.585 34.514 517.857 38.402C516.129 42.29 513.537 45.422 510.081 47.798C506.625 50.066 502.251 51.2 496.959 51.2ZM496.959 35.162C499.119 35.162 500.847 34.298 502.143 32.57C503.439 30.734 504.087 28.466 504.087 25.766C504.087 23.174 503.493 21.014 502.305 19.286C501.117 17.558 499.335 16.694 496.959 16.694C494.583 16.694 492.747 17.558 491.451 19.286C490.263 21.014 489.669 23.174 489.669 25.766C489.669 28.466 490.317 30.734 491.613 32.57C492.909 34.298 494.691 35.162 496.959 35.162Z"
                    fill="white" />
                  <path
                    d="M135 74.5125C120.683 77.6117 106.933 81.1251 93.75 85.0528C31.25 103.674 0 125.99 0 152C0 173.281 20.75 192.05 62.25 208.307C103.75 224.563 179.5 235.943 245.5 242.445V269.5L288.5 248.5L331.5 223L245.5 167.5V203.43C198.5 198.701 138 191.163 108 180.818C78 170.473 63 160.867 63 152C63 144.906 73 137.074 93 128.502C103.888 123.836 117.888 119.432 135 115.291V74.5125Z"
                    fill="white" />
                  <path
                    d="M520 119.498C530.057 122.382 538.723 125.383 546 128.502C566 137.074 576 144.906 576 152C576 159.685 564.25 168.109 540.75 177.272C523.98 183.81 464.303 191.328 417.325 197.245C398.474 199.62 381.668 201.737 370.5 203.43V242.445C372.12 242.244 373.794 242.036 375.517 241.822C434.409 234.502 551.259 219.98 585.75 204.76C621.25 189.094 639 171.508 639 152C639 125.99 607.75 103.674 545.25 85.0528C537.053 82.6105 528.636 80.3283 520 78.2064V119.498Z"
                    fill="white" />
                </svg>
                <div class="vr-button-text">TOUR VIRTUAL </div>
              </button>

            </div>
          </div>
        </div>
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
  },

  data() {
    return {
      visibleSlide: 0,
      pictureShadow: false,
      singlePropertyCarouselButtons: false,
      thumbNailPictureActive: false,
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
    },
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    thumbNailSelection(index) {
      this.visibleSlide = index;
      // this.thumbNailPictureActive = true;
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
    thumbNailSelectionStyle() {
      this.thumbNailPictureActive = true;
      console.log("culo");
    }


  },
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



.carousel-thumbnails {
  width: calc(100% - 456px);
  height: 61px;
  margin-top: -4px;
  /* padding-top: 5px; */
  display: flex;
}

.carousel-thumbnails li::after {
  content: "";
  opacity: .4;
  transition: opacity .3s ease;
  position: absolute;
  /* top: 0; */
  /* left: 0; */
  /* width: 100%; */
  /* height: 100%; */
  pointer-events: none;
  width: 90px;
  height: 61px;
  background: #000;
  margin-left: -90px;
}


.carousel-thumbnails li:hover:after {
  opacity: 0;
}


li.thumnailPictureSelected:hover:after {
  opacity: 0;
}


.property-carousel-content img {
  object-fit: cover;
  width: 100%;
  height: calc(100vh - (210px));
  object-position: 50% 50%;
}

.carousel-thumbnails img {
  width: 90px;
  height: 61px;
  cursor: pointer;
}

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
