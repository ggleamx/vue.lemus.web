import { createStore } from 'vuex'

export default createStore({
  state: {
   overlay: false,
   searchFilters: [false,false,false],
   bedsMinMaxSelected : [null,null],
   bathsMinMaxSelected : [null,null],
   priceMinMaxSelected : [null,null],

  
  },
  mutations: {


    setMinBeds(state,value){
      state.bedsMinMaxSelected[0] = value;
    },

    setMaxBeds(state,value){
      state.bedsMinMaxSelected[1] = value;

    },


    setMinBaths(state,value){
      state.bathsMinMaxSelected[0] = value;

    },

    setMaxBaths(state,value){
      state.bathsMinMaxSelected[1] = value;

    },

    setMinPrice(state,value){
      state.priceMinMaxSelected[0] = value;

    },

    setMaxPrice(state,value){
      state.priceMinMaxSelected[1] = value;

    },

    

    toggleOverlay(state,value = null){
      if(value == null)
        state.overlay = !state.overlay;
      else 
       state.overlay = value;
    },

    toggleFilter(state,index){
      for(var i = 0; i < state.searchFilters.length; i++){
        if(i == index)
          continue;
        state.searchFilters[i] = false;
    }

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

    getBathsMinMaxSelected:(state) => {
      return state.bathsMinMaxSelected;
    },

    getBedsMinMaxSelected:(state) => {
      return state.bedsMinMaxSelected;
    },
    getPriceMinMaxSelected:(state) => {
      return state.priceMinMaxSelected
    }, 
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
