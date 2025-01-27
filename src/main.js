import '@babel/polyfill'
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import BootstrapVue from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';
import * as VueGoogleMaps from 'vue2-google-maps'
import store from './store'


Vue.use(VueCarousel);
Vue.use(BootstrapVue, {
    breakpoints: [`cols`, 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
})

Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_Google_KEY,
        libraries: 'places', // This is required if you use the Autocomplete plugin
    },
})

Vue.filter('formatBid', function(val) {
    if (val) {
        var num = parseFloat(val);
        return "$" + num.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }
    else{
        return "$" + 0;
    }
})

export const EventBus = new Vue();

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.filter('formatBid', function(val) {
    if (val) {
        var num = parseFloat(val);
        return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')