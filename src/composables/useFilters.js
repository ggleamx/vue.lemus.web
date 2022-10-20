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
    const router = useRouter();


    const getPropertysByFilter = async () => {

        isLoading.value = true;

        try {
            const {
                data
            } = await axios.get(' https://lemus.gleam.mx/api/w/estates/filter')
        } catch (error) {

        }

    }


    const toggleFilter = (type, filter, value) => {

        const urlParams = new URLSearchParams(window.location.search);

        console.log(value);

        let valueFormatted = '';
        if (typeof value == 'string') {
            valueFormatted = value.toLowerCase();
        }else{
            valueFormatted = value;
        }

        urlParams.set(type, valueFormatted);

        window.location.search = urlParams;




        store.commit(filter, value);

    }


    return {

        getOverlay: computed(() => store.getters['getOverlay']),



        toggleOverlay: (value) => {

            store.commit('toggleOverlay', value)
        },
        setMinPrice: (value) => toggleFilter('preciomin', 'setMinPrice', value),
        setTypeFilterSelected: (value) => toggleFilter('clasification', 'setTypeFilterSelected', value),
        setCategoryFilterSelected: (value) => toggleFilter('category', 'setCategoryFilterSelected', value),
        setBathsFilterSelected: (value) => toggleFilter('bathrooms', 'setBathsFilterSelected', value),
        setBedsFilterSelected: (value) => toggleFilter('bedrooms', 'setBedsFilterSelected', value),
        toggleFilter: (index) => {


            // console.log(route.fullPath)
            store.commit('toggleFilter', index)
        },
        closeAll: () => store.commit('closeAll')

    }
}