<template>
  <!----------------------------------------------------------------------->
  <div class="hero"></div>
  <div class="hero-search-box">
    <filters-box></filters-box>
  </div>
  <!----------------------------------------------------------------------->

  <div class="callout-images-grid">
    <!----------------------------------------------------------------------->
    <div class="callout-intro-text">
      <h2>Fábrica de éxitos Inmobiliarios</h2>
      <p>
        Somos asesores de Bienes Raíces en Rosarito Baja California, México.
        Grupo Lemus Realty somos un grupo de profesionistas especializados en la
        promoción de bienes raíces en la costa de Baja California.
      </p>
    </div>
    <!----------------------------------------------------------------------->

    <div class="images-grid">
      <!----COLUMN 1----------------------------------------------------------->
      <div class="images-grid-column">
        <!----------------------------------------------------------------------->
        <div class="images-grid-content">
          <div class="grid-content-graphic graphic-1">
            <img src="../assets/images/home-main-callout-1.webp" alt="" />
          </div>
          <!----------------------------------------------------------------------->
          <div class="grid-content-card column-1">
            <h3>Venta y renta de inmuebles</h3>
            <div>
              <p>
                Nos comprometemos con nuestros clientes para encontrar la
                propiedad que busca teniendo en cuenta sus necesidades e
                intereses a nivel personal, familiar, económico y/o de
                inversión.
              </p>
            </div>
          </div>
          <!----------------------------------------------------------------------->
        </div>
      </div>
      <!----COLUMN 2----------------------------------------------------------->
      <div class="images-grid-column">
        <!----------------------------------------------------------------------->
        <div class="images-grid-content">
          <div class="grid-content-graphic graphic-2">
            <img src="../assets/images/home-main-callout-2.webp" alt="" />
          </div>
          <!----------------------------------------------------------------------->
          <div class="grid-content-card column-2">
            <h3>Administracion propiedades</h3>
            <div>
              <p>
                La administración adecuada de la propiedad ahorra mucho dinero,
                tiempo y molestias a los propietarios. Grupo Lemus ayuda a
                mantener el buen estado de conservación de la propiedad y así
                incrementar su valor. .
              </p>
            </div>
          </div>
          <!----------------------------------------------------------------------->
        </div>
      </div>
      <!----COLUMN 3----------------------------------------------------------->
      <div class="images-grid-column">
        <!----------------------------------------------------------------------->
        <div class="images-grid-content">
          <div class="grid-content-graphic graphic-3">
            <img src="../assets/images/home-main-callout-3.jpg" alt="" />
          </div>
          <!----------------------------------------------------------------------->
          <div class="grid-content-card column-3">
            <h3>Regularización de propiedades</h3>
            <div>
              <p>
                Regularizamos todo tipo de Inmuebles, para obtener 'Título de
                Propiedad' o 'Escrituras Publicas'.
              </p>
            </div>
          </div>
          <!----------------------------------------------------------------------->
        </div>
      </div>
      <!----------------------------------------------------------------------->
    </div>
    <!----------------------------------------------------------------------->

    <div class="images-grid-main-button">
      <router-link class="grid-button" :to="{ name: 'about-us' }">
        <p>Mas acerca de Grupo Lemus</p>
      </router-link>
    </div>
  </div>

  <!----------------------------------------------------------------------->
  <div class="chat-callout-widget">
    <div class="chat-callout-widget-container">
      <div class="chat-callout-widget-content">
        <!----------------------------------------------------------------------->
        <div class="chat-callout-inner">
          <!----------------------------------------------------------------------->
          <div class="chat-callout-inner-icon">
            <svg
              width="70"
              height="72"
              viewBox="0 0 58 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_214_116)">
                <path
                  d="M35.2494 47.5833C31.9187 47.5127 29.0705 46.324 26.7167 43.9819C23.1545 40.4276 19.5962 36.8693 16.0419 33.3072C14.3942 31.6477 13.2526 29.694 12.7582 27.3872C12.0992 24.3978 12.5229 21.5496 14.0176 18.878C14.6296 17.7834 15.3828 16.783 16.3714 15.9827C17.7602 14.8529 19.9022 14.8411 21.3263 15.9592C21.5571 16.1383 21.7772 16.3309 21.9854 16.5359L26.9285 21.479C27.5287 22.0792 28.0113 22.7501 28.2114 23.6092C28.4938 24.8568 28.282 26.0102 27.517 27.0459C27.1992 27.4814 26.8108 27.8344 26.446 28.211C25.9046 28.776 25.881 29.3056 26.4224 29.8588C27.67 31.1298 28.9293 32.3892 30.2004 33.6367C30.73 34.1546 31.2478 34.1428 31.801 33.6249C32.1658 33.2954 32.4954 32.9423 32.872 32.6245C33.5894 32.0381 34.4853 31.7138 35.4118 31.7053C36.3383 31.6967 37.2401 32.0044 37.9681 32.5775C38.1682 32.7422 38.3565 32.907 38.5331 33.0835L43.5232 38.062C44.0058 38.5563 44.4295 39.0859 44.6531 39.7567C45.218 41.4398 44.8885 42.9462 43.6174 44.1702C41.2871 46.4299 38.486 47.5363 35.2494 47.5833ZM35.3083 45.2295C37.8034 45.1824 39.9689 44.3115 41.852 42.6285C42.6994 41.8752 42.8053 40.6512 41.9344 39.8038C40.2043 38.0973 38.5095 36.3672 36.7794 34.6606C35.9203 33.8132 34.9552 33.8368 34.0842 34.6724C33.7194 35.0255 33.3899 35.4139 32.9779 35.7081C32.3137 36.2065 31.4849 36.4337 30.6594 36.3436C29.8523 36.2621 29.101 35.8948 28.5409 35.3079L24.7276 31.4829C24.586 31.3491 24.4561 31.2034 24.3393 31.0475C23.8957 30.455 23.6628 29.7313 23.6778 28.9913C23.6927 28.2513 23.9545 27.5376 24.4216 26.9635C24.706 26.6182 25.0127 26.2919 25.3396 25.9866C26.187 25.2099 26.2106 24.0094 25.3279 23.1973C24.8336 22.7265 24.3628 22.2322 23.8685 21.7497C22.6562 20.5257 21.444 19.3017 20.22 18.1012C19.3138 17.2185 18.3134 17.2538 17.4424 18.1718C15.8183 19.9019 14.9356 21.938 14.8296 24.3036C14.7002 27.1047 15.63 29.5292 17.6072 31.53C21.2165 35.1706 24.8414 38.7956 28.4821 42.4048C30.3534 44.2762 32.6484 45.1824 35.3083 45.2295Z"
                  fill="#0155CB"
                />
                <path
                  d="M45.9477 26.5752C45.9477 26.9283 45.9712 27.1872 45.9477 27.4344C45.9252 27.7013 45.8067 27.951 45.614 28.1372C45.4214 28.3233 45.1678 28.4332 44.9002 28.4465C44.6247 28.4758 44.3481 28.4016 44.1242 28.2385C43.9002 28.0755 43.7448 27.835 43.688 27.5638C43.627 27.2775 43.5954 26.9857 43.5938 26.6929C43.3937 23.4446 42.0167 20.7965 39.4981 18.7604C37.7588 17.3319 35.6031 16.506 33.3545 16.4065C33.0784 16.3966 32.8033 16.3691 32.5307 16.3241C32.257 16.2851 32.0061 16.15 31.8228 15.943C31.6396 15.7361 31.5359 15.4707 31.5303 15.1943C31.5311 14.9289 31.6244 14.6721 31.7941 14.4681C31.9638 14.264 32.1993 14.1254 32.46 14.0762C33.0838 13.9467 33.7194 14.0527 34.3314 14.1233C36.3004 14.3579 38.1891 15.0425 39.8512 16.1241C42.1982 17.6138 44.0115 19.8104 45.0297 22.3971C45.5749 23.7263 45.8855 25.1399 45.9477 26.5752V26.5752Z"
                  fill="#0155CB"
                />
                <path
                  d="M39.0508 27.0811C39.0861 27.9285 38.5801 28.4817 37.8268 28.4464C37.5808 28.4381 37.3441 28.3497 37.1529 28.1946C36.9617 28.0395 36.8264 27.8262 36.7676 27.5872C36.7205 27.34 36.6852 27.0811 36.6617 26.834C36.5087 25.0803 35.014 23.5621 33.2956 23.3502L32.5424 23.2561C31.9539 23.1502 31.542 22.6912 31.542 22.1262C31.542 21.5613 31.9186 21.1141 32.5071 20.9728C33.0955 20.8316 33.4839 20.9728 33.9547 21.067C36.7676 21.6319 38.9802 24.1388 39.0508 27.0811Z"
                  fill="#0155CB"
                />
                <path
                  d="M42.6868 6.0611C42.8387 6.05952 42.9894 6.08828 43.1301 6.14569C43.2707 6.20309 43.3985 6.28799 43.5059 6.39541C43.6133 6.50283 43.6982 6.6306 43.7556 6.77125C43.813 6.9119 43.8418 7.06259 43.8402 7.21449C43.8482 7.3662 43.8252 7.51794 43.7726 7.66046C43.72 7.80298 43.6389 7.93328 43.5343 8.04342C43.4297 8.15356 43.3037 8.24122 43.1641 8.30105C43.0244 8.36088 42.8741 8.39163 42.7221 8.39142C42.4058 8.39144 42.1022 8.26658 41.8774 8.04398C41.6526 7.82139 41.5248 7.51906 41.5217 7.20272C41.5099 6.57895 42.0395 6.07287 42.6868 6.0611Z"
                  fill="#0155CB"
                />
                <path
                  d="M1.16516 32.3303C0.861084 32.3274 0.569931 32.2069 0.352722 31.9941C0.135513 31.7812 0.00910891 31.4926 0 31.1887C0.00577353 30.8823 0.128436 30.5898 0.342866 30.371C0.557296 30.1522 0.847267 30.0237 1.15339 30.0117C1.46866 30.0117 1.77101 30.137 1.99393 30.3599C2.21686 30.5828 2.34209 30.8852 2.34209 31.2004C2.32993 31.5043 2.20058 31.7917 1.98117 32.0024C1.76175 32.213 1.46932 32.3305 1.16516 32.3303V32.3303Z"
                  fill="#0155CB"
                />
                <path
                  d="M43.8289 55.2216C43.8199 55.3732 43.7811 55.5215 43.7146 55.658C43.6482 55.7945 43.5555 55.9166 43.4418 56.0172C43.328 56.1178 43.1956 56.195 43.052 56.2443C42.9084 56.2935 42.7564 56.314 42.6049 56.3044C42.4539 56.2984 42.3056 56.2625 42.1686 56.1987C42.0316 56.1349 41.9086 56.0446 41.8068 55.9329C41.705 55.8212 41.6264 55.6904 41.5755 55.5481C41.5246 55.4058 41.5024 55.2549 41.5104 55.1039C41.5161 54.9471 41.5538 54.7931 41.6211 54.6514C41.6883 54.5097 41.7839 54.3831 41.9017 54.2796C42.0196 54.176 42.1574 54.0976 42.3066 54.0491C42.4559 54.0006 42.6134 53.9831 42.7697 53.9976C42.9203 54.0065 43.0676 54.0455 43.2029 54.1122C43.3382 54.1789 43.4588 54.2721 43.5575 54.3862C43.6562 54.5003 43.7311 54.633 43.7777 54.7765C43.8243 54.9199 43.8417 55.0713 43.8289 55.2216V55.2216Z"
                  fill="#0155CB"
                />
                <path
                  d="M8.52915 49C7.57488 49 7.05542 50.0894 7.70475 50.7887C11.0243 54.3637 15.206 57.0489 19.8668 58.576C21.8905 59.2438 23.9829 59.682 26.1045 59.8824C27.6072 60.0177 29.1178 60.0413 30.6239 59.953C33.4172 59.7796 36.1714 59.209 38.8036 58.2582C38.9683 58.1964 39.1261 58.1175 39.2744 58.0228C39.4916 57.8872 39.6557 57.6812 39.7393 57.4391C39.8228 57.197 39.8207 56.9336 39.7334 56.6929C39.6547 56.4481 39.4956 56.2371 39.282 56.094C39.0684 55.9509 38.8128 55.884 38.5564 55.9043C38.3228 55.9299 38.0934 55.9853 37.8738 56.0691C37.6384 56.1437 37.4043 56.2221 37.1702 56.3006C36.7021 56.4575 36.2339 56.6144 35.7554 56.74C34.0959 57.1927 32.3976 57.4882 30.6828 57.6227C28.7307 57.7665 26.7688 57.6915 24.8334 57.3991C22.8394 57.1013 20.8877 56.568 19.0194 55.8102C15.4975 54.403 12.3291 52.2551 9.72418 49.5215C9.41178 49.1937 8.98201 49 8.52915 49V49Z"
                  fill="#0155CB"
                />
                <path
                  d="M24.2039 4.72047C24.7031 3.88541 24.0154 2.86379 23.0662 3.07739C18.2758 4.15551 13.7968 6.43775 10.0566 9.72789C8.42378 11.1582 6.95204 12.7664 5.66913 14.5223C4.76616 15.7693 3.95487 17.0806 3.24196 18.4453C1.92807 20.9813 0.975555 23.6869 0.413159 26.4805C0.379948 26.6565 0.365029 26.8352 0.368647 27.0136C0.371254 27.2735 0.462151 27.523 0.626146 27.7204C0.790142 27.9177 1.0173 28.051 1.26963 28.098C1.5209 28.1546 1.78529 28.1235 2.01995 28.0098C2.25463 27.8961 2.44585 27.7064 2.56264 27.4714C2.66304 27.2536 2.73564 27.0243 2.77868 26.7889C2.83798 26.5444 2.89323 26.2991 2.94847 26.0538C3.05894 25.5631 3.16942 25.0725 3.3123 24.5889C3.79271 22.9029 4.42841 21.2635 5.211 19.6923C6.10975 17.9084 7.2015 16.2281 8.46589 14.6826C9.76557 13.0885 11.2453 11.6523 12.8739 10.4043C15.9276 8.03945 19.4324 6.36493 23.1448 5.48558C23.5859 5.38109 23.9713 5.10958 24.2039 4.72047V4.72047Z"
                  fill="#0155CB"
                />
                <path
                  d="M54.2858 38.5238C54.0779 39.2522 54.61 40 55.3675 40V40C55.9196 40 56.4117 39.645 56.5649 39.1145C57.1642 37.039 57.528 34.8975 57.6462 32.7305C57.7844 30.3451 57.6143 27.9519 57.1401 25.61C56.5918 22.807 55.6278 20.1016 54.2802 17.5834C52.6101 14.4709 50.3889 11.6875 47.7247 9.36837C47.6046 9.26875 47.4744 9.18197 47.3363 9.10945C47.1061 9.00074 46.8464 8.97126 46.5976 9.0256C46.3489 9.07994 46.1252 9.21504 45.9613 9.40985C45.7974 9.60466 45.7025 9.84822 45.6915 10.1026C45.6805 10.3569 45.754 10.6078 45.9004 10.816C46.049 10.9959 46.2103 11.1651 46.383 11.3221C46.5994 11.5346 46.8185 11.7418 47.0371 11.9486C47.4723 12.3604 47.9058 12.7704 48.3131 13.2169C50.9289 16.0381 52.89 19.4017 54.0566 23.0679C55.1082 26.3524 55.5119 29.8099 55.2453 33.2483C55.0987 35.0359 54.777 36.8027 54.2858 38.5238Z"
                  fill="#0155CB"
                />
              </g>
              <defs>
                <clipPath id="clip0_214_116">
                  <rect width="57.6932" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <!----------------------------------------------------------------------->
          <div class="chat-callout-inner-text">
            <div class="callout-phone-links">
              <a href="tel:+52-661-613-1278"
                ><p>OFICINA 1 - &nbsp;Tel: (661) 613 1278 &nbsp; |</p></a
              >
              <a href="tel:+52-661-616-9846"
                ><p>&nbsp; Cel: (661) 616 9846</p></a
              >
            </div>
            <div class="callout-phone-links">
              <a href="tel:+52-661-612-2502"
                ><p>OFICINA 2 - &nbsp;Tel: (661) 612 2502 &nbsp; |</p></a
              >
              <a href="tel:+52-661-128-2705"
                ><p>&nbsp; Cel: (661) 128 2705</p></a
              >
            </div>
            <a
              href="https://wa.me/526615273377"
              target="_blank"
              rel="noopener noreferrer"
              ><p>WHASTAPP: &nbsp;(661) 527 3377</p></a
            >
          </div>

          <!----------------------------------------------------------------------->
          <div class="chat-callout-inner-title">
            <h2>FÁBRICA DE EXITOS<br />INMOBILIARIOS</h2>
          </div>
          <!----------------------------------------------------------------------->
          <div class="chat-callout-button">
            <div class="images-grid-main-button chat-callout-button">
              <router-link
                class="grid-button chat-button"
                :to="{ name: 'home' }"
              >
                <p>CONTACTO</p>
              </router-link>
            </div>
          </div>
        </div>
        <!----------------------------------------------------------------------->

        <!----------------------------------------------------------------------->
      </div>
    </div>
  </div>
  <!----------------------------------------------------------------------->

  <carousel :carouselSlides="slides" :onHomeView="homeSlider"></carousel>

  <!----------------------------------------------------------------------->
</template>

<script>
import Carousel from "@/components/carousel/Carousel.vue";
import FiltersBox from "@/components/FiltersBox.vue";
export default {
  name: "Home",
  components: { Carousel, FiltersBox },
  data() {
    return {
      homeSlider: true,
      slides: [
        require("../assets/images/carousel-picture-1.webp"),
        require("../assets/images/carousel-picture-2.webp"),
        require("../assets/images/carousel-picture-3.webp"),
        require("../assets/images/carousel-picture-4.webp"),
      ],
    };
  },
};
</script>

<style>
.hero {
  height: 97vh;
  background: url("../assets/images/header-picture-screen-1.webp");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center top;
}

.hero-search-box {
  display: flex;
  justify-content: center;
  z-index: 0;
}

.callout-images-grid {
  margin-top: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #222;
}

/***************/

.callout-intro-text {
  max-width: 75ch;
  margin: 0 auto 50px;
  /* border: 1px solid blue; */
}

.callout-intro-text h2 {
  font-family: Amiri, Times New Roman, serif;
  font-style: italic;
  font-size: 2rem;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
}

.callout-intro-text h2::after {
  content: "";
  display: block;
  width: 48px;
  height: 2px;
  background: #0155cb;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  margin-top: 8.25px;
}

.callout-intro-text p {
  text-align: center;
  font-family: Open Sans;
  line-height: 26px;
  font-weight: 300;
  color: #3a3a3a;
  font-size: 14px;
}

/***************/

.images-grid {
  display: flex;
  width: 1140px;
  justify-content: space-between;
}

.images-grid-column img {
  width: 366px;
}

.images-grid-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid-content-graphic {
  animation: cardAnimation 0.6s ease-out 0ms forwards;
  animation-delay: 0s;
  opacity: 0;
}

@keyframes cardAnimation {
  0% {
    transform: translate3d(0, 80px, 0);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}

.graphic-2 {
  animation-delay: 0.1s;
}

.graphic-3 {
  animation-delay: 0.2s;
}

.grid-content-card.column-1 {
  animation-delay: 0.4s;
}
.grid-content-card.column-2 {
  animation-delay: 0.5s;
}
.grid-content-card.column-3 {
  animation-delay: 0.6s;
}

.grid-content-card {
  background-color: white;
  width: 330px;
  padding: 25px 30px;
  box-shadow: 0 6px 12px -4px rgb(0 0 0 / 25%);
  margin: -15px auto 0;
  z-index: 1;
  animation: cardAnimation 0.9s ease-out 0ms forwards;
  opacity: 0;
  height: 274px;
}

.grid-content-card h3 {
  font-family: Amiri, Times New Roman, serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #27231d;
  text-align: left;
  text-transform: inherit;
  margin-bottom: 15px;
}

.grid-content-card h3::after {
  content: "";
  display: block;
  width: 48px;
  height: 2px;
  background: #0155cb;
  bottom: 0;
  margin-top: 10px;
}

.grid-content-card p {
  font-family: Open Sans, Verdana, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
  color: #3a3a3a;
  text-align: left;
  width: 35ch;
}

.images-grid-main-button {
  margin-top: 40px;
  display: flex;
  animation: buttonAnimation 0.4s ease-out 0.9s forwards;
  opacity: 0;
}
@keyframes buttonAnimation {
  0% {
    -webkit-transform: translate3d(0, 40px, 0);
    transform: translate3d(0, 40px, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}

.grid-button {
  width: 330px;
  padding: 20px 26px 20px 26px;
  border: 1px solid #b9b3b3;
  background: #0155cb;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  font-family: Open Sans, Verdana, Helvetica, sans-serif;
  transition: 0.4s ease-out 0.9s forwards;
}

.grid-button p {
  color: white;
}
.grid-button:hover p {
  color: #27231d;
}

.grid-button:hover {
  background: #ebebeb;
  transition: 0.4s ease-out 0.9s forwards;
  border: 1px solid #0155cb;
}

/***************/

.chat-callout-widget {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  text-align: left;
}

.chat-callout-widget-container {
  width: 1140px;
  height: 138px;
  background: #fff;
  box-shadow: 0 6px 12px -4px rgb(0 0 0 / 25%);
  padding: 30px 50px;
}

.chat-callout-widget-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.chat-callout-inner {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.chat-callout-inner-title h2 {
  font-size: 1.75rem;
  line-height: 30px;
  max-width: 300px;
  color: #222;
  font-family: Amiri, Times New Roman, serif;
  font-style: italic;
  letter-spacing: 0;
  font-weight: 300;
  margin-bottom: 10px;
  text-align: left;
}

.chat-callout-inner-title h2::after {
  content: "";
  display: block;
  width: 48px;
  height: 2px;
  background: #0155cb;
  margin-top: 5px;
}

.chat-callout-inner-text {
  width: 41ch;
}

.chat-callout-inner-text p {
  color: #3a3a3a;
  font-family: Open Sans, Verdana, Helvetica, sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0;
  line-height: 26.25px;
  font-weight: 600;
}

.chat-callout-button {
  margin: 0px;
  animation: none;
  opacity: 1;
}

.chat-button {
  width: 210px;
  border: 1px solid #0155cb;
}

.callout-box-button {
  width: 280px;
}

.callout-box-slide-button {
  margin-top: 0px;
  opacity: 1;
  animation: none;
}

.callout-phone-links {
  display: flex;
}

/******************************************************/
/* Carousel Styles */
/******************************************************/

/* .carousel-container {
  background: #ebebeb;
  width: 100%;
  padding-bottom: 60px;
  border: 1px solid blue;
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
button {
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

button:hover {
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
} */
/******************************************************/

@media screen and (min-width: 1640px) {
  .hero {
    height: 654px;
    background: url("../assets/images/header-picture-screen-2.webp");
  }
  .images-grid-column img {
    width: 426px;
  }

  .images-grid {
    width: 1320px;
  }

  .grid-content-card {
    margin: -40px auto 0;
  }

  .carousel-content-buttons {
    width: 808px;
  }
}
</style>
