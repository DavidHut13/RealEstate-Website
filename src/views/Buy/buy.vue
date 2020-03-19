<template>
<b-container fluid>
     <b-row>
          <b-col class="my-2" cols="12" sm="6">
               <b-nav-form class="searchInput">
                    <gmap-autocomplete @place_changed="setPlace" class="form-control searchInput"></gmap-autocomplete>
               </b-nav-form>
          </b-col>
          <b-col cols="12" sm="6">
               <div class="flexRight my-2">
                    <b-form-select class="mx-2 selectionBox" v-model="priceSelected" :options="priceOptions"></b-form-select>
                    <b-form-select class="mx-2 selectionBox" v-model="bedsSelected" :options="bedOptions"></b-form-select>
                    <b-form-select class="mx-2 selectionBox" v-model="bathsSelected" :options="bathOptions"></b-form-select>
               </div>
          </b-col>
     </b-row>
     <b-row>
          <b-col lg="5" 2xl="7" 3xl="8" class="mapSide">
               <google-map :searchProp="searchinput" v-bind:propertyData="filteredList" />
          </b-col>
          <b-col md="12" lg="7" 2xl="5" 3xl="4" class="resultsSide">
               <b-row v-if="filteredList.length > 0">
                    <b-col class="results" cols="12">
                         <p>Results: {{filteredList.length}}</p>
                    </b-col>
                    <b-col cols="12" sm="6" md="4" lg="6" class="resultsCols" v-for="(property, index) in filteredList" :key="index">
                         <app-card :propertyIndex="index" :property="property"></app-card>
                    </b-col>
               </b-row>
               <b-row v-if="filteredList.length == 0">
                    <b-col cols="12">
                         <div class="noResults">
                              <h5>No results found.</h5>
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
import GoogleMap from '../../components/googleMap.vue'
import footer from "../../components/footer.vue"
import card from "../../components/card.vue"
import houses from "../../components/Json/Houses.json"
import {
    EventBus
} from "../../main.js"
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
               filtersSelected: [],
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
                    },
                    {
                         text: "Beds: 5",
                         value: 5
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
                    },
                    {
                         text: "Baths: 5",
                         value: 5
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
                         value: 800000
                    }
               ]
          }
     },
     components: {
          appFooter: footer,
          appCard: card,
          GoogleMap,
     },
     created() {
          this.setStoreProperties()
     },
     computed: {
          filteredList() {
               let v = this
               this.filtersSelected = []
               if (this.priceSelected != null) {
                    this.filtersSelected.push(this.priceSelected)
               } else {
                    this.filtersSelected.push(0)
               }
               if (this.bedsSelected != null) {
                    this.filtersSelected.push(this.bedsSelected)
               } else {
                    this.filtersSelected.push(0)
               }
               if (this.bathsSelected != null) {
                    this.filtersSelected.push(this.bathsSelected)
               } else {
                    this.filtersSelected.push(0)
               }
               if ((this.bathsSelected == 0 && this.bedsSelected == 0 && this.priceSelected == 0)) {
                    const items = this.propertyData;
                    return items;
               } else {
                    var items = this.propertyData
                    if (v.filtersSelected[0] != null) {
                         var items = this.propertyData.filter(function (property) {
                              if ((v.filtersSelected[0] <= property.price) && (v.filtersSelected[1] <= property.beds) && (v.filtersSelected[2] <= property.baths)) {
                                   return true;
                              }
                         });
                    }
                    console.log(v.filtersSelected)
                    return items;
               }
          }
     },
     methods: {
            setPlace(place) {
            this.getData(place);
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
                return filteredProperties;
            }

        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/custom';

.results>p {
     font-weight: bold;
     font-size: .75rem;
     margin-bottom: 0;
     color: rgba(0, 0, 0, 0.586);
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
     margin-top: 5em;
     margin-bottom: 2em;
     color: #74be02;
     text-align: center;
     font-size: 1.5em;
     height: 28vh;
}
</style>
