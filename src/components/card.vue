<template>
<b-container>
    <b-row>
        <b-card overlay img-src="/img/jolene-hardy-18952-unsplash.jpg" class="upcomingCards" img-alt="Image">
            <b-card-text>
                <b-badge pill class="bankOwned">Bank Owned</b-badge>
            </b-card-text>
            <div slot="footer">
                <div class="cardinfo">
                    <h6 class="addressText text-nowrap">{{propertyData.propertyAddress}}</h6>
                    <h4 class="price">$310,410.00</h4>
                    <div class="pull-right bedbathIcons">
                        <span>{{propertyData.propertyBathrooms}} <i class="fas fa-bath"></i></span>
                        <span> {{propertyData.propertyBedrooms}} <i class="fas fa-bed"> </i>  | {{propertyData.propertyLotSize}} </span>
                        <i class="heartIcon fas fa-heart fa-2x float-right"></i>
                    </div>
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
}

.card {
    border-radius: .75rem;
}

.liveOnline {
    background-color: rgb(95, 218, 95);
}

.liveOnLocation {
    background-color: rgb(47, 173, 22);
}

.bankOwned {
    color: white;
    background-color: rgb(252, 208, 86);
}

.cardinfo {
    color: black;
}

h6.addressText{
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
