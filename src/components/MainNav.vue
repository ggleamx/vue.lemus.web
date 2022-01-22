
<template>
  <div class="main-nav">
    <div class="lemus-logo">
      <router-link :to="{ name: 'Home' }"
        ><img src="../assets/lemus-logo.svg" alt="logo"
      /></router-link>
    </div>
    <!----------------------------------------------------------------------->
    <nav class="main-nav-items">
      <!----------------------------------------------------------------------->
      <div class="nav-item" :class="{ hovered: onHover }">
        <router-link
          :to="{ name: 'home-search' }"
          @mouseover="hovering"
          @mouseleave="unhovered"
        >
          <p>Buscar Propiedad</p></router-link
        >
      </div>
      <!----------------------------------------------------------------------->
      <div
        class="nav-item neighborhoods-option"
        :class="{
          openMenu: neighborhoodsMenu,
        }"
      >
        <a
          :to="{ name: 'neighborhoods' }"
          @mouseover="neighborhoodsMenuHover"
          @mouseleave="neighborhoodsMenuUnhover"
        >
          <p>Mejores Zonas</p></a
        >
      </div>
      <!----------------------------------------------------------------------->
      <div class="nav-item" :class="{ hovered: onHover }">
        <router-link
          :to="{ name: 'virtual-tours' }"
          @mouseover="hovering"
          @mouseleave="unhovered"
        >
          <p>Tours Virtuales</p></router-link
        >
      </div>
      <!----------------------------------------------------------------------->
      <div class="nav-item about-option" :class="{ hovered: onHover }">
        <router-link
          :to="{ name: 'about-us' }"
          @mouseover="hovering"
          @mouseleave="unhovered"
          ><p>Sobre Nosotros</p></router-link
        >
      </div>
      <!----------------------------------------------------------------------->
      <div class="nav-item owner-login" :class="{ hovered: onHover }">
        <a
          href="https://portal.lemusrealty.com/"
          target="_blank"
          rel="noopener noreferrer"
          @mouseover="hovering"
          @mouseleave="unhovered"
        >
          <p>PORTAL DE PROPIETARIOS</p></a
        >
      </div>
      <!----------------------------------------------------------------------->
      <div class="nav-item join-list-option" :class="{ hovered: onHover }">
        <router-link
          :to="{ name: 'about-us' }"
          @mouseover="hovering"
          @mouseleave="unhovered"
        >
          <p>UNIRME A LA LISTA<br />DE INTERESADOS</p></router-link
        >
      </div>
      <!----------------------------------------------------------------------->
    </nav>
  </div>
  <!-----------------------------------------------------------------SUBMENUS-->
  <div
    v-show="neighborhoodsMenu"
    @mouseover="neighborhoodsMenuHover"
    @mouseleave="neighborhoodsMenuUnhover"
    class="neighborhoods-menu"
  >
    <router-link :to="{ name: 'about-us' }"><p>Sobre Nosotros</p></router-link>
  </div>
  <!----------------------------------------------------------------------->
</template>

<script>
export default {
  data() {
    return {
      onHover: false,
      neighborhoodsMenu: false,
    };
  },
  methods: {
    hovering() {
      this.onHover = true;
    },
    unhovered() {
      this.onHover = false;
    },
    neighborhoodsMenuHover() {
      this.neighborhoodsMenu = true;
    },
    neighborhoodsMenuUnhover() {
      this.neighborhoodsMenu = false;
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
  font-family: "Open Sans";
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: 0.5px;
  height: 90px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.lemus-logo img {
  width: 285px;
  padding-left: 0.5rem;
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

.nav-item.hovered:hover p {
  border-top: 2.5px solid transparent;
  border-bottom: 2.5px solid #0155cb;
}

.neighborhoods-option {
  cursor: pointer;
  position: relative;
}

.about-option:hover {
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
}

.owner-login {
  border-left: 2px solid #ebebeb;
}

.owner-login:hover {
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
}

.join-list-option {
  background-color: #0155cb;
  line-height: 18px;
  padding-left: 15px;
}

.join-list-option a:hover {
  border-top: none;
  border-bottom: none;
}
.join-list-option p {
  color: white;
}

.neighborhoods-menu {
  width: 100%;
  height: 100vh;
  box-shadow: 0 2px 18px 0 rgb(0 0 0 / 10%), 0 3px 6px 0 rgb(0 0 0 / 20%);
  background-color: wheat;
}

.openMenu {
  box-shadow: 0 -2px 18px 0 rgb(0 0 0 / 10%), 0 -2px 6px 0 rgb(0 0 0 / 20%);
}

.openMenu::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  background: white;
  height: 5px;
  left: 0;
}

.nav-item.openMenu p {
  border-top: 2.5px solid transparent;
  border-bottom: 2.5px solid #0155cb;
}
</style>