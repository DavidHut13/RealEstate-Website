<template>
<b-container fluid>
    <b-row>
        <b-col cols="12">
            <h1 class="mt-5 mb-3 page_title text-center ">UPCOMING AUCTION EVENTS</h1>
            <b-row>
                <b-col cols="12" sm="7" offset-sm="1">
                    <b-nav>
                        <b-nav-item @click="getData(1)" active-class="active">Today</b-nav-item>
                        <b-nav-item @click="getData(7)" active-class="active">Next Week</b-nav-item>
                        <b-nav-item @click="getData(14)" active-class="active">Next 2 Weeks</b-nav-item>
                    </b-nav>
                    <hr>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" sm="12" md="10" offset-md="1" lg="8" offset-lg="1">
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage">
                    </b-pagination>
                    <b-row>
                        <b-col v-if="showLoad">
                            <div class="loadingScreen">
                                <div class="text-center">
                                    <b-spinner variant="success" label="Spinning"></b-spinner>
                                    <p class="loadingText ">Loading</p>
                                </div>
                            </div>
                        </b-col>
                        <b-col v-if="noDataFound && !showLoad">
                            <div class="loadingScreen">
                                <div class="text-center">
                                    <p class="loadingText ">No Homes Found.</p>
                                </div>
                            </div>
                        </b-col>
                        <b-col v-else-if="!showLoad" class="mb-4" v-for="(property, index) in listOfProperties" :key="index" cols="12" lg="6" xl="4" 3xl="3">
                            <b-card overlay img-src="/img/jolene-hardy-18952-unsplash.jpg" class="upcomingCards" img-alt="Image">
                                <b-card-text>
                                    <b-badge v-show="property.isOccupied" pill class="occupiedPill">Occupied</b-badge>
                                    <b-badge v-show="property.isOccupied == ''" pill class="vacantPill">Vacant</b-badge>
                                    <b-badge v-show="property.auctionEventType == 'Online Only'" pill class="onlinePill">Online Only</b-badge>
                                    <b-badge v-show="property.auctionEventType == 'Live From The Lawn'" pill class="onlinePill">Online & Onsite</b-badge>
                                    <b-badge v-show="property.auctionEventType == 'On the Lawn'" pill class="onSitePill">Onsite Only</b-badge>
                                </b-card-text>
                                <div slot="footer">
                                    <div class="cardinfo">
                                        <h6 class="addressText text-nowrap">{{property.propertyAddress}}</h6>
                                        <!-- <h6><span class="startingBidText">Starting At:</span><span class="bidAmount">{{ property.openingBid  > 0 ? property.openingBid : 'TBD' }}</span></h6> -->
                                        <h6 v-show="property.openingBid > 0"><span class="startingBidText">Starting At: </span><span class="bidAmount">{{property.openingBid | formatBid}}</span></h6>
                                        <h6 v-show="property.openingBid <= 0"><span class="startingBidText">Starting At: </span><span class="bidAmount">TBD</span></h6>
                                        <div class="pull-right bedbathIcons">
                                            <div class="bedbathIcons" v-show="property.propertyBathrooms > 0 && property.propertyBedrooms > 0">
                                                <span>{{property.propertyBathrooms}} <i class="fas fa-bath"></i></span>
                                                <span> {{property.propertyBedrooms}} <i class="fas fa-bed"> </i> | {{property.propertyLotSize}} </span>
                                            </div>
                                            <span v-show="property.propertyLotSize">{{property.propertyLotSize}} sqft</span>
                                            <i class="heartIcon fas fa-heart fa-2x float-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col class="mt-5" cols="6" offset="3" lg="3" offset-lg="0" xl="3">
                    <b-img class="ad_img text-center rounded shadow m-2" fluid src="/img/Upcoming_Auctions/AN-HomePage_Banner_FL_FtMyers_July2019.jpg"></b-img>
                    <b-img class="ad_img rounded shadow mt-2 m-2" fluid src="/img/Upcoming_Auctions/AN-HomePage_Banner_HUD_BuyNOW_v1.jpg"></b-img>
                    <b-img class="ad_img rounded shadow mt-2 m-2" fluid src="/img/Upcoming_Auctions/AN-HomePage-VideoOnDemand.png"></b-img>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import card from "../components/card.vue"
import axios from "axios"
export default {
    name: "Upcoming_Auctions",
    data() {
        return {
            show: false,
            propertyData: [],
            showLoad: true,
            noDataFound: false,
            currentPage: 1,
            perPage: 9,
        }
    },
    components: {
        appCard: card
    },
    created() {
        this.getData(1);
    },
    computed: {
        rows() {
            return this.propertyData.length;
        },
        listOfProperties() {
            const items = this.propertyData
            // Return just page of items needed

            return items.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
        },
    },
    methods: {
        getData(days) {
            var currentDate = new Date();
            var nextWeek = new Date();
            this.showLoad = true;
            nextWeek.setDate(nextWeek.getDate() + days)
            console.log(nextWeek)
            axios
                .post('http://localhost:83/api/v1/property/search/', {
                    currentDate: currentDate,
                    endDate: nextWeek
                })
                .then(response => {
                    this.noDataFound = false;
                    this.propertyData = response.data;
                    this.showLoad = false;
                    console.log(response)
                    console.log("This is the opening bid")
                    if (!this.propertyData[0]) {
                        this.noDataFound = true;
                    }
                })
                .catch(function (error) {
                    console.log(error)
                });

        },
        checklist() {
            console.log("this is the list:")

            console.log(this.listOfProperties)
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/custom.scss';

.card-header {
    padding: 0;
    padding-top: .5rem;
    margin: 0;
}

.bedbathIcons {
    display: inline;
}

.bidAmount {
    font-weight: bold;
}

.loadingScreen {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loadingText {
    color: #77C101;
}

.icon {
    color: #77C101;
}

.icon:hover {
    color: #bcec4b;
}

.forecast_title {
    font-weight: bold;
    font-size: 1.5em;
}

.bid_now_col {
    display: flex;
    justify-content: center;
    align-items: center;
}

.paginatione:active {
    background-color: black;
}

.bid_btn.card-img {
    width: 75%;
}

a.nav-link {
    color: rgb(85, 84, 84);
    border-radius: 0;
    border-bottom: 2px solid;
    border-color: transparent;

}

a.nav-link:hover {
    color: #bcec4b;

}

a.nav-link:focus {
    border-bottom: 2px solid;
    border-radius: 0;
    border-color: #bcec4b;
}

.card_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card_bottom_icons {
    margin-bottom: 2px;
}

.card-header {
    color: white;
    border: none;
    background-image: linear-gradient(120deg, #bcec4b 0%, #86CB01 100%);
}

.occupiedPill {
    color: white;
    background-color: rgb(247, 115, 54);
}

.onlinePill {
    color: white;
    background-color: rgb(26, 175, 13);
}

.onSitePill {
    color: white;
    background-color: rgb(10, 124, 19);
}
.vacantPill{
    color: white;
    background-color: rgb(16, 156, 238); 
}

.card,
.shadow {
    -webkit-box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    border: none;
}

.fa-heart:hover {
    font-weight: 800;
    color: rgb(202, 7, 82);
}

.fa-heart {
    color: white;
    text-align: right;
    color: #74BF01;
    font-weight: 500;
}

h6.addressText {
    text-overflow: ellipsis;
    overflow: hidden;
}

.card-body {
    z-index: 100;
    /* This is for the heart hover effect. Without this hover does not work for the heart icon. */
    pointer-events: none;
}

.page_title {
    font-family: 'Playfair Display', serif;
    font-weight: 300;
    color: rgb(85, 84, 84);
}

::v-deep .page-item.active .page-link {
    background-color: #74BF01 !important;
    border-color: #74BF01;
}

::v-deep .page-link:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(115, 191, 1, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(115, 191, 1, 0.25);
}

::v-deep .page-link {
    color: #74BF01;
}

::v-deep .page-item.disabled .page-link {
    color: #74BF01;

}
</style>
