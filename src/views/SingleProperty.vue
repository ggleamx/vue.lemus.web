<template>
    <div class="nav-container">
        <div class="side-buttons">
            <div class="zone-info">
                <h3>
                    {{ ciudad }}
                </h3>
                <h4>{{ colonia }}</h4>
            </div>
            <div class="zone-propertys-selector">
                <button>{{ address }}</button>
            </div>
        </div>
        <div class="nav-options">
            <li>Vision General</li>
            <li>Comodidades</li>
            <li>Planos</li>
            <li>Interior</li>
            <li>Mapa</li>
            <li>Contacto</li>
        </div>
    </div>
    <Carousel></Carousel>
    <div class="viewport-section">
        <div class="main-property-features">
            <div class="overview-section">
                <div class="overview-info">
                    <div class="overview-info-address">
                        <h1>{{ address }}</h1>
                    </div>
                    <h2>Llamenos Para Solicitar Su Cotizacion</h2>
                    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat, duis aute irure dolore.</p> -->
                    <p>{{ propertys }}</p>
                    <ul>
                        <li>{{ rooms }} Recamaras <div class="overview-info-list-lines"></div>
                        </li>
                        <li>{{ bathrooms }} Baños<div class="overview-info-list-lines"></div>
                        </li>
                        <li>{{ parking }} Espacios para Automoviles<div class="overview-info-list-lines"></div>
                        </li>
                        <li>{{ sqft }} m²<div class="overview-info-list-lines"></div>
                        </li>
                    </ul>
                </div>

                <div class="property-cover-first-picture">
                    <img :src="images" alt="">
                    <img :src="images" alt="">
                    <img :src="images" alt="">
                    <p></p>
                </div>
            </div>
            <div class="amenities-section">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </ul>

            </div>

        </div>
    </div>
    <!-- <div>
        {{ neighborhood }}
        <br>
        {{ propertyId }}
        <br>
        {{ address }}
    </div> -->

</template>


<script>
import Carousel from "@/components/carousel/Carousel.vue";
import propertyService from "@/services/propertyService.js";

export default {
    props: ['propertyId', 'neighborhood', 'address', 'colonia', 'bathrooms', 'ciudad', 'images', 'rooms', 'parking', 'sqft'],
    components: { Carousel },

    data() {
        return {
            propertys: null,
        }
    },

    /*
        beforeRouteEnter(to, from, next) {
            getProperty(to.params.propertyId, (err, property) => {
                next(vm => vm.setData(err, property))
            })
        },
        async beforeRouteUpdate(to, from) {
            this.property = null
            try {
                this.property = await getProperty(to.params.propertyId)
            } catch (error) {
                this.error = error.toString()
            }
        },
        ////
        methods: {
            fetchData() {
                this.error = this.property = null
                this.loading = true
                // replace `getPost` with your data fetching util / API wrapper
                getProperty(this.$route.params.propertyId, (err, post) => {
                    this.loading = false
                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.post = post
                    }
                })
            },
        },*/
    mounted() {
        document.body.classList.add('singlePropertyScroll')
    },

    unmounted() {
        document.body.classList.remove('singlePropertyScroll')
    },

}
</script>


<style>
.singlePropertyScroll::-webkit-scrollbar {
    display: none;
}

.viewport-section {}

.main-property-features {
    padding: 20px 0px;
    width: 100%;
    /* height: 150vh; */
}

.nav-container {
    background-color: #ebebeb;
    height: 60px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* align-items: center; */
    top: 0;
    position: sticky;
    z-index: 1;
}

.zone-info {
    padding: 0px 30px 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
    background-color: #e1e1e1;
    height: 100%;
    justify-content: center;
}



.zone-info h3 {
    font-family: Frank Ruhl Libre;
    font-size: 1.375rem;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: .02em;
    color: #27231d
}

.zone-info h4 {
    letter-spacing: 2px;
    font-weight: 700;
    font-family: Georama;
    text-transform: uppercase;
    font-size: .625rem !important;
    line-height: 14px;
    color: #6f6b66;


}


.nav-options {
    display: flex;
    gap: 3%;
    width: 50%;
    justify-content: flex-end;
    padding: 0px 30px;
    align-items: center;
}

.nav-options li {
    font-size: .85rem;
    font-weight: 700;
    letter-spacing: .5px;
    color: #27231d;
    cursor: pointer;
    /* height: 100%; */
    font-family: Georama, Verdana, Helvetica, sans-serif;

}

.side-buttons {
    display: flex;
}

.side-buttons button {
    background: none;
    border: none;
    font-family: Frank Ruhl Libre;
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 24px;
    text-transform: capitalize;
    letter-spacing: 0 !important;
    height: 100% !important;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background-color .3s ease;
    color: #27231d;
    cursor: pointer;
    padding-left: 20px;
    padding-right: 35px;
}

.side-buttons button:after {
    margin-left: 15px;
    content: "";
    position: absolute;
    margin-top: 12.5px;
    transform: translateY(-50%);
    will-change: transform;
    border-top: 5px solid #27231d;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

}


.overview-section {
    padding: 0px 60px;
    display: flex;
    text-align: left;
}

.overview-info {
    margin-top: 3.5%;
    padding-right: 60px;
}

.overview-info h1 {
    font-size: 2.1875rem;
    font-family: Frank Ruhl Libre;
    font-weight: 700;
    font-style: normal;
    color: #222;
    letter-spacing: .02em;
    line-height: 110%;
    padding-bottom: 10px;
}

.overview-info-address:after {
    content: "";
    position: absolute;
    width: 60px;
    height: 2px;
    background: #0155cb;

}

.overview-info h2 {
    margin-top: 15px;
    font-size: 1.75rem;
    line-height: 36px;
    font-family: Frank Ruhl Libre;
    font-weight: 700;
    font-style: normal;
    color: #222;
    letter-spacing: .02em;
}

.overview-info p {
    font-family: Georama, Verdana, Helvetica, sans-serif;
    line-height: 21px;
    color: #3a3a3a;
    font-size: .875rem;
    font-weight: 400;
}

.overview-info ul {
    margin: 20px 0px;
    color: #27231d;
    font-family: Frank Ruhl Libre;
    font-size: 18px;
    line-height: 20px;
    padding: 0px;

}

.overview-info li {
    display: flex;
    align-items: center;
    margin: 10px 0px;
    line-height: 20px;
}

.overview-info-list-lines {
    flex: auto;
    height: 1px;
    background: #b4bbba;
    margin: 0 10px;
}

.property-cover-first-picture img {
    width: 748px;
    height: 500px;
    object-fit: cover;
    object-position: 50% 50%;
}
</style>