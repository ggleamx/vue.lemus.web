<template>
  <div class="property-card">
    <a href="" class="property-card-link-container">
      <div class="property-card-content">
        <div class="card-picture-slider">
          <!-- <img src="../assets/images/property-card-image.jpg" alt="" /> -->
          <!-- <carousel></carousel> -->
        </div>
        <div class="property-card-info">
          <h2>{{ property.direccion }}</h2>
          <h4>En {{ property.ciudad }}</h4>
          <h5>Colonia: {{ property.colonia }}</h5>
          <div class="property-datails">
            <div class="property-datails-row">
              <p class="first-column-item">
                {{ property.recamaras }} recamaras
              </p>
              <p class="first-column-item">{{ property.baños }} baños</p>
            </div>
            <div class="property-datails-row second">
              <p>Precio: ${{ priceFormat }}</p>
              <p>Superficie: {{ property.superficie }}m2</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "PropertyCard",
  props: {
    property: Object,
  },
  computed: {
    priceFormat() {
      const str = this.property.venta.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
    },
  },
};
</script>

<style>
.property-card {
  /* width: 560px; */
  height: 200px;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: 0 6px 12px rgb(0 0 0 / 15%);
  overflow: hidden;
}

.property-card-content {
  box-shadow: 0 0 6px 0 transparent, 0 0 2px 0 transparent;
  width: 100%;
  /***********/
  height: 100%;
  padding: 0px;
  display: flex;
}

.card-picture-slider {
  width: 280px;
  height: 200px;
}

.card-picture-slider img {
  width: 100%;
  height: 100%;
}

.property-card-info {
  width: calc(100% - 280px);
  text-align: left;
  padding: 10px 9.65px;
  display: flex;
  flex-direction: column;
}

.property-card-info h2 {
  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.25px;
  color: #6f6b66;
  height: 56px;
}

.property-card-info h4 {
  margin: 0px;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-family: Georama, Verdana, Helvetica, sans-serif;
  text-transform: uppercase;
  color: #6f6b66;
  height: 16px;
}
.property-card-info h5 {
  font-family: Georama, Verdana, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 20.5px;
  font-weight: 400;
  color: #3a3a3a;
  margin: 7.25px 0px 7.25px 0px;
  /* height: 41px; */
}

.property-datails {
  display: flex;
  width: 100%;
  height: 52px;
  overflow: hidden;
}

.property-datails-row {
  display: flex;
  flex-direction: column;
  width: 45%;
}

.property-datails-row.second {
  width: 55%;
}

.property-datails-row p {
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  font-family: Georama, Verdana, Helvetica, sans-serif;
  color: #6f6b66;
  text-align: left;
}

/* .first-column-item {
  padding-right: 15px;
} */
</style>
