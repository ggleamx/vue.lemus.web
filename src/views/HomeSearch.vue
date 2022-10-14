<template>
  <filter-bar ></filter-bar>
  <div @click="closeAll()" class="homesearch-main-container" :class="{ overlay: getOverlay }">


    <template v-if="isLoading">
      <loading :active="isLoading" :can-cancel="true" :on-cancel="onCancel" :is-full-page="fullPage"></loading>
    </template>
    <template v-else>
      <div class="map-container">
        <estates-map :markersData="propertys" @filtering="filteringPropertys"></estates-map>
      </div>
      <div class="home-cards-container">
        <PropertyCard v-for="property in propertys" :key="property.numPropiedad" :property="property" :class="{
          initialColor: initialCardState,
          filteredColor:
            property.numPropiedad != markerFilter && !initialCardState,
          unfilteredColor: property.numPropiedad == markerFilter,
        }" />
      </div>
    </template>


  </div>
</template>

<script>
import FilterBar from "@/components/SearchFilterBar/FilterBar.vue";
import PropertyCard from "@/components/PropertyCard.vue";
import EstatesMap from "@/components/EstatesMap.vue";
import { useProperties } from "@/composables/usePropertys.js";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { useFilters } from '../composables/useFilters';

export default {
  name: "Homesearch",
  components: { FilterBar, PropertyCard, EstatesMap, Loading },
  data() {
    return {
      markerFilter: "",
      initialCardState: true,
    };
  },
  setup() {
    const { propertys, isLoading, error } = useProperties();
    const { toggleOverlay, closeAll,getOverlay } = useFilters();

    return {
      closeAll, 
      toggleOverlay,
      getOverlay, 
      propertys, 
      isLoading, 
      error}


  },
  methods: {
  
  filteringPropertys(markerUID) {
      this.markerFilter = markerUID;
      this.initialCardState = false;
      let propertysCollection = [];
      let target;
      this.propertys.forEach((propiedad, index, array) => {
        const targetEquals = propiedad.numPropiedad === markerUID;
        if (!targetEquals) propertysCollection.push(propiedad);
        else target = propiedad;
      });
      this.propertys = propertysCollection;
      this.propertys.unshift(target);
    },

  closeOverlayAndFilters(){
    this.toggleHomeSearchOverlay(false);
    
  }

  },


};
</script>

<style>
.homesearch-main-container {
  position: fixed;
  width: 100%;
  display: flex;
  height: calc(100% - 150px);
  top: 150px;
  background: white;
}

.map-container {
  width: 56%;
  background: #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  filter: brightness(0.5);


}

.home-cards-container {
  right: 0;
  width: 44%;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  overflow-y: scroll;
  z-index: 2;
}

.filteredColor {
  background-color: #93918e;
}

.unfilteredColor {
  background-color: none;
}

.initialColor {
  background-color: none;
}

.filteredColor h5 {
  color: #646464;
}

@media screen and (min-width: 1025px) {
  .map-container {
    width: 41.5%;
  }

  .home-cards-container {
    width: 58.5%;
  }
}

@media screen and (min-width: 1350px) {
  .map-container {
    width: 56%;
  }

  .home-cards-container {
    width: 44%;
  }
}

@media screen and (min-width: 1640px) {
  .map-container {
    width: 69.5%;
  }

  .home-cards-container {
    width: 31.5%;
  }
}
</style>