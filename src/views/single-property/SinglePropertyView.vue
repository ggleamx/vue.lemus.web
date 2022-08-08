<template>
  <SinglePropertyComponent :property="property" />
</template>


<script>

import SinglePropertyComponent from '@/components/SinglePropertyComponent.vue';
import { useRoute } from 'vue-router'

export default {

    components:{SinglePropertyComponent},
    


   setup() {

       const route = useRoute();

       let property = route.params.property;

        const gallerySorted = property.imgs.galeria.sort((a,b) => Number(b.portada) - Number(a.portada));

        property.imgs.galeria = gallerySorted;        


       return {
           property
       }
    },


  
}
</script>

<style>
@import './SinglePropertyView.css';
</style>