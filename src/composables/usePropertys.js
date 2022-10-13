import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";




export function useProperties() {


    const propertys = ref(null);
    const error = ref(null);
    const isLoading = ref(false);

    const getPropertys = async() => {

        isLoading.value = true;
        try {

            const { data } = await axios.get('https://lemus.gleam.mx/api/w/estates')
            propertys.value = data.payload;
            
        } catch (err) {
            error.value = 'No se pudo cargar las propiedades' 
        }

        isLoading.value = false;
    }

    getPropertys();


    return { 
        propertys, 
        isLoading, 
        error,
        
    }

}
