<template>
  <div>
    <!----------------------------------------------------------------------->
    <div class="footer-widget">
      <!----------------------------------------------------------------------->
      <div class="footer-logo">
        <router-link :to="{ name: 'Home' }"><img src="../assets/lemus-logo.svg" alt="logo" /></router-link>
      </div>
      <!----------------------------------------------------------------------->
      <!-- <div>{{ dynamicFooterMessage }}</div> -->
      <div class="footer-widget-message">
        <h3>Fábrica De Exitos<br />Inmobiliarios.</h3>
      </div>
      <!----------------------------------------------------------------------->
      <div class="footer-widget-button">
        <router-link class="footer-button footer-box-button" :to="{ name: 'about-us' }">
          <p>Unirse a la lista de interesados</p>
        </router-link>
      </div>
      <!----------------------------------------------------------------------->
    </div>
    <!----------------------------------------------------------------------->
    <div class="main-footer">
      <!----------------------------------------------------------------------->
      <div class="main-footer-container">
        <!----------------------------------------------------------------------->
        <div class="footer-main-button">
          <router-link class="footer-button footer-box-button footer-contact-button" :to="{ name: 'about-us' }">
            <p>Contacto</p>
          </router-link>
        </div>
        <!----------------------------------------------------------------------->
        <div class="footer-social-links">
          <div class="social-link">
            <svg fill="#fff" height="14" viewBox="0 0 16 17" width="14">
              <path d="M13.1,2.9h-1.5c-1.4,0-1.9,0.8-1.9,1.7v2H13l-0.5,3.1H9.8v7.2l-3.6,0V9.7H3.2V6.6h2.9V4.3
                    c0-2.7,1.7-4.1,4.4-4.1c1.3,0,2.6,0.2,2.6,0.2V2.9z"></path>
            </svg>
          </div>
          <div class="social-link">
            <svg fill="#fff" height="14" viewBox="0 0 16 17" width="14">
              <path class="st0" d="M8,0.7c-2.1,0-2.4,0-3.2,0c-0.8,0-1.4,0.2-1.9,0.4C2.3,1.3,1.9,1.6,1.5,2S0.8,2.9,0.6,3.4
            C0.4,3.9,0.2,4.5,0.2,5.3c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8,0.2,1.4,0.4,1.9c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9
            c0.5,0.2,1.1,0.3,1.9,0.4c0.8,0,1.1,0,3.2,0s2.4,0,3.2,0c0.8,0,1.4-0.2,1.9-0.4c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4
            c0.2-0.5,0.3-1.1,0.4-1.9c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8-0.2-1.4-0.4-1.9c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9
            c-0.5-0.2-1.1-0.3-1.9-0.4C10.4,0.7,10.1,0.7,8,0.7z M8,2.1c2.1,0,2.3,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3C13,2.6,13.3,2.8,13.5,3
            c0.3,0.3,0.4,0.5,0.6,0.9c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.3,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9
            c-0.3,0.3-0.5,0.4-0.9,0.6c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0c-2.1,0-2.3,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3
            c-0.4-0.1-0.6-0.3-0.9-0.6c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2c0-2.1,0-2.3,0-3.2
            c0-0.8,0.2-1.2,0.3-1.5C2,3.5,2.2,3.3,2.4,3C2.7,2.7,3,2.6,3.3,2.4C3.6,2.3,4,2.2,4.8,2.2C5.6,2.1,5.9,2.1,8,2.1C8,2.1,8,2.1,8,2.1z
            M8,4.5c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C12,6.3,10.2,4.5,8,4.5z M8,11.2c-1.4,0-2.6-1.2-2.6-2.6S6.6,6,8,6
            s2.6,1.2,2.6,2.6S9.5,11.2,8,11.2z M13.1,4.4c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9
            C12.7,3.4,13.1,3.9,13.1,4.4z"></path>
            </svg>
          </div>
          <div class="social-link">
            <svg fill="#fff" height="14" viewBox="0 0 16 17" width="14">
              <path class="st0" d="M15.8,3.5C15.2,3.8,14.6,3.9,14,4c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.5-0.5-1.1-0.9-1.8-1
            c-0.7-0.1-1.4,0-2.1,0.3C8.8,2.7,8.3,3.2,8,3.9C7.7,4.5,7.7,5.2,7.8,5.9C5.1,5.8,2.7,4.5,1.2,2.6C0.9,3.1,0.7,3.6,0.7,4.2
            c0,1.1,0.6,2.1,1.4,2.7c-0.5,0-1-0.2-1.5-0.4v0c0,0.7,0.3,1.5,0.7,2.1c0.5,0.6,1.1,1,1.9,1.1c-0.5,0.1-1,0.1-1.5,0.1
            C2,10.4,2.4,11,3,11.4C3.5,11.8,4.2,12,4.9,12c-1.1,0.9-2.6,1.4-4,1.4c-0.3,0-0.5,0-0.8,0c1.5,1,3.2,1.5,5,1.5c6,0,9.2-4.9,9.2-9.2
            c0-0.1,0-0.3,0-0.4C14.9,4.7,15.4,4.2,15.8,3.5L15.8,3.5z"></path>
            </svg>
          </div>
          <div class="social-link">
            <svg fill="#fff" height="14" viewBox="0 0 16 17" width="14">
              <path class="st0" d="M16,16.4h-3.3v-5.1c0-1.2,0-2.8-1.7-2.8c-1.7,0-2,1.3-2,2.7v5.2H5.7V5.8h3.2v1.4h0c0.4-0.8,1.5-1.7,3.1-1.7
            c3.3,0,3.9,2.2,3.9,5L16,16.4L16,16.4z M2,4.4C1,4.4,0.1,3.5,0.1,2.5C0.1,1.4,1,0.6,2,0.6c1.1,0,1.9,0.9,1.9,1.9
            C3.9,3.5,3.1,4.4,2,4.4z M3.7,16.4H0.4V5.8h3.3V16.4z"></path>
            </svg>
          </div>
        </div>
        <!----------------------------------------------------------------------->
      </div>
      <!----------------------------------------------------------------------->
      <div class="main-footer-container second-container">
        <div class="footer-menu">
          <!----------------------------------------------------------------------->
          <div class="footer-menu-column">
            <div class="menu-option">
              <a href="https://portal.lemusrealty.com/" target="_blank" rel="noopener noreferrer">
                ¿Quieres Trabajar con Nosotros?</a>
            </div>
            <div class="menu-option">
              <router-link :to="{ name: '' }">Nuestra Experiencia de compra</router-link>
            </div>
            <div class="menu-option">
              <router-link :to="{ name: '' }">Acerca de Grupo Lemus</router-link>
            </div>
          </div>
          <!----------------------------------------------------------------------->
          <div class="footer-menu-column">
            <div class="menu-option">
              <router-link :to="{ name: '' }">Portal de Propietarios</router-link>
            </div>
            <div class="menu-option">
              <router-link :to="{ name: '' }">Agentes Inmobiliarios</router-link>
            </div>
            <div class="menu-option">
              <router-link :to="{ name: 'faqs' }">FAQs</router-link>
            </div>
          </div>
          <!----------------------------------------------------------------------->
        </div>
        <div class="brochure-download-menu">
          <div class="brochure-download-menu-title">
            <p>Descargar el Folleto Actualizado de Grupo Lemus.</p>
          </div>
          <div class="language-options">
            <div class="brochure-language">
              <p>English</p>
            </div>
            <div class="brochure-language">
              <p>Español</p>
            </div>
          </div>
        </div>
      </div>
      <!----------------------------------------------------------------------->
      <div>
        <div class="accordion-column">
          <div></div>
        </div>
        <div class="accordion-column">
          <div></div>
        </div>
        <div class="accordion-column">
          <div></div>
        </div>
      </div>
      <!----------------------------------------------------------------------->
      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <!----------------------------------------------------------------------->
      <div>
        <p></p>
      </div>
      <!----------------------------------------------------------------------->
    </div>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       dynamicFooterMessage: "",
//     };
//   },
//   mounted() {
//     if (this.$route.name == "Home") {
//       this.dynamicFooterMessage = "Ullamcorper a lacus vestibulum sed arcu non";
//     }
//     if (this.$route.name != "Home") {
//       this.dynamicFooterMessage = " ";
//     }
//   },
// };
</script>

<style>
.main-footer {
  display: flex;
  padding: 30px 60px 40px 60px;
  background-color: #27231d;
  flex-direction: column;
}

.main-footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  /* border: 1px solid purple; */
}

.footer-widget {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  height: 100px;
  /* height: 10vh; */
}

.footer-logo img {
  width: 285px;
  margin-left: 1rem;
}

.footer-widget-button {
  display: flex;
}

.footer-widget-button p {
  color: white;
}

.footer-button {
  width: 330px;
  background: #0155cb;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  font-family: Open Sans, Verdana, Helvetica, sans-serif;
  transition: 0.4s ease-out 0.9s forwards;
  -webkit-font-smoothing: antialiased;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-button:hover {
  background: #0155cb;
  transition: 0.4s ease-out 0.9s forwards;
}

.footer-box-button {
  width: 208px;
  height: 60px;
}

.footer-widget-message h3 {
  font-family: Amiri, Times New Roman, serif;
  font-weight: 400;
  color: #222;
  font-size: 2.25rem;
  line-height: 36px;
  font-style: italic;
}

.footer-contact-button {
  background: #27231d;
  border: 1px solid #b9b3b3;
  width: 280px;
}

.footer-contact-button:hover {
  border-color: #ebebeb;
  background: #000;
}

.footer-contact-button p {
  color: white;
}

.footer-social-links {
  display: flex;
}

.social-link {
  margin: 0 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-link:hover {
  border: 1px solid #ebebeb;
  background: #000;
}

.footer-menu {
  display: flex;
  /* border: 1px solid orange; */
}

.footer-menu a {
  color: white;
  font-weight: 700;
  font-family: Open Sans, Verdana, Helvetica, sans-serif;
  line-height: 26px;
  font-size: 13px;
}

.menu-option {
  height: 45px;
  width: 267.45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid blue; */
}

.menu-option a {
  border: 1px solid transparent;
  padding: 9.5px 15px;
}

.menu-option a:hover {
  border: 1px solid #ebebeb;
  background: #000;
}

.footer-menu-column {
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
}

.language-options {
  display: flex;
}

.brochure-download-menu {
  align-self: flex-start;
  padding-left: 6.5%;
  /* border: 1px solid blue; */
}

.brochure-download-menu-title p {
  color: #b5b5b5;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 6px;
  -webkit-font-smoothing: antialiased;
  font-family: Open Sans, Verdana, Helvetica, sans-serif;
}

.language-options p {
  color: #fff;
  text-align: left;
  font-size: 0.8125rem;
  font-weight: 700;
  position: relative;
  padding-left: 37px;
  cursor: pointer;
}

.language-options p:before {
  content: "";
  width: 23px;
  height: 1px;
  background-color: #6f6b66;
  transition: background-color 0.3s ease;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -1.5px;
}

.language-options p:hover:before {
  background-color: #0155cb;
  transition: background-color 0.3s ease;
}

.brochure-language {
  width: 130px;
  height: 36px;
}

.second-container {
  justify-content: flex-start;
}

@media screen and (min-width: 1640px) {
  .main-footer {
    flex-direction: row;
    padding: 60px 60px 20px 60px;
  }

  .footer-widget {
    height: 174px;
  }

  .footer-box-button {
    width: 330px;
  }

  .footer-social-links {
    padding-right: 50px;
  }

  .main-footer-container {
    width: 50%;
  }

  .brochure-download-menu {
    padding-left: 0px;
  }
}
</style>
