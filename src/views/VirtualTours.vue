<template>
  <carousel :carouselSlides="propertys" :onVrView="toursVRSlider"></carousel>
  <!-- {{ propertys }} -->
</template>

<script>
import Carousel from "@/components/carousel/Carousel.vue";
import propertyService from "@/services/propertyService.js";

export default {
  name: "VirtualTours",
  components: { Carousel },
  data() {
    return {
      toursVRSlider: true,
      propertys: [],
    };
  },
  created() {
    propertyService
      .getPropertys()
      .then((res) => {
        // console.log(res);
        setTimeout(() => {
          this.propertys = res.data.payload;
          this.isLoading = false;
        }, 300);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.carousel-container {
  background: transparent;
  width: 80%;
  padding-bottom: 0px;
  border: 1px solid green;
}

.carousel-content {
  position: relative;
  height: auto;
  overflow: hidden;
  margin-top: 0px;
}
.next {
  right: 1;
}
</style>
