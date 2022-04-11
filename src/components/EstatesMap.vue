<template>
  <div ref="mapDiv" class="map-div">
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
      // console.log("list: ", typeof markersData);
      //centering markers
      const bounds = new google.maps.LatLngBounds();
      // allows calling infoWindow only once
      let uniqueInfoWin = new google.maps.InfoWindow({
        pixelOffset: new google.maps.Size(147, 319),
        minWidth: 239,
        maxWidth: 239,
      });
      for (let i = 0; i < markersData.length; i++) {
        const p = markersData[i];
        const pos = {
          lat: parseFloat(p.latitud),
          lng: parseFloat(p.longitud),
        };
        const marker = new google.maps.Marker({
          position: pos,
          map: map,
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
      //formatting value of 'venta'
      const str = r.venta.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      r.venta = str;
      const template = `
      <div class="infowin-box">
        <div class="infowin-ciudad">
          <h2>${r.ciudad}</h2>
        </div>
        <div class="infowin-colonia">
          <h4 >${r.colonia}</h4>
        </div>
        <div class="infowin-main-info">
          <div >
            <div class="infowin-status-flag">
              <h3>EN VENTA</h3>
            </div>
          </div>
          <div>
            <h4 class="infowin-direccion">${r.direccion}</h4>
            <h4>Superficie: ${r.superficie} m2</h4>
            <h4>Desde: $${r.venta}</h4>
            <h4>Contacto: +52 (661) 616-9846</h4>
          </div>
        </div>
        <div class="infowin-zona-info-ribbon">
          <h2>INFORMACION DE LA ZONA</h2>
        </div>
      </div>`;
      return template;
    }
  },
};
</script>

<style>
.infowin-box {
  /* width: 239px;*/
  min-height: 328px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
}
.infowin-dir {
  color: #222;
}
.infowin-ciudad h1,
h2,
h3,
h4 {
  color: #222;
  margin: 0px;
}
.infowin-ciudad h2 {
  font-family: Frank Ruhl Libre;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;
  line-height: 36px;
  padding: 15px 15px 10px 15px;
}
.infowin-colonia {
  height: 37px;
  background-color: #ebebeb;
  display: flex;
  align-items: center;
}
.infowin-colonia h4 {
  color: #3a3a3a;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  padding: 0 15px;
  line-height: 1.15;
  font-family: Arial;
}
.infowin-status-flag {
  background: #ffd44d;
  width: 147px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 9px;
}
.infowin-status-flag h3 {
  font-family: Georama, Verdana, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 25px;
  font-size: 12px;
  letter-spacing: 2px;
}
.infowin-main-info {
  padding: 15px;
}
.infowin-main-info h4 {
  margin-bottom: 1px;
  font-family: Georama, Verdana, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
  color: #3a3a3a;
}
h4.infowin-direccion {
  font-family: Georama, Verdana, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #27231d;
  margin-bottom: 5px;
}
.infowin-zona-info-ribbon {
  height: 60px;
  background-color: #0155cb;
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 6px 6px 0px 0px;
}
.infowin-zona-info-ribbon h2 {
  color: white;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: Georama, Verdana, Helvetica, sans-serif;
}
.gm-style .gm-style-iw-c {
  border-radius: 0px 0px 6px 6px !important;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 30%);
  padding: 0px;
  text-align: left;
}
.gm-style .gm-style-iw-t::after {
  top: -307px;
  left: -127px;
  transform: rotate(45deg) skew(10deg, 10deg) !important;
  -webkit-transform: rotate(45deg) skew(10deg, 10deg) !important;
  /* width: 16px;
  height: 16px; */
  /* z-index: -1; */
}
.gm-style .gm-style-iw-d {
  overflow: hidden !important;
}
.gm-ui-hover-effect {
  display: flex;
  width: 60px !important;
  height: 60px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center;
  opacity: 1 !important;
  margin-top: 6.5px !important;
  margin-right: 6px !important;
}
.gm-ui-hover-effect span {
  width: 20px !important;
  height: 20px !important;
  margin: 0px !important;
  background-color: #000 !important;
}
.map-div {
  width: 100%;
  height: 107%;
}
@media screen and (min-width: 1640px) {
  .map-div {
    height: 104.5%;
  }
}
</style>