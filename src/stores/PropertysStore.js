import { defineStore } from "pinia";
import { getPropertys } from "@/composables/propertysData.js";
// import { usePropertiesData } from "@/composables/propertiesDataFetch.js";

// const { propertys } = usePropertiesData()

// console.log(propertys);


const propertys = getPropertys()
console.log(propertys);


export const usePropertysData = defineStore("PropertysStore",
    {
        state: () => {
            return {
                propertys
            }
        }



    }


)
