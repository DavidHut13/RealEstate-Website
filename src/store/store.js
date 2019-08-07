import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentPlace: Object
    },
    getters:{
        getCurrentPlace: state => {
            return state.currentPlace;
        }
    },
    mutations:{
        changeCurrentPlace: (state, place) => {
            state.currentPlace = place;
        }
    },
    actions:{
        commitCurrentPlace (context,place){
            context.commit('changeCurrentPlace',place)
        }

    }


});

