<template>
<b-container>
     <b-row>
          <b-card @click="highlightMarker()" class="my-2 mr-1">
               <b-img class="houseImg" :src="property.picture"></b-img>
               <b-badge pill v-if="property.condition == 'bank-owned'" class="bankOwned">Bank Owned</b-badge>
               <b-badge pill v-if="property.condition == 'live'" class="livePill">Live Auction</b-badge>
               <b-badge pill v-if="property.condition == 'Reduced'" class="reducedPill">Reduced Price</b-badge>
               <div slot="footer" class="cardinfo">
                    <h6 class="addressText text-nowrap">{{property.address}}</h6>
                    <h4 class="price">{{property.price | formatBid}}</h4>
                    <div class="pull-right bedbathIcons">
                         <span>{{property.baths}} <i class="fas fa-bath"></i></span>
                         <span> {{property.beds}} <i class="fas fa-bed"> </i> | {{property.squareFoot}}</span>
                         <span clss="squareFeet"> sqft</span>
                         <i class="heartIcon fas fa-heart fa-2x float-right"></i>
                    </div>
               </div>
          </b-card>
     </b-row>
</b-container>
</template>

<script>
import {
     gmapApi
} from 'vue2-google-maps'
export default {
     data() {
          return {
               info: null
          }
     },
     props: ["property", "propertyIndex"],

     methods: {
          highlightMarker() {
               var markers = this.$store.getters.getMapMarkers;
               var myData = this.$store.getters.getPropertyList;
               var currentIndex = this.propertyIndex;
              this.$root.markers[currentIndex].$markerObject.setAnimation(google.maps.Animation.BOUNCE)
          },
     },
     computed: {
          google: gmapApi
     }

}
</script>

<style scoped>
.squareFeet {
     font-weight: bold;
     font-size: .5rem;
}

.fa-heart {
     color: white;
     text-align: right;
     color: #74be02;
     font-weight: 500;
}

.heartIcon:hover {
     font-weight: 800;
     color: rgb(255, 132, 132);
}

.card-body {
     z-index: 100;
     /* This is for the heart hover effect. Without this hover does not work for the heart icon. */
     pointer-events: none;
     padding: 0;
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
     overflow: hidden;
     -webkit-box-shadow: 0px 0px 14px -8px rgba(0, 0, 0, 0.5);
     -moz-box-shadow: 0px 0px 14px -8px rgba(0, 0, 0, 0.5);
     box-shadow: 0px 0px 14px -8px rgba(0, 0, 0, 0.5);
     border-bottom-left-radius: .3rem;
     border-bottom-right-radius: .3rem;
}

.houseImg {
     height: 255px;
}

@media (min-width:2000px) {
     .houseImg {
          height: 305px;
     }
}

@media (max-width:575px) {
     .houseImg {
          height: 230px;
     }
}

.bankOwned {
     color: white;
     background-color: rgb(252, 208, 86);
     position: absolute;
     top: 2%;
     left: 2%;
}

.livePill {
     color: white;
     background-color: rgb(95, 218, 95);
     position: absolute;
     top: 2%;
     left: 2%;
}

.reducedPill {
     color: white;
     background-color: rgb(255, 132, 132);
     position: absolute;
     top: 2%;
     left: 2%;
}

.cardinfo {
     color: black;
}

.price {
     display: inline;
     color: #74be02;
     font-family: 'Roboto', sans-serif;
}

h6.addressText {
     text-overflow: ellipsis;
     overflow: hidden;
}
</style>
