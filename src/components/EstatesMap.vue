<template>
  <div ref="mapDiv" style="width: 100%; height: 107%">
    <div></div>
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

import mapIcon from "../assets/map-pin.svg";

const GOOGLE_MAPS_API_KEY = "AIzaSyBnMX5hF7o_KuPP9j7rDCDgVXqxP8sFYXw";

export default {
  name: "EstatesMap",

  props: {
    markersData: Object,
  },

  mounted() {
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    let that = this;
    let map = null;
    let clickListener = null;
    const mapDiv = this.$refs.mapDiv;

    //creating map instance
    loader.load().then(() => {
      map = new google.maps.Map(mapDiv, {
        mapId: "369869d2d3c4e4fd",

        //Disabling map default controls
        mapTypeControl: false,
        fullscreenControl: false,
        /*streetViewControl: false,*/

        //Centering map
        center: {
          lat: 32.368475588412615,
          lng: -117.05566495156631,
        },
        //Adjusting zoom
        zoom: 12,
      });

      //list propertys in estates payload
      let list = Object.keys(this.markersData).map((key) => {
        return this.markersData[key];
      });

      getMarkers(list);
    });

    function getMarkers(markersData) {
      console.log("list: ", typeof markersData);
      //centering markers
      const bounds = new google.maps.LatLngBounds();
      // allows calling infoWindow only once
      let uniqueInfoWin = new google.maps.InfoWindow();

      for (let i = 0; i < markersData.length; i++) {
        const p = markersData[i];

        const pos = {
          lat: parseFloat(p.latitud),
          lng: parseFloat(p.longitud),
        };

        const marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: p.direccion,
          icon: {
            url: mapIcon,
            scaledSize: new google.maps.Size(21, 30),
          },
        });

        let markerUID = markersData[i].uid;

        marker.addListener("click", () => {
          uniqueInfoWin.setContent(templateInfoWin(p));
          uniqueInfoWin.open(map, marker);
          // console.log("hii!!");
          that.$emit("filtering", markerUID);
          // console.log(markerUID);
          //changing color of PropertyCard
          // that.markerFiltering(p.uid);
        });

        //close all infoWindows when clicking on map
        /*clickListener = map.addListener("click", () => {
          uniqueInfoWin.close();
        });*/

        //postion added to the bounds list for map centering
        bounds.extend(pos);
      }

      //center the map based on the postion of all markers
      /* map.fitBounds(bounds);*/
    }

    //InfoWindows template
    function templateInfoWin(r) {
      const template = `
      <div>
        <p>Direccion</p>
        <h3 class="infowin-dir">${r.direccion}</h3>
      </div>`;

      return template;
    }
  },
};
</script>

<style>
.infowin-dir {
  color: blue;
}

.boton {
  width: 20px;
  height: 20px;
  background: blue;
}
</style>
