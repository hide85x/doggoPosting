import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'

import firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';
require("firebase/firestore");

let firebaseConfig = {
  apiKey: "AIzaSyDd9Ya9aeGponTNhcvCuNxTpm_9J0imlTs",
  authDomain: "dog-search-notify.firebaseapp.com",
  databaseURL: "https://dog-search-notify.firebaseio.com",
  projectId: "dog-search-notify",
  storageBucket: "dog-search-notify.appspot.com",
  messagingSenderId: "140457057109",
  appId: "1:140457057109:web:e5f7958d59fbbd5e202ddc",
  measurementId: "G-VG53K2YNJR"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

db.enablePersistence({experimentalTabSynchronization:true})

const storage = firebase.storage()
window.db= db
window.storage= storage

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
