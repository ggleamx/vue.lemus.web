import axios from "axios";
import { ref } from "vue";

export function useMinMax(){


    const error = ref(null);
    const isLoading = ref(false);
    const minBedrooms = ref(0);
    const maxBedrooms = ref(0);
    const minBaths = ref(0);
    const maxBaths = ref(0);
    const minPrice = ref(0);
    const maxPrice = ref(0);



    const getMinAndMaxs = async() => {

        isLoading.value = true;
        try {
            // const { data } = await axios.get('...');

            // const {
            //     minBedrooms,
            //     maxBedrooms,
            //     minBaths,
            //     maxBaths,
            //     minPrice,
            //     maxPrice,

            // } = data.payload;


            // minBedrooms.value=minBedrooms;
            // maxBedrooms.value=maxBedrooms;
            // minBaths.value=minBaths;
            // maxBaths.value=maxBaths;
            // minPrice.value=minPrice;
            // maxPrice.value=maxPrice;


            await setTimeout(function(){
                minBedrooms.value=1
                maxBedrooms.value=5
                minBaths.value=2
                maxBaths.value=4
                minPrice.value=1400000
                maxPrice.value=3500000   

                isLoading.value = false;

            },1000)


            
        }catch(err){
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
    minPrice, 
    maxPrice, 
    }
}