<template>
  <v-card color="info" class="white--text">
    <v-container fluid>
      <v-layout>
        <v-flex xs4 md3>
          <v-img
            height="150px"
            src="https://img4.labirint.ru/rc/6f46c1f41f9891b4b815dd54b701ad1a/363x561q80/books27/260500/cover.jpg?1308918298"
          />
          <div class="text-xs-center mt-1">
            <v-btn text color="white">
              <v-icon left>mdi-desktop-mac</v-icon> <small>YouTube</small>
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs8 md9 pa-2>
          <div>
            <h3 class="mb-4">
              {{ bookProp.title }}
            </h3>
            <v-divider class="white mb-4"></v-divider>
            <div>{{ bookProp.description }}</div>

            <div>
              Уровень: {{ getBookLevel(bookProp.level) }}
              {{ bookProp.parts.length }} частей
            </div>
          </div>
          <v-card-actions style="flex-wrap: wrap">
            <v-rating
              v-model="mutableBookProp.raiting"
              color="amber"
              dense
              half-increments
              readonly
              size="18"
            />
            <div class="ml-1">
              <small>{{ bookProp.raiting }}</small> /
              <small>{{ bookProp.raitingCount }}</small>
            </div>
            <v-spacer></v-spacer>
            <v-btn
              class="primary"
              text
              :to="{ name: 'book', params: { id: bookProp.id } }"
              >Открыть</v-btn
            >
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import * as bookLevel from "@/helpers";
export default {
  name: "app-books-item",
  props: {
    bookProp: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mutableBookProp: this.bookProp,
    };
  },
  methods: {
    // при импорте функции из helper, необходимо ее замепить
    getBookLevel: bookLevel.bookLevel,
  },
};
</script>

<style lang="scss" scoped></style>
