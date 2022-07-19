import { ref } from 'vue'
import axios from 'axios'



const usePropertys = (propId) => {

    const property = ref({});


    const isLoading = ref(false)

    const getProperty = async(id) => {
        try {

            isLoading.value = true;
            const { data } = await axios.get(`https://lemus.gleam.mx/api/w/estates`);
            const propertys = data.payload;


            for (let i = 0; i < propertys.length; i++) {

                if (propertys[i].numPropiedad === id) {
                    console.log('in')
                    property.value = propertys[i];

                    return
                }

            }


        } catch (error) {
            console.log('## errr', error)
        }


    }



    getProperty(propId);
    isLoading.value = false;

    return {
        property,
        isLoading
    }

}

export default usePropertys;


// import { fetchPropiedades } from "@/composables/propertiesDataFetch.js";


// const req = await fetchPropiedades();

// console.log(req.payload);