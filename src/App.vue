<template >
  <main-nav :class="{
    homeSearchOn: $route.name == 'home-search'
  }"></main-nav>
  <router-view />
  <main-footer v-if="$route.name != 'home-search'"></main-footer>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import MainFooter from "@/components/MainFooter.vue";
// import { usePropertysData } from "@/stores/PropertysStore.js";


export default {
  components: {
    MainNav,
    MainFooter,
  },
  // setup() {
  //   const propertysData = usePropertysData();
  //   console.log(propertysData.property);
  // }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.homeSearchOn {
  position: fixed;
}
</style>
