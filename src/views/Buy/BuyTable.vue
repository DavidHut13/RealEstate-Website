<template>
<div>
    <b-container class="my-5">
        <b-row>
            <b-col cols="12">
                <h1 slot="header" class="text-center page_title my-3">ALL REAL ESTATE AUCTIONS</h1>
                <b-card class="allRealEstateCard">
                    <!-- <b-card-text>
                        <h5 class="top_card_text">Residential, Commercial, Farm, Ranch & Land and Luxury Home Auctions by State</h5>
                        <p>Auction Network conducts real estate auctions worldwide. You can view auction listings in a gallery format or on a map by clicking the indicated view mode. You can also view property details for a specific property by selecting an address under the properties dropdown menu associated with each state.</p>
                    </b-card-text> -->
                     <h4 slot="header" class="text-center card_title">Live Online & Live On Location Auctions</h4>
                    <b-row>
                        <b-col>
                            <b-table small borderless :items="items" :fields="fields">
                                <template slot="view">
                                    <b-button to="/buy" class="view_btn" size="sm" variant="outline-success" >view</b-button>
                                </template>
                            </b-table>
                        </b-col>
                        <b-col>
                            <b-table small borderless :items="items" :fields="fields">
                                <template slot="view">
                                    <b-button to="/buy" class="view_btn" size="sm" variant="outline-success" >view</b-button>
                                </template>
                            </b-table>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
    name: "BuyTable",
    data() {
        return {
            States: [],
            fields: [
                 {
                    sortable:false,
                    key: 'view',
                    label: '',
                    class: 'text-center'
                   
                },
                {
                    key: 'state',
                    label: 'State',
                    sortable: true
                },
                {
                    key: 'live',
                    label: 'Properties',
                    sortable: true,
                    class: 'text-center'
                },
               
                
            ],
            items: [{
                    isActive: true,
                    state: 'Alabama',
                    live: 5,
                },
                {
                    isActive: false,
                    state: 'Arkansas',
                    live: 8,
                },
                {
                    isActive: false,
                    state: 'Connecticut',
                    live: 13,
                },
                {
                    isActive: true,
                    state: 'Florida',
                    live: 30,
                },
                {
                    isActive: true,
                    state: 'Illinois',
                    live: 3,
                },
                {
                    isActive: true,
                    state: 'Indiana',
                    live: 1,
                },
                {
                    isActive: true,
                    state: 'Iowa',
                    live: 50,
                },
                {
                    isActive: true,
                    state: 'Kansas',
                    live: 19,
                },
                {
                    isActive: true,
                    state: 'Kentucky',
                    live: 5,
                },
                {
                    isActive: true,
                    state: 'Maine',
                    live: 4,
                },
                {
                    isActive: true,
                    state: 'Massachusetts',
                    live: 7,
                },
                {
                    isActive: true,
                    state: 'Michigan',
                    live: 5,
                },
                {
                    isActive: true,
                    state: 'Mississippi',
                    live: 7,
                },
                {
                    isActive: true,
                    state: 'Missouri',
                    live: 3,
                },
                {
                    isActive: true,
                    state: 'New Jersey',
                    live: 2,
                },
                {
                    isActive: true,
                    state: 'New York',
                    live: 5,
                },
                {
                    isActive: true,
                    state: 'North Carolina',
                    live: 3,
                },
                {
                    isActive: true,
                    state: 'Ohio',
                    live: 0,
                },
                // {
                //     isActive: true,
                //     state: 'Oklahoma',
                //     live: 2,
                // },
                // {
                //     isActive: true,
                //     state: 'Pennsylvania',
                //     live: 49,
                // },
                // {
                //     isActive: true,
                //     state: 'Puerto Rico',
                //     live: 259,
                // },
                // {
                //     isActive: true,
                //     state: 'South Carolina',
                //     live: 2,
                // },
                // {
                //     isActive: true,
                //     state: 'Tennesse',
                //     live: 19,
                // },
                // {
                //     isActive: true,
                //     state: 'Texas',
                //     live: 20,
                // },
                // {
                //     isActive: true,
                //     state: 'Virginia',
                //     live: 10,
                // },
                // {
                //     isActive: true,
                //     state: 'Washington',
                //     live: 13,
                // },
                // {
                //     isActive: true,
                //     state: 'West Virginia',
                //     live: 2,
                // },
                // {
                //     isActive: true,
                //     state: 'Wyoming',
                //     live: 30,
                // }
            ]

        }
    }

}
</script>

<style scoped>
.card.allRealEstateCard {
    -webkit-box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    border: none;

}

.card-header:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.top_card_text{
    color:green;
    font-weight: bold;
}

.background {
    background-image: url("/img/blue-brick-wall-chair-1282315.jpg");
    height: 100vh;
    display: flex;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.green_link {
    color: #7EC601;
}

.card_title {
    font-family: 'Heebo', sans-serif;
}
.page_title{
   font-family: 'Heebo', sans-serif;
    font-weight:300;
    color:rgb(85, 84, 84); 
}

.live_count {
    color: #7EC601;
}

.card-header {
    color: white;
    border:none;
    background-image: linear-gradient(120deg, #bcec4b 0%, #86CB01 100%);
}
.view_btn:hover {
    background-color: #7EC601;
    border-color: #7EC601;
}

.card-body{
    padding-bottom:0;
}
</style>
