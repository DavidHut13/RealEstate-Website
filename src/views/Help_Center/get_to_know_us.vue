<template>
<b-container>
    <b-row>
        <b-col cols="12" class="text-center">
            <h1 class="mt-5 mb-2 page_title text-center">Get To Know Us</h1>
             <b-col cols="8" offset="2">
                <hr>
            </b-col>
            <b-img fluid class="rounded shadow mt-3" src="/img/help_center/Get-to-know-us/office.png"></b-img>
        </b-col>
        <b-col cols="12"  md="12" offset-md="0" lg="6" offset-lg="3" >
            <h3 class="mt-5 mb-3 green">About Auction Network</h3>
            <p >Auction Network is a 24-hour, global, broadband television network that merges the sport and spirit of live auction with the ability for the audience to not only watch but also engage in the thrill of bidding, in real-time, from anywhere in the world through the Internet.
                Created in 2007, Auction Network has definitively dispelled myths about consumers' fears around purchasing high-value real estate assets instantaneously with the click of a button. Auction Network partners with its sister company, Williams & Williams Worldwide Auctioneers to feature global, real-time bidding simultaneously with on-site real estate sales, delivering up to a 16% average lift in high bid performance for all assets.
                In addition, Auction Network not only delivers live, high-energy entertainment, but also provides viewers an inside look at what's for sale; exclusive previews with sellers, local authorities and others who help add to the back story; history and emotional stories behind the auction items; and live tours of the region where the auction is held.
            </p>
            <div class="text-right mt-5 mb-3">
                <router-link class="learn_link " to="/corporate">
                    <h2 class="learn_more mt-4 text-right">Corporate <i class="orange fas fa-arrow-circle-right"></i></h2>
                </router-link>
            </div>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'get_to_know_us',
    data() {
        return {

        }
    }

}
</script>

<style scoped>
.page_title {
    font-family: 'Playfair Display', serif;
    font-weight: 300;
    color: rgb(85, 84, 84);
}

.learn_link:hover {
    text-decoration: none;
}

.learn_more {
    color: rgb(85, 84, 84);
    display: inline;
    font-family: 'Roboto', sans-serif;

}
.green{
    color: #74BE01;
}
.orange {
    color: rgb(255, 138, 28);
}
</style>
