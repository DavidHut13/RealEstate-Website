<template>
<b-container>
     <b-row>
          <b-card class="my-2 mr-1">
               <b-img class="houseImg" :src="propertyData.picture"></b-img>
               <b-badge pill v-if="propertyData.condition == 'bank-owned'" class="bankOwned">Bank Owned</b-badge>
               <b-badge pill v-if="propertyData.condition == 'live'"  class="livePill">Live Auction</b-badge>
               <b-badge pill v-if="propertyData.condition == 'Reduced'"  class="reducedPill">Reduced Price</b-badge>
               <div slot="footer" class="cardinfo">
                    <h6 class="addressText text-nowrap">{{propertyData.address}}</h6>
                    <h4 class="price">{{propertyData.price | formatBid}}</h4>
                    <div class="pull-right bedbathIcons">
                         <span>{{propertyData.baths}} <i class="fas fa-bath"></i></span>
                         <span> {{propertyData.beds}} <i class="fas fa-bed"> </i> | {{propertyData.squareFoot}} </span>
                         <i class="heartIcon fas fa-heart fa-2x float-right"></i>
                    </div>
               </div>
          </b-card>
     </b-row>
</b-container>
</template>

<script>
export default {
     data() {
          return {
               info: null
          }
     },
     props: {
          propertyData: Object
     }

}
</script>

<style scoped>
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
     padding: 0;

}

.card {
     border: none;
     overflow: hidden;
     -webkit-box-shadow: 0px 0px 14px -8px rgba(0, 0, 0, 0.5);
     -moz-box-shadow: 0px 0px 14px -8px rgba(0, 0, 0, 0.5);
     box-shadow: 0px 0px 14px -8px rgba(0, 0, 0, 0.5);
}

.houseImg {
     height:255px;
}

@media (min-width:2000px){
    .houseImg {
         height:305px;
}
}

@media (max-width:575px){
    .houseImg {
         height:405px;
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
     background-color: rgb(252, 131, 116);
     position: absolute;
     top: 2%;
     left: 2%;
}

.cardinfo {
     color: black;
}
.price {
    display: inline;
    color: #74BF01;
    font-family: 'Roboto', sans-serif;
}

h6.addressText {
     text-overflow: ellipsis;
     overflow: hidden;
}
</style>
