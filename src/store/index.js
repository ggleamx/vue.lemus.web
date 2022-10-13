import { createStore } from 'vuex'

export default createStore({
  state: {
   overlay: false,
   searchFilters: [false,false,false],
  
  },
  mutations: {
    toggleOverlay(state,value = null){
      if(value == null)
        state.overlay = !state.overlay;
      else 
       state.overlay = value;
    },
    
    toggleFilter(state,index){

      state.searchFilters[index] =! state.searchFilters[index];
      
      console.log(state.searchFilters[index]);

      if(!state.searchFilters[index]){
        state.overlay = false;
      }else {
        state.overlay = true;
      }
    },

    closeAll(state){
      for(var i = 0; i < state.searchFilters.length; i++){
          state.searchFilters[i] = false;
      }
      
      state.overlay = false;
    }
  },
  actions: {
  },
  getters: {

    getFilter:(state) => ( index) => {
      return state.searchFilters[index];
    },
    getOverlay: (state) => {
      return state.overlay
    }
  
  },
  modules: {
  },

})
