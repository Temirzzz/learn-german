import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BooksView from "@/views/BooksView.vue";
import SigninView from "@/views/SigninView.vue";
import SignupView from "@/views/SignupView.vue";
import WordsView from "@/views/WordsView.vue";
import ProfileView from "@/views/ProfileView.vue";
import store from "@/store";

Vue.use(VueRouter);

function authGuard(from, to, next) {
  if (store.getters.getUserAuth) {
    next();
  } else {
    next("login");
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "signin-view",
    component: SigninView,
  },
  {
    path: "/signup",
    name: "signup-view",
    component: SignupView,
  },
  {
    path: "/words",
    name: "words-view",
    component: WordsView,
  },
  {
    path: "/books",
    name: "books-view",
    component: BooksView,
  },
  {
    path: "/profile",
    name: "profile-view",
    component: ProfileView,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
