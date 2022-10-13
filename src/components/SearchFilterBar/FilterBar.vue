<template>
  <div class="tempBackground">

    <div class="leading">
      <div>Busqueda de Propiedad</div>
    </div>
    <div class="trailing">

      {{ isLoading }}
      {{ minBeds }}


      <BedsFilter position = 0 :max="maxBedrooms" :min="minBedrooms"/>
      <BathsFilter position = 1 :max="maxBaths" :min="minBaths"/>
      <PriceFilter position = 2 :max="maxPrice" :min="minPrice"/>
    </div>

  </div>
</template>

<script>
import BedsFilter from './filters/BedsFilter';
import BathsFilter from './filters/BathsFilter';
import PriceFilter from './filters/PriceFilter';
import { useMinMax } from '../../composables/useMinMax';


export default {

  components: {BedsFilter,BathsFilter,PriceFilter } ,

  setup(){


    const {
            minBedrooms,
            maxBedrooms,
            minBaths,
            maxBaths,
            minPrice,
            maxPrice,
            isLoading,
            error,
        } = useMinMax();

        return {
            minBedrooms,
            maxBedrooms,
            minBaths,
            maxBaths,
            minPrice,
            maxPrice,
            isLoading,
            error,

        }
  }


};
</script>

<style lang='scss'>

.tempBackground {
  background: #ebebeb;
  height: 60px;
  top: 90px;
  position: fixed;
  width: 100%;
  z-index: 1;
  display: flex;
}

.leading {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}


.leading div {
  margin-left: 50px;
  font-family: 'Georama', sans-serif;
  font-size: 24px;
}

.trailing {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}



</style>