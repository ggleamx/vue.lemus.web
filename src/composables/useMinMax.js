import axios from "axios";
import { ref } from "vue";

export function useMinMax(){


    const error = ref(null);
    const isLoading = ref(false);
    const minBedrooms = ref(0);
    const maxBedrooms = ref(0);
    const minBaths = ref(0);
    const maxBaths = ref(0);
    const minPr = ref(0);
    const maxPr = ref(0);
    const minRg = ref(0);
    const maxRg = ref(0);



    const getMinAndMaxs = async() => {

        isLoading.value = true;
        try {
            const { data } = await axios.get('https://lemus.gleam.mx/api/w/estates/filter/mixsmaxs');

            console.log(data.payload)
            const {
                minRecamaras,
                maxRecamaras,
                minBanos,
                maxBanos,
                minPrice,
                maxPrice,
                minRange,
                maxRange

            } = data.payload;

            minBedrooms.value = minRecamaras; 
            maxBedrooms.value = maxRecamaras;
            minBaths.value = minBanos;
            maxBaths.value = maxBanos;
            minPr.value = minPrice;
            maxPr.value = maxPrice;
            minRg.value = minRange;
            maxRg.value = maxRange;

                isLoading.value = false;
            
        }catch(err){
            console.log(err);
            error.value = 'No se pudo cargar filters mins y maxs'
        }
    }

    getMinAndMaxs();

          

    return { 
    error, 
    isLoading, 
    minBedrooms,
    maxBedrooms,
    minBaths,
    maxBaths,
    minPr,
    maxPr,
    minRg,
    maxRg

    }
}