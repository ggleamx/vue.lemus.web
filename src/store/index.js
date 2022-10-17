import { createStore } from 'vuex'

export default createStore({
  state: {
   overlay: false,
   searchFilters: [false,false,false,false,false],
   bedsFilterSelected : null,
   bathsFilterSelected : null,
   priceMinMaxSelected : [null,null],
   categoryFilterSelected: null,
   typeFilterSelected: null,

  
  },
  mutations: {


    setBedsFilterSelected(state,value){
      state.bedsFilterSelected = value;
    },

    setCategoryFilterSelected(state,value){
      state.categoryFilterSelected = value;
    },

    setTypeFilterSelected(state,value){
      state.typeFilterSelected = value;
    },

    setBathsFilterSelected(state,value){
      state.bathsFilterSelected = value;

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

    getBathsFilterSelected:(state) => {
      return state.bathsFilterSelected;
    },

    getCategoryFilterSelected:(state) => {
      return state.categoryFilterSelected;
    },

    getTypeFilterSelected:(state) => {
      return state.typeFilterSelected;
    },

    getBedsFilterSelected:(state) => {
      return state.bedsFilterSelected;
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
