<template>
<b-container>
    <b-row>
        <b-col cols="12">
            <h1 class="mt-5 mb-2 page_title text-center">AUCTION 101</h1>
             <b-col cols="8" offset="2">
                <hr>
            </b-col>
            <b-row>
                <b-col cols="12" md="6" class="mt-5">
                    <p>Auctioneers may control the bidding during the auction, but at Auction Network you control the bidding experience. Choose from a plethora of real estate opportunities each month through Live On Location auctions, Live Online listings...or both simultaneously. The monthly Live On Location broadcasts provide a platform for Internet viewers to bid in real-time from any remote location on properties offered on a lawn by Williams & Williams. Or place absentee bids when busy schedules tie you up. Each broadcast is augmented with an in-studio host, property previews, news on upcoming opportunities and up-to-the-moment announcements to keep bidders abreast of developments.</p>
                </b-col>
                <b-col cols="12" md="6" class="mt-5">
                    <p>With Live Online, choose from properties made available only to our Internet bidders. Bidders vie to have the high bid when the auctions expire. Using widgets, place bids on multiple auctions at the same time and stay connected with live countdowns and real-time reminders from the broadcast host. And to make your bidding process even easier, you can view both types of auctions (Live On Location and Online Only) at the same time on your screen. No jumping from screen to screen to see how your bids are holding up.</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="mt-5">
                    <h1>Before Auction</h1>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    <b-button variant="outline" @click="before_auction_selection=0" class="my-2 before_btn">Finding The Right Property</b-button>
                    <b-button variant="outline" @click="before_auction_selection=1" class="my-2 before_btn">Review Disclosures, Terms & Conditions</b-button>
                    <b-button variant="outline" @click="before_auction_selection=2" class="my-2 before_btn">Perform Inspections & Appraisals</b-button>
                    <b-button variant="outline" @click="before_auction_selection=3" class="my-2 before_btn">Determine Your Budget</b-button>
                    <b-button variant="outline" @click="before_auction_selection=4" class="my-2 before_btn">Get Your Financing Together</b-button>
                    <b-button variant="outline" @click="before_auction_selection=5" class="my-2 before_btn">Know the sales date, time & location</b-button>

                </b-col>
                <b-col cols="8">
                    <p>
                        {{before_auction_para[before_auction_selection]}}
                    </p>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="mt-5">
                    <h1>On Auction Day</h1>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    <b-button variant="outline" @click="auction_day_selection=0" class="my-2 before_btn">30-60 minutes before bidding begins</b-button>
                    <b-button variant="outline" @click="auction_day_selection=1" class="my-2 before_btn">5-10 minutes before bidding begins</b-button>
                    <b-button variant="outline" @click="auction_day_selection=2" class="my-2 before_btn">Auction Time!</b-button>
                    <b-button variant="outline" @click="auction_day_selection=3" class="my-2 before_btn">After bidding ends</b-button>
                    <b-button variant="outline" @click="auction_day_selection=4" class="my-2 before_btn">After auction day through closing</b-button>
                </b-col>
                <b-col cols="8">
                    <p>
                        {{auction_day_para[auction_day_selection]}}
                    </p>
                </b-col>
            </b-row>
            <router-link class="learn_link " to="/faq">
                <h2 class="learn_more text-right my-5">Frequently Asked Questions <i class="orange fas fa-arrow-circle-right"></i></h2>
            </router-link>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "auction_101",
    data() {
        return {
            choice: [],
            before_auction_para: ['You can do this right here by clicking on "Upcoming Auctions" or "Buy" at the top of this page. Browse our available inventory and refine your search until you find exactly what suits you. If you are interested in a specific property, enter the address into the search bar at the top of the page. We recommend you become an auctionnetwork.com member so that you may save your searches and favorite properties in “My Account” for easy reference later. When you become a member, you can also sign up to receive auction alerts when properties that match your interests are added to our inventory.',
                'You can find the terms and conditions for the sale and disclosures for the property on each property details page.',
                'All properties available for bid are sold “As Is, Where Is,” meaning financing cannot be contingent on inspections or appraisals. We encourage you to perform your research. Most properties will have open public inspection periods and we recommend you perform any inspections or have the property appraised before auction day. The dates and times for public inspection are listed on each property\'s detail page.',
                'The amount you wish to spend is entirely up to you, and is one of the marvelous things about the auction method. Auction reveals the true value of a property, a value set by those who are interested in buying it and who compete against one another for the right to own it.',
                'All Williams & Williams sales are "As Is, Where Is" which means they are sold without any contingencies, including inspections and financing. With this in mind, you should have your financing lined up before you bid. Unless otherwise stated, all Williams & Williams sales close within 30 days. If you are in need of financing, click here for a list of lenders with experience in the auction process.',
                'The sale date, time and location are clearly stated on each property details page. Most auctions take place on-site at the property itself or at a nearby property, or are available for bidding from anywhere through Auction Network. Some properties may be auctioned through our Online Only platform.'
            ],
            auction_day_para: ['If you plan to participate in the auction in person, you\'ll want to arrive about an hour before the auction is scheduled to begin. Most properties are open for final inspection up to two hours before auction time. To bid on site, bring a valid driver\'s license and complete the brief registration form. You can also download the registration form from the property details page, complete it and bring it with you on auction day. You will still need to show your valid driver\'s license as proof of identification. The process only takes a few minutes. You will receive a yellow bidder card for use during the auction. To bid via Auction Network, please refer to the bidder registration instructions at the property details page. Some auctions may require a bidder deposit to be made in advance of the auction. This information will be clearly spelled out when you register.',
                'Our auctioneer and auction team will begin setting up and preparing for the auction. You will notice other bidders and spectators begin to gather and assemble, readying themselves for the action.',
                'The auctioneer will address the audience on-site and participating on Auction Network, read the terms and conditions for that particular auction, as well as any disclosures for the property. The auctioneer will introduce the auction team which includes ringmen, who act as facilitators between you and the auctioneer. It\'s important to know that the auctioneer controls the auction at all times. Williams & Williams auctioneers are the most experienced and talented in the business. If you have a question or concern related to the auction, please address it to the auctioneer.',
                'Once the auctioneer feels that everyone is ready for the auction to begin, it\'s time to start bidding. The auctioneer will call for bids until he/she determines no one has any further bids to make. All registered participants have an opportunity to bid. The auctioneer will end the auction and declare "High bidder!" After the high bidder has officially been declared by the auctioneer, the high bidder will sign a high bidder acknowledgment form. This form confirms the property bid on, as well as the amount of the high bid. The high bidder will take this form to the contracting area to sign the contract and pay the earnest deposit.',
                'Once the auction has concluded the high bidder completes a contract to be filed with Williams & Williams. At this time we will collect your earnest money, which is generally either 5% or 10% of your bid (subject to a minimum). See individual property Terms of Sale for details. Earnest money can be paid on site using cash or a personal or certified check. Earnest money paid via Auction Network can be by credit card or wired funds.',
                'If you are the high bidder, you will hear from a Williams & Williams representative who will outline the next steps in the purchase process. At anytime during the process, your designated closing manager will answer any questions you may have and will keep you apprised of the status of your purchase. Once you\'ve closed, you will receive keys to your new property!'

            ],
            before_auction_selection: 0,
            auction_day_selection: 0
        }
    }
}
</script>

<style scoped>
.before_btn {
    background: white;
    color: black;
    display: block;
    border: none;
}
button.before_btn{
     border: 1px solid white;
}
button.before_btn:hover,
button.before_btn:active,
button.before_btn:focus {
-webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.3);
-moz-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.3);
box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.3);

    background-color: white;
    color: black;
    border: 1px solid rgb(216, 216, 216);
}

.page_title {
    color: rgb(85, 84, 84);
    font-family: 'Playfair Display', serif;
}

h5,
h3,
p {
    font-family: 'Roboto', sans-serif;
}

h5,
h3 {
    font-weight: bold;
}

.step_num {
    font-size: 14vh;
    text-align: right;
}

.card-header {
    background-color: white;
    border-bottom: none;
}

.before_auction_card {
    border: none;
}

.step_section {
    display: flex;
    justify-content: center;
    align-items: center;
}

.learn_link:hover {
    text-decoration: none;
}

.learn_more {
    color: rgb(85, 84, 84);
    display: block;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
}

.orange {
    color: rgb(255, 138, 28);
}
</style>
