<template>
    <div class="tempBackground">

        <div class="leading">
            <div>Busqueda de Propiedad</div>
        </div>
        <div class="trailing">

            <!-- {{ isLoading }} -->
            <CategoryFilter :position=0 />
            <ClasificationFilter :position=1 :types=typesRg />
            <BedsFilter :position=2 :max="maxBedrooms" :min="minBedrooms" />
            <BathsFilter :position=3 :max="maxBaths" :min="minBaths" />
            <PriceFilter :position=4 :maxRange="maxRg" :minRange="minRg" :max="maxPr" :min="minPr" />
        </div>

    </div>
</template>

<script>
import BedsFilter from './filters/BedsFilter';
import BathsFilter from './filters/BathsFilter';
import PriceFilter from './filters/PriceFilter';
import CategoryFilter from './filters/CategoryFilter'
import ClasificationFilter from './filters/ClasificationFilter.vue'

import {
    useMinMax
} from '../../composables/useMinMax';

export default {

    components: {
        BedsFilter,
        BathsFilter,
        PriceFilter,
        CategoryFilter,
        ClasificationFilter
    },

    setup() {

        const {
            error,
            isLoading,
            minBedrooms,
            maxBedrooms,
            minBaths,
            maxBaths,
            minPr,
            maxPr,
            minRg,
            maxRg,
            typesRg,

        } = useMinMax();

        return {
            error,
            isLoading,
            minBedrooms,
            maxBedrooms,
            minBaths,
            maxBaths,
            minPr,
            maxPr,
            minRg,
            maxRg,
            typesRg
        }
    }

};
</script>

<style lang="scss">
.tempBackground {
    background: #ebebeb;
    height: 60px;
    top: 90px;
    position: fixed;
    width: 100%;
    z-index: 1;
    display: flex;
}

.leading {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 50px;
}

.leading div {

    font-family: Frank Ruhl Libre;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: .02em;
    color: #222;
}

.trailing {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>
