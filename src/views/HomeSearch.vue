<template>
  <search-filters></search-filters>
  <div class="homesearch-main-container">
  <template v-if="isLoading">

       <loading :active="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>

  </template>
  <template v-else>
    <div class="map-container"><h2>Mapa Interactivo</h2></div>
    <div class="home-cards-container">
     <!-- template de Handlebars -->

     


      <PropertyCard
        v-for="property in propertys.payload"
        :key="property.uid"
        :property="property"
      />
    </div>
    </template>
  
  </div>
  
</template>

<script>
import SearchFilters from "@/components/SearchFilters.vue";
import PropertyCard from "@/components/PropertyCard.vue";
import propertyService from "@/services/propertyService.js";
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: "Homesearch",
  components: { SearchFilters, PropertyCard,Loading },
  data() {
    return {
      isLoading: true,
      propertys: null,
    };
  },
  created() {
    propertyService
      .getPropertys()

      .then((res) => {
        setTimeout(() => {
  
        this.propertys = res.data;
        this.isLoading = false;
}, 500);
      })
      .catch((error) => {
        console.log(error);
      });
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
  /* border: 3px solid greenyellow; */
}

.map-container {
  width: 56%;
  background: #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid peru; */
}

.home-cards-container {
  right: 0;
  width: 44%;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  overflow-y: scroll;
  z-index: 2;
  /* position: absolute; */
  /*//////*/
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* border: 1px solid salmon; */
}
@media screen and (min-width: 1640px) {
  .home-cards-container {
    width: 31.5%;
  }
  .map-container {
    width: 69.5%;
  }
}
</style>