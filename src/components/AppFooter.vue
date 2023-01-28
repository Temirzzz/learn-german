<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="primary">
        <strong class="subheading">Мы в социальных сетях!</strong>
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon.id" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Tmzzz</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { id: 1, icon: "mdi-alien-outline" },
        { id: 2, icon: "mdi-fruit-watermelon" },
        { id: 3, icon: "mdi-sync" },
        { id: 4, icon: "mdi-cog" },
      ],
    };
  },
  name: "app-footer",
};
</script>

<style lang="scss" scoped></style>
