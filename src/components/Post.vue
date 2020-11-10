<template>
  <v-container column-xs>
    <v-layout column>
      <v-flex class="mx-auto">
        <div id="spinner">
          <v-progress-circular
            v-if="loading"
            indeterminate
            color="blue"
            class="spinner"
          ></v-progress-circular>
          <v-img :src="this.dogPic"></v-img>
        </div>
      </v-flex>

      <v-container fluid style="min-height: 0" grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
              v-model="title"
              name="title"
              label="Describe the doggo"
              id="title"
            />
            <v-text-field
              v-model="author"
              name="author"
              label="Author"
              hint="how they call You"
              id="author"
            />
            <v-btn class="my-3" block color="primary" @click="post()">
              POST A DOG
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Post",
  data() {
    return {
      loading: false,
      title: "",
      author: "",
      dogPic: "",
    };
  },
  methods: {},
  mounted() {
    this.loading = true;
    axios
      .get("https://dog.ceo/api/breed/appenzeller/images/random")
      .then((res) => {
        console.log(res);
        this.dogPic = res.data.message;
        this.loading=false
      })
      .catch((err) => console.log(err));
  },
};
</script>
<style lang="scss">
#title{
    color:black
}
#author {
    color:black
}
</style>