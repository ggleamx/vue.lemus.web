import propertyService from "@/services/propertyService.js";
import { ref } from 'vue'

export function usePropertiesData() {
    const propertys = ref(null)
    const error = ref(null)
    const isLoading = ref(true)



    propertyService
        .getPropertys()

        .then((res) => (setTimeout(() => {
            propertys.value = res.data.payload;
            isLoading.value = false;

        }, 300)))

        .catch((error) => (console.log(error)))

    return { propertys, isLoading, error }

}



