import { createStore } from 'vuex'

export default createStore({
  state: {

   homeSearchOverlay: false,
   
  },
  mutations: {
    toggleHomeSearchOverlay(state){
        state.homeSearchOverlay = !state.homeSearchOverlay;
    }
   
  },
  actions: {
  },
  getters: {

    homeSearchOverlay: (state) => {
      return state.homeSearchOverlay
    }
  
  },
  modules: {
  },

})
