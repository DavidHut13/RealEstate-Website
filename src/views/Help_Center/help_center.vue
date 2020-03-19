<template>
<b-container>
     <b-row>
          <b-col class="text-center">
               <h1 class="mt-5 mb-3 page_title text-center">HELP CENTER</h1>
               <b-col cols="8" offset="2">
                    <hr>
               </b-col>
               <b-row>
                    <b-col cols="10" offset="1" sm="10" offset-sm="1" md="8" offset-md="2" lg="5" offset-lg="1" xl="4" offset-xl="0" class="my-5">
                         <b-card>
                              <h2 class="section_title">Auction 101</h2>
                              <img src="/img/help_center/auction-101-icon.png" class="m-2">
                              <hr>
                              <p class="text-left">Never bought real estate using auction before? Learn about how real estate auction works and even print an auction check list for your next property.</p>
                              <div class="text-right">
                                   <router-link class="learn_link " to="/auction_101">
                                        <h2 class="learn_more mt-4 text-right">Learn More <i class="orange fas fa-arrow-circle-right"></i></h2>
                                   </router-link>
                              </div>
                         </b-card>
                    </b-col>
                    <b-col cols="10" offset="1" sm="10" offset-sm="1" md="8" offset-md="2" lg="5" offset-lg="1" xl="4" offset-xl="0" class="my-5">
                         <b-card>
                              <h2 class="section_title">FAQs</h2>
                              <img src="/img/help_center/faq-icon.png" class="m-2">
                              <hr>
                              <p class="text-left">You may have a lot of questions about auction, but don't worry, so do many other bidders! Here are our most frequently asked questions, with answers.</p>
                              <div class="text-right">
                                   <router-link class="learn_link " to="/faq">
                                        <h2 class="learn_more mt-4 text-right">Learn More <i class="orange fas fa-arrow-circle-right"></i></h2>
                                   </router-link>
                              </div>
                         </b-card>
                    </b-col>
                    <b-col cols="10" offset="1" sm="10" offset-sm="1" md="8" offset-md="2" lg="5" offset-lg="1" xl="4" offset-xl="0" class="my-5">
                         <b-card>
                              <h2 class="section_title">Tech Support</h2>
                              <img src="/img/help_center/tech-icon.png" class="m-2">
                              <hr>
                              <p class="text-left">Having trouble with our website or mobile site? Run a software check or get in contact with our knowledgable IT team to solve any technical issues.</p>
                              <div class="text-right">
                                   <router-link class="learn_link " to="/tech_support">
                                        <h2 class="learn_more mt-4 text-right">Learn More <i class="orange fas fa-arrow-circle-right"></i></h2>
                                   </router-link>
                              </div>
                         </b-card>
                    </b-col>
                    <b-col cols="10" offset="1" sm="10" offset-sm="1" md="8" offset-md="2" lg="5" offset-lg="1" xl="4" offset-xl="0" class="my-5">
                         <b-card>
                              <h2 class="section_title">Get to Know Us</h2>
                              <img src="/img/help_center/about-icon.png" class="m-2">
                              <hr>
                              <p class="text-left">Auction Network is a 24-hour network that merges live auction with online, real time bidding from anywhere in the world. Find out more about us here.</p>
                              <div class="text-right">
                                   <router-link class="learn_link " to="/get_to_know_us">
                                        <h2 class="learn_more mt-4 text-right">Learn More <i class="orange fas fa-arrow-circle-right"></i></h2>
                                   </router-link>
                              </div>
                         </b-card>
                    </b-col>
                    <b-col cols="10" offset="1" sm="10" offset-sm="1" md="8" offset-md="2" lg="5" offset-lg="1" xl="4" offset-xl="0" class="my-5">
                         <b-card>
                              <h2 class="section_title">Contact</h2>
                              <img src="/img/help_center/contact-icon.png" class="m-2">
                              <hr>
                              <p class="text-left">Do you have more questions or need to contact us about a property? Give us a call or send us an email, and we'll be sure to get all the answers you need.</p>
                              <div class="text-right">
                                   <router-link class="learn_link " to="/contact">
                                        <h2 class="learn_more mt-4 text-right">Learn More <i class="orange fas fa-arrow-circle-right"></i></h2>
                                   </router-link>
                              </div>
                         </b-card>
                    </b-col>
                    <b-col cols="10" offset="1" sm="10" offset-sm="1" md="8" offset-md="2" lg="5" offset-lg="1" xl="4" offset-xl="0" class="my-5">
                         <b-card>
                              <h2 class="section_title">Corporate</h2>
                              <img src="/img/help_center/partners-icon.png" class="m-2">
                              <hr>
                              <p class="text-left">We can't take all the credit for our success. Our clients, business partners, auctioneers & individual sellers made this possible. Find out who they are here.</p>
                              <div class="text-right">
                                   <router-link class="learn_link " to="/corporate">
                                        <h2 class="learn_more mt-4 text-right">Learn More <i class="orange fas fa-arrow-circle-right"></i></h2>
                                   </router-link>
                              </div>
                         </b-card>
                    </b-col>
               </b-row>
          </b-col>
     </b-row>
</b-container>
</template>

<script>
export default {
     name: "help_center",
     data() {
          return {

          }
     }
}
</script>

<style scoped>
.page_title,
.section_title {
     font-family: 'Playfair Display', serif;
     color: rgb(85, 84, 84);
}

.section_title {
     font-family: 'Roboto', sans-serif;
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

.orange {
     color: rgb(255, 138, 28);
}

p {
     font-family: 'Roboto', sans-serif;
}

div.card {
     -webkit-box-shadow: 0px 0px 20px -9px rgba(0, 0, 0, 0.2);
     -moz-box-shadow: 0px 0px 20px -9px rgba(0, 0, 0, 0.2);
     box-shadow: 0px 0px 20px -9px rgba(0, 0, 0, 0.2);
     border-radius: 10px;
     border: none;
}
</style>
