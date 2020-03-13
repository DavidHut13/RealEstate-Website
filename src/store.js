import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    propertyData:[],
    mapMarkers:[],

  },
  mutations: {
setPropertyList(state,properties){
  state.propertyData = properties;
},
setMarkers(state,markers){
  state.mapMarkers = markers;
}
  },
  getters: {
    getPropertyList(state){
      return state.propertyData
    },
    getMapMarkers(state){
      return state.mapMarkers;
    }
  }
})
