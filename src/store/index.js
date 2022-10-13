import { createStore } from 'vuex'

export default createStore({
  state: {
   homeSearchOverlay: false,
   bathsFilter:false,
   bedsFilter:false,
   priceFilter:false
  },
  mutations: {
    toggleHomeSearchOverlay(state,value){
      if(value == null)
        state.homeSearchOverlay = !state.homeSearchOverlay;
      else 
       state.homeSearchOverlay = value;
    },

    togglePriceFilter: (state) => state.priceFilter = !state.priceFilter,
    toggleBedsFilter: (state) => state.toggleBedsFilter = !state.toggleBedsFilter,
    toggleBathsFilter: (state) => state.toggleBathsFilter = !state.toggleBathsFilter
  },
  actions: {
  },
  getters: {

    priceFilter: (state) => state.priceFilter,
    bathsFilter: (state) => state.bathsFilter,
    bedsFilter:  (state) => state.bedsFilter,
    homeSearchOverlay: (state) => {
      return state.homeSearchOverlay
    }
  
  },
  modules: {
  },

})
