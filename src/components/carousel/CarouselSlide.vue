<template>
  <div v-show="visibleSlide === index" class="carousel-slide">
    <slot></slot>
    <div class="carousel-slide-callout-container">
      <!-- <div class="carousel-slide-callout-buttons-container">
        <div>
          <button @click="prev" class="prev">Prev</button>
          <button @click="next" class="next">Next</button>
        </div>
      </div> -->

      <!----------------------------------------------------------------------->
      <div v-show="index === 0" class="carousel-slide carousel-slide-callout">
        <!----------------------------------------------------------------------->
        <div class="carousel-slide-callout-counter">
          <p>1 de 4</p>
        </div>
        <!----------------------------------------------------------------------->
        <div class="carousel-slide-callout-box">
          <!----------------------------------------------------------------------->
          <div class="carousel-slide-callout-box-text">
            <h2>Lorem ipsum dolor sit amet,<br />consectetur adipiscing</h2>
            <h3>Quam pellentesque nec nam aliquam sem</h3>
            <p>
              Nec sagittis aliquam malesuada bibendum arcu vitae elementum
              curabitur. Velit dignissim sodales ut eu sem integer vitae justo
              eget. Vitae et leo duis ut diam. Tempus egestas sed sed risus
              pretium. Arcu risus quis varius quam quisque id.
            </p>
          </div>
          <!----------------------------------------------------------------------->
          <div class="carousel-slide-callout-box-button">
            <div class="images-grid-main-button callout-box-slide-button">
              <router-link
                class="grid-button callout-box-button"
                :to="{ name: 'about-us' }"
              >
                <p>Conoce Mas</p>
              </router-link>
            </div>
          </div>
          <!----------------------------------------------------------------------->
        </div>
        <!----------------------------------------------------------------------->
      </div>
      <!----------------------------------------------------------------------->
      <!----------------------------------------------------------------------->
      <div v-show="index === 1" class="carousel-slide carousel-slide-callout">
        <!----------------------------------------------------------------------->
        <div class="carousel-slide-callout-counter">
          <p>2 de 4</p>
        </div>
        <!----------------------------------------------------------------------->
        <div class="carousel-slide-callout-box">
          <!----------------------------------------------------------------------->
          <div class="carousel-slide-callout-box-text">
            <h2>Ut Enim Blandit Volutpat Maecenas, Urna Porttitor Rhon</h2>
            <h3>Nisi Vitae Suscipit Tellus</h3>
            <p>
              Eu augue ut lectus arcu bibendum at varius vel pharetra. Sed odio
              morbi quis commodo. Id ornare arcu odio ut. Volutpat maecenas
              volutpat blandit aliquam etiam erat velit scelerisque in.
            </p>
          </div>
          <!----------------------------------------------------------------------->
          <div class="carousel-slide-callout-box-button">
            <div class="images-grid-main-button callout-box-slide-button">
              <router-link
                class="grid-button callout-box-button"
                :to="{ name: 'virtual-tours' }"
              >
                <p>Tomar un tour virtual</p>
              </router-link>
            </div>
          </div>
          <!----------------------------------------------------------------------->
        </div>
        <!----------------------------------------------------------------------->
      </div>
      <!----------------------------------------------------------------------->
      <!----------------------------------------------------------------------->
      <div v-show="index === 2" class="carousel-slide carousel-slide-callout">
        <!----------------------------------------------------------------------->
        <div class="carousel-slide-callout-counter">
          <p>3 de 4</p>
        </div>
        <!----------------------------------------------------------------------->
        <div class="carousel-slide-callout-box">
          <!----------------------------------------------------------------------->
          <div class="carousel-slide-callout-box-text">
            <h2>
              Bibendum Ut Tristique Et Egestas<br />Ipsum Suspendisse Ultrices
              gravida.
            </h2>
            <h3>Nec ultrices dui sapien eget</h3>
            <p>
              Dolor purus non enim praesent elementum, donec pretium vulputate
              sapien nec sagittis. Faucibus vitae aliquet nec ullamcorper,
              adipiscing diam donec.
            </p>
          </div>
          <!----------------------------------------------------------------------->
          <div class="carousel-slide-callout-box-button">
            <div class="images-grid-main-button callout-box-slide-button">
              <router-link
                class="grid-button callout-box-button"
                :to="{ name: 'neighborhoods' }"
              >
                <p>Descubrir Mas</p>
              </router-link>
            </div>
          </div>
          <!----------------------------------------------------------------------->
        </div>
        <!----------------------------------------------------------------------->
      </div>
      <!----------------------------------------------------------------------->
      <!----------------------------------------------------------------------->
      <div v-show="index === 3" class="carousel-slide carousel-slide-callout">
        <!----------------------------------------------------------------------->
        <div class="carousel-slide-callout-counter">
          <p>4 de 4</p>
        </div>
        <!----------------------------------------------------------------------->
        <div class="carousel-slide-callout-box">
          <!----------------------------------------------------------------------->
          <div class="carousel-slide-callout-box-text">
            <h2>Lobortis Elementum Nibh Tellus<br />Molestie Nunc Non</h2>
            <h3>Excepte ur, sint os cael</h3>
            <p>
              Aenean euismod elementum nisi quis eleifend quam adipiscing vitae
              proin. Penatibus et magnis dis parturient montes nascetur,
              consequat ac felis donec et, venenatis a condimentum vitae sapien
              pellentesque habitant, lacinia at.
            </p>
          </div>
          <!----------------------------------------------------------------------->
          <div class="carousel-slide-callout-box-button">
            <div class="images-grid-main-button callout-box-slide-button">
              <router-link
                class="grid-button callout-box-button"
                :to="{ name: 'virtual-tours' }"
              >
                <p>Eche un vistazo a los planos</p>
              </router-link>
            </div>
          </div>
          <!----------------------------------------------------------------------->
        </div>
        <!----------------------------------------------------------------------->
      </div>
      <!----------------------------------------------------------------------->
    </div>
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

<style>
.carousel-slide img {
  animation: opacity 0.5s ease backwards;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.carousel-slide-callout-container {
  display: flex;
  justify-content: center;
  padding: 0 106.5px;
  width: 100%;
  /* border: 1px solid red; */
}
.carousel-slide-callout {
  /* width: 100%; */
  width: 1140px;
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  /* border: 1px solid green; */
}

.carousel-slide-callout-counter {
  text-align: right;

  /* padding: 0 65px; */
  display: flex;
  justify-content: flex-end;
  width: 194px;
  /* border: 1px solid cyan; */
}

.carousel-slide-callout-counter p {
  font-size: 1.75rem;
  line-height: 36px;
  font-weight: 400;
  font-style: italic;
  color: #6f6b66;
  font-family: Amiri, Times New Roman, serif;
  /* border: 1px solid purple; */
}

.carousel-slide-callout-box {
  background-color: white;
  padding: 50px;
  width: 800px;
  margin-top: -182px;
  text-align: left;
  font-family: Amiri, Times New Roman, serif;
  color: #3a3a3a;
  display: flex;
  margin-bottom: 20px;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  animation: fadeLeftOut 0.4s ease forwards;
  animation: fadeRightIn 0.4s ease backwards;
  top: 0;
  z-index: 1;
}

@keyframes fadeRightIn {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(-75px, 0, 0);
    transform: translate3d(-75px, 0, 0);
    opacity: 0;
  }
}

@keyframes fadeLeftOut {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate3d(-75px, 0, 0);
    transform: translate3d(-75px, 0, 0);
    opacity: 1;
  }
}

.carousel-slide-callout-box-text {
  padding-right: 20px;
}
.carousel-slide-callout-box-text h2 {
  font-size: 28px;
  line-height: 36px;
  font-weight: 400;
  color: #222;
  font-style: italic;
}

.carousel-slide-callout-box-text h3 {
  font-size: 11px;
  font-weight: 900;
  line-height: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.carousel-slide-callout-box-text h3::after {
  content: "";
  display: block;
  width: 40px;
  height: 1px;
  background: #0155cb;
  margin-top: 5px;
  /* position: absolute; */
}

.carousel-slide-callout-box-text p {
  font-family: Open Sans, Verdana, Helvetica, sans-serif;
  line-height: 26px;
  font-size: 13px;
  font-weight: 400;
  margin-top: 10px;
}

.carousel-slide-callout-box-button {
  display: flex;
  align-items: center;
}

/* .carousel-slide-callout-buttons-container {
  border: 1px solid red;
  width: 100%;
  height: 60px;
} */

/******************************************************/
@media screen and (min-width: 1640px) {
  .carousel-slide-callout {
    width: 1320px;
  }
}
</style>


