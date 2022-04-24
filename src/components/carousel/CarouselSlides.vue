<template>
  <div
    v-show="visibleSlide === index"
    :class="{ carouselSlide: onHomeView }"
    class="slideFx"
  >
    <slot></slot>
    <div v-if="onHomeView" class="carousel-slide-callout-container">
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
            <h2>Deslindes</h2>
            <h3>GESTIONAMOS EL TRÁMITE DEL DESLINDE POR PERITOS AUTORIZADOS</h3>
            <p>
              Consiste en un reporte de la ubicación exacta de la Propiedad, en
              el cual se estipula la superficie total del terreno o casa, con
              sus debidas medidas y colindancia
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
            <h2>Inscripción Ante El Registro Público</h2>
            <h3></h3>
            <p>
              La propiedad debe estar inscrita en el Registro Público de la
              Propiedad y de Comercio R.P.P.C.
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
            <h2>Avalúos</h2>
            <h3>ESTIMACIÓN DEL VALOR COMERCIAL DE UN INMUEBLE</h3>
            <p>
              Por medio de un dictamen técnico imparcial, a través de sus
              características físicas, de uso, de investigación y el análisis de
              mercado, tomando en cuenta las condiciones físicas y urbanas del
              inmueble.
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
            <h2>Servicios Jurídicos</h2>
            <h3>
              BRINDAR UN SERVICIO DE ASESORÍA LEGAL INMOBILIARIA PERSONALIZADA
            </h3>
            <p>
              Con personal altamente calificado, orientada a cuidar el
              patrimonio de nuestros clientes, con ética y profesionalismo.
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
  props: ["visibleSlide", "index", "onHomeView"],
  data() {
    return {};
  },
};
</script>

<style>
.carouselSlide img {
  animation: opacity 0.5s ease backwards;
}

.slideFx img {
  animation: smooth-opacity 0.2s ease-in-out;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes smooth-opacity {
  0% {
    opacity: 0.6;
  }

  25% {
    opacity: 0.7;
  }

  50% {
    opacity: 0.8;
  }

  75% {
    opacity: 0.9;
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
  width: 1140px;
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  /* border: 1px solid green; */
}

.carousel-slide-callout-counter {
  text-align: right;
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

/******************************************************/

@media screen and (min-width: 1640px) {
  .carousel-slide-callout {
    width: 1320px;
  }
}
</style>
