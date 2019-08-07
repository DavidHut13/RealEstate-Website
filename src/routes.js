import Vue from 'vue'
import Home from './views/Home.vue'
import buy from './views/Buy/buy'
import auction from './views/auction'
import card from './components/card.vue'
import BuyTable from './views/Buy/BuyTable.vue'
import BuyUSMap from './views/Buy/BuyUSMap.vue'
import Upcoming_Auctions from './views/Upcoming_Auctions.vue'
import sell from './views/Sell.vue'
import video from './views/Video.vue'
import help_center from './views/Help_Center/help_center.vue'
import auction_101 from './views/Help_Center/auction_101.vue'
import faq from './views/Help_Center/faq.vue'
import tech_support from './views/Help_Center/techSupport.vue'
import contact from './views/Help_Center/contact.vue'
import corporate from './views/Help_Center/corporate.vue'
import about_us from './views/Help_Center/get_to_know_us.vue'
import get_to_know_us from './views/Help_Center/get_to_know_us.vue'

export const routes =
  [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },

    {
      path: '/auction',
      name: 'auction',
      component: auction
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/BuyTable',
      name: 'BuyTable',
      component: BuyTable
    },
    {
      path: '/BuyUSMap',
      name: 'BuyUSMap',
      component: BuyUSMap
    },
    {
      path: '/Upcoming_Auctions',
      name: 'Upcoming_Auctions',
      component: Upcoming_Auctions
    },
    {
      path: '/sell',
      name: 'sell',
      component: sell
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/help_center',
      name: 'help_center',
      component: help_center
    },
    {
      path: '/auction_101',
      name: 'auction_101',
      component: auction_101
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    },
    {
      path: '/tech_support',
      name: 'tech_support',
      component: tech_support
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/corporate',
      name: 'corporate',
      component: corporate
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: about_us
    }, 
    {
      path: '/get_to_know_us',
      name: 'get_to_know_us',
      component: get_to_know_us
    },
];
