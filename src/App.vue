<template >
  <main-nav :class="{
    homeSearchOn: $route.name == 'home-search',
  }"></main-nav>
  <router-view />
  <main-footer v-if="$route.name != 'home-search'"></main-footer>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  components: {
    MainNav,
    MainFooter,
  },
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
