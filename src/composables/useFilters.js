import { computed } from "vue";
import { useStore } from "vuex";

export function useFilters(){
    const store = useStore();

    return { 
        
        homeSearchOverlay:computed(() => store.getters['homeSearchOverlay']),
        toggleHomeSearchOverlay: () => store.commit('toggleHomeSearchOverlay')
        
    }
}