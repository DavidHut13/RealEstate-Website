<template>
<b-container>
    <b-row>
        <b-col cols="12">
            <h1 class="mt-5 mb-2 page_title text-center">FAQ</h1>
             <b-col cols="8" offset="2">
                <hr>
            </b-col>
            <b-row class="mb-5">

                <b-col cols="12" md="12" lg="6">
                    <h2 class="mt-5">General Auction</h2>
                    <b-card v-b-toggle="'collapse-1-'+index" @click="showInfo[index] = !showInfo[index]" v-for="(question,index) in general_auction_questions" :key="index" class="mt-4">
                        <h5 class="response_text">{{question}}</h5>

                        <i v-show="!showInfo[index]" class="my-1 arrow_down fas fa-arrow-down"></i>

                        <i v-show="showInfo[index]" class="my-1 arrow_down fas fa-times"></i>

                        <b-collapse :id="'collapse-1-'+index" v-model="showInfo[index]" class="mt-2">
                            <p>{{general_auction_answers[index]}}</p>
                        </b-collapse>
                    </b-card>
                </b-col>
           

                <b-col cols="12" md="12" lg="6">
                    <h2 class="mt-5">Live Online</h2>
                    <b-card v-b-toggle="'collapse-2-'+index" @click="showOnLocation[index] = !showOnLocation[index]" v-for="(question,index) in live_online_questions" :key="index" class="mt-4">
                        <h5 class="response_text">{{question}}</h5>

                        <i v-show="!showOnLocation[index]" class="my-1 arrow_down fas fa-arrow-down"></i>

                        <i v-show="showOnLocation[index]" class="my-1 arrow_down fas fa-times"></i>

                        <b-collapse :id="'collapse-2-'+index" v-model="showOnLocation[index]" class="mt-2">
                            <p>{{live_online_answers[index]}}</p>
                        </b-collapse>
                    </b-card>
                </b-col>
          

                <b-col cols="12" md="12" lg="6" >
                    <h2 class="mt-5">Live On Location</h2>
                    <b-card v-b-toggle="'collapse-3-'+index" @click="showInfo[index] = !showInfo[index]" v-for="(question,index) in live_on_location_questions" :key="index" class="mt-4">
                        <h5 class="response_text">{{question}}</h5>

                        <i v-show="!showInfo[index]" class="my-1 arrow_down fas fa-arrow-down"></i>

                        <i v-show="showInfo[index]" class="my-1 arrow_down fas fa-times"></i>

                        <b-collapse :id="'collapse-3-'+index" v-model="showInfo[index]" class="mt-2">
                            <p>{{live_on_location_answers[index]}}</p>
                        </b-collapse>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'faq',
    data() {
        return {
            num: 0,
            showGeneral: [],
            showOnline: [],
            showOnLocation: [],
            general_auction_questions: ['Can I inspect a property before the auction', 'What is a buyer\'s premium?', 'What is an auction service fee?', 'Do I get insurable title?', 'Can I use my own title company?', 'Is there a reserve price?', 'Can I use bank financing?', 'Do I need to use a real estate agent?', 'Will I know on site if my bid was accepted?', ' What does buyer\'s choice mean?', 'Is the down payment deposited?', 'Reserve Met/Not Met'],
            general_auction_answers: ['Yes. Most properties will have open public inspection periods and we recommend you perform any inspections or have the property appraised before auction day. The dates and times for public inspection are listed on each property\'s detail page. Additionally, properties are available for public viewing through licensed real estate brokers/agents and licensed, certified property inspectors upon registration of the viewing through our ProPortal website, accessible through the tab on top of the williamsauction.com home page.',
                'The buyer\'s premium (buyer\'s fee in Wisconsin) is paid by the buyer and used to compensate the real estate broker representing the buyer and/or the broker or auctioneer representing the seller.', 'The auction service fee is paid by the buyer and used to compensate the real estate broker representing the buyer and/or auctioneer.', 'Yes. Most properties are transferred by deed prepared by the seller (i.e. special, bargain and sale, quit claim, U.S. Marshal\'s, trustee\'s, etc.) with insurable title as determined by the title company indicated on the contract. A customary owner\'s title insurance policy is issued for each property.',
                'Yes. However, the terms of sale which are stipulated in the contract will still apply. Specifically, that the insurable title as prepared and offered by the indicated title company shall be the standard agreed to and accepted by the parties for conveyance and that the buyer shall pay all costs already incurred and required by that title/closing company. Therefore, you may use your own title company to close the transaction, but you may still be responsible for some costs incurred by the original title company.',
                'All properties are auctioned subject to seller confirmation (a reserve auction) unless otherwise disclosed as absolute or without reserve. Properties sold subject to seller confirmation or reserve may not have a published reserve value, and the high bid is simply subject to seller approval. Properties auctioned absolute or without reserve have no reserve value and the property will sell to the high bidder on auction day.',
                'Yes. However, the properties are being sold without contingencies, "Cash, As Is, Where Is" so you should be pre-qualified by a lender as to the amount you can afford to spend for a property being sold for "Cash, As Is, Where Is."',
                'An auction provides a clean, time definite, exchange between the parties and traditionally allows the buyer to minimize the number of intermediaries separating him/her from the seller. Although as the auctioneer Williams & Williams represents the seller, we have the responsibility to treat all parties fairly and in accordance with real estate law. If a buyer feels more comfortable having representation at an auction, s/he is welcome to have an agent register the buyer as a client, attend the auction, and assume the role of a buyer\'s agent.',
                'If you are the high bidder on a property selling absolute or without reserve that means there is no reserve value and the high bid is the sale price. If a property is not being marketed as absolute or sells without reserve the high bid is subject to seller confirmation or approval. For properties subject to seller approval, the high bid is irrevocable for a period of 14 calendar days.',
                'In this method of auction, bidders compete for the right to choose first from a pool of similar properties. The high bidder may choose one, some or all of the like properties offered. If the high bidder chooses multiple properties, then the high bid is multiplied by the number of properties the high bidder chose. If the high bidder takes less than all of the properties, then the bidding begins again and the subsequent high bidder now wins the right to choose first.', 'Yes. All down payment funds are deposited in less than 24 hours of the auction if the property is selling absolute or without reserve, and within 24 hours of acceptance on all properties sold subject to seller confirmation (unless otherwise required by statute), so you should transfer funds into your checking account prior to the sale (if a sale is not approved, down payment is immediately returned).',
                'Some sellers will allow us to alert you when the bidding has reached their reserve price. If the bidding is below the seller\'s reserve, the message Reserve Not Met will appear. Once the bidding meets or exceeds the seller\'s reserve, this message will change to Reserve Met. Bids above the reserve will continue to be accepted until the time the auction is scheduled to close. Meeting a seller reserve does not automatically ensure seller acceptance, as legal, regulatory, or seller requirements may prohibit conveyance of the property.'
            ],
            live_online_questions: ['When do listings appear on the website?', 'How do I find available properties?', 'I found a property,now what?', 'Why do I need to join Auction Network to bid?', 'What\'s involved in registering?', 'How do I bid?', 'Bidder Deposit', 'What\'s the difference between a current bid and a proxy bid', 'Can I place a bid as time is expiring?', 'What do I do if I need help?', 'What happens if I am the high bidder online?', 'How can I find results on properties already auctioned?'],
            live_online_answers: ['Live Online properties, meaning they are only available to our Internet bidders, are posted on auctionnetwork.com 25 to 30 days prior to the start of bidding. This allows time for property research, inspections and time to get financing in order.', 'Properties can be located by going to our home page, clicking on the "Real Estate Auction" tab and dropping down to the "Online Only" option. If you already know the address of the property you\'re interested in viewing, you can also type it into our smart search window. The Auction Mart™ page lists all the properties currently available during that month\'s sales cycle. Properties are grouped by state and also listed individually in the drop-down box next to each state listing. Want to see all the properties for sale in a certain state? Simply click the orange state link. Each property is displayed along with the nominal opening bid amount and start/end dates. You can also refine the search using the property types option on the left side of the screen.',
                'Once you\'ve located a property in the Auction Mart™, you\'ll be taken to a property details page. There you will find photos, information, terms and other useful tools such as "Add to My Favorites," "Add to Calendar," "Send to a Friend" or "Register."Like a shopping cart, "Add to My Favorites" will add the property to the "Favorite Properties" section in your personalized Auction Network account. Want to be reminded to check back later? Just utilize the "Add to Calendar" feature and you\'ll be able to download an .ics file that can be synchronized with your computer\'s calendar or mail client so that you are notified as the sale approaches.For those who like to get second opinions from the BFFs or maybe found a property they know would be just what the mother-in-law needs to have her own place (and get her out of yours), click the "Send to a Friend" link.', 'To place a bid, you\'ll first have to join the Auction Network. After all we can\'t work with you if we don\'t know who you are, right? Signing up is simple and free. Click on the "Sign In/Create Account" option at the top of the page and give us some basic information. By creating the account you\'ll be able to save your searches and favorite properties and stay in the know about auctions of interest to you. Your information will be kept confidential.',
                'Now that you\'re a member, click the "Register" button to accept the terms and conditions associated with the property. If interested in other properties you can also accept those terms from this same page. Since we won\'t be in your living room or office to collect down payments when you become the high bidder, we\'ll need you to enter credit card information and agree to a couple more statements and click "Submit." At this time, a hold will be placed on your credit card for the amount of $2,500 per 10 properties. This hold is automatically released if you are not the high bidder for any of the properties you have selected for bidding. The name on your credit card must match the profile information. Once you see the green "Already Registered" button appear on the property details page, you can rest easy knowing you\'re now registered and ready to bid when the auction begins.',
                'You can\'t place a bid in advance of the auction opening to everyone. When the auction starts, you can enter your bid in one of two places on our website. During Live On Location broadcast days, the area below the main video window displays Online Only auctions getting ready to expire the soonest along with the time remaining. Open one, two, three … heck all the Online Only auction widgets and place them on your screen so you can receive more details and keep up with the bidding. The Live On Location host will also be monitoring Online Only auctions and will periodically provide information on which auctions are getting close to ending and who is in the lead. The Online Only auctions are also listed on the right side of the home page. Or you can return to the property details page and click the "Place Bid" tab. Either way, enter your bid by typing that amount in the "Your Maximum Bid" field. You will be asked to confirm the amount. The amount can either be a current bid or a proxy bid.',
                'Most property auctions will require a $2,500 bid deposit to enable online bidding. This will allow you to bid on 1 to 10 properties. Your deposit increases $2,500 for every subsequent 10 properties you choose during your bidder registration. When you select the property(s) you wish to bid on at registration, you will also be asked to provide a credit card. Registration will put a hold on your credit card until after all auctions you have selected have ended. If you are not a high bidder on any of these auctions, we will release the hold within two business days (please note your bank may require longer to execute the release). If you are the high bidder, the hold will stay in place until after we receive your signed purchase contract and required down payment funds. Your bid deposit cannot be applied or credited to your down payment. If you still have auctions associated with your bidder deposit, the hold will not be released until those auctions have ended. If you do not have a credit card to place a bid deposit, you may wire transfer your funds. You can receive wiring instructions by calling 800.801.8003. Please note that if you choose to wire funds, the cost to wire return the funds to your account at the conclusion of the auction(s) will be deducted from these funds.',
                'A current bid is what you are prepared to pay right then and there. You will be required to beat the current high bid based on the increments. With a proxy bid you can place the maximum amount you are willing to pay for the property. For example, if the current bid is $10,000 (with $1,000 bidding increments) and you\'re willing to pay a total of $30,000, you\'d enter $30,000 into the system and your bid would be shown as $11,000. Auction Network\'s proprietary software will then automatically bid for you each time you\'re outbid up to a maximum of $30,000. If the auction ends and you have the high bid of $20,000, you\'re only on the hook for $20,000; not $30,000. Make sense? You will be notified by our automated system when and if you are out bid.', 'Yes. To ensure fairness, our system automatically extends the auction ending time by three minutes any time the bid price is raised with less than three minutes remaining. This helps eliminate last-second bidders who attempt to snipe the bids.',
                'If you have questions, we have customer service representatives available seven days a week. You can reach them by calling 866.921.2135 or email at customerservice@williamsauction.com.', 'If you do come out on top...congratulations. You\'ll receive a winning bid notification. Expect a call from one of our closing representatives to verify your selected form of payment and walk you through the closing process following seller acceptance.', 'The day a property sells, and for that day only, we will post high bid results on auctionnetwork.com under the "Today\'s Auctioned Results" tab. You can find that tab on the right-hand side of the page. High bid results are only available for the day we are auctioning properties. The amount of the high bid is proprietary information between our buyers and sellers.'
            ],
            live_on_location_questions: ['How do I find the properties up for bid?', 'How can I register to bid?', 'Why do I have to enter my credit card in orrder to register?', 'How do I bid?', 'Bidder Deposit', 'Do I have to bid live during the sale?', 'How do I view the broadcast?', 'What are some tips to ensure successful online viewing and bidding?', 'If I am na agent/broker wanting to represent a buyer, can I earn a commission?', 'What do I do if I need help?', 'What happens if I am the bidder online?', 'How can I find results on properties already auctioned'],
            live_on_location_answers: ['Online catalogs list each property; show pictures and descriptions; and detail what time each property will be up for auction. Catalogs can be found under the "View Our Auction Lineup" link at the top of our home page (auctionnetwork.com). The "Auction Lineup" page lists each day of LFTL broadcasts, Online Only opportunities, as well as FIrst Look Occupied Properties. Click on the Catalog image or the "View Catalog" button to see the available properties. Once you locate a property, click the "Add To Calendar" link and you\'ll be e-mailed when the sale is scheduled to begin.', 'You can either register in advance of the auction or while it\'s taking place. In advance of the auction, click on the green "Register" button found on the catalog page or the Property Detail Page. This will bring up a pop-up window where you can sign in or create an account. Registration will allow you to take full advantage of all the web features including favorite properties, recently viewed properties, customized auction alerts and more. During the Live On Location broadcast, click on the orange "Enable Bidding" button on the home page below the "Properties List" on the right hand side of the page. You will be prompted to either type in an existing username and password or if you are a new bidder, click on the green "Join" button to register.',
                'When bidding online, even for an auction that is simultaneously being conducted on site, a credit card is still needed for the bid deposit requirement. A hold will be placed on your card and released automatically if you are not the high bidder, or when we receive your signed contract and down payment if you are the high bidder.', 'There are two ways to bid. The first way to bid is to participate in the Live auction along with the other people bidding online and on site. When you log onto auctionnetwork.com, you will see a video player on the left side of the screen. A host will be guiding viewers through the bidding process, previewing properties up for bid and directing viewers to auctions. On the right side of the page, viewers will see a section called "Properties List." That is a list of every property up for bid during that day\'s auctions. When an auction session is live, an orange "Live Now" button will appear next to that property within the "Properties List." Clicking on that orange button will redirect you to the live auction. Once you are in a live auction session, you will be able to keep up with the auction via audio from the auctioneer and by following the bid increments in the bidding application. This is located in the bottom right-hand corner of the screen and will keep you updated on the current bid, the asking price and who the high bidder is. This is also where you will place your own bid. If the high bidder is an online viewer, the bidder\'s username will appear in the bidding application. The second way to bid is to place an "Absentee" bid on a property and the auctioneer will bid on your behalf during the live auction. You will need to be logged in and registered for the auction of your choice. Once you\'ve located the property of interest, select the "Place Bid" button and enter in the maximum amount you would like to bid. Make sure to place your maximum bid to avoid being outbid. Our system automatically increases your bid increment until your maximum amount is reached or you become the high bidder for a lower amount If you need immediate assistance when an auction is about to take place, please contact our Auction Services team at 800.801.8003 and someone will be able to help you.', 'Most property auctions will require a $2,500 bid deposit to enable online bidding. This will allow you to bid on 1 to 10 properties. Your deposit increases $2,500 for every subsequent 10 properties you choose during your bidder registration. When you select the property(s) you wish to bid on at registration, you will also be asked to provide a credit card. Registration will put a hold on your credit card until after all auctions you have selected have ended. If you are not a high bidder on any of these auctions, we will release the hold within two business days (please note your bank may require longer to execute the release). If you are the high bidder, the hold will stay in place until after we receive your signed purchase contract and required down payment funds. Your bid deposit cannot be applied or credited to your down payment. If you still have auctions associated with your bidder deposit, the hold will not be released until those auctions have ended. If you do not have a credit card to place a bid deposit, you may wire transfer your funds. You can receive wiring instructions by calling 800.801.8003 . Please note that if you choose to wire funds, the cost to wire return the funds to your account at the conclusion of the auction(s) will be deducted from these funds.',
                'If you are not available to bid live, you can place an absentee bid. Once registered for an auction, locate the property you are interested in. You will see a blank area at the bottom of the screen that allows you to place a bid for the amount you are willing to pay, also known as an absentee bid. During the auction, a clerk will place that bid on your behalf.', 'When you go to auctionnetwork.com during a broadcast, you will be able to watch only or "Enable Bidding." If you simply want to watch a live auction broadcast, you may select the Live Now button without signing in or registering. If you plan on bidding, whether you are registered or not, click on the orange "Enable Bidding" button.', 'Occasionally refresh your browser during the broadcast. This may keep your audio and video feed up to date, and will ensure that your bidding application is at the most current bid. If you lose your video or audio feed during the live broadcast, continue to follow your bidding application. It will be continuously updated. It\'s also good to watch an auction prior to the one you have coming up in order to become familiar with the process and identify any potential issues.', 'Yes! In order to represent your client as an agent/broker, you will need to register on the Preferred Realtor Organization network (pro.williamsauction.com) at least 24 hours prior to the auction. Once you are a registered agent, click on the "Register to Represent a Buyer" link. Next, you will be asked to select the property your buyer is interested in and enter their contact information. If your client is the high bidder, you will earn a commission after they\'ve closed on the property.', 'You can call our Auction Services team at 800.801.8003 and someone will be able to help you.', 'Congratulations! Expect an email within 1 hour containing information to confirm and submit to the closing representative. After that information has been submitted, one of our closing representatives will contact you within 1-2 business days to verify your selected form of payment.', 'The day a property sells, and for that day only, we will post high bid results on auctionnetwork.com under the "Today\'s Auctioned Results" tab. You can find that tab on the right-hand side of the page. High bid results are only available for the day we are auctioning properties. The amount of the high bid is proprietary information between our buyers and sellers.'
            ],
        }
    },
    created() {
        this.showInfo = this.general_auction_questions.map(function () {
            return false;

        });
        this.showOnline = this.live_online_questions.map(function () {
            return false;

        });
        this.showOnLocation = this.live_on_location_questions.map(function () {
            return false;

        });
    },

}
</script>

<style scoped>
.page_title {
    font-family: 'Playfair Display', serif;
    font-weight: 300;
    color: rgb(85, 84, 84);
}

.arrow_down {
    float: right;
}

.response_text {
    display: inline;
}

div.card {
    border-radius: 8px;
}

.slide-enter-active {
    transition: .21s;
}

.slide-enter {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-to {
    opacity: 1;
}

.slide-leave {
    opacity: 1;
}

.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>
