<template>
  <v-card class="ma-2">
    <v-flex>
      <v-img :src="dog.url"></v-img>
    </v-flex>
    <v-card-title primary-title>
      {{ dog.comment }}
    </v-card-title>
    <v-card-text>
      {{ dog.info }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    dogProp: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dog: this.dogProp,
    };
  },
};
</script>

<style>
</style>