<template>
  <div class="hero">
    <div class="hero-search-box"></div>
  </div>
  <div class="callout-images-grid">
    <div class="callout-boxes">
      <h2>Iaculis: Phasellus Vestibul Eu Lorem</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. At erat pellentesque
        adipiscing commodo. Ipsum a arcu cursus vitae congue mauris rhoncus
        aenean vel. Dolor morbi non arcu risus quis. Sed id semper risus in
        hendrerit gravida rutrum. Habitasse platea dictumst vestibulum rhoncus
        est pellentesque. Volutpat consequat mauris nunc congue nisi. mauris.
      </p>
    </div>
  </div>
  <Carousel></Carousel>
</template>





<script>
import Carousel from "@/components/carousel/Carousel.vue";
export default {
  name: "Home",
  components: { Carousel },
};
</script>




<style>
.hero {
  height: 97vh;
  background: url("../assets/images/header-picture-screen-1.webp");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center top;
  /* border: 1px solid red; */
  /* position: relative; */
}

.callout-images-grid {
  margin-top: 3.75rem;
  display: flex;
  justify-content: center;
}

/***************/

.callout-boxes {
  max-width: 95ch;
  /* border: 1px solid blue; */
}

.callout-boxes h2 {
  font-family: "Amiri";
  font-style: italic;
  font-size: 1.75rem;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
  /* position: relative; */
  color: #222;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.callout-boxes h2::after {
  content: "";
  display: block;
  width: 48px;
  height: 2px;
  background: #0155cb;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  /* position: absolute; */
}

.callout-boxes p {
  text-align: center;
}

@media screen and (min-width: 1640px) {
  .hero {
    height: 654px;
    background: url("../assets/images/header-picture-screen-2.webp");
  }
}
</style>


