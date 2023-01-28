<template>
  <v-container my-16 my-md-8 my-xs-4 grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2 class="mb-8">
        <v-container fluid>
          <v-layout row>
            <v-flex xs7 md8>
              <v-text-field
                label="Поиск"
                hide-details="auto"
                v-model="searchQuery"
              />
            </v-flex>
            <v-flex xs5 md4>
              <v-select
                label="Уровень"
                v-model="level"
                :items="levels"
                multiple
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex
        v-for="book in searchedAndFilteredBooks"
        :key="book.id"
        xs12
        sm10
        md8
        offset-sm1
        offset-md2
      >
        <app-books-item :bookProp="book" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppBooksItem from "@/components/AppBooksItem.vue";
export default {
  components: {
    AppBooksItem,
  },
  data() {
    return {
      searchQuery: "",
      level: [],
      levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    };
  },
  computed: {
    books() {
      return this.$store.getters.getBooks;
    },
    searchedBooks() {
      return this.books.filter(
        (book) =>
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          book.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      );
    },
    searchedAndFilteredBooks() {
      let books = this.searchedBooks;
      if (this.level.length)
        return books.filter(
          (book) =>
            this.level.filter((val) => book.level.indexOf(val) !== -1).length >
            0
        );
      return books;
    },
  },
};
</script>

<style lang="scss" scoped></style>
