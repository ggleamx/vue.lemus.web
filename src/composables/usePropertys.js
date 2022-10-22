import axios from "axios";
import {
    ref
} from "vue";
import {
    useRoute
} from "vue-router";
import {
    useStore
} from "vuex";




export function usePropertys() {


    const route = useRoute();

    let filters = [];

    const url = route.fullPath.split('?');

    if (url.length > 1) {
        filters = url[1].split('&');
    }

    const propertys = ref(null);
    const error = ref(null);
    const isLoading = ref(false);

    const axiosInstance = axios.create({
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });



    let obj = {

    }
    filters.forEach(filter => {
        const splitters = filter.split('=');
        obj[splitters[0]] = splitters[1].toUpperCase();
    })

    console.log(obj);

    const getPropertys = async () => {

        isLoading.value = true;
        try {
            
            if(filters.length > 0){
                const { data } = await axiosInstance.post('https://lemus.gleam.mx/api/w/estates/filter',obj);

                console.log(data);
                propertys.value = data.payload;
            }else {
                const { data } = await axiosInstance.get('https://lemus.gleam.mx/api/w/estates')
                propertys.value = data.payload;

            }



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