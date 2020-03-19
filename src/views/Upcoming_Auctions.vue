<template>
<b-container fluid>
    <b-row>
        <b-col cols="12">
            <h1 class="mt-5 mb-3 page_title text-center ">UPCOMING AUCTION EVENTS</h1>
            <b-row>
                <b-col cols="12" sm="10" offset-sm="1">

                    <!-- Old Nav. Delete later -->
                    <!-- <b-nav>
                        <b-nav-item @click="getData(1)" active-class="active">Today</b-nav-item>
                        <b-nav-item @click="getData(7)" active-class="active">Next Week</b-nav-item>
                        <b-nav-item @click="getData(14)" active-class="active">Next 2 Weeks</b-nav-item>
                    </b-nav> -->
                    <div class="filter-bar">
                        <div class="selectedWeek">
                            <i @click="getData(-1)" class="arrow fas fa-arrow-left"></i>
                            <span> {{ formatDate(selectedWeek) + " - " + formatDate(weekAfterSelected) + " " }}</span>
                            <i @click="getData(1)" class="arrow fas fa-arrow-right"></i>
                        </div>
                        <b-dropdown id="conditionDropdown" text="Condition" variant="outline" class="m-2 ">
                            <b-form-checkbox class="ml-2" id="allConditions" @change="toggleAll" v-model="allConditions">
                                All
                            </b-form-checkbox>
                            <b-form-group class="ml-2">
                                <b-form-checkbox-group v-model="selectedFilters" :options="options" stacked></b-form-checkbox-group>
                            </b-form-group>
                        </b-dropdown>
                    </div>
                    <hr>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" sm="12" md="12" lg="10" offset-lg="1">
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
                        <b-col v-else-if="!showLoad" class="mb-4" v-for="(property, index) in listOfProperties" :key="index" cols="12" md="6">
                            <b-card overlay img-src="/img/jolene-hardy-18952-unsplash.jpg" class="upcomingCards" img-left img-alt="Image">

                                <i class="heartIcon fas fa-heart fa-2x"></i>
                                <div slot="footer">
                                    <div class="cardinfo">
                                        <h6 class="addressText text-nowrap">{{property.propertyAddress}}</h6>
                                        <h6 v-show="property.propertyCity || property.propertState" class="addressText text-nowrap">{{property.propertyCity + "," + property.propertyState}}</h6>
                                        <h6 v-show="property.openingBid > 0"><span class="startingBidText">Open Bid: </span><span class="bidAmount">{{property.openingBid | formatBid}}</span></h6>
                                        <h6 v-show="property.openingBid <= 0"><span class="startingBidText">Open Bid: </span><span class="bidAmount">TBD</span></h6>
                                        <h6 v-show="formatDate(property.auctionStart) != formatDate(property.auctionEnd)"><span class="addressText  text-nowrap">Auction Date: </span><span class="bidAmount">{{formatDate(property.auctionStart) + "-" + formatDate(property.auctionEnd)}}</span></h6>
                                        <h6 v-show="formatDate(property.auctionStart) == formatDate(property.auctionEnd)"><span class="addressText  text-nowrap">Auction Date: </span><span class="bidAmount">{{formatDate(property.auctionStart)}}</span></h6>
                                        <div class="bedbathIcons pull-right bedbathIcons" v-show="property.propertyBathrooms > 0 && property.propertyBedrooms > 0">
                                            <span>{{CleanUpBathNumber(property.propertyBathrooms)}} <i class="fas fa-bath"></i></span>
                                            <span> {{property.propertyBedrooms}} <i class="fas fa-bed"> </i> </span>
                                            <span v-show="property.propertyLotSize"> | {{property.propertyLotSize}} sqft</span>
                                        </div>
                                        <div class="propertyConditionPills">
                                            <b-badge v-show="property.isOccupied == ''" pill class="occupiedPill">Occupied</b-badge>
                                            <b-badge v-show="property.isOccupied == 'Unoccupied'" pill class="vacantPill">Vacant</b-badge>
                                            <b-badge v-show="property.auctionEventType == 'Online Only'" pill class="onlinePill">Online Only</b-badge>
                                            <b-badge v-show="property.auctionEventType == 'Live From The Lawn'" pill class="onlinePill">Online & Onsite</b-badge>
                                            <b-badge v-show="property.auctionEventType == 'On the Lawn'" pill class="onSitePill">Onsite Only</b-badge>
                                        </div>
                                    </div>
                                </div>
                            </b-card>

                            <!-- Old Card Layout -->
                            <!-- 
                            <b-card overlay img-src="/img/jolene-hardy-18952-unsplash.jpg" class="upcomingCards" img-left img-alt="Image">
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
                            </b-card> -->
                        </b-col>
                    </b-row>
                    <b-pagination class="my-5" v-model="currentPage" :total-rows="rows" :per-page="perPage" align="center">
                    </b-pagination>
                </b-col>

                <!-- Ad Images from Auction Network -->
                <!-- <b-col class="mt-5" cols="6" offset="3" lg="3" offset-lg="0" xl="3">
                    <b-img class="text-center rounded shadow m-2" fluid src="/img/Upcoming_Auctions/AN-HomePage_Banner_FL_FtMyers_July2019.jpg"></b-img>
                    <b-img class="rounded shadow mt-2 m-2" fluid src="/img/Upcoming_Auctions/AN-HomePage_Banner_HUD_BuyNOW_v1.jpg"></b-img>
                    <b-img class="rounded shadow mt-2 m-2" fluid src="/img/Upcoming_Auctions/AN-HomePage-VideoOnDemand.png"></b-img>
                </b-col> -->
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
            currentDateForNav: null,
            selectedWeek: new Date(),
            weekSelectedEnd: null,
            selectedFilters: ['On the Lawn'],
            allConditions: true,
            options: ['Occupied', 'Vacant', 'Online & Onsite', 'Onsite Only', 'Online Only']
        }
    },
    components: {
        appCard: card
    },
    created() {
        this.getData();

    },
    computed: {
        rows() {
            return this.propertyData.length;
        },
        listOfProperties() {
            let v = this
            const items = this.propertyData.filter(function(property){
                if(v.selectedFilters.length > 1){
                    return (v.checkSelectedConditions(v.selectedFilters,property.auctionEventType)) && (v.checkSelectedConditions(v.selectedFilters,property.isOcuppied))
                }
                if(v.selectedFilters.length == 1){
                    return (v.checkSelectedConditions(v.selectedFilters,property.auctionEventType)) || (v.checkSelectedConditions(v.selectedFilters,property.isOcuppied))
                }
                if(!v.selectedFilters.length) {     
                    return property
                }
            });
            return items.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
        },

        weekAfterSelected() {
            const date = this.selectedWeek;
            const endDate = new Date(date);
            endDate.setDate(date.getDate() + 7);
            this.weekSelectedEnd = endDate
            return endDate
        },
        
    },
    watch: {
        selected(newVal, oldVal) {
            // Handle changes in individual  checkboxesss
            if (newVal.length === 0) {
                this.allConditions = false
            } else if (newVal.length === this.options.length) {
                this.allConditions = true
            } else {
                this.allConditions = false
            }
        }
    },
    methods: {
        checkSelectedConditions(arr,val){
            return arr.some(arrVal => val == arrVal)
        },
        toggleAll(checked) {
            this.selected = checked ? this.options.slice() : []
        },
        navigateWeeks(numWeeks = 1) {
            const newDate = new Date(this.selectedWeek);
            newDate.setDate(newDate.getDate() + (7 * numWeeks));
            this.selectedWeek = newDate;
        },
        getData(days) {
            // Get the Date and convert to UTC
            var currentDate = new Date();
            var ISODate = new Date(currentDate).toISOString();
            this.showLoad = true;

            //initialize weekSelectedEnd & weekSelected so its available for post request.
            this.navigateWeeks(days);
            this.weekSelectedEnd = this.weekAfterSelected;
            axios
                .post('https://api-dev.auctionnetwork.com:83/api/v1/property/search/', {
                    startDate: this.selectedWeek,
                    endDate: this.weekSelectedEnd,
                })
                .then(response => {
                    this.noDataFound = false;
                    this.propertyData = response.data;
                    this.showLoad = false;
                    if (!this.propertyData[0]) {
                        this.noDataFound = true;
                    }
                })
                .catch(function (error) {
                    console.log(error)
                });

        },
        formatDate(date) {

            //converting UTC auction time to local time
            var auctionDate = new Date(date)

            // comparing the day in auctionDate to add the suffix thang
            var day = auctionDate.getDate();
            if (day > 3 && day < 21) {
                return auctionDate.toDateString().slice(3, 10) + "th";
            }
            switch (day % 10) {
                case 1:
                    return auctionDate.toDateString().slice(3, 10) + "st";
                case 2:
                    return auctionDate.toDateString().slice(3, 10) + "nd";
                case 3:
                    return auctionDate.toDateString().slice(3, 10) + "rd";
                default:
                    return auctionDate.toDateString().slice(3, 10) + "th";
            }

        },
        CleanUpBathNumber(baths) {
            // This methods cleans up bathrooms with decimals that arent .5
            if (baths % .5 != 0) {
                return Math.floor(baths)
            } else {
                return baths
            }

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/custom.scss';

#conditionDropdown {
    text-align: right;
    right: 10px;
    margin: auto 0;
}

.card-footer {
    flex-direction: column;
    justify-content: space-between;

}

.selectedWeek {
    margin: auto 0;
}

.filter-bar {
    display: flex;
    min-height: 50px;
    justify-content: space-between;
}

.dropdown-left {
    width: 100%;
}

.bedbathIcons {
    display: inline;
}

.bidAmount {
    font-weight: bold;
}

.arrow:hover {
    color: #74BF01;
    cursor: pointer;
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

.card-img-left {
    width: 50%;
    border-radius: 10px 0 0 10px;
}

::v-deep .custom-checkbox .custom-control-input:checked~.custom-control-label::after {
    background-color: #77C101 !important;
    border-radius: 5px;
}

::v-deep .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #77C101 !important;
    border-radius: 5px;
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

.card_bottom_icons {
    margin-bottom: 2px;
}

.occupiedPill {
    color: white;
    background-color: rgb(255, 104, 94);
    margin-left: 1px;
    margin-right: 2px;
    padding: 5px;
    -webkit-box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
}

.onlinePill {
    color: white;
    background-color: rgb(135, 223, 108);
    margin-left: 1px;
    margin-right: 2px;
    padding: 5px;
    -webkit-box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
}

.onSitePill {
    color: white;
    background-color: rgb(180, 148, 231);
    margin-left: 1px;
    margin-right: 2px;
    padding: 5px;
    -webkit-box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
}

.vacantPill {
    color: white;
    background-color: rgb(112, 203, 255);
    margin-left: 1px;
    margin-right: 2px;
    padding: 5px;
    -webkit-box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
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
    z-index: 10;
    position: absolute;
    bottom: 8px;
    left: 8px;
}

h6.addressText {
    text-overflow: ellipsis;
    overflow: hidden;

}

.card-body {
    padding: .5rem;

}

.card-footer:last-child {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    background-color: white;
    border-radius: 0 10px 10px 0;
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
