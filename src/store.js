import Vuex from "vuex";
import Vue from "vue";
import Axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: null
  },

  getters: {
    getData: (state) => {
      return state.list;
    },
    getCountData: (state) => {
        return state.list
    }
  },

  mutations: {
    setData(state, data) {
      state.list = data
    },
  },

  actions: {
    getDatas(context) {
      return new Promise((resolve, reject) => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
          context.commit('setData', response.data)
          resolve(response.data)
        }).catch((err) => {
          reject(err.message)
        })
      })
    },
  },
});
