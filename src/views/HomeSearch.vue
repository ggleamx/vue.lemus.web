<template>
  <search-filters></search-filters>
  <div class="homesearch-main-container">
    <div class="map-container"><h2>Mapa Interactivo</h2></div>
    <div class="home-cards-container">
      <PropertyCard
        v-for="property in propertys.payload"
        :key="property.uid"
        :property="property"
      />
    </div>
  </div>
</template>

<script>
import SearchFilters from "@/components/SearchFilters.vue";
import PropertyCard from "@/components/PropertyCard.vue";
import propertyService from "@/services/propertyService.js";
export default {
  name: "Homesearch",
  components: { SearchFilters, PropertyCard },
  data() {
    return {
      propertys: null,
    };
  },
  created() {
    propertyService
      .getPropertys()

      .then((res) => {
        console.log("propertys:", res.data);
        this.propertys = res.data;
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