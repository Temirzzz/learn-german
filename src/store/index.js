import Vue from "vue";
import Vuex from "vuex";
import userModule from "./userModule";
import generalModule from "./generalModule";
import booksModule from "./booksModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule,
    general: generalModule,
    books: booksModule,
  },
});
