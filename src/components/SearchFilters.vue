<template>
  <div class="tempBackground">
  
    <div class="leading">
      <div>Busqueda de Propiedad</div>
    </div>
    <div class="trailing">
 
            <b-dropdown text="# DE CUARTOS" >
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
      </b-dropdown>



             <b-dropdown text="# DE BAÑOS" >
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
      </b-dropdown>





    <div @click="togglePrice" class="price-filter">
      <div class="custom-filter">
        <div class="cf-title">
          <span>PRECIO</span> 
        </div>
  
        <div class="cf-icon">
          <svg width="8" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.17782 14.569C9.26956 14.7022 9.39231 14.8112 9.53551 14.8864C9.6787 14.9617 9.83805 15.001 9.99981 15.001C10.1616 15.001 10.3209 14.9617 10.4641 14.8864C10.6073 14.8112 10.7301 14.7022 10.8218 14.569L19.8218 1.569C19.926 1.41906 19.9871 1.24343 19.9984 1.06121C20.0098 0.87898 19.971 0.697123 19.8863 0.535394C19.8016 0.373665 19.6741 0.238248 19.5179 0.143858C19.3616 0.049468 19.1824 -0.000286344 18.9998 1.23965e-06H0.999815C0.817658 0.000753649 0.639153 0.0511479 0.483495 0.145764C0.327838 0.24038 0.200917 0.375639 0.116383 0.536994C0.0318493 0.698349 -0.00710004 0.879696 0.00372392 1.06153C0.0145479 1.24337 0.0747356 1.41881 0.177815 1.569L9.17782 14.569Z" fill="black" />
          </svg>
        </div>
      </div>

      <div v-if="priceToggle"  class="dialog-filter">

      </div>

    </div>


    </div>
  
  </div>
</template>

<script>
import { ref } from "vue";

export default {

  setup(){
    const priceToggle = ref(false);


    const togglePrice = () => {

      priceToggle.value = !priceToggle.value;
    }


    return {
      priceToggle,
      togglePrice
    }

  }

};
</script>

<style lang='scss'>

.dialog-filter{
  width: 50px;
  height: 100px;
  background-color: white;
}


.price-filter {

  display: flex;
  flex-direction: column;

}

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
}


.leading div {
  margin-left: 50px;
  font-family: 'Georama', sans-serif;
  font-size: 24px;
}

.trailing {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.custom-filter {
  display: flex;
  height: 60px;
  padding:20px;
  border-radius: 5px;

}



.btn-content{
  letter-spacing: 2px;
  font-size: 12.1px;
  font-family: 'Georama', sans-serif !important;
  font-weight:400;
  color: #27231d;
  margin-right: 10px;
}


.custom-filter:hover{
  cursor: pointer;
}

.btn-content:hover{
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
  font-weight:400;
  color: #27231d;
  margin-right: 10px;
}

.cf-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-group > .btn, .btn-group-vertical > .btn {
    position: relative;
    flex: 1 1 auto;
  background-color:#ebebeb;
  border: none;
  

    &:hover{
  background-color:#ebebeb59;

    }
    
}
.dropdown-toggle::after {
  margin-top: 4px;
color: #27231d;
}

</style>