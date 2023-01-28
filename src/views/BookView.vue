<template>
  <v-container grid-list-md v-if="book">
    <v-layout row wrap>
      <v-flex xs12 md10 offset-sm1>
        <app-book-deatil :book="book" />
      </v-flex>
      <v-flex v-for="part in book.parts" :key="part.id" xs12 md10 offset-sm1>
        <app-book-list-item :part="part" :bookId="book.id" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppBookDeatil from "@/components/AppBookDeatil.vue";
import AppBookListItem from "@/components/AppBookListItem.vue";
export default {
  name: "BookView",
  components: { AppBookDeatil, AppBookListItem },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    book() {
      return this.$store.getters.getBooks.find((book) => book.id == this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
