<template>
<b-container fluid>
    <div>
        <b-navbar>
            <b-nav-form>
                <gmap-autocomplete @place_changed="setPlace" class="form-control"></gmap-autocomplete>
                <b-button size="sm" variant="outline-success" class="ml-3 my-2 my-sm-0">Search</b-button>
            </b-nav-form>
            <b-nav-item-dropdown size="sm" class="filterButtons" variant="outline-primary" text="Price">
                <b-dropdown-item></b-dropdown-item>
            </b-nav-item-dropdown>
            <b-button size="sm" class="filterButtons" variant="outline-primary">Beds</b-button>
            <b-button size="sm" class="filterButtons moreBtn" variant="outline-primary">Filter</b-button>
            <b-button size="sm" variant="outline-primary">More</b-button>
        </b-navbar>
    </div>
    <b-row>
        <b-col cols="7" class="mapSide">
            <google-map :searchProp="searchinput" v-bind:propertyData="propertyData"/>
        </b-col>
        <b-col cols="5" class="resultsSide">
            <b-row>
                <b-col lg="12" xl="6" class="resultsCols" v-for="(property, index) in propertyData" :key="index">
                    <app-card class="card" v-bind:propertyData="propertyData[index]"></app-card>
                </b-col>
            </b-row>
            <b-row>
                <div v-if="noData" class="noResults">
                    No results found.
                </div>
                <div>
                    <app-footer></app-footer>
                </div>
            </b-row>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import GoogleMap from '../../GoogleMaps/googlemap.vue'
import footer from "../../components/footer.vue"
import card from "../../components/card.vue"
import {
    EventBus
} from "../../main.js"
import axios from "axios"

export default {
    data() {
        return {
            searchinput: "",
            propertyData: [],
            noData: false,
        }
    },
    components: {
        appFooter: footer,
        appCard: card,
        GoogleMap,
    },
    methods: {
        getData(place) {
            var citySearch;
            var countySearch;
            var stateSearch;
            var zipSearch;
            var addressSearch;

            switch(place.address_components.length) {
                case 2: stateSearch = place.address_components[0].short_name;
                    break;
                case 3: var rawCountySearch = place.address_components[0].short_name;
                        countySearch = rawCountySearch.replace(/ County/g, "");
                        stateSearch = place.address_components[1].short_name;
                    break;
                case 4: citySearch = place.address_components[0].long_name;
                        countySearch = place.address_components[1].short_name;
                        stateSearch = place.address_components[2].short_name;
                    break;
                case 5: zipSearch = place.address_components[0].short_name;
                        citySearch = place.address_components[1].long_name;
                        countySearch = place.address_components[2].short_name;
                        stateSearch = place.address_components[3].short_name;
                    break;
                default: addressSearch = place.address_components[0].short_name + " " + place.address_components[1].short_name;
                         citySearch = place.address_components[2].long_name;
                         stateSearch = place.address_components[3].short_name;
            }
            axios
                .post('http://localhost:83/api/v1/property/search/', {
                    city: citySearch,
                    county: countySearch,
                    zip: zipSearch,
                    state: stateSearch,
                    address: addressSearch
                })
                .then(response => {
                    this.propertyData = response.data;
                    if (this.propertyData.length == 0) {
                        this.noData = true;
                    }
                    else {
                        this.noData = false;
                    }
                    console.log(this.propertyData)
                })
                .catch(function (error) {
                    console.log(error)
                });
        },
        setPlace(place) {
            this.getData(place);
        },
    }
}
</script>

<style scoped>
.form-control {
    width: 80%;
}

.form-inline{
    flex-flow:nowrap;
}
.mapSide,
.resultsSide {
    /* width: 100vw; */
    height: 100vh;
    overflow-y:scroll;
    background: white;
    padding-left: 0px;
    padding-right: 0;
}

.resultsSide {
    -webkit-box-shadow: -9px 0px 14px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -9px 0px 14px -8px rgba(0, 0, 0, 0.75);
    box-shadow: -9px 0px 14px -8px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    overflow-y: auto;
    padding-left: 15px;
    padding-right: 15px;
}

#map {
    width: 100%;
    height: 100%;
}

body {
    background-color: #F6F6F6;
    box-sizing: border-box;
    height: 100%;
}

.card {
    margin-top: 10px;
    border: none;
}

.filterButtons {
    margin-left: 15px;
    margin-right: 15px;
    padding-left: 30px;
    padding-right: 30px;

}

.navbar.navbar-light {
    border-top: 1px solid #e9e7e7;
}

.resultsCols {
    padding-right: 5px;
    padding-left: 5px;
    justify-content: spac;
}

.noResults {
    width: 100%;
    margin-top: 2em;
    margin-bottom: 2em;
    color: #74be02;
    text-align: center;
    font-size: 1.5em;
}
</style>
