import { computed } from "vue";
import { useStore } from "vuex";

export function useFilters(){
    const store = useStore();
    

    return { 
        
        homeSearchOverlay:computed(() => store.getters['homeSearchOverlay']),
        priceFilter: computed(() => store.getters['priceFilter']),
        bathsFilter: computed(() => store.getters['bathsFilter']),
        bedsFilter:  computed(() => store.getters['bedsFilter']),
    
        
        toggleHomeSearchOverlay: (value) => store.commit('toggleHomeSearchOverlay',value),
        togglePriceFilter: () => store.commit('togglePriceFilter'),
        toggleBedsFilter: () => store.commit('toggleBedsFilter'),
        toggleBathsFilter: () => store.commit('toggleBathsFilter'),
        
    }
}