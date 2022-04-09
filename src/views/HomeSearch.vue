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
    <div class="map-container">
            <estates-map
        :markersData="propertys"
        @filtering="filteringPropertys"
      ></estates-map>
    </div>
    <div class="home-cards-container">
     <!-- template de Handlebars -->



      <PropertyCard
        v-for="property in propertys"
        :key="property.uid"
        :property="property"
        :class="{
          initialColor: initialCardState,
          filteredColor: property.uid != markerFilter && !initialCardState,
          unfilteredColor: property.uid == markerFilter,
        }"
      />
    </div>
    </template>
  
  </div>
  
</template>

<script>
import SearchFilters from "@/components/SearchFilters.vue";
import PropertyCard from "@/components/PropertyCard.vue";
import EstatesMap from "@/components/EstatesMap.vue";
import propertyService from "@/services/propertyService.js";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css'


export default {
  name: "Homesearch",
  components: { SearchFilters, PropertyCard, EstatesMap,Loading},
  data() {
    return {
      isLoading: true,
      propertys: null,
      markerFilter: "",
      initialCardState: true,
      // search: ¨¨,
      // search: [],
    };
  },
  created() {
    propertyService
      .getPropertys()
      .then((res) => {
        console.log(res);
        setTimeout(() => {
  
        this.propertys = res.data.payload;
        this.isLoading = false;
}, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    filteringPropertys(markerUID) {
      this.markerFilter = markerUID;
      this.initialCardState = false;

      // console.log(this.propertys.length);
      // let propertysCollection = [];

      // this.propertys.map((propiedad) => {
      //   if (!propiedad.uid === markerUID) {
      //     console.log("hey");
      //     propertysCollection.push(propiedad);
      //   }
      // });

      // this.propertys = propertysCollection;

      // console.log(this.propertys.length);

      // const propertySelected = this.propertys.filter(
      //   (propiedad, index, arr) => {
      //     if (propiedad.uid == markerUID) return propiedad;
      //   }
      // );

      // this.propertys.unshift(0);

      // this.propertys.unshift((propiedad) => {
      //   if (propiedad.uid == markerUID) return propiedad;
      // });

      // const propertySelected = this.propertys.map((property) => {

      //   if (property.uid == markerUID) {

      //   }
      // });
    },
  },
  computed: {
    // testUID() {
    //   console.log(this.propertys.payload);
    //   return this.propertys.payload.filter((property) => {
    //     return property.uid.match(this.markerFilter);
    //   });
    // },
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
  /* border: 1px solid salmon; */
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

@media screen and (min-width: 1640px) {
  .home-cards-container {
    width: 31.5%;
  }
  .map-container {
    width: 69.5%;
  }
}
</style>

