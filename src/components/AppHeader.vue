<template>
  <v-card class="overflow-hidden">
    <v-app-bar color="teal" dark fixed app>
      <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        class="hidden-md-and-up"
      >
        <v-list nav dense>
          <v-list-item-group active-class="teal--text ">
            <v-list-item
              v-for="button in menuItems"
              :key="button.id"
              :to="button.route"
            >
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="button.icon"></v-icon>
                </v-list-item-icon>
                {{ button.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-toolbar-title v-text="'App'"></v-toolbar-title>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-show="$vuetify"
          text
          v-for="button in menuItems"
          :key="button.id"
          :to="button.route"
        >
          <v-icon left v-text="button.icon"></v-icon>
          {{ button.title }}
        </v-btn>
        <v-btn @click.prevent="signout" text v-if="isUserAuth">
          <v-icon left>mdi-account-cowboy-hat</v-icon>
          Выйти
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    signout() {
      this.$confirm("Вы действительно хотите выйти?").then((res) => {
        // console.log(res);
        if (res === true) this.$store.dispatch("SIGN_OUT");
        this.$router.push("/", () => {});
      });
    },
  },
  computed: {
    isUserAuth() {
      return this.$store.getters.getUserAuth;
    },
    menuItems() {
      return this.isUserAuth
        ? [
            {
              id: 1,
              icon: "mdi-book-open-page-variant",
              title: "Читать",
              route: "/books",
            },
            {
              id: 3,
              icon: "mdi-account-badge",
              title: "Кабинет",
              route: "/profile",
            },
          ]
        : [
            {
              id: 1,
              icon: "mdi-book-open-page-variant",
              title: "Читать",
              route: "/books",
            },
            {
              id: 5,
              icon: "mdi-lock-open",
              title: "Зарегистрироваться",
              route: "/signup",
            },
            {
              id: 4,
              icon: "mdi-account-cowboy-hat",
              title: "Войти",
              route: "/login",
            },
          ];
    },
  },
};
</script>

<style lang="scss" scoped></style>
