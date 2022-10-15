import {ref, computed } from "vue";
import { useStore } from "vuex";

export function useFilters(){
    const store = useStore();

    
    

    return { 
        
        getOverlay:computed(() => store.getters['getOverlay']),
   


        toggleOverlay: (value) => store.commit('toggleOverlay',value),
        setMinPrice: (value) => store.commit('setMinPrice',value),
        toggleFilter:(index) => store.commit('toggleFilter',index),
        closeAll:() => store.commit('closeAll')
    
    }
}