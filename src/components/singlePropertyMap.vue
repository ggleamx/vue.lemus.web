<template>
    <div ref="propertyMap" class="single-property-map">

    </div>
</template>


<script>
import { Loader } from "@googlemaps/js-api-loader";
// import mapIcon from "../assets/map-pin.svg";
const GOOGLE_MAPS_API_KEY = "AIzaSyBnMX5hF7o_KuPP9j7rDCDgVXqxP8sFYXw";

export default {
    name: "SinglePropertyMap",
    props: { propertyData: Object, },
    data() {
        return {
            googleMap: null,
            googleMarkers: [],
            infoMarkers: [],
        };
    },
    mounted() {
        console.log(this.propertyData);
        const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
        const propertyMap = this.$refs.propertyMap;

        loader.load().then((res) => {
            this.googleMap = new google.maps.Map(propertyMap, {

                mapId: "369869d2d3c4e4fd",
                mapTypeControl: false,
                fullscreenControl: false,
                //Centering map
                center: {
                    lat: 32.368475588412615,
                    lng: -117.05566495156631,
                },
                zoom: 12,
                styles: [{
                    featureType: 'Businnes',
                    elementType: 'geometry',
                    stylers: [{
                        color: "#8dc858"
                    }]
                }]
                // gestureHandling: 'greedy'

            });
            //list propertys in estates payload
            // let list = Object.keys(this.markersData).map((key) => {
            //     return this.markersData[key];
            // });
            // getMarkers(list, this.googleMap, this.googleMarkers, this.infoMarkers);
        });

    },
}
</script>


<style>
.single-property-map {
    width: 100%;
    height: 107%;
}

@media screen and (min-width: 1640px) {
    .single-property-map {
        height: 104.5%;
    }
}
</style>



