import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BooksView from "@/views/BooksView.vue";
import SigninView from "@/views/SigninView.vue";
import SignupView from "@/views/SignupView.vue";
import WordsView from "@/views/WordsView.vue";
import ProfileView from "@/views/ProfileView.vue";
import BookView from "@/views/BookView";
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
    name: "signin",
    component: SigninView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/words",
    name: "words",
    component: WordsView,
  },
  {
    path: "/books",
    name: "books",
    component: BooksView,
  },
  {
    path: "/book/:id",
    name: "book",
    props: true,
    component: BookView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
