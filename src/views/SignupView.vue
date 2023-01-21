<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <h1 class="my-16">Регистрация</h1>
        <v-form class="mb-5" v-model="valid">
          <v-text-field
            v-model.trim="email"
            :rules="emailRules"
            label="E-mail"
            required
            type="email"
          ></v-text-field>
          <v-text-field
            v-model.trim="password"
            :rules="passwordRules"
            label="Password"
            required
            type="password"
          ></v-text-field>
          <v-btn
            :disabled="processingHandler || !valid"
            color="warning"
            @click.prevent="registrHandler"
            >Зарегистрироваться</v-btn
          >
        </v-form>
        <v-alert dense type="warning" :value="errorHandler">
          {{ errorHandler }}
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      password: null,
      email: null,
      emailRules: [
        (v) => !!v || "Введите Email",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Не правильный Email",
      ],
      passwordRules: [
        (v) => !!v || "Введите пароль",
        (v) => (v && v.length >= 6) || "Слишком короткий пароль",
      ],
      valid: false,
    };
  },
  methods: {
    registrHandler() {
      if (!this.email || !this.password) return;
      this.$store.dispatch("SIGNUP", {
        // this is payload
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    errorHandler() {
      return this.$store.getters.getError;
    },
    isUserAuth() {
      return this.$store.getters.getUserAuth;
    },
    processingHandler() {
      console.log(this.$store.getters.getIsProcessing);
      return this.$store.getters.getIsProcessing;
    },
  },
  watch: {
    isUserAuth(val) {
      if (val === true) {
        // this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
