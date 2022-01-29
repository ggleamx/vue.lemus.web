<template>
  <main-nav></main-nav>
  <router-view />
  <main-footer></main-footer>
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
</style>
