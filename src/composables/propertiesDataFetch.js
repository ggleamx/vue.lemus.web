import propertyService from "@/services/propertyService.js";
import { ref } from "vue";
// const propertyData = ref(null);




export function usePropertiesData() {
    const propertys = ref(null);
    const error = ref(null);
    const isLoading = ref(true);

    propertyService
        .getPropertys()

        .then((res) => (setTimeout(() => {
            propertys.value = res.data.payload;
            isLoading.value = false;

        }, 300)))

        .catch((error) => (console.log(error)))




    // console.log(propertys);
    // function emit(SinglePropertyData, property) {
    //     bus.value.set(SinglePropertyData, property)
    // }
    return { propertys, isLoading, error }



}





/*

const usePropertiesData = () => {
    const propertys = ref(null);
    const error = ref(null);


    const load = async () => {



        try {
            let data = await fetch("https://lemus-api.herokuapp.com/api/w/estates")
            if (!data.ok) {
                throw Error('no data available')
            }
            let propertysData = await data.json()
            propertys.value = propertysData.payload

            // console.log(propertys.value);

        }
        catch (err) {
            error.value = err.message
            console.log(error.value);
        }
    }
    const isLoading = ref(true);
    return { propertys, error, load }
}


*/

export async function fetchPropiedades() {


    const response = await fetch("http://lemus.gleam.mx/api/w/estates");
    const resp = await response.json();
    return resp;
}


// export default usePropertiesData

