import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    weatherId:'',
  },
  getters:{
    weatherId: state => state.weatherId
  },
  mutations:{
    updateWeatherID(state,payload){
      state.weatherId  = payload.weatherId
    }
  },
  actions:{
    getWeatherID(action,payload){
      action.commit('updateWeatherID',payload)
    }
  }
});

export default store;
