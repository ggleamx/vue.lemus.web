import axios from "axios";
import {
    ref,
    computed
} from "vue";
import {
    useRoute, useRouter
} from "vue-router";
import {
    useStore
} from "vuex";
import router from "../routes";

export function useFilters() {
    const store = useStore();
    const isLoading = ref(false);
    const route = useRoute();
    const router = useRouter();



    const addHashToLocation = (params) =>  {
        console.log(router.fullPath)
        history.pushState(
          {},
          null,
          router.fullPath + '#' + encodeURIComponent(params)
        )
      }

    const getPropertysByFilter = async () => {

        isLoading.value = true;

        try {
            const {
                data
            } = await axios.get(' https://lemus.gleam.mx/api/w/estates/filter')
        } catch (error) {

        }

    }

    const addParamsToUrl = (type,value) => {

        console.log(value)

        const params = {}

        params[type] = value;
        const urlParams = new URLSearchParams(window.location.search)
        console.log();


        router.replace({ path: route.fullPath, query: params })
    }


    const toggleFilter = (type, filter, value, fromLoad = false) => {
        
        console.log(value);
        if(!fromLoad){
            addParamsToUrl(type,value)
        } else {
            store.commit(filter, value);
        }
        // if (fromLoad) {
        //     store.commit(filter, value);
        //     return;
        // }




        // store.commit(filter, value);

    }


    return {

        getOverlay: computed(() => store.getters['getOverlay']),



        toggleOverlay: (value) => {

            store.commit('toggleOverlay', value)
        },
        setMinPrice: (value,fromLoad) => toggleFilter('preciomin', 'setMinPrice',value, fromLoad),
        setTypeFilterSelected: (value,fromLoad) => toggleFilter('clasification', 'setTypeFilterSelected', value,fromLoad),
        setCategoryFilterSelected: (value,fromLoad) => toggleFilter('category', 'setCategoryFilterSelected', value,fromLoad),
        setBathsFilterSelected: (value, fromLoad) => {
            toggleFilter('baths', 'setBathsFilterSelected', value, fromLoad)
        },
        setBedsFilterSelected: (value, fromLoad) => toggleFilter('bedrooms', 'setBedsFilterSelected', value, fromLoad),
        toggleFilter: (index) => {


            // console.log(route.fullPath)
            store.commit('toggleFilter', index)
        },
        closeAll: () => store.commit('closeAll')

    }
}