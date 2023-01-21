import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { firebaseConfig } from "./config/firebase";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import VuetifyConfirm from "vuetify-confirm";

initializeApp(firebaseConfig);
const auth = getAuth();

Vue.config.productionTip = false;

Vue.use(vuetify);
Vue.use(VuetifyConfirm, {
  vuetify: new vuetify(),
  buttonTrueText: "Да",
  buttonFalseText: "Нет",
  width: 350,
});

new Vue({
  vuetify: new vuetify({}),
  router,
  store,
  render: (h) => h(App),
  created() {
    onAuthStateChanged(auth, (user) => {
      this.$store.dispatch("STATE_CHANGED", user);
    });
  },
}).$mount("#app");
