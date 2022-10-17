<template>
  <div class="main-nav">
    <!--LOGO----------------------------------------------------------------->
    <div class="lemus-logo">
      <router-link :to="{ name: 'Home' }"><img src="../assets/lemus-logo.svg" alt="logo" /></router-link>
    </div>
    <!----------------------------------------------------------------------->
    <nav class="main-nav-items">
      <!---HomeSearch Option--------------------------------------------------->
      <div class="nav-item">
        <router-link :to="{ name: 'home-search' }">
          <p class="option-underline">Buscar Propiedad</p>
        </router-link>
      </div>
      <!--Neighborhoods Option------------------------------------------------->
      <div class="neighborhoods-option" @mouseover="neighborhoodsMenuOn" @mouseleave="neighborhoodsMenuOff">
        <div class="nav-item">
          <a>
            <p class="option-underline">Mejores Zonas</p>
          </a>
          <!--Gap-Cover----->
          <transition name="fade">
            <div v-if="neighborhoodsMenu" class="neighborhoods-option-border-cover"></div>
          </transition>
          <!---------------->
        </div>
        <!--SUBMENU------------------------>
        <transition name="fade">
          <div v-show="neighborhoodsMenu" class="neighborhoods-menu">
            <router-link :to="{ name: 'about-us' }">
              <p>Sobre Nosotros</p>
              <div></div>
            </router-link>
          </div>
        </transition>
        <!--------------------------------->
      </div>
      <!--Virtual Tours Option------------------------------------------------->
      <div class="nav-item">
        <router-link :to="{ name: 'virtual-tours' }">
          <p class="option-underline">Tours Virtuales</p>
        </router-link>
      </div>
      <!--About--------------------------------------------------------------->
      <div class="about-option" @mouseover="aboutMenuOn" @mouseleave="aboutMenuOff">
        <div class="nav-item">
          <router-link :to="{ name: 'about-us' }">
            <p class="option-underline">Sobre Nosotros</p>
          </router-link>
          <!--Gap-Cover----->
          <transition name="fade">
            <div v-if="aboutMenu" class="about-option-border-cover"></div>
          </transition>
          <!---------------->
        </div>
        <!--SUBMENU------------------------>
        <transition name="fade">
          <div v-show="aboutMenu" class="neighborhoods-menu">
            <router-link :to="{ name: 'about-us' }">
              <p>Sobre Nosotros</p>
            </router-link>
          </div>
        </transition>
        <!--------------------------------->
      </div>
     
      <!----Owner Login Button------------------------------------------------->
      <div class="nav-item owner-login">
        <a href=" https://lemus.gleam.mx" target="_blank" rel="noopener noreferrer">
          <p class="owners-option-underline">PORTAL DE PROPIETARIOS</p>
        </a>
      </div>
      <!----Join List Button--------------------------------------------------->
      <div class="nav-item join-list-option">
        <router-link :to="{ name: 'about-us' }">
          <p>UNIRME A LA LISTA<br />DE INTERESADOS</p>
        </router-link>
      </div>
      <!----------------------------------------------------------------------->
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      neighborhoodsMenu: false,
      aboutMenu: false,
    };
  },
  methods: {
    neighborhoodsMenuOn() {
      this.neighborhoodsMenu = true;
    },
    neighborhoodsMenuOff() {
      this.neighborhoodsMenu = false;
    },
    aboutMenuOn() {
      this.aboutMenu = true;
    },
    aboutMenuOff() {
      this.aboutMenu = false;
    },
  },
};
</script>

<style scoped>
.main-nav {
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Open Sans;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: 0.5px;
  height: 90px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  /* position: absolute; */
  z-index: 4;
  width: 100%;
}

.lemus-logo img {
  width: 285px;
  margin-left: 1rem;
}

.main-nav-items {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-item {
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.nav-item a {
  display: flex;
  align-items: center;
  padding: 12px 15px 13px 15px;
  height: 100%;
}

.nav-item p {
  padding-top: 9px;
  padding-bottom: 9px;
}

/* vue transitions */
.fade-enter-active {
  transition: opacity 0.4s ease;
}

.fade-leave-active {
  transition: opacity 0.125s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* /////////////// */

.neighborhoods-option {
  height: 100%;
  transition: 0.4s ease;
}

.neighborhoods-option:hover {
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
}

.neighborhoods-menu {
  background-color: white;
  width: 100%;
  height: 92vh;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  /* top: 90px; */
  /* margin-top: 90px; */
  left: 0;
  z-index: 2;
  /* overflow-y: scroll; 
  /* border: 5px solid red; */
}

.about-option {
  height: 100%;
  transition: 0.4s ease;
}

.about-option:hover {
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
}

.neighborhoods-option-border-cover {
  background: white;
  width: 100%;
  height: 10%;
  margin-top: 59%;
  position: absolute;
  z-index: 3;
}

.about-option-border-cover {
  background: white;
  width: 100%;
  height: 10%;
  margin-top: 57%;
  position: absolute;
  z-index: 3;
  margin-left: 0.3px;
}

.owner-login {
  border-left: 2px solid #ebebeb;
  transition: 0.3s ease;
}

.owner-login:hover {
  box-shadow: 2px 2px 18px 0 rgba(0, 0, 0, 0.2),
    2px 3px 6px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
}

.owner-login:hover .owners-option-underline::before {
  opacity: 1;
  transform: translate3d(0, 18px, 0);
}

.join-list-option {
  background-color: #0155cb;
  line-height: 18px;
  padding: 0px 2px 0px 2px;
}

.join-list-option a:hover {
  border-top: none;
  border-bottom: none;
}

.join-list-option p {
  color: white;
}

.option-underline {
  display: flex;
  justify-content: center;
}

.option-underline::before {
  content: "";
  position: absolute;
  top: 55%;
  height: 2px;
  background: #0155cb;
  width: calc(100% - 28px);
  transform: translate3d(0, 10px, 0);
  opacity: 0;
  transition: 0.2s ease;
}

.owners-option-underline {
  display: flex;
  justify-content: center;
}

.owners-option-underline::before {
  content: "";
  position: absolute;
  top: 55%;
  height: 2px;
  background: #0155cb;
  width: calc(100% - 100px);
  transform: translate3d(0, 10px, 0);
  opacity: 0;
  transition: 0.2s ease;
}

.neighborhoods-option:hover .option-underline::before {
  opacity: 1;
  transform: translate3d(0, 18px, 0);
}

.about-option:hover .option-underline::before {
  opacity: 1;
  transform: translate3d(0, 18px, 0);
}

.nav-item:hover .option-underline::before {
  opacity: 1;
  transform: translate3d(0, 18px, 0);
}
</style>
