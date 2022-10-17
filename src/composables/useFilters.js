import axios from "axios";
import {ref, computed } from "vue";
import { useStore } from "vuex";

export function useFilters(){
    const store = useStore();
    const isLoading = ref(false);

    
    const getPropertysByFilter = async() => {

        isLoading.value = true;

        try {
            const { data } = await axios.get(' https://lemus.gleam.mx/api/w/estates/filter')
        } catch (error) {
            
        }

    }
    

    return { 
        
        getOverlay:computed(() => store.getters['getOverlay']),
   


        toggleOverlay: (value) => store.commit('toggleOverlay',value),
        setMinPrice: (value) => store.commit('setMinPrice',value),
        setTypeFilterSelected:(value) => store.commit('setTypeFilterSelected',value),
        setCategoryFilterSelected: (value )=> store.commit('setCategoryFilterSelected',value),
        setBathsFilterSelected:(value) => store.commit('setBathsFilterSelected',value),
        setBedsFilterSelected:(value) => store.commit('setBedsFilterSelected',value),
        toggleFilter:(index) => store.commit('toggleFilter',index),
        closeAll:() => store.commit('closeAll')
    
    }
}