<template>
  <div class="filters-box-container">
    <!----------------------------------------------------------------------->
    <div class="filters-box-title"><h1>Encuentra tu nuevo hogar</h1></div>
    <!------------------------------>
    <!----------------------------------------------------------------------->
    <div class="filter-options">
      <!------------------------------>
      <div v-on:click="filterMenuOn" class="filter-option">
        <div class="filter-option-content"><p>ZONAS</p></div>
        <!--Sub Menu--------------->
        <div v-show="filterZonesMenu" class="filter-menu">
          <div class="filter-menu-option">ZONA CENTRO</div>
          <div class="filter-menu-option">ZONA SUR</div>
          <div class="filter-menu-option">ZONA NORTE</div>
          <div class="filter-menu-option">ZONA COSTA</div>
        </div>
      </div>
      <!------------------------------>
      <!------------------------------>
      <div v-on:click="filterRoomsMenuOn" class="filter-option">
        <div class="filter-option-content"><p># DE CUARTOS</p></div>
        <!--Sub Menu--------------->
        <div v-show="filterRoomsMenu" class="filter-menu rooms-filter">
          <div class="filter-menu-option">2+ CUARTOS</div>
          <div class="filter-menu-option">3+ CUARTOS</div>
          <div class="filter-menu-option">4+ CUARTOS</div>
        </div>
      </div>
      <!------------------------------>
      <div v-on:click="filterBathsMenuOn" class="filter-option">
        <div class="filter-option-content"><p># DE BAÑOS</p></div>
        <!--Sub Menu--------------->
        <div v-show="filterBathsMenu" class="filter-menu baths-filter">
          <div class="filter-menu-option">1+ BAÑOS</div>
          <div class="filter-menu-option">2+ BAÑOS</div>
        </div>
      </div>
      <!------------------------------>
      <div v-on:click="filterPricesMenuOn" class="filter-option">
        <div class="filter-option-content"><p>PRECIO</p></div>
        <!--Sub Menu--------------->
        <div v-show="filterPricesMenu" class="filter-menu prices-filter">
          <div class="filter-menu-option"></div>
          <div class="filter-menu-option"></div>
        </div>
      </div>
      <!------------------------------>
      <button class="search-button">
        <div><p>BUSCAR</p></div>
      </button>
    </div>
    <!----------------------------------------------------------------------->
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterZonesMenu: false,
      filterRoomsMenu: false,
      filterBathsMenu: false,
      filterPricesMenu: false,
    };
  },

  methods: {
    filterMenuOn() {
      this.filterZonesMenu = !this.filterZonesMenu;
      this.filterRoomsMenu = false;
      this.filterBathsMenu = false;
      this.filterPricesMenu = false;
    },
    filterRoomsMenuOn() {
      this.filterRoomsMenu = !this.filterRoomsMenu;
      this.filterZonesMenu = false;
      this.filterBathsMenu = false;
      this.filterPricesMenu = false;
    },
    filterBathsMenuOn() {
      this.filterBathsMenu = !this.filterBathsMenu;
      this.filterZonesMenu = false;
      this.filterRoomsMenu = false;
      this.filterPricesMenu = false;
    },
    filterPricesMenuOn() {
      this.filterPricesMenu = !this.filterBathsMenu;
      this.filterZonesMenu = false;
      this.filterRoomsMenu = false;
      this.filterBathsMenu = false;
    },
  },
};
</script>

<style>
.filters-box-container {
  margin-top: -120px;
  width: 1140px;
  padding: 20px 30px;
  background: white;
  position: absolute;
  border-radius: 1px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px 2px rgb(0 0 0 / 25%);
}
.filters-box-container h1 {
  font-size: 1.75rem;
  line-height: 36px;
  text-align: center;
  font-style: italic;
  font-weight: 400;
  font-family: Amiri, Times New Roman, serif;
  color: #222;
}

.filters-box-title {
  display: flex;
  flex: 0 0 331px;
}

.filter-options {
  display: flex;
  align-items: center;
  height: 60px;
}

.filter-option {
  border: 1px;
  height: inherit;
  display: flex;
  align-items: center;
  padding: 0 35px 0 20px;
  margin: 0 10px 0 10px;
  border: 1px solid #b5b5b5;
  font-family: Open Sans;
  line-height: 16px;
  font-weight: 700;
  color: #27231d;
  font-size: 13.9px;
  position: relative;
  justify-content: center;
  cursor: pointer;
}

/* .filter-option-content {
  display: flex;
  justify-content: space-between;
} */

.filter-option::after {
  content: "";
  position: absolute;
  border-top: 5px solid #27231d;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  transition: transform 0.2s ease;
  top: 45%;
  margin-right: 10px;
  right: 0;
}

.filter-menu {
  background-color: white;
  box-shadow: 0 2px 18px 0 rgb(0 0 0 / 10%), 0 3px 6px 0 rgb(0 0 0 / 20%);
  position: absolute;
  width: 287.7px;
  z-index: 1;
  margin-top: 292.5%;
  will-change: transform;
  /* border: 1px blue solid; */
}

.filter-menu-option {
  height: 60px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  transition: background-color 0.15s ease;
}

.rooms-filter {
  margin-top: 155%;
  /* border: 1px blue solid; */
}
.baths-filter {
  margin-top: 130%;
}

.prices-filter {
  margin-top: 170%;
  /* border: 1px blue solid; */
}

.filter-menu-option:hover {
  background-color: #ebebeb;
  transition: background-color 0.15s ease;
}

.search-button {
  background: #0155cb;
  border-color: #000;
  width: 150px;
  padding: 0 15px;
  height: 60px;
  border: 1px solid #b9b3b3;
  cursor: pointer;
  margin: 0 0 0 10px;
}

.search-button p {
  font-size: 0.8125rem;
  line-height: 17px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #fff;
}
</style>
