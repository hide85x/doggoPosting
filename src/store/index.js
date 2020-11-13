import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: [ ]
  },
  getters: {
    getDogs(state){
      return state.dogs
    }
  },
  mutations: {
    addDog(state, payload){
      state.dogs.push(payload)
    },
    setDogsFb(state, payload) {
      state.dogs= payload
    }

  },
  actions: {
    ADD_DOG({commit}, payload) {
      commit('addDog', payload)
    },
    FETCH_DOGS({commit}){
      db.collection('dogs')
        .orderBy('createdAt')
        .onSnapshot(res => {
          let dogoList= []
          res.forEach(doc => {
            dogoList.push(doc.data())
          })
          console.log(dogoList)
          commit('setDogsFb', dogoList)
        })
    },
 

  },
  modules: {
  }
  
})


