<template>
<b-container fluid>
     <div>
          <b-navbar>
               <b-nav-form>
                    <gmap-autocomplete @place_changed="setPlace" class="form-control"></gmap-autocomplete>
               </b-nav-form>
               <div class="flexRight">
                    <b-form-select class="mx-2 selectionBox" v-model="priceSelected" :options="priceOptions"></b-form-select>
                    <b-form-select class="mx-2 selectionBox" v-model="bedsSelected" :options="bedOptions"></b-form-select>
                    <b-form-select class="mx-2 selectionBox" v-model="bathsSelected" :options="bathOptions"></b-form-select>
               </div>
          </b-navbar>
     </div>
     <b-row>
          <b-col lg="5" 2xl="7" 3xl="8" class="mapSide">
               <google-map :searchProp="searchinput" v-bind:propertyData="propertyData" />
          </b-col>
          <b-col md="12" lg="7" 2xl="5" 3xl="4" class="resultsSide">
               <b-row>
                    <b-col cols="12" sm="6" md="4" lg="6" class="resultsCols" v-for="(property, index) in propertyData" :key="index">
                         <app-card :propertyIndex="index"  :property="propertyData[index]"></app-card>
                    </b-col>
                    <b-col cols="12">
                         <div v-if="noData" class="noResults">
                              No results found.
                         </div>
                         <div>
                              <app-footer></app-footer>
                         </div>
                    </b-col>
               </b-row>
          </b-col>
     </b-row>
</b-container>
</template>

<script>
import GoogleMap from '../../GoogleMaps/googlemap.vue'
import footer from "../../components/footer.vue"
import card from "../../components/card.vue"
import houses from "../../components/Json/Houses.json"
import {EventBus} from "../../main.js"
import axios from "axios"

export default {
     data() {
          return {
               searchinput: "",
               propertyData: houses,
               noData: false,
               bedsSelected: null,
               bathsSelected: null,
               priceSelected: null,
               bedOptions: [{
                         text: "Beds",
                         value: null
                    },
                    {
                         text: "Beds: 1",
                         value: "1"
                    },
                    {
                         text: "Beds: 2",
                         value: "2"
                    },
                    {
                         text: "Beds: 3",
                         value: "3"
                    },
                    {
                         text: "Beds: 4",
                         value: 4
                    }
               ],
               bathOptions: [{
                         text: "Baths",
                         value: null
                    },
                    {
                         text: "Baths: 1",
                         value: "1"
                    },
                    {
                         text: "Baths: 2",
                         value: "2"
                    },
                    {
                         text: "Baths: 3",
                         value: "3"
                    },
                    {
                         text: "Baths: 4",
                         value: "4"
                    }
               ],
               priceOptions: [{
                         text: "Price",
                         value: null
                    },
                    {
                         text: "$100,000",
                         value: 100000
                    },
                    {
                         text: "$200,000",
                         value: 200000
                    },
                    {
                         text: "$300,000",
                         value: 300000
                    },
                    {
                         text: "$400,000",
                         value: 400000
                    },
                    {
                         text: "$500,000",
                         value: 500000
                    },
                    {
                         text: "$600,000",
                         value: 6000000
                    },
                    {
                         text: "$700,000",
                         value: 700000
                    },
                    {
                         text: "$800,000",
                         value: 8000000
                    }
               ]
          }
     },
     components: {
          appFooter: footer,
          appCard: card,
          GoogleMap,
     },
     computed: {

     },
     created(){
          this.setStoreProperties()
     },
     methods: {
          testThing(){
               console.log("test")
          },
             setStoreProperties() {
               this.$store.commit("setPropertyList", this.propertyData)
          },
          getData(place) {
               var citySearch;
               var countySearch;
               var stateSearch;
               var zipSearch;
               var addressSearch;

               switch (place.address_components.length) {
                    case 2:
                         stateSearch = place.address_components[0].short_name;
                         break;
                    case 3:
                         var rawCountySearch = place.address_components[0].short_name;
                         countySearch = rawCountySearch.replace(/ County/g, "");
                         stateSearch = place.address_components[1].short_name;
                         break;
                    case 4:
                         citySearch = place.address_components[0].long_name;
                         countySearch = place.address_components[1].short_name;
                         stateSearch = place.address_components[2].short_name;
                         break;
                    case 5:
                         zipSearch = place.address_components[0].short_name;
                         citySearch = place.address_components[1].long_name;
                         countySearch = place.address_components[2].short_name;
                         stateSearch = place.address_components[3].short_name;
                         break;
                    default:
                         addressSearch = place.address_components[0].short_name + " " + place.address_components[1].short_name;
                         citySearch = place.address_components[2].long_name;
                         stateSearch = place.address_components[3].short_name;

               }
               console.log(place)
               // axios
               //     .post('http://localhost:83/api/v1/property/search/', {
               //         city: citySearch,
               //         county: countySearch,
               //         zip: zipSearch,
               //         state: stateSearch,
               //         address: addressSearch
               //     })
               //     .then(response => {
               //         this.propertyData = response.data;
               //         if (this.propertyData.length == 0) {
               //             this.noData = true;
               //         }
               //         else {
               //             this.noData = false;
               //         }
               //         console.log(this.propertyData)
               //     })
               //     .catch(function (error) {
               //         console.log(error)
               //     });
          },
          setPlace(place) {
               this.getData(place);
          },

     }
}
</script>

<style lang="scss" scoped>
@import '../../assets/custom';

.form-control {
     width: 80%;
}

.form-inline {
     flex-flow: nowrap;
}

@media (max-width:990px) {
     .mapSide {
          display: none;
     }
}

.mapSide,
.resultsSide {
     /* width: 100vw; */
     height: 87.9vh;
     overflow-y: scroll;
     background: white;
     padding-left: 0px;
     padding-right: 0;

}

.resultsSide {
     overflow-y: auto;
     padding-left: 15px;
     padding-right: 15px;
}

body {
     background-color: #F6F6F6;
     box-sizing: border-box;
     height: 100%;
}

.selectionBox {
     width: 15%;
}

@media (max-width:1100px) {
     .selectionBox {
          width: 20%;
     }
}

@media (min-width:1300px) {
     .selectionBox {
          width: 10%;
     }
}

.flexRight {
     width: 100%;
     display: flex;
     justify-content: flex-end;
     align-items: flex-end;
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
