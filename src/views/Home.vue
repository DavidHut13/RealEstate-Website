<template>
<div>
    <div class="background">
        <b-container>
            <b-row>
                <b-col cols="10" offset="1" md="6" offset-md="3">
                    <h1 class="Brand-Slogan">Buy. Sell. Live.</h1>
                    <b-input-group class="search">
                        <gmap-autocomplete @place_changed="setPlace" class="form-control"></gmap-autocomplete>
                        <b-button @click="pushUserToPage" id="searchBtn" variant="outline"><i class="fas fa-search"></i></b-button>
                    </b-input-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
    <b-container>
        <!-- Upcoming Events Carousel -->
        <b-col cols="4" sm="8" class="mt-5">
            <h2 class="LiveTitle">Luxury Properties</h2>
        </b-col>
        <b-row>
            <b-col cols="12" class="mb-5">
                <carousel :responsive="{0:{items:1},600:{items:2},900:{items:3},1200:{items:4}}"  :nav="false" :items="5">
                    <div class="m-2" v-for="(house,index) in luxuryData" :key="index">
                        <app-card :propertyIndex="index" :property="house"></app-card>
                    </div>
                </carousel>
            </b-col>
        </b-row>

        <!-- Live Events Carousel -->
        <b-col cols="4" sm="8" class="mt-5">
            <h2 class="LiveTitle">Nearby Auctions</h2>
        </b-col>
        <b-row>
            <b-col cols="12" class="mb-5">
                <carousel :responsive="{0:{items:1},600:{items:2},900:{items:3},1200:{items:4}}" :nav="false" :items="5">
                    <div class="m-2" v-for="(house,index) in nearbyData" :key="index">
                        <app-card :propertyIndex="index" :property="house"></app-card>
                    </div>
                </carousel>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import luxHouses from "../components/Json/Luxury.json"
import nearHouses from "../components/Json/Nearby.json"
import card from "../components/card.vue"
export default {
    data() {
        return {
            slide: 0,
            sliding: null,
            userSearch: null,
            currentPlace: null,
            luxuryData:luxHouses,
            nearbyData: nearHouses
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        pushUserToPage() {
            this.$router.push({
                path: 'buy'
            })
        },
        setPlace(place) {

            this.$store.dispatch('commitCurrentPlace', {
                place
            });
        }
    },
    components: {
        appCard: card,
         carousel
    },
}
</script>

<style scoped>
.background {
    background-image: url("/img/Home/backyard-lights-property-32870.jpg");
    height: 100vh;
    display: flex;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    justify-content: center;
    z-index: 1;

}

/* Search Bar Style */
.form-control {
    margin: auto;
    width: 80%;
    border-radius: .3rem;

}

.Brand-Slogan {
    color: white;
    text-align: center;
    font-size: 7vh;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;

}

#searchBtn {
    color: white;
    border-color: white;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.btn-outline:hover {
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
}

.form-control:focus {
    box-shadow: 0px 0px 4px 2px rgba(116, 191, 1, 0.72);
    -webkit-box-shadow: 0px 0px 4px 2px rgba(116, 191, 1, 0.72);
    -moz-box-shadow: 0px 0px 4px 2px rgba(116, 191, 1, 0.72);
}

.input-group-append>.btn.btn-outline:focus {
    -webkit-box-shadow: 0px 0px 19px 0px rgba(115, 191, 1, 1);
    -moz-box-shadow: 0px 0px 19px 0px rgba(115, 191, 1, 1);
    box-shadow: 0px 0px 19px 0px rgba(115, 191, 1, 1);

}

/* Upcoming events main headeer text style */

.upcomingTitle {
    padding-top: 70px;
    padding-bottom: 10px;
    font-size: 34px;
    text-align: left;
    color: rgb(53, 52, 52);
    font-family: 'Roboto', sans-serif;
}

.LiveTitle {
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 34px;
    text-align: left;
    color: rgb(53, 52, 52);
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
}

h4.price {
    display: inline;
    color: #74BF01;
    font-family: 'Roboto', sans-serif;
}

.upcomingCards {}

.form-control {
    border: 1px solid white;
}

.fa-heart {
    color: white;
    text-align: right;
    color: #74BF01;
    font-weight: 500;
}

.heartIcon:hover {
    font-weight: 800;
    color: rgb(202, 7, 82);
}

.card-body {
    z-index: 100;
    /* This is for the heart hover effect. Without this hover does not work for the heart icon. */
    pointer-events: none;
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
    -webkit-box-shadow: 0px 0px 14px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -9px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 14px -9px rgba(0, 0, 0, 0.75);
}

.card-footer {
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
}

.upcomingCards>.card-img {
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.card {
    border: none;
    font-family: 'Roboto', sans-serif;
}

button.btn.m-3.learnMorebtn.btn-lg.btn-secondary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem #96e6a1;
    box-shadow: 0 0 0 0.2rem #96e6a1;
}

.btn-secondary:focus,
.btn-secondary.focus {
    -webkit-box-shadow: 0 0 0 0.2rem #96e6a1;
    box-shadow: 0 0 0 0.2rem #96e6a1;
}

.btn:focus {
    -webkit-box-shadow: 0 0 0 0.2rem #96e6a1;
    box-shadow: 0 0 0 0.2rem #96e6a1;
}

.cardinfo {
    color: black;
}
</style>
