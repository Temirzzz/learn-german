<template>
  <div>
    <v-card color="accent" class="white-text">
      <v-card-title primary-title class="headline">{{
        part.title
      }}</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat class="primary">Открыть</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "pp-book-list-item",
  props: {
    part: {
      type: Object,
      required: true,
    },
    bookId: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
