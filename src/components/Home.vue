<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex v-for="(dog) in dogs" :key="dog.id" xs12 md6 xl3 pa-2>
        <v-card
          class="elevation-21"
          @click="
            $router.push({
              name: 'details',
              params: { id: dog.id, },
            })
          "
        >
          <v-img height="170" :src="dog.url" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title style="padding-top: 13px">
            {{ dog.comment }}
          </v-card-title>

          <v-card-text>
            {{ dog.info }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
        <v-fab-transition>
          <v-btn
            @click="$router.push('/post')"
            color="blue"
            fixed
            dark
            bottom
            right
            fab
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['FETCH_DOGS'])
  },
  created(){
    this.$store.dispatch('FETCH_DOGS')
  },
  computed: {
    ...mapGetters(["getDogs"]),
    dogs(){
      console.log(this.getDogs)
        return this.getDogs
    }
  },
};
</script>