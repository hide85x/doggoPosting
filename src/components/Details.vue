<template>
  <v-card class="ma-2">
    <v-flex>
      <v-img id="img" :src="findDog.url"></v-img>
    </v-flex>
    <v-card-title primary-title>
      {{ findDog.comment }}
    </v-card-title>
    <v-card-text>
      {{ findDog.info }}
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  //   props: {
  //     dogProp: {
  //       type: Object,
  //       required: true,
  //     },
  //   },
  data() {
    return {
      dogId: parseInt(this.$route.params.id),
    };
  },
  methods:{
...mapActions(['FETCH_DOGS'])

  },
   mounted(){
    this.$store.dispatch('FETCH_DOGS')
  },
  computed: {
    ...mapGetters(["getDogs"]),

    findDog() {
      console.log(this.dogId)
      let result = this.getDogs.filter((e) => e.id == this.dogId);
      this.dog = result[0];
      console.log(this.dog)
      return result[0];
    },
  },
};
</script>

<style lang="scss">
#img {
  height: 500px;
}
</style>