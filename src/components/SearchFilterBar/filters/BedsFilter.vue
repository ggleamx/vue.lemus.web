<template>
<div class="price-filter">
    <div @click="toggle(this.position)" class="custom-filter">
        <div class="cf-title">
            <span>{{'# DE RECAMARAS'}}</span>
        </div>

        <div class="cf-icon">
            <svg width="8" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.17782 14.569C9.26956 14.7022 9.39231 14.8112 9.53551 14.8864C9.6787 14.9617 9.83805 15.001 9.99981 15.001C10.1616 15.001 10.3209 14.9617 10.4641 14.8864C10.6073 14.8112 10.7301 14.7022 10.8218 14.569L19.8218 1.569C19.926 1.41906 19.9871 1.24343 19.9984 1.06121C20.0098 0.87898 19.971 0.697123 19.8863 0.535394C19.8016 0.373665 19.6741 0.238248 19.5179 0.143858C19.3616 0.049468 19.1824 -0.000286344 18.9998 1.23965e-06H0.999815C0.817658 0.000753649 0.639153 0.0511479 0.483495 0.145764C0.327838 0.24038 0.200917 0.375639 0.116383 0.536994C0.0318493 0.698349 -0.00710004 0.879696 0.00372392 1.06153C0.0145479 1.24337 0.0747356 1.41881 0.177815 1.569L9.17782 14.569Z" fill="black" />
            </svg>
        </div>
    </div>

    <div v-if="filterStatus(this.position)" class="rooms-dialog-filter">
        <div class="dialog-filter-head">

            <div class="dialog-filter-head-column simple">
                <p v-for="i in (min, max)" :key="i">{{i}}</p>
            </div>

        </div>

    </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { useFilters } from '../../../composables/useFilters';
// import { useMinMax } from '../../composables/useMinMax';

export default {
    name: "BedsItem",

    props: {
        position:Number,
        min:Number,
        max:Number,
    }, 


    setup() {

        const {
            toggleOverlay,
            toggleFilter,

        } = useFilters();


        return {
            // minBedrooms,
            // maxBedrooms,
            // minBaths,
            // maxBaths,
            // minPrice,
            // maxPrice,
            toggleOverlay,
            toggleFilter,

        }
    },

  computed: {
    ...mapGetters(['getFilter'])
  },

  methods: {

    filterStatus(index){
      return this.getFilter(index)
    },

    toggle(){
        this.toggleFilter(this.position)
    }

    
  }
}
</script>

<style lang="scss">
.rooms-dialog-filter {
    width: 10.47%;
    ;
    background-color: white;
    position: absolute;
    z-index: 2;
    margin: 60px 32px 0px 0px;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 10%), 0 3px 6px 0 rgb(0 0 0 / 20%);
}

.rooms-dialog-filter:hover {
    background-color: #ebebeb;

}

.baths-dialog-filter {
    width: 7.3%;
    background-color: white;
    position: absolute;
    z-index: 2;
    margin: 60px 32px 0px 0px;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 10%), 0 3px 6px 0 rgb(0 0 0 / 20%);
}

.baths-dialog-filter:hover {
    background-color: #ebebeb;
}

.price-dialog-filter {
    width: 16.77%;
    height: 480.5px;
    background-color: white;
    position: absolute;
    z-index: 2;
    margin: 60px 32px 0px 0px;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 10%), 0 3px 6px 0 rgb(0 0 0 / 20%);
    right: 0;
}

.dialog-filter-head {
    display: flex;
}

.dialog-filter-head-column {
    width: 50%;
    border: 1px solid #0155cb;
    height: 60px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-family: 'Georama', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #27231d;
}

.dialog-filter-head-column.min {
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 11px;
}

.dialog-filter-head-column.simple {
    width: 100%;
    height: 80px;
    border: none;
}

.dialog-filter-head-column.min::before {
    content: "";
    width: 18px;
    height: 18px;
    top: 0;
    left: 0;
    background: #0155cb;
    margin-right: 5px;
}

.dialog-filter-head-column-options {
    display: flex;
}

.dialog-filter-head-option {
    width: 50%;
    height: 50px;
    justify-content: center;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-family: 'Georama', sans-serif;
    color: #27231d;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
}

.dialog-filter-head-option:hover {
    background: #ebebeb;
}

.price-filter {
    display: flex;
    flex-direction: column;
}

.custom-filter {
    display: flex;
    height: 60px;
    padding: 20px 30px;
    border-radius: 5px;
}

.btn-content {
    letter-spacing: 2px;
    font-size: 12.1px;
    font-family: 'Georama', sans-serif !important;
    font-weight: 400;
    color: #27231d;
    margin-right: 10px;
}

.custom-filter:hover {
    cursor: pointer;
}

.btn-content:hover {
    cursor: pointer;
}

.cf-title {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cf-title span {
    letter-spacing: 2px;
    font-size: 12.1px;
    font-family: 'Georama', sans-serif;
    font-weight: 400;
    color: #27231d;
    margin-right: 10px;
}

.cf-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-group>.btn,
.btn-group-vertical>.btn {
    position: relative;
    flex: 1 1 auto;
    background-color: #ebebeb;
    border: none;

    &:hover {
        background-color: #ebebeb59;

    }

}

.dropdown-toggle::after {
    margin-top: 4px;
    color: #27231d;
}
</style>
